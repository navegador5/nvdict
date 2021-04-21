const dict_bsc  = require("nv-dict-basic");
const _gen_from_fst = dict_bsc.gen_from_fst;
const _gen_from_lst = dict_bsc.gen_from_lst;


function * gen_from_engine(gf,d,new_val,cond_func,...other_params) {
    let descs = gf(d);
    for(let desc of descs) {
        let {v,k,i} = desc;
        let cond = cond_func(v,k,i,...other_params);
        if(cond) {yield(desc)} else {}
    }
}

function * gen_from_fst(d,new_val,cond_func,...other_params) {
    let g = gen_from_engine(_gen_from_fst,d,new_val,cond_func,...other_params)
    for(let desc of g) {yield(desc)}
}

function * gen_from_lst(d,new_val,cond_func,...other_params) {
    let g = gen_from_engine(_gen_from_lst,d,new_val,cond_func,...other_params)
    for(let desc of g) {yield(desc)}
}


function creat_not_func(cond_func) {
    let f = function(v,k,i,...cond_other_func_params) {
        return(!cond_func(v,k,i,...cond_other_func_params))
    }
    return(f)
}


function all(d,new_val,cond_func,...other_params) {
    let descs = _gen_from_fst(d);
    for(let desc of descs) {
        let {v,k,i} = desc;
        let cond = cond_func(v,k,i,...other_params);
        if(cond) {
            d[desc.k] = new_val;
        } else {}
    }
    return(d)
}

function all_not(d,new_val,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func);
    return(all(d,new_val,cond_func,...other_params))
}


function which_engine(gf,which,d,new_val,cond_func,...other_params) {
    let g = gf(d,new_val,cond_func,...other_params);
    let c = 0
    for(let each of g) {
        if(c===which) {
            d[each.k] = new_val;
            return(d);
        }
        c = c +1
    }
}


function which(d,new_val,index,cond_func,...other_params) {
    return(which_engine(gen_from_fst,index,d,new_val,cond_func,...other_params))
}

function which_not(d,new_val,index,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func);
    return(which_engine(gen_from_fst,index,d,new_val,cond_func,...other_params))
}


function which_from_lst(d,new_val,index,cond_func,...other_params) {
    return(which_engine(gen_from_lst,index,d,new_val,cond_func,...other_params))
}

function which_not_from_lst(d,new_val,index,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func);
    return(which_engine(gen_from_lst,index,d,new_val,cond_func,...other_params))
}


function fst(d,new_val,cond_func,...other_params) {return(which(d,new_val,0,cond_func,...other_params))}

function fst_not(d,new_val,cond_func,...other_params) {return(which_not(d,new_val,0,cond_func,...other_params))}

function lst(d,new_val,cond_func,...other_params) {return(which_from_lst(d,new_val,0,cond_func,...other_params))}

function lst_not(d,new_val,cond_func,...other_params) {return(which_not_from_lst(d,new_val,0,cond_func,...other_params))}


function some_engine(gf,d,new_val,whiches,cond_func,...other_params) {
    let g = gf(arr,cond_func,...other_params)
    let c = 0
    for(let each of g) {
        if(whiches.includes(c)) {
            d[each.k] = new_val;
        }
        c = c + 1
    }
    return(d)
}


function some(d,new_val,whiches,cond_func,...other_params) {
    return(some_engine(gen_from_fst,d,new_val,whiches,cond_func,...other_params))
}

function some_not(d,new_val,whiches,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func)
    return(some_engine(gen_from_fst,d,new_val,whiches,cond_func,...other_params))
}


function some_from_lst(d,new_val,whiches,cond_func,...other_params) {
    return(some_engine(gen_from_lst,d,new_val,whiches,cond_func,...other_params))
}

function some_not_from_lst(d,new_val,whiches,cond_func,...other_params) {
    cond_func = creat_not_func(cond_func)
    return(some_engine(gen_from_lst,d,new_val,whiches,cond_func,...other_params))
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


