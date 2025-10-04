
import { useState, useEffect, useRef } from "react";

function App() {
  const WIDTH = 600;
  const HEIGHT = 300;
  const PADDLE_WIDTH = 8;
  const PADDLE_HEIGHT = 60;
  const BALL_SIZE = 10;
  const PADDLE_SPEED = 10;

  const [ball, setBall] = useState({
    x: WIDTH / 2,
    y: HEIGHT / 2,
    dx: 3,
    dy: 3,
  });
  const [paddleY, setPaddleY] = useState(HEIGHT / 2 - PADDLE_HEIGHT / 2);
  const [isRunning, setIsRunning] = useState(false);

  const gameRef = useRef();
  const intervalRef = useRef();



  return (
    <div className="flex flex-col items-center mt-10">
      <div
        ref={gameRef}
        className="relative bg-gray-800"
        style={{ width: WIDTH, height: HEIGHT }}
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


    </div>
  );
}

export default App;
