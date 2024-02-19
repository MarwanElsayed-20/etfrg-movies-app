import { getData } from "@/app/lib/utils/api";
import Loading from "@/app/loading";
import { Suspense } from "react";
import PopularSlider from "../PopularSlider";

export default async function PopularThisWeek({}) {
  const getPopularThisWeek = await getData({
    endPoint: "trending/all",
    params: "week?language=en-US",
  });

  return (
    <>
      <PopularSlider data={getPopularThisWeek} />
    </>
  );
}
