nv-dict-remove-with-function
============
- nv-dict-remove-with-function


install
=======
- npm install nv-dict-remove-with-function

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
    } = require("nv-dict-remove-with-function");
    
    
    var d = {a:100,b:200,c:300,d:400}
    all(d,(v,k,i)=>v>250 || k==='b')
    > d
    { a: 100 }
    
    var d = {a:100,b:200,c:100,d:200}
    fst(d,(v,k,i)=>v===100)
    > d
    { b: 200, c: 100, d: 200 }
    >
    
    var d = {a:100,b:200,c:100,d:200}
    lst(d,(v,k,i)=>v===100)
    > d
    { a: 100, b: 200, d: 200 }
    >


API
====

- dict\_frm.fst(d,cond\_func,...cond\_other\_func\_params)
- dict\_frm.fst\_not(d,cond\_func,...cond\_other\_func\_params)
- dict\_frm.which(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_frm.which\_not(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_frm.which\_from\_lst(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_frm.which\_not\_from\_lst(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_frm.lst(d,cond\_func,...cond\_other\_func\_params)
- dict\_frm.lst\_not(d,cond\_func,...cond\_other\_func\_params)
- dict\_frm.some(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_frm.some\_not(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_frm.some\_from\_lst(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_frm.some\_not\_from\_lst(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_frm.all(d,cond\_func,...cond\_other\_func\_params)
- dict\_frm.all\_not(d,cond\_func,...cond\_other\_func\_params)

LICENSE
=======
- ISC

