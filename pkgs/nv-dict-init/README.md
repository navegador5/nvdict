nv-dict-init
============
- nv-dict-init


install
=======
- npm install nv-dict-init

usage
=====

example
-------

    const dict_bsc = require("nv-dict-init")

    > dict_init.use(100,'a','b','c','d')
    { a: 100, b: 100, c: 100, d: 100 }
    > dict_init.undef('a','b','c','d')
    { a: undefined, b: undefined, c: undefined, d: undefined }
    > dict_init.nul('a','b','c','d')
    { a: null, b: null, c: null, d: null }
    > dict_init.zero('a','b','c','d')
    { a: 0, b: 0, c: 0, d: 0 }
    > dict_init.tru('a','b','c','d')
    { a: true, b: true, c: true, d: true }
    > dict_init.fls('a','b','c','d')
    { a: false, b: false, c: false, d: false }
    > dict_init.empty_str('a','b','c','d')
    { a: '', b: '', c: '', d: '' }
    > dict_init.empty_arr('a','b','c','d')
    { a: [], b: [], c: [], d: [] }
    > dict_init.empty_dict('a','b','c','d')
    { a: {}, b: {}, c: {}, d: {} }
    >


API
====

- dict\_init.use(val,...keys) 
- dict\_init.undef(...keys)
- dict\_init.nul(...keys)
- dict\_init.zero(...keys)
- dict\_init.tru(...keys)
- dict\_init.fls(...keys)
- dict\_init.empty\_str(...keys)
- dict\_init.empty\_arr(...keys)
- dict\_init.empty\_dict(...keys)


LICENSE
=======
- ISC

