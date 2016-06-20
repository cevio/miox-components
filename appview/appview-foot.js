export default function(Component){
    class AppViewFoot extends Component {
        constructor(){
            super();
            this.name = 'appview-foot';
        }

        template(){
            return `<div class="mx-appview-foot" role="appview-foot"><slot></slot></div>`;
        }
    }
    return AppViewFoot;
}
