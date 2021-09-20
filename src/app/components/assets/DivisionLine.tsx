import React from 'react';

export default function DivisionLineIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="380"
      height="4"
      viewBox="0 0 380 4"
      fill="var(--color-division-line)"
      stroke="var(--color-division-line)"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="1.49996"
        y1="1.5107"
        x2="378.5"
        y2="1.50044"
        fill="var(--color-division-line)"
        stroke="var(--color-division-line)"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
}
