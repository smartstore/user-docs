---
icon: server
---

# Technologie und Voraussetzungen

## Technologie

* Modernste Architektur dank [.NET](https://dotnet.microsoft.com/) 10, Entity Framework Core 10 und Domain-Driven Design
* Einfach zu erweitern und extrem flexibel dank eines modularen Designs
* Hochgradig skalierbar dank vollständigem Seiten-Caching und Webfarm-Unterstützung
* Leistungsstarke Theming-Engine zum Erstellen von Themes und Skins mit minimalem Aufwand durch Theme-Vererbung
* Point-and-Click-Themenkonfiguration
* Leistungsstarker und blitzschneller Medienmanager
* Leistungsstarkes Regelsystem für die visuelle Erstellung von Geschäftsregeln
* Konsequente und durchdachte Nutzung moderner Komponenten wie Vue.js, Sass und Bootstrap im Frontend und Backend
* Einfache Shopverwaltung dank einer modernen und übersichtlichen Benutzeroberfläche

## Software-Voraussetzungen

* IIS 10+ (integrierter Pipelinemodus)
* [.NET](https://dotnet.microsoft.com/) 10 (bei einer eigenständigen Installation unter Windows: [.NET Hosting Bundle](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/hosting-bundle?view=aspnetcore-10.0); unter Linux ist keine zusätzliche Installation erforderlich)
* Windows Server 2016 oder höher
* Ubuntu 22.04 oder höher
* Debian 12 oder höher
* Microsoft SQL Server 2016 Express oder höher für Windows
* Microsoft SQL Server 2019 für Linux
* MySQL 8.0 oder höher für Linux oder Windows

{% hint style="info" %}
Die genannten Datenbankversionen sind technische Mindestanforderungen. Verwenden Sie für neue Installationen eine vom Hersteller unterstützte Version: Der reguläre Support für [SQL Server 2016](https://learn.microsoft.com/en-us/lifecycle/products/sql-server-2016) und [MySQL 8.0](https://dev.mysql.com/doc/relnotes/mysql/8.0/en/) ist beendet.
{% endhint %}

{% hint style="info" %}
Bei einer vorhandenen SQL-Server-Datenbank prüfen Sie den Kompatibilitätsgrad. Für Smartstore ist mindestens Grad 130 (SQL Server 2016) erforderlich. Eine neuere Datenbank mit höherem Grad muss nicht auf 130 zurückgestellt werden. Siehe [Datenbank-Kompatibilitätsgrad prüfen und ändern](https://learn.microsoft.com/en-us/sql/relational-databases/databases/view-or-change-the-compatibility-level-of-a-database?view=sql-server-ver16).
{% endhint %}

## Hardwarevoraussetzungen auf VPS, Cloud-Server oder dediziertem Server

* Mindestens 2 Kerne
* Mindestens 2 GB RAM
* Mindestens 100 MB Datenbankspeicher für eine Installation mit Demodaten
* Mindestens 500 MB Festplattenspeicher für eine Installation mit Demodaten

## Hardware-Voraussetzungen für Shared Hosting

* Mindestens 1 Kern
* Mindestens 1 GB RAM
* Mindestens 100 MB Datenbankspeicher für eine Installation ohne Demodaten
* Mindestens 500 MB Festplattenspeicher für eine Installation mit Demodaten
