import Header from "../componenets/Header";
import Head from "next/head";

const AboutCompany = () => {
  return (
    <Header>
      <Head>
        <title>About Company | Mystery Shack</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>О компании</div>
    </Header>
  );
};

export default AboutCompany;
