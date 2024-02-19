"use client";

import React from "react";
import { Triangle } from "react-loader-spinner";

export default function Loading({ height = "h-screen" }: { height: String }) {
  return (
    <>
      <div
        className={`${height} w-full flex justify-center items-center bg-black z-[9999] relative`}
      >
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#00925d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
}
