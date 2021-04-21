nv-dict-combo
============
- nv-dict-combo


install
=======
- npm install nv-dict-combo

usage
=====

example
-------

    const dict_com = require("nv-dict-combo")
    var d0 = {a:1,b:2,c:3} 
    > dict_com.get_klist_combos(d)
    [
      [],
      [ 'a' ],
      [ 'a', 'b' ],
      [ 'a', 'b', 'c' ],
      [ 'a', 'c' ],
      [ 'b' ],
      [ 'b', 'c' ],
      [ 'c' ]
    ]
    >
    
    > dict_com.get_all_combs(d)
    [
      {},
      { a: 1 },
      { a: 1, b: 2 },
      { a: 1, b: 2, c: 3 },
      { a: 1, c: 3 },
      { b: 2 },
      { b: 2, c: 3 },
      { c: 3 }
    ]
    >
    
    > var g = dict_com.comb(d)
    undefined
    > g.next()
    { value: {}, done: false }
    > g.next().value
    { a: 1 }
    > g.next().value
    { a: 1, b: 2 }
    > g.next().value
    { a: 1, b: 2, c: 3 }
    > g.next().value
    { a: 1, c: 3 }
    > g.next().value
    { b: 2 }
    > g.next().value
    { b: 2, c: 3 }
    > g.next().value
    { c: 3 }
    > g.next().value
    undefined
    >    


API
====

- dict\_com.get\_klist\_combos(d)
- dict\_com.get\_klist\_perms(d)
- dict\_com.comb(d)
- dict\_com.perm(d)
- dict\_com.get\_all\_combs(d)
- dict\_com.get\_all\_perms(d)


LICENSE
=======
- ISC

