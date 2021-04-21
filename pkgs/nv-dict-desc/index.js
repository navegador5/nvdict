const KFIRST = "k"
const VFIRST = "v"

function copy(d) {
    return(Object.fromEntries(Object.entries(d)))
}
 
function mirror(d) {
    let entries = Object.entries(d)
    entries = entries.map(e=>[e[1],e[0]])
    return(Object.fromEntries(entries))
}

function mdict(d,pri_key="k") {
    let d0 = copy(d)
    let d1 = mirror(d)
    if(pri_key==='k'){
        return(Object.assign(d1,d0))
    } else {
        return(Object.assign(d0,d1))
    }
}

function desc(d) {
    let entries = Object.entries(d)
    entries = entries.map(
        (e,i)=>({
            index:i,
            key:e[0],
            val:e[1]
        })
    )
    return(entries)
}

function from_desc(desc) {
    let nd = {}
    desc.sort((a,b)=>a.index-b.index)
    for(let i=0;i<desc.length;i++) {
        nd[desc[i]["key"]] = desc[i]["val"]
    }
    return(nd)
}

function brief_desc(d) {
    let entries = Object.entries(d)
    entries = entries.map(
        (e,i)=>({
            v:e[1],
            k:e[0],
            i:i
        })
    )
    return(entries)
}

function from_brief_desc(desc) {
    let nd = {}
    desc.sort((a,b)=>a.index-b.index)
    for(let i=0;i<desc.length;i++) {
        nd[desc[i]["k"]] = desc[i]["v"]
    }
    return(nd)
}

function tuple_desc(d) {
    let entries = Object.entries(d)
    entries = entries.map(
        (e,i)=>[e[1],e[0],i]
    )
    return(entries)
}

function from_tuple_desc(desc) {
    let nd = {}
    for(let i=0;i<desc.length;i++) {
        nd[desc[i][1]] = desc[i][0]
    }
    return(nd)
}


const K = Symbol('key');
const V = Symbol('value');
const I = Symbol('index');

module.exports = {
    DESC_PTRN: {index:I,key:K,val:V},
    BRIEF_DESC_PTRN: {v:V,k:K,i:I},
    TUPLE_DESC_PTRN: [V,K,I],
    KFIRST,
    VFIRST,
    copy,
    mirror,
    mdict,
    desc,
    from_desc,
    brief_desc,
    from_brief_desc,
    tuple_desc,
    from_tuple_desc
}
