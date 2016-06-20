export default function(Component){
    class Middle extends Component {
        constructor(){
            super();
            this.name = 'middle';
        }
        computed(options){
            options.class = function(){
                const cls = [];
                if ( this.align ){
                    cls.push('mx-text-' + this.align);
                }
                return cls.join(' ');
            }
            return options;
        }

        template(){
            return `<div class="mx-middle-outter" role="middle" :style="{'height':height}" :class="class"><div class="mx-middle-inner"><slot></slot></div></div>`;
        }

        props(props, take){
            return ['height', 'align'];
        }
    }
    return {
        "middle": Middle
    }
}
