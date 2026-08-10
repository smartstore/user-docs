# Als PDF herunterladen

Smartstore erzeugt in verschiedenen Bereichen PDF-Dokumente, beispielsweise Aufträge, Adressaufkleber und Produktkataloge. Dafür verwendet Smartstore die [Wkhtmltopdf-Komponente](http://wkhtmltopdf.org/). Die Ausgabe basiert auf den folgenden HTML-Vorlagen, die Shopadministratoren mit HTML-Grundkenntnissen anpassen können.

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
