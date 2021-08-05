import React from "react";
import Link from "next/link";

function Rocket({ rocket }) {
  return (
    <div className="flex flex-row text-center my-14 lg:w-4/5 sm:w-full">
      <div className="px-2 text-left">
        <h1 className="text-4xl font-bold py-2">Name: {rocket.rocket_name} </h1>
        <h3 className="text-2xl py-2">
          cost per launch: {rocket.cost_per_launch}
        </h3>
        <h3 className="text-2xl py-2"> country: {rocket.country} </h3>
        <h3 className="text-2xl py-2">
          mass: {rocket.mass.kg} Kg, {rocket.mass.lb} lbs
        </h3>

        <p className="text-lg py-2">description: {rocket.description}</p>
        <Link href={rocket.wikipedia}>
          <button className="w-32 h-12 bg-gray-200 text-black hover:bg-gray-50 my-3">
            Learn more
          </button>
        </Link>

        <img
          className="my-12"
          src={rocket.flickr_images[0]}
          alt="rocket image"
        />
      </div>
    </div>
  );
}

export default Rocket;
