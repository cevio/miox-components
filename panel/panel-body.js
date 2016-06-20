
export default function(Component){
    class Panel_Body extends Component {
        constructor(){
            super();
            this.name = 'panel-body';
        }

        template(){
            return `<div class="mx-panel-body"><slot></slot></div>`;
        }
    }
    return Panel_Body
}
