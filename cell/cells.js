export default function(Component){
    class Cells extends Component {
        constructor(){
            super();
            this.name = 'cells';
        }

        template(){
            return `<div class="mx-cells" role="cells" :style="{'border-color':borderColor}"><slot></slot></div>`;
        }

        props(){
            const props = {};
            props.borderColor = String;
            return props
        }
    }
    return Cells;
}
