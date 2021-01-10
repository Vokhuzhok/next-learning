import Link from "next/link";
import Header from "../componenets/Header";
import Head from "next/head";
import style from "../styles/product.module.css";

const Products = () => {
  return (
    <Header>
      <Head>
        <title>Products | Mystery Shack</title>
      </Head>
      <div>
        <div className={style.image}>
          <div className={style.format}>
            <img src="/S1e5_mermaid.jpg" alt="" />
            <div>
              Фиджийская морская дева — общее название популярного в XIX веке
              экспоната всевозможных бродячих «выставок диковин» и уличных шоу.
            </div>
          </div>
          <span>Русалка Фиджи</span>
          <div className={style.format}>
            <img src="/S1e13_horse_riding_a_horse.jpg" alt="" />
            <div>
              Просто фотография того как один конь оседлал другого коня, ничего необычного...
            </div>
          </div>
          <span>Конь верхом на другом коне</span>
          <div className={style.format}>
            <img src="/Short14_fairy.jpg" alt="" />
            <div>
              На какие бы геральдические символы это небыло бы похоже... Это фея... Обычная двухголовая фея.
            </div>
          </div>
          <span>Фея</span>
          <div className={style.format}>
            <img src="/Short14_invisible_man.jpg" alt="" />
            <div>
              Он давно здесь стоит...
            </div>
          </div>
          <span>Человек невидимка</span>
        </div>
      </div>
      <Link href={"/"}>
        <button>На главную</button>
      </Link>
    </Header>
  );
};

export default Products;
