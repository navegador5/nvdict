const dict_bsc = require("nv-dict-basic")
const ary_cll = require("nv-array-collection")

function get_union_klist(d0,d1) {
    let kl0 = dict_bsc.klist(d0)
    let kl1 = dict_bsc.klist(d1)
    let kl_union = ary_cll.union(kl0,kl1)
    return(kl_union)
}

function get_diff_klist(d0,d1) {
    let kl0 = dict_bsc.klist(d0);
    let kl1 = dict_bsc.klist(d1);
    let kl_diff01 = ary_cll.diff(kl0,kl1);
    return(kl_diff01)
}

function get_inter_klist(d0,d1) {
    let kl0 = dict_bsc.klist(d0);
    let kl1 = dict_bsc.klist(d1);
    let kl_inter = ary_cll.inter(kl0,kl1)
    return(kl_inter)
}


function union(d0,d1) {
    let kl0 = dict_bsc.klist(d0)
    let kl1 = dict_bsc.klist(d1)
    let kl_diff01 = ary_cll.diff(kl0,kl1)
    let kl_inter = ary_cll.inter(kl0,kl1)
    let kl_diff10 = ary_cll.diff(kl1,kl0)
    let nd = {}
    for(let k of kl_diff01) {nd[k] = d0[k]}
    for(let k of kl_inter) {nd[k] = d0[k]}
    for(let k of kl_diff10) {nd[k] = d1[k]}
    return(nd)
}


function diff(d0,d1) {
    let kl_diff01 = get_diff_klist(d0,d1);
    return(dict_bsc.some(d0,...kl_diff01))
}

function inter(d0,d1) {
    let kl_inter = get_inter_klist(d0,d1)
    return(dict_bsc.some(d0,...kl_inter))
}

module.exports = {
    get_union_klist,
    get_diff_klist,
    get_inter_klist,
    union,
    diff,
    inter
}
