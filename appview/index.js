import appview from './appview';
import appview_head from './appview-head';
import appview_body from './appview-body';
import appview_foot from './appview-foot';

export default function(component){
    return {
        "appview": appview(component),
        "appview-head": appview_head(component),
        "appview-body": appview_body(component),
        "appview-foot": appview_foot(component)
    }
}
