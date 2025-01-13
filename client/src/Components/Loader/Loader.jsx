import React, { useState, useEffect } from "react";
import './Loader.css'
const Loader = () => {
  const [stage, setStage] = useState(0); // Track animation stages

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 2000); // Show logo after bottom line
    const timer2 = setTimeout(() => setStage(2), 4000); // Start top line after logo
    const timer3 = setTimeout(() => setStage(3), 6000); // Hide loader after top line

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (stage === 3) return null; // Remove loader after animations

  return (
    <div className={`fixed overflow-hidden inset-0 bg-black flex items-center justify-center z-50 ${stage===3? 'active-loader' :''}`}>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Bottom Line */}
        <div
          className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[2px] bg-custom-gold ${
            stage >= 1 ? "custom-height" : "animate-growBottom"
          }`}
        ></div>

        {/* Logo */}
        {stage >= 1 && (
          <div
            className={`absolute text-white text-2xl tracking-widest font-light ${
              stage === 1 ? "animate-zoomOut":"size"
            }`}
          >
            MIGHTY PLETHORA
          </div>
        )}

        {/* Top Line */}
        {stage === 2 && (
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-[2px] bg-custom-gold animate-growTop"></div>
        )}
      </div>
    </div>
  );
};

export default Loader;
