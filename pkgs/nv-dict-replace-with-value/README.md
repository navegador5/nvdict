nv-dict-replace-with-value
============
- nv-dict-replace-with-value


install
=======
- npm install nv-dict-replace-with-value

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
    } = require("nv-dict-replace-with-value");
    
    
    var d = {a:100,b:200,c:100,d:200}
    all(d,'XX',100)
    > d
    { a: 'XX', b: 200, c: 'XX', d: 200 }
    >
    
    var d = {a:100,b:200,c:100,d:200}
    fst(d,'XX',100)
    > d
    { a: 'XX', b: 200, c: 100, d: 200 }
    >

    var d = {a:100,b:200,c:100,d:200}
    lst(d,'XX',100)
    > d
    { a: 100, b: 200, c: 'XX', d: 200 }
    >


API
====

- dict\_vrplc.fst(d,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.fst\_not(d,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.which(d,index,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.which\_not(d,index,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.which\_from\_lst(d,index,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.which\_not\_from\_lst(d,index,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.lst(d,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.lst\_not(d,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.some(d,whiches,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.some\_not(d,whiches,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.some\_from\_lst(d,whiches,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.some\_not\_from\_lst(d,whiches,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.all(d,new\_val,...cond\_other\_func\_params)
- dict\_vrplc.all\_not(d,new\_val,...cond\_other\_func\_params)

LICENSE
=======
- ISC

