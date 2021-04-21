nv-dict-findiv
============
- nv-dict-findiv


install
=======
- npm install nv-dict-findiv

usage
=====

    const dict_findiv = require("nv-dict-findiv")
    //cond_func(v,k,i,...cond_other_func_params)


example
-------

    const dict_findiv = require("nv-dict-findiv")
    var d = {a:1,b:2,c:3,d:4,e:5} 
    > dict_findiv.all(d,r=>r%2)
    [
      { v: 1, i: 0 },
      { v: 3, i: 2 },
      { v: 5, i: 4 }
    ]
    >
    > dict_findiv.all_not(d,r=>r%2)
    [ { v: 2, i: 1 }, { v: 4, i: 3 } ]
    >
    
    > dict_findiv.fst(d,r=>r%2)
    { v: 1, i: 0 }
    > dict_findiv.fst_not(d,r=>r%2)
    { v: 2, i: 1 }
    >
    > dict_findiv.lst(d,r=>r%2)
    { v: 5, i: 4 }
    >
    > dict_findiv.lst_not(d,r=>r%2)
    { v: 4, i: 3 }
    >
    > dict_findiv.some(d,[0,2],r=>r%2)
    [ { v: 1, i: 0 }, { v: 5, i: 4 } ]
    >
    > dict_findiv.some_not(d,[0,2],r=>r%2)
    [ { v: 2, i: 1 } ]
    >
    > dict_findiv.some_from_lst(d,[0,2],r=>r%2)
    [ { v: 5, i: 4 }, { v: 1, i: 0 } ]
    >
    > dict_findiv.some_not_from_lst(d,[0,2],r=>r%2)
    [ { v: 4, i: 3 } ]
    >
    > dict_findiv.which(d,1,r=>r%2)
    { v: 3, i: 2 }
    > dict_findiv.which_not(d,1,r=>r%2)
    { v: 4, i: 3 }
    > dict_findiv.which_from_lst(d,1,r=>r%2)
    { v: 3, i: 2 }
    > dict_findiv.which_not_from_lst(d,1,r=>r%2)
    { v: 2, i: 1 }
    >


API
====

- dict\_findiv.fst(d,cond\_func,...other\_params)
- dict\_findiv.fst\_not(d,cond\_func,...other\_params)
- dict\_findiv.lst(d,cond\_func,...other\_params)
- dict\_findiv.fst\_not(d,cond\_func,...other\_params)
- dict\_findiv.which(d,which,cond\_func,...other\_params)
- dict\_findiv.which\_not(d,which,cond\_func,...other\_params)
- dict\_findiv.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findiv.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findiv.some(d,whiches,cond\_func,...other\_params)
- dict\_findiv.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findiv.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findiv.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findiv.all(d,cond\_func,...other\_params)
- dict\_findiv.all\_not(d,cond\_func,...other\_params)



LICENSE
=======
- ISC

