nv-dict-map
==================
- nv-dict-map  let you do map on Objcet
- kmap
- vmap


install
=======
- npm install nv-dict-map

usage
=====

example
-------

    const dict_map = require("nv-dict-map")

    var d = {1:'A',2:'B',3:'C'}


### mapk

    > dict_map.k_mapk(d,(k)=>k*10)
    { '10': 'A', '20': 'B', '30': 'C' }
    >
    
    > dict_map.v_mapk(d,(v)=>'$'+v)
    { '$A': 'A', '$B': 'B', '$C': 'C' }
    >
    > dict_map.vk_mapk(d,(v,k)=>v+'-'+k)
    { 'A-1': 'A', 'B-2': 'B', 'C-3': 'C' }
    >
    > dict_map.vki_mapk(d,(v,k,i)=>v+'-'+k*100+'-'+i)
    { 'A-100-0': 'A', 'B-200-1': 'B', 'C-300-2': 'C' }
    >


### mapv

    > dict_map.k_mapv(d,(k)=>k*10)
    { '1': 10, '2': 20, '3': 30 }
    >
    
    > dict_map.v_mapv(d,(v)=>'$'+v)
    { '1': '$A', '2': '$B', '3': '$C' }
    >
    
    > dict_map.vk_mapv(d,(v,k)=>v+'-'+k)
    { '1': 'A-1', '2': 'B-2', '3': 'C-3' }
    >
    > dict_map.vki_mapv(d,(v,k,i)=>v+'-'+k*100+'-'+i)
    { '1': 'A-100-0', '2': 'B-200-1', '3': 'C-300-2' }
    >

### advance ,such as fmap

    var f0 = (v,k,i)=>v+'-'+k*100+'-'+i
    var f1 = (v,k,i)=>v+':'+k*100+':'+i
    var f2 = (v,k,i)=>v+'_'+k*100+'_'+i
    var mapfs = [f0,f1,f2]
    > dict_map.fvki_mapv(d,mapfs)
    { '1': 'A-100-0', '2': 'B:200:1', '3': 'C_300_2' }
    >


API
====


    dict_map.f_mapk                dict_map.f_mapv                dict_map.fi_mapk               dict_map.fi_mapv
    dict_map.fio_mapk              dict_map.fio_mapv              dict_map.fk_mapk               dict_map.fk_mapv
    dict_map.fki_mapk              dict_map.fki_mapv              dict_map.fkio_mapk             dict_map.fkio_mapv
    dict_map.fko_mapk              dict_map.fko_mapv              dict_map.fo_mapk               dict_map.fo_mapv
    dict_map.fv_mapk               dict_map.fv_mapv               dict_map.fvi_mapk              dict_map.fvi_mapv
    dict_map.fvio_mapk             dict_map.fvio_mapv             dict_map.fvk_mapk              dict_map.fvk_mapv
    dict_map.fvki_mapk             dict_map.fvki_mapv             dict_map.fvkio_mapk            dict_map.fvkio_mapv
    dict_map.fvko_mapk             dict_map.fvko_mapv             dict_map.fvo_mapk              dict_map.fvo_mapv
    dict_map.i_mapk                dict_map.i_mapv                dict_map.io_mapk               dict_map.io_mapv
    dict_map.k_mapk                dict_map.k_mapv                dict_map.ki_mapk               dict_map.ki_mapv
    dict_map.kio_mapk              dict_map.kio_mapv              dict_map.ko_mapk               dict_map.ko_mapv
    dict_map.o_mapk                dict_map.o_mapv                dict_map.v_mapk                dict_map.v_mapv
    dict_map.vi_mapk               dict_map.vi_mapv               dict_map.vio_mapk              dict_map.vio_mapv
    dict_map.vk_mapk               dict_map.vk_mapv               dict_map.vki_mapk              dict_map.vki_mapv
    dict_map.vkio_mapk             dict_map.vkio_mapv             dict_map.vko_mapk              dict_map.vko_mapv
    dict_map.vo_mapk               dict_map.vo_mapv



LICENSE
=======
- ISC

RESTRICT
========
- only handle the first-level, dont do recursive-or-nest
- for nest-JSON map handle,refer to the below two:
- https://github.com/navegador5/nvtree
- https://github.com/navegador5/nvjson
