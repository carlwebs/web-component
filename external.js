class ExternalDemo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const p = document.createElement("p");
        p.innerText = "外部引用类的方法";
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "./external.css";
        shadow.appendChild(link);
        shadow.appendChild(p);
    }
    connectedCallback() {
        // 抛出自定义事件
        this.dispatchEvent(new CustomEvent('custom', {
            detail: { message: 'a custom event' }
        }));
    }
    docon() {
        // this指代当前组件。
        console.log(this);
        console.log("通过选择元素调用该元素的方法。");
    }
}
customElements.define("external-demo", ExternalDemo);
window.onload = function () {
    const ele = document.querySelector("external-demo");
    ele.docon();
}
