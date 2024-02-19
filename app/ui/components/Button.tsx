"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  buttonText: string;
  icon?: any;
  link?: string;
  style?: String;
};

export default function Button({ buttonText, icon, link, style }: Props) {
  const router = useRouter();

  return (
    <>
      <button
        className={`btn ${style}`}
        onClick={() => router.push(link ? link : "")}
      >
        {icon}
        {buttonText}
      </button>
    </>
  );
}
