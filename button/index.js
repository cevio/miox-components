export default function(Component) {
    class Btn extends Component {
        constructor() {
            super();
            this.name = 'btn';
        }

        template() {
            return `
                <div class="mx-button">
                </div>
            `
        }

        props() {
            const props = {};
            props.blocked = Boolean;
            props.type = {
                type:String,
                default: 'primary'
            };

            return props
        }
    }
    return { Btn: Btn };
}
