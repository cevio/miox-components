export default function(Component){
    class AppViewBody extends Component {
        constructor(){
            super();
            this.name = 'appview-body';
        }

        template(){
            return `<div class="mx-appview-body" role="appview-body"><slot></slot></div>`;
        }
    }
    return AppViewBody;
}
