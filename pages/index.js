import Header from "../componenets/Header";
import Head from "next/head";

const Index = () => {
  return (
    <Header>
      <Head>
        <title>Main | Mystery Shack</title>
      </Head>
      <h1>Главная</h1>
      <h2>Context</h2>
    </Header>
  );
};

export default Index;
