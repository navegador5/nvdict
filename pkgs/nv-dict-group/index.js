const {tuple_desc} = require("nv-dict-desc");


const DFLT_VALUE_FUNC = (v,k,i,...func_params) => {return(v)}
const DFLT_KLNGTH_FUNC = (v,k,i,...func_params) => {return(k.length)}
const DFLT_VLNGTH_FUNC = (v,k,i,...func_params) => {return(v.length)}


function fgrp_engine(rtrn_func,d,func,...func_params) {
    let arr = tuple_desc(d);
    let m = new Map()
    let st = new Set()
    arr.forEach(
        (desc) => {
            let rslt = func(...desc,...func_params)
            if(st.has(rslt)) {
                m.get(rslt).push(rtrn_func(...desc))
            } else {
                st.add(rslt)
                m.set(rslt,[rtrn_func(...desc)])
            }
        }
    )
    return(m)
}

function fgrp(d,func,...func_params) {
    return(fgrp_engine((v,k,i)=>({v,k,i}),d,func,...func_params))
}

function vgrp(d,...func_params) {
    return(fgrp_engine((v,k,i)=>({v,k,i}),d,DFLT_VALUE_FUNC,...func_params))
}



function klgrp(d) {
    return(fgrp_engine((v,k,i)=>({v,k,i}),d,DFLT_KLNGTH_FUNC))
}

function vlgrp(d) {
    return(fgrp_engine((v,k,i)=>({v,k,i}),d,DFLT_VLNGTH_FUNC))
}



module.exports = {
    fgrp_engine,
    fgrp,
    vgrp,
    klgrp,
    vlgrp
}
