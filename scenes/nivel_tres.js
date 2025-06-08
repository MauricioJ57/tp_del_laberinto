export default class nivel_tres extends Phaser.Scene {
    constructor() {
        super("niveltresjuego");
    }

    init() {
        
    }

    preload() {
        this.load.tilemapTiledJSON("nivel_3", "public/assets/tilemap/nivel_3.json");
        this.load.image("tiles", "public/assets/tilemap_packed.png");
    }

    create() {
        const map = this.make.tilemap({ key: "nivel_3" })
        const tileset = map.addTilesetImage("tilemap_packed", "tiles");
        const fondoLayer = map.createLayer("fondo_pantalla", tileset, 0, 0);
        const capasLayer = map.createLayer("bordes_de_mapa", tileset, 0, 0);
        capasLayer.setCollisionByProperty({ collides: true });

        const objects2Layer = map.getObjectLayer("objetos3");

        const spawnPoint = objects2Layer.objects.find(obj => obj.name === "spawn3" || obj.name === "spawn3" || obj.name === "spawnPoint3");

        this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "cuadrado");


        this.physics.add.collider(this.player, capasLayer);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.restart = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#fff'
        });
        this.scoreText.setScrollFactor(0);

        this.victoryText = this.add.text(350, 400, "GANASTE", {
            fontSize: '64px',
            fill: '#00ff00'
        }).setOrigin(0.5, 0.5).setVisible(false);

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-160);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(160);
        } else {
            this.player.setVelocityY(0);
        }
        
    }
}