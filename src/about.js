import { $content, createHtmlElement } from "./index";


function render(){
    const $main = document.createElement("main");
    $main.classList.add("main-menu");

    const $title = createHtmlElement("p", null, ["gray","about-title"], "About us");
    
    const $hr = document.createElement("hr");

    const content =
    "We are a modern restaurant dedicated to meat in all its forms. Our desire is to let our customers discover all the different ways meat can be prepared and serve with various sauces and accompaniment";
    const $p = createHtmlElement("p", null, ["menu-item"], content);

    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($p);

    $content.appendChild($main);
}

export { render as renderAbout}