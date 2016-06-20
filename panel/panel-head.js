
export default function(Component){
    class Panel_Head extends Component {
        constructor(){
            super();
            this.name = 'panel-head';
        }

        template(){
            return `<div class="mx-panel-head" :class="{'mx-panel-linked':linked}"><slot></slot></div>`;
        }

        props(){
            return {
                linked: Boolean
            }
        }
    }
    return Panel_Head
}
