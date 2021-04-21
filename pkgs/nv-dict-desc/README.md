nv-dict-desc
============
- nv-dict-desc


install
=======
- npm install nv-dict-desc

usage
=====

example
-------

    > const dict_desc = require("nv-dict-desc")
    undefined
    >  var d0 = {a:1,b:2,c:3}
    undefined
    > dict_desc.mirror(d0)
    { '1': 'a', '2': 'b', '3': 'c' }
    
    
    
    >
    > dict_desc.mdict(d0)
    { '1': 'a', '2': 'b', '3': 'c', a: 1, b: 2, c: 3 }
    >
    
    var d1 = {a:2,2:2,c:3}
    > dict_desc.mdict(d1)
    { '2': 2, '3': 'c', a: 2, c: 3 }
    >
    > dict_desc.mdict(d1,dict_desc.VFIRST)
    { '2': 'a', '3': 'c', a: 2, c: 3 }
    > dict_desc.mdict(d1,dict_desc.KFIRST)
    { '2': 2, '3': 'c', a: 2, c: 3 }
    >
    
    
    
    > var desc = dict_desc.desc(d0)
    undefined
    > desc
    [
      { index: 0, key: 'a', val: 1 },
      { index: 1, key: 'b', val: 2 },
      { index: 2, key: 'c', val: 3 }
    ]
    >
    > dict_desc.from_desc(desc)
    { a: 1, b: 2, c: 3 }
    > 


API
====

- dict\_desc.copy(d)
- dict\_desc.mirror(d)
- dict\_desc.KFIRST
- dict\_desc.VFIRST
- dict\_desc.mdict(d,pri\_key="k")
- dict\_desc.desc(d)
- dict\_desc.from\_desc(desc)

LICENSE
=======
- ISC

