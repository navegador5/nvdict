function rm_engine(d,cond_func,...keys) {
    let ks = Object.keys(d);
    for(let k of ks){
        let cond = cond_func(keys,k)
        if(cond) {
            delete d[k]
        } else {
        }
    }
    return(d)    
}


function clear(d) {
    let keys = Object.keys(d);
    let cond_func = function(keys,k) {return(true)}
    return(rm_engine(d,cond_func,...keys));
}

function rm(d,...keys) {
    let cond_func = function(keys,k) {
        return(keys.includes(k))
    }
    return(rm_engine(d,cond_func,...keys));
}


function rm_not(d,...keys) {
    let cond_func = function(keys,k) {
        return(!keys.includes(k))
    }
    return(rm_engine(d,cond_func,...keys));
}



function kvlist(d) {
    let entries = Object.entries(d)
    let kl = entries.map(r=>r[0]);
    let vl = entries.map(r=>r[1]);
    return([kl,vl])
}

function from_kvlist(kl,vl) {
    let entries = kl.map((k,i)=>[k,vl[i]])
    return(Object.fromEntries(entries))
}


function klist_engine(d,cond_func,...keys) {
    let kl = Object.keys(d);
    if(keys.length === 0) {
        keys =  kl;
    }
    kl = kl.filter(k=>cond_func(keys,k));
    return(kl);
}

function klist(d,...keys) {
    let cond_func = function(keys,k) {
        return(keys.includes(k))
    }
    return(klist_engine(d,cond_func,...keys))
}


function klist_not(d,...keys) {
    let cond_func = function(keys,k) {
        return(!keys.includes(k))
    }
    return(klist_engine(d,cond_func,...keys))
}



function vlist_engine(d,cond_func,...keys) {
    if(keys.length === 0) {
        keys =  Object.keys(d);
    }
    let entries = Object.entries(d)
    entries = entries.filter(r=>cond_func(keys,r[0]));
    let vl = entries.map(r=>r[1]);
    return(vl);
}


function vlist(d,...keys) {
    let cond_func = function(keys,k) {
        return(keys.includes(k))
    }
    return(vlist_engine(d,cond_func,...keys));
}

function vlist_not(d,...keys) {
    let cond_func = function(keys,k) {
        return(!keys.includes(k))
    }
    return(vlist_engine(d,cond_func,...keys));
}

function some_engine(d,cond_func,...keys) {
    let nd = {}
    let ks = Object.keys(d);
    for(let i=0;i<ks.length;i++) {
        let k = ks[i];
        let cond = cond_func(keys,k);
        if(cond){
            nd[k] = d[k]
        }
    }
    return(nd)
}


function some(d,...keys) {
    let cond_func = function(keys,k) {
        return(keys.includes(k))
    }
    return(some_engine(d,cond_func,...keys));
}

function some_not(d,...keys) {
    let cond_func = function(keys,k) {
        return(!keys.includes(k))
    }
    return(some_engine(d,cond_func,...keys));
}



function update(d0,d1) {
    Object.assign(d0,d1);
    return(d0);
}


function update_engine(cond_func,d0,d1) {
    let ks0 = Object.keys(d0);
    let ks1 = Object.keys(d1);
    for(let i=0;i<ks1.length;i++) {
        let k = ks1[i];
        let cond = cond_func(ks0,k);
        if(cond){
            d0[k] = d1[k]
        }
    }
    return(d0)
}

function update_only_exist_in_own(d0,d1) {
    let cond_func = function(ks,k) {
        return(ks.includes(k))
    }
    return(update_engine(cond_func,d0,d1))
}


function update_only_non_exist_in_own(d0,d1) {
    let cond_func = function(ks,k) {
        return(!ks.includes(k))
    }
    return(update_engine(cond_func,d0,d1))
}


function length(d) {
    let ks = Object.keys(d);
    return(ks.length);
}


