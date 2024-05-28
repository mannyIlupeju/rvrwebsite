declare module 'canvas-sketch' {
  interface SketchSettings {
    dimensions?: [number, number];
    animate?: boolean;
    canvas?: HTMLCanvasElement | null;
    context?: '2d' | 'webgl' | 'webgl2' | 'bitmaprenderer' | '2d-webgl';
    duration?: number;
    fps?: number;
    totalFrames?: number;
    playbackRate?: 'fixed' | 'throttle';
    loop?: boolean;
  }

  interface SketchProps {
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
  }

  interface SketchManager {
    unload: () => void;
  }

  type SketchFunction = (props: SketchProps) => (props: SketchProps) => void;

  function canvasSketch(sketch: SketchFunction, settings: SketchSettings): Promise<SketchManager>;

  export = canvasSketch;
}
