import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import EQUILIBRIUM from "../public/image-equilibrium.jpg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Preview Card Component</title>
        <meta name="description" content="NFT Preview Card Component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-dark-blue-one min-h-screen flex flex-col justify-center items-center">
        <div className="bg-dark-blue-two w-2/12 flex justify-center items-center rounded-2xl">
          <div className="w-full h-2/4 my-8 mx-4">
            <Image
              src={EQUILIBRIUM}
              className="rounded-2xl"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
