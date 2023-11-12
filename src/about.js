import { $content, createHtmlElement } from "./index";


function render(){
    const $main = document.createElement("main");
    $main.classList.add("main");

    const $welcome = createHtmlElement(
        "p",
        null,
        ["cursive"],
        "Welcome to"
      );
    const $title = createHtmlElement("h1", null, ["gray"], "Meat House");
    
    const $hr = document.createElement("hr");

    const content =
    "We are a modern restaurant dedicated to meat in all its forms. Our desire is to let our customers discover all the different ways meat can be prepared and serve with various sauces and accompaniment";
    const $p = createHtmlElement("p", null, ["menu-item"], content);

    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($p);

    $content.appendChild($main);
}

export { render as renderAbout}