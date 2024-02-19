"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { replace } = useRouter();
  totalPages = Number(totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  const generatePagination = (currentPage: number, totalPages: number) => {
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages - 1, totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      {totalPages > 19 ? (
        <div className="join">
          {allPages.map((page, index) => (
            <button
              key={index}
              className={clsx("join-item btn", {
                "btn-disabled": page === "...",
                "btn-ghost": page !== "...",
              })}
              onClick={() => {
                createPageURL(page);
              }}
            >
              {page === "..." ? "..." : page}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
