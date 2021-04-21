nv-dict-compare
============
- nv-dict-compare


install
=======
- npm install nv-dict-compare

usage
=====

example
-------

    const dict_cmp = require("nv-dict-compare")
    var d0 = {a:1,b:2,c:3} 
    var d1 = {b:'b',c:'c',d:'d'}
    
    > dict_cmp.samek(d0,d1)
    { b: 'b', c: 3 }
    > dict_cmp.samek(d1,d0)
    { b: 'b', c: 'c' }
    >
    > dict_cmp.samek_diffv(d0,d1)
    { c: 3 }
    > dict_cmp.samek_diffv(d1,d0)
    { c: 'c' }
    >
    > dict_cmp.samekv(d0,d1)
    { b: 'b' }
    > dict_cmp.samekv(d1,d0)
    { b: 'b' }
    >
    
    > dict_cmp.diffk(d0,d1)
    { a: 1 }
    > dict_cmp.diffk(d1,d0)
    { d: 'd' }
    >
    > dict_cmp.diffk_both(d0,d1)
    { a: 1, d: 'd' }
    >
    > dict_cmp.diffk_both(d1,d0)
    { d: 'd', a: 1 }
    >    

API
====

- dict\_cmp.samek(d0,d1)
- dict\_cmp.samek\_engine(cond\_func,d0,d1)
- dict\_cmp.samekv(d0,d1)
- dict\_cmp.samek\_diffv(d0,d1)
- dict\_cmp.diffk(d0,d1)
- dict\_cmp.diffk\_both(d0,d1)


LICENSE
=======
- ISC

