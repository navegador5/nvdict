nv-dict-smirror
================

- nv-dict-smirror
- value can only be number-or-string
- normally useless
- only used for error msg:code   or   state:state-code  configuration

install
=======
- npm install nv-dict-smirror

usage
=====

example
-------

    > const dict_smirror = require("nv-dict-smirror")


    const {VMdict,KVMdict} = require("dict_smirror")

    var md = new KVMdict({a:100,b:200,c:300})
    /*
    >KVMidct { '100': 'a', '200': 'b', '300': 'c', a: 100, b: 200, c: 300 }

    > md.getk(100)
    'a'
    > md.getk(200)
    'b'
    > md.getk(300)
    'c'
    > md.getv('a')
    100
    > md.getv('b')
    200
    > md.getv('c')
    300
    > md.a
    100
    > md.b
    200
    > md.c
    300
    >
    > md.del(100)
    true
    > md
    KVMidct { '200': 'b', '300': 'c', b: 200, c: 300 }
    >
    > md.add('b',400)
    [ false, 'b', 200 ] already exist
    Symbol(empty)
    > md.add(400,'b')
    [ false, 'b', 200 ] already exist
    Symbol(empty)
    >
    > md.add('d',200)
    [ false, 'b', 200 ] already exist
    Symbol(empty)
    > md.add(200,'d')
    [ false, 'b', 200 ] already exist
    Symbol(empty)
    >


    */

API
====

- dict\_smirr.VMdict
- dict\_smirr.KVMdict
- dict\_smirr.is\_vmirrable(d)
- dict\_smirr.is\_kvmirrable(d)
- dict\_smirr.vmode\_validate(d,key,value)
- dict\_smirr.kvmode\_validate(d,key,value)



LICENSE
=======
- ISC

