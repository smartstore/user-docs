# Zugriffsbeschränkungen (ACL)

**Smartstore** stellt **Access Control Lists (ACLs)** zur Verfügung, mit denen sich der Zugang zu einem System auf autorisierte Nutzer bestimmter Kundengruppen beschränken lässt. Zugriffsrechte können für Warengruppen und Produkte konfiguriert werden. Die Zugriffsbeschränkungen für Produkte und Warengruppen legen fest, welche Inhalte für registrierte Kunden im Frontend Ihres Shops angezeigt werden.

## Anwendungsszenario

Stellen Sie sich vor, Sie betreiben ein Geschäft mit altersbeschränkten Produkten. Ihre Kunden müssen bestätigen, dass sie über 18 Jahre alt sind, indem sie Ihnen eine Kopie ihres Ausweises senden. Legen Sie zunächst eine Kundengruppe an und geben Sie dieser das Zugriffsrecht auf die Warengruppe, welche die Produkte mit Altersbeschränkung enthält. Nach Empfang der Ausweiskopie können Sie den Kunden nun dieser Kundengruppe zuordnen, wodurch die Produkte aus dieser Warengruppe für diesen Kunden einsehbar und bestellbar werden. Auf diese Weise können Sie sicherstellen, dass Besucher Ihres Shops altersbeschränkte Produkte nicht erreichen können, bis bestätigt ist, dass sie über 18 sind.

## Wie Sie Zugriffsbeschränkungen konfigurieren

Sie können den Zugriff auf Warengruppen und Produkte beschränken und festlegen, welche Kundengruppen im Frontend Ihres Shops Zugriff auf die jeweiligen Warengruppen und Produkte erhalten. Die Vergabe von Zugriffsrechten für eine Warengruppe oder ein Produkt ist identisch. Navigieren Sie einfach zu der Registerkarte **Zugriffsbeschränkung** der jeweiligen Warengruppe oder des jeweiligen Produkts und fügen Sie dort die Kundengruppen hinzu, denen der Zugang erlaubt ist.

![](../../.gitbook/assets/smartstore-acl.png)

{% hint style="info" %}
**Diese Konfiguration für Kindelemente übernehmen**

Diese Funktion übernimmt die Zugriffsrechtskonfiguration dieser Warengruppe für alle Unterwarengruppen und Produkte.\
Bitte beachten Sie, dass die Änderungen der Zugriffsrechte zunächst gespeichert werden müssen, bevor diese für Unterwarengruppen und Produkte übernommen werden können.\
**Vorsicht**: Bitte beachten Sie, dass vorhandene **Zugriffsrechte überschrieben beziehungsweise gelöscht werden**.
{% endhint %}
