const dict_desc = require("nv-dict-desc")

function *gen_from_fst(d,v) {
    let desc = dict_desc.desc(d);
    for(let i=0;i<desc.length;i++) {
        let cond = (desc[i].val===v)
        if(cond) {
            yield(desc[i].index)
        } else {
        }
    }
}


function *gen_from_lst(d,v) {
    let desc = dict_desc.desc(d);
    for(let i=desc.length -1;i>-1;i--) {
        let cond = (desc[i].val === v)
        if(cond) {
            yield(desc[i].index)
        } else {
        }
    }
}


function all(d,v) {
    let g = gen_from_fst(d,v)
    return(Array.from(g))
}


function which_engine(gf,d,v,which) {
    let g = gf(d,v)
    let c = 0
    for(let each of g) {
        if(c===which) {return(each)}
        c = c +1
    }
}

function which(d,v,which) {return(which_engine(gen_from_fst,d,v,which))}

function fst(d,v) {return(which(d,v,0))}

function which_from_lst(d,v,which) {return(which_engine(gen_from_lst,d,v,which))}

function lst(d,v) {return(which_from_lst(d,v,0))}

function some_engine(gf,d,v,...whiches) {
    let nd = []
    let g = gf(d,v)
    let c = 0
    for(let each of g) {
        if(whiches.includes(c)) {nd.push(each)}
        c = c + 1
    }
    return(nd)
}

function some(d,v,...whiches) {return(some_engine(gen_from_fst,d,v,...whiches))}

function some_from_lst(d,v,...whiches) {return(some_engine(gen_from_lst,d,v,...whiches))}


module.exports = {
    fst,
    lst,
    which,
    which_from_lst,
    some,
    some_from_lst,
    all
}

