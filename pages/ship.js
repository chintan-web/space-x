export async function getStaticProps(context) {
  const res = await fetch(`https://api.spacexdata.com/v3/ships`);
  const ships = await res.json();

  if (!ships) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ships },
  };
}

import Navbar from "../components/Navbar";
import Ship from "../components/Ship";

function ship({ ships }) {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col bg-black text-white">
        {ships.map((ship) => (
          <Ship ship={ship} key={ship.ship_id} />
        ))}
      </div>
    </>
  );
}

export default ship;
