# Geplante Aufgaben verwalten

In Smartstore müssen Aufgaben häufig zu festgelegten Zeiten ausgeführt werden, um unterschiedliche Aktivitäten zu verwalten. Im Bereich Geplante Aufgaben können Sie Aufgaben festlegen, die automatisch zu den festgelegten Zeiten durchgeführt werden. Zu den Aufgaben, die auf diese Weise im Vorfeld geplant werden können, gehören:

* Gespeicherte E-Mails versenden
* Obsolet gewordene oder temporäre Dateien aus der Datenbank entfernen
* Temporäre Dateien aus dem Datenordner entfernen
* Cache verwalten
* Wechselkurse aktualisieren
* Feed- oder Exportdateien erstellen

Neben den Aufgaben, die Teil des Anwendungskerns sind, können Plugins von Drittherstellern ebenfalls eigene Aufgaben installieren, dazu gehört z. B. (externe) Daten regelmäßig abzufragen oder zu synchronisieren.

## Die Liste der geplanten Aufgaben aufrufen

Geplante Aufgaben können eingesehen und verwaltet werden, indem Sie auf **System -> Geplante Aufgaben** gehen.

![](../../.gitbook/assets/geplante-aufgaben-2.PNG)

Alle Aufgaben werden mit Informationen mit folgenden Überschriften angezeigt:

* **Aktiviert** - Zeigt an, ob eine Aufgabe geplant ist oder deaktiviert wurde
* **Cron Ausdruck** - der Cron Ausdruck legt die Häufigkeit fest, in der eine Aufgabe durchgeführt wird
* **Letzte Ausführung** - Gibt an, wann die Aufgabe zuletzt durchgeführt wurde (Datum und Zeit, Dauer und mögliche Fehler)
* **Nächste Ausführung in** - Datum und Zeit, wann die Aufgabe das nächste Mal ausgeführt werden soll. Dieses Feld ist leer, wenn die Aufgabe deaktiviert wurde. Wenn die Aufgabe zur Zeit ausgeführt wird, wird stattdessen eine animierte Fortschrittsanzeige angezeigt.
* **Aktionen** - Bietet Optionen, die Aufgabe zu bearbeiten, manuell auszuführen oder abzubrechen (wenn sie bereits läuft)

## Eine Aufgabe manuell ausführen

Um eine Aufgabe manuell auszuführen, gehen Sie zu **Geplante Aufgaben**, und wählen Sie unter **Aktionen** die Option **Jetzt ausführen**.

## Eine Aufgabe bearbeiten

Um eine geplante Aufgabe zu bearbeiten, wechseln Sie in die Ansicht _Aufgabe bearbeiten_, indem Sie **Bearbeiten** unter Aktionen auswählen.

![](../../.gitbook/assets/geplante-aufgaben.PNG)

