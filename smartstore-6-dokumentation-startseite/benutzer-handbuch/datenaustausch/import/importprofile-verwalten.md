# Importprofile verwalten

Der Zweck von Datenimporten ist der Massenimport von externen Datenstrukturen wie Produkten oder Kunden mittels CSV-Dateien. Die Importfunktion ist auch in der Lage riesige Datenmengen wie z. B. Produktpreise zu aktualisieren.

Importprofile fassen alle benötigten Informationen zusammen, um den Importvorgang individuell zu steuern. Dazu gehört im Besonderen :

- Das Hochladen von Dateien, die als Datenquellen dienen
- Objekttypen, die importiert werden sollen, z. B. Produkt, Kunde, u.s.w.
- CSV-spezfische Einstellungen
- Felddaten-Mapping 
- Einstellung von automatischen Importen als *Geplante Aufgabe* 

Um Importprofile zu verwalten, gehen Sie zu **Konfiguration > Importieren**.

![](./attachments/import-1.PNG)

Sie können eine Geplante Aufgabe, die im Profil konfiguriert wurde, direkt auslösen, indem Sie **Jetzt ausführen** in der Profil-Liste klicken und sich die Fortschrittsanzeige des Imports ansehen. der Button **Ereignisprotokoll** öffnet die Log-Datei des letzten Importvorgangs. Diese enthält wichtige Informationen (wie z. B. Fehlermeldungen) über die letzte Ausführung eines Imports.

## Importprofile erstellen und bearbeiten

Klicken Sie auf **Neu**, um ein neues Importprofil zu erstellen. Auf der folgenden Seite laden Sie Ihre Importdatei hoch und wählen das zu importierende Object. Nachdem Sie **Speichern** gedrückt haben, werden Sie zu dem neuen Importprofil geleitet.

Klicken Sie auf den Namen des Importprofils, um es zu bearbeiten.

![](./attachments/importprofile_verwalten_2.png)

Datenimporte können automatisch jederzeit über [Geplante Aufgaben](http://docs.smartstore.com/display/SDDE/Geplante+Aufgaben+verwalten) ausgeführt werden. Daher wird jedem Importprofil bei seiner Erstellung eine *Geplante Aufgabe* zugeordnet. Die Ausführung ist standardmäßig nicht aktiviert, weshalb das Profil nicht automatisch ausgeführt wird. Klicken Sie auf  **Ausführung**, um einen Link zu der verbundenen geplanten Aufgabe zu erhalten und die Planungs-Einstellungen zu verändern.

### Objekttypen

Das Framework für den Import unterstützt folgende Objekttypen:

- Produkt
- Kategorie
- Kunde
- Newsletter Abonnent

### CSV Konfiguration

| **Eingabefeld** | **Beschreibung** |
| --- | --- |
| Alle Felder in Anführungszeichen | Legt fest, ob die Werte aller Felder durch Anführungszeichen begrenzt vorliegen. |
| Überflüssige Leerzeichen entfernen | Legt fest, ob Leerzeichen am Anfang und am Ende eines Feldwertes entfernt werden sollen. |
| Mehrzeilen erlaubt | Legt fest, ob mehrzeilige Feldwerte unterstützt werden. |
| Trennzeichen | Legt das zu verwendende Trennzeichen für die Felder fest. |
| Anführungszeichen | Legt das zu verwendende Anführungszeichen fest. |
| Inneres Anführungszeichen | Legt das innere Anführungszeichen (Escaping) fest. |

> [!INFO]
> Die erste Zeile einer CSV-Datei muss die Spaltenüberschriften enthalten, die die Werte beschreiben welche in der Spalten enthalten sind.

### Zuordnung der Importfelder

Sie können optional für jedes Feld der Importdatei festlegen, ob und für welche Objekteigenschaft dessen Daten zu importieren sind. Gleichnamige Felder werden grundsätzlich immer importiert, sofern sie nicht explizit ignoriert werden sollen. Noch nicht ausgewählte Eigenschaften sind in der Auswahlliste hervorgehoben. Zudem ist die Angabe eines Standardwertes möglich, der angewendet wird, wenn das Importfeld leer ist. 

![](./attachments/import-2.PNG)

   

> [!INFO]
> Durch Änderung des Trennzeichens werden gespeicherte Zuordnungen ungültig und zurückgesetzt.