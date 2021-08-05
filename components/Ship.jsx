import React from "react";

function Ship({ ship }) {
  return (
    <div className="flex text-center my-14 lg:w-4/5 sm:w-full flex-col">
      <div className="px-2 text-left">
        <h1 className="py-2 text-4xl font-bold">Name: {ship.ship_name}</h1>
        <h1 className="py-2 text-2xl">Type: {ship.ship_type}</h1>
        <h1 className="py-2 text-2xl">Weight: {ship.weight_kg} Kg</h1>
        <h1 className="py-2 text-2xl">Home port: {ship.home_port}</h1>
      </div>

      <img className="py-10 lg:w-4/6 sm:w-full" src={ship.image} />
    </div>
  );
}

export default Ship;
