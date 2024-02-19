export default function StorySkeleton({}: {}) {
  return (
    <>
      <div className="container flex flex-col gap-4 justify-center items-center">
        <div className="skeleton bg-stone-800 animate-pulse h-4 w-full"></div>
        <div className="skeleton bg-stone-800 animate-pulse h-4 w-full"></div>
      </div>
    </>
  );
}
