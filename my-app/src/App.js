import { useEffect, useRef } from 'react';
import simba from './simba.gif';
import './App.css';

function App() {
  const textRef = useRef(null);

  useEffect(() => {
    const pos = { x: 100, y: 100 };
    const vel = { dx: 2, dy: 1.5 };
    let frameId;

    function animate() {
      const text = textRef.current;
      const container = text?.parentElement;
      if (!container || !text) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      pos.x += vel.dx;
      pos.y += vel.dy;

      const maxX = container.clientWidth - text.offsetWidth;
      const maxY = container.clientHeight - text.offsetHeight;

      if (pos.x <= 0) { pos.x = 0; vel.dx = Math.abs(vel.dx); }
      if (pos.x >= maxX) { pos.x = maxX; vel.dx = -Math.abs(vel.dx); }
      if (pos.y <= 0) { pos.y = 0; vel.dy = Math.abs(vel.dy); }
      if (pos.y >= maxY) { pos.y = maxY; vel.dy = -Math.abs(vel.dy); }

      text.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={simba} alt="simba" />
        <span ref={textRef} className="simba-text">simba</span>
      </header>
    </div>
  );
}

export default App;
