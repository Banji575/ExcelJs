import toUppercase from '../core/util';
export default class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provider for DomListerer`)
        }
        this.$root = $root
        this.listeners = listeners
    }
    initDOMListeners = () => {
        this.listeners.forEach(el => {
            const method = createMethod(el);
            if(this[method]){
                this[method] = this[method].bind(this)
            }else{
                throw new Error(`Provide method ${method} in component`)
            }
            
            this.$root.on(el, this[method])
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(el => {
            const method = createMethod(el);
            this.$root.off(el, this[method])
        })
    }
}

const createMethod = (listener) =>{
return `on${toUppercase(listener)}`
}