function eq(d0,d1) {
    let ks0 = Object.keys(d0);
    let ks1 = Object.keys(d1);
    ks0.sort();
    ks1.sort();
    let cond = (JSON.stringify(ks0) === JSON.stringify(ks1))
    if(cond) {
        for(let i=0;i<ks0.length;i++) {
            if(d0[ks0[i]] === d1[ks1[i]]){} else {return(false)}
        }
        return(true)
    } else {
        return(false)
    }
}

////

function cp(d){
    let nd = {};
    Object.assign(nd,d);
    return(nd);
}


function to_map(d) {
    let mp = new Map();
    for(let k in d) {
        mp.set(k,d[k])
    }
    return(mp);
}


function to_wmap(d) {
    let wmp = new WeakMap();
    for(let k in d) {   
        wmp.set(d[k],k)
    }
    return(wmp)
}


function kincludes(d,k){return(Object.keys(d).includes(k))}
function vincludes(d,v){return(Object.values(d).includes(v))}
function kvincludes(d,k,v) {
    let entries = Object.entries(d)
    for(let e of entries) {
        if(e[0]===k && e[1]===v) {return(true)}
    }
    return(false)
}

function kvi_includes(d,k,v,i) {
    let entries = Object.entries(d)
    let e = entries[i]
    if(e[0]===k && e[1]===v) {return(true)}
    return(false)    
}

////

function *gen_from_fst(d) {
    let entries = Object.entries(d);
    for(let i=0;i<entries.length;i++) {
        yield({k:entries[i][0],v:entries[i][1],i:i})
    }
}

function *gen_from_lst(d) {
    let entries = Object.entries(d);
    for(let i=entries.length-1;i>-1;i--) {
        yield({k:entries[i][0],v:entries[i][1],i:i})
    }
}


function _re_engine(ks,vs) {
    let vlngth = vs.length;
    let klngth = ks.length;
    if(klngth<=vlngth) {
        vs = vs.slice(0,klngth)
    } else {
        ks = ks.slice(0,vlngth)
    }
    let entries = ks.map((k,i)=>[k,vs[i]])
    return(Object.fromEntries(entries))
}


function rekey(d,...ks) {
    let vs = Object.values(d);
    return(_re_engine(ks,vs))
}

function reval(d,...vs) {
    let ks = Object.keys(d);
    return(_re_engine(ks,vs))
}


function krekey(d,ok,nk) {
    if(d.hasOwnProperty(ok)) {
       let v = d[ok];
       delete d[ok];
       d[nk] = v
    } else {
    }
    return(d)
}

function vrekey(d,v,nk) {
    for(let ok in d) {
        if(d[ok]===v) {
            delete d[ok];
            d[nk] =v;
            break
        }
    }
    return(d)
}

function getset(d,k,v) {
    if(d.hasOwnProperty(k)) {
        d[k] =v
    } else{
        d[k] = undefined
    }
    return(d)
}

function setnx(d,k,v) {
    if(!d.hasOwnProperty(ok)) {
        d[k] =v
    } else{}
    return(d)
}

function mset(d,...kvs) {
    for(let i =0;i<kvs.length;i=i+2) {
        d[kvs[i]] = kvs[i+1]
    }
    return(d)
}

function msetnx(d,...kvs) {
    let cond =true;
    for(let i =0;i<kvs.length;i=i+2) {
       if(d.hasOwnProperty(kvs[i])) {
           cond = false;
           break;
       }
    }
    if(cond) {mset(d,...kvs)}
    return(d)
}


module.exports = {
    clear,
    rm,
    rm_not,
    ////
    kvlist,
    from_kvlist,
    ////
    klist,
    klist_not,
    ////
    vlist,
    vlist_not,
    ////
    some,
    some_not,
    ////
    update,
    update_only_exist_in_own,
    update_only_non_exist_in_own,
    ////
    length,
    eq,
    ////
    kincludes,
    vincludes,
    kvincludes,
    kvi_includes,
    ////
    cp,
    to_map,
    to_wmap,
    ////
    gen_from_fst,
    gen_from_lst,
    ////
    rekey,
    reval,
    ////
    krekey,
    vrekey,
    getset,
    setnx,
    mset,
    msetnx,
}
