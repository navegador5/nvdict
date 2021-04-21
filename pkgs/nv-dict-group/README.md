nv-dict-group
============
- nv-dict-group 


install
=======
- npm install nv-dict-group 

usage
=====
    
example
-------

    const dict_grp = require("nv-dict-group")

    >     var d = {a:100,b:200,c:100,d:200}
    undefined
    >
    >     dict_grp.vgrp(d)
    Map(2) {
      100 => [ { v: 100, k: 'a', i: 0 }, { v: 100, k: 'c', i: 2 } ],
      200 => [ { v: 200, k: 'b', i: 1 }, { v: 200, k: 'd', i: 3 } ]
    }
    >
    >     var d = {1:6,2:3,3:2,5:1}
    undefined
    >
    >     dict_grp.fgrp(d,(v,k,i)=>v+parseInt(k))
    Map(3) {
      7 => [ { v: 6, k: '1', i: 0 } ],
      5 => [ { v: 3, k: '2', i: 1 }, { v: 2, k: '3', i: 2 } ],
      6 => [ { v: 1, k: '5', i: 3 } ]
    }
    >
     

API
====


- dict\_grp.fgrp(d,fltr\_func)
- dict\_grp.vgrp(d)
- dict\_grp.klgrp(d)
- dict\_grp.vlgrp(d)
- dict\_grp.fgrp\_engine(rtrn\_func,d,fltr\_func)

LICENSE
=======
- ISC 
