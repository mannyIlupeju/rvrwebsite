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
          const img = new Image();
          img.onload = function(){

            context.clearRect(0, 0, width, height);
            context.fillRect(0,0, width *2 , height * 2);
            context.fillStyle = "black";

            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const desiredSizePercentage = 0.5;
            const imageWidth = (screenWidth * desiredSizePercentage) * 1;
            const imageHeight = (screenHeight * desiredSizePercentage) * 0.8;

 
            const x = width / 2 - imageWidth / 2;
            const y = height/2 - imageHeight/2;
            console.log(screenWidth, screenHeight, x, y)
            context.drawImage(img, x,y, imageWidth, imageHeight);
          }
          img.src = "/images/reveillerstudiosmainlogo2.png";
      };
    };

    const manager = canvasSketch(sketch, settings);

    resizeCanvas();

    return () => {
      manager.then((m) => m.unload());
    };
  }, [canvasRef]);

  return (
    <div className="relative h-min cursor-pointer">
      <canvas ref={canvasRef}></canvas>
      <Cursor/>
    </div>

  )
};

export default Sketch;