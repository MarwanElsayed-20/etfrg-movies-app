"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import mediaPlaceHolder from "@/public/mediaplaceholder.png";
import { FaStar } from "react-icons/fa";
import Button from "./Button";
import { MdInfo } from "react-icons/md";
import { GiPlayButton } from "react-icons/gi";
import { useState } from "react";

export default function SplideSlider({ data }: { data: any }) {
  const [toggleView, setToggleView] = useState<{ [key: string]: any }>({});

  function setView(id: any): void {
    setToggleView((ids: string) => ({ ...id, [id]: !ids[id] }));
  }

  return (
    <>
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          arrows: false,
          autoplay: true,
          interval: 5000,
          speed: 1000,
        }}
      >
        {data?.results
          .sort((a: any, b: any) => {
            return b.popularity - a.popularity;
          })
          .slice(0, 5)
          .map((media: any) => (
            <SplideSlide key={media.id}>
              <div className="h-screen overlay relative" key={media.id}>
                <Image
                  src={
                    media.backdrop_path === null
                      ? mediaPlaceHolder
                      : `http://image.tmdb.org/t/p/w1280${media.backdrop_path}`
                  }
                  width={1280}
                  height={5000}
                  className="w-full h-full mr-4"
                  alt={`Photo of ${media.title} media`}
                  priority={true}
                />
                <div className="container py-16 absolute bottom-0 z-[99]">
                  <div className="flex gap-6 flex-col lg:w-6/12 items-start">
                    <span className="capitalize rounded-2xl bg-[var(--bg-color)] py-1 px-4">
                      {media.media_type}
                    </span>
                    <div className="flex flex-col gap-2 items-start">
                      <h1 className=" text-4xl font-bold">
                        {media.media_type === "movie"
                          ? media.title
                          : media.name}
                      </h1>

                      {media.media_type === "movie" ? (
                        <p className="text-[var(--para-color)] flex items-center justify-center">
                          {`${media.release_date.slice(
                            0,
                            4
                          )} • ${media.vote_average.toFixed(1)}`}
                          <FaStar className="ms-1" />
                        </p>
                      ) : (
                        <p className="text-[var(--para-color)] flex items-center justify-center">
                          {`${media.first_air_date.slice(
                            0,
                            4
                          )} • ${media.vote_average.toFixed(1)}`}
                          <FaStar className="ms-1" />
                        </p>
                      )}
                      <p className="text-[var(--secondary-text-color)]">
                        {toggleView[media.id]
                          ? media.overview
                          : media.overview.slice(0, 150)}
                        {media.overview.length > 150 ? (
                          <button
                            className="text-primary ms-2 font-bold"
                            onClick={() => setView(media.id)}
                          >
                            {toggleView[media.id] ? "See less" : "See more"}
                          </button>
                        ) : (
                          ""
                        )}
                      </p>
                    </div>
                    <div className="flex gap-2 w-full">
                      <Button
                        buttonText="Details"
                        icon={<MdInfo className="text-2xl" />}
                        link={`/${media.media_type}/${media.id}`}
                        style={`btn-primary text-white grow md:grow-0`}
                      />
                      <Button
                        buttonText="Watch Trailer"
                        style={`btn btn-outline btn-primary text-white grow md:grow-0`}
                        icon={<GiPlayButton className="text-2xl" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
      </Splide>
    </>
  );
}
