const ary_opt = require("nv-array-optional");

function * gen_ordered(tem,cfg,with_placeholder=false,placeholder=null) {
    let kl = Object.keys(tem);
    let idxs = kl.map((k,i)=>[k,i]).filter(e=>cfg[e[0]]===true).map(e=>e[1]);
    let g = ary_opt.gen_ordered(kl,idxs,with_placeholder,placeholder);
    if(with_placeholder) {
        for(let ks of g) {
            let st = new Set(ks)
            let nd = {}
            kl.forEach(k=> {
                st.has(k)?(nd[k] = tem[k]):(nd[k]=placeholder)
            });
            yield(nd)
        }
    } else {
        for(let ks of g) {
            let nd = {}
            ks.forEach(k=> {nd[k] = tem[k]});
            yield(nd)
        }
    }
}



module.exports = {
    gen_ordered,
    ordered:(tem,cfg,with_placeholder=false,placeholder=null) => Array.from(gen_ordered(tem,cfg,with_placeholder,placeholder))
}

