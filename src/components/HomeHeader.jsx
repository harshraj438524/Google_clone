import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

function HomeHeader() {
  return (
    <header className="flex w-screen justify-end">
      <div className="flex items-center space-x-4 mt-3 mr-5">
        <Link className="hover:underline" href="https://mail.google.com">
          Gmail
        </Link>
        <Link className="hover:underline" href="https://Images.google.com">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2"/>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-lg">Sign in</button>
      </div>
    </header>
  );
}

export default HomeHeader;
