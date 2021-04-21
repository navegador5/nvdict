nv-dict-basic
============
- nv-dict-basic


install
=======
- npm install nv-dict-basic

usage
=====

example
-------

    const dict_bsc = require("nv-dict-basic")


        //dict_bsc.some
        > var d = {a:100,b:200,c:300}
        undefined
        > dict_bsc.some(d,'a','c')
        { a: 100, c: 300 }
        > d
        { a: 100, b: 200, c: 300 }
        >



        //dict_bsc.some_not
        > var d = {a:100,b:200,c:300}
        undefined
        > dict_bsc.some_not(d,'a','c')
        {b: 200}
        > d
        { a: 100, b: 200, c: 300 }
        >

        //dict_bsc.length
        var d = {a:100,b:200,c:300}
        > dict_bsc.length(d)
        3
        >

        //kvlist
        var d = {a:100,b:200,c:300}
        var [kl,vl] = dict_bsc.kvlist(d)
        > kl
        [ 'a', 'b', 'c' ]
        > vl
        [ 100, 200, 300 ]
        >
        dict_bsc.from_kvlist(kl,vl)
        { a: 100, b: 200, c: 300 }

        //vlist
        var d = {a:100,b:200,c:300}
        > dict_bsc.vlist(d,'a','c')
        [ 100, 300 ]
        >
        > dict_bsc.vlist_not(d,'a','c')
        [ 200 ]
        >


        //dict_bsc.update

        var d0 = {a:1,b:2,c:3,d:4}
        var d1 = {b:200,e:500}
        > dict_bsc.update(d0,d1)
        { a: 1, b: 200, c: 3, d: 4, e: 500 }
        >
        > d0
        { a: 1, b: 200, c: 3, d: 4, e: 500 }
        >


        var d0 = {a:1,b:2,c:3,d:4}
        var d1 = {b:200,e:500}
        dict_bsc.update_only_exist_in_own(d0,d1)
        { a: 1, b: 200, c: 3, d: 4 }


        var d0 = {a:1,b:2,c:3,d:4}
        var d1 = {b:200,e:500}
        dict_bsc.update_only_non_exist_in_own(d0,d1)
        { a: 1, b: 2, c: 3, d: 4, e: 500 }



        //dict_bsc.clear
        > var d = {a:100,b:200,c:300}
        undefined
        > dict_bsc.clear(d)
        {}
        > d
        {}
        >

        //dict_bsc.rm
        > var d = {a:100,b:200,c:300}
        undefined
        > dict_bsc.rm(d,'a','c')
        { b: 200 }
        > d
        { b: 200 }
        >


        //dict_bsc.rm_not
        > var d = {a:100,b:200,c:300}
        undefined
        > dict_bsc.rm_not(d,'a','c')
        { a: 100, c: 300 }
        > d
        { a: 100, c: 300 }
        >


    const {gen_from_fst,gen_from_lst} = require("nv-dict-basic");
    var d = {a:100,b:200,c:300}
    var g = gen_from_fst(d)
    > g.next()
    { value: { k: 'a', v: 100, i: 0 }, done: false }
    > g.next()
    { value: { k: 'b', v: 200, i: 1 }, done: false }
    > g.next()
    { value: { k: 'c', v: 300, i: 2 }, done: false }
    > g.next()
    { value: undefined, done: true }
    >
    var g = gen_from_lst(d)
    > g.next()
    { value: { k: 'c', v: 300, i: 2 }, done: false }
    > g.next()
    { value: { k: 'b', v: 200, i: 1 }, done: false }
    > g.next()
    { value: { k: 'a', v: 100, i: 0 }, done: false }
    > g.next()
    { value: undefined, done: true }
    >

    var d = {a:100,b:200,c:100,d:200,e:300}
    > dict_bsc.rekey(d,'A','B','C','D','E')
    { A: 100, B: 200, C: 100, D: 200, E: 300 }
    >
    > dict_bsc.reval(d,1,2,3,4,5)
    { a: 1, b: 2, c: 3, d: 4, e: 5 }
    >


    > var d = {a:100,b:200}
    > dict_bsc.krekey(d,'b','B')
    { a: 100, B: 200 }
    >
    > d
    { a: 100, B: 200 }
    >
    
    > var d = {a:100,b:200}
    > dict_bsc.vrekey(d,200,'B')
    { a: 100, B: 200 }
    > d
    { a: 100, B: 200 }
    >
    
    
    > var d = {a:100,b:200}
    > dict_bsc.getset(d,'a',999)
    { a: 999, b: 200 }
    > d
    { a: 999, b: 200 }
    >
    > dict_bsc.getset(d,'noex',999)
    { a: 999, b: 200, noex: undefined }
    >
    >
    
    > var d = {}
    > dict_bsc.mset(d,'a',100,'b',200)
    { a: 100, b: 200 }
    > d
    { a: 100, b: 200 }
    >
    
    > var d = {a:100,b:200}
    > dict_bsc.msetnx(d,'a',999,'b',333)
    { a: 100, b: 200 }
    > d
    { a: 100, b: 200 }
    > dict_bsc.msetnx(d,'c',999,'d',333)
    { a: 100, b: 200, c: 999, d: 333 }
    > d
    { a: 100, b: 200, c: 999, d: 333 }
    >

API
====

- dict\_bsc.clear(d)
- dict\_bsc.rm(d,...keys)
- dict\_bsc.rm\_not(d,...keys)
- dict\_bsc.kvlist(d)
- dict\_bsc.from\_kvlist(kl,vl)
- dict\_bsc.klist(d,...keys)
- dict\_bsc.klist\_not(d,...keys)
- dict\_bsc.vlist(d,...keys)
- dict\_bsc.vlist\_not(d,...keys)
- dict\_bsc.some(d,...keys)
- dict\_bsc.some\_not(d,...keys)
- dict\_bsc.update(d0,d1)
- dict\_bsc.update\_only\_exist\_in\_own(d0,d1)
- dict\_bsc.update\_only\_non\_exist\_in\_own(d0,d1)
- dict\_bsc.length(d)
- dict\_bsc.eq(d0,d1)
- dict\_bsc.to\_map(d)
- dict\_bsc.to\_wmap(d)
- dict\_bsc.cp(d)
- dict\_bsc.gen\_from\_fst(d)
- dict\_bsc.gen\_from\_lst(d)
- dict\_bsc.rekey(d,...ks)
- dict\_bsc.reval(d,...vs)

- dict\_bsc.krekey(d,ok,nk)
- dict\_bsc.vrekey(d,v,nk)
- dict\_bsc.getset(d,k,v)
- dict\_bsc.setnx(d,k,v)
- dict\_bsc.mset(d,...kvs)
- dict\_bsc.msetnx(d,...kvs)


LICENSE
=======
- ISC

