import { useState } from "react";
import Loader from "./Loader";
import Product from "./Product";
import useSWR from "swr";
import * as axios from "axios";

const ProductContainer = () => {
  const { data, error } = useSWR(
    "api/productsApi",
    fetch("http://localhost:3000/api/productsApi")
  );
  if (error) {
    return <div>failed to load: {error}</div>;
  }
  if (!data) {
    return <Loader />;
  }
  return data.map((p) => {
    return <Product key={p.id} name={p.name} text={p.text} img={p.img} />;
  });
};

export default ProductContainer;
