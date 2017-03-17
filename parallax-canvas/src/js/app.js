//app.js
import "../scss/main.scss";
if (document.body) {
    _init();
} else {
    window.addEventListener('DOMContentLoaded', _init);
}

var stage, renderer, far, mid;

function _init() {
    stage = new PIXI.Stage(0x66FF99);
    renderer = new PIXI.autoDetectRenderer(
        512,
        384,
        document.getElementById("parallax-canvas")
    );

    var farTexture = PIXI.Texture.fromImage("img/bg-far.png");
    far = new PIXI.TilingSprite(farTexture, 512, 256);
    far.position.x = 0;
    far.position.y = 0;
    far.tilePosition.x = 0;
    far.tilePosition.y = 0;
    stage.addChild(far);

    var midTexture = PIXI.Texture.fromImage("img/bg-mid.png");
    mid = new PIXI.TilingSprite(midTexture, 512, 256);
    mid.position.x = 0;
    mid.position.y = 128;
    mid.tilePosition.x = 0;
    mid.tilePosition.y = 0;
    stage.addChild(mid);

    requestAnimFrame(_update);
}

function _update() {
    far.tilePosition.x -= 0.128;
    mid.tilePosition.x -= 0.64;

    renderer.render(stage);

    requestAnimFrame(_update);
}
