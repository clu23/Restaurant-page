import { $content, createHtmlElement } from "./index";

function render(){
    const $main = document.createElement("main");
    $main.classList.add("main-menu");

    const $title = createHtmlElement("p", null, ["gray","contact-title"], "Contact");

    const $hr = document.createElement("hr");

    const $subtitle = createHtmlElement(
        "p",
        null,
        ["text-center", "white"],
        "Contact us"
      );

    const content =
    "12 Street of the big tree, 0675-UA Springfield USA";
    const $p = createHtmlElement("p", null, ["menu-item"], content);


    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($p);

    $content.appendChild($main);
}


export {render as renderContact};