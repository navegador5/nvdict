nv-dict-findikv
============
- nv-dict-findikv


install
=======
- npm install nv-dict-findikv

usage
=====

    const dict_findikv = require("nv-dict-findikv")
    //cond_func(v,k,i,...cond_other_func_params)


example
-------

    const dict_findikv = require("nv-dict-findikv")
    var d = {a:1,b:2,c:3,d:4,e:5} 
    > dict_findikv.all(d,r=>r%2)
    [
      { v: 1, k: 'a', i: 0 },
      { v: 3, k: 'c', i: 2 },
      { v: 5, k: 'e', i: 4 }
    ]
    >
    > dict_findikv.all_not(d,r=>r%2)
    [ { v: 2, k: 'b', i: 1 }, { v: 4, k: 'd', i: 3 } ]
    >
    
    > dict_findikv.fst(d,r=>r%2)
    { v: 1, k: 'a', i: 0 }
    > dict_findikv.fst_not(d,r=>r%2)
    { v: 2, k: 'b', i: 1 }
    >
    > dict_findikv.lst(d,r=>r%2)
    { v: 5, k: 'e', i: 4 }
    >
    > dict_findikv.lst_not(d,r=>r%2)
    { v: 4, k: 'd', i: 3 }
    >
    > dict_findikv.some(d,[0,2],r=>r%2)
    [ { v: 1, k: 'a', i: 0 }, { v: 5, k: 'e', i: 4 } ]
    >
    > dict_findikv.some_not(d,[0,2],r=>r%2)
    [ { v: 2, k: 'b', i: 1 } ]
    >
    > dict_findikv.some_from_lst(d,[0,2],r=>r%2)
    [ { v: 5, k: 'e', i: 4 }, { v: 1, k: 'a', i: 0 } ]
    >
    > dict_findikv.some_not_from_lst(d,[0,2],r=>r%2)
    [ { v: 4, k: 'd', i: 3 } ]
    >
    > dict_findikv.which(d,1,r=>r%2)
    { v: 3, k: 'c', i: 2 }
    > dict_findikv.which_not(d,1,r=>r%2)
    { v: 4, k: 'd', i: 3 }
    > dict_findikv.which_from_lst(d,1,r=>r%2)
    { v: 3, k: 'c', i: 2 }
    > dict_findikv.which_not_from_lst(d,1,r=>r%2)
    { v: 2, k: 'b', i: 1 }
    >


API
====

- dict\_findikv.fst(d,cond\_func,...other\_params)
- dict\_findikv.fst\_not(d,cond\_func,...other\_params)
- dict\_findikv.lst(d,cond\_func,...other\_params)
- dict\_findikv.fst\_not(d,cond\_func,...other\_params)
- dict\_findikv.which(d,which,cond\_func,...other\_params)
- dict\_findikv.which\_not(d,which,cond\_func,...other\_params)
- dict\_findikv.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findikv.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findikv.some(d,whiches,cond\_func,...other\_params)
- dict\_findikv.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findikv.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findikv.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findikv.all(d,cond\_func,...other\_params)
- dict\_findikv.all\_not(d,cond\_func,...other\_params)



LICENSE
=======
- ISC

