nv-dict-optional
============
- nv-dict-optional


install
=======
- npm install nv-dict-optional

usage
=====

example
-------


    const dict_opt = require("nv-dict-optional")


### ordered


    var tem = {
        a:'A',
        b:'B',
        c:'C',
        d:'D'
    }

    var is_optional = {
        b:true,
        d:true
    }
    var with_placeholder=false;

    var g = gen_ordered(tem,is_optional,with_placeholder)

    /*
    > Array.from(g)
    [
      { a: 'A', c: 'C' },
      { a: 'A', c: 'C', d: 'D' },
      { a: 'A', b: 'B', c: 'C' },
      { a: 'A', b: 'B', c: 'C', d: 'D' }
    ]
    >
    */

    var with_placeholder = true;
    var placeholder = null;
    var g = gen_ordered(tem,is_optional,with_placeholder,placeholder)
    /*
    > Array.from(g)
    [
      { a: 'A', b: null, c: 'C', d: null },
      { a: 'A', b: null, c: 'C', d: 'D' },
      { a: 'A', b: 'B', c: 'C', d: null },
      { a: 'A', b: 'B', c: 'C', d: 'D' }
    ]
    >
    */


API
====

- dict\_opt.gen\_ordered(tem,cfg,with\_placeholder=false,placeholder=null)
- dict\_opt.ordered(tem,cfg,with\_placeholder=false,placeholder=null)


LICENSE
=======
- ISC

