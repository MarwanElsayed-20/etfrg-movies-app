"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import guestImg from "@/public/placeholder.jpg";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "Series", href: "/series" },
  ];

  return (
    <nav className="navbar justify-between !container absolute z-[99999]">
      <div className="navbar-start w-[5%] flex gap-2">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-primary lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    "hover:bg-primary active:bg-primary/70 focus:bg-primary active:text-white focus:text-white",
                    { "bg-primary text-white": pathname === link.href }
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          className="text-xl flex justify-start items-center gap-2 font-black "
        >
          ETFRG
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx(
                  "hover:bg-primary active:bg-primary/70 focus:bg-primary active:text-white focus:text-white",
                  { "bg-primary text-white": pathname === link.href }
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none gap-2">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => {
            router.push("/search");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="avatar">
          <div className="w-10 rounded-full">
            <Image
              alt="guest image placeholder"
              src={guestImg}
              width={4676}
              height={4676}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
