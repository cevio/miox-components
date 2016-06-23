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
                'mx-button-rounded':rounded
                }"
                :type="type"
                @click="click">
                <slot></slot>
                <div v-if="waved" class="mx-button-wave" @animationEnd="waveEnd" :class="{'mx-button-waving':waving}" :style={'left':waveStartX,'backgroundColor':wavecolor,'opacity':waveopacity}></div>
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

        methods(methods){
            methods.click=function(e){
                this.waveStartX = e.layerX+'px';
                this.waving = true;

            }
            methods.waveEnd=function(e){
                this.waving = false;
            }

            return methods;
        }

        props() {
            const props = {};
            props.blocked = Boolean;
            props.rounded = Boolean;
            props.waved = Boolean;
            props.wavecolor = String;
            props.waveopacity = String;
            props.type = {
                type: String,
                default: 'default'
            };
            return props
        }
    }
    return { btn: button };
}
