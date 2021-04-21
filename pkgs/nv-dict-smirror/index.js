const dict_desc = require("nv-dict-desc")
const {empty} = require("nv-facutil-basic") 

function is_vmirrable(d) {
    let st = new Set();
    for(let k in d) {
        let v = d[k]
        let cond = st.has(v.toString())
        if(cond) {
            return([false,k,v])
        } else {
            st.add(v.toString())
        }
    }
    return([true,empty,empty])
}


function is_kvmirrable(d) {
    let st = new Set();
    for(let k in d) {
        let v = d[k]
        let cond = st.has(v.toString()) || st.has(k.toString())
        if(cond) {
            return([false,k,v])
        } else {
            st.add(k.toString())
            st.add(v.toString())
        }
    }
    return([true,empty,empty])
} 



function vmode_validate(d,key,value) {
    for(let k in d) {
        if(d[k].toString() === v.toString()) {
            return([false,k,v])
        } else {
        }
    }
    return([true,key,value])
}

function kvmode_validate(d,key,value) {
    for(let k in d) {
        let v = d[k]
        if(
            v.toString() === value.toString() || 
            v.toString() ===key.toString() || 
            k.toString()===key.toString() || 
            k.toString() === value.toString()
        ) {
            return([false,k,d[k]])
        } else {

        }
    }
    return([true,key,value])
}



function _vctor(that,d) {
    for(let k in d) {
        let v = d[k]
        that[k] = v
    }
}


function _kvctor(that,d) {
    for(let k in d) {
        let v = d[k]
        that[k] = v
        that[v] = k
    }
}


const SYM_GET_DICT = Symbol('get_dict')

function _vadd_del(Cls) {
    Cls.prototype.kdel = function(k) {
        delete this[k]
        return(delete this[SYM_GET_DICT][k])
    }
    Cls.prototype.vdel = function(v) {
        let k = this.getk(v);
        delete this[k]
        return(delete this[SYM_GET_DICT][k])
    }
}


function _kvadd_del(Cls) {
    Cls.prototype.del = function(o) {
        let maybek = this.getk(o);
        delete this[o];
        delete this[maybek];
        let r0 = delete this[SYM_GET_DICT][o];
        let r1 = delete this[SYM_GET_DICT][maybek];
        return(r0 || r1)
    }
}

function _add(that,key,value,mode,kv_validate) {
    let [cond,k,v] = kv_validate(that[SYM_GET_DICT],key,value);
    if(cond) {
        that[key] = value;
        if(mode === 'kv') {
            that[value]=key;
        }
        that[SYM_GET_DICT][key] = value;
        return(that)
    } else {
        console.log([cond,k,v],"already exist")
        return(empty)
    }
    
}

function _vadd_add(Cls) {
    Cls.prototype.add = function (key,value) {return(_add(this,key,value,'v',vmode_validate))}
}

function _kvadd_add(Cls) {
    Cls.prototype.add = function (key,value) {return(_add(this,key,value,'kv',kvmode_validate))}
}

function _creat_cls(
    name,ctor_validate,
    ctor,kv_validate,
    add_del,add_add
) {
    class _Mdict {
        #dict = {}
        constructor(d) {
            let [cond,k,v] = ctor_validate(d)
            if(cond) {
                this.#dict = d;
                ctor(this,this.#dict)
            } else {
                console.log([cond,k,v],"already exist")
                return(empty)
            }
        }
        get [SYM_GET_DICT]() {return(this.#dict)}
        getv(k) {return(this.#dict[k])}
        getk(v) {
            for(let k in this.#dict) {
                let cond = (this.#dict[k] === v) 
                if(cond) {return(k)} else {}
            }
            return(empty)
        }
        json() {return(JSON.parse(JSON.stringify(this.#dict)))}
        mirror() {return(dict_desc.mirror(this.#dict))}
        mdict() {return(dict_desc.mdict(this.#dict))}
    }
    add_del(_Mdict);
    add_add(_Mdict);
    Object.defineProperty(_Mdict,'name',{value:name});
    return(_Mdict)
}


const VMdict = _creat_cls('VMidct',is_vmirrable,_vctor,vmode_validate,_vadd_del,_vadd_add);
const KVMdict = _creat_cls('KVMidct',is_kvmirrable,_kvctor,kvmode_validate,_kvadd_del,_kvadd_add);


module.exports  = {
    empty,
    is_vmirrable,
    is_kvmirrable,
    vmode_validate,
    kvmode_validate,
    VMdict,
    KVMdict,
}


