
export default function(Component){
    class Panel_Body extends Component {
        constructor(){
            super();
            this.name = 'panel-body';
        }

        _template(){
            if ( typeof this.template === 'function' ){
                return this.template();
            }
            return `<div class="mx-panel-body"><slot></slot></div>`;
        }
    }
    return Panel_Body
}
