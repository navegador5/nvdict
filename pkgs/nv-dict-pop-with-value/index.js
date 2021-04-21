const dict_fpop = require("nv-dict-pop-with-function");

function creat_dflt_cond_func(V) {
    return((v,k,i) =>v===V)
}

function all(d,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_fpop.all(d,cond_func,...other_params))
}

function all_not(d,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_fpop.all_not(d,cond_func,...other_params))
}



function which(d,index,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_fpop.which(d,index,cond_func,...other_params))    
}

function which_not(d,index,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_fpop.which_not(d,index,cond_func,...other_params))
}


function which_from_lst(d,index,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_fpop.which_from_lst(d,index,cond_func,...other_params))
}

function which_not_from_lst(d,index,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_fpop.which_not_from_lst(d,index,cond_func,...other_params))
}


function fst(d,v,...other_params) {return(which(d,0,v,...other_params))}

function fst_not(d,v,...other_params) {return(which_not(d,0,v,...other_params))}

function lst(d,v,...other_params) {return(which_from_lst(d,0,v,...other_params))}

function lst_not(d,v,...other_params) {return(which_not_from_lst(d,0,v,...other_params))}


function some(d,whiches,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_fpop.some(d,whiches,cond_func,...other_params))
}

function some_not(d,whiches,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_fpop.some_not(d,whiches,cond_func,...other_params))
}


function some_from_lst(d,whiches,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_fpop.some_from_lst(d,whiches,cond_func,...other_params))
}

function some_not_from_lst(d,whiches,v,...other_params) {
    let cond_func = creat_dflt_cond_func(v)
    return(dict_fpop.some_not_from_lst(d,whiches,cond_func,...other_params))
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


