const DFLT_KSORT_FUNC = (a,b)=>{
    if(a>b) {return(1)}
    if(a===b) {return(0)}
    if(a<b) {return(-1)}
}

const DFLT_VSORT_FUNC = (a,b)=>(a[1] - b[1])

function sort(d,f=DFLT_KSORT_FUNC) {
    let entries = Object.entries(d);
    entries = entries.map((e,i)=>[e[0],e[1],i])
    entries.sort(f);
    entries = entries.map(e=>[e[0],e[1]])
    return(Object.fromEntries(entries))
}

function ksort(d) {return(sort(d,DFLT_KSORT_FUNC))}
function vsort(d) {return(sort(d,DFLT_VSORT_FUNC))}

function reverse(d) {
    let entries = Object.entries(d);
    entries.reverse();
    return(Object.fromEntries(entries))
}


module.exports = {
    DFLT_KSORT_FUNC,
    DFLT_VSORT_FUNC,
    sort,
    ksort,
    vsort,
    reverse,
}
