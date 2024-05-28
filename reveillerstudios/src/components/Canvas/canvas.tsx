import React, { useEffect, useRef } from 'react';
import {useCanvas} from '../../Context/context/CanvasContext'
import canvasSketch from 'canvas-sketch';
import Cursor from '../Cursor/cursor';

const Sketch: React.FC = () => {
    const { canvasRef } = useCanvas();
  

  useEffect(() => {
    const resizeCanvas = () => {
      if(canvasRef.current){
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    };


    const settings = {
      animate: true,
      canvas: canvasRef.current,
    };

    const sketch = ({ context, width, height }: { context: CanvasRenderingContext2D; width: number; height: number }) => {
      return ({ context, width, height }: { context: CanvasRenderingContext2D; width: number; height: number }) => {
        context.fillStyle = "black";
        context.fillRect(0,0, width, height);
      };
    };

    const manager = canvasSketch(sketch, settings);

    resizeCanvas();

    return () => {
      manager.then((m) => m.unload());
    };
  }, [canvasRef]);

  return (
    <div className="relative">
      <canvas ref={canvasRef}></canvas>
      <Cursor/>
    </div>

  )
};

export default Sketch;