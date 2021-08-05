export async function getStaticProps(context) {
  const res = await fetch(`https://api.spacexdata.com/v3/missions`);
  const missions = await res.json();

  if (!missions) {
    return {
      notFound: true,
    };
  }

  return {
    props: { missions },
  };
}

import React from "react";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";

function mission({ missions }) {
  return (
    <div className="bg-black text-white">
      <Navbar />
      {missions.map((mission) => (
        <Mission mission={mission} key={mission.mission_id} />
      ))}
    </div>
  );
}

export default mission;
