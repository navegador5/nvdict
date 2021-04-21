nv-dict-swap
============
- nv-dict-swap


install
=======
- npm install nv-dict-swap

usage
=====

example
-------

    const dict_swap = require("nv-dict-swap")
    
    var d = {a:100,b:200,c:300}
    > dict_swap.kswap(d,'a','c')
    { a: 300, b: 200, c: 100 }
    >
    var d = {a:100,b:200,c:100,d:200,e:300}
    > dict_swap.vswap(d,100,200)
    { a: 200, b: 100, c: 100, d: 200, e: 300 }
    >
    
    var d = {a:100,b:200,c:100,d:200,e:300}
    dict_swap.vswap(d,100,200,0,1)
    > dict_swap.vswap(d,100,200,0,1)
    { a: 200, b: 200, c: 100, d: 100, e: 300 }
    >
    

API
====

- dict\_swap.kswap(d,k0,k1)
- dict\_swap.vswap(d,v0,v1,which0=0,which1=0)


LICENSE
=======
- ISC

