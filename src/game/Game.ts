import Phaser from "phaser";
import CityScene from "./scenes/CityScene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,

  parent: "game-container",

  width: 1280,
  height: 720,

  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },

  scene: [CityScene],
};