export default function(Component){
    class Cell extends Component {
        constructor(){
            super();
            this.name = 'cell';
        }

        _template(){
            if ( typeof this.template === 'function' ){
                return this.template();
            }
            return `<div class="mx-cell" role="cell" data-left="0" :class="{'mx-cell-linked':linked}" :style="{'border-color':borderColor,'padding-left':left}"><slot></slot></div>`;
        }

        _props(props, take){
            if ( !props ){ props = {} };
            props.linked = Boolean;
            props.borderColor = String;
            props.left = { type: String, default: '' };
            return take('props', props);
        }
    }
    return Cell;
}
