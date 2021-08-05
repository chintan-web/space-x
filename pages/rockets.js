import Navbar from "../components/Navbar";
import Rocket from "../components/Rocket";

export async function getStaticProps(context) {
  const res = await fetch(`https://api.spacexdata.com/v3/rockets`);
  const rockets = await res.json();

  if (!rockets) {
    return {
      notFound: true,
    };
  }

  return {
    props: { rockets },
  };
}

function rocket({ rockets }) {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col bg-black text-white">
        {rockets.map((rocket) => (
          <Rocket rocket={rocket} key={rocket.id} />
        ))}
      </div>
    </>
  );
}

export default rocket;
