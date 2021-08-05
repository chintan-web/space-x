import React from "react";

function Dragon({ dragon }) {
  return (
    <div className="flex flex-col justify-center items-center text-center my-14 lg:w-4/5 sm:w-full">
      <h1 className="text-4xl font-bold py-2"> Name: {dragon.name} </h1>
      <h1 className="text-2xl py-2"> Type: {dragon.type} </h1>
      <h1 className="text-2xl py-2"> Crew capcity: {dragon.crew_capacity} </h1>
      <h1 className="text-2xl py-2"> first flight: {dragon.first_flight} </h1>
      <h1 className="text-2xl py-2">
        {" "}
        launch payload mass: {dragon.launch_payload_mass.kg} Kg{" "}
      </h1>
      <h1 className="text-2xl py-2">
        {" "}
        launch payload volume: {dragon.launch_payload_vol.kg} Kg{" "}
      </h1>
      <h1 className="text-2xl py-2">
        {" "}
        return payload volume: {dragon.return_payload_mass.kg} Kg{" "}
      </h1>
      <h1 className="text-2xl py-2">
        {" "}
        return payload mass: {dragon.return_payload_vol.kg} Kg{" "}
      </h1>
      <h1 className="text-2xl py-2">
        {" "}
        height:{dragon.height_w_trunk.meters} meters{" "}
      </h1>
      <h1 className="text-2xl py-2">
        {" "}
        diameter:{dragon.diameter.meters} meters{" "}
      </h1>
      <img className="my-12" src={dragon.flickr_images[0]} />
      <img className="my-12" src={dragon.flickr_images[1]} />
      <img className="my-12" src={dragon.flickr_images[2]} />
    </div>
  );
}

export default Dragon;
