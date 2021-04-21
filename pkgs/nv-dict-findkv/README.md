nv-dict-findkv
============
- nv-dict-findkv


install
=======
- npm install nv-dict-findkv

usage
=====

    const dict_findkv = require("nv-dict-findkv")
    //cond_func(v,k,i,...cond_other_func_params)


example
-------

    const dict_findkv = require("nv-dict-findkv")
    var d = {a:1,b:2,c:3,d:4,e:5} 
    > dict_findkv.all(d,r=>r%2)
    [
      { v: 1, k: 'a'},
      { v: 3, k: 'c'},
      { v: 5, k: 'e'}
    ]
    >
    > dict_findkv.all_not(d,r=>r%2)
    [ { v: 2, k: 'b'}, { v: 4, k: 'd'} ]
    >
    
    > dict_findkv.fst(d,r=>r%2)
    { v: 1, k: 'a'}
    > dict_findkv.fst_not(d,r=>r%2)
    { v: 2, k: 'b'}
    >
    > dict_findkv.lst(d,r=>r%2)
    { v: 5, k: 'e'}
    >
    > dict_findkv.lst_not(d,r=>r%2)
    { v: 4, k: 'd'}
    >
    > dict_findkv.some(d,[0,2],r=>r%2)
    [ { v: 1, k: 'a'}, { v: 5, k: 'e'} ]
    >
    > dict_findkv.some_not(d,[0,2],r=>r%2)
    [ { v: 2, k: 'b'} ]
    >
    > dict_findkv.some_from_lst(d,[0,2],r=>r%2)
    [ { v: 5, k: 'e'}, { v: 1, k: 'a'} ]
    >
    > dict_findkv.some_not_from_lst(d,[0,2],r=>r%2)
    [ { v: 4, k: 'd'} ]
    >
    > dict_findkv.which(d,1,r=>r%2)
    { v: 3, k: 'c'}
    > dict_findkv.which_not(d,1,r=>r%2)
    { v: 4, k: 'd'}
    > dict_findkv.which_from_lst(d,1,r=>r%2)
    { v: 3, k: 'c'}
    > dict_findkv.which_not_from_lst(d,1,r=>r%2)
    { v: 2, k: 'b'}
    >


API
====

- dict\_findkv.fst(d,cond\_func,...other\_params)
- dict\_findkv.fst\_not(d,cond\_func,...other\_params)
- dict\_findkv.lst(d,cond\_func,...other\_params)
- dict\_findkv.fst\_not(d,cond\_func,...other\_params)
- dict\_findkv.which(d,which,cond\_func,...other\_params)
- dict\_findkv.which\_not(d,which,cond\_func,...other\_params)
- dict\_findkv.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findkv.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findkv.some(d,whiches,cond\_func,...other\_params)
- dict\_findkv.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findkv.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findkv.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findkv.all(d,cond\_func,...other\_params)
- dict\_findkv.all\_not(d,cond\_func,...other\_params)



LICENSE
=======
- ISC

