import { getData } from "../lib/utils/api";
import Pagination from "../ui/components/search/Pagination";
import SearchMedia from "../ui/components/search/Search";
import SearchBody from "../ui/components/search/SearchBody";

export default async function Search({
  searchParams,
}: {
  searchParams: {
    include_adult: string;
    language: string;
    page: string;
    query?: string;
    type: string;
  };
}) {
  const type = searchParams.type || "movie";
  const query = searchParams?.query || "";
  const includeAdult = searchParams?.include_adult || "false";
  const language = searchParams?.language || "en-US";
  const page = searchParams?.page || 1;

  const getSearchData: any = await getData({
    endPoint: "search",
    params: `${type}?query=${query}&include_adult=${includeAdult}&language=${language}&page=${page}`,
  });
  console.log(getSearchData);

  return (
    <>
      <div className="container py-40 flex flex-col justify-center items-center gap-8">
        <div className="w-full">
          <SearchMedia placeholder="Search media ..." />
        </div>
        <div>
          {getSearchData.results.length > 0 ? (
            <SearchBody data={getSearchData} mediaType={searchParams.type} />
          ) : (
            <h4>No match.</h4>
          )}
        </div>
        <Pagination totalPages={getSearchData.total_pages} />
      </div>
    </>
  );
}
