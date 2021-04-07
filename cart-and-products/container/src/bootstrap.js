import { mount as mountCart } from "cart/CartShow";
import { mount as mountProduct } from "products/ProductsIndex";

console.log("Container!");

mountProduct(document.querySelector("#my-dev-products"));
mountCart(document.querySelector("#my-dev-carts"));
