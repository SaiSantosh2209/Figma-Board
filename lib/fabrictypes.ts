// File: fabricTypes.ts

import { MutableRefObject } from 'react';

// Assuming FabricCanvas is the correct type for canvas objects in the Fabric library
export interface FabricInitializationProps {
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  fabricRef: MutableRefObject<fabric.Canvas | null>;
}
