import UpcomingSlider from "../UpcomingSlider";
import { getData } from "@/app/lib/utils/api";

type Props = {};

export default async function UpcomingMovies({}: Props) {
  const getUpcomingMovies = await getData({
    endPoint: "movie/",
    params: "upcoming?language=en-US&page=1",
  });
  return (
    <>
      <UpcomingSlider data={getUpcomingMovies} />
    </>
  );
}
