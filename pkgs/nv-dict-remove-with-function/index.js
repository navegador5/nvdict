const dict_fpop = require("nv-dict-pop-with-function");


function wrap(f) {
    let _f = function(d,...params) {
        f(d,...params);
        return(d)
    }
    Object.defineProperty(_f,f.name,{value:f.name});
    return(_f)
}

function _add_to_mod() {
    for(let name in dict_fpop) {
        if(name !== 'gen_from_fst'  && name !== 'gen_from_lst') {
            let f = dict_fpop[name];
            module.exports[name] = wrap(f)
        }
    }
}

_add_to_mod();
