# Allgemeine Einstellungen

Unter **Konfiguration > Einstellungen > Allgemeine Einstellungen** legen Sie Vorgaben für den Shop fest. Wählen Sie bei mehreren Shops zuerst den Geltungsbereich.

## Allgemein

| Einstellung                                 | Beschreibung                                                                                                                                                                        |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shop geschlossen                            | Mit dieser Einstellung können Sie den Shop für Wartungsarbeiten schließen.                                                                                                          |
| Administrator kann geschlossenen Shop sehen | Erlaubt angemeldeten Administratoren, den geschlossenen Shop weiterhin aufzurufen. Die Option wird bei geschlossenem Shop angezeigt.                                                |
| Standard-Zeitzone                           | Zeitzone für die Anzeige von Datums- und Zeitangaben im Shop.                                                                                                                       |
| Kunden können die Zeitzone einstellen       | Erlaubt Kunden, in ihrem Konto eine eigene Zeitzone auszuwählen.                                                                                                                    |
| Standard E-Mail-Konto                       | Legt das Standardkonto für den E-Mail-Versand fest. Die Zugangsdaten und Versandserver verwalten Sie bei den E-Mail-Konten; Nachrichtenvorlagen können ein eigenes Konto verwenden. |

## Suchmaschinen

Im Reiter **SEO** konfigurieren Sie die shopweiten Vorgaben für Suchmaschinen. Erklärungen zu Meta-Angaben, kanonischen URLs, robots.txt und XML-Sitemap finden Sie auf der Seite [SEO](../../allgemeine-konzepte/seo.md).

Für die Startseite gibt es zusätzlich eigene Meta-Angaben. Bei der Bildung von URL-Aliasen steuern Sie außerdem, ob Unicode-Zeichen zugelassen werden und welche Zeichen ersetzt werden.

{% hint style="info" %}
Das Testfeld prüft die URL-Namensbildung mit den bereits gespeicherten Einstellungen. Speichern Sie geänderte Konvertierungsregeln daher vor einem Test.
{% endhint %}

## Sicherheit

| Einstellung                                      | Beschreibung                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sicherheitsschlüssel (private key)               | Der Sicherheitsschlüssel wird benutzt, um sensible Daten zu verschlüsseln.                                                                                                                                                                                                                                                               |
| Für den Adminbereich erlaubte IP                 | Beschränkt den Zugriff auf die Administration auf die eingetragenen IP-Adressen. Mehrere Adressen trennen Sie durch Kommas. Ein leeres Feld hebt diese IP-Beschränkung auf. Tragen Sie vor dem Speichern auch Ihre eigene, vom Server erkannte IP-Adresse ein.                                                                           |
| Menü in Abhängigkeit der Berechtigungen anzeigen | Blendet Menüpunkte der Administration entsprechend den Berechtigungen des angemeldeten Benutzers ein oder aus.                                                                                                                                                                                                                           |
| Honeypot aktivieren                              | Ergänzt unterstützte Formulare um ein für Besucher unsichtbares Prüffeld. Wird es ausgefüllt, wird die Anfrage als Bot-Eingabe abgewiesen. Dies betrifft unter anderem Registrierung, Kontaktformular, Newsletter-Anmeldung und Produktanfragen.                                                                                         |
| CAPTCHA aktivieren                               | Schaltet den CAPTCHA-Schutz ein. Zusätzlich müssen ein konfigurierter Anbieter und mindestens eine zu schützende Seite ausgewählt sein.                                                                                                                                                                                                  |
| Anbieter                                         | Wählt den CAPTCHA-Dienst. Über **Konfigurieren** öffnen Sie dessen Einstellungen. Weitere Anbieter können durch installierte Plugins hinzukommen.                                                                                                                                                                                        |
| CAPTCHA auf folgenden Seiten aktivieren          | Wählt die zu schützenden Formulare, etwa Login, Registrierung, Passwort-Wiederherstellung, Kontakt, Teilen von Produkten oder Wunschlisten, Produktanfragen und Produktbewertungen. Auch Blog, News, Forum und Widerruf werden angeboten; diese Auswahl stellt die jeweilige Funktion oder ein dafür erforderliches Plugin nicht bereit. |

### Google reCAPTCHA konfigurieren

