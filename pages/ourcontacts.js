import Link from "next/link"
import Header from "../componenets/Header"


const Contacts = () => {
    return (
        <Header>
            <div>Контакты</div>
            <Link href={"/"}><button>На главную</button></Link>
        </Header>
    )
};

export default Contacts;