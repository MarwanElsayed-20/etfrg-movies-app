export default function SliderSkeleton({
  height,
  width,
  times,
}: {
  height: String;
  width: String;
  times: number;
}) {
  type links = {
    id: number;
    width: String;
    height: String;
  };

  const links: links[] = [];

  for (let i = 0; i < times; i++) {
    links.push({ id: i + 1, width, height });
  }

  return (
    <>
      <div className="container flex gap-4 justify-center items-center">
        {links.map((link) => (
          <div
            key={link.id}
            className={`skeleton bg-stone-800 animate-pulse ${height} ${width}`}
          ></div>
        ))}
      </div>
    </>
  );
}
