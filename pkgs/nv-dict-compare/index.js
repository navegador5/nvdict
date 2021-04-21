const dict_bsc = require("nv-dict-basic");
const dict_cll = require("nv-dict-collection");


function samek(d0,d1) {return(dict_cll.inter(d0,d1))}

function samek_engine(cond_func,d0,d1) {
    let kl = dict_cll.get_inter_klist(d0,d1);
    let nd = {}
    for(let i=0;i<kl.length;i++) {
        let k = kl[i];
        let cond = (cond_func(d0[k],d1[k]));
        if(cond) { nd[k] = d0[k]}
    }
    return(nd)

}


function samekv(d0,d1) {
    let cond_func = function(x,y) {return(x===y)}
    return(samek_engine(cond_func,d0,d1))
}

function samek_diffv(d0,d1)  {
    let cond_func = function(x,y) {return(x!==y)}
    return(samek_engine(cond_func,d0,d1))
}

function diffk(d0,d1) {
    let kl01 = dict_cll.get_diff_klist(d0,d1);
    let nd = {}
    for(let i=0;i<kl01.length;i++) {
        let k = kl01[i];
        nd[k] = d0[k];
    }
    return(nd)
}



function diffk_both(d0,d1) {
    let nd = diffk(d0,d1)
    let nd1 = diffk(d1,d0)
    dict_bsc.update(nd,nd1)
    return(nd)
}




module.exports = {
    samek,
    samek_engine,
    samekv,
    samek_diffv,
    diffk,
    diffk_both
}
