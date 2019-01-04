import react from "react";
const Ernest = () => {
  return (
    <svg width="308" height="101" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect
          fill="none"
          id="canvas_background"
          height="103"
          width="310"
          y="-1"
          x="-1"
        />
        <g
          display="none"
          overflow="visible"
          y="0"
          x="0"
          height="100%"
          width="100%"
          id="canvasGrid"
        >
          <rect
            fill="url(#gridpattern)"
            stroke-width="0"
            y="0"
            x="0"
            height="100%"
            width="100%"
          />
        </g>
      </g>
      <g>
        <title>Layer 1</title>
        <text
          stroke-dasharray="5,2,2,2"
          xmlSpace="preserve"
          text-anchor="start"
          font-family="'Courier New', Courier, monospace"
          font-size="84"
          id="svg_1"
          y="73"
          x="3"
          stroke-width="6"
          stroke="#000"
          fill="#00b3b4"
        >
          Ernest
        </text>
      </g>
    </svg>
  );
};
