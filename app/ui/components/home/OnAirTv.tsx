import React from "react";
import OnAirTvSlider from "../OnAirTvSlider";
import { getData } from "@/app/lib/utils/api";

export default async function OnAirTv({}) {
  const getOnAirTv = await getData({
    endPoint: "tv/",
    params: "on_the_air?language=en-US&page=1",
  });
  return (
    <>
      <OnAirTvSlider data={getOnAirTv} />
    </>
  );
}
