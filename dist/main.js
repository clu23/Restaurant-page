(()=>{"use strict";var e={d:(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};function n(){const e=document.createElement("ul");["home","menu","about","contact"].forEach((n=>e.appendChild(l("li",null,null,n))));const n=document.createElement("nav");n.appendChild(e),d.appendChild(n)}function t(){const e=document.createElement("footer"),n=l("p",null,null,"Developed by clu23");e.appendChild(n),d.appendChild(e)}e.d({},{b:()=>d,U:()=>l});const a=[{name:"Steak with fries",description:"A delicious steak with fries cooked in duck grease accompanied by tomatoes and salad. Sauce at will",price:"20$"},{name:"Pork ribs",description:"Greasy pork ribs perfectly cooked",price:"25$"},{name:"Entrecote",description:"Tasty parsley steak cooked to your taste, accompanied by salad and roasted potatoes",price:"30$"}],d=document.getElementById("content");function l(e,n,t,a){const d=document.createElement(e);return n&&(d.id=n),t&&t.forEach((e=>d.classList.add(e))),a&&(d.innerText=a),d}function i(){d.innerHTML="",n(),function(){const e=document.createElement("main"),n=l("p",null,["cursive"],"Welcome to"),t=l("h1",null,["white"],"Meat House"),a=document.createElement("hr"),i=l("p",null,["text-center","white"],"The place to have good and delicious meat"),c=l("button",null,null,"See the menu");e.appendChild(n),e.appendChild(t),e.appendChild(a),e.appendChild(i),e.appendChild(c),e.classList.add("main"),d.appendChild(e)}(),t()}i(),document.addEventListener("click",(e=>{const c=e.target.innerText;"HOME"===c&&i(),"MENU"!==c&&"SEE THE MENU"!==c||(d.innerHTML="",n(),function(){const e=document.createElement("main");e.classList.add("main-menu");const n=l("p",null,["black","menu-title"],"Menu"),t=document.createElement("hr");e.appendChild(n),e.appendChild(t),a.forEach((n=>{const t=l("div",null,["menu-item"],null),a=l("h2",null,["golden"],n.name),d=l("p",null,["gray"],n.description),i=l("h2",null,["golden"],n.price),c=l("hr",null,["menu-hr"],null);t.appendChild(a),t.appendChild(d),t.appendChild(i),t.appendChild(c),e.appendChild(t)})),d.appendChild(e)}(),t()),"ABOUT"===c&&(d.innerHTML="",n(),function(){const e=document.createElement("main");e.classList.add("main-menu");const n=l("p",null,["gray","about-title"],"About us"),t=document.createElement("hr"),a=l("p",null,["menu-item"],"We are a modern restaurant dedicated to meat in all its forms. Our desire is to let our customers discover all the different ways meat can be prepared and serve with various sauces and accompaniment");e.appendChild(n),e.appendChild(t),e.appendChild(a),d.appendChild(e)}(),t()),"CONTACT"===c&&(d.innerHTML="",n(),function(){const e=document.createElement("main");e.classList.add("main-menu");const n=l("p",null,["gray","contact-title"],"Contact"),t=document.createElement("hr"),a=(l("p",null,["text-center","white"],"Contact us"),l("p",null,["menu-item"],"12 Street of the big tree, 0675-UA Springfield USA"));e.appendChild(n),e.appendChild(t),e.appendChild(a),d.appendChild(e)}(),t())}))})();