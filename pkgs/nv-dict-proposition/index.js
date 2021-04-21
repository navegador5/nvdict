const {ary_bsc} = require("nv-array-basic");

function get_tuple_descs(d) {
    let entries = Object.entries(d);
    let descs = entries.map(
        (e,i) => [e[1],e[0],i] 
    );
    return(descs);
}



function all(d,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    let narr = arr.map(
        (desc)=> cond_func(...desc,...other_params)
    )
    return(narr.every(r=>r))
}

function every(d,cond_func,...other_params) {
    return(all(d,cond_func,...other_params))
}

function all_not(d,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    let narr = arr.map(
        (desc)=> cond_func(...desc,...other_params)
    )
    return(narr.every(r=>r))
}

function every_not(d,cond_func,...other_params) {
    return(all_not(d,cond_func,...other_params))
}

function any(d,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    for(let i=0;i<arr.length;i++) {
        let cond = cond_func(...arr[i],...other_params)
        if(cond) {
            return(true)
        } else {
        }
    }
    return(false)
}


function any_not(d,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    for(let i=0;i<arr.length;i++) {
        let cond = !cond_func(...arr[i],...other_params)
        if(cond) {
            return(true)
        } else {
        }
    }
    return(false)
}

function at_most_several(d,n,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    let c = 0
    for(let i=0;i<arr.length;i++) {
        let cond = cond_func(...arr[i],...other_params)
        if(cond) {
            if(c > n) {
                return(false)
            }
            c = c + 1
        } else {
        }
    }
    return(true)
}

function at_most_several_not(d,n,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    let c = 0
    for(let i=0;i<arr.length;i++) {
        let cond = !cond_func(...arr[i],...other_params)
        if(cond) {
            if(c > n) {
                return(false)
            }
            c = c + 1
        } else {
        }
    }
    return(true)    
}

function several(d,n,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    let c = 0
    for(let i=0;i<arr.length;i++) {
        let cond = cond_func(...arr[i],...other_params)
        if(cond) {
            if(c > n) {
                return(false)
            }
            c = c + 1
        } else {
        }
    }
    return((c===n))
}

function several_not(d,n,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    let c = 0;
    for(let i=0;i<arr.length;i++) {
        let cond = !cond_func(...arr[i],...other_params)
        if(cond) {
            if(c > n) {
                return(false)
            }
            c = c + 1
        } else {
        }
    }
    return((c===n))
}

function at_least_several(d,n,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    let c = 0;
    for(let i=0;i<arr.length;i++) {
        let cond = cond_func(...arr[i],...other_params)
        if(cond) {
            if(c >= n) {
                return(true)
            }
            c = c + 1
        } else {
        }
    }
    return(false)
}

function at_least_several_not(d,n,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    let c = 0
    for(let i=0;i<arr.length;i++) {
        let cond = !cond_func(...arr[i],...other_params)
        if(cond) {
            if(c >= n) {
                return(true)
            }
            c = c + 1
        } else {
        }
    }
    return(false)
}

function which(d,which,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    which = ary_bsc.validate_index(arr,which)
    if(which === undefined) {
        return(undefined)
    } else {
        let cond = cond_func(...arr[which],...other_params)
        return(!!cond)
    }
}

function which_not(d,which,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    which = ary_bsc.validate_index(arr,which)
    if(which === undefined) {
        return(undefined)
    } else {
        let cond = !cond_func(...arr[which],...other_params)
        return(!!cond)
    }
}


function fst(d,cond_func,...other_params) { return(which(d,0,cond_func,...other_params))}

function fst_not(d,cond_func,...other_params) { return(which_not(d,0,cond_func,...other_params))}

function lst(d,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    let index = arr.length - 1
    return(which(d,index,cond_func,...other_params))
}

function lst_not(d,cond_func,...other_params) { 
    let arr = get_tuple_descs(d);
    let index = arr.length - 1
    return(which_not(d,index,cond_func,...other_params))
}


function at_most_some(d,whiches,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    for(let i=0;i<arr.length;i++) {
        let cond = whiches.includes(i)
        if(cond) {
            //在whiches 里面的不做判断 
        } else {
            //不在whiches 里面的必须 not
            if(cond_func(...arr[i],...other_params)) {
                return(false)
            } else {
            }
        }
    }
    return(true)
}


function at_most_some_not(d,whiches,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    for(let i=0;i<arr.length;i++) {
        let cond = whiches.includes(i)
        if(cond) {
            //在whiches 里面的不做判断 
        } else {
            //不在whiches 里面的必须true 
            if(!cond_func(...arr[i],...other_params)) {
                return(false)
            } else {
            }
        }
    }
    return(true)
}

function at_least_some(d,whiches,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    whiches = whiches.map(which=>ary_bsc.validate_index(arr,which))
    if(whiches.includes(undefined)) {
        return(undefined)
    } else {
        //不在whiches 里面的不做判断
        let narr = ary_bsc.some(arr,...whiches)
        return(all(narr,cond_func,...other_params))
    }
}


function at_least_some_not(d,whiches,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    whiches = whiches.map(which=>ary_bsc.validate_index(arr,which))
    if(whiches.includes(undefined)) {
        return(undefined)
    } else {
        //不在whiches 里面的不做判断
        let narr = ary_bsc.some(arr,...whiches)
        return(all_not(narr,cond_func,...other_params))
    }    
}


function some(d,whiches,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    whiches = whiches.map(which=>ary_bsc.validate_index(arr,which))
    if(whiches.includes(undefined)) {
        return(undefined)
    } else {
        for(let i=0;i<arr.length;i++) {
            let cond = whiches.includes(i)
            if(cond) {
                //在whiches 里面的必须true
                if(cond_func(...arr[i],...other_params)) {
                } else {
                    return(false)
                }
            } else {
                //不在whiches 里面的必须false
                if(!cond_func(...arr[i],...other_params)) {
                    
                } else {
                    return(false)
                }
            }
        }
        return(true)
    }
}


function some_not(d,whiches,cond_func,...other_params) {
    let arr = get_tuple_descs(d);
    whiches = whiches.map(which=>ary_bsc.validate_index(arr,which))
    if(whiches.includes(undefined)) {
        return(undefined)
    } else {
        for(let i=0;i<arr.length;i++) {
            let cond = whiches.includes(i)
            if(cond) {
                //在whiches 里面的必须false
                if(!cond_func(...arr[i],...other_params)) {
                } else {
                    return(false)
                }
            } else {
                //不在whiches 里面的必须true
                if(cond_func(...arr[i],...other_params)) {

                } else {
                    return(false)
                }
            }
        }
        return(true)
    }
}



module.exports = {
    get_tuple_descs,
    all,
    all_not,
    every,
    every_not,
    any,
    any_not,
    at_most_several,
    at_most_several_not,
    several,
    several_not,
    at_least_several,
    at_least_several_not,
    fst,
    fst_not,
    which,
    which_not,
    lst,
    lst_not,
    at_most_some,
    at_most_some_not,
    some,
    some_not,
    at_least_some,
    at_least_some_not
}
