import Header from "../componenets/Header";
import Head from "next/head";

const Index = () => {
  return (
    <Header>
      <Head>
        <title>Main | Mystery Shack</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Главная</h1>
        <h2>Context</h2>
      </div>
    </Header>
  );
};

export default Index;
