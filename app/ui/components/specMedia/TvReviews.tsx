import Image from "next/image";
import placeHolderImage from "@/public/placeholder.jpg";

export default function TvReviews({ data }: { data: any }) {
  return (
    <>
      {data.length > 0 ? (
        <>
          {data.map((review: any) => (
            <div key={review.id} className=" border-b border-bgBlack mb-6">
              <div key={review.id} className="flex gap-3 items-center px-3">
                <Image
                  src={
                    review.author_details.avatar_path !== null
                      ? `http://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`
                      : placeHolderImage
                  }
                  width={"45"}
                  height={"45"}
                  className=" rounded-[50%] h-[45px] w-[45px]"
                  alt={`Photo of ${review.author} `}
                  priority={true}
                />
                <div className="flex flex-col items-start">
                  <h4 className=" font-semibold text-white">{review.author}</h4>
                  <p className=" text-xs">
                    {review.author_details.name
                      ? review.author_details.name
                      : review.author}
                  </p>
                </div>
              </div>
              <p className="px-20 py-10">{review.content}</p>
            </div>
          ))}
        </>
      ) : (
        <>
          <h4>No reviews found!</h4>
        </>
      )}
    </>
  );
}