| Feld                    | Beschreibung                                                                                                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviert               | Aktiviert die geplante Ausführung gemäß Cron Ausdruck. Haken entfernen, um die geplante Aufgabe zu deaktivieren. Deaktivierte Aufgaben können weiterhin manuell ausgeführt werden. |
| Bei Fehler deaktivieren | Aktivieren Sie das Kästchen, wenn die Aufgabe bei Auftreten eines Fehlers während der Ausführung deaktiviert werden soll.                                                          |
| Cron Ausdruck           | Ein Ausdruck, der den Zeitplan für die automatische Ausführung der Aufgabe festlegt. Lesen Sie [unten mehr](geplante-aufgaben-verwalten.md#cron-ausdruck) über Cron Ausdruck.      |

## Aufgabenarten

| Name der Aufgabe             | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Standard Default Schedule        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| E-Mail senden                | <p>Sendet alle E-Mails in der Warteschlange. Für weitere Informationen über die E-Mail-Warteschlange lesen Sie bitte <a href="e-mail-korrespondenz-analysieren.md">Analyzing the Message Queue</a>.<br><img src="https://smartstore.atlassian.net/wiki/s/-1157374962/6452/041baff351e38d4a7d3bb246b6744da43a5f6982/_/images/icons/emoticons/warning.png" alt="(Warnung)"><br><br>Wenn Sie diese Aufgabe deaktivieren, werden weder Sie noch Ihre Kunden E-Mails empfangen.</p> | Einmal pro Minute                |
| E-Mail Queue bereinigen      | Bereinigt die E-Mail-Warteschlange um E-Mail-Einträge, die bereits verarbeitet wurden, um Speicherplatz einzusparen.                                                                                                                                                                                                                                                                                                                                                           | Täglich um 02:00 AM              |
| Delete Logs                  | Löscht Log-Einträge, die älter als 7 Tage sind, um Speicherplatz zu sparen.                                                                                                                                                                                                                                                                                                                                                                                                    | Täglich um 01:00 AM              |
| Suchindex aktualisieren      | Die Megasearch-Indexierung manuell durchführen.                                                                                                                                                                                                                                                                                                                                                                                                                                | Alle 30 Minuten                  |
| Gastbenutzer löschen         | Löscht Gastkonten, die älter als 24 Stunden sind, um Speicherplatz zu sparen.                                                                                                                                                                                                                                                                                                                                                                                                  | Täglich um 01:00 AM              |
| Cache bereinigen             | Bereinigt den Memory Cache, um Speicherplatz freizugeben.                                                                                                                                                                                                                                                                                                                                                                                                                      | Alle 4 Stunden                   |
| Temporäre Dateien bereinigen | Löscht temporäre Anwendungsdateien aus dem Ordner _App\_Data/\_temp_, um Festplattenplatz zu schaffen. Unterordner bleiben davon unberührt.                                                                                                                                                                                                                                                                                                                                    | Täglich um 03:30 AM              |
| Wechselkurse aktualisieren   | Zieht aktualisierte Umtauschkurse von Web-Services und importiert sie in die Datenbank der Anwendung.                                                                                                                                                                                                                                                                                                                                                                          | Alle 15 Minuten                  |
| Temporäre Uploads bereinigen | Löscht vorübergehend hochgeladene Binärdaten (ohne Zuordnung) aus der Datenbank und dem Dateisystem, um Speicherplatz einzusparen.                                                                                                                                                                                                                                                                                                                                             | Täglich um 01:30 AM und 01:30 PM |

## Cron Ausdruck

Ein Cron Ausdruck ist ein String aus 5 'Zeit-Intervall' Feldern, die die Frequenz festlegen, innerhalb derer eine Aufgabe ausgeführt wird. Jedes dieser Felder kann numerische Werte oder spezielle Zeichern beinhalten, und jedes Feld wird durch ein Leerzeichen getrennt.

Nachfolgende Darstellung zeigt, woraus ein Cron Ausdruck besteht:

```
* * * * *
| | | | |
| | | | +---- Wochentag (range: 0-6 or SUN-SAT, 0 standing for Sunday)
| | | +------ Monat (range: 1-12 or JAN-DEC)
| | +-------- Tag (range: 1-31)
| +---------- Stunde (range: 0-23)
+------------ Minute (range: 0-59)
```

* Jedes der 5 Felder kann durch ein Asterix (\*) ausgefüllt werden. Das würde bedeuten, dass die gesamte Spanne möglicher Werte gilt, z. B. jede Minute, jede Stunde u.s.w.
* Jedes Feld kann eine Liste von durch Kommata getrennten Werten enthalten (z. B. 1\*,3,7\*) oder eine Spanne von Werten (z.B.: ein Intervall getrennt durch einen Bindestrich, z. B. 1-5).
* Nach einem Asterix ( _**\***_ ) oder einer Spanne von Werten können Sie einen Schrägstrich (_/)_ setzen, um anzugeben, dass Werte innerhalb eines bestimmten Intervalls immer und immer wieder wiederholt werden. Sie können zum Beispiel "_0-23/2"_ in das Feld _Stunde_ eingeben, um festzulegen, dass eine bestimmte Aktion alle zwei Stunden durchgeführt wird (den gleichen Effekt hat die Eingabe "_0,2,4,6,8,10,12,14,16,18,20,22"_); Wert _"\*/4"_ im Feld _Minute_ bedeutet, dass eine Aktion alle 4 Minuten durchgeführt werden soll. _"1-30/3"_ bedeutet das Gleiche wie "_1,4,7,10,13,16,19,22,25,28"_.
* In den Feldern _Monat_ und _Tag_ können Sie die Namen von Monaten und Tagen mit den ersten drei Buchstaben abkürzen ("JAN, FEB,...,DEZ" oder "MON,DIE,...,SON"), statt ihre numerischen Werte einzugeben.

### Beispiele für einen Cron Ausdruck

Hier sind einige vollständige Beispiele:

| Ausdruck                          | Bedeutung                                                                                                                            |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| \* \* \* \* \*                    | Jede Minute                                                                                                                          |
| 5 \* \* \* \*                     | Fünf Minuten nach jeder vollen Stunde (00:05, 01:05, 02:05 u.s.w.).                                                                  |
| 0/15 \* \* \* \*                  | Alle 15 Minuten                                                                                                                      |
| 0 \*/2 \* \* \*                   | Alle 2 Stunden                                                                                                                       |
| 0 1 \* \* \*                      | Jeden Tag um 01:00 AM                                                                                                                |
| \* 12 \* \* 1                     | Jede Minute von 12:00 PM an, nur am Montag                                                                                           |
| 59 11 \* \* 1 , 2 , 3 , 4 , 5     | Um 11:59 AM, nur Montag, Dienstag, Mittwoch, Donnerstag und Freitag                                                                  |
| 59 11 \* \* 1 - 5                 | Dieses Muster ist equivalent zum vorhergehenden. Die Werte innerhalb der Spanne werden ausgelassen und durch den Bindestrich ersetzt |
| \*/ 15 9 - 17 \* \* \*            | Alle 15 Minuten zwischen 09:00 AM und 05:59 PM                                                                                       |
| \* 12 10 - 16 / 2 \* \*           | Jede Minute von 12:00 PM, alle 2 Tage, zwischen dem 10. und 16. Tag des Monats                                                       |
| \* 12 1 - 15 , 17 , 20 - 25 \* \* | Jede Minute von 12:00 PM an, zwischen dem 1. und dem 15., dem 20. und dem 25. und am 17. des Monats .                                |
|                                   |                                                                                                                                      |
