
export default function(miox, Component){
    class Navgation extends Component {
        constructor(){
            super();
            this.name = 'navgation';
        }

        _template(){
            if ( typeof this.template === 'function' ){
                return this.template();
            }
            return `<div class="mx-navgation"><flex align-items="center" justify="center"><slot></slot></flex></div>`;
        }
    }
    return Navgation
}
