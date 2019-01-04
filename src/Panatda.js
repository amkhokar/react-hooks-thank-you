import react from "react";
const Panatda = props => {
  return (
    <svg width="271" height="102" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>background</title>
        <rect
          fill="none"
          id="canvas_background"
          height="104"
          width="273"
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
          xmlSpace="preserve"
          text-anchor="start"
          font-family="'Shadows Into Light', serif"
          font-size="84"
          id="svg_1"
          y="78"
          x="2.5"
          stroke-width="5"
          stroke="#000"
          fill="#00b3b4"
        >
          Panatda
        </text>
      </g>
    </svg>
  );
};

export default Panatda;
