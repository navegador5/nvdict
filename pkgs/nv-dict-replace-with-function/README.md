nv-dict-replace-with-function
============
- nv-dict-replace-with-function


install
=======
- npm install nv-dict-replace-with-function

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
        all_not,
    } = require("nv-dict-replace-with-function");
    
    
    var d = {a:100,b:200,c:300,d:400}
    all(d,'XX',(v,k,i)=>v>250 || k==='b')

    > d
    { a: 100, b: 'XX', c: 'XX', d: 'XX' }
    >


    var d = {a:100,b:200,c:100,d:200}
    fst(d,'XX',(v,k,i)=>v===100)
    >
    { a: 'XX', b: 200, c: 100, d: 200 }
    >


    var d = {a:100,b:200,c:100,d:200}
    lst(d,'XX',(v,k,i)=>v===100)
    >
    { a: 100, b: 200, c: 'XX', d: 200 }
    >

API
====

- dict\_frplc.fst(d,new\_val,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.fst\_not(d,new\_val,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.which(d,new\_val,index,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.which\_not(d,new\_val,index,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.which\_from\_lst(d,new\_val,index,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.which\_not\_from\_lst(d,new\_val,index,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.lst(d,new\_val,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.lst\_not(d,new\_val,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.some(d,new\_val,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.some\_not(d,new\_val,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.some\_from\_lst(d,new\_val,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.some\_not\_from\_lst(d,new\_val,whiches,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.all(d,new\_val,cond\_func,...cond\_other\_func\_params)
- dict\_frplc.all\_not(d,new\_val,cond\_func,...cond\_other\_func\_params)

LICENSE
=======
- ISC

