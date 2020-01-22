(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfc81"],{"64d1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"text-center elevation-12 orange lighten-5 justify-center",attrs:{"min-width":"80%"}},[a("v-toolbar",{staticClass:"grey lighten-2 black--text mb-4"},[a("v-spacer"),a("v-toolbar-title",[t._v("Statystyki")]),a("v-spacer")],1),a("v-card",{staticClass:"text-center justify-center grey lighten-2 pa-2 ma-auto elevation-6 black--text",attrs:{"max-width":"80%"}},[a("v-row",{staticClass:"justify-center font-weight-black"},[t._v("Średni czas realizacji zamówienia: "+t._s(t.realizationTime))]),a("v-divider"),a("v-row",{staticClass:"justify-center font-weight-black pa-2"},[a("v-btn",{staticClass:"ma-2",attrs:{small:"",color:"primary"},on:{click:function(e){return e.preventDefault(),t.getReport()}}},[t._v("Pobierz aktualny raport")])],1)],1),a("v-spacer"),a("v-card",{staticClass:"ma-5"},[a("v-toolbar",{staticClass:"grey lighten-2 black--text mb-4"},[a("v-spacer"),a("v-toolbar-title",[t._v("Historia raportów")]),a("v-spacer")],1),a("v-card-actions",{staticClass:"justify-center"}),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.reportsDto,"items-per-page":5},scopedSlots:t._u([{key:"item.start",fn:function(e){var a=e.item;return[t._v(t._s(t._f("formatDate")(a.start)))]}},{key:"item.end",fn:function(e){var a=e.item;return[t._v(t._s(t._f("formatDate")(a.end)))]}},{key:"item.actions",fn:function(e){var r=e.item;return[a("v-btn",{staticClass:"ma-2",attrs:{small:"",color:"primary"},on:{click:function(e){return e.preventDefault(),t.getReportById(r.id)}}},[t._v("Wczytaj")])]}}])})],1),a("v-card",{staticClass:"ma-5"},[a("v-toolbar",{staticClass:"grey lighten-2 black--text mb-4"},[a("v-spacer"),a("v-toolbar-title",[t._v("Najbardziej popularne piwa")]),a("v-spacer")],1),a("v-divider"),[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",t._l(t.reportDto.mostPopularBeers,function(e){return a("tr",{key:e},[a("td",[t._v(t._s(e))])])}),0)]},proxy:!0}])})]],2),a("v-card",{staticClass:"mx-auto text-center",attrs:{color:"green",dark:"","max-width":"800"}},[a("v-card-text",[a("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}},[a("v-sparkline",{attrs:{value:t.reportDto.avgBeerPrice,autoLineWidth:!0,color:"rgba(255, 255, 255, .7)",height:"100",padding:"10 ","stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v("$"+t._s(e.value))]}}])})],1)],1),a("v-card-text",[a("div",{staticClass:"display-1 font-weight-thin"},[t._v("Zmiana cen piwa")])]),a("v-divider"),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{block:"",text:""},on:{click:t.createNewReport}},[t._v("Nowy raport")])],1)],1)],1)],1)},i=[],o=a("4c19"),n=a.n(o),s=a("2b0e"),c=a("c1df"),l=a.n(c),u=(a("8d57"),a("2f62"));function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach(function(e){d(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var f={name:"RaportPage",data:function(){return{headers:[{text:"Id",value:"id"},{text:"Od",value:"start"},{text:"Do",value:"end"},{text:"Ilosc uzytkownikow",value:"users"},{text:"Ilosc zamówień",value:"orders"},{text:"Potencjalny przychód",value:"potentialIncome"},{text:"Akcja",value:"actions",sortable:!1}],reportsDto:[],reportDto:{start:"",end:"",users:"",orders:"",potentialIncome:"",avgBeerPrice:[],mostPopularBeers:[]}}},methods:v({getReport:function(){var t=this;n.a.get("/api/statistic").then(function(e){t.reportDto=e.data}).catch(function(){s["default"].notify({group:"auth",type:"error",title:"Błąd",text:"Nie udało się pobrać czasu realizacji zamówienia."})})},createNewReport:function(){var t=this;n.a.get("/api/statistic/newReport").then(function(){t.getReport(),t.getAllReports()}).catch(function(){s["default"].notify({group:"auth",type:"error",title:"Błąd",text:"Nie udało się pobrać czasu realizacji zamówienia."})})},getAllReports:function(){var t=this;n.a.get("/api/statistic/all").then(function(e){t.reportsDto=e.data})},getReportById:function(t){var e=this;n.a.get("/api/statistic/"+t).then(function(t){e.reportDto=t.data})}},Object(u["b"])(["getRealizationTime"])),computed:v({},Object(u["c"])(["realizationTime"])),mounted:function(){this.getRealizationTime(),l.a.locales("PL"),this.getReport(),this.getAllReports()}},b=f,m=a("2877"),g=Object(m["a"])(b,r,i,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0cfc81.e5454669.js.map