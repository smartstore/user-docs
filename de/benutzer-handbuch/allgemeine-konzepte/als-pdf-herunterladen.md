# Als PDF herunterladen

Es gibt einige Bereiche in Smartstore, in welchen der Shopadministrator oder auch Kunden, Dokumente im PDF-Format herunterladen können (z. B. Aufträge, Adressaufkleber, Produktkataloge) . Um diese Dokumente zu erstellen, nutzt Smartstore die [Wkhtmltopdf Komponente](http://wkhtmltopdf.org/). Die Erstellung der Dokumente basiert auf HTML-Templates, die in Smartstore enthalten sind und mit HTML-Basiskenntnissen leicht durch einen Shopadministrator angepasst werden können.

## Template Dateien

| **Beschreibung** | **Pfad** |
| --- | --- |
| Master Template | \\Views\\Shared\\Layouts\\\_Print.cshtml |
| Seitenkopf Template | \\Views\\Pdf\\ReceiptHeader.cshtml |
| Fußzeile Template | \\Views\\Pdf\\ReceiptFooter.cshtml |
| Auftrag Template | \\Views\\Order\\Details.Print.cshtml |
| Adressaufkleber Template | \\Areas\\Admin\\Views\\Shipment\\PdfPackagingSlips.Print.cshtml |
| PDF-Katalog Deckblatt Template | \\Modules\\Smartstore.PdfExport\\Views\\Shared\\PdfCatalog.Print.Cover.cshtml |
| PDF-Katalog Seitenkopf Template | \\Modules\\Smartstore.PdfExport\\Views\\Shared\\PdfCatalog.Print.Header.cshtml |
| PDF-Katalog Produktartikel Template | \\Modules\\Smartstore.PdfExport\\Views\\Shared\\PdfCatalog.Print.Products.cshtml |
| PDF-Katalog Fußzeile Template | \\Modules\\Smartstore.PdfExport\\Views\\Shared\\PdfCatalog.Print.Footer.cshtml |
| CSS Datei | \\wwwroot\\css\\print.css |