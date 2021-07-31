const contentEl = document.querySelector(".content");
const resultEl = document.querySelector(".result");

const addElement = (
  node = "div",
  txt = "",
  attribute = "",
  value = "",
  destination = ""
) => {
  if (!destination) {
    throw new Error("parameter destination is required");
  }
  const element = document.createElement(node);
  const textNode = document.createTextNode(txt);
  if (txt) {
    element.appendChild(textNode);
  }
  if (attribute && value) {
    element.setAttribute(attribute, value);
  }

  destination.appendChild(element);
};

// Add element form
const addForm = document.querySelector(".form--add");

const handleAddElementSubmit = (e, destination) => {
  e.preventDefault();

  if (!destination) {
    throw new Error("Destination is required");
  }

  const formEl = e.target;
  const nodeInput = formEl.querySelector('[name="node"]');
  const nodeInputValue = nodeInput.value;
  const textInput = formEl.querySelector('[name="text"]');
  const textInputValue = textInput.value;
  const attrInput = formEl.querySelector('[name="attr"]');
  const attrInputValue = attrInput.value;
  const valueInput = formEl.querySelector('[name="attr-value"]');
  const valueInputValue = valueInput.value;

  addElement(
    nodeInputValue,
    textInputValue,
    attrInputValue,
    valueInputValue,
    destination
  );

  nodeInput.value = "";
  textInput.value = "";
  attrInput.value = "";
  valueInput.value = "";
};

addForm.addEventListener("submit", (e) => handleAddElementSubmit(e, contentEl));

// Search form
const searchForm = document.querySelector(".form--search");

const CreateElementSummary = (
  tagName,
  classAttr,
  offsetHeight,
  offsetWidth,
  offsetLeft,
  offsetTop,
  childNodesAmount
) => {
  const element = document.createElement("div");

  const tagNameEl = document.createElement("p");
  const tagNameTextNode = document.createTextNode(`Tag: ${tagName}`);
  tagNameEl.appendChild(tagNameTextNode);

  const classAttrEl = document.createElement("p");
  const classAttrtextNode = document.createTextNode(
    `Class / Classes: ${classAttr}`
  );
  classAttrEl.appendChild(classAttrtextNode);

  const offsetHeightEl = document.createElement("p");
  const offsetHeightTextNode = document.createTextNode(
    `Wysokość elementu (offsetHeight): ${offsetHeight}`
  );
  offsetHeightEl.appendChild(offsetHeightTextNode);

  const offsetWidthEl = document.createElement("p");
  const offsetWidthTextNode = document.createTextNode(
    `Szerokość elementu(offsetWidth): ${offsetWidth}`
  );
  offsetWidthEl.appendChild(offsetWidthTextNode);

  const offsetLeftEl = document.createElement("p");
  const offsetLeftTextNode = document.createTextNode(
    `Odległość od lewej krawędzi (offsetLeft): ${offsetLeft}`
  );
  offsetLeftEl.appendChild(offsetLeftTextNode);

  const offsetTopEl = document.createElement("p");
  const offsetTopTextNode = document.createTextNode(
    `Odległość od górnej krawędzi (offsetTop): ${offsetTop}`
  );
  offsetTopEl.appendChild(offsetTopTextNode);

  const childNodesAmountEl = document.createElement("p");
  const childNodesAmountTextNode = document.createTextNode(
    `Liczba elementów dzieci: ${childNodesAmount}`
  );
  childNodesAmountEl.appendChild(childNodesAmountTextNode);

  element.appendChild(tagNameEl);
  element.appendChild(classAttrEl);
  element.appendChild(offsetHeightEl);
  element.appendChild(offsetWidthEl);
  element.appendChild(offsetLeftEl);
  element.appendChild(offsetTopEl);
  element.appendChild(childNodesAmountEl);

  return element;
};

const handleSearchFormSubmit = (e, resultTarget) => {
  e.preventDefault();

  if (!resultTarget) {
    throw new Error("resultTarged is required");
  }

  resultTarget.innerHTML = "";

  const formEl = e.target;
  const searchInput = formEl.querySelector('[name="search"]');
  const searchInputValue = searchInput.value;

  if (!searchInput) {
    return;
  }

  const foundNodes = [...document.querySelectorAll(searchInputValue)];

  if (foundNodes.length === 0) {
    const node = "p";
    const text = `Nie znaleziono elementów: ${searchInputValue}`;
    const style = "flex-basis: 100%; text-align: center";
    addElement(node, text, "style", style, resultTarget);
    return;
  }

  const node = "p";
  const text = `Liczba znalezionych elementów (${searchInputValue}): ${foundNodes.length}`;
  const style = "grid-column: 1/-1; grid-row: 1/2; text-align: center";
  addElement(node, text, "style", style, resultTarget);

  foundNodes.forEach((foundNode) => {
    const tagName = foundNode.tagName;
    const classAttr = foundNode.getAttribute("class");
    const offsetHeight = foundNode.offsetHeight;
    const offsetWidth = foundNode.offsetWidth;
    const offsetLeft = foundNode.offsetLeft;
    const offsetTop = foundNode.offsetTop;
    const childNodesAmount = foundNode.childElementCount;

    const element = CreateElementSummary(
      tagName,
      classAttr,
      offsetHeight,
      offsetWidth,
      offsetLeft,
      offsetTop,
      childNodesAmount
    );

    resultTarget.appendChild(element);
  });
};

searchForm.addEventListener("submit", (e) =>
  handleSearchFormSubmit(e, resultEl)
);
