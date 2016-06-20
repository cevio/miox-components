export default function(Component){
    class Flex extends Component {
        constructor(){
            super();
            this.name = 'flex';
        }

        computed(options){
            options.style = function(){
                return this.flex != undefined ? {
                    boxFlex: this.flex,
                    flex: this.flex
                } : {}
            }

            options.class = function(){
                const classes = [];

                if ( this.direction ){
                    classes.push('mx-flex-direction-' + this.direction);
                }

                if ( this.justify ){
                    classes.push('mx-flex-justify-' + this.justify);
                }

                if ( this.alignItems ){
                    classes.push('mx-flex-align-items-' + this.alignItems);
                }

                if ( this.alignContent ){
                    classes.push('mx-flex-align-content-' + this.alignContent);
                }

                if ( this.wrap ){
                    classes.push('mx-flex-wrap-' + this.wrap);
                }

                return classes.join(' ');
            }

            return options
        }

        template(){
            return `<div class="mx-flex-box" :class="class" :style="style"><slot></slot></div>`;
        }

        props(){
            return {
                flex: String,
                direction: String, // row|column|row-reverse|column-reverse
                justify: String, // start|center|end|between|around
                alignItems: String, // start|center|end|between|around
                alignContent: String, // start|center|end|between|around
                wrap: String // wrap|nowrap|wrap-reverse
            }
        }
    }
    return Flex;
}
