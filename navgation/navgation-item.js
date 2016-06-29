
export default function(miox, Component){
    class Navgation_Item extends Component {
        constructor(){
            super();
            this.name = 'navgation-item';
        }

        computed(computed){
            computed.grid = function(){
                return (this.center ? 1 : 0 ) + ' 0 ' + (this.width || "auto");
            }
            return computed;
        }

        template(){
            return `<flex-item :flex.sync="grid" :class="{'mx-text-center': center, 'mx-text-left': left, 'mx-text-right': right}"><slot></slot></flex-item>`;
        }

        props(){
            const props = {};
            props.width = String;
            props.center = Boolean;
            props.left = Boolean;
            props.right = Boolean;
            return props
        }
    }
    return Navgation_Item
}
