import { getData } from "@/app/lib/utils/api";
import Image from "next/image";
import mediaPlaceHolder from "@/public/mediaplaceholder.png";
import { FaStar } from "react-icons/fa";
import Button from "@/app/ui/components/Button";
import { GiPlayButton } from "react-icons/gi";

export default async function SpecHero({
  mediaType,
  pathName,
}: {
  mediaType: string;
  pathName: string;
}) {
  const specMediaData: any = await getData({
    endPoint: `${mediaType}`,
    params: `${pathName}?language=en-US`,
  });
  const data = specMediaData;

  return (
    <>
      {data ? (
        <div className="h-screen overlay relative">
          <Image
            src={
              data.backdrop_path === null
                ? mediaPlaceHolder
                : `http://image.tmdb.org/t/p/w1280${data.backdrop_path}`
            }
            width={1280}
            height={5000}
            className="w-full h-full mr-4"
            alt={`Photo of ${
              mediaType === "movie" ? data.title : data.name
            } media`}
            priority={true}
          />
          <div className="container py-16 px-20 absolute  bottom-0 z-[99] w-full">
            <div className="flex justify-between">
              <div className="flex gap-6 flex-col items-start">
                <span className="capitalize rounded-2xl bg-[var(--bg-color)] py-1 px-4">
                  {mediaType}
                </span>
                <div className="flex flex-col gap-2 items-start">
                  <h1 className=" text-4xl font-bold">
                    {mediaType === "movie" ? data.title : data.name}
                  </h1>
                  {mediaType === "movie" ? (
                    <p className="text-[var(--para-color)] flex items-center justify-center">
                      {`${data?.release_date.slice(
                        0,
                        4
                      )} • ${data.vote_average.toFixed(1)}`}
                      <FaStar className="ms-1" />
                    </p>
                  ) : (
                    <p className="text-[var(--para-color)] flex items-center justify-center">
                      {`${data?.first_air_date.slice(
                        0,
                        4
                      )} • ${data.vote_average.toFixed(1)}`}
                      <FaStar className="ms-1" />
                    </p>
                  )}
                </div>
                <div className="flex">
                  <Button
                    buttonText="Watch Trailer"
                    style={`btn btn-outline btn-primary text-white grow md:grow-0`}
                    icon={<GiPlayButton className="text-2xl" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
