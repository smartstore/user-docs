# Wie funktionieren Produkt-Bundles?

Bundling bedeutet, dass mehrere Produkte als Set, als sogenanntes Bundle verkauft werden. Bundles sind in der Regel nicht aufteilbare, statische Produktpakete und werden oft als Hersteller-Bundle, (wenn die Produkte vom Hersteller zusammengestellt wurden), oder Händler-Bundle, (wenn die Produkte von Verkäufer zusammengestellt wurden), bezeichnet. Ein Bundle wird immer als Ganzes erworben, weshalb der Kunde einzelne Bestandteile des Produkt-Bundles nicht in seinen Einkaufswagen legen kann.

## Anwendungsszenario

Stellen Sie sich vor, Sie möchten eine Videospielkonsole in Kombination mit zwei drahtlosen Gamepads und einem Videospiel anbieten. Um dies zu konfigurieren, legen Sie ein neues Produkt vom **Produkttyp:** **Produkt-Bundle** an. Sie finden diese Einstellung in der Registerkarte **Allgemein**. Sobald Sie das Produkt gespeichert haben, finden Sie eine neue Registerkarte mit dem Namen **Stückliste**, in welcher Sie dem Bundle existierende Produkte aus Ihrem Katalog hinzufügen können. 

> [!INFO]
> Um Verkaufsanreize zu schaffen, sollte der Preis des Bundles natürlich niedriger sein, als der Preis, den der Kunde zahlen würde, wenn er die Bestandteile des Bundles einzeln kaufen würde.

![](./attachments/2022-10-20%2010_01_39-Produktdetails%20_%20Smartstore%20Administration.png)

## Produkte einem Bundle zuordnen

Ein Produkt, das einem Bundle zugeordnet wurde, wird als Bundle-Bestandteil bezeichnet.

1. Gehen Sie zur Registerkarte **Stückliste**  Ihres Produkt-Bundles und klicken Sie auf **Hinzufügen**.
2. Wählen Sie eines oder mehrere Produkte, indem Sie das Kästchen in der ersten Spalte aktivieren. Sie können die Suche benutzen, um Produkte schneller miteinander zu verbinden.
3. Klicken Sie auf **Übernehmen**. Die ausgewählten Produkte werden nun als Produkt-Bundle dargestellt.
4. Sie können die Zuweisung von Produkten aufheben, indem Sie bei dem betreffenden Bundle-Bestandteil auf **Löschen** klicken.

> [!INFO]
> Alle einfachen Produkte bis auf jene, die wiederkehrende Zahlungen und Downloads erfordern, können Teil eines Bundles sein. Gruppenprodukte und Bundles können nicht zu Bundles zusammengefasst werden. Ein Produkt-Bundle hat keine eigenen Attribute. Bitte beachten Sie, dass ein Produkt mehrfach zu einem Bundle hinzugefügt werden kann und jeder Bundle-Bestandteil einzeln konfiguriert werden kann . Das kann in Verbindung mit Attributen nützlich sein.

## Möglichkeiten, ein Bundle zu steuern

Es gibt drei wichtige Optionen, die das Verhalten eines Produkt-Bundles steuern. Sie finden diese oberhalb der Tabelle Produkt-Bundles.  
  
**Preis per Bundle-Bestandteil**

Mit dieser Option steuern Sie die Preiskalkulation des Bundles. Wenn sie deaktiviert ist, wird der Preis für das Bundle als Ganzes festgelegt, ohne dass die Einzelpreise der Bundle-Bestandteile in Betracht gezogen werden. Wenn sie aktiviert ist, ist der Preis die Summe der Einzelpreise aller Produkte im Bundle.  
 

![](https://smartstore.atlassian.net/wiki/images/icons/grey_arrow_down.png)

Preis per Bundle-Bestandteil ist deaktiviert...

Preisanpassungen von Attributen und Rabatten auf Bundle-Bestandteile sind nicht im Preis einbezogen. Bitte beachten Sie, dass eine Auswahl von Attributen durch den Kunden nicht möglich ist.

![](https://smartstore.atlassian.net/wiki/images/icons/grey_arrow_down.png)

Preis per Bundle-Bestandteil ist aktiviert...

Die Preiskalkulation der Bundle-Bestandteile berücksichtigt Aktionspreise, Preisänderungen bei Attributen wie auch auf das Bundle-Bestandteil bezogene Rabatte und Mengen.  
Folgende Elemente werden nicht berücksichtigt: Staffelpreise, Preisvorschläge durch den Kunden, Preisanforderungen, Gewichtsanpassung von Attributen und alle anderen Rabatte.  
Die Anzeige der Grundpreise kann durch eine Option gesteuert werden (siehe **Konfiguration > Einstellungen > Katalog-Einstellungen** ).

### Versand per Bundle-Bestandteil

Diese Option steuert die Preiskalkulation der Versandkosten. Wenn sie deaktiviert ist, werden die Versandkosten des Produkt-Bundles als Ganzes verwendet. Wenn sie aktiviert ist, werden die Versandkosten aller Produkte im Bundle kalkuliert.  
 

![](https://smartstore.atlassian.net/wiki/images/icons/grey_arrow_down.png)

Versand per Bundle-Bestandteil ist aktiviert...

Die Kalkulation der Versandkosten von Bundle-Bestandteilen berücksichtigt folgende Elemente: Versand aktiv, kostenloser Versand und zusätzliche Versandkosten.

### Bundle-Bestandteil einzeln in den Warenkorb

Wenn diese Option aktiviert ist, werden Preis und Menge der Bundle-Bestandteile im Warenkorb angezeigt. Darüber hinaus wird die Bestandsführung mit den Bestandteilen verknüpft statt mit dem Bundle selbst.

## Ein Bundle-Bestandteil bearbeiten

Klicken Sie in der Stückliste bei dem jeweiligen Artikel auf **Bearbeiten**.

### General tab

|     |     |
| --- | --- |
| **Produktname** | Bietet die Möglichkeit, in der Stückliste einen abweichenden Produktnamen anzuzeigen. |
| **Kurzbeschreibung** | Bietet die Möglichkeit, in der Stückliste einen abweichende Kurzbeschreibung anzuzeigen. Geben Sie ein Leerzeichen ein, falls in der Stückliste keine Kurzbeschreibung angezeigt werden soll, obwohl das Produkt eine besitzt. |
| **Menge** | Die Produktmenge wird gemäß dem hier angegebenen Wert angepasst, wenn das Bundle zum Warenkorb hinzugefügt wird. |
| **Rabatt** | Wählen Sie einen Rabatt für den Bundle-Bestandteil. |
| **Rabatthöhe** | Gibt an, ob ein Rabatt in Prozent oder als Fixsumme gilt. |
| **Vorschaubild ausblenden** | Blendet das Vorschaubild des Produkts in der Bundle-Bestandteil-Liste aus. |
| **Sichtbar** | Ermöglicht es, ein im Bundle enthaltenes Produkt zu verbergen, so dass es auf der Produktseite nicht angezeigt wird |
| **Aktiv** | Legt fest, ob das Produkt im Bundle enthalten ist. Hinweis: Nicht veröffentlichte Produkte sind niemals Teil eines Bundles. |
| **Reihenfolge im Bundle** | Die Position des Produkts im Bundle. |

### Registerkarte Attribute

Sie können Attribute, die nicht in dem Bundle-Angebot enthalten sind, herausfiltern, indem Sie **Attribute ausschließen** aktivieren. Danach können Sie einen oder mehrere Attributwerte für jedes dem Produkt zugewiesenen Attribut festlegen.