import toolbar from './toolbar';
import toolbar_item from './toolbar-item';

export default function(component){
    return {
        "toolbar": toolbar(component),
        "toolbar-item": toolbar_item(component)
    }
}
