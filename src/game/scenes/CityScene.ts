import Phaser from "phaser";

export default class CityScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("CityScene");
  }

  preload() {
  this.load.image(
    "player",
    "https://labs.phaser.io/assets/sprites/car90.png"
  );
}

create() {
  this.cameras.main.setBackgroundColor("#5fb760");

  const g = this.add.graphics();

  // Césped gigante
  g.fillStyle(0x5fb760);
  g.fillRect(0, 0, 4000, 4000);

  // Calles horizontales
  g.fillStyle(0x2f2f2f);

  g.fillRect(0, 700, 4000, 220);
  g.fillRect(0, 1700, 4000, 220);
  g.fillRect(0, 2700, 4000, 220);

  // Calles verticales
  g.fillRect(900, 0, 220, 4000);
  g.fillRect(1900, 0, 220, 4000);
  g.fillRect(2900, 0, 220, 4000);

  // Edificios
  g.fillStyle(0xd6b37a);

  for (let x = 100; x < 3800; x += 500) {
    for (let y = 100; y < 3800; y += 500) {
      g.fillRect(x, y, 250, 250);
    }
  }

  // Líneas de carretera
  g.fillStyle(0xffffff);

  for (let x = 0; x < 4000; x += 80) {
    g.fillRect(x, 800, 40, 8);
    g.fillRect(x, 1800, 40, 8);
    g.fillRect(x, 2800, 40, 8);
  }

  this.physics.world.setBounds(0, 0, 4000, 4000);
  this.cameras.main.setBounds(0, 0, 4000, 4000);

  this.player = this.physics.add.sprite(
    500,
    500,
    "player"
  );

  this.player.setScale(2);

  this.cursors =
    this.input.keyboard.createCursorKeys();

  this.cameras.main.startFollow(this.player);

  this.cameras.main.setZoom(1.2);
}

  update() {
    const speed = 200;

    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-speed);
    }

    if (this.cursors.right.isDown) {
      this.player.setVelocityX(speed);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-speed);
    }

    if (this.cursors.down.isDown) {
      this.player.setVelocityY(speed);
    }
  }
}