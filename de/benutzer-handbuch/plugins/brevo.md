# Brevo

Das kostenpflichtige Plugin **Brevo E-Mail-Synchronisierung** verbindet die Smartstore-Newsletterverwaltung mit dem E-Mail-Marketing-Dienst Brevo, vormals Sendinblue. Newsletter-Anmeldungen und -Abmeldungen aus Smartstore werden mit einer ausgewählten Brevo-Kontaktliste synchronisiert. Abmeldungen, die direkt in Brevo erfolgen, können über einen Webhook an Smartstore zurückgemeldet werden.

{% hint style="info" %}
Das Plugin synchronisiert Newsletter-Abonnenten, erstellt oder versendet jedoch keine Kampagnen. Kampagnen werden direkt in Brevo verwaltet. Informationen zur integrierten Newsletter-Funktion von Smartstore finden Sie unter [Newsletter-Kampagnen verwalten](../marketing-promotion/newsletter-kampagnen-verwalten.md).
{% endhint %}

Für den Betrieb benötigen Sie:

- ein aktives Brevo-Konto
- einen Brevo API-Key der Version 3
- mindestens eine Kontaktliste in Brevo
- eine gültige Lizenz für das Brevo-Plugin.

Damit Brevo Abmeldungen an Smartstore übermitteln kann, muss die von Smartstore bereitgestellte Webhook-URL von Brevo erreichbar sein.

Weitere Informationen zur Installation und Lizenzierung kostenpflichtiger Plugins finden Sie unter [Plugins installieren](plugins-installieren.md) und [Plugins verwalten](plugins-verwalten.md).

## Funktionsumfang

Das Plugin synchronisiert Newsletter-Anmeldungen und -Abmeldungen anhand der E-Mail-Adresse.

| Richtung | Ereignis | Verhalten |
|---|---|---|
| Smartstore zu Brevo | Newsletter-Anmeldung | Der Kontakt wird in Brevo erstellt oder aktualisiert und der ausgewählten Kontaktliste hinzugefügt. |
| Smartstore zu Brevo | Newsletter-Abmeldung | Der Kontakt wird aus der ausgewählten Kontaktliste entfernt. |
| Brevo zu Smartstore | Abmeldung in Brevo | Der Newsletter-Eintrag wird über den Brevo-Webhook aus Smartstore entfernt. |
| Smartstore zu Brevo | Initial-Synchronisierung | Alle aktiven Newsletter-Abonnenten des ausgewählten Shops werden in die Synchronisierungswarteschlange aufgenommen. |

{% hint style="info" %}
Das Plugin überträgt ausschließlich E-Mail-Adressen. Namen, Anschriften, Bestellungen und weitere Kundendaten oder Kontaktattribute werden nicht mit Brevo synchronisiert.
{% endhint %}

Eine Abmeldung in Smartstore entfernt den Kontakt aus der konfigurierten Brevo-Liste. Der Kontakt selbst wird dadurch nicht aus dem Brevo-Konto gelöscht.

## Konfiguration

Öffnen Sie unter **Plugins > Plugins verwalten** die Konfiguration des Plugins **Brevo E-Mail-Synchronisierung**. Hier verbinden Sie Smartstore mit Ihrem Brevo-Konto, wählen die Zielkontaktliste und richten die laufende Synchronisierung ein.

![Konfiguration des Brevo-Plugins mit API-Key, Zielliste und automatischer Synchronisierung](../../.gitbook/assets/module_brevo_configuration.png)

| Einstellung | Beschreibung |
|---|---|
| **Brevo API-Key (v3)** | API-Schlüssel für die Verbindung zwischen Smartstore und Brevo. Sie erstellen und verwalten den Schlüssel in Ihrem Brevo-Konto. |
| **Brevo-Standardliste** | Kontaktliste, der neue Newsletter-Abonnenten hinzugefügt werden. Abmeldungen entfernen den Kontakt aus dieser Liste. |
| **Automatisch synchronisieren** | Aktiviert den Hintergrund-Task für den regelmäßigen Abgleich mit Brevo. Der Task wird einmal pro Stunde ausgeführt. |
| **Webhook-URL** | Von Smartstore erzeugte Adresse, an die Brevo Abmeldungen übermittelt. Die URL kann kopiert, aber nicht manuell bearbeitet werden. |
| **Manuelle Synchronisation** | Zeigt die Anzahl ausstehender Anmeldungen und Abmeldungen und verarbeitet die Warteschlange unmittelbar. |
| **Initial-Synchronisierung** | Nimmt alle derzeit aktiven Newsletter-Abonnenten des ausgewählten Shops in die Warteschlange auf. |

