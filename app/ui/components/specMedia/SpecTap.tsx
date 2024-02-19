import { getData } from "@/app/lib/utils/api";
import SpecEpisodesTap from "./SpecEpisodesTap";

export default async function SpecTap({ pathName }: { pathName: string }) {
  const tvDetailsData = await getData({
    endPoint: "tv",
    params: `${pathName}?language=en-US`,
  });

  const tvReviewsData = await getData({
    endPoint: "tv",
    params: `${pathName}/reviews?language=en-US&page=1`,
  });

  return (
    <>
      <SpecEpisodesTap
        tvDetailsData={tvDetailsData}
        tvReviewsData={tvReviewsData}
        pathName={pathName}
      />
    </>
  );
}
