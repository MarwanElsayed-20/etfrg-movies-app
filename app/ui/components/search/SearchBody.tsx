"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import mediaPlaceHolder from "@/public/mediaplaceholder.png";

export default function SearchBody({
  data,
  mediaType,
}: {
  data: any;
  mediaType: any;
}) {
  const router = useRouter();

  return (
    <>
      <div className=" columns-4 flex gap-4 flex-wrap justify-center ">
        {data?.results.map((media: any) => (
          <div
            key={media.id}
            className="card-overlay relative p-4 cursor-pointer"
            onClick={() => {
              router.push(`/${mediaType}/${media.id}`);
            }}
          >
            <Image
              src={
                media.poster_path !== null
                  ? `http://image.tmdb.org/t/p/w500${media.poster_path}`
                  : mediaPlaceHolder
              }
              width={"500"}
              height={"500"}
              className=" rounded-lg h-[500px] w-[500px]"
              alt={`Logo of ${
                mediaType === "movie" ? media.title : media.name
              }`}
              priority={true}
            />
            <div className=" absolute bottom-0 left-0 flex gap-2 flex-col p-8 z-[999]">
              <h4 className="font-semibold">
                {mediaType === "movie" ? media.title : media.name}
              </h4>
              <p className="text-[var(--para-color)] flex items-center justify-start gap-2">
                <span className="flex gap-1">
                  <FaStar className=" text-yellow-400 " />
                  {`${media.vote_average.toFixed(1)}`}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
