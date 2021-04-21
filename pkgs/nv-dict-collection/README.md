nv-dict-collection
============
- nv-dict-collection


install
=======
- npm install nv-dict-collection

usage
=====

example
-------

    const dict_cll = require("nv-dict-collection")
    var d0 = {a:1,b:2,c:3} 
    var d1 = {b:'b',c:'c',d:'d'}
    
    > dict_cll.get_union_klist(d0,d1)
    [ 'a', 'b', 'c', 'd' ]
    >
    > dict_cll.get_inter_klist(d0,d1)
    [ 'b', 'c' ]
    >
    > dict_cll.get_diff_klist(d0,d1)
    [ 'a' ]
    > dict_cll.get_diff_klist(d1,d0)
    [ 'd' ]
    >
    
    > dict_cll.union(d0,d1)
    { a: 1, b: 2, c: 3, d: 'd' }
    >
    > dict_cll.union(d1,d0)
    { d: 'd', b: 'b', c: 'c', a: 1 }
    >
    
    > dict_cll.diff(d0,d1)
    { a: 1 }
    >
    > dict_cll.diff(d1,d0)
    { d: 'd' }
    >
    
    > dict_cll.inter(d0,d1)
    { b: 2, c: 3 }
    >
    > dict_cll.inter(d1,d0)
    { b: 'b', c: 'c' }
    >


API
====

- dict\_cll.get\_union\_klist(d0,d1)
- dict\_cll.get\_diff\_klist(d0,d1)
- dict\_cll.get\_inter\_klist(d0,d1)
- dict\_cll.union(d0,d1)
- dict\_cll.diff(d0,d1)
- dict\_cll.inter(d0,d1)

LICENSE
=======
- ISC

