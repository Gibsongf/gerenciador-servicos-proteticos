import React from "react";

export const DownArrow = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>
  );
};
export const UpArrow = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <title>menu-up</title>
      <path d="M7,15L12,10L17,15H7Z" />
    </svg>
  );
};
