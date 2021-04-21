nv-dict-key-of
============
- nv-dict-key-of


install
=======
- npm install nv-dict-key-of

usage
=====

example
-------

    const dict_keyof = require("nv-dict-key-of")
    var d = {a:1,b:2,c:3,d:2,e:2}
    >     dict_keyof.all(d,2)
    [ 'b', 'd', 'e' ]
    >     dict_keyof.fst(d,2)
    'b'
    >     dict_keyof.lst(d,2)
    'e'
    >     dict_keyof.which(d,2,0)
    'b'
    >     dict_keyof.which_from_lst(d,2,0)
    'e'
    >     dict_keyof.some(d,2,1,2)
    [ 'd', 'e' ]
    >     dict_keyof.some_from_lst(d,2,1,2)
    [ 'd', 'b' ]
    >

API
====

- dict\_keyof.fst(d,value)
- dict\_keyof.lst(d,value)
- dict\_keyof.which(d,value,which)
- dict\_keyof.which\_from\_lst(d,value,which)
- dict\_keyof.some(d,value,...whiches)
- dict\_keyof.some\_from\_lst(d,value,...whiches)
- dict\_keyof.all(d,value)

LICENSE
=======
- ISC

