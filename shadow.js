class ShadowDemo extends HTMLElement {
    constructor() {
        super();
        // 通过shadow自定义组件样式不会影响到外面的样式,说白了就是起到一个隔离的效果
        // 如果不用shadow封装会受到外面元素的影响。
        // mode值为open可以通过JavaScript访问，值为closed不可以通过JavaScript访问。
        // 将 Shadow root 附加到 custom element 上。
        // 构造函数一般是用来初始化状态和设置shadow dom

        // 元素的构造函数和connectCallback的区别是，当时一个元素被创建时（好比document.createElement）
        // 将会调用构造函数，而当一个元素已经被插入到DOM中时会调用connectedCallback。
        let shadow = this.attachShadow({ mode: 'open' });
        var p = document.createElement("p");
        p.innerText = "test";
        var style = document.createElement("style");
        style.textContent = `
            p{
                color:red;
            }
        `;
        shadow.appendChild(p);
        shadow.appendChild(style);
    }
}
customElements.define("shadom-demo", ShadowDemo);

// 链接外部css
class ShadowCss extends HTMLElement{
    constructor(){
        super();
        var shadow = this.attachShadow({mode:"open"});
        var p = document.createElement("p");
        p.innerText = "链接外部css";
        var link = document.createElement("link");
        link.setAttribute("rel","stylesheet");
        link.setAttribute("href","./shadow.css");
        shadow.appendChild(link);
        shadow.appendChild(p);
    }
}
customElements.define("shadow-css",ShadowCss);