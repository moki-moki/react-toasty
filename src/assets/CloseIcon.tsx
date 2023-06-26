import React from "react";

interface Props {
  theme: "light" | "dark";
}

function CloseIcon({ theme }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#111111"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`feather feather-x-${theme}`}
      viewBox="0 0 24 24"
    >
      <path d="M18 6L6 18"></path>
      <path d="M6 6L18 18"></path>
    </svg>
  );
}

export default CloseIcon;
