const dict_desc = require("nv-dict-desc")


function creat_not_func(cond_func) {
    let f = function(v,k,i,...cond_other_func_params) {
        return(!cond_func(v,k,i,...cond_other_func_params))
    }
    return(f)
}


function *gen_from_fst(d,cond_func,...other_params) {
    let desc = dict_desc.desc(d);
    for(let i=0;i<desc.length;i++) {
        let v = desc[i].val
        let k = desc[i].key
        let index = desc[i].index
        let cond = cond_func(v,k,index,...other_params)
        if(cond) {
            yield({v:v,k:k})
        } else {
        }
    }
}

function *gen_from_lst(d,cond_func,...other_params) {
    let desc = dict_desc.desc(d);
    for(let i=desc.length -1;i>-1;i--) {
        let v = desc[i].val
        let k = desc[i].key
        let index = desc[i].index
        let cond = cond_func(v,k,index,...other_params)
        if(cond) {
            yield({v:v,k:k})
        } else {
        }
    }
}


function all(d,cond_func,...other_params) {
    let g = gen_from_fst(d,cond_func,...other_params)
    return(Array.from(g))
}

function all_not(d,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func)
    return(all(d,cond_func,...other_params))
}


function which_engine(gf,which,d,cond_func,...other_params) {
    let g = gf(d,cond_func,...other_params)
    let c = 0
    for(let each of g) {
        if(c===which) {return(each)}
        c = c +1
    }
}

function which(d,index,cond_func,...other_params) {
    return(which_engine(gen_from_fst,index,d,cond_func,...other_params))
}

function which_from_lst(d,index,cond_func,...other_params) {
    return(which_engine(gen_from_lst,index,d,cond_func,...other_params))
}

function which_not(d,index,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func)
    return(which(d,index,cond_func,...other_params))
}

function which_not_from_lst(d,index,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func)
    return(which_from_lst(d,index,cond_func,...other_params))
}

function fst(d,cond_func,...other_params) {
    return(which(d,0,cond_func,...other_params))
}

function fst_not(d,cond_func,...other_params) {
    return(which_not(d,0,cond_func,...other_params))
}

function lst(d,cond_func,...other_params) {
    return(which_from_lst(d,0,cond_func,...other_params))
}

function lst_not(d,cond_func,...other_params) {
    return(which_not_from_lst(d,0,cond_func,...other_params))
}

function some_engine(gf,d,whiches,cond_func,...other_params) {
    let narr = []
    let g = gf(d,cond_func,...other_params)
    let c = 0
    for(let each of g) {
        if(whiches.includes(c)) {narr.push(each)}
        c = c + 1
    }
    return(narr)
}

function some(d,whiches,cond_func,...other_params) {
    return(some_engine(gen_from_fst,d,whiches,cond_func,...other_params))
}

function some_not(d,whiches,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func)
    return(some_engine(gen_from_fst,d,whiches,cond_func,...other_params))
}


function some_from_lst(d,whiches,cond_func,...other_params) {
    return(some_engine(gen_from_lst,d,whiches,cond_func,...other_params))
}

function some_not_from_lst(d,whiches,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func)
    return(some_engine(gen_from_lst,d,whiches,cond_func,...other_params))
}



module.exports = {
    fst,
    fst_not,
    lst,
    lst_not,
    which,
    which_not,
    which_from_lst,
    which_not_from_lst,
    some,
    some_not,
    some_from_lst,
    some_not_from_lst,
    all,
    all_not
}

