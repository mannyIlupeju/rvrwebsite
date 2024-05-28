import React, { useRef, useEffect } from "react";
import { useCanvas } from "@/Context/context/CanvasContext";
import "./Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const { canvasPosition } = useCanvas();
  const margin = 50;


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorTracker(e);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  function setCursorTracker(e: MouseEvent): void {
    let cursorX = e.clientX;
    let cursorY = e.clientY;
    const cursorWidth = cursorRef.current?.offsetWidth || 0;
    const cursorHeight = cursorRef.current?.offsetHeight || 0;


    if (cursorX < (window.innerWidth / 2 - cursorX / 2) / 4)
      cursorX = (window.innerWidth / 2 - cursorX / 2) / 4;
    if (cursorX >= window.innerWidth * 0.5 + cursorWidth - margin)
      cursorX = window.innerWidth * 0.5 + cursorWidth - margin;
    if (
      cursorY - margin <
      (cursorHeight - window.innerHeight / 2) * 0.5 + (margin + 12)
    )
      cursorY = (cursorHeight - window.innerHeight / 2) * 0.5 + (margin + 12);
    if (
      cursorY - margin >
      (cursorHeight + window.innerHeight / 2) * 0.5 + (margin - 2)
    )
      cursorY = (cursorHeight + window.innerHeight / 2) * 0.5 + (margin - 2);

    if (cursorRef.current) {
      cursorRef.current.style.left = `${cursorX}px`;
      cursorRef.current.style.top = `${cursorY}px`;
    }

     if (cursorRef.current) {
      gsap.to(cursorRef.current, {
   
        ease: "power2.out",
        duration: 0.5,
      });
    }


  }





  useEffect(() => {
 
    window.addEventListener("mousemove", setCursorTracker);

    return () => {
      window.removeEventListener("mousemove", setCursorTracker);
    };

    
  }, [canvasPosition]);

  return <div className='custom-cursor' ref={cursorRef}></div>;
};

export default Cursor;
