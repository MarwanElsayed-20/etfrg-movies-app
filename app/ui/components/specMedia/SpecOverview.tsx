import { getData } from "@/app/lib/utils/api";
import CrewSlider from "../CrewSlider";
import { Suspense } from "react";
import SliderSkeleton from "../skeletons/SliderSkeleton";
import StorySkeleton from "../skeletons/StorySkeleton";

export default async function SpecOverview({
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

  const getMediaCrew = await getData({
    endPoint: `${mediaType}`,
    params: `${pathName}/credits?language=en-US`,
  });

  return (
    <>
      <CrewSlider data={getMediaCrew} />
    </>
  );
}
