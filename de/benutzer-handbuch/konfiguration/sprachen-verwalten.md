# Sprachen verwalten

Smartstore verfügt im Auslieferungszustand bereits über zwei Sprachen (Englisch und Deutsch), aber Sie können beliebig viele weitere Sprachen hinzufügen. Die Standardsprache ist diejenige, die Sie während des Installationsvorgangs ausgewählt haben. Bitte lesen Sie auch [Mit mehreren Sprachen arbeiten](../../benutzer-handbuch/allgemeine-konzepte/mit-mehreren-sprachen-arbeiten.md).

![](./attachments/sprachen_verwalten_1.png)

## Wie fügt man eine Sprache hinzu

Um eine weitere Sprache hinzuzufügen, gehen Sie zu **Konfiguration > Regionale Einstellungen > Sprachen**, und klicken Sie auf **Neu**.

![](./attachments/sprachen_verwalten_2.png)

|     |     |
| --- | --- |
| Name | Name der Sprache. Der Name der Sprache wird angezeigt, wenn der Shopbesucher mit der Maus über die Flagge im Frontend fährt, mit der er die von ihm bevorzugte Sprache wählen werden kann. |
| Kultureller Sprachraum | Der sprachspezifische Kulturraum. Zu den kulturellen Informationen gehören die Namen der Kultur, das Zeichensystem, der benutzte Kalender und die Formatierung von Datumsangaben und Nummernformatierung. |
| Eindeutiger SEO Code | Ein eindeutiger SEO Code aus zwei Buchstaben. Er wird genutzt, um URLs zu erstellen wie '[http://www.yourStore.com/en/](http://www.yourstore.com/en/)', wenn Sie mehr als eine Sprache benutzen. |
| Flaggenbild | Legt das Flaggenbild fest. Die Dateien der Flaggenbilder müssen in */Content/Images/flags/* liegen. |
| Rechts-nach-links | Wählen Sie diese Option, um Rechts-nach-Links-Unterstützung für die jeweilige Sprache zu aktivieren. Das aktive Design sollte RTL unterstützen (z. B. sollte es angemessene CSS-Dateien aufweisen). Dies hat nur eine Auswirkung auf das Frontend Ihres Shops. |

Nachdem Sie Ihre gewünschte Sprache angelegt haben, müssen Sie neue Ressourcen für diese Sprache hinzufügen, indem Sie auf **Ressourcen importieren** klicken. Dort können Sie eine XML-Datei importieren.  Sie finden die Ressourcen-XML-Datei für Englisch und Deutsch in dem Ordner /*App\_Data/Localization/App.*

> [!INFO]
> ### Smartstore-Übersetzungsportal mit zahlreichen weiteren Sprachen
> Besuchen Sie für weitere Sprachen für die aktuelle und ältere Smartstore-Versionen bitte das Smartstore-Übersetzungsportal.  
> Wie Sie die Sprachen herunterladen, erfahren Sie im Beitrag „[Mit mehreren Sprachen arbeiten](../../benutzer-handbuch/allgemeine-konzepte/mit-mehreren-sprachen-arbeiten.md)”.

## Wie sie eine einzelne Ressource hinzufügen oder bearbeiten

Manchmal kommt es vor, dass Sie einzelne Ressourcen verändern möchten. Stellen Sie sich vor, Sie möchten den Link zum Forum im Header Menü von *Forum* in *Foren* ändern*.* Um dies zu tun, gehen Sie auf **Konfiguration > Regionale Einstellungen > Sprachen**, und klicken Sie auf **Ressourcen editieren.** Sie werden eine Tabelle mit allen verfügbaren Ressourcen dieser Sprache sehen. Filtern Sie diese Ergebnisse, um die von Ihnen gesuchte Ressource zu finden. Sie können entweder nach Textwert oder nach dem Namen der Ressource filtern, der für die interne Verwendung genutzt wird. Wenn Sie den Text kennen, den Sie verändern möchten, klicken Sie auf das Filtersymbol der Spalte **Wert**, wählen Sie **Ist gleich** und geben Sie den Wert *Forum* ein. Dann wird eine Liste mit unterschiedlichen Ressourcen angezeigt, die den Filterkriterien entsprechen. Zwei davon haben die Vorsilbe *admin,* was darauf hindeutet, dass es zum Administratorenbereich gehört, das andere enthält das Wort *breadcrumb,* was darauf hinweist, dass es zur Breadcrumb-Navigation – keines davon ist die Ressource, die Sie suchen. Die Ressource, die Sie verändern müssen, heißt *forum.forum.*  

## Ressourcen übersetzen

Sie können einige Sprachen in unserem Smartstore [Übersetzungsportal](https://translate.smartstore.com/) finden. Wenn die Sprache, die Sie suchen jedoch nicht dabei ist, müssen Sie die Übersetzung eventuell selbst anfertigen. Um dies zu tun, empfehlen wir, dass Sie alle Sprachressourcen einer vorhandenen Sprache in eine XML-Datei exportieren, diese dann übersetzen und die Datei wieder importieren. Textressourcen für Plugins sollten in den zugehörigen XML-Dateien des jeweiligen Plugins enthalten sein.