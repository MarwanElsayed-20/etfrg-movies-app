import { getData } from "@/app/lib/utils/api";
import Loading from "@/app/loading";
import SpecStory from "@/app/ui/components/SpecStory";
import SliderSkeleton from "@/app/ui/components/skeletons/SliderSkeleton";
import StorySkeleton from "@/app/ui/components/skeletons/StorySkeleton";
import SpecHero from "@/app/ui/components/specMedia/SpecHero";
import SpecOverview from "@/app/ui/components/specMedia/SpecOverview";
import SpecSimilar from "@/app/ui/components/specMedia/SpecSimilar";
import SpecTap from "@/app/ui/components/specMedia/SpecTap";
import React, { Suspense } from "react";

type Params = {
  media: string;
  mediaId: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  const pathName = params.mediaId;
  const mediaType = params.media;

  const specMediaData: any = await getData({
    endPoint: `${mediaType}`,
    params: `${pathName}?language=en-US`,
  });

  return {
    title: mediaType === "movie" ? specMediaData.title : specMediaData.name,
    description: `${specMediaData.overview}`,
  };
}

export default function SpecMedia({ params }: { params: Params }) {
  const pathName = params.mediaId;
  const mediaType = params.media;

  return (
    <>
      <header>
        <Suspense fallback={<Loading height={"h-screen"} />}>
          <SpecHero pathName={pathName} mediaType={mediaType} />
        </Suspense>
      </header>
      <main>
        <section>
          <div className="container flex gap-4 flex-col">
            <div className="flex gap-4 flex-col">
              <h4 className="font-[Inter] text-xl font-bold">Story Line</h4>
              <Suspense fallback={<StorySkeleton />}>
                <SpecStory pathName={pathName} mediaType={mediaType} />
              </Suspense>
            </div>
            <div className="flex gap-4 flex-col">
              <h4 className="font-[Inter] text-xl font-bold">Top Cast</h4>
              <div>
                <Suspense
                  fallback={
                    <SliderSkeleton
                      height={"h-[56px]"}
                      width={"w-[210px]"}
                      times={6}
                    />
                  }
                >
                  <SpecOverview pathName={pathName} mediaType={mediaType} />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
        {/* this section will appear only in spec tv */}
        {mediaType === "tv" ? (
          <section className=" pt-8">
            <div className="container flex justify-between relative">
              <SpecTap pathName={pathName} />
            </div>
          </section>
        ) : (
          ""
        )}
        <section className="pt-10 border-t border-bgBlack">
          <div className="container flex gap-4 flex-col">
            <div className="flex gap-4 flex-col">
              <h4 className="text-2xl font-bold capitalize">
                Similar {mediaType} for you
              </h4>
            </div>
            <div>
              <Suspense
                fallback={
                  <SliderSkeleton
                    height={"h-[245px]"}
                    width={"w-[230px]"}
                    times={5}
                  />
                }
              >
                <SpecSimilar pathName={pathName} mediaType={mediaType} />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
