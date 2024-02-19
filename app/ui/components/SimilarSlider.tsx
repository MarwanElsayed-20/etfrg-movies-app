"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import mediaPlaceHolder from "@/public/mediaplaceholder.png";

export default function SimilarSlider({
  data,
  mediaType,
}: {
  data: any;
  mediaType: string;
}) {
  const router = useRouter();
  console.log(data?.results.length);

  return (
    <>
      {data.results.length === 0 ? (
        <h4 className="text-accent">No similar media found!</h4>
      ) : (
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
          {data?.results.map((media: any) => (
            <SplideSlide key={media.id}>
              <div
                className="flex gap-4 cursor-pointer px-3"
                onClick={() => {
                  router.push(`/${mediaType}/${media.id}`);
                }}
              >
                <div className="flex gap-3 flex-col items-start justify-center ">
                  <Image
                    src={
                      media.poster_path === null
                        ? mediaPlaceHolder
                        : `http://image.tmdb.org/t/p/w342${media.poster_path}`
                    }
                    width={"342"}
                    height={"185"}
                    className=" rounded-2xl h-[185px] w-[342px]"
                    alt={`Photo of ${
                      mediaType === "movie" ? media.title : media.name
                    } `}
                    priority={true}
                  />
                  <div className="flex flex-col items-start gap-3">
                    <h4 className=" font-semibold">
                      {mediaType === "movie" ? media.title : media.name}
                    </h4>
                    <p className=" text-xs flex gap-1">
                      <span className="flex gap-1 text-white">
                        <FaStar className=" text-yellow-400 " />
                        {media.vote_average.toFixed(1)} |
                      </span>
                      {mediaType === "movie"
                        ? media.release_date
                        : media.first_air_date}
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </>
  );
}
