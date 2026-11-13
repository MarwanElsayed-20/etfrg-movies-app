const BASE_URL = "https://api.themoviedb.org/3";

/**
 * Gets data from TMDB. The access token lives only on the server (TMDB_TOKEN, never in the code
 * or the browser): server components call TMDB directly, and client components go through the
 * app's own /api/tmdb route, which adds the token.
 */
export const getData = async ({
  endPoint,
  params,
}: {
  endPoint: string;
  params?: string;
}) => {
  const path = `${endPoint}/${params}`;
  const onServer = typeof window === "undefined";
  try {
    let data = await fetch(
      onServer ? `${BASE_URL}/${path}` : `/api/tmdb/${path.replace(/^\/+/, "")}`,
      onServer
        ? {
            next: { revalidate: 86400000 },
            headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` },
          }
        : undefined,
    );
    data = await data.json();

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
