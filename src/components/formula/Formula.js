import ExcelComponent from "../../core/ExcelComponent";

export default class Formula extends ExcelComponent {
    constructor($root){
        super($root,{
            name: 'formula',
            listeners: ['input']
        })

    }
    static className = "excel__formula"
    toHTML() {
        return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>`
    }

    onInput(evt){
        console.log(this.$root)
        console.log('Formula input', evt);
    
    }
}