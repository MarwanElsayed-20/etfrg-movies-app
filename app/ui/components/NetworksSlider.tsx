"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import mediaPlaceHolder from "@/public/mediaplaceholder.png";

export default function NetworksSlider({ data }: { data: any }) {
  return (
    <>
      <Splide
        options={{
          rewind: false,
          arrows: true,
          pagination: false,
          width: "100%",
          gap: "1rem",
          perPage: 7,
        }}
      >
        {data?.results.map((network: any) => (
          <SplideSlide key={network.provider_id}>
            <Image
              src={
                network.logo_path !== null
                  ? `http://image.tmdb.org/t/p/original${network.logo_path}`
                  : mediaPlaceHolder
              }
              width={"150"}
              height={"100"}
              className="rounded-lg h-[100px] w-[150px]"
              alt={`Logo of ${network.provider_name} `}
              priority={true}
            />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}
