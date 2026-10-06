import React from "react";

interface GeminiLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export const GeminiLogo: React.FC<GeminiLogoProps> = ({
  className = "w-6 h-6",
  size,
  animated = false
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animated ? "animate-pulse" : ""}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <defs>
        <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="35%" stopColor="#9B72CB" />
          <stop offset="70%" stopColor="#D96570" />
          <stop offset="100%" stopColor="#F48847" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
        fill="url(#geminiGrad)"
      />
    </svg>
  );
};

export default GeminiLogo;
