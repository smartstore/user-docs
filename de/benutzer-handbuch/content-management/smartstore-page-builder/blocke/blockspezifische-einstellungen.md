# Blockspezifische Einstellungen

## Text

Der Text-Block bietet umfassende Möglichkeiten, Text zu formatieren. Mit dem Feld _Titel_ können Sie dem Block einen formatierten Titel vergeben. Der Titel wird über dem Intro- und Textelement angezeigt. Zusätzlich erhält der Block im [_Block-Manager_](../benutzeroberflache/block-manager.md) den Titel als Namen. Alternativ können Sie den Titel auch verstecken, wodurch dieser nicht als Text innerhalb des Blockes angezeigt wird. Die _Tagline_ wird oberhalb und das _Intro_ unterhalb des Titels dargestellt. Das Textfeld, welches für Fließtext gedacht ist, verfügt über einen umfangreichen Texteditor, mit dem Sie Ihren Fließtext formatieren können. Des Weiteren bieten die einzelnen Textelemente Optionen um Schriftgröße, Schriftart, Schriftfarbe, HTML-Tags und Abstände zu konfigurieren.

![](../../../../.gitbook/assets/Textblock_config_2.png)

Alternativ finden Sie ein Video zur Erläuterung des Text-Blockes auf [Youtube](https://www.youtube.com/watch?v=TRuKwwOs-nI\&list=PLog4smYIQ2NSZ5gfInsPxi-qGxMKCOf-s\&index=2)

## Bild

Bei dem Bild-Block gibt es neben der Auswahloption der Grafik auch die Möglichkeit, die maximale Größe, der längsten Seite des Bildes, in Pixeln zu beschränken.

![](../../../../.gitbook/assets/Bildblock_config_2.png)

## Produktliste

Mit dem Produktlisten-Block können Sie eine Auswahl von Produkten anschaulich präsentieren. Hierbei stehen Ihnen Darstellungsoptionen wie Slider-, Raster- oder Listenansicht zur Verfügung. Konfigurieren Sie die Anzahl und Darstellung der angezeigten Produkte. Zum Beispiel können Sie bestimmen, ob Preise, Kurzbeschreibung, Lieferzeiten oder andere Attribute des Produktes angezeigt werden sollen.

![](../../../../.gitbook/assets/Productlist_config_2.png)

## Warengruppen

Mit dem Warengruppen-Block  können Sie eine Auswahl von Warengruppen anschaulich präsentieren. Der Warengruppen-Block verfügt über dieselben Konfigurationsoptionen wie der Produktlistenblock.

![](../../../../.gitbook/assets/Warengruppen_config.png)

## Herstellerliste

Mit dem Herstellerlisten-Block können Sie eine Auswahl von Produkten anschaulich präsentieren. Der Herstellerlistenblock verfügt über dieselben Konfigurationsoptionen wie der Produktlistenblock.

![](../../../../.gitbook/assets/Herstellerliste_config_2.png)

## IFrame

Mit dem IFrame-Block können Sie eine externe Seite innerhalb eines Fensters anzeigen lassen. Hierfür müssen Sie die Seiten-URL angeben.

![](../../../../.gitbook/assets/IFrame_config_2.png)

## Gallerie

Der Galerie-Block kann verwendet werden, um Mediengalerien mit verschiedenen Stilen und Effekten als Inhalt in Seiten einzufügen.

![](../../../../.gitbook/assets/Galerie_config_2.png)


## Video

Ihr Video sollten Sie als MP4-Datei hochladen, da dieses Dateiformat von den meisten Browsern unterstützt wird. Zusätzlich können Sie WebM- und Ogg-Dateien hochladen. Des Weiteren gibt es verschiedene Einstellungsmöglichkeiten wie Bildformat oder Steuerelemente, um Ihren Videoplayer anzupassen.

![](../../../../.gitbook/assets/Videoblock_config_2.png)

## YouTube

Der YouTube-Block bietet ähnliche Einstellungsoptionen wie der Videoblock. Anstelle eines Videos hochzuladen, müssen Sie die YouTube-ID oder die URL angeben. Neben Optionen wie Bildformat und Datenschutzmodus können Sie auch einen Zeitabschnitt im Video bestimmen, welcher abgespielt werden soll.&#x20;

![](../../../../.gitbook/assets/YouTubeBlock_config_2.png)

## SoundCloud

Mit diesem Block lassen sich Audio-Streams des Dienstes [_SoundCloud_](https://soundcloud.com/) einbinden. Geben Sie zum Einbinden einfach die URL an. Zusätzlich stehen diverse Optionen für die Konfiguration der Darstellung bereit.

![](../../../../.gitbook/assets/SoundCloudBlock_config_2.png)

## Content Slider

Eine Folie kann aus den vorhandenen Folien des Content Sliders ausgewählt und angezeigt werden.

![](../../../../.gitbook/assets/ContentSlider_config_2.png)

## Code

Mit dem Code-Block können Sie eigenen Code einfügen. Sie können dadurch als Beispiel benutzerdefinierte Funktionalitäten einbauen  oder selbst Ihren Text formatieren. Beim Coden werden Sie von IntelliSense unterstützt.

![](../../../../.gitbook/assets/CodeBlock_config_2.png)

## Google Maps

Mit dem Google Maps-Block können Sie eine Adresse auf Google Maps anzeigen lassen. Hierfür müssen Sie Ihren Google Maps API Key sowie die Koordinaten - Längen- und Breitengrad - der gewünschten Position angeben. &#x20;

![](../../../../.gitbook/assets/GoogleMaps_config_2.png)

## Blog

Mit diesem Block können Sie Blogbeiträge aus dem Smartstore-Blog-Plugin einfügen.

![](../../../../.gitbook/assets/BlogBlock_config_2.png)

## Trusted Shop

In diesem Block werden Trusted Shops-Bewertungen angezeigt. Eine Trusted Shops-ID ist erforderlich.

![](../../../../.gitbook/assets/TrustedShopBlock_config_2.png)

## News

Dieser Block zeigt Nachrichten aus dem Smartstore News-Plugin an.

![](../../../../.gitbook/assets/NewsBlock_config_2.png)

## Newsletter

Dieser Block stellt das Eingabefeld für die Newsletter-Anmeldung dar und ermöglicht somit eine Anmeldung zum Newsletter.

![](../../../../.gitbook/assets/NewsletterBlock_config_2.png)

## Umfragen

Mit diesem Block kann eine Umfrage aus bestehenden Umfragen ausgewählt und angezeigt werden.

![](../../../../.gitbook/assets/PollBlock_config_2.png)

## MVC Route

Verwenden Sie den Route-Block um eine Action direkt anzusteuern um das (partial) ViewResult auszugeben. Dafür müssen Sie Ihre Route als JSON-Objekt angeben. Dieser Block ist für erfahrene Entwickler gedacht.

JSON Beispiel:

```
{  
„Area“:““,  
„Controller“:“News“,  
„Action“:“HomePageNews“  
}
```

In dem Beispiel steuern wir den Controller _News_ an um das ViewResult der Action-Methode _HomePageNews_ zu bekommen. Mit diesem Beispiel werden News ausgegeben.

Ein Video zum MVC Route-Block finden Sie auf [Youtube](https://www.youtube.com/watch?v=rsTuHDK47rQ\&list=PLog4smYIQ2NSZ5gfInsPxi-qGxMKCOf-s\&index=4)

## Story

Mithilfe des Story-Blockes können Sie komplette [_Stories_](../story.md) als ein atomares Element in Ihre derzeitige Story einfügen. Dadurch ist es möglich, komplexe Storytelling, welche aus diversen kleinen Stories bestehen und sich über die komplette Seite erstrecken, einfach und übersichtlich innerhalb einer Story zu organisieren und zu verwalten.

![](../../../../.gitbook/assets/Storyblock_config_2.png)

## View Component

Dieser Block unterstützt die Anzeige sogenannter View-Komponenten (siehe NET Core).

![](../../../../.gitbook/assets/ViewComponent_config_2.png)