### Verbindung zu Brevo herstellen

1. Öffnen Sie in Brevo die Verwaltung der [API-Keys](https://app.brevo.com/settings/keys/api).
2. Erstellen oder kopieren Sie einen API-Key der Version 3.
3. Tragen Sie den Schlüssel unter **Brevo API-Key (v3)** ein.
4. Klicken Sie auf **Speichern**.
5. Prüfen Sie die angezeigte Verbindungsmeldung.
6. Wählen Sie unter **Brevo-Standardliste** die gewünschte Kontaktliste aus.
7. Speichern Sie die Konfiguration erneut.

Die Brevo-Listen können erst abgerufen werden, nachdem ein API-Key gespeichert wurde.

{% hint style="info" %}
Das Plugin lädt bis zu 50 Kontaktlisten aus dem Brevo-Konto. Wenn eine vorhandene Liste nicht zur Auswahl angeboten wird, prüfen Sie neben dem API-Key auch die Anzahl der in Brevo vorhandenen Listen.
{% endhint %}

{% hint style="warning" %}
Behandeln Sie den API-Key vertraulich. Veröffentlichen Sie ihn nicht und geben Sie ihn nur an Personen weiter, die Zugriff auf die Brevo-Integration benötigen.
{% endhint %}

## Bestehende Abonnenten initial synchronisieren

Nach dem Einrichten des API-Keys und der Zielkontaktliste können Sie die bereits in Smartstore vorhandenen Newsletter-Abonnenten übernehmen.

![Initial-Synchronisierung und Warteschlange des Brevo-Plugins](../../.gitbook/assets/module_brevo_initial_synchronization.png)

1. Wählen Sie bei einer Multi-Shop-Installation zunächst den gewünschten Shop aus.
2. Prüfen Sie die Anzahl der aktiven Abonnenten im Bereich **Initial-Synchronisierung**.
3. Klicken Sie in diesem Bereich auf **Jetzt ausführen**.
4. Verarbeiten Sie anschließend die Warteschlange über **Manuelle Synchronisation**, oder aktivieren Sie **Automatisch synchronisieren**.

{% hint style="info" %}
Die Initial-Synchronisierung stellt die aktiven Abonnenten zunächst in die Warteschlange. Die Übertragung zu Brevo erfolgt erst, wenn die Warteschlange manuell oder durch den Hintergrund-Task verarbeitet wird.
{% endhint %}

Sie können die Initial-Synchronisierung bei Bedarf erneut ausführen. Bereits in Brevo vorhandene Kontakte werden aktualisiert und der ausgewählten Liste zugeordnet.

## Laufende Synchronisierung

Nach der Initial-Synchronisierung erfasst das Plugin neue Newsletter-Anmeldungen und -Abmeldungen automatisch in einer lokalen Warteschlange. Die Warteschlange kann automatisch oder manuell verarbeitet werden.

### Automatische Synchronisierung

Aktivieren Sie **Automatisch synchronisieren**, damit Smartstore die Warteschlange regelmäßig im Hintergrund verarbeitet. Der zugehörige Task **Brevo-Abonnentenabgleich** wird einmal pro Stunde ausgeführt.

Den Status, die letzte Ausführung und mögliche Fehler des Tasks können Sie unter **System > Geplante Aufgaben** kontrollieren. Weitere Informationen finden Sie unter [Geplante Aufgaben verwalten](../system-wartung/geplante-aufgaben-verwalten.md).

{% hint style="info" %}
Die Synchronisierung erfolgt nicht in Echtzeit. Neue Anmeldungen und Abmeldungen verbleiben bis zur nächsten Ausführung des Tasks in der Warteschlange.
{% endhint %}

### Manuelle Synchronisierung

Im Bereich **Manuelle Synchronisation** sehen Sie, wie viele Anmeldungen und Abmeldungen seit dem letzten Abgleich auf die Übertragung warten.

![Manuelle Synchronisierung mit ausstehenden Anmeldungen und Abmeldungen](../../.gitbook/assets/module_brevo_manual_synchronization.png)

Klicken Sie auf **Jetzt ausführen**, um die ausstehenden Änderungen unmittelbar zu verarbeiten. Eine manuelle Synchronisierung ist erst möglich, nachdem eine Brevo-Zielliste ausgewählt wurde.

Nach einer erfolgreichen Verarbeitung zeigt Smartstore die Anzahl der aktualisierten Kontakte an.

## Webhook einrichten

Der Webhook übermittelt Abmeldungen aus Brevo zurück an Smartstore. Ohne diesen Webhook werden Abmeldungen, die direkt in Brevo vorgenommen werden, nicht automatisch in der Smartstore-Newsletterverwaltung berücksichtigt.

1. Kopieren Sie die unter **Webhook-URL** angezeigte Adresse.
2. Öffnen Sie in Brevo die Verwaltung der [Webhooks](https://app.brevo.com/settings/webhooks).
3. Erstellen Sie einen neuen Webhook.
4. Fügen Sie die von Smartstore bereitgestellte URL als Zieladresse ein.
5. Aktivieren Sie für den Webhook das Ereignis **unsubscribe**.
6. Speichern Sie den Webhook.
7. Testen Sie die Verarbeitung mit einer geeigneten Testadresse.

Smartstore verarbeitet über diesen Endpunkt ausschließlich Brevo-Ereignisse vom Typ `unsubscribe`. Andere Brevo-Ereignisse werden vom Plugin ignoriert.

Wenn Brevo eine Abmeldung übermittelt, entfernt Smartstore den zugehörigen Newsletter-Eintrag unmittelbar. Es wird keine zusätzliche Abmeldebestätigung versendet.

{% hint style="warning" %}
Achten Sie darauf, die vollständige Webhook-URL zu übernehmen. In einer Multi-Shop-Installation enthält die Adresse die ID des Shops, dessen Newsletter-Abonnent entfernt werden soll.
{% endhint %}

## Multi-Shop-Konfiguration

In einer Multi-Shop-Installation können Einstellungen global oder für einen bestimmten Shop hinterlegt werden. Wählen Sie vor der Konfiguration über die Shopauswahl den gewünschten Shop aus.

Weitere Informationen zur Verwendung globaler und individueller Einstellungen finden Sie unter [Multi-Shop Konfiguration](../konfiguration/einstellungen/den-einstellungsbereich-festlegen.md).

Für die Brevo-Konfiguration sind insbesondere folgende Punkte relevant:

- Die Initial-Synchronisierung berücksichtigt die aktiven Newsletter-Abonnenten des ausgewählten Shops.
- Die angezeigte Webhook-URL enthält die ID des ausgewählten Shops.
- Für jeden Shop muss in Brevo die passende Webhook-URL verwendet werden.
- Prüfen Sie vor einer Initial-Synchronisierung immer den aktuell ausgewählten Shop.

{% hint style="warning" %}
Verwenden Sie für jeden Shop die auf seiner Konfigurationsseite angezeigte Webhook-URL. Eine URL mit einer falschen Shop-ID kann dazu führen, dass eine Abmeldung nicht dem erwarteten Shop zugeordnet wird.
{% endhint %}

Grundlegende Informationen zur Einrichtung mehrerer Shops finden Sie unter [Mit mehreren Shops arbeiten](../allgemeine-konzepte/mit-mehreren-shops-arbeiten.md).

## Newsletter-Abonnenten in Smartstore kontrollieren

Die von Brevo synchronisierten Anmeldungen und Abmeldungen beziehen sich auf die Newsletter-Abonnenten von Smartstore.

Öffnen Sie **Marketing > Newsletter-Abonnenten**, um die lokal gespeicherten Abonnenten zu kontrollieren. Dort können Sie prüfen, ob eine Anmeldung aktiv ist oder ob eine durch den Brevo-Webhook übermittelte Abmeldung entfernt wurde.

Weitere Informationen zur Verwaltung und zum Import oder Export von Newsletter-Abonnenten finden Sie unter [Newsletter-Kampagnen verwalten](../marketing-promotion/newsletter-kampagnen-verwalten.md#abonnenten-verwalten).

## Datenschutz

Bei der Synchronisierung übermittelt Smartstore die E-Mail-Adressen der Newsletter-Abonnenten an Brevo. Berücksichtigen Sie Brevo deshalb in den Datenschutzinformationen Ihres Shops und informieren Sie betroffene Personen über Art und Zweck der Datenübermittlung.

Das Plugin überträgt keine Namen, Adressen, Bestellungen oder sonstigen Kundendaten. Die Erstellung, Verwaltung, der Versand und die Auswertung von E-Mail-Kampagnen erfolgen außerhalb von Smartstore im Brevo-Konto.

Prüfen Sie außerdem, ob die in Smartstore verwendeten Einwilligungs- und Abmeldeprozesse zur vorgesehenen Verwendung in Brevo passen.

## Fehlerbehebung

### Die Verbindung zu Brevo kann nicht hergestellt werden

- Prüfen Sie, ob ein Brevo API-Key der Version 3 eingetragen wurde.
- Entfernen Sie versehentliche Leerzeichen am Anfang oder Ende des Schlüssels.
- Speichern Sie die Konfiguration, bevor Sie die Verbindung erneut prüfen.
- Stellen Sie sicher, dass der API-Key im verwendeten Brevo-Konto noch aktiv ist.
- Erstellen Sie bei Bedarf einen neuen API-Key.

### Es werden keine Kontaktlisten angezeigt

- Prüfen Sie die Verbindung zum Brevo-Konto.
- Stellen Sie sicher, dass im Brevo-Konto mindestens eine Kontaktliste vorhanden ist.
- Beachten Sie, dass das Plugin bis zu 50 Listen aus dem Brevo-Konto lädt.
- Speichern Sie den API-Key und öffnen Sie die Konfigurationsseite erneut.

### Die Schaltflächen für die Synchronisierung sind deaktiviert

Wählen Sie zuerst eine **Brevo-Standardliste** aus und speichern Sie die Konfiguration. Ohne Zielliste können weder die manuelle noch die initiale Synchronisierung gestartet werden.

### Änderungen verbleiben in der Warteschlange

- Starten Sie die Synchronisierung manuell.
- Prüfen Sie, ob **Automatisch synchronisieren** aktiviert ist.
- Kontrollieren Sie unter **System > Geplante Aufgaben** den Task **Brevo-Abonnentenabgleich**.
- Prüfen Sie den API-Key und die ausgewählte Zielliste.
- Prüfen Sie, ob das Plugin für den betreffenden Shop lizenziert ist.
- Kontrollieren Sie das Systemprotokoll auf Fehlermeldungen zur Brevo-Synchronisierung.

Weitere Informationen zur Kontrolle und manuellen Ausführung von Hintergrund-Tasks finden Sie unter [Geplante Aufgaben verwalten](../system-wartung/geplante-aufgaben-verwalten.md).

### Abmeldungen aus Brevo erscheinen weiterhin in Smartstore

- Prüfen Sie, ob der Webhook in Brevo eingerichtet und aktiviert ist.
- Kontrollieren Sie, ob das Ereignis **unsubscribe** ausgewählt wurde.
- Vergleichen Sie die in Brevo hinterlegte URL mit der in Smartstore angezeigten Webhook-URL.
- Achten Sie bei mehreren Shops darauf, die URL des richtigen Shops zu verwenden.
- Stellen Sie sicher, dass die Webhook-URL von Brevo erreicht werden kann.
- Prüfen Sie, ob die verwendete E-Mail-Adresse als Newsletter-Abonnent im betreffenden Shop vorhanden ist.

## Weiterführende Informationen

- [Plugin-Übersicht](README.md)
- [Plugins installieren](plugins-installieren.md)
- [Plugins verwalten und lizenzieren](plugins-verwalten.md)
- [Newsletter-Kampagnen verwalten](../marketing-promotion/newsletter-kampagnen-verwalten.md)
- [Geplante Aufgaben verwalten](../system-wartung/geplante-aufgaben-verwalten.md)
- [Multi-Shop Konfiguration](../konfiguration/einstellungen/den-einstellungsbereich-festlegen.md)
- [Mit mehreren Shops arbeiten](../allgemeine-konzepte/mit-mehreren-shops-arbeiten.md)
- [Brevo API-Keys](https://app.brevo.com/settings/keys/api)
- [Brevo Webhooks](https://app.brevo.com/settings/webhooks)
