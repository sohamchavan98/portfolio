'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 53;
// The frames are named frame_00_delay-0.066s.png to frame_52_delay-0.066s.png
const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(2, '0');
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // We'll use a container ref to track scroll progress over 500vh
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress (0 to 1) to frame index (0 to 52)
  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Function to draw a specific frame to the canvas
  const drawFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[index];
    if (!img) return;

    // Implementation of object-fit: cover for canvas
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let renderWidth, renderHeight, xOffset, yOffset;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      xOffset = 0;
      yOffset = (canvas.height - renderHeight) / 2;
    } else {
      // Image is wider than canvas
      renderWidth = canvas.height * imgRatio;
      renderHeight = canvas.height;
      xOffset = (canvas.width - renderWidth) / 2;
      yOffset = 0;
    }

    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
  };

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame after resize
        drawFrame(Math.round(currentFrameIndex.get()));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup

    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, images]);

  // Draw initial frame once loaded
  useEffect(() => {
    if (isLoaded) {
      drawFrame(0);
    }
  }, [isLoaded]);

  // Update canvas when scroll progress (and thus frame index) changes
  useMotionValueEvent(currentFrameIndex, 'change', (latest) => {
    if (isLoaded) {
      // Use requestAnimationFrame for smoother rendering
      requestAnimationFrame(() => {
        drawFrame(Math.round(latest));
      });
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      {!isLoaded && (
        <div className="sticky top-0 h-screen w-full flex items-center justify-center text-white/50 z-50">
          Loading assets...
        </div>
      )}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
        {/* Render overlay locked to the 500vh container's scroll progress */}
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
