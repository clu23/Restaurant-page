import { $content, createHtmlElement } from "./index";


function render(){
    const $main = document.createElement("main");

    const $welcome = createHtmlElement(
        "p",
        null,
        ["cursive"],
        "Welcome to"
      );
    
    const $title = createHtmlElement("h1", null, ["white"], "Meat House");
    const $hr = document.createElement("hr");

    const $subtitle = createHtmlElement(
        "p",
        null,
        ["text-center", "white"],
        "The place to have good and delicious meat"
      );
    
    const $button = createHtmlElement("button", null, null, "See the menu");

    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($subtitle);
    $main.appendChild($button);

    $content.appendChild($main);
}


export {render as renderHome}