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
      <Form/>
      {/* <form>
        <div>
          <input name="name" type="input" placeholder="Ваше имя"/>
        </div>
        <div>
          <input name="email" type="email" placeholder="E-mail" />
        </div>
        <div>
          <input name="phone" type="tel" placeholder="Номер телефона" />
        </div>
        <div>
          <button type="submit">Отправить</button>
        </div>
      </form> */}
    </Header>
  );
};

export default Contacts;
