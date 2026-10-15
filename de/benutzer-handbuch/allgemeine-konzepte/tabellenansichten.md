# Tabellenansichten

Viele Bereiche des Administrationsbereichs zeigen ihre Einträge in Tabellen an. Sie können darin suchen, Einträge auswählen und manche Angaben direkt bearbeiten. Welche Möglichkeiten eine Tabelle bietet, hängt von den angezeigten Daten ab.

## Tabellenansichten durchsuchen

Öffnen Sie die Filter über das Symbol links oberhalb der Tabelle. Die angebotenen Suchfelder variieren je nach den filterbaren Eigenschaften der angezeigten Einträge. In der Einstellungsliste können Sie zum Beispiel nach Name, Wert oder Shop suchen. Mehrere Filterfelder lassen sich kombinieren; aktive Filter setzen Sie im Filterbereich zurück.

![](<../../.gitbook/assets/2022-10-04 11_44_40-Alle Einstellungen (fortgeschritten) _ Smartstore Administration.png>)

In der Produktliste können Sie etwa nach einem Namen suchen und die Treffer nach Produkttyp, Veröffentlichungsstatus, Warengruppe oder Hersteller eingrenzen. Ein Shop-Filter erscheint dort, wenn mehrere Shops eingerichtet sind. Die Abbildung zeigt die Filter der Produktliste.

![](<../../.gitbook/assets/2022-10-04 11_56_13-Produktverwaltung _ Smartstore Administration.png>)

### Suchbegriffe gezielt eingeben

Einige Suchfelder unterstützen Suchausdrücke mit mehreren Begriffen, Platzhaltern und Operatoren. Sie erkennen diese Felder am Fragezeichen neben dem Eingabefeld. Die folgenden Beispiele und Regeln stammen aus der dort aufrufbaren Hilfe.

| Beispiel                               | Ergebnis                                                                     |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| `banana joe`                           | Enthält "banana" oder enthält "joe"                                          |
| `banana and !*.joe`                    | Enthält "banana" aber entspricht nicht "\*.joe"                              |
| `banana and (!~"hallo welt" or !*jim)` | Enthält "banana", aber enthält nicht "hallo welt" oder endet nicht auf "jim" |
| `*Leder and !(Sofa* Jacke*)`           | Endet auf "Leder", aber fängt nicht mit "Sofa" oder "Jacke" an               |
| `(>=10 and <=100) or 1 or >1000`       | Zahl liegt zwischen 10 and 100, oder entspricht 1, oder ist größer als 1000  |

#### Suchbegriff

Suchbegriff in Anführungszeichen (doppelte oder einfache), oder Suchbegriff ohne Anführungszeichen sowie ohne Leerzeichen. _banana joe_ (ohne Anführungszeichen) entspricht beispielsweise _\~banana or \~joe_, wohingegen _"banana joe"_ (mit Anführungszeichen) nach einer exakten Übereinstimmung sucht. Unterstützt Platzhalter (\* oder ?). Wenn Platzhalter vorhanden sind, wird der Standardoperator auf "Gleich" umgestellt (=). "Ungleich" (!) negiert die Phrase.

#### Gruppen

Sie können mehrere Suchbegriffe gruppieren, indem Sie sie in Klammern einschließen. Jede Gruppe kann mit einem vorangestellten ! (Ausrufezeichen) negiert werden, z.B. _!(banana and joe)_. Gruppen können beliebig oft verschachtelt werden.

#### Operatoren

| Operator  | Bedeutung                                                                       |
| --------- | ------------------------------------------------------------------------------- |
| `=[=]`    | Gleich (Standard bei numerischen Suchfeldern)                                   |
| `![=]`    | Ungleich                                                                        |
| `>`       | Größer als                                                                      |
| `>=`      | Mindestens                                                                      |
| `<`       | Kleiner als                                                                     |
| `<=`      | Höchstens                                                                       |
| `~`       | Enthält (Standard bei Text Suchfeldern)                                         |
| `!~`      | Enthält nicht                                                                   |
| `and, or` | Logische Begriffskombinatoren (und, oder). Wenn ausgelassen, ist "or" Standard. |

## Mit Tabellen arbeiten

### Sortieren

Bewegen Sie den Mauszeiger über eine Spaltenüberschrift: Bei sortierbaren Spalten wird er zur Hand und die Überschrift leicht hervorgehoben. Klicken Sie auf die Überschrift, um die Einträge danach zu ordnen. Ein Pfeil zeigt die aktuelle Sortierrichtung an; ein weiterer Klick kehrt sie um.

### Seiten wechseln

Bei längeren Listen zeigt die Seitennavigation die aktuelle Seite und, sofern eingeblendet, den gerade sichtbaren Teil der Treffer. Mit den einfachen Pfeilen wechseln Sie zur vorherigen oder nächsten Seite, mit den doppelten Pfeilen zur ersten oder letzten Seite. Auf breiteren Ansichten können Sie auch eine Seitenzahl direkt wählen. Wenn eine Auswahl wie „25 pro Seite“ angezeigt wird, legen Sie dort fest, wie viele Einträge eine Seite enthält. Das Aktualisieren-Symbol lädt die Liste erneut. Je nach Tabelleneinstellung erscheint die Navigation oberhalb, unterhalb oder an beiden Stellen.

### Mehrere Einträge auswählen

Wenn eine Tabelle Kontrollkästchen anbietet, können Sie mehrere Zeilen markieren und eine passende Aktion für die Auswahl ausführen. Welche Aktionen angeboten werden, richtet sich nach der jeweiligen Liste.

## Einträge direkt bearbeiten

In Tabellen mit Inline-Bearbeitung können Sie eine Zeile per Doppelklick direkt bearbeiten. Nur dafür freigegebene Felder werden zu Eingabefeldern; andere Angaben bleiben schreibgeschützt. In der Produktliste lassen sich so beispielsweise Name, Artikelnummer, Preis und Veröffentlichungsstatus ändern.

Speichern Sie die Änderungen mit dem Häkchen an der Zeile oder verwerfen Sie sie mit dem Kreuz. Für weitere Produktangaben öffnen Sie über die Aktion „Bearbeiten“ die vollständige Produktbearbeitung. Wenn eine Tabelle keine Inline-Bearbeitung anbietet, nutzen Sie die dort angebotene Bearbeitungsaktion.

## Tabellenansicht anpassen

Über das Zahnradsymbol unten rechts öffnen Sie die Anzeigeeinstellungen einer Tabelle. Dort können Sie Spalten ein- oder ausblenden und je nach Tabelle Linien, Zeilenhervorhebungen oder die Position der Seitennavigation wählen. Die Abbildung zeigt das Menü der Einstellungsliste.

![](<../../.gitbook/assets/2022-10-04 11_49_54-Alle Einstellungen (fortgeschritten) _ Smartstore Administration.png>)

Manche Tabellen erlauben auch, Spalten am Rand breiter oder schmaler zu ziehen und sie in eine andere Reihenfolge zu bringen. In der Produktliste sind beide Möglichkeiten verfügbar. Ihre Anpassungen an der Tabellenansicht werden im verwendeten Browser gespeichert und beim nächsten Öffnen wieder angewendet. Mit „Zurücksetzen“ stellen Sie die ursprüngliche Ansicht wieder her. Diese Anpassungen ändern die Darstellung, nicht die Einträge.

![](<../../.gitbook/assets/2022-10-04 11_58_06-Produktverwaltung _ Smartstore Administration.png>)
