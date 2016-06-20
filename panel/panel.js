export default function(Component){
    class Panel extends Component {
        constructor(){
            super();
            this.name = 'panel';
        }

        template(){
            return `<div class="mx-panel" :style="{'border-color':borderColor}"><slot></slot></div>`;
        }

        props(){
            const props = {};
            props.borderColor = String;
            return props
        }
    }
    return Panel
}
