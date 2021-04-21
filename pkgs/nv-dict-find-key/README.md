nv-dict-find-key
================
- nv-dict-find-key


install
=======
- npm install nv-dict-find-key

usage
=====

    const dict_findk = require("nv-dict-find-key")
    //cond_func(v,k,i,...cond_other_func_params)


example
-------

    const dict_findk = require("nv-dict-find-key")
    var d = {a:1,b:2,c:3,d:4,e:5} 
    > dict_findk.all(d,r=>r%2)
    ['a','c','e']
    >
    > dict_findk.all_not(d,r=>r%2)
    [ 'b','d' ]
    >
    
    > dict_findk.fst(d,r=>r%2)
    'a'
    > dict_findk.fst_not(d,r=>r%2)
    'b'
    >
    > dict_findk.lst(d,r=>r%2)
    'e'
    >
    > dict_findk.lst_not(d,r=>r%2)
    'd'
    >
    > dict_findk.some(d,[0,2],r=>r%2)
    [ 'a','e']
    >
    > dict_findk.some_not(d,[0,2],r=>r%2)
    [ 'b']
    >
    > dict_findk.some_from_lst(d,[0,2],r=>r%2)
    [ 'e','a']
    >
    > dict_findk.some_not_from_lst(d,[0,2],r=>r%2)
    [ 'd']
    >
    > dict_findk.which(d,1,r=>r%2)
    'c'
    > dict_findk.which_not(d,1,r=>r%2)
    'd'
    > dict_findk.which_from_lst(d,1,r=>r%2)
    'c'
    > dict_findk.which_not_from_lst(d,1,r=>r%2)
    'b'
    >


API
====

- dict\_findk.fst(d,cond\_func,...other\_params)
- dict\_findk.fst\_not(d,cond\_func,...other\_params)
- dict\_findk.lst(d,cond\_func,...other\_params)
- dict\_findk.fst\_not(d,cond\_func,...other\_params)
- dict\_findk.which(d,which,cond\_func,...other\_params)
- dict\_findk.which\_not(d,which,cond\_func,...other\_params)
- dict\_findk.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findk.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findk.some(d,whiches,cond\_func,...other\_params)
- dict\_findk.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findk.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findk.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findk.all(d,cond\_func,...other\_params)
- dict\_findk.all\_not(d,cond\_func,...other\_params)



LICENSE
=======
- ISC

