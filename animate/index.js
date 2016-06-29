export default function(Component) {
    class animate extends Component {
        constructor() {
            super();
            this.name = 'animate';
        }

        computed(options){
            options.animateCls = function(){
                if(this.show){
                    return this.in
                }else{
                    return this.out
                }
            }

            return options
        }

        watch(watch){
            watch.show = function(val,oldVal){
                if(!val){
                    setTimeout(() => {
                        this.enddisplay = "none"
                    },1000)
                }else{
                    this.enddisplay = "block";
                }
            }
            return watch
        }



        template() {
            return `
            <div class="mx-animate" :class="animateCls" :style="{'display':enddisplay}" >
                <slot></slot>
            </div>
            `
        }

        props() {
            const props = {};
            props.in = String;
            props.out = String;
            props.show = Boolean;

            return props
        }
    }
    return { animate: animate };
}
