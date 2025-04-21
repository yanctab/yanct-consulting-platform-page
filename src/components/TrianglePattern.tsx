import React from "react";

const TrianglePattern = ({
  opacity = 0.055,
  className = "",
  color = "#F1F0FB", // default color
}: {
  opacity?: number;
  className?: string;
  color?: string;
}) => {
  const size = 64;
  const rows = 20;
  const cols = 14;
  const height = rows * size * 0.866;
  const width = cols * size;

  return (
    <svg
      className={`absolute inset-0 w-full h-full z-0 pointer-events-none ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        opacity,
        mixBlendMode: "overlay",
      }}
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((__, col) => {
          const x = col * size + (row % 2 === 0 ? 0 : size / 2);
          const y = row * size * 0.866;
          return (
            <polygon
              key={`${row}-${col}`}
              points={`${x},${y} ${x + size / 2},${y + size * 0.866} ${x - size / 2},${y + size * 0.866}`}
              fill={color}
            />
          );
        })
      )}
    </svg>
  );
};

export default TrianglePattern;

