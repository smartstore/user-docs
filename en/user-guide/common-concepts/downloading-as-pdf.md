# Downloading as PDF

There are several areas in Smartstore where the shop administrator or even users can download documents in PDF format (e.g. orders, shipment slips, or product catalog). To create these documents, Smartstore uses the the [Wkhtmltopdf component](http://wkhtmltopdf.org/). The creation of these documents is based on HTML templates, which are included in Smartstore and can easily be adapted by the shop administrator who has some knowledge of HTML. 

## Template Files

| **Description** | **Path** |
| --- | --- |
| Master Template | \\Views\\Shared\\Layouts\\\_Print.cshtml |
| Header Template | \\Views\\Pdf\\ReceiptHeader.cshtml |
| Footer Template | \\Views\\Pdf\\ReceiptFooter.cshtml |
| Order Template | \\Views\\Order\\Details.Print.cshtml |
| Packing Slip Template | \\Areas\\Admin\\Views\\Shipment\\PdfPackagingSlips.Print.cshtml |
| Pdf-Catalog Cover Template | \\Modules\\Smartstore.PdfExport\\Views\\Shared\\PdfCatalog.Print.Cover.cshtml |
| PDF-Catalog Header Template | \\Modules\\Smartstore.PdfExport\\Views\\Shared\\PdfCatalog.Print.Header.cshtml |
| Pdf-Catalog Product Item Template | \\Modules\\Smartstore.PdfExport\\Views\\Shared\\PdfCatalog.Print.Products.cshtml |
| Pdf-Catalog Footer Template | \\Modules\\Smartstore.PdfExport\\Views\\Shared\\PdfCatalog.Print.Footer.cshtml |
| CSS File | \\wwwroot\\css\\print.css |