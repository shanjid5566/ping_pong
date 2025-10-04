

import { useState, useEffect, useRef } from "react";

function App() {
  const WIDTH = 600;
  const HEIGHT = 300;
  const PADDLE_WIDTH = 8;
  const PADDLE_HEIGHT = 60;
  const BALL_SIZE = 10;
  const PADDLE_SPEED = 10;

  const [ball, setBall] = useState({ x: WIDTH / 2, y: HEIGHT / 2, dx: 3, dy: 3 });
  const [paddleY, setPaddleY] = useState(HEIGHT / 2 - PADDLE_HEIGHT / 2);
  const [isRunning, setIsRunning] = useState(false);

  const gameRef = useRef();
  const intervalRef = useRef();



  // Mouse control
  const handleMouseMove = (e) => {
    const rect = gameRef.current.getBoundingClientRect();
    let newY = e.clientY - rect.top - PADDLE_HEIGHT / 2;
    if (newY < 0) newY = 0;
    if (newY > HEIGHT - PADDLE_HEIGHT) newY = HEIGHT - PADDLE_HEIGHT;
    setPaddleY(newY);
  };



  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setBall({ x: WIDTH / 2, y: HEIGHT / 2, dx: 3, dy: 3 });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div
        ref={gameRef}
        className="relative bg-gray-800"
        style={{ width: WIDTH, height: HEIGHT }}
        onMouseMove={handleMouseMove}
        tabIndex={0}
      >
        {/* Paddle */}
        <div
          className="absolute bg-white"
          style={{
            width: PADDLE_WIDTH,
            height: PADDLE_HEIGHT,
            left: 0,
            top: paddleY,
          }}
        ></div>

        {/* Ball */}
        <div
          className="absolute bg-red-500 rounded-full"
          style={{
            width: BALL_SIZE,
            height: BALL_SIZE,
            left: ball.x,
            top: ball.y,
          }}
        ></div>
      </div>

      {/* Controls */}
      <div className="mt-4 space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

