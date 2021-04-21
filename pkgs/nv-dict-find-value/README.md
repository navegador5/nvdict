nv-dict-find-value
==================
- nv-dict-find-value


install
=======
- npm install nv-dict-find-value

usage
=====

    const dict_findv = require("nv-dict-find-value")
    //cond_func(v,k,i,...cond_other_func_params)


example
-------

    const dict_findv = require("nv-dict-find-value")
    var d = {a:1,b:2,c:3,d:4,e:5} 
    > dict_findv.all(d,r=>r%2)
    [1,3,5]
    >
    > dict_findv.all_not(d,r=>r%2)
    [ 2,4 ]
    >
    
    > dict_findv.fst(d,r=>r%2)
    1
    > dict_findv.fst_not(d,r=>r%2)
    2
    >
    > dict_findv.lst(d,r=>r%2)
    5
    >
    > dict_findv.lst_not(d,r=>r%2)
    4
    >
    > dict_findv.some(d,[0,2],r=>r%2)
    [ 1,5 ]
    >
    > dict_findv.some_not(d,[0,2],r=>r%2)
    [ 2 ]
    >
    > dict_findv.some_from_lst(d,[0,2],r=>r%2)
    [ 5,1 ]
    >
    > dict_findv.some_not_from_lst(d,[0,2],r=>r%2)
    [ 4 ]
    >
    > dict_findv.which(d,1,r=>r%2)
    { 3 }
    > dict_findv.which_not(d,1,r=>r%2)
    { 4 }
    > dict_findv.which_from_lst(d,1,r=>r%2)
    { 3 }
    > dict_findv.which_not_from_lst(d,1,r=>r%2)
    { 2 }
    >


API
====

- dict\_findv.fst(d,cond\_func,...other\_params)
- dict\_findv.fst\_not(d,cond\_func,...other\_params)
- dict\_findv.lst(d,cond\_func,...other\_params)
- dict\_findv.fst\_not(d,cond\_func,...other\_params)
- dict\_findv.which(d,which,cond\_func,...other\_params)
- dict\_findv.which\_not(d,which,cond\_func,...other\_params)
- dict\_findv.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findv.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findv.some(d,whiches,cond\_func,...other\_params)
- dict\_findv.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findv.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findv.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findv.all(d,cond\_func,...other\_params)
- dict\_findv.all\_not(d,cond\_func,...other\_params)



LICENSE
=======
- ISC

