export default function(Component){
    class AppViewHead extends Component {
        constructor(){
            super();
            this.name = 'appview-head';
        }

        template(){
            return `<div class="mx-appview-head" role="appview-head"><slot></slot></div>`;
        }
    }
    return AppViewHead;
}
