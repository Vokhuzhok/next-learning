import style from "../styles/product.module.css";

const Product = (props) => {
 return(
      <div>
        <div className={style.format}>
          <img src={props.img} alt="" />
          <div>
            {props.text}
          </div>
        </div>
        <div className={style.title}>{props.name}</div>
      </div>
  );
};

export default Product;
