(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0decdf"],{"86e0":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"justify-center"},[r("v-data-table",{staticClass:"elevation-12 orange lighten-5 mt-4 mb-4",attrs:{headers:e.headers,items:e.beers,"items-per-page":5},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{staticClass:" orange lighten-3"},[r("v-toolbar-title",[e._v("Piwa dostępne w menu")]),r("v-divider",{staticClass:"pa-5",attrs:{inset:"",vertical:""}}),r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-btn",e._g({staticClass:"ma-2",attrs:{color:"primary",dark:""}},a),[e._v("Dodaj piwo")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{staticClass:"elevation-12 orange lighten-5"},[r("v-toolbar",{staticClass:" orange lighten-3"},[r("v-toolbar-title",{staticClass:"headline"},[e._v("Dodaj nowe piwo")])],1),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Marka piwa*",type:"text",required:""},model:{value:e.beer.brand,callback:function(t){e.$set(e.beer,"brand",t)},expression:"beer.brand"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Opis piwa*",type:"text",required:""},model:{value:e.beer.description,callback:function(t){e.$set(e.beer,"description",t)},expression:"beer.description"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-file-input",{attrs:{type:"file",label:"Wybierz zdjęcie..."},on:{change:e.onFileChange},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Cena*: ",type:"number",min:"0",required:""},model:{value:e.beer.price,callback:function(t){e.$set(e.beer,"price",t)},expression:"beer.price"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Ilość*: ",type:"number",step:"1",min:"1",required:""},model:{value:e.beer.quantity,callback:function(t){e.$set(e.beer,"quantity",t)},expression:"beer.quantity"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Cena minimalna*: ",type:"number",step:"1",min:"0",required:""},model:{value:e.beer.minimalPrice,callback:function(t){e.$set(e.beer,"minimalPrice",t)},expression:"beer.minimalPrice"}})],1)],1)],1),r("small",[e._v("Pola oznaczone '*' są wymagane")])],1),r("v-card-actions",[r("v-col",[r("v-row",[r("v-btn",{attrs:{color:"error darken-1"},on:{click:function(t){e.dialog=!1}}},[e._v("Zamknij")]),r("v-spacer"),r("v-btn",{attrs:{color:"success darken-1"},on:{click:e.addNewBeer}},[e._v("Zapisz")])],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var a=t.item;return[r("v-btn",{staticClass:"ma-2",attrs:{small:"",color:"error"},on:{click:function(t){return t.preventDefault(),e.deleteBeer(a.id)}}},[e._v("Usuń")]),r("v-btn",{staticClass:"ma-2",attrs:{small:"",color:"primary"},on:{click:function(t){return t.preventDefault(),e.editBeer(a.id)}}},[e._v("Edytuj")])]}},{key:"item.imgUrl",fn:function(e){var t=e.item;return[r("v-img",{staticClass:"white--text",attrs:{"max-height":"100  px","aspect-ratio":"1",src:t.imgUrl}})]}}])})],1)},i=[],n=r("4c19"),l=r("2f62");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={name:"BeerEditPage",data:function(){return{headers:[{text:"Id",value:"id"},{text:"Opis",value:"description"},{text:"Marka",value:"brand"},{text:"Cena",value:"price"},{text:"Ilosc",value:"quantity"},{text:"Zdjecie",value:"imgUrl"},{text:"Cena minimalna",value:"minimalPrice"},{text:"Akcja",value:"actions",sortable:!1}],dialog:!1,file:null,dialogImgUrl:null,beer:{description:"",brand:"",price:"",quantity:""}}},computed:s({},Object(l["c"])(["beers"])),methods:s({},Object(l["b"])(["fetchBeers","deleteBeer"]),{onFileChange:function(){var e=this,t=new FileReader;t.onload=function(){e.dialogImgUrl=t.result},t.readAsDataURL(this.file)},addNewBeer:function(){var e=this,t=new FormData;t.append("file",this.file),t.append("beerDto",JSON.stringify(this.beer)),n["a"].post("/api/beer",t).then(function(){e.fetchBeers(),e.file=null,e.dialogImgUrl=null,e.beer={description:"",brand:"",price:"",quantity:"",minimalPrice:""},e.dialog=!1,e.$notify({group:"auth",type:"success",title:"OK",text:"Dodano pomyslnie"})})},editBeer:function(e){var t=this;n["a"].get("/api/beer/"+e).then(function(e){t.fetchBeers(),t.beer=e.data,t.dialog=!0})}}),created:function(){this.fetchBeers()}},d=u,p=r("2877"),b=Object(p["a"])(d,a,i,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0decdf.b1d90d14.js.map