

function add(d0,d1) {
    for(let k in d1) {
        if(d0.hasOwnProperty(k)) {
        } else {
            d0[k] = undefined
        }
    }
    return(d0)
}


function set(d0,d1) {
    for(let k in d1) {
        if(d0.hasOwnProperty(k)) {
            d0[k] = d1[k]
        } else {
        }
    }
    return(d0)
}

function add_then_set_if_noexist(d0,d1) {
    for(let k in d1) {
        if(d0.hasOwnProperty(k)) {
        } else {
            d0[k] = d1[k]
        }
    }
    return(d0)
}


function set_if_exist_else_add_then_set(d0,d1) {
    for(let k in d1) {
        d0[k] = d1[k]
    }
    return(d0)
}

function set_if_exist_else_add(d0,d1) {
    for(let k in d1) {
        if(d0.hasOwnProperty(k)) {
            d0[k] = d1[k]
        } else {
            d0[k] = undefined
        }
    }
    return(d0)
}


function del_if_exist(d0,d1) {
    for(let k in d1) {
        if(d0.hasOwnProperty(k)) {
            delete d0[k] 
        } else {
        }
    }
    return(d0)
}

function del_if_exist_else_add(d0,d1) {
    for(let k in d1) {
        if(d0.hasOwnProperty(k)) {
            delete d0[k]
        } else {
            d0[k] = undefined
        }
    }
    return(d0)
}


function del_if_exist_else_add_then_set(d0,d1) {
    for(let k in d1) {
        if(d0.hasOwnProperty(k)) {
            delete d0[k]
        } else {
            d0[k] = d1[k]
        }
    }
    return(d0)
}


module.exports = {
    add,
    set,
    add_then_set_if_noexist, 
    set_if_exist_else_add_then_set,
    assign:set_if_exist_else_add_then_set
    set_if_exist_else_add, 
    del_if_exist, 
    del_if_exist_else_add, 
    del_if_exist_else_add_then_set
}

