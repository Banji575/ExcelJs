class Dom {
    constructor(selector) {
        this.$el = typeof selector == 'string' ?
            document.querySelector(selector) :
            selector
    }

    html(html){
        if(typeof html === 'string'){
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHTML.trim();
    }
    clear(){
        this.$el.html('');
        return this;
    }

    on = (typeListener, callback) =>{
        this.$el.addEventListener(typeListener, callback)
    }

    off = (typeListener, callback) =>{
        this.$el.removeEventListener(typeListener, callback)
    }

    closest(selector){
        return this.$el.closest(selector)
    }

    get getCoord(){
       return this.$el.getBoundingClientRect();
    }

    css(selectors){
        const key = Object.keys(selectors);
        key.forEach(selector=>{
            this.$el.style[selector] = selectors[selector]
        })
    }
    findAll(selector){
        let list;
        return list = this.$el.querySelectorAll(selector)
    }

    getAttribute(atribute){
        return this.$el.getAttribute(atribute)
    }

    append(node){
        if(node instanceof Dom){
            node = node.$el
        }
        if(Element.prototype.append){
            this.$el.append(node)
        } else{
            this.$el.appendChild(node);
        }
    }
}

export default function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, className) => {
    const el = document.createElement(tagName);
    if (className) {
        el.classList.add(className);
    }
    return $(el)
}

