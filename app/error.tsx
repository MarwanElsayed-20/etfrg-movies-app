"use client";

import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className=" h-screen">
      <div className="container h-full flex justify-center items-center flex-col gap-6">
        <h2 className=" text-5xl">Something went wrong!</h2>
        <p className=" text-2xl text-accent">{error.message}</p>
        <div className="flex gap-3">
          <button
            className="btn btn-active btn-neutral"
            onClick={() => reset()}
          >
            Try again
          </button>
          <button
            className="btn btn-active btn-ghost"
            onClick={() => router.push("/")}
          >
            Back home
          </button>
        </div>
      </div>
    </div>
  );
}
