import panel from './panel';
import panel_head from './panel-head';
import panel_body from './panel-body';
import panel_foot from './panel-foot';

export default function(component){
    return {
        "panel": panel(component),
        "panel-head": panel_head(component),
        "panel-body": panel_body(component),
        "panel-foot": panel_foot(component)
    }
}
