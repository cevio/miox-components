
export default function(Component){
    class Radio extends Component {
        constructor(){
            super();
            this.name = 'radio';
        }
        template(){
            return `
            <label class="mx-radio" role="input:radio">
                <input type="radio" :name="name" :value="value" class="mx-radio-input" v-model="data">
                <span :style="{'font-size':size}" @click.stop="radioClick" class="mx-radio-vision"></span>
                <slot><slot>
            </label>`;
        }
        methods(methods){
            methods.radioClick=function(){
                this.data = this.value;
            }

            return methods;
        }

        events(events){
            events['click'] = function(){
                this.radioClick();
            }

            return events;
        }

        props(props, take){
            return ['name', 'value', 'size', 'data'];
        }
    }
    return {
        "radio": Radio
    }
}
