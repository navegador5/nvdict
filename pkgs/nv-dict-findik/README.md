nv-dict-findik
============
- nv-dict-findik


install
=======
- npm install nv-dict-findik

usage
=====

    const dict_findik = require("nv-dict-findik")
    //cond_func(v,k,i,...cond_other_func_params)


example
-------

    const dict_findik = require("nv-dict-findik")
    var d = {a:1,b:2,c:3,d:4,e:5} 
    > dict_findik.all(d,r=>r%2)
    [
      { k: 'a', i: 0 },
      { k: 'c', i: 2 },
      { k: 'e', i: 4 }
    ]
    >
    > dict_findik.all_not(d,r=>r%2)
    [ { k: 'b', i: 1 }, { k: 'd', i: 3 } ]
    >
    
    > dict_findik.fst(d,r=>r%2)
    { k: 'a', i: 0 }
    > dict_findik.fst_not(d,r=>r%2)
    { k: 'b', i: 1 }
    >
    > dict_findik.lst(d,r=>r%2)
    { k: 'e', i: 4 }
    >
    > dict_findik.lst_not(d,r=>r%2)
    { k: 'd', i: 3 }
    >
    > dict_findik.some(d,[0,2],r=>r%2)
    [ { k: 'a', i: 0 }, { v: 5, k: 'e', i: 4 } ]
    >
    > dict_findik.some_not(d,[0,2],r=>r%2)
    [ { k: 'b', i: 1 } ]
    >
    > dict_findik.some_from_lst(d,[0,2],r=>r%2)
    [ { k: 'e', i: 4 }, { v: 1, k: 'a', i: 0 } ]
    >
    > dict_findik.some_not_from_lst(d,[0,2],r=>r%2)
    [ { k: 'd', i: 3 } ]
    >
    > dict_findik.which(d,1,r=>r%2)
    { k: 'c', i: 2 }
    > dict_findik.which_not(d,1,r=>r%2)
    { k: 'd', i: 3 }
    > dict_findik.which_from_lst(d,1,r=>r%2)
    { k: 'c', i: 2 }
    > dict_findik.which_not_from_lst(d,1,r=>r%2)
    { k: 'b', i: 1 }
    >


API
====

- dict\_findik.fst(d,cond\_func,...other\_params)
- dict\_findik.fst\_not(d,cond\_func,...other\_params)
- dict\_findik.lst(d,cond\_func,...other\_params)
- dict\_findik.fst\_not(d,cond\_func,...other\_params)
- dict\_findik.which(d,which,cond\_func,...other\_params)
- dict\_findik.which\_not(d,which,cond\_func,...other\_params)
- dict\_findik.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findik.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findik.some(d,whiches,cond\_func,...other\_params)
- dict\_findik.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findik.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findik.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findik.all(d,cond\_func,...other\_params)
- dict\_findik.all\_not(d,cond\_func,...other\_params)



LICENSE
=======
- ISC

