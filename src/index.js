import { renderNav } from "./navbar";
import { renderFooter } from "./footer";
import { renderMenu } from "./menu";
import { renderHome } from "./main-home";
import { renderAbout } from "./about";
import { renderContact } from "./contact";

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

function home() {
    $content.innerHTML = "";
    renderNav();
    renderHome();
    renderFooter();
  }

function menu() {
    $content.innerHTML = "";
    renderNav();
    renderMenu();
    renderFooter();
  }

function about() {
    $content.innerHTML = "";
    renderNav();
    renderAbout();
    renderFooter();
  }

  function contact(){
    $content.innerHTML = "";
    renderNav();
    renderContact();
    renderFooter();
  }

home();

document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "HOME") home();
    if (target === "MENU" || target === "SEE THE MENU") menu();
    if (target === "ABOUT") about();
    if (target ==="CONTACT") contact();
  });


export { createHtmlElement, $content };