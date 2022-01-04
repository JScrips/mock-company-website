import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mock Company Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </div>
  );
}
