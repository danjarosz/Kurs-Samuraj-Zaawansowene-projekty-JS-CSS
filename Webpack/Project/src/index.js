import { message, messageDOM } from "./tools/message";
import "./components/footer";
import info from "./data/title.txt";
import "./sass/index.scss";
import addImage from "./tools/image";
import Creator from "./tools/creator";

message(info);
messageDOM(info);
addImage("h1");

const e1 = new Creator();
e1.addBgc("red");
e1.showColor();
const e2 = new Creator();
e2.addBgc("green");
e2.showColor();
const e3 = new Creator();
e3.showColor();
e3.addBgc();
// e3.addBgc("blue");
