import React from 'react';

export default function PlusBackgroundIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      stroke="none"
      {...props}
    >
      <circle cx="30" cy="30" r="30" fill="var(--color-action)" stroke="none" />
      <path
        d="M30 15C30.4973 15 30.9742 15.1975 31.3258 15.5492C31.6775 15.9008 31.875 16.3777 31.875 16.875V28.125H43.125C43.6223 28.125 44.0992 28.3225 44.4508 28.6742C44.8025 29.0258 45 29.5027 45 30C45 30.4973 44.8025 30.9742 44.4508 31.3258C44.0992 31.6775 43.6223 31.875 43.125 31.875H31.875V43.125C31.875 43.6223 31.6775 44.0992 31.3258 44.4508C30.9742 44.8025 30.4973 45 30 45C29.5027 45 29.0258 44.8025 28.6742 44.4508C28.3225 44.0992 28.125 43.6223 28.125 43.125V31.875H16.875C16.3777 31.875 15.9008 31.6775 15.5492 31.3258C15.1975 30.9742 15 30.4973 15 30C15 29.5027 15.1975 29.0258 15.5492 28.6742C15.9008 28.3225 16.3777 28.125 16.875 28.125H28.125V16.875C28.125 16.3777 28.3225 15.9008 28.6742 15.5492C29.0258 15.1975 29.5027 15 30 15V15Z"
        fill="var(--color-primary)"
        stroke="none"
      />
    </svg>
  );
}
