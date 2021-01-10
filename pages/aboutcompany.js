import Link from "next/link"
import Header from "../componenets/Header"


const AboutCompany = () => {
    return (
        <Header>
            <div>О компании</div>
            <Link href={'/'}><button>На главную</button></Link>
        </Header>
    )
}

export default AboutCompany;