nv-dict-assign
============
- nv-dict-assign
- the original is ambigious

install
=======
- npm install nv-dict-assign

usage
=====

add
---

    add(d0,d1):
        for k in d1, do:
            if d0.hasOwnProperty(k):
                pass
            else:
                d0[k] = undefined



set
---
   
         set(d0,d1):   
             for k in d1, do:
                 if d0.hasOwnProperty(k):
                     d0[k] = d1[k]
                 else:
                     pass


add\_then\_set\_if\_noexist
----------------------------

    add_then_set_if_noexist:
        for k in d1, do:
            if d0.hasOwnProperty(k):
                pass
            else:
                d0[k] = d1[k]





set\_if\_exist\_else\_add\_then\_set
------------------------------------

    set_if_exist_else_add_then_set:
        for k in d1, do:
            d0[k] = d1[k]

assign
------
- same as set\_if\_exist\_else\_add\_then\_set


set\_if\_exist\_else\_add
-------------------------

    set_if_exist_else_add:
        for k in d1, do:
            if d0.hasOwnProperty(k):
                d0[k] = d1[k]
            else:
                d0[k] = undefined



    


example
-------


    const dict_assign = require("nv-dict-assign")


API
====

- add(d0,d1) 
- set(d0,d1)
- add\_then\_set\_if\_noexist(d0,d1) 
- set\_if\_exist\_else\_add\_then\_set(d0,d1) 
- assign(d0,d1)
- set\_if\_exist\_else\_add(d0,d1) 
- del\_if\_exist(d0,d1) 
- del\_if\_exist\_else\_add(d0,d1) 
- del\_if\_exist\_else\_add\_then\_set(d0,d1)

LICENSE
=======
- ISC

