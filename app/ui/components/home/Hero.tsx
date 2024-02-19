import { getData } from "@/app/lib/utils/api";
import SplideSlider from "../SplideSlider";

type Props = {};

export default async function Hero({}: Props) {
  const getAllTrending = await getData({
    endPoint: "trending/all",
    params: "week",
  });

  return (
    <>
      <SplideSlider data={getAllTrending} />
    </>
  );
}
