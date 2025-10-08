import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-950">
      <svg
        className="w-24 h-24"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
            <stop offset="0%" stopColor="hsl(313,90%,55%)" />
            <stop offset="100%" stopColor="hsl(223,90%,55%)" />
          </linearGradient>
          <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(313,90%,55%)" />
            <stop offset="100%" stopColor="hsl(223,90%,55%)" />
          </linearGradient>
        </defs>

        {/* Outer Ring */}
        <circle
          className="animate-[ring_2s_ease-out_infinite]"
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke="url(#pl-grad1)"
          strokeWidth="36"
          strokeDasharray="0 257 1 257"
          strokeDashoffset="0.01"
          strokeLinecap="round"
          transform="rotate(-90,100,100)"
        />

        {/* Moving Ball */}
        <line
          className="animate-[ball_2s_ease-out_infinite]"
          stroke="url(#pl-grad2)"
          x1="100"
          y1="18"
          x2="100.01"
          y2="182"
          strokeWidth="36"
          strokeDasharray="1 165"
          strokeLinecap="round"
        />
      </svg>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes ring {
            from {
              stroke-dasharray: 0 257 0 0 1 0 0 258;
            }
            25% {
              stroke-dasharray: 0 0 0 0 257 0 258 0;
            }
            50%, to {
              stroke-dasharray: 0 0 0 0 0 515 0 0;
            }
          }
          @keyframes ball {
            from, 50% {
              animation-timing-function: ease-in;
              stroke-dashoffset: 1;
            }
            64% {
              animation-timing-function: ease-in;
              stroke-dashoffset: -109;
            }
            78% {
              animation-timing-function: ease-in;
              stroke-dashoffset: -145;
            }
            92% {
              animation-timing-function: ease-in;
              stroke-dashoffset: -157;
            }
            57%, 71%, 85%, 99%, to {
              animation-timing-function: ease-out;
              stroke-dashoffset: -163;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
