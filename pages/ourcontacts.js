import Link from "next/link"
import Header from "../componenets/Header"
import Head from "next/head";


const Contacts = () => {
    return (
        <Header>
                <Head>
        <title>Contacts | Mystery Shack</title>
      </Head>
            <div>Контакты</div>
            <Link href={"/"}><button>На главную</button></Link>
        </Header>
    )
};

export default Contacts;