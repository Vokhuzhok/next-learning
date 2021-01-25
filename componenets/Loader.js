import style from "../styles/loader.module.css";

const Loader = () => {
    return(
        <div className={style.loader}>
            <img src="35.svg" alt="Is loading..."/>
        </div>
    );
};

export default Loader;