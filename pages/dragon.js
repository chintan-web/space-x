import Dragon from "../components/Dragon";
import Navbar from "../components/Navbar";

export async function getStaticProps(context) {
  const res = await fetch(`https://api.spacexdata.com/v3/dragons`);
  const dragons = await res.json();

  if (!dragons) {
    return {
      notFound: true,
    };
  }

  return {
    props: { dragons },
  };
}

function dragon({ dragons }) {
  return (
    <div className="bg-black text-white">
      <Navbar />
      {dragons.map((dragon) => (
        <div className="flex flex-col justify-center items-center">
          <Dragon dragon={dragon} key={dragon.id} />
        </div>
      ))}
    </div>
  );
}

export default dragon;
