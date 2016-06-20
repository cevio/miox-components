
export default function(Component){
    class Panel_Foot extends Component {
        constructor(){
            super();
            this.name = 'panel-foot';
        }

        template(){
            return `<div class="mx-panel-foot" :class="{'mx-panel-linked':linked}"><slot></slot></div>`;
        }

        props(){
            return {
                linked: Boolean
            }
        }
    }
    return Panel_Foot
}
