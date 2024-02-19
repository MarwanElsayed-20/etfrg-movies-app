import { getData } from "@/app/lib/utils/api";
import PlayingNowSlider from "../PlayingNowSlider";

export default async function PlayingNow({}) {
  const getPlayingNow = await getData({
    endPoint: "movie/",
    params: "now_playing?language=en-US&page=1",
  });
  return (
    <>
      <PlayingNowSlider data={getPlayingNow} />
    </>
  );
}
