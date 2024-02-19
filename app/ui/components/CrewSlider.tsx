"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import placeHolderImage from "@/public/placeholder.jpg";

export default function CrewSlider({ data }: { data: any }) {
  return (
    <>
      <Splide
        options={{
          rewind: false,
          arrows: true,
          pagination: false,
          width: "100%",
          gap: "1rem",
          perPage: 6,
        }}
      >
        {data?.cast.map((cast: any) => (
          <SplideSlide key={cast.id}>
            <div key={cast.id} className="flex gap-3 items-center px-3">
              <Image
                src={
                  cast.profile_path !== null
                    ? `http://image.tmdb.org/t/p/w45${cast.profile_path}`
                    : placeHolderImage
                }
                width={"45"}
                height={"45"}
                className=" rounded-[50%] h-[45px] w-[45px]"
                alt={`Photo of ${cast.name} `}
                priority={true}
              />
              <div className="flex flex-col items-start">
                <h4 className=" font-semibold">{cast.name}</h4>
                <p className=" text-xs">{cast.character}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}
