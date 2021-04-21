nv-dict-find-index
==================
- nv-dict-find-index


install
=======
- npm install nv-dict-find-index

usage
=====

    const dict_findi = require("nv-dict-find-index")
    //cond_func(v,k,i,...cond_other_func_params)


example
-------

    const dict_findi = require("nv-dict-find-index")
    var d = {a:1,b:2,c:3,d:4,e:5} 
    > dict_findi.all(d,r=>r%2)
    [0,2,4]
    >
    > dict_findi.all_not(d,r=>r%2)
    [ 1,3 ]
    >
    
    > dict_findi.fst(d,r=>r%2)
    0
    > dict_findi.fst_not(d,r=>r%2)
    1
    >
    > dict_findi.lst(d,r=>r%2)
    4
    >
    > dict_findi.lst_not(d,r=>r%2)
    3
    >
    > dict_findi.some(d,[0,2],r=>r%2)
    [ 0,4 ]
    >
    > dict_findi.some_not(d,[0,2],r=>r%2)
    [ 1 ]
    >
    > dict_findi.some_from_lst(d,[0,2],r=>r%2)
    [ 4,0 ]
    >
    > dict_findi.some_not_from_lst(d,[0,2],r=>r%2)
    [ 3 ]
    >
    > dict_findi.which(d,1,r=>r%2)
    2
    > dict_findi.which_not(d,1,r=>r%2)
    3
    > dict_findi.which_from_lst(d,1,r=>r%2)
    2
    > dict_findi.which_not_from_lst(d,1,r=>r%2)
    1
    >


API
====

- dict\_findi.fst(d,cond\_func,...other\_params)
- dict\_findi.fst\_not(d,cond\_func,...other\_params)
- dict\_findi.lst(d,cond\_func,...other\_params)
- dict\_findi.fst\_not(d,cond\_func,...other\_params)
- dict\_findi.which(d,which,cond\_func,...other\_params)
- dict\_findi.which\_not(d,which,cond\_func,...other\_params)
- dict\_findi.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findi.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findi.some(d,whiches,cond\_func,...other\_params)
- dict\_findi.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findi.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findi.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findi.all(d,cond\_func,...other\_params)
- dict\_findi.all\_not(d,cond\_func,...other\_params)



LICENSE
=======
- ISC

