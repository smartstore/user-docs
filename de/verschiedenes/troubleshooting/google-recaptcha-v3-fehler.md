# Google reCAPTCHA V3 Fehler

## Google reCAPTCHA V3 funktioniert nicht

Es kann vorkommen, dass nach der Umstellung auf reCAPTCHA V3 oder bei einer Neukonfiguration die Captcha-Funktion scheinbar ausfällt, ohne dass eine sichtbare Fehlermeldung im Shop erscheint.

### Symptome

* **Button-Verhalten:** Beim Klicken auf einen Button (z. B. im Kontaktformular oder bei der Registrierung) wird dieser kurzzeitig deaktiviert (ausgegraut) und nach wenigen Sekunden wieder aktiviert.
* **Keine Aktion:** Es passiert nichts weiter. Es findet kein Postback statt, das Formular wird nicht abgesendet und es gibt keinen Log-Eintrag im System-Log.
* **Browser-Konsole:** Wenn Sie die Entwicklertools des Browsers öffnen (Taste `F12`) und in die **Konsole** schauen, sehen Sie einen Fehler, der anzeigt, dass die URL `https://www.google.com/recaptcha/api.js` nicht geladen werden konnte.
  * Fehlermeldung: `400 ERR_BLOCKED_BY_ORB` oder `NS_ERROR_CORRUPTED_CONTENT`

### Ursache

Die wahrscheinlichste Ursache ist eine Unstimmigkeit in der Konfiguration des Google API Keys.

Oft wurde ein bestehender Key, der ursprünglich für **reCAPTCHA V2 (Checkbox challenge)** erstellt wurde, für die Nutzung von V3 verwendet. In der Google Cloud Console ist bei diesem Key oft noch der Typ "Website • Checkbox challenge" hinterlegt. Dieser Typ lässt sich nachträglich oft nicht auf V3 ändern und ist nicht mit der V3-Integrationsweise kompatibel, was zum Blockieren des Skripts führt.

### Lösung

Der Key-Typ muss zwingend zur Integrationsart passen.

1. Melden Sie sich in der [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin) an.
2. Versuchen Sie nicht, den alten Key zu bearbeiten. Erstellen Sie stattdessen über das **Plus-Symbol (+)** oben rechts einen komplett **neuen Key**.
3. Wählen Sie bei der Erstellung explizit den Typ **reCAPTCHA v3** aus.
4. Tragen Sie Ihre Domains ein und speichern Sie.
5. Kopieren Sie den neuen **Websiteschlüssel (Site Key)** und den **Geheimen Schlüssel (Secret Key)**.
6. Hinterlegen Sie diese neuen Schlüssel in Ihrer Smartstore-Konfiguration.

Das reCAPTCHA sollte nun sofort korrekt laden und Anfragen verarbeiten.
