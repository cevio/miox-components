import cells from './cells';
import cell from './cell';
import cell_head from './cell-head';
import cell_body from './cell-body';
import cell_foot from './cell-foot';

export default function(component){
    return {
        "cells": cells(component),
        "cell": cell(component),
        "cell-head": cell_head(component),
        "cell-body": cell_body(component),
        "cell-foot": cell_foot(component)
    }
}
