class MyTemplate extends HTMLElement{
    constructor(){
        super();
        var shadow = this.attachShadow({mode:"open"});
        var template = document.getElementById("myTemplate");
        var templateContent  = template.content;
        shadow.appendChild(templateContent.cloneNode(true));
    }
}
customElements.define("my-template",MyTemplate);