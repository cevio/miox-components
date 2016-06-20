export default function(Component){
    class AppViewFoot extends Component {
        constructor(){
            super();
            this.name = 'appview-foot';
        }

        _template(){
            if ( typeof this.template === 'function' ){
                return this.template();
            }
            return `<div class="mx-appview-foot" role="appview-foot"><slot></slot></div>`;
        }
    }
    return AppViewFoot;
}
