'use client';
import { layerControl } from '@/js/common';

export default function Modal() {
  return (
    <>
      <div id="Modal" className="hidden [&.On]:block bg-[rgba(0,0,0,0.5)] z-50 fixed top-0 left-0 w-full h-full" onClick={layerControl.Off}></div>
    </>
  );
}
