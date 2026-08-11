# Layout erstellen

Wenn Sie eine eigene Vorlage oder eine neue Story erstellen wollen, können Sie mit einer komplett leeren Story beginnen. Wenn Sie Ihre neue Story erstellt haben, geben Sie ihr zunächst einen [_Systemnamen_](toolbox-story-optionen.md) und speichern Sie sie. Nun können Sie für das Raster der Story ein Layout erstellen.

## Ein einfaches Layout erstellen

Damit Ihre Story ein anschauliches und [_responsives Layout_](responsive-darstellung.md) erhält, müssen Sie Ihr Raster entsprechend definieren. Als Beispiel nehmen wir hier einmal die Story-Vorlage _For Sale_, allerdings mit etwas vereinfachtem Layout, da an dieser Stelle auf das Prozentzeichen in der Mitte verzichtet wird.

Die fertige Story soll wie folgt dargestellt werden:

![](../../../../.gitbook/assets/image041.jpg)

Bei dieser Story finden drei Blöcke Verwendung. Diese sollen innerhalb eines Rasters mit den Dimensionen 2 × 2 (also jeweils 2 Spalten und Zeilen) als Kacheln angeordnet werden. Die Anordnung der Bilder ändert sich zwar bei Mobile- bzw. Desktopauflösungen, allerdings ist das 2 × 2 Raster für diese Funktionalität ausreichend. Oftmals müssen Sie Ihr Raster erweitern bzw. anpassen, wenn Sie eine Abweichung der Darstellung zwischen den Auflösungen haben möchten.

![](../../../../.gitbook/assets/image043.jpg)

Um das Layout wie gewünscht zu definieren, müssen Sie mithilfe der [_Rasterwerkzeuge_](../benutzeroberflache/das-raster.md) Spalten und Zeilen löschen beziehungsweise neue hinzufügen.

## Ein erweitertes Layout erstellen

Dadurch, dass der Text-Block bei der Vorlage Fashion in der Desktopansicht ¾ des ersten Bildes und ¼ des zweiten überlagert, muss das Raster auch darauf ausgelegt werden. Damit der Text-Block die gewünschte Überlagerung der Bilder erzielen kann, müssen die Spalten der Bilder jeweils in vier Bereiche geteilt werden. So ist es möglich, dass der Text-Block ¾ des ersten Bildes und ¼ des zweiten Bildes überlagert, sozusagen drei von vier Spalten des ersten Bildes, plus eine Spalte des nächsten. Das sieht wie folgt aus:

![](../../../../.gitbook/assets/image051.jpg)

Die Zeilen sind mit der Einheit _auto_ versehen, wodurch die Mindesthöhe der Zellen durch den Inhalt bestimmt wird. In dieser Konfiguration ist der Text-Block mindestens so hoch, dass der Inhalt (mit Abständen) in die Zelle passt. Die beiden anderen Zeilen sind ebenfalls auf \_auto\_ eingestellt. Dadurch passen sich diese dynamisch auf den Platzbedarf der mittleren Zeile an. Eine Auflistung aller verfügbaren Maßeinheiten finden Sie unter [_Größeneinheiten_](../sonstiges/glossar.md).

Ein Video zur Erstellung einer einfachen Story finden Sie auf [YouTube](https://www.youtube.com/watch?v=gCHPlywtAZI\&list=PLog4smYIQ2NSZ5gfInsPxi-qGxMKCOf-s\&index=1)
