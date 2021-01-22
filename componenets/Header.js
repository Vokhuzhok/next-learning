import Link from "next/link";
import style from "../styles/main.module.css";
import Image from "next/image";

const Header = ({ children }) => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <Image src="/img/mainPicture.jpeg" alt="" height={200} width={300} />
        <div className={style.hizhina}>Хижина чудес</div>
        <div>Не звоните нам!</div>
      </div>
      <nav className={style.navPanel}>
        <Link href={"/"}>
          <a>Главная</a>
        </Link>
        <Link href={"/products"}>
          <a>Продукция</a>
        </Link>
        <Link href={"/aboutcompany"}>
          <a>О компании</a>
        </Link>
        <Link href={"/ourcontacts"}>
          <a>Контакты</a>
        </Link>
      </nav>
      <main className={style.mainContent}>{children}</main>
      <div className={style.footer}>
        Проект создан в целях обучения. Все данные взяты из свободных
        источников.
      </div>
    </div>
  );
};

export default Header;
