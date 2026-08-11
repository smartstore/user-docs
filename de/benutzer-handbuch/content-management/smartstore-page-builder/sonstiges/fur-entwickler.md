# Für Entwickler

Um einen eigenen Block zu entwickeln, benötigen Sie drei essenzielle Klassen.

**1. Block-Klasse**

class \*\[Custom]\*Block : IBlock

Fungiert als Blockmodell

**2. BlockValidator-Klasse**

class \*\[Custom]_BlockValidator : AbstractValidator<_\[Custom]\*Block>

Implementiert Regeln zur Validierung von Nutzereingaben beim Bearbeiten des Blocks

**3. BlockHandler-Klasse**

class \*\[Custom]_BlockHandler : BlockHandlerBase<_\[Custom]\*Block>

Fungiert als Controller und ist zuständig für das Laden, das Speichern und die Darstellung des Blocks. Überschreiben Sie hier die _Load_ und _Save_ sowie gegebenenfalls die Methoden _RenderCore_ sowie _GetRoute_, wenn Sie ein abweichendes Story-Template verwenden möchten.

{% hint style="info" %}
Hierbei können Sie sich auch am _SampleBlock_ im **DevTools**-Plugin orientieren.
{% endhint %}
