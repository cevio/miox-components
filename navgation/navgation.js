
export default function(miox, Component){
    class Navgation extends Component {
        constructor(){
            super();
            this.name = 'navgation';
        }

        template(){
            return `<div class="mx-navgation"><flex align-items="center" justify="center"><slot></slot></flex></div>`;
        }
    }
    return Navgation
}
