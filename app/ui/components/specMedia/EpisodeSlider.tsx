"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import mediaPlaceHolder from "@/public/mediaplaceholder.png";

export default function EpisodeSlider({ data }: { data: any }) {
  console.log("sssss");

  return (
    <Splide
      options={{
        rewind: false,
        arrows: true,
        pagination: false,
        width: "100%",
        gap: "1rem",
        perPage: 5,
      }}
    >
      {data?.episodes.map((episode: any) => (
        <SplideSlide key={episode.id}>
          <div key={episode.id} className="flex gap-4 px-3">
            <div className="flex gap-3 flex-col items-start justify-center ">
              <Image
                src={
                  episode.still_path === null
                    ? mediaPlaceHolder
                    : `http://image.tmdb.org/t/p/w300${episode.still_path}`
                }
                width={"300"}
                height={"185"}
                className=" rounded-2xl h-[185px] w-[300px]"
                alt={`Photo of ${episode.name} `}
                priority={true}
              />
              <div className="flex flex-col items-start gap-3">
                <p className=" font-semibold text-2xl text-white">
                  {episode.name}
                </p>
                <p className=" text-xs flex gap-1">{episode.overview}</p>
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
