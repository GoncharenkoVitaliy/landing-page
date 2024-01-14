import React from "react";

export default function Gmail({ className }: any) {
  return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Gmail"
        role="img"
        viewBox="0 0 512 512"
      >
        <rect width="512" height="512" rx="15%" fill="#ffffff" />
        <path fill="#f2f2f2" d="M120 392V151.075h272V392" />
        <path fill-opacity=".05" d="M256 285L120 392l-4-212" />
        <path fill="#d54c3f" d="M120 392H97c-12 0-22-10-22-23V143h45z" />
        <path fill-opacity=".08" d="M317 392h77V159H82" />
        <path fill="#f2f2f2" d="M97 121h318L256 234" />
        <path fill="#b63524" d="M392 392h23c12 0 22-10 22-23V143h-45z" />
        <path
          fill="none"
          stroke="#de5145"
          stroke-linecap="round"
          stroke-width="44"
          d="M97 143l159 115 159-115"
        />
      </svg>
  );
}
