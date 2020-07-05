class CustomOne extends HTMLElement {
    constructor() {
        super();
        var div = document.createElement("div");
        div.innerText = "创建自定义元素的第一种方式     " + this.getAttribute("name");
        div.className = "css";
        div.onclick = ()=>{
            this.setAttribute("name","修改");
        }
        var style = document.createElement("style");
        this.appendChild(style);
        this.appendChild(div);
        console.log(this.getAttribute('name'));  //获取给自定义组件传递的属性。
    }

    // 要监听某一个属性的变化，触发attributeChangedCallback函数，这里要先进行配置该属性。
    static get observedAttributes() {
        return ['name', 'c'];
    }

    connectedCallback() {
        console.log("自定义元素被插入到DOM文档。");
        this.upStyle(this);
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

    upStyle(elem) {
        var childNodes = elem.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            console.log(childNodes[i].nodeName);
            if (childNodes[i].nodeName === 'STYLE') {
                childNodes[i].textContent = 'div.css {' +
                    ' width: ' + elem.getAttribute('l') + 'px;' +
                    ' height: ' + elem.getAttribute('l') + 'px;' +
                    ' background-color: ' + elem.getAttribute('c');
            }
        }
    }
}
customElements.define("custom-one", CustomOne);

class CustomTwo extends HTMLParagraphElement {
    constructor() {
        super();
        var div = document.createElement("div");
        div.innerText = "创建自定义元素的第二种方式";
        this.appendChild(div);
    }
}
customElements.define("custom-two", CustomTwo, { extends: "p" });