const dict_keyof = require("nv-dict-key-of");

function kswap(d,k0,k1) {
    let v0 = d[k0]
    d[k0] = d[k1]
    d[k1] = v0
    return(d)
}

function vswap(d,v0,v1,which0=0,which1=0) {
    let k0 = dict_keyof.which(d,v0,which0)
    let k1 = dict_keyof.which(d,v1,which1)
    d[k0] = v1
    d[k1] = v0
    return(d)
}



module.exports = {
    kswap,
    vswap,
}
