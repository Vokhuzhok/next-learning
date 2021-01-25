import { products } from "../../data/products.json";

export default function (req, res) {
  if (req.method === "GET") {
    res.status(200).send(products);
  } else {
    res.status(404);
  }
}
