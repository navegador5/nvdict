const ary_oper = require("nv-array-oper");

const __ME = {}

for(let fn in ary_oper) {
    __ME[fn] = function (d) {
        let vals = Object.values(d);
        return(ary_oper[fn](vals))
    }
}


module.exports = __ME
