# Lass Mario mit DOM-Tastaturereignissen laufen

Lass uns Mario mithilfe der Tastatur laufen lassen!

![Mario Walk](assets/mario-walk.gif)

## Aufgaben

### Aufgabe 1

Erstelle die Datei `script.js` und verknüpfe sie mit der bereitgestellten Datei [index.html](./index.html).

### Aufgabe 2

In `script.js`:

- Wähle das HTML-Element mit der ID `mario` aus und speichere es in einer Variablen namens `mario`
- Wähle das HTML-Element `<img />` aus und speichere es in einer Variablen namens `imgMario`
- Setze das `src`-Attribut von `<img />` auf den Wert `assets/mario-stand.gif`

### Aufgabe 3

Erstelle eine Funktion namens `stopMario`;

- Die Funktion sollte das `src`-Attribut des Elements `imgMario` auf den Wert `./assets/mario-stand.gif` setzen

### Aufgabe 4

Erstelle eine Funktion `moveMario`;

- Sie sollte das `src`-Attribut des Elements `imgMario` überprüfen;
  - wenn das `src`-Attribut `mario-walk.gif` entspricht, tue nichts
  - andernfalls setze das `src`-Attribut auf `mario-walk.gif`

### Aufgabe 5

Aktualisiere die Funktion `moveMario`;

- Erstelle einen `keydown`-Ereignislistener am `document`-Objekt
- Der Listener sollte die Funktion `moveMario` ausführen
- `moveMario` sollte aktualisiert werden, sodass das `event`-Objekt vom Listener als Funktionsparameter verfügbar ist

### Aufgabe 6

Aktualisiere die Funktion `moveMario`;

- Wenn die `event`-Parameter-Eigenschaft `key` `ArrowLeft` entspricht;
  - sollte Mario 10 Pixel nach links bewegt werden
- Wenn die `event`-Parameter-Eigenschaft `key` `ArrowRight` entspricht;
  - sollte Mario 10 Pixel nach rechts bewegt werden

> Hinweis: Um dies zu erreichen, musst du die CSS-Eigenschaft `left` ändern

### Aufgabe 7

Wir möchten, dass Mario sich in die Richtung dreht, in die er geht. Aktualisiere die Funktion `moveMario`;

- Wenn Mario nach links gehen möchte, verwende die CSS-Eigenschaft `transform`, um ihn auf -180 Grad zu drehen
- Wenn Mario nach rechts gehen möchte, verwende die CSS-Eigenschaft `transform`, um ihn auf 0 Grad zu drehen

### Aufgabe 8

Wir möchten, dass Mario aufhört zu animieren, wenn die Taste losgelassen wird.

- Erstelle einen `keyup`-Ereignislistener am `document`-Objekt
- Der Listener sollte die Funktion `stopMario` ausführen
