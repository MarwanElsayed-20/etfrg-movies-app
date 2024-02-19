const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGVmMDAwZTdmOTUzNmQxZjgzMDk3MzI2N2RjNjZiMyIsInN1YiI6IjY1NmUwMjMxM2RjMzEzMDBlMWVlYTRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JFGdF9UUt6926sW_nrSXNpaB61Foso4pREQnxDahFhw";
const headers = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

// get data from TMDB
export const getData = async ({
  endPoint,
  params,
}: {
  endPoint: string;
  params?: string;
}) => {
  try {
    let data = await fetch(`${BASE_URL}/${endPoint}/${params}`, {
      next: {
        revalidate: 86400000,
      },
      headers,
    });
    data = await data.json();

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
