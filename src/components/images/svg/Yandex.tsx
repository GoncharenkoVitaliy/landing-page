import React from "react";

interface iYandex {
  d: string;
  transform: string;
  style: string;
}

export default function Yandex({ className }: any) {
  return (
    <svg
      className={className}
      width="800px"
      height="800px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94.33 70.75"
    >
      <title>Yandex mail adres</title>
      <path
        d="M464.83,476.63h94.33v70.75H464.83Z"
        transform="translate(-464.83 -476.63)"
        style={{ fill: "#fc0" }}
      />
      <path
        d="M464.83,476.63v4.72L512,526.15l47.17-44.81v-4.72Z"
        transform="translate(-464.83 -476.63)"
        style={{ opacity: 0.07800000160932541, isolation: "isolate" }}
      />
      <path
        d="M464.83,476.63,512,507.28l47.17-30.66Z"
        transform="translate(-464.83 -476.63)"
        style={{ fill: "#d00" }}
      />
    </svg>
  );
}
