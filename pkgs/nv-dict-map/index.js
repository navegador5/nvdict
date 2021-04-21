const {from_kvlist} = require("nv-dict-basic");
const {expand,shrink} = require("nv-facutil-reparams");
const ary_combo = require("nv-array-combo");

const COMBOS = ["f","v","k","i","o"]
const MAPF_TARGET_PARAMS_DESC = ['v','k','i','...os']
const OUTF_SRC_PARAMS_DESC = ['d','func_arr','func','others_arr','...others']



function _get_mapf_params_desc(arr) {
    let narr = arr.slice(0);
    if(narr[0] === 'f') { narr.shift()}
    if(narr[narr.length-1] !== 'o') {narr.push('...os')} else {narr[narr.length-1]="...os"}
    return(narr)
}


function _get_outf_params_desc(arr) {
    let narr =['d']
    if(arr[0] === 'f') { narr.push('func_arr')} else {narr.push('func')}
    if(arr[arr.length-1] === 'o') {
        narr.push('others_arr')
    } else {
        narr.push('...others')
    }
    return(narr)
}


function _new_desc(arr,suffix) {
    let d = {
        arr,
        name:{
            prefix:arr.join(""),
            suffix:suffix,
        },
        mapf_params_desc:_get_mapf_params_desc(arr),
        outf_params_desc:_get_outf_params_desc(arr)
    }
    return(d)
}

function _creat_descs(combos) {
    let nl = Array.from(ary_combo.comb(combos));
    nl = nl.slice(1);
    let knl = nl.map(r=>_new_desc(r,'mapk'));
    let vnl = nl.map(r=>_new_desc(r,'mapv'));
    let descs = knl.slice(0)
    for(let i=0;i<vnl.length;i++){descs.push(vnl[i])}
    return(descs)
}

let DESCS = _creat_descs(COMBOS)



function _fmt_mapf(src_func,desc) {
    let name = src_func.name;
    let src_params_desc = desc.mapf_params_desc;
    let _f = expand(src_func,src_params_desc,MAPF_TARGET_PARAMS_DESC)
    Object.defineProperty(_f,'name',{value:name})
    return(_f)
}



function _engine(desc,ks,vs,func_arr,func,others_arr,others) {
    let lngth = ks.length;
    others_arr = others_arr??Array(lngth).fill(others);
    func_arr   = func_arr??Array(lngth).fill(func);
    let arr = ks.map((r,i)=>{
        let f = func_arr[i];
        f = _fmt_mapf(f,desc);
        let k = ks[i];
        let v = vs[i];
        let os = others_arr[i]
        return(f(v,k,i,...os))
    });
    let rslt = desc.name.suffix;
    if(rslt==='mapk') {ks = arr;} else {vs = arr;}
    return(from_kvlist(ks,vs))
}

function _creat_outf_tem(desc) {
    function _outf_tem(d,func_arr,func,others_arr,...others) {
        let ks = Object.keys(d);
        let vs = Object.values(d);
        return(_engine(desc,ks,vs,func_arr,func,others_arr,others))
    }
    return(_outf_tem)
}


function _creat_one(desc) {
    let name = desc.name.prefix + '_' + desc.name.suffix;
    let target_params_desc = desc.outf_params_desc;
    let src_func = _creat_outf_tem(desc);
    let _f =  shrink(src_func,OUTF_SRC_PARAMS_DESC,target_params_desc);
    Object.defineProperty(_f,'name',{value:name})
    return(_f)

}


function _add_to_mod() {
    DESCS.forEach(
        desc=> {
            let _f = _creat_one(desc);
            module.exports[_f.name] = _f;
        }
    )    
}



_add_to_mod();
DESCS = null;



