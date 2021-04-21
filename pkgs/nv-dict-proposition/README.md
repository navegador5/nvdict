nv-dict-proposition
=====================
- nv-dict-proposition 


install
=======
- npm install nv-dict-proposition 

usage
=====
    
example
-------

    const dict_prop = require("nv-dict-proposition")

    var d = {a:10,b:2,c:10,d:4,e:10,f:6}
    > dict_prop.all(d,(v,k,i)=>v>0)
    true
    >
    dict_prop.any(d,(v,k,i)=>v>11)
    false

API
====
- dict\_prop.get\_tuple\_descs(d)
- dict\_prop.all(d,cond\_func,...other\_params)
- dict\_prop.every(d,cond\_func,...other\_params)
- dict\_prop.all\_not(d,cond\_func,...other\_params)
- dict\_prop.every\_not(d,cond\_func,...other\_params)
- dict\_prop.any(d,cond\_func,...other\_params)
- dict\_prop.any\_not(d,cond\_func,...other\_params)
- dict\_prop.at\_most\_several(d,n,cond\_func,...other\_params)
- dict\_prop.at\_most\_several\_not(d,n,cond\_func,...other\_params)
- dict\_prop.several(d,n,cond\_func,...other\_params)
- dict\_prop.several\_not(d,n,cond\_func,...other\_params)
- dict\_prop.at\_least\_several(d,n,cond\_func,...other\_params)
- dict\_prop.at\_least\_several\_not(d,n,cond\_func,...other\_params)
- dict\_prop.fst(d,cond\_func,...other\_params)
- dict\_prop.fst\_not(d,cond\_func,...other\_params)
- dict\_prop.which(d,which,cond\_func,...other\_params)
- dict\_prop.which\_not(d,which,cond\_func,...other\_params)
- dict\_prop.lst(d,cond\_func,...other\_params)
- dict\_prop.lst\_not(d,cond\_func,...other\_params)
- dict\_prop.at\_most\_some(d,whiches,cond\_func,...other\_params)
- dict\_prop.at\_most\_some\_not(d,whiches,cond\_func,...other\_params)
- dict\_prop.some(d,whiches,cond\_func,...other\_params)
- dict\_prop.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_prop.at\_least\_some(d,whiches,cond\_func,...other\_params)
- dict\_prop.at\_least\_some\_not(d,whiches,cond\_func,...other\_params)

LICENSE
=======
- ISC 
