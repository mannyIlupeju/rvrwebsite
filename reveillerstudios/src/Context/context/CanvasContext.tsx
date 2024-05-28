import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react'

interface CanvasContextProps {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    canvasPosition: {left: number; top:number, right:number, bottom: number}
}

const CanvasContext = createContext<CanvasContextProps | undefined>(undefined);

export const CanvasProvider: React.FC<{children: ReactNode}> = ({children}) => {
     const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [canvasPosition, setCanvasPosition] = useState({ left: 0, top: 0, right:0, bottom:0 });

  useEffect(() => {
    if (canvasRef.current) {
      const { left, top, right, bottom } = canvasRef.current.getBoundingClientRect();
      setCanvasPosition({ left, top, right, bottom });
    }
  }, []);

    return (
    <CanvasContext.Provider value={{ canvasRef, canvasPosition }}>
      {children}
    </CanvasContext.Provider>
  );
}

export const useCanvas = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }
  return context;
};