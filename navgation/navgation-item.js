
export default function(miox, Component){
    class Navgation_Item extends Component {
        constructor(){
            super();
            this.name = 'navgation-item';
        }

        _computed(computed, take){
            if ( !computed ) computed = {};
            computed.grid = function(){
                return (this.center ? 1 : 0 ) + ' 0 ' + (this.width || 0);
            }
            return take('computed', computed);
        }

        _template(){
            if ( typeof this.template === 'function' ){
                return this.template();
            }
            return `<flex-item :flex.sync="grid" :class="{'mx-text-center': center, 'mx-text-left': left, 'mx-text-right': right}"><slot></slot></flex-item>`;
        }

        _props(props, take){
            if ( !props ) props = {};
            props.width = String;
            props.center = Boolean;
            props.left = Boolean;
            props.right = Boolean;
            return take('props', props);
        }
    }
    return Navgation_Item
}
