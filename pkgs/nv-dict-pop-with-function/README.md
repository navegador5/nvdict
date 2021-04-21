nv-dict-pop-with-function
============
- nv-dict-pop-with-function


install
=======
- npm install nv-dict-pop-with-function

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
    } = require("nv-dict-pop-with-function");
    
    
    var d = {a:100,b:200,c:300,d:400}
    var nd = all(d,(v,k,i)=>v>250 || k==='b')
    > d
    { a: 100 }
    > nd
    { b: 200, c: 300, d: 400 }
    >
    
    var d = {a:100,b:200,c:100,d:200}
    var nd = fst(d,(v,k,i)=>v===100)
    > d
    { b: 200, c: 100, d: 200 }
    > nd
    { a: 100 }
    >
    
    var d = {a:100,b:200,c:100,d:200}
    var nd = lst(d,(v,k,i)=>v===100)
    > d
    { a: 100, b: 200, d: 200 }
    > nd
    { c: 100 }
    >


API
====

- dict\_fpop.gen\_from\_fst(d)
- dict\_fpop.gen\_from\_lst(d)
- dict\_fpop.fst(d,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.fst\_not(d,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.which(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.which\_not(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.which\_from\_lst(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.which\_not\_from\_lst(d,index,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.lst(d,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.lst\_not(d,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.some(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.some\_not(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.some\_from\_lst(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.some\_not\_from\_lst(d,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.all(d,cond\_func,...cond\_other\_func\_params)
- dict\_fpop.all\_not(d,cond\_func,...cond\_other\_func\_params)

LICENSE
=======
- ISC

