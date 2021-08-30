import product from "./product.js";

export const showInConsole = (data) => {
  console.log(data);
};

export const showInDom = (info, tag = product.HTMLElement) => {
  if (!tag) {
    throw Error("Tag is required!");
  }

  const element = document.createElement(tag);
  element.textContent = info;
  document.body.appendChild(element);
};
