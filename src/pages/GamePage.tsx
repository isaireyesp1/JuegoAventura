import { useEffect } from "react";
import Phaser from "phaser";
import { GameConfig } from "../game/Game";

export default function GamePage() {
  useEffect(() => {
    const game = new Phaser.Game(GameConfig);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div
      id="game-container"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}