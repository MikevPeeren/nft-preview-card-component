import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import EQUILIBRIUM from "../public/image-equilibrium.jpg";
import ETHEREUM_ICON from "../public/icon-ethereum.svg";
import CLOCK_ICON from "../public/icon-clock.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Preview Card Component</title>
        <meta name="description" content="NFT Preview Card Component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-dark-blue-one min-h-screen flex flex-col justify-center items-center">
        <div className="bg-dark-blue-two w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-2/12 flex flex-col justify-center items-start rounded-2xl px-6">
          <div className="w-full my-8">
            <Image
              src={EQUILIBRIUM}
              className="rounded-2xl"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
          <div>
            <h1>Equilibrium #3429</h1>
            <h2 className="mt-2">
              Our Equilibrium collection promotes balance and calm.
            </h2>
          </div>
          <div className="flex flex-row justify-between w-full mt-6">
            <div className="flex flex-row">
              <div className="flex items-center">
                <Image
                  src={ETHEREUM_ICON}
                  width={11}
                  height={18}
                  layout="fixed"
                />
              </div>
              <p className="px-2 text-cyan"> 0.041 ETH</p>
            </div>
            <div className="flex flex-row">
              <div className="flex items-center">
                <Image src={CLOCK_ICON} width={17} height={17} layout="fixed" />
              </div>
              <p className="px-2 text-soft-blue">0.041 ETH</p>
            </div>
          </div>

          <hr className="text-dark-blue-three w-full my-4" />

          <div></div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
