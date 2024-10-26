import { Show } from "@/utils/entities";
import Link from "next/link";
import React from "react";

export default async function page() {
  const response = await fetch("https://api.tvmaze.com/shows", {
    method: "GET",
  });
  const shows: Show[] = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6 bg-gray-100 min-h-screen">
      {shows.map((show) => (
        <ShowCard show={show} key={show.id} />
      ))}
    </div>
  );
}

const ShowCard = ({ show }: { show: Show }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={show.image.original}
        alt={show.name}
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {show.name}
        </h2>
        <h3 className="text-sm text-gray-500 mb-2">
          {show.type} - {show.language}
        </h3>
        <p
          className={`text-sm font-medium ${
            show.status === "Running" ? "text-green-600" : "text-red-600"
          }`}
        >
          {show.status}
        </p>
      </div>
    </div>
  );
};
