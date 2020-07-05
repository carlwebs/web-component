class WebComponent extends HTMLElement{
    constructor(){
        super();
        // 通过attachShadow自定义的元素不会受外部css样式的影响，也不会影响到外部的css。
        //mode设置为open可以通过DOM节点的方式进行获取，设置为close不可以。
        const shadow = this.attachShadow({mode:"open"});  
        const template = document.getElementById("myTemplate");
        const templateContent = template.content;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "./index.css";
        shadow.appendChild(link);
        shadow.appendChild(templateContent.cloneNode(true));
    }
    // 配置监听的属性，否则不会触发attributeChangedCallback
    static get observedAttributes() {
        return ['name'];
    }
    // 自定义组件的生命周期
    connectedCallback() {
        console.log("自定义元素被插入到DOM文档。");
        // 向父组件传递数据。
        this.dispatchEvent(new CustomEvent('custom', {
            detail: { message: 'a custom event' }
        }));
    }

    disconnectedCallback() {
        console.log("自定义元素被移除。");
    }

    adoptedCallback() {
        console.log("当自定义元素被移动到新的文档时被调用。");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name,oldValue,newValue);
        console.log("传递给自定义元素的属性改变。");
    }
}
// 自定义元素采用-拼接的形式，是为了与原生html元素进行区分
customElements.define("web-component",WebComponent);