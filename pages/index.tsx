import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Preview Card Component</title>
        <meta name="description" content="NFT Preview Card Component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-dark-blue-one min-h-screen"></main>

      <footer></footer>
    </div>
  );
};

export default Home;
