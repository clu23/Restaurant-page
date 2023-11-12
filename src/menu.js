import { $content, createHtmlElement } from "./index";

const menu = [
    {
      name: "Steak with fries",
      description:
        "A delicious steak with fries cooked in duck grease accompanied by tomatoes and salad. Sauce at will",
      price: "20$",
    },
    {
      name: "Pork ribs",
      description:
        "Greasy pork ribs perfectly cooked",
      price: "25$",
    },
    {
      name: "Entrecote",
      description:
        "Tasty parsley steak cooked to your taste, accompanied by salad and roasted potatoes",
      price: "30$",
    },
  ];

function render(){
    const $main = document.createElement("main");
    $main.classList.add("main");

    const $welcome = createHtmlElement(
        "p",
        null,
        ["cursive"],
        "Welcome to"
      );

    const $title = createHtmlElement("h1", null, ["white"], "Menu");
    
    const $hr = document.createElement("hr");

    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);

    menu.forEach((item) => {
        const $div = createHtmlElement("div", null, ["menu-item"], null);
    
        const $name = createHtmlElement("h2", null, ["golden"], item.name);
        const $description = createHtmlElement(
          "p",
          null,
          ["gray"],
          item.description
        );
        const $price = createHtmlElement("h2", null, ["golden"], item.price);
        const $hr = createHtmlElement("hr", null, ["menu-hr"], null);
    
        $div.appendChild($name);
        $div.appendChild($description);
        $div.appendChild($price);
        $div.appendChild($hr);
    
        $main.appendChild($div);
      });

      $content.appendChild($main);

}

export { render as renderMenu};