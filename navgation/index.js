import navgation from './navgation';
import navgation_item from './navgation-item';

export default function(miox, component){
    return {
        "navgation": navgation(miox, component),
        "navgation-item": navgation_item(miox, component)
    }
}
