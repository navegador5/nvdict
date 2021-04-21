const dict_bsc  = require("nv-dict-basic");
const _gen_from_fst = dict_bsc.gen_from_fst;
const _gen_from_lst = dict_bsc.gen_from_lst;


function * gen_from_engine(gf,d,cond_func,...other_params) {
    let descs = gf(d);
    for(let desc of descs) {
        let {v,k,i} = desc;
        let cond = cond_func(v,k,i,...other_params);
        if(cond) {yield(desc)} else {}
    }
}

function * gen_from_fst(d,cond_func,...other_params) {
    let g = gen_from_engine(_gen_from_fst,d,cond_func,...other_params)
    for(let desc of g) {yield(desc)}
}

function * gen_from_lst(d,cond_func,...other_params) {
    let g = gen_from_engine(_gen_from_lst,d,cond_func,...other_params)
    for(let desc of g) {yield(desc)}
}


function creat_not_func(cond_func) {
    let f = function(v,k,i,...cond_other_func_params) {
        return(!cond_func(v,k,i,...cond_other_func_params))
    }
    return(f)
}


function all(d,cond_func,...other_params) {
    let descs = _gen_from_fst(d);
    let nd = {}
    for(let desc of descs) {
        let {v,k,i} = desc;
        let cond = cond_func(v,k,i,...other_params);
        if(cond) {
            nd[k] = v;
            delete d[k]
        } else {}
    }
    return(nd)
}

function all_not(d,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func);
    return(all(d,cond_func,...other_params))
}


function which_engine(gf,which,d,cond_func,...other_params) {
    let g = gf(d,cond_func,...other_params);
    let c = 0
    let nd = {}
    for(let each of g) {
        if(c===which) {
            nd[each.k] = each.v
            delete d[each.k]
            return(nd)
        }
        c = c +1
    }
}


function which(d,index,cond_func,...other_params) {
    return(which_engine(gen_from_fst,index,d,cond_func,...other_params))
}

function which_not(d,index,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func);
    return(which_engine(gen_from_fst,index,d,cond_func,...other_params))
}


function which_from_lst(d,index,cond_func,...other_params) {
    return(which_engine(gen_from_lst,index,d,cond_func,...other_params))
}

function which_not_from_lst(d,index,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func);
    return(which_engine(gen_from_lst,index,d,cond_func,...other_params))
}


function fst(d,cond_func,...other_params) {return(which(d,0,cond_func,...other_params))}

function fst_not(d,cond_func,...other_params) {return(which_not(d,0,cond_func,...other_params))}

function lst(d,cond_func,...other_params) {return(which_from_lst(d,0,cond_func,...other_params))}

function lst_not(d,cond_func,...other_params) {return(which_not_from_lst(d,0,cond_func,...other_params))}


function some_engine(gf,d,whiches,cond_func,...other_params) {
    let nd = {}
    let g = gf(arr,cond_func,...other_params)
    let c = 0
    for(let each of g) {
        if(whiches.includes(c)) {
            nd[each.k] = each.v;
            delete d[each.k]
        }
        c = c + 1
    }
    return(nd)
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
    gen_from_fst,
    gen_from_lst,
    all,
    all_not,
    which,
    which_not,
    which_from_lst,
    which_not_from_lst,
    fst,
    fst_not,
    lst,
    lst_not,
    some,
    some_not,
    some_from_lst,
    some_not_from_lst
}


