# Für Entwickler

# Entwicklung von Blöcken

Um einen eigenen Block zu entwickeln, benötigen Sie drei essenzielle Klassen.

**1\. Block-Klasse**

class *\[Custom\]*Block : IBlock

Fungiert als Block-Model

**2\. BlockValidator-Klasse**

class *\[Custom\]*BlockValidator : AbstractValidator<*\[Custom\]*Block>

Implementiert Regeln zur Validierung von Nutzereingaben beim Bearbeiten des Blockes

**3\. BlockHandler-Klasse**

class *\[Custom\]*BlockHandler : BlockHandlerBase<*\[Custom\]*Block>

Fungiert als Controller und ist zuständig für das Laden, das Speichern und die Darstellung des Blockes. Überschreiben Sie hier die *Load* und *Save* Methoden und ggf. die Methoden *RenderCore*, sowie *GetRoute*, wenn Sie ein abweichendes Story-Template verwenden möchten.

**Hinweis:** Hierbei können Sie sich auch am *SampleBlock* im **DevTools** Plugin orientieren.