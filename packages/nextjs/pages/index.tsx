import React from "react";
import Head from "next/head";
import Collection from "../components/scaffold-eth/collection";
import NFTmodal from "../components/scaffold-eth/nftModal";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Proof of DeepWork</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <NFTmodal />
      <Collection />
    </>
  );
};

export default Home;
