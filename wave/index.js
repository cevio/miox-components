export default function(Component) {
    class wave extends Component {
        constructor() {
            super();
            this.name = 'wave';
        }


        template() {
            return `
            <div class="mx-wave"  @click="waveClick" :class="{'blocked':blocked}" :style="{'borderRadius':radius}">
                <slot></slot>
                <div  class="mx-wave-cover" @animationEnd="waveEnd" :class="{'mx-wave-waving':waving}"
                :style={'left':waveStartX,'backgroundColor':color,'opacity':opacity,'animationDutarion':duration}></div>
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
            methods.waveClick=function(e){
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

            props.color = String;
            props.opacity = String;
            props.duration = String;
            props.blocked = Boolean;
            props.radius = String;

            return props
        }
    }
    return { wave: wave };
}
