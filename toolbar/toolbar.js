export default function(Component){
    class Toolbar extends Component {
        constructor(){
            super();
            this.name = 'toolbar';
            this.active = null;
        }

        template(){
            return `
                <div class="mx-toolbar"><flex align-items="center" justify="center"><slot></slot></flex></div>
            `
        }

        computed(computed){
            computed.items = function(){
                return this.$getChildrens();
            }
            return computed;
        }

        events(events){
            const that = this;
            events['ask'] = function(bar){
                const items = this.items;
                const old = that.active;
                if ( old !== bar ){
                    that.active = bar;
                    let a = -1, b = -1;
                    bar.$emit('active:on');
                    a = this.inArray(bar, items);
                    if ( old ){
                        old.$emit('active:off');
                        b = this.inArray(old, items);
                    }
                    this.$emit('change', a, b);
                }
            }
            return events;
        }

        methods(methods){
            methods.$getChildrens = function(){
                const childrens = this.$children;
                const result = [];
                for ( let i = 0 ; i < childrens.length ; i++ ){
                    const children = childrens[i];
                    if ( 'toolbar-item' === children.$options.name ) {
                        result.push(children);
                    }
                }
                return result;
            }

            methods.inArray = function(a, b){
                return b.indexOf(a);
            }

            return methods;
        }

        ready(){
            return function(){
                this.$nextTick(() => {
                    const items = this.items;
                    if ( items.length ){
                        items[0].click();
                    }
                });
            }
        }
    }

    return Toolbar
}
