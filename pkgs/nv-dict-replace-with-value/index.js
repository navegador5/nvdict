const dict_frplc = require("nv-dict-replace-with-function");

function creat_dflt_cond_func(V) {
    return((v,k,i) =>v===V)
}

function all(d,new_val,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_frplc.all(d,new_val,cond_func,...other_params))
}

function all_not(d,new_val,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_frplc.all_not(d,new_val,cond_func,...other_params))
}



function which(d,new_val,index,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_frplc.which(d,new_val,index,cond_func,...other_params))    
}

function which_not(d,new_val,index,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_frplc.which_not(d,new_val,index,cond_func,...other_params))
}


function which_from_lst(d,new_val,index,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_frplc.which_from_lst(d,new_val,index,cond_func,...other_params))
}

function which_not_from_lst(d,new_val,index,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_frplc.which_not_from_lst(d,new_val,index,cond_func,...other_params))
}


function fst(d,new_val,v,...other_params) {return(which(d,new_val,0,v,...other_params))}

function fst_not(d,new_val,v,...other_params) {return(which_not(d,new_val,0,v,...other_params))}

function lst(d,new_val,v,...other_params) {return(which_from_lst(d,new_val,0,v,...other_params))}

function lst_not(d,new_val,v,...other_params) {return(which_not_from_lst(d,new_val,0,v,...other_params))}


function some(d,new_val,whiches,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_frplc.some(d,new_val,whiches,cond_func,...other_params))
}

function some_not(d,new_val,whiches,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_frplc.some_not(d,new_val,whiches,cond_func,...other_params))
}


function some_from_lst(d,new_val,whiches,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_frplc.some_from_lst(d,new_val,whiches,cond_func,...other_params))
}

function some_not_from_lst(d,new_val,whiches,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_frplc.some_not_from_lst(d,new_val,whiches,cond_func,...other_params))
}



module.exports = {
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


