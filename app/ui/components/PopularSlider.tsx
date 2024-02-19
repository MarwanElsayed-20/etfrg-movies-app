"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import mediaPlaceHolder from "@/public/mediaplaceholder.png";
import { FaStar } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "@/app/lib/redux/genresSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/app/lib/redux/store";
import { getTvGenres } from "@/app/lib/redux/tvGenresSlice";

export default function PopularSlider({ data }: { data: any }) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { genre } = useSelector((state: RootState) => state.getGenres);
  const { tvGenre } = useSelector((state: RootState) => state.getTvGenres);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getTvGenres());
  }, []);

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
        {data?.results.map((media: any, index: number) => (
          <SplideSlide key={media.id}>
            <div
              className="flex gap-4 items-center px-3 cursor-pointer"
              onClick={() => {
                router.push(`/${media.media_type}/${media.id}`);
              }}
            >
              <span className=" text-4xl font-bold text-white">
                {index + 1}
              </span>
              <Image
                src={
                  media.poster_path !== null
                    ? `http://image.tmdb.org/t/p/w92${media.poster_path}`
                    : mediaPlaceHolder
                }
                width={"92"}
                height={"150"}
                className="rounded-lg h-auto w-auto"
                alt={`Logo of ${
                  media.media_type === "movie" ? media.title : media.name
                } `}
                priority={true}
              />
              <div className="flex flex-col gap-2 items-start">
                <p className="capitalize rounded-2xl border border-bgBlack bg-[var(--bg-color)] py-1 px-3 text-xs">
                  {media.adult ? "Adult" : "Family"}
                </p>
                <h4 className="font-semibold">
                  {media.media_type === "movie" ? media.title : media.name}
                </h4>
                <p className="text-[var(--para-color)] flex items-center justify-center gap-1">
                  <span>
                    <MdLocalMovies />
                  </span>
                  {media.media_type === "movie"
                    ? media.genre_ids.slice(0, 2).map((id: any) => {
                        return (
                          <span
                            key={id}
                            className="flex justify-center items-center gap-1"
                          >
                            {`${
                              genre?.find((genre: any) => genre.id === id)?.name
                            }`}
                            <span>•</span>
                          </span>
                        );
                      })
                    : media.genre_ids.slice(0, 2).map((id: any) => {
                        return (
                          <span
                            key={id}
                            className="flex justify-center items-center gap-1"
                          >
                            {`${
                              tvGenre?.find((genre: any) => genre.id === id)
                                ?.name
                            }`}
                            <span>•</span>
                          </span>
                        );
                      })}
                </p>
                <p className="text-xs flex gap-1">
                  <span className="flex gap-1">
                    <FaStar className=" text-yellow-400 " />{" "}
                    {media.vote_average.toFixed(1)}
                  </span>
                  | {media.media_type}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}
