nvdict
============
- simple dict tools
- only install which you needed


install
=======

all
---

    npm install nvdict

splitted
--------

- [npm install nv-dict-basic](https://www.npmjs.com/package/nv-dict-basic)
- [npm install nv-dict-init](https://www.npmjs.com/package/nv-dict-init)
- [npm install nv-dict-collection](https://www.npmjs.com/package/nv-dict-collection)
- [npm install nv-dict-combo](https://www.npmjs.com/package/nv-dict-combo)
- [npm install nv-dict-compare](https://www.npmjs.com/package/nv-dict-compare)
- [npm install nv-dict-desc](https://www.npmjs.com/package/nv-dict-desc)
- [npm install nv-dict-find](https://www.npmjs.com/package/nv-dict-find)
- [npm install nv-dict-find-index](https://www.npmjs.com/package/nv-dict-find-index)
- [npm install nv-dict-find-key](https://www.npmjs.com/package/nv-dict-find-key)
- [npm install nv-dict-find-value](https://www.npmjs.com/package/nv-dict-find-value)
- [npm install nv-dict-findik](https://www.npmjs.com/package/nv-dict-findik)
- [npm install nv-dict-findiv](https://www.npmjs.com/package/nv-dict-findiv)
- [npm install nv-dict-findkv](https://www.npmjs.com/package/nv-dict-findkv)
- [npm install nv-dict-findikv](https://www.npmjs.com/package/nv-dict-findikv)
- [npm install nv-dict-index-of](https://www.npmjs.com/package/nv-dict-index-of)
- [npm install nv-dict-key-of](https://www.npmjs.com/package/nv-dict-key-of)
- [npm install nv-dict-swap](https://www.npmjs.com/package/nv-dict-swap)
- [npm install nv-dict-sort](https://www.npmjs.com/package/nv-dict-sort)
- [npm install nv-dict-setter](https://www.npmjs.com/package/nv-dict-setter)
- [npm install nv-dict-map](https://www.npmjs.com/package/nv-dict-map)
- [npm install nv-dict-pop-with-function](https://www.npmjs.com/package/nv-dict-pop-with-function)
- [npm install nv-dict-pop-with-value](https://www.npmjs.com/package/nv-dict-pop-with-value)
- [npm install nv-dict-remove-with-function](https://www.npmjs.com/package/nv-dict-remove-with-function)
- [npm install nv-dict-remove-with-value](https://www.npmjs.com/package/nv-dict-remove-with-value)
- [npm install nv-dict-replace-with-function](https://www.npmjs.com/package/nv-dict-replace-with-function)
- [npm install nv-dict-replace-with-value](https://www.npmjs.com/package/nv-dict-replace-with-value)
- [npm install nv-dict-proposition](https://www.npmjs.com/package/nv-dict-proposition)
- [npm install nv-dict-group](https://www.npmjs.com/package/nv-dict-group)
- [npm install nv-dict-smirror](https://www.npmjs.com/package/nv-dict-smirror)


usage
=====

    const dict_bsc = require("nv-dict-basic")
    const dict_init = require("nv-dict-init")
    const dict_cll = require("nv-dict-collection")
    const dict_com = require("nv-dict-combo")
    const dict_cmp = require("nv-dict-compare")
    const dict_desc = require("nv-dict-desc")
    const dict_find = require("nv-dict-find")
    const dict_findi = require("nv-dict-find-index")
    const dict_findk = require("nv-dict-find-key")
    const dict_findv = require("nv-dict-find-value")
    const dict_findik = require("nv-dict-findik")
    const dict_findiv = require("nv-dict-findiv")
    const dict_findkv = require("nv-dict-findkv")
    const dict_findikv = require("nv-dict-findikv")
    const dict_indexof = require("nv-dict-index-of")
    const dict_keyof = require("nv-dict-key-of")
    const dict_swap = require("nv-dict-swap")
    const dict_sort = require("nv-dict-sort")
    const dict_setter = require("nv-dict-setter")
    const dict_map = require("nv-dict-map");
    const dict_fpop = require("nv-dict-pop-with-function");
    const dict_vpop = require("nv-dict-pop-with-value");
    const dict_frm = require("nv-dict-remove-with-function");
    const dict_vrm = require("nv-dict-remove-with-value");
    const dict_frplc = require("nv-dict-replace-with-function");
    const dict_vrplc = require("nv-dict-replace-with-value");
    const dict_prop = require("nv-dict-proposition");
    const dict_grp = require("nv-dict-group");
    const dict_smirr = require("nv-dict-smirr");


API
====
- dict\_bsc.list(d)
- dict\_bsc.from\_list(l)

- dict\_bsc.keyat(d,index)
- dict\_bsc.idxat(d,key)
- dict\_bsc.fstk(d)
- dict\_bsc.lstk(d)

- dict\_bsc.iget(d,index)
- dict\_bsc.iset(d,index,val)
- dict\_bsc.idel(d,index)
- dict\_bsc.ihas(d,index)

- dict\_bsc.assign(orig\_dict,...dicts)
- dict\_bsc.concat(...dicts)

- dict\_bsc.clear(d)
- dict\_bsc.clear\_and\_tolist(d)
- dict\_bsc.clear\_and\_toklist(d)
- dict\_bsc.clear\_and\_cp(d)

- dict\_bsc.rm(d,...keys)
- dict\_bsc.rm\_not(d,...keys)
- dict\_bsc.rm\_before(d,end\_key\_or\_index)
- dict\_bsc.rm\_after(d,key\_or\_index)        //not-included
- dict\_bsc.rm\_from(d,key\_or\_index)         //included
- dict\_bsc.rm\_between(d,start\_key\_or\_index,end\_key\_or\_index)


- dict\_bsc.pop(d,count=1,from\_index)
- dict\_bsc.pop\_before(d,end\_key\_or\_index)
- dict\_bsc.pop\_after(d,key\_or\_index)        //not-included
- dict\_bsc.pop\_from(d,key\_or\_index)         //included
- dict\_bsc.pop\_between(d,start\_key\_or\_index,end\_key\_or\_index)

- dict\_bsc.insert\_before(d,_key\_or\_index,nd)
- dict\_bsc.insert\_after(d,_key\_or\_index,nd)


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



- dict\_init.use(val,...keys) 
- dict\_init.undef(...keys)
- dict\_init.nul(...keys)
- dict\_init.zero(...keys)
- dict\_init.tru(...keys)
- dict\_init.fls(...keys)
- dict\_init.empty\_str(...keys)
- dict\_init.empty\_arr(...keys)
- dict\_init.empty\_dict(...keys)


- dict\_cll.get\_union\_klist(d0,d1)
- dict\_cll.get\_diff\_klist(d0,d1)
- dict\_cll.get\_inter\_klist(d0,d1)
- dict\_cll.union(d0,d1)
- dict\_cll.diff(d0,d1)
- dict\_cll.inter(d0,d1)


- dict\_com.get\_klist\_combos(d)
- dict\_com.get\_klist\_perms(d)
- dict\_com.comb(d)
- dict\_com.perm(d)
- dict\_com.get\_all\_combs(d)
- dict\_com.get\_all\_perms(d)


- dict\_cmp.samek(d0,d1)
- dict\_cmp.samek\_engine(cond\_func,d0,d1)
- dict\_cmp.samekv(d0,d1)
- dict\_cmp.samek\_diffv(d0,d1)
- dict\_cmp.diffk(d0,d1)
- dict\_cmp.diffk\_both(d0,d1)


- dict\_desc.copy(d)
- dict\_desc.mirror(d)
- dict\_desc.KFIRST
- dict\_desc.VFIRST
- dict\_desc.mdict(d,pri\_key="k")
- dict\_desc.desc(d)
- dict\_desc.from\_desc(desc)


- dict\_find.fst(d,cond\_func,...other\_params)
- dict\_find.fst\_not(d,cond\_func,...other\_params)
- dict\_find.lst(d,cond\_func,...other\_params)
- dict\_find.fst\_not(d,cond\_func,...other\_params)
- dict\_find.which(d,which,cond\_func,...other\_params)
- dict\_find.which\_not(d,which,cond\_func,...other\_params)
- dict\_find.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_find.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_find.some(d,whiches,cond\_func,...other\_params)
- dict\_find.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_find.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_find.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_find.all(d,cond\_func,...other\_params)
- dict\_find.all\_not(d,cond\_func,...other\_params)



- dict\_findi.fst(d,cond\_func,...other\_params)
- dict\_findi.fst\_not(d,cond\_func,...other\_params)
- dict\_findi.lst(d,cond\_func,...other\_params)
- dict\_findi.fst\_not(d,cond\_func,...other\_params)
- dict\_findi.which(d,which,cond\_func,...other\_params)
- dict\_findi.which\_not(d,which,cond\_func,...other\_params)
- dict\_findi.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findi.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findi.some(d,whiches,cond\_func,...other\_params)
- dict\_findi.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findi.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findi.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findi.all(d,cond\_func,...other\_params)
- dict\_findi.all\_not(d,cond\_func,...other\_params)


- dict\_findk.fst(d,cond\_func,...other\_params)
- dict\_findk.fst\_not(d,cond\_func,...other\_params)
- dict\_findk.lst(d,cond\_func,...other\_params)
- dict\_findk.fst\_not(d,cond\_func,...other\_params)
- dict\_findk.which(d,which,cond\_func,...other\_params)
- dict\_findk.which\_not(d,which,cond\_func,...other\_params)
- dict\_findk.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findk.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findk.some(d,whiches,cond\_func,...other\_params)
- dict\_findk.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findk.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findk.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findk.all(d,cond\_func,...other\_params)
- dict\_findk.all\_not(d,cond\_func,...other\_params)


- dict\_findv.fst(d,cond\_func,...other\_params)
- dict\_findv.fst\_not(d,cond\_func,...other\_params)
- dict\_findv.lst(d,cond\_func,...other\_params)
- dict\_findv.fst\_not(d,cond\_func,...other\_params)
- dict\_findv.which(d,which,cond\_func,...other\_params)
- dict\_findv.which\_not(d,which,cond\_func,...other\_params)
- dict\_findv.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findv.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findv.some(d,whiches,cond\_func,...other\_params)
- dict\_findv.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findv.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findv.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findv.all(d,cond\_func,...other\_params)
- dict\_findv.all\_not(d,cond\_func,...other\_params)


- dict\_findik.fst(d,cond\_func,...other\_params)
- dict\_findik.fst\_not(d,cond\_func,...other\_params)
- dict\_findik.lst(d,cond\_func,...other\_params)
- dict\_findik.fst\_not(d,cond\_func,...other\_params)
- dict\_findik.which(d,which,cond\_func,...other\_params)
- dict\_findik.which\_not(d,which,cond\_func,...other\_params)
- dict\_findik.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findik.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findik.some(d,whiches,cond\_func,...other\_params)
- dict\_findik.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findik.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findik.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findik.all(d,cond\_func,...other\_params)
- dict\_findik.all\_not(d,cond\_func,...other\_params)



- dict\_findiv.fst(d,cond\_func,...other\_params)
- dict\_findiv.fst\_not(d,cond\_func,...other\_params)
- dict\_findiv.lst(d,cond\_func,...other\_params)
- dict\_findiv.fst\_not(d,cond\_func,...other\_params)
- dict\_findiv.which(d,which,cond\_func,...other\_params)
- dict\_findiv.which\_not(d,which,cond\_func,...other\_params)
- dict\_findiv.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findiv.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findiv.some(d,whiches,cond\_func,...other\_params)
- dict\_findiv.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findiv.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findiv.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findiv.all(d,cond\_func,...other\_params)
- dict\_findiv.all\_not(d,cond\_func,...other\_params)



- dict\_findkv.fst(d,cond\_func,...other\_params)
- dict\_findkv.fst\_not(d,cond\_func,...other\_params)
- dict\_findkv.lst(d,cond\_func,...other\_params)
- dict\_findkv.fst\_not(d,cond\_func,...other\_params)
- dict\_findkv.which(d,which,cond\_func,...other\_params)
- dict\_findkv.which\_not(d,which,cond\_func,...other\_params)
- dict\_findkv.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findkv.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findkv.some(d,whiches,cond\_func,...other\_params)
- dict\_findkv.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findkv.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findkv.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findkv.all(d,cond\_func,...other\_params)
- dict\_findkv.all\_not(d,cond\_func,...other\_params)



- dict\_findikv.fst(d,cond\_func,...other\_params)
- dict\_findikv.fst\_not(d,cond\_func,...other\_params)
- dict\_findikv.lst(d,cond\_func,...other\_params)
- dict\_findikv.fst\_not(d,cond\_func,...other\_params)
- dict\_findikv.which(d,which,cond\_func,...other\_params)
- dict\_findikv.which\_not(d,which,cond\_func,...other\_params)
- dict\_findikv.which\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findikv.which\_not\_from\_lst(d,which,cond\_func,...other\_params)
- dict\_findikv.some(d,whiches,cond\_func,...other\_params)
- dict\_findikv.some\_not(d,whiches,cond\_func,...other\_params)
- dict\_findikv.some\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findikv.some\_not\_from\_lst(d,whiches,cond\_func,...other\_params)
- dict\_findikv.all(d,cond\_func,...other\_params)
- dict\_findikv.all\_not(d,cond\_func,...other\_params)


- dict\_indexof.fst(d,value)
- dict\_indexof.lst(d,value)
- dict\_indexof.which(d,value,which)
- dict\_indexof.which\_from\_lst(d,value,which)
- dict\_indexof.some(d,value,...whiches)
- dict\_indexof.some\_from\_lst(d,value,...whiches)
- dict\_indexof.all(d,value)


- dict\_keyof.fst(d,value)
- dict\_keyof.lst(d,value)
- dict\_keyof.which(d,value,which)
- dict\_keyof.which\_from\_lst(d,value,which)
- dict\_keyof.some(d,value,...whiches)
- dict\_keyof.some\_from\_lst(d,value,...whiches)
- dict\_keyof.all(d,value)

- dict\_swap.kswap(d,k0,k1)
- dict\_swap.vswap(d,v0,v1,which0=0,which1=0)


- dict\_sort.DFLT\_KSORT\_FUNC
- dict\_sort.DFLT\_VSORT\_FUNC
- dict\_sort(d,sort\_func)
- dict\_sort.ksort(d)
- dict\_sort.vsort(d)
- dict\_sort.reverse(d)

- dict\_setter.all(d,val) 
- dict\_setter.some(d,val,...ks) 
- dict\_setter.some\_not(d,val,...ks) 
- dict\_setter.filter\_map(d,val\_map\_func,cond\_func,...other\_args) 
- dict\_setter.filter(d,val,cond\_func,...other\_args) 
- dict\_setter.kfilter(d,val,cond\_func,...other\_args) 
- dict\_setter.vfilter(d,val,cond\_func,...other\_args) 
- dict\_setter.ifilter(d,val,cond\_func,...other\_args)


- dict\_map.f\_mapk
- dict\_map.fio\_mapk
- dict\_map.fki\_mapk
- dict\_map.fko\_mapk
- dict\_map.fv\_mapk
- dict\_map.fvio\_mapk
- dict\_map.fvki\_mapk
- dict\_map.fvko\_mapk
- dict\_map.i\_mapk
- dict\_map.k\_mapk
- dict\_map.kio\_mapk
- dict\_map.o\_mapk
- dict\_map.vi\_mapk
- dict\_map.vk\_mapk
- dict\_map.vkio\_mapk
- dict\_map.vo\_mapk
- dict\_map.f\_mapv
- dict\_map.fio\_mapv
- dict\_map.fki\_mapv
- dict\_map.fko\_mapv
- dict\_map.fv\_mapv
- dict\_map.fvio\_mapv
- dict\_map.fvki\_mapv             v
- dict\_map.fvko\_mapv
- dict\_map.i\_mapv
- dict\_map.k\_mapv
- dict\_map.kio\_mapv
- dict\_map.o\_mapv
- dict\_map.vi\_mapv
- dict\_map.vk\_mapv
- dict\_map.vkio\_mapv
- dict\_map.vo\_mapv
- dict\_map.fi\_mapk
- dict\_map.fk\_mapk
- dict\_map.fkio\_mapk
- dict\_map.fo\_mapk
- dict\_map.fvi\_mapk
- dict\_map.fvk\_mapk
- dict\_map.fvkio\_mapk
- dict\_map.fvo\_mapk
- dict\_map.io\_mapk
- dict\_map.ki\_mapk
- dict\_map.ko\_mapk
- dict\_map.v\_mapk
- dict\_map.vio\_mapk
- dict\_map.vki\_mapk
- dict\_map.vko\_mapk
- dict\_map.fi\_mapv
- dict\_map.fk\_mapv
- dict\_map.fkio\_mapv
- dict\_map.fo\_mapv
- dict\_map.fvi\_mapv
- dict\_map.fvk\_mapv
- dict\_map.fvkio\_map
- dict\_map.fvo\_mapv
- dict\_map.io\_mapv
- dict\_map.ki\_mapv
- dict\_map.ko\_mapv
- dict\_map.v\_mapv
- dict\_map.vio\_mapv
- dict\_map.vki\_mapv
- dict\_map.vko\_mapv


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


- dict\_vrm.fst(d,v,...cond\_other\_func\_params)
- dict\_vrm.fst\_not(d,v,...cond\_other\_func\_params)
- dict\_vrm.which(d,index,v,...cond\_other\_func\_params)
- dict\_vrm.which\_not(d,index,v,...cond\_other\_func\_params)
- dict\_vrm.which\_from\_lst(d,index,v,...cond\_other\_func\_params)
- dict\_vrm.which\_not\_from\_lst(d,index,v,...cond\_other\_func\_params)
- dict\_vrm.lst(d,v,...cond\_other\_func\_params)
- dict\_vrm.lst\_not(d,v,...cond\_other\_func\_params)
- dict\_vrm.some(d,whiches,v,...cond\_other\_func\_params)
- dict\_vrm.some\_not(d,whiches,v,...cond\_other\_func\_params)
- dict\_vrm.some\_from\_lst(d,whiches,v,...cond\_other\_func\_params)
- dict\_vrm.some\_not\_from\_lst(d,whiches,v,...cond\_other\_func\_params)
- dict\_vrm.all(d,v,...cond\_other\_func\_params)
- dict\_vrm.all\_not(d,v,...cond\_other\_func\_params)


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


- dict\_grp.fgrp(d,fltr\_func)
- dict\_grp.vgrp(d)
- dict\_grp.klgrp(d)
- dict\_grp.vlgrp(d)
- dict\_grp.fgrp\_engine(rtrn\_func,d,fltr\_func)


- dict\_smirr.VMdict
- dict\_smirr.KVMdict
- dict\_smirr.is\_vmirrable(d)
- dict\_smirr.is\_kvmirrable(d)
- dict\_smirr.vmode\_validate(d,key,value)
- dict\_smirr.kvmode\_validate(d,key,value)


LICENSE
=======
- ISC

RESTRICT
=========
- only handle the first-level, dont do recursive-or-nest
- for nest-dict handle,refer to the below two:
- https://github.com/navegador5/nvtree
- https://github.com/navegador5/nvjson

