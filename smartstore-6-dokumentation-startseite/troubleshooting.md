# Troubleshooting

### The query processor encountered an unexpected error during execution (HRESULT = 0x80040e19)

May occur during data exchange. Other error message could be "*Internal error. The string routine in file ...dstream.cpp (or dumplog.cpp), line 123 failed with HRESULT 0x8007007a*". Database requires a "repair". Solution:

- Turn database to single-user mode (see **Properties > Options**).
- Execute: `DBCC CHECKDB ('Name of my database', Repair_ALL)`.
- Turn back database to multi-user mode.

### Cache löschen

Sollten Sie ein Problem mit Ihrem Shop haben, kann es oftmals mit der Bereinigung des Caches behoben werden. Versuchen Sie daher als erstes den [Cache zu löschen](../smartstore-6-dokumentation-startseite/benutzer-handbuch/system-wartung/cache-bereinigen.md).

### Vermehrte Angriffe durch Bots / DDoS - Nutzung von Cloudflare

Um vermehrte Angriffe durch Bots oder Distributed-Denial-of-Service-(DDoS)-Angriffe zu verhindern, empfiehlt es sich, Cloudflare zu aktivieren. Cloudflare bietet eine leistungsstarke Schutzschicht, die den Traffic filtert und schädliche Anfragen blockiert.

#### Caching bei Cloudflare konfigurieren

Bei aktivierter Cloudflare-Nutzung muss das Caching korrekt konfiguriert werden, um Darstellungsprobleme zu vermeiden. Standardmäßig kann Cloudflare CSS- und andere statische Dateien zwischenspeichern, was dazu führen kann, dass Änderungen nicht sofort sichtbar sind. Dies kann zu veralteten Designs oder inkorrekten Darstellungen auf der Website führen.

Um dieses Problem zu vermeiden, deaktivieren Sie das Caching für bestimmte Inhalte:

1. Navigieren Sie in der Cloudflare-Konsole zu **Regeln > Cache Rules**.
2. Erstellen Sie eine Regel mit der Einstellung **"Cache für alle umgehen"**.
3. Speichern Sie die Regel, um sicherzustellen, dass CSS-Dateien (und ggf. weitere Inhalte) nicht zwischengespeichert werden.

![](./attachments/cloudflare_caching.png)

Mit dieser Konfiguration wird sichergestellt, dass stets die aktuelle Version der Inhalte direkt vom Server geladen wird. Beachten Sie, dass die allgemeine Performance und der Schutz durch Cloudflare dabei nicht beeinträchtigt werden.