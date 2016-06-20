export default function(Component){
    class AppView extends Component {
        constructor(){
            super();
            this.name = 'appview';
        }

        computed(computed){
            computed.style = function(){
                if ( this.blank ){
                    return {
                        'padding-top': 20
                    }
                }
            }

            return computed;
        }

        template(){
            return `<div class="mx-appview" role="appview" :class="{'mx-appview-horizontal': horizontal}" :style="style"><slot></slot></div>`;
        }

        props(){
            const props = {};
            props.blank = Boolean;
            props.horizontal = Boolean;
            return props;
        }
    }
    return AppView;
}
