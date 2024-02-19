import { getData } from "@/app/lib/utils/api";
import NetworksSlider from "../NetworksSlider";

export default async function Networks({}) {
  const getNetworks = await getData({
    endPoint: "watch/providers",
    params: "movie?language=en-US&watch_region=US",
  });

  return (
    <>
      <div className="container">
        <NetworksSlider data={getNetworks} />
      </div>
    </>
  );
}