Google reCAPTCHA ist als Anbieter integriert. Wählen Sie unter **Anbieter** den Eintrag **Google reCAPTCHA** und öffnen Sie **Konfigurieren**. Die Schlüssel verwalten Sie bei [Google reCAPTCHA](https://www.google.com/recaptcha/admin).

Hinterlegen Sie **Öffentlicher Schlüssel** und **Privater Schlüssel** und wählen Sie unter **Version** v2 oder v3 passend zu Ihren Schlüsseln. Die Version wird ausdrücklich in diesem Feld gewählt, nicht über das Design.

Für **v2** wählen Sie die **Größe** Normal, Kompakt oder Unsichtbar. Bei Normal und Kompakt steht **Dunkles Design verwenden** zur Verfügung; bei Unsichtbar bestimmen Sie die **Badge Position**.

Bei **v3** steuert **Score-Schwelle** den Mindestwert für eine erfolgreiche Prüfung: Ein höherer Wert ist strenger. Mit der Option zum Verbergen des v3-Badges können Sie dessen Darstellung ändern. Bei ausgeblendetem Badge gibt Smartstore stattdessen einen Hinweis mit Links auf Googles Datenschutzrichtlinie und Nutzungsbedingungen aus.

**Widget-URL** bezeichnet die Adresse des Client-Skripts, **Verify-URL** die serverseitige Prüfadresse. Leere Felder verwenden die eingebauten Google-Adressen.

Speichern Sie die Anbieterkonfiguration und anschließend die allgemeinen Einstellungen. Der Status **Konfiguriert** zeigt bei Google reCAPTCHA an, dass beide Schlüssel eingetragen sind; er bestätigt nicht, dass Schlüsseltyp und Domain korrekt zusammenpassen. Prüfen Sie daher anschließend eines der ausgewählten Formulare.

{% hint style="info" %}
**Probleme mit reCAPTCHA V3?**

Falls der Button im Formular nicht reagiert ("flackert") und in der Browser-Konsole ein Fehler `400 ERR_BLOCKED_BY_ORB` erscheint, prüfen Sie bitte unseren Troubleshooting-Guide. Oft liegt dies an einem falschen Key-Typ.

[Zur Problemlösung: Google reCAPTCHA V3 Fehler](../../../verschiedenes/troubleshooting/google-recaptcha-v3-fehler.md)
{% endhint %}

## Lokalisierung

| Einstellung                                                       | Beschreibung                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Suchmaschinenfreundliche URLs                                     | Aktiviert Sprachcodes in URLs, zum Beispiel `/de/` oder `/en/`. Die Option betrifft die Sprachzuordnung und nicht die Erzeugung lesbarer Produktnamen in URLs.                                                                                |
| Verhalten bei Standardsprache                                     | Nur bei aktivierten sprachabhängigen URLs: Legt fest, ob der Sprachcode der Standardsprache ergänzt, unverändert toleriert oder aus der URL entfernt wird. Die Standardsprache ist die erste aktive Sprache des Shops.                        |
| Verhalten bei ungültiger Sprache                                  | Nur bei aktivierten sprachabhängigen URLs: Legt fest, ob ungültige oder nicht verfügbare Sprachcodes toleriert werden, zur aktiven beziehungsweise Standardsprache umgeleitet wird oder eine Seite-nicht-gefunden-Antwort (HTTP 404) erfolgt. |
| Bilder zur Sprachauswahl verwenden                                | Aktivieren, wenn Sie Flaggen-Icons zur Sprachauswahl verwenden möchten.                                                                                                                                                                       |
| Browsersprache erkennen                                           | Legt fest, ob beim Erstbesuch die Browsersprache des Besuchers automatisch erkannt und zugewiesen werden soll (wenn inaktiv, wird die Standardsprache des Shops zugewiesen).                                                                  |
| Region in der Sprachauswahl anzeigen                              | Ergänzt die Region beziehungsweise das Land im Sprachnamen, zum Beispiel Deutsch (Deutschland) statt Deutsch.                                                                                                                                 |
| In der Sprachauswahl den Sprachnamen in der Landesprache anzeigen | Zeigt den Eigennamen der Sprache, etwa English. Ohne diese Option verwendet Smartstore vorrangig den im Backend gepflegten beziehungsweise übersetzten Sprachnamen.                                                                           |

## PDF

| Einstellung                                  | Beschreibung                                                                                                                                                                                                                                                      |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PDFs aktivieren                              | Aktiviert die PDF-Funktion und die entsprechenden Download-Angebote, beispielsweise für Bestellungen.                                                                                                                                                             |
| US-Letter-Format benutzen                    | Legt fest, ob das amerikanische Letter-Format benutzt werden soll. Sonst wird das DIN A4-Format benutzt (Standard).                                                                                                                                               |
| Maximale Anzahl zu druckender Objekte        | Begrenzt Sammeldrucke, beispielsweise von Bestellungen oder Lieferscheinen. Bei Überschreitung wird der Vorgang abgebrochen und eine Meldung angezeigt. Gemeint ist die Zahl der ausgewählten Objekte, nicht die Positionen innerhalb einer einzelnen Bestellung. |
| PDF-Logo                                     | Legt das Logo für PDF-Belege fest. Eine kleine Dateigröße wird empfohlen.                                                                                                                                                                                         |
| Bei Bestelleingang PDF mitsenden             | Erzeugt das Auftrags-PDF und hängt es an die Kundenbenachrichtigung zum Bestelleingang an.                                                                                                                                                                        |
| Bei Abschluss einer Bestellung PDF mitsenden | Erzeugt das Auftrags-PDF und hängt es an die Kundenbenachrichtigung zum Abschluss der Bestellung an.                                                                                                                                                              |

## Firma und Kontaktdaten

Die Angaben verteilen sich auf die Registerkarten **Firma** und **Kontaktdaten**. In **Firma** pflegen Sie Firmenname, Anrede, Titel, Vor- und Nachname, die Bezeichnung und Namen der Unternehmensleitung, Straße und Adresszusatz, Postleitzahl, Stadt, Land und Region sowie Umsatzsteuer-ID, Handelsregister und Steuernummer. Diese Daten stehen unter anderem für Belege und Nachrichtenvorlagen zur Verfügung.

## Soziale Netzwerke

In der Registerkarte **Soziale Netzwerke** dienen **Facebook App ID** und **Benutzername auf X** den Metadaten beim Teilen von Seiten. Der Benutzername auf X beginnt mit `@`. Diese Angaben sind von den Profil-Links im Footer unabhängig.

Aktivieren Sie **Zeige Links zu Sozialen Netzwerken im Footer**, um die hinterlegten Profile im Seitenfuß anzuzeigen. Tragen Sie die vollständigen Profil-URLs ein. Ein leeres Feld blendet das jeweilige Netzwerk aus.
