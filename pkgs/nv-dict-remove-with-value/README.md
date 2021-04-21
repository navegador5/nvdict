nv-dict-remove-with-value
============
- nv-dict-remove-with-value


install
=======
- npm install nv-dict-remove-with-value

usage
=====

example
-------

    const {
        fst,
        fst_not,
        lst,
        lst_not,
        which,
        which_not,
        which_from_lst,
        which_not_from_lst,
        some,
        some_not,
        some_from_lst,
        some_not_from_lst,
        all,
        all_not
    } = require("nv-dict-remove-with-value");
    
    
    var d = {a:100,b:200,c:100,d:200}
    all(d,100)
    > d
    { b: 200, d: 200 }
    >
    
    
    var d = {a:100,b:200,c:100,d:200}
    fst(d,100)
    > d
    { b: 200, c: 100, d: 200 }
    >
    
    var d = {a:100,b:200,c:100,d:200}
    lst(d,100)
    > d
    { a: 100, b: 200, d: 200 }
    >


API
====

- dict\_vrm.fst(d,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.fst\_not(d,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.which(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.which\_not(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.which\_from\_lst(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.which\_not\_from\_lst(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.lst(d,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.lst\_not(d,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.some(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.some\_not(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.some\_from\_lst(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.some\_not\_from\_lst(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.all(d,cond\_func,...cond\_other\_func\_params)
- dict\_vrm.all\_not(d,cond\_func,...cond\_other\_func\_params)

LICENSE
=======
- ISC

