import product from "../components/product.js";
import { showInConsole, showInDom } from "../components/show.js";

showInConsole(product);
showInDom(
  `Product name: ${product.name}, age: ${product.age}, price: ${product.price}`,
  product.HTMLElement
);
