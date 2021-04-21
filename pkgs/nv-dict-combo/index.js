const dict_bsc = require("nv-dict-basic");
const ary_com = require("nv-array-combo");


function get_klist_combos(d) {
    let kl = dict_bsc.klist(d)
    let g = ary_com.comb(kl)
    let tmp = Array.from(g)
    tmp.sort()
    return(tmp)
}

function get_klist_perms(d) {
    let kl = dict_bsc.klist(d)
    let g = ary_com.perm(kl)
    let tmp = Array.from(g)
    tmp.sort()
    return(tmp)
}


function *comb(d) {
    let klcombs = get_klist_combos(d);
    for(let i=0;i<klcombs.length;i++) {
        let kl = klcombs[i]
        let subd = dict_bsc.some(d,...kl);
        yield(subd)
    }
}


function *perm(d) {
    let klperms = get_klist_perms(d);
    for(let i=0;i<klperms.length;i++) {
        let kl = klperms[i]
        let subd = dict_bsc.some(d,...kl);
        yield(subd)
    }
}

function get_all_combs(d) {return(Array.from(comb(d)))}

function get_all_perms(d) {return(Array.from(perm(d)))}



module.exports = {
    get_klist_combos,
    get_klist_perms,
    comb,
    perm,
    get_all_combs,
    get_all_perms,
}
