import Link from "next/link";
import Header from "../componenets/Header";

const Products = () => {
    return (
        <Header>
        <div>
            <div>Наша продукция</div>
            <Link  href={"/"}><a>На главную</a></Link>
        </div>
        </Header>
    )
}

export default Products;