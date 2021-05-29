nv-dict-filter
============
- nv-dict-filter


install
=======
- npm install nv-dict-filter

usage
=====

example
-------

    const dict_fltr = require("nv-dict-filter")

    var d = { a: 100, b: 200, c: 100, d: 100 }

    dict_fltr.filter(d,(v,k,i)=>v===100 && i%2===0)


    dict_fltr.filter(d,(v,k,i)=>v===100 && i%2===0)
    { a: 100, c: 100 }

API
====

- dict\_fltr.filter(d,condf=(v,k,i)=>{/.../})


LICENSE
=======
- ISC

