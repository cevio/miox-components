export default function(Component) {
    class button extends Component {
        constructor() {
            super();
            this.name = 'button';
        }

        computed(options){
            return options
        }

        template() {
            return `
            <div class="mx-button" :class="{
                'mx-button-blocked':blocked ,
                'mx-button-loading':loading
                }"
                :type="type"
                :style="{'borderRadius':radius,'fontSize':size}">
                <div class="mx-button-loading-icon" :class="{'loading':loading}" ></div>
                <slot></slot>
            </div>
            `
        }

        data(){
            return function(){
                return {
                    waveStartX:'0',
                    waving:false
                }
            }
        }


        props() {
            const props = {};
            props.blocked = Boolean;
            props.radius = String;
            props.waveopacity = String;
            props.loading = Boolean;
            props.size = String;
            props.type = {
                type: String,
                default: 'default'
            };
            return props
        }
    }
    return { btn: button };
}
