class mySlot extends HTMLElement{
    constructor(){
        super();
        var template = document.getElementById("mySlot");
        var templateContent = template.content;
        var shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(templateContent);
    }
}
customElements.define("my-slot",mySlot);
console.log(customElements.get("my-slot"));   //该方法返回以前定义自定义元素的构造函数.
// 通过构造函数可以直接创建元素实例。
// 例如：
// const el = customElements.get('my-element');
// const myElement = new el();  // same as document.createElement('my-element');
// document.body.appendChild(myElement);

// 生命周期的执行顺序：
// constructor -> attributeChangedCallback -> connectedCallback