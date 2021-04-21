nv-dict-find
============
- nv-dict-find


install
=======
- npm install nv-dict-find

usage
=====

    const dict_find = require("nv-dict-find")
    //cond_func(v,k,i,...cond_other_func_params)


example
-------

    const dict_find = require("nv-dict-find")
    var d = {a:1,b:2,c:3,d:4,e:5} 
    > dict_find.all(d,r=>r%2)
    { a: 1, c: 3, e: 5 }
    > dict_find.all_not(d,r=>r%2)
    { b: 2, d: 4 }
    >
    > dict_find.fst(d,r=>r%2)
    { a: 1 }
    > dict_find.fst_not(d,r=>r%2)
    { b: 2 }
    >
    > dict_find.lst(d,r=>r%2)
    { e: 5 }
    > dict_find.lst_not(d,r=>r%2)
    { d: 4 }
    >
    > dict_find.which(d,1,r=>r%2)
    { c: 3 }
    > dict_find.which_not(d,1,r=>r%2)
    { d: 4 }
    >
    > dict_find.which_from_lst(d,1,r=>r%2)
    { c: 3 }
    > dict_find.which_not_from_lst(d,1,r=>r%2)
    { b: 2 }
    >
    
    > dict_find.some(d,[0,2],r=>r%2)
    { a: 1, e: 5 }
    > dict_find.some_not(d,[0,2],r=>r%2)
    { b: 2 }
    >
    > dict_find.some_from_lst(d,[0,2],r=>r%2)
    { e: 5, a: 1 }
    > dict_find.some_not_from_lst(d,[0,2],r=>r%2)
    { d: 4 }
    >
    >


API
====

- dict\_find.fst(d,cond\_func,...other\_params)
- dict\_find.fst\_not(d,cond\_func,...other\_params)
- dict\_find.lst(d,cond\_func,...other\_params)
- dict\_find.fst\_not(d,cond\_func,...other\_params)
- dict\_find.which(d,which,cond\_func,...other\_params)
- dict\_find.which\_not(d,which,cond\_func,...other\_params)
- dict\_find.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_find.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_find.some(d,whiches,cond\_func,...other\_params)
- dict\_find.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_find.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_find.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_find.all(d,cond\_func,...other\_params)
- dict\_find.all\_not(d,cond\_func,...other\_params)



LICENSE
=======
- ISC

