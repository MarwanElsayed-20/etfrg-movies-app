"use client";

import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchMedia({ placeholder }: { placeholder: string }) {
  const [media, setMedia] = useState("movie");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (param: any) => {
    console.log(param);

    const mediaType = param.toLowerCase();
    setMedia(mediaType);
  };

  const handleSearch = useDebouncedCallback((query) => {
    const params = new URLSearchParams(searchParams);

    params.set("type", media);

    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    params.set("include_adult", "false");
    params.set("language", "en-US");
    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <>
      <div className="flex gap-2">
        <label className="input input-bordered flex items-center gap-2 grow">
          <input
            type="text"
            className="grow bg-transparent"
            placeholder={placeholder}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => {
            handleSelect(e.target.value);
          }}
        >
          <option disabled defaultValue={"Movies OR TV?"}>
            Movies OR TV?
          </option>
          <option>Movie</option>
          <option>TV</option>
        </select>
      </div>
    </>
  );
}
