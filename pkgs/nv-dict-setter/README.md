nv-dict-setter
============
- nv-dict-setter


install
=======
- npm install nv-dict-setter

usage
=====

example
-------


    const dict_setter = require("nv-dict-setter")

    var d = {a:1,b:2,c:3}
    > dict_setter.all(d,100)
    { a: 100, b: 100, c: 100 }
    >

    var d = {a:1,b:2,c:3}
    dict_setter.some(d,100,'a','c')
    { a: 100, b: 2, c: 100 }
    >

    var d = {a:1,b:2,c:3}
    dict_setter.some_not(d,100,'a','c')
    { a: 1, b: 100, c: 3 }

    var d = {a:1,b:2,c:3,d:3}
    dict_setter.filter(d,100,(v,k,i)=>(v>2)&&(k!=='d'))
    { a: 1, b: 2, c: 100, d: 3 }

API
====

- dict\_setter.all(d,val) 
- dict\_setter.some(d,val,...ks) 
- dict\_setter.some\_not(d,val,...ks) 
- dict\_setter.filter\_map(d,val\_map\_func,cond\_func,...other\_args) 
- dict\_setter.filter(d,val,cond\_func,...other\_args) 
- dict\_setter.kfilter(d,val,cond\_func,...other\_args) 
- dict\_setter.vfilter(d,val,cond\_func,...other\_args) 
- dict\_setter.ifilter(d,val,cond\_func,...other\_args)


LICENSE
=======
- ISC

