import { renderNav } from "./navbar";
import { renderFooter } from "./footer";
import { renderMenu } from "./menu";
import { renderHome } from "./main-home";
import { renderAbout } from "./about";

const $content=document.getElementById("content");


function createHtmlElement(type, id, arrayClasses, content){
    const element=document.createElement(type);
    if (id) {
        element.id=id;
    }
    if (arrayClasses){
        arrayClasses.forEach((Myclass) => element.classList.add(Myclass));
    }

    if (content){
        element.innerText=content;
    }

    return element;
}