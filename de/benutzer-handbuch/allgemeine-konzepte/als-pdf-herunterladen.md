# Als PDF herunterladen

In einigen Bereichen von Smartstore können Shopadministratoren und Kunden Dokumente im PDF-Format herunterladen (z. B. Aufträge, Adressaufkleber oder Produktkataloge). Um diese Dokumente zu erstellen, nutzt Smartstore die [Wkhtmltopdf Komponente](http://wkhtmltopdf.org/). Die Erstellung der Dokumente basiert auf HTML-Vorlagen, die in Smartstore enthalten sind und mit HTML-Basiskenntnissen leicht durch einen Shopadministrator angepasst werden können.

## Template Dateien

| **Beschreibung**                    | **Pfad**                                                                    |
| ----------------------------------- | --------------------------------------------------------------------------- |
| Master-Template                     | \Views\Shared\Layouts\\\_Print.cshtml                                       |
| Seitenkopf-Template                 | \Views\Pdf\ReceiptHeader.cshtml                                             |
| Fußzeilen-Template                  | \Views\Pdf\ReceiptFooter.cshtml                                             |
| Auftrags-Template                   | \Views\Order\Details.Print.cshtml                                           |
| Adressaufkleber-Template            | \Areas\Admin\Views\Shipment\PdfPackagingSlips.Print.cshtml                  |
| PDF-Katalog-Deckblatt-Template      | \Modules\Smartstore.PdfExport\Views\Shared\PdfCatalog.Print.Cover.cshtml    |
| PDF-Katalog-Seitenkopf-Template     | \Modules\Smartstore.PdfExport\Views\Shared\PdfCatalog.Print.Header.cshtml   |
| PDF-Katalog-Produktartikel-Template | \Modules\Smartstore.PdfExport\Views\Shared\PdfCatalog.Print.Products.cshtml |
| PDF-Katalog-Fußzeilen-Template      | \Modules\Smartstore.PdfExport\Views\Shared\PdfCatalog.Print.Footer.cshtml   |
| CSS-Datei                           | \wwwroot\css\print.css                                                      |
