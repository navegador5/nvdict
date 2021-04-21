nv-dict-index-of
============
- nv-dict-index-of


install
=======
- npm install nv-dict-index-of

usage
=====

example
-------

    const dict_indexof = require("nv-dict-index-of")
    var d = {a:1,b:2,c:3,d:2,e:2}
    > dict_indexof.all(d,2)
    [ 1, 3, 4 ]
    > dict_indexof.fst(d,2)
    1
    > dict_indexof.lst(d,2)
    4
    > dict_indexof.which(d,2,0)
    1
    > dict_indexof.which_from_lst(d,2,0)
    4
    >
    > dict_indexof.some(d,2,1,2)
    [ 3, 4 ]
    > dict_indexof.some_from_lst(d,2,1,2)
    [ 3, 1 ]


API
====

- dict\_indexof.fst(d,value)
- dict\_indexof.lst(d,value)
- dict\_indexof.which(d,value,which)
- dict\_indexof.which\_from\_lst(d,value,which)
- dict\_indexof.some(d,value,...whiches)
- dict\_indexof.some\_from\_lst(d,value,...whiches)
- dict\_indexof.all(d,value)

LICENSE
=======
- ISC

