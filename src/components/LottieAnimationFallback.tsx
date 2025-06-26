
import React from "react";

interface LottieAnimationFallbackProps {
  className?: string;
  width?: number;
  height?: number;
}

const LottieAnimationFallback: React.FC<LottieAnimationFallbackProps> = ({
  className = "",
  width = 200,
  height = 200,
}) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-br from-pulse-200 to-pulse-300 rounded-lg animate-pulse ${className}`}
      style={{ width, height }}
    >
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-2 bg-pulse-500 rounded-full animate-bounce"></div>
        <p className="text-pulse-700 text-sm font-medium">Loading Animation</p>
      </div>
    </div>
  );
};

export default LottieAnimationFallback;
