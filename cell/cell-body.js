export default function(Component){
    class Cell_Body extends Component {
        constructor(){
            super();
            this.name = 'cell-body';
        }

        template(){
            return `<div class="mx-cell-body" role="cell:body"><slot></slot></div>`;
        }
    }
    return Cell_Body;
}
