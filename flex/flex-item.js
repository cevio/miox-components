export default function(Component){
    class Flex_Item extends Component {
        constructor(){
            super();
            this.name = 'flex-item';
        }

        computed(options){
            options.style = function(){
                const cls = {};

                if ( this.flex ){
                    cls.boxFlex = this.flex;
                    cls.flex = this.flex;
                }


                if ( this.order ) {
                    cls.order = this.order;
                }

                return cls;
            }

            options.classes = function(){
                const classes = [];

                if ( this.justify ){
                    classes.push('mx-flex-justify-' + this.justify);
                }

                if ( this.alignSelf ){
                    classes.push('mx-flex-align-self-' + this.alignSelf);
                }

                return classes.join(' ');
            }

            return options
        }

        template(){
            return `<div class="mx-flex-item" :class="classes" :style="style"><slot></slot></div>`;
        }

        props(){
            return ['flex', 'order', 'justify', 'align-self', 'basis'];
        }
    }
    return Flex_Item;
}
