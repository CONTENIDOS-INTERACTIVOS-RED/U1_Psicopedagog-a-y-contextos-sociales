(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sintesis","chunk-4e410830"],{"0666":function(t,e,n){},"13f0":function(t,e,n){"use strict";n("450b")},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),a=n("17c2"),s=n("9112");for(var o in i){var c=r[o],u=c&&c.prototype;if(u&&u.forEach!==a)try{s(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),a=i("forEach");t.exports=a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},3079:function(t,e,n){"use strict";n("0666")},"30b2":function(t,e,n){t.exports=n.p+"img/sintesis.7b728989.png"},"3cd8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo"}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[n("h3",{staticClass:"text-uppercase",domProps:{innerHTML:t._s("Unidad "+t.globalData.numeroUnidad+". "+t.globalData.tituloUnidad)}}),n("h2",{staticClass:"mb-0 text-uppercase",domProps:{innerHTML:t._s(t.subTitulo)}})])])])},i=[],a={name:"BannerInterno",props:{titulo:{type:String,default:""},subTitulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},s=a,o=(n("8385"),n("2877")),c=Object(o["a"])(s,r,i,!1,null,null,null);e["default"]=c.exports},"450b":function(t,e,n){},"52e5":function(t,e,n){t.exports=n.p+"img/cc.58a75e32.svg"},"60c7":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curso-main-container creditos-vista"},[n("BannerInterno",{attrs:{subTitulo:"SÍNTESIS"}}),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[r("p",{staticClass:"mb-4 mb-md-5"},[t._v("La psicopedagogía, como disciplina clave en el ámbito educativo, ofrece herramientas teóricas y prácticas que permiten al docente resignificar su labor en contextos diversos, abordando tanto las necesidades individuales como colectivas de los estudiantes, y promoviendo un aprendizaje inclusivo y significativo.")]),r("figure",[r("img",{attrs:{src:n("30b2"),alt:"Texto que describa la imagen"}})])])}],a=(n("d3b7"),n("159b"),n("3cd8")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[t.allRound&&"footer__all-round"]},[n("div",{staticClass:"row align-items-center justify-content-center"},[t._m(0),n("div",{staticClass:"col-12 col-sm"},[n("p",{staticClass:"mb-2 text-small"},[t._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),n("p",{staticClass:"mb-0 text-small"},[t._v(" Base v"+t._s(t.versiones.base)+" - Paquete v"+t._s(t.versiones.pkg))])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-auto mb-2 mb-sm-0"},[r("img",{attrs:{src:n("52e5")}})])}],c={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},u=c,l=(n("13f0"),n("2877")),d=Object(l["a"])(u,s,o,!1,null,null,null),f=d.exports,p={name:"Creditos",components:{BannerInterno:a["default"],Footer:f},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos},creditosAdicionales:function(){return this.$config.creditosAdicionales}},methods:{renderText:function(t){var e="";return Array.isArray(t)?t.forEach((function(t,n){e+=(n?"<br/>":"")+t})):e+=t,e}}},b=p,v=(n("3079"),Object(l["a"])(b,r,i,!1,null,null,null));e["default"]=v.exports},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),a=n("b622"),s=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8385:function(t,e,n){"use strict";n("d36b")},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),a=n("7b0b"),s=n("50c4"),o=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=7==t,p=5==t||d;return function(b,v,m,g){for(var h,E,_=a(b),C=i(_),y=r(v,m,3),S=s(C.length),x=0,I=g||o,O=e?I(b,S):n||f?I(b,0):void 0;S>x;x++)if((p||x in C)&&(h=C[x],E=y(h,x,_),t))if(e)O[x]=E;else if(E)switch(t){case 3:return!0;case 5:return h;case 6:return x;case 2:c.call(O,h)}else switch(t){case 4:return!1;case 7:c.call(O,h)}return d?-1:u||l?l:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},d36b:function(t,e,n){},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=sintesis.0d58fb53.js.map