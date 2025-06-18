import React, { useState, useEffect, useRef } from "react";

const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dogSpeed, setDogSpeed] = useState(2);
  const [trainSpeed] = useState(4);
  const [dogX, setDogX] = useState(50);
  const [trainX, setTrainX] = useState(1000);
  const [collision, setCollision] = useState(false);
  const [flash, setFlash] = useState(false);

  const tunnelX = 450;
  const tunnelWidth = 100;
  const dogWidth = 48;
  const trainWidth = 48;

  const resetGame = () => {
    setDogX(50);
    setTrainX(1000);
    setDogSpeed(2);
    setCollision(false);
    setFlash(false);
  };

  // Update positions 60 FPS
  useEffect(() => {
    const interval = setInterval(() => {
      setDogX((prev) => prev + dogSpeed);
      setTrainX((prev) => prev - trainSpeed);
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [dogSpeed, trainSpeed]);

  // Check collision on position update
  useEffect(() => {
    const dogFront = dogX + dogWidth;
    const dogBack = dogX;
    const trainFront = trainX + trainWidth;
    const trainBack = trainX;

    const overlap = dogFront > trainBack && trainFront > dogBack;

    const insideTunnel =
      dogFront > tunnelX &&
      dogBack < tunnelX + tunnelWidth &&
      trainFront > tunnelX &&
      trainBack < tunnelX + tunnelWidth;

    if (overlap && insideTunnel) {
      setCollision(true);
    } else {
      setCollision(false);
      setFlash(false);
    }
  }, [dogX, trainX]);

  // Flash background on collision
  useEffect(() => {
    let flashTimeout: number;
    if (collision) {
      setFlash(true);
      flashTimeout = window.setTimeout(() => setFlash(false), 200);
    }
    return () => clearTimeout(flashTimeout);
  }, [collision]);

  // Reset train position when it goes off screen
  useEffect(() => {
    if (trainX + trainWidth < 0) {
      setTrainX(1000);
    }
  }, [trainX]);

  // Draw canvas scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Flash red background if flashing
    if (flash) {
      ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Draw sky background
    ctx.fillStyle = "#c8e6ff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw tunnel
    ctx.fillStyle = "#888";
    ctx.fillRect(tunnelX, 160, tunnelWidth, 80);

    // Draw dog emoji
    ctx.font = "48px Segoe UI Emoji";
    ctx.fillText("🐶", dogX, 200);

    // Draw train emoji
    ctx.fillText("🚂", trainX, 200);

    // Draw HUD
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Dog Speed: ${dogSpeed.toFixed(2)}`, 10, 20);
    ctx.fillText(`Train Speed: ${trainSpeed.toFixed(2)}`, 10, 40);
    ctx.fillText(`Relative Velocity: ${(trainSpeed - dogSpeed).toFixed(2)}`, 10, 60);

    // Draw collision text whenever collision is true
if (collision) {
    ctx.font = "32px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("🚨 COLLISION!", 400, 50);
  }
  
  }, [dogX, trainX, dogSpeed, trainSpeed, collision, flash]);

  return (
    <div style={{ userSelect: "none" }}>
      <h1>Dog vs Train: Relative Velocity</h1>
      <canvas ref={canvasRef} width={1000} height={400} style={{ border: "1px solid black" }} />
      <div style={{ marginTop: 10 }}>
        <button onClick={() => setDogSpeed((prev) => prev + 0.2)}>Accelerate Dog</button>{" "}
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
};

export default Game;
