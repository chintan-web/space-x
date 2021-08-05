import History from "../components/History";
import Navbar from "../components/Navbar";

export async function getStaticProps(context) {
  const res = await fetch(`https://api.spacexdata.com/v4/history`);
  const histories = await res.json();

  if (!histories) {
    return {
      notFound: true,
    };
  }

  return {
    props: { histories },
  };
}

function history({ histories }) {
  return (
    <div className="bg-black text-white">
      <Navbar />
      {histories.map((history) => (
        <div>
          <History history={history} key={history.id} />
        </div>
      ))}
    </div>
  );
}

export default history;
