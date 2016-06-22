import appview from './appview/index';
import aspect from './aspect/index';
import cell from './cell/index';
import checkbox from './checkbox/index';
import flex from './flex/index';
import middle from './middle/index';
import navgation from './navgation/index';
import panel from './panel/index';
import radio from './radio/index';
import toolbar from './toolbar/index';

export default function(miox){
    miox.define(appview(miox.component), true);
    miox.define(aspect(miox.component), true);
    miox.define(cell(miox.component), true);
    miox.define(checkbox(miox.component), true);
    miox.define(flex(miox.component), true);
    miox.define(middle(miox.component), true);
    miox.define(navgation(miox, miox.component), true);
    miox.define(panel(miox.component), true);
    miox.define(radio(miox.component), true);
    miox.define(toolbar(miox.component), true);
}
