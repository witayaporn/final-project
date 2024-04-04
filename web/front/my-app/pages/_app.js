import React from "react";
import Head from "next/head";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Law & CoE Project</title>
    </Head>
      <Layout>
        <div className="content">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  )
}
