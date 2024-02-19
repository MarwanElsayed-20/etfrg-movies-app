import React, { Suspense } from "react";
import SimilarSlider from "../SimilarSlider";
import { getData } from "@/app/lib/utils/api";

export default async function SpecSimilar({
  mediaType,
  pathName,
}: {
  mediaType: string;
  pathName: string;
}) {
  const getSimilarData = await getData({
    endPoint: `${mediaType}`,
    params: `${pathName}/similar?language=en-US&page=1`,
  });

  return (
    <>
      <SimilarSlider data={getSimilarData} mediaType={mediaType} />
    </>
  );
}
