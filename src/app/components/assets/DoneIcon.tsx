import React from 'react';

export default function DoneIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="28"
      height="24"
      viewBox="0 0 34 30"
      fill="none"
      stroke="var(--color-action)"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 14.3117L10.5714 27.1689L32 2.40698"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
