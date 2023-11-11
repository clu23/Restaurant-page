import { $content, createHtmlElement } from "./index";

function render(){
    const $footer=document.createElement("footer");
    const $p=createHtmlElement("p", null, null, "Developed by clu23");

    $footer.appendChild($p);

    $content.appendChild($footer);
}

export {render as renderFooter};