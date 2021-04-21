const dict_vpop = require("nv-dict-pop-with-value");


function wrap(f) {
    let _f = function(d,...params) {
        f(d,...params);
        return(d)
    }
    Object.defineProperty(_f,f.name,{value:f.name});
    return(_f)
}

function _add_to_mod() {
    for(let name in dict_vpop) {
        if(name !== 'gen_from_fst'  && name !== 'gen_from_lst') {
            let f = dict_vpop[name];
            module.exports[name] = wrap(f)
        }
    }
}

_add_to_mod();
