(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72d5c4af"],{"2f4f":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"text-center elevation-12 orange lighten-5  justify-center",attrs:{"min-width":"80%"}},[r("v-toolbar",{staticClass:"grey lighten-2 black--text mb-4"},[r("v-spacer"),r("v-toolbar-title",[t._v("Numer zamowienia: "+t._s(t.order.id))]),r("v-spacer")],1),r("v-card",{staticClass:"text-center justify-center grey lighten-2 pa-2 ma-auto elevation-6 black--text",attrs:{"max-width":"80%"}},[r("v-row",{staticClass:"justify-center font-weight-black "},[r("ul",t._l(t.order.orderItemsDto,function(e,a){return r("li",{key:a,staticClass:"pa-2"},[t._v("\n          "+t._s(e.beerDto.brand)+" - Ilość: "+t._s(e.quantity)+"\n        ")])}),0)]),r("v-divider"),r("v-row",{staticClass:"justify-center font-weight-black pa-2"},[t._v("\n      Wartośc zamówienia: "+t._s(t.order.totalPrice)+" Kufli\n    ")])],1),r("v-card-text",["INPROGRESS"===t.order.status?r("v-toolbar",{staticClass:"yellow lighten-2 black--text ma-3"},[r("v-spacer"),"INPROGRESS"===t.order.status?r("v-toolbar-title",[t._v("ZAMOWIENIE W TRAKCIE REALIZACJI")]):t._e(),r("v-spacer")],1):t._e(),"NOT_PAID"===t.order.status?r("v-toolbar",{staticClass:"red lighten-2 black--text ma-3"},[r("v-spacer"),r("v-toolbar-title",[t._v("ZAMOWIENIE NIE OPLACONE")]),r("v-spacer")],1):t._e(),"CASH_PAID"===t.order.status?r("v-toolbar",{staticClass:"orange lighten-2 black--text ma-3"},[r("v-spacer"),r("v-toolbar-title",[t._v("ZAMOWIENIE CZEKA NA PLATNOSC PRZY BARZE")]),r("v-spacer")],1):t._e(),"COMPLETED"===t.order.status?r("v-toolbar",{staticClass:"green lighten-2 black--text ma-3"},[r("v-spacer"),r("v-toolbar-title",[t._v("ZAMOWIENIE ZAKOŃCZONE I OCZEKUJE NA KLIENTA")]),r("v-spacer")],1):t._e(),"CLOSED"===t.order.status?r("v-toolbar",{staticClass:"grey lighten-2 black--text ma-3"},[r("v-spacer"),r("v-toolbar-title",[t._v("REALIZACJA ZAMOWIENIA ZAMKNIETA")]),r("v-spacer")],1):t._e(),"QUEUED"===t.order.status?r("v-toolbar",{staticClass:"blue lighten-2 black--text ma-3"},[r("v-spacer"),r("v-toolbar-title",[t._v("ZAMOWIENIE W KOLEJCE")]),r("v-spacer")],1):t._e()],1),"CLOSED"!==t.order.status&&"NOT_PAID"!==t.order.status?r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{staticClass:"grey lighten-2",on:{click:function(e){return t.setOrderStatus({orderId:t.order.id,status:"CLOSED"})}}},[t._v("ZAKONCZ")]),"CASH_PAID"!==t.order.status?r("v-btn",{staticClass:"green lighten-2 ",on:{click:function(e){return t.setOrderStatus({orderId:t.order.id,status:"COMPLETED"})}}},[t._v("ZREALIZUJ")]):t._e(),"CASH_PAID"!==t.order.status?r("v-btn",{staticClass:"yellow lighten-2",on:{click:function(e){return t.setOrderStatus({orderId:t.order.id,status:"INPROGRESS"})}}},[t._v("DODAJ DO REALIZACJI")]):t._e(),"CASH_PAID"===t.order.status?r("v-btn",{staticClass:"blue lighten-2",on:{click:function(e){return t.setOrderStatus({orderId:t.order.id,status:"QUEUED"})}}},[t._v("DODAJ DO KOLEJKI")]):t._e()],1):t._e()],1)},s=[],n=r("2f62");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach(function(e){i(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={props:{order:{}},methods:c({},Object(n["b"])(["setOrderStatus"]))},u=l,d=r("2877"),O=Object(d["a"])(u,a,s,!1,null,null,null);e["a"]=O.exports},eedd:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",t._l(t.orders,function(t,e){return r("v-row",{key:e,staticClass:"sm-4",attrs:{justify:"center"}},[r("OrderCard",{attrs:{order:t}})],1)}),1)},s=[],n=r("2f4f"),o=r("2f62");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach(function(e){l(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={name:"OrderViewAdmin",data:function(){return{}},methods:i({},Object(o["b"])(["fetchAllOrders"])),computed:i({},Object(o["c"])(["orders"])),created:function(){this.fetchAllOrders()},components:{OrderCard:n["a"]}},d=u,O=r("2877"),b=Object(O["a"])(d,a,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-72d5c4af.2c516571.js.map