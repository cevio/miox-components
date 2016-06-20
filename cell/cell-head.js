export default function(Component){
    class Cell_Head extends Component {
        constructor(){
            super();
            this.name = 'cell-head';
        }

        _template(){
            if ( typeof this.template === 'function' ){
                return this.template();
            }
            return `<div class="mx-cell-head" role="cell:head"><slot></slot></div>`;
        }
    }
    return Cell_Head;
}
