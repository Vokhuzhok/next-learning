import Link from "next/link";
import Header from "../componenets/Header";
import Head from "next/head";
import style from "../styles/product.module.css";

const Products = () => {
  return (
    <Header>
      <Head>
        <title>Products | Mystery Shack</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={style.image}>
          <div className={style.format}>
            <img src="/img/S1e5_mermaid.jpg" alt="" />
            <div>
              Фиджийская морская дева — общее название популярного в XIX веке
              экспоната всевозможных бродячих «выставок диковин» и уличных шоу.
            </div>
          </div>
          <div className={style.title}>Русалка Фиджи</div>
          <div className={style.format}>
            <img src="/img/S1e13_horse_riding_a_horse.jpg" alt="" />
            <div>
              Просто фотография того как один конь оседлал другого коня, ничего
              необычного...
            </div>
          </div>
          <div className={style.title}>Конь верхом на другом коне</div>
          <div className={style.format}>
            <img src="/img/Short14_fairy.jpg" alt="" />
            <div>
              На какие бы геральдические символы это небыло бы похоже... Это
              фея... Обычная двухголовая фея.
            </div>
          </div>
          <div className={style.title}>Фея</div>
          <div className={style.format}>
            <img src="/img/Short14_invisible_man.jpg" alt="" />
            <div>Он давно здесь стоит...</div>
          </div>
          <div className={style.title}>Человек невидимка</div>
        </div>
      </div>
    </Header>
  );
};

export default Products;
