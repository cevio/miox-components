export default function(Component){
    class Cell_Foot extends Component {
        constructor(){
            super();
            this.name = 'cell-foot';
        }

        template(){
            return `<div class="mx-cell-foot" role="cell-foot"><slot></slot></div>`;
        }
    }
    return Cell_Foot;
}
