import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import EQUILIBRIUM from "../public/image-equilibrium.jpg";
import ETHEREUM_ICON from "../public/icon-ethereum.svg";
import CLOCK_ICON from "../public/icon-clock.svg";
import VIEW_ICON from "../public/icon-view.svg";
import AVATAR from "../public/image-avatar.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Preview Card Component</title>
        <meta name="description" content="NFT Preview Card Component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-dark-blue-one min-h-screen flex flex-col justify-center items-center">
        <div className="bg-dark-blue-two shadow-2xl w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-3/12 flex flex-col justify-center items-start rounded-2xl px-6">
          <div className="drop-shadow-xl w-full h-auto my-6 overflow-hidden relative">
            <Image
              src={EQUILIBRIUM}
              alt="Image of the NFT Equilibrium"
              className="rounded-2xl"
              width={200}
              height={200}
              priority
              placeholder="blur"
              layout="responsive"
            />
            <Link href="https://mikevpeeren.nl">
              <div className="nftImageOverlay bg-cyan bg-opacity-50 opacity-0 hover:opacity-100 hover:cursor-pointer rounded-xl absolute w-full h-full top-1/2 left-1/2 flex justify-center items-center transition duration-700 ease-in-out">
                <Image
                  src={VIEW_ICON}
                  alt=""
                  className="rounded-2xl"
                  width={48}
                  height={48}
                  priority
                  layout="fixed"
                />
              </div>
            </Link>
          </div>
          <div>
            <h1>
              <a
                href="https://mikevpeeren.nl"
                className="hover:text-cyan cursor-pointer"
              >
                Equilibrium #3429
              </a>
            </h1>
            <h2 className="mt-2">
              Our Equilibrium collection promotes balance and calm.
            </h2>
          </div>
          <div className="flex flex-row justify-between w-full mt-6">
            <div className="flex flex-row">
              <div className="flex items-center">
                <Image
                  src={ETHEREUM_ICON}
                  alt=""
                  width={11}
                  height={18}
                  priority
                  layout="fixed"
                />
              </div>
              <p className="px-2 text-cyan">0.041 ETH</p>
            </div>
            <div className="flex flex-row">
              <div className="flex items-center">
                <Image
                  src={CLOCK_ICON}
                  alt=""
                  width={17}
                  height={17}
                  priority
                  layout="fixed"
                />
              </div>
              <p className="px-2 text-soft-blue">3 days left</p>
            </div>
          </div>

          <hr className="text-dark-blue-three w-full my-4" />

          <div className="flex flex-row items-center mb-6">
            <div className="flex flex-row items-center">
              <Image
                src={AVATAR}
                alt="Sellor of the NFT, in this case Jules Wyvern"
                className="imageBorder"
                width={30}
                height={30}
                priority
                layout="fixed"
              />
            </div>
            <p className="mx-2 text-white font-normal">
              <span className="text-soft-blue">Creation of </span>
              <a
                href="https://mikevpeeren.nl"
                className="hover:text-cyan cursor-pointer"
              >
                Jules Wyvern
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
