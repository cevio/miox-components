import flex from './flex';
import flex_item from './flex-item';

export default function(component){
    return {
        "flex": flex(component),
        "flex-item": flex_item(component)
    }
}
