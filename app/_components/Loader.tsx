import React from "react";

function Loader() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="-20 -20 42 42"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000"
      data-testid="oval-svg"
    >
      <g fill="none" fill-rule="evenodd">
        <g
          transform="translate(1 1)"
          stroke-width="2"
          data-testid="oval-secondary-group"
        >
          <circle
            stroke-opacity=".5"
            cx="0"
            cy="0"
            r="20"
            stroke="#fff"
            stroke-width="2"
          ></circle>
          <path d="M20 0c0-9.94-8.06-20-20-20">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
          </path>
        </g>
      </g>
    </svg>
  );
}

export default Loader;
