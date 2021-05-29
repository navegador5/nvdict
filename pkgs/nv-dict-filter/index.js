function filter(d,f) {
    let ks = Object.keys(d);
    let vs = Object.values(d);
    let nd = {}
    for(let i=0;i<ks.length;i++) {
        let cond = f(vs[i],ks[i],i)
        if(cond) {nd[ks[i]] = vs[i]}
    }
    return(nd)
}


module.exports = {
    filter
}
