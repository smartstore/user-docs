---
icon: circle-exclamation
---

# Troubleshooting

## The query processor encountered an unexpected error during execution (HRESULT = 0x80040e19)

May occur during data exchange. Other error message could be "_Internal error. The string routine in file ...dstream.cpp (or dumplog.cpp), line 123 failed with HRESULT 0x8007007a_". Database requires a "repair". Solution:

* Turn database to single-user mode (see **Properties > Options**).
* Execute: `DBCC CHECKDB ('Name of my database', Repair_ALL)`.
* Turn back database to multi-user mode.

## Cache löschen

Sollten Sie ein Problem mit Ihrem Shop haben, kann es oftmals mit der Bereinigung des Caches behoben werden. Versuchen Sie daher als erstes den [Cache zu löschen](../smartstore-6-dokumentation-startseite/benutzer-handbuch/system-wartung/cache-bereinigen.md).

## Vermehrte Angriffe durch Bots / DDoS - Nutzung von Cloudflare

Um vermehrte Angriffe durch Bots oder Distributed-Denial-of-Service-(DDoS)-Angriffe zu verhindern, empfiehlt es sich, Cloudflare zu aktivieren. Cloudflare bietet eine leistungsstarke Schutzschicht, die den Traffic filtert und schädliche Anfragen blockiert.

### Caching bei Cloudflare konfigurieren

Bei aktivierter Cloudflare-Nutzung muss das Caching korrekt konfiguriert werden, um Darstellungsprobleme zu vermeiden. Standardmäßig kann Cloudflare CSS- und andere statische Dateien zwischenspeichern, was dazu führen kann, dass Änderungen nicht sofort sichtbar sind. Dies kann zu veralteten Designs oder inkorrekten Darstellungen auf der Website führen.

Um dieses Problem zu vermeiden, deaktivieren Sie das Caching für bestimmte Inhalte:

1. Navigieren Sie in der Cloudflare-Konsole zu **Regeln > Cache Rules**.
2. Erstellen Sie eine Regel mit der Einstellung **"Cache für alle umgehen"**.
3. Speichern Sie die Regel, um sicherzustellen, dass CSS-Dateien (und ggf. weitere Inhalte) nicht zwischengespeichert werden.

![](../.gitbook/assets/cloudflare_caching.png)

Mit dieser Konfiguration wird sichergestellt, dass stets die aktuelle Version der Inhalte direkt vom Server geladen wird. Beachten Sie, dass die allgemeine Performance und der Schutz durch Cloudflare dabei nicht beeinträchtigt werden.

### Automatisierte Aufgaben zulassen

Um zu verhindern, dass Cloudflare die automatisierten Aufgaben von Smartstore blockiert, müssen die beiden folgenden URLs unverändert durchgeleitet werden:

* https://www.meinstore.com/taskscheduler/poll
* https://www.meinstore.com/taskscheduler

{% hint style="info" %}
Die URL `https://www.meinstore.com` muss durch die Smartstore-URL ersetzt werden.
{% endhint %}

Die nachfolgenden Bilder veranschaulichen die Einrichtung einer URL-Durchleitung durch Cloudflare.

![Cloudflare Caching-Regeln](../.gitbook/assets/troubleshooting_cloudflare_taskscheduler1.png)

![Cloudflare Sicherheitsregeln](../.gitbook/assets/troubleshooting_cloudflare_taskscheduler2.png)

### Echte Client-IP wird nicht erkannt

#### Problem

Nach der Einrichtung von Cloudflare wird im Shop nicht mehr die tatsächliche IP-Adresse des Besuchers erkannt. Stattdessen wird als Remote-Adresse die IP eines Cloudflare-Servers angezeigt.

#### Ursache

Die Standardkonfiguration von Smartstore ist für allgemeine Reverse-Proxy-Szenarien ausgelegt. Sie funktioniert insbesondere dann, wenn sich der Reverse Proxy lokal befindet oder bereits als vertrauenswürdig eingestuft ist.

Da Cloudflare als öffentlicher Reverse Proxy vor dem Shop betrieben wird, übernimmt Smartstore die Client-IP aus den Forwarded-Headern nur, wenn die Cloudflare-IP-Netzwerke explizit als vertrauenswürdig konfiguriert sind. Fehlen diese Einträge unter `ReverseProxy:KnownNetworks`, wird weiterhin die Cloudflare-IP als Remote-Adresse verwendet.

Cloudflare unterstützt zwar den Header `X-Forwarded-For`, empfohlen wird jedoch die Verwendung von `CF-Connecting-IP` als `ForwardedForHeaderName`, da dieser Header eindeutig die ursprüngliche Besucher-IP enthält.

#### Lösung

Erstellen Sie im Web-Ordner einen Unterordner `Config` (falls noch nicht vorhanden) und legen Sie darin die Datei `usersettings.json` an.

```json
{
  "Smartstore": {
    "ReverseProxy": {
      "Enabled": true,

      "ForwardForHeader": true,
      "ForwardProtoHeader": true,
      "ForwardHostHeader": true,
      "ForwardPrefixHeader": false,

      "ForwardedForHeaderName": "CF-Connecting-IP",
      "ForwardedProtoHeaderName": "X-Forwarded-Proto",
      "ForwardedHostHeaderName": "X-Forwarded-Host",
      "ForwardedPrefixHeaderName": null,

      "KnownProxies": null,
      "KnownNetworks": [
        "103.21.244.0/22",
        "103.22.200.0/22",
        "103.31.4.0/22",
        "104.16.0.0/13",
        "104.24.0.0/14",
        "108.162.192.0/18",
        "131.0.72.0/22",
        "141.101.64.0/18",
        "162.158.0.0/15",
        "172.64.0.0/13",
        "173.245.48.0/20",
        "188.114.96.0/20",
        "190.93.240.0/20",
        "197.234.240.0/22",
        "198.41.128.0/17",
        "2400:cb00::/32",
        "2606:4700::/32",
        "2803:f800::/32",
        "2405:b500::/32",
        "2405:8100::/32",
        "2a06:98c0::/29",
        "2c0f:f248::/32"
      ],

      "AllowedHosts": [
        "www.meinshop.com",
        "meinshop.com"
      ],

      "ForwardLimit": null,
      "RequireHeaderSymmetry": false
    }
  }
}
```

{% hint style="warning" %}
Tragen Sie unter `AllowedHosts` die Hostnamen Ihres Shops ein. Bei Multishop-Installationen müssen alle verwendeten Hostnamen aufgeführt werden.
{% endhint %}

{% hint style="info" %}
Rufen Sie für eine stets aktuelle Liste mit bekannten Cloudflare-`KnownNetworks` [https://www.cloudflare.com/ips-v4](https://www.cloudflare.com/ips-v4) bzw. [https://www.cloudflare.com/ips-v6](https://www.cloudflare.com/ips-v6) auf.
{% endhint %}

Nach dem Anlegen der Konfiguration und einem Neustart der Anwendung übernimmt Smartstore die tatsächliche Besucher-IP aus dem `CF-Connecting-IP`-Header, sofern die Anfrage über ein als vertrauenswürdig konfiguriertes Cloudflare-IP-Netz eingeht.
