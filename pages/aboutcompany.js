import Link from "next/link";
import Header from "../componenets/Header";
import Head from "next/head";

const AboutCompany = () => {
  return (
    <Header>
      <Head>
        <title>About Company | Mystery Shack</title>
      </Head>
      <div>О компании</div>
      <Link href={"/"}>
        <button>На главную</button>
      </Link>
    </Header>
  );
};

export default AboutCompany;
