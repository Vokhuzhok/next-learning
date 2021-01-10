import Link from "next/link";

const Header = ({ children }) => {
  return (
    <>
      <div>Некоторый хеадер</div>
      <nav>
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
      <main>{children}</main>
      <div>Некоторый футер</div>
    </>
  );
};

export default Header;