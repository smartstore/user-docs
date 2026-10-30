# Grundlegende Wartungsaufgaben ausführen

Den Wartungsbereich öffnen Sie über **System > Wartung**. Hier bereinigen Sie den Bildcache, Gastkonten und Exportdateien. Außerdem stehen Funktionen zur Icon-Migration und zur Reparatur von Hierarchiepfaden bereit. Je nach Datenbankanbieter können Sie Datenbanksicherungen verwalten und SQL-Befehle ausführen.

## Bildcache reinigen

Dieser Bereich zeigt die Anzahl der zwischengespeicherten Bilddateien und ihren Speicherbedarf. **Cache löschen** entfernt die erzeugten Bildvarianten aus dem Bildcache. Die Originalbilder bleiben erhalten; benötigte Varianten werden bei späteren Aufrufen erneut erzeugt.

## Gastbenutzer löschen

Smartstore legt für nicht registrierte Besucher Gastkonten an, beispielsweise für Warenkörbe. Mit **Anfangsdatum** und **Enddatum** grenzen Sie ein, wann die zu löschenden Konten angelegt wurden. Der Zeitraum bezieht sich auf das Erstellungsdatum, nicht auf die letzte Aktivität. Beim Öffnen der Wartungsseite ist als Enddatum ein Datum sieben Tage vor dem aktuellen Tag voreingestellt.

Gelöscht werden nur Konten ohne Benutzernamen und E-Mail-Adresse, ohne zugeordnete Bestellungen und ohne eigene Inhalte, beispielsweise Rezensionen oder Beiträge. Systemkonten bleiben erhalten.

**Nur ohne Warenkorb** ist standardmäßig aktiviert. Die Option schützt Konten mit aktiven Warenkorb- oder Wunschlistenpositionen. Wenn Sie sie deaktivieren, können auch solche Gastkonten einschließlich ihrer gespeicherten Positionen gelöscht werden. **Löschen** wendet die Auswahl an.

## Alte exportierte Dateien löschen

Diese Funktion bereinigt öffentliche Exportdateien und die Arbeitsverzeichnisse der Exportprofile. Mit **Anfangsdatum** und **Enddatum** begrenzen Sie den Zeitraum. Bei einzelnen Dateien ist das Erstellungsdatum maßgeblich. Unterordner werden nach ihrem Änderungsdatum ausgewählt und einschließlich ihres Inhalts bereinigt. Ohne Datumsgrenzen wird der gesamte Zeitraum berücksichtigt.

Zusätzlich werden Importverzeichnisse entfernt, die zu keinem vorhandenen Importprofil mehr gehören. Diese zusätzliche Bereinigung ist unabhängig vom gewählten Zeitraum.

Die Bereinigung deaktiviert keine Exportprofile. Weiterhin geplante Exporte können Dateien erneut erzeugen. Wenn ein Feed dauerhaft entfallen soll, passen Sie auch das zugehörige Exportprofil an. Weitere Informationen: [Exportprofile verwalten](../datenaustausch/export/exportprofile-verwalten.md).

## Icons migrieren

Nach dem Upgrade von Smartstore 6.4.0 auf eine höhere Version können Sie bisherige Font-Awesome-Icons migrieren. **Migration starten** aktualisiert die Icons in Menüs und unterstützten HTML-Inhalten. Dazu gehören beispielsweise Warengruppen- und Herstellerbeschreibungen, Produktbeschreibungen und Seiteninhalte. Bereits migrierte Icons bleiben unverändert.

Lassen Sie die Wartungsseite bis zum Abschluss geöffnet. Während des Laufs werden bearbeitete Datensätze und Hinweise angezeigt. Die Abschlussmeldung nennt geprüfte Datensätze, migrierte Icons und nicht migrierte Icons. Prüfen Sie Hinweise und nicht migrierte Einträge auf erforderliche Nacharbeit. Nach einem Abbruch oder einer unterbrochenen Verbindung können Sie die Migration erneut starten; bereits gespeicherte Änderungen bleiben erhalten.

Protokolle finden Sie unter **App\_Data/Logs** in den Dateien mit dem Präfix **icon-migration-**.

## Hierarchiepfade prüfen und reparieren

Unter **Hierarchie Pfade** stellt **Prüfen & reparieren** die gespeicherten Hierarchiepfade der Warengruppen und Medienordner anhand ihrer Eltern-Kind-Zuordnungen neu her. Das kann nach fehlerhaften Importen oder Migrationen nötig sein, beispielsweise wenn Produkte in unpassenden Warengruppen erscheinen. Die Zuordnung von Produkten zu Warengruppen wird dabei nicht neu festgelegt.

## Datenbanksicherungen verwalten

Der Bereich **Datenbanksicherungen** erscheint, wenn der Datenbankanbieter die integrierte Sicherung unterstützt. Im aktuellen Stand gilt dies für SQL Server und SQLite.

**Sicherung erstellen** legt eine Sicherungsdatei im Verzeichnis **DbBackups** des aktuellen Mandanten ab. Bei SQL Server muss der Datenbankserver auf diesen Sicherungspfad zugreifen können. Über **Sicherung hochladen** können Sie eine passende Sicherungsdatei bereitstellen. Der Dateiname muss dem von Smartstore verwendeten Format aus Datenbankname, Smartstore-Version und Zeitstempel entsprechen.

Die Übersicht zeigt die gespeicherten Sicherungen samt Version. Sie können Sicherungen herunterladen, löschen oder mit **Wiederherstellen** auf die Datenbank anwenden. Bei einer abweichenden Smartstore-Version erscheint eine zusätzliche Warnung.

{% hint style="info" %}
Wiederherstellen ersetzt den aktuellen Datenbankstand durch den Stand der Sicherung. Spätere Änderungen gehen dabei verloren. Eine Datenbanksicherung enthält nicht automatisch die außerhalb der Datenbank gespeicherten Shopdateien und Medien.
{% endhint %}

## SQL-Abfragen direkt in der Datenbank ausführen

Der Bereich **SQL-Abfrage ausführen** erscheint, wenn der Datenbankanbieter diese Funktion unterstützt. Geben Sie den SQL-Befehl oder das Skript in **SQL-Abfrage** ein und wählen Sie **Ausführen**. Die Funktion meldet Erfolg oder Fehler sowie bei Erfolg die vom Datenbankanbieter gemeldete Anzahl betroffener Zeilen. Sie zeigt keine Ergebnistabelle für SELECT-Abfragen an.

{% hint style="info" %}
**Vorsicht**

SQL-Befehle können Daten und die Datenbankstruktur dauerhaft verändern oder löschen. Führen Sie nur geprüfte Befehle aus und erstellen Sie vor Änderungen eine aktuelle Sicherung.
{% endhint %}
