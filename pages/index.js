import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white lg:h-screen sm:h-full">
        <Navbar />
        <div className="text-center flex justify-center items-center flex-col">
          <h1 className="text-center font-bold text-2xl my-12">
            Welcome to space-x home page
          </h1>
          <p className=" lg:w-9/12 sm:w-10/12 text-center">
            In 2001, Elon Musk conceptualized Mars Oasis, a project to land a
            miniature experimental greenhouse and grow plants on Mars.[7][8][9]
            He announced that the project would be "the farthest that life's
            ever traveled" in an attempt to regain public interest in space
            exploration and increase NASA's budget.[7][8][9] Musk tried to
            purchase cheap rockets from Russia but returned empty-handed after
            failing to find rockets for an affordable price.[10][11] On the
            flight home Musk realized that he could start a company that could
            build the affordable rockets he needed.[11] By applying vertical
            integration,[10] using cheap commercial off-the-shelf components
            when possible,[11] and adopting the modular approach of modern
            software engineering, Musk believed SpaceX could significantly cut
            launch price.[11] In early 2002, Musk started to look for staff for
            his new space company, soon to be named SpaceX. Musk approached
            rocket engineer Tom Mueller (later SpaceX's CTO of propulsion), and
            invited him to become his business partner. Mueller agreed to work
            for Musk, and thus SpaceX was born.[12] SpaceX was first
            headquartered in a warehouse in El Segundo, California. By November
            2005, the company had 160 employees.[13] Musk personally interviewed
            and approved all of SpaceX's early employees, even going so far as
            convincing Larry Page to transfer a Google employee from San
            Francisco to Los Angeles so that the employee's spouse, a potential
            SpaceX hire, would take the job.[14]{" "}
          </p>

          <p className="lg:w-9/12 sm:w-10/12 text-center">
            SpaceX originally intended to follow its light Falcon 1 launch
            vehicle with an intermediate capacity vehicle, the Falcon 5.[29]
            SpaceX instead decided in 2005 to proceed with the development of
            the Falcon 9, a reusable heavier lift vehicle. Development of the
            Falcon 9 was accelerated by NASA, which committed to purchase
            several commercial flights if specific capabilities were
            demonstrated. This started with seed money from the Commercial
            Orbital Transportation Services (COTS) program in 2006.[30] The
            overall contract award was US$278 million to provide development
            funding for the Dragon spacecraft, Falcon 9, and demonstration
            launches of Falcon 9 with Dragon.[30] As part of this contract, the
            Falcon 9 launched for the first time in June 2010 with the Dragon
            Spacecraft Qualification Unit, using a mockup of the Dragon
            spacecraft.
          </p>
        </div>
      </main>
    </div>
  );
}
