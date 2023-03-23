import React from "react";
import Head from "next/head";
import Collection from "../components/scaffold-eth/collection";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Proof of DeepWork</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <Collection />
    </>
  );
};

export default Home;
