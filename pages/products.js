import Header from "../componenets/Header";
import Head from "next/head";
import style from "../styles/product.module.css";
import ProductContainer from "../componenets/ProductContainer";

const Products = () => {
  return (
    <Header>
      <Head>
        <title>Products | Mystery Shack</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={style.image}>
          <ProductContainer />
        </div>
      </div>
    </Header>
  );
};

export default Products;
