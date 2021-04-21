nv-dict-pop-with-value
============
- nv-dict-pop-with-value


install
=======
- npm install nv-dict-pop-with-value

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
    } = require("nv-dict-pop-with-value");
    
    const dict_vpop = require("nv-dict-pop-with-value")
    var d = {a:100,b:200,c:100,d:400}
    var nd = dict_vpop.all(d,100)
    > d
    { b: 200, d: 400 }
    > nd
    { a: 100, c: 100 }
    >    


API
====

- dict\_vpop.fst(d,v,...cond\_other\_func\_params)
- dict\_vpop.fst\_not(d,v,...cond\_other\_func\_params)
- dict\_vpop.which(d,index,v,...cond\_other\_func\_params)
- dict\_vpop.which\_not(d,index,v,...cond\_other\_func\_params)
- dict\_vpop.which\_from\_lst(d,index,v,...cond\_other\_func\_params)
- dict\_vpop.which\_not\_from\_lst(d,index,v,...cond\_other\_func\_params)
- dict\_vpop.lst(d,v,...cond\_other\_func\_params)
- dict\_vpop.lst\_not(d,v,...cond\_other\_func\_params)
- dict\_vpop.some(d,whiches,v,...cond\_other\_func\_params)
- dict\_vpop.some\_not(d,whiches,v,...cond\_other\_func\_params)
- dict\_vpop.some\_from\_lst(d,whiches,v,...cond\_other\_func\_params)
- dict\_vpop.some\_not\_from\_lst(d,whiches,v,...cond\_other\_func\_params)
- dict\_vpop.all(d,v,...cond\_other\_func\_params)
- dict\_vpop.all\_not(d,v,...cond\_other\_func\_params)

LICENSE
=======
- ISC

