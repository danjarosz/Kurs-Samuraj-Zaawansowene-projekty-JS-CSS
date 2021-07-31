const contentEl = document.querySelector(".content");

const addElement = (
  node = "div",
  txt = "",
  attribute = "",
  value = "",
  destination = ""
) => {
  if (!destination) {
    return;
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
