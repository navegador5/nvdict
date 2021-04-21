nv-dict-sort
============
- nv-dict-sort


install
=======
- npm install nv-dict-sort

usage
=====

    sort(d,sort_func)
    sort_func = (a,b) => {
        /*
            a[0], b[0]  :  key
            a[1], b[1]  :  value
            a[2], b[2]  :  index

            return  1 or 0 or -1
        */
    }


example
-------

    const dict_sort = require("nv-dict-sort")


    var d = {a:100,c:200,b:300}
    > dict_sort.ksort(d)
    { a: 100, b: 300, c: 200 }
    >



    var d = { a: 100, c: 300, b: 200 }
    > dict_sort.vsort({ a: 100, c: 300, b: 200 })
    { a: 100, b: 200, c: 300 }
    >


    var d = {a:3,b:-5,c:-1}
    dict_sort.sort(d,(a,b)=>Math.abs(a[1])-Math.abs(b[1]))
    { c: -1, a: 3, b: -5 }
    >

    > dict_sort.reverse({a:100,c:200,b:300})
    { b: 300, c: 200, a: 100 }
    >


API
====

- dict\_sort.DFLT\_KSORT\_FUNC
- dict\_sort.DFLT\_VSORT\_FUNC
- dict\_sort(d,sort\_func)
- dict\_sort.ksort(d)
- dict\_sort.vsort(d)
- dict\_sort.reverse(d)

LICENSE
=======
- ISC

