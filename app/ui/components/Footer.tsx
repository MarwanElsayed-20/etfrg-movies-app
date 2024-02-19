import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className=" pt-[70px] pb-10 border-t border-bgBlack">
      <div className="container flex flex-col gap-[60px]">
        <div>
          <p className="text-white text-4xl text-center">
            Our platform is trusted by millions & features best updated movies
            all around the world.
          </p>
        </div>
        <div>
          <p className=" text-end">All Rights Reserved © 2024</p>
        </div>
      </div>
    </footer>
  );
}
