function all(d,val) {
    for(let k in d) {d[k] = val}
    return(d)
}

function some(d,val,...ks) {
    for(let k of ks) {d[k] = val}
    return(d)
}

function some_not(d,val,...ks) {
    for(let k in d) {
        if(!ks.includes(k)){d[k] = val}
    }
    return(d)
}

function filter_map(d,val_map_func,cond_func,...other_args) {
    let entries = Object.entries(d);
    for(let i=0;i<entries.length;i++) {
        let e = entries[i];
        let cond = cond_func(e[1],e[0],i,...other_args)
        if(cond) {
            d[e[0]] = val_map_func(e[1],e[0],i,...other_args)
        }
    }
    return(d)
}

function filter(d,val,cond_func,...other_args) {
    return(filter_map(d,r=>val,cond_func,...other_args));
}

function kfilter(d,val,cond_func,...other_args) {
    let kfunc = function(k,...other_args) {
        return(cond_func(undefined,k,undefined,...other_args))
    }
    return(filter(arr,val,kfunc,...other_args))
}

function vfilter(d,val,cond_func,...other_args) {
    let vfunc = function(v,...other_args) {
        return(cond_func(v,undefined,undefined,...other_args))
    }
    return(filter(arr,val,vfunc,...other_args))
}

function ifilter(d,val,cond_func,...other_args) {
    let ifunc = function(i,...other_args) {
        return(cond_func(undefined,undefined,i,...other_args))
    }
    return(filter(arr,val,ifunc,...other_args))
}


module.exports = {
    all,
    some,
    some_not,
    filter_map,
    filter,
    kfilter,
    vfilter,
    ifilter
}

