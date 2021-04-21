function use(val,...keys) {
    let entries = keys.map(k=>[k,val])
    return(Object.fromEntries(entries))
}

function undef(...keys) {return(use(undefined,...keys))}

function nul(...keys) {return(use(null,...keys))}

function zero(...keys) {return(use(0,...keys))}

function tru(...keys) {return(use(true,...keys))}

function fls(...keys) {return(use(false,...keys))}

function empty_str(...keys) {return(use("",...keys))}

function empty_arr(...keys) {return(use([],...keys))}

function empty_dict(...keys) {return(use({},...keys))}


module.exports = {
    use,
    undef,
    nul,
    zero,
    tru,
    fls,
    empty_str,
    empty_arr,
    empty_dict
}
