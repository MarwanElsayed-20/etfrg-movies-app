import { getData } from "@/app/lib/utils/api";
import React from "react";

export default async function SpecStory({
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

  return (
    <>
      <p>{specMediaData.overview}</p>
    </>
  );
}
