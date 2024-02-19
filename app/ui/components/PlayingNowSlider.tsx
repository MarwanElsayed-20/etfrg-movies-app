"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import mediaPlaceHolder from "@/public/mediaplaceholder.png";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/redux/store";

export default function PlayingNowSlider({ data }: { data: any }) {
  const router = useRouter();
  const { genre } = useSelector((state: RootState) => state.getGenres);

  return (
    <>
      <Splide
        options={{
          rewind: false,
          arrows: true,
          pagination: false,
          width: "100%",
          gap: "1rem",
          perPage: 4,
        }}
      >
        {data?.results.map((movie: any) => (
          <SplideSlide key={movie.id}>
            <div
              className="card-overlay relative p-4 cursor-pointer"
              onClick={() => {
                router.push(`/movie/${movie.id}`);
              }}
            >
              <Image
                src={
                  movie.poster_path !== null
                    ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : mediaPlaceHolder
                }
                width={"500"}
                height={"500"}
                className=" rounded-lg h-[500px] w-[500px]"
                alt={`Logo of ${movie.title}`}
                priority={true}
              />
              <div className=" absolute bottom-0 left-0 flex gap-2 flex-col p-8 z-[999]">
                <h4 className="font-semibold">{movie.title}</h4>
                <p className="text-[var(--para-color)] flex items-center justify-start gap-2">
                  <span className="flex gap-1">
                    <FaStar className=" text-yellow-400 " />
                    {`${movie.vote_average.toFixed(1)}`}
                  </span>
                  <span>|</span>
                  {movie.genre_ids.map((id: any) => {
                    return (
                      <>
                        {genre?.find((genre) => genre.id === id)?.name + " • "}
                      </>
                    );
                  })}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}
