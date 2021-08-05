import React from "react";
import Link from "next/link";

function Mission({ mission }) {
  return (
    <div className="flex justify-center items-center flex-col text-center">
      <h1 className="text-center font-bold text-2xl my-12">
        {" "}
        {mission.mission_name}{" "}
      </h1>
      <p className="w-9/12"> {mission.description} </p>
      <Link href={mission.wikipedia}>
        <button className="w-32 h-12 bg-gray-200 text-black hover:bg-gray-50 my-5">
          {" "}
          Wekipedia{" "}
        </button>
      </Link>
    </div>
  );
}

export default Mission;
