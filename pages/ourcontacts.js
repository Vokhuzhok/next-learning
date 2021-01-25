import Header from "../componenets/Header";
import Head from "next/head";
import Form from "../componenets/Form";

const Contacts = () => {
  return (
    <Header>
      <Head>
        <title>Contacts | Mystery Shack</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>Контакты</div>
      <Form />
    </Header>
  );
};

export default Contacts;
