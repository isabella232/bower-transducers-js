// transducers-js 0.4.89
// http://github.com/cognitect/transducers-js
// 
// Copyright 2014 Cognitect. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License..
;(function(){var e=this;
function f(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function h(a,b){var c=a.split("."),d=e;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var g;c.length&&(g=c.shift());)c.length||void 0===b?d=d[g]?d[g]:d[g]={}:d[g]=b};var k="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"==f(a)};function l(a){return function(b){return!a.apply(null,Array.prototype.slice.call(arguments,0))}}function m(a){this.j=a}m.prototype.init=function(){throw Error("init not implemented");};m.prototype.result=function(a){return a};m.prototype.step=function(a,b){return this.j(a,b)};function n(a){return new m(a)}function p(a){this.value=a}function q(a){return new p(a)}
function r(a){return a instanceof p}function s(a){return r(a)?a.value:a}function t(a){return a}function u(a){var b=arguments.length;if(2==b){var c=arguments[0],d=arguments[1];return function(a){return c(d.apply(null,Array.prototype.slice.call(arguments,0)))}}if(2<b)return v(u,arguments[0],Array.prototype.slice.call(arguments,1))}function w(a,b){this.d=a;this.a=b}w.prototype.init=function(){return this.a.init()};w.prototype.result=function(a){return this.a.result(a)};
w.prototype.step=function(a,b){return this.a.step(a,this.d(b))};function y(a){return function(b){return new w(a,b)}}function z(a,b){this.f=a;this.a=b}z.prototype.init=function(){return this.a.init()};z.prototype.result=function(a){return this.a.result(a)};z.prototype.step=function(a,b){return this.f(b)?this.a.step(a,b):a};function A(a){return function(b){return new z(a,b)}}function B(a,b){this.c=a;this.a=b}B.prototype.init=function(){return this.a.init()};B.prototype.result=function(a){return this.a.result(a)};
B.prototype.step=function(a,b){a=0<this.c?this.a.step(a,b):r(a)?a:q(a);this.c--;return a};function C(a,b){this.f=a;this.a=b}C.prototype.init=function(){return this.a.init()};C.prototype.result=function(a){return this.a.result(a)};C.prototype.step=function(a,b){return this.f(b)?this.a.step(a,b):q(a)};function D(a,b){this.e=-1;this.c=a;this.a=b}D.prototype.init=function(){return this.a.init()};D.prototype.result=function(a){return this.a.result(a)};
D.prototype.step=function(a,b){this.e++;return 0==this.e%this.c?this.a.step(a,b):a};function E(a,b){this.c=a;this.a=b}E.prototype.init=function(){return this.a.init()};E.prototype.result=function(a){return this.a.result(a)};E.prototype.step=function(a,b){return 0<this.c?(this.c--,a):this.a.step(a,b)};function F(a,b){this.g=!0;this.f=a;this.a=b}F.prototype.init=function(){return this.a.init()};F.prototype.result=function(a){return this.a.result(a)};
F.prototype.step=function(a,b){if(this.g&&this.f(b))return a;this.g&&(this.g=!1);return this.a.step(a,b)};var G={};function H(a,b){this.d=a;this.a=b;this.b=[];this.h=G}H.prototype.init=function(){return this.a.init()};H.prototype.result=function(a){0!=this.b.length&&(a=this.a.step(a,this.b),this.b=[]);return this.a.result(a)};H.prototype.step=function(a,b){var c=this.h;this.h=val=this.d(b);if(c==G||c==val)return this.b.push(b),a;c=s(this.a.step(a,this.b));this.b=[];r(c)||this.b.push(b);return c};
function I(a,b){this.c=a;this.a=b;this.b=[]}I.prototype.init=function(){return this.a.init()};I.prototype.result=function(a){0<this.b.length&&(a=this.a.step(a,this.b),this.b=[]);return this.a.result(a)};I.prototype.step=function(a,b){this.b.push(b);if(this.c==this.b.length){var c=this.b;this.b=[];return s(this.a.step(a,c))}return a};function J(a,b){this.d=a;this.a=b}J.prototype.init=function(){return this.a.init()};J.prototype.result=function(a){return this.a.result(a)};
J.prototype.step=function(a,b){return null==this.d(b)?a:this.a.step(a,b)};function K(a,b){this.e=-1;this.d=a;this.a=b}K.prototype.init=function(){return this.a.init()};K.prototype.result=function(a){return this.a.result(a)};K.prototype.step=function(a,b){this.e++;return null==this.d(this.e,b)?a:this.a.step(a,b)};function L(a){return{init:function(){return a.init()},result:function(a){return a},step:function(b,c){var d=a.step(b,c);return r(d)?q(d):d}}}
function M(a){var b=L(a);return{init:function(){return a.init()},result:function(b){return a.result(b)},step:function(a,d){return v(b,a,d)}}}
function v(a,b,c){a="function"==typeof a?n(a):a;if("string"==typeof x){var d=a;for(a=0;a<c.length;a++)if(b=d.step(b,c.charAt(a)),r(b)){b=b.value;break}return d.result(b)}if(k(c)){d=a;for(a=0;a<c.length;a++)if(b=d.step(b,c[a]),r(b)){b=b.value;break}return d.result(b)}if(c["@@iterator"]||c.next){d=a;c["@@iterator"]&&(c=c["@@iterator"]());for(a=c.next();!a.done;){b=d.step(b,a.value);if(r(b)){b=b.value;break}a=c.next()}return d.result(b)}if("object"==f(c)){for(d in c)if(b=a.step(b,[d,c[d]]),r(b)){b=b.value;
break}return a.result(b)}throw Error("Cannot reduce instance of "+c.constructor.name);}function N(a,b,c,d){b="function"==typeof b?n(b):b;a=a(b);return v(a,c,d)}function O(a,b){return a+b}function P(a,b){a.push(b);return a}function Q(a,b){a[b[0]]=b[1];return a}function R(a,b){this.i=a;this.a=b}R.prototype.init=function(){return this.a.init()};R.prototype.result=function(a){return this.i(a)};R.prototype.step=function(a,b){return this.a.step(a,b)};
function S(){return new n(function(a,b){return q(b)})}h("transducers.reduced",q);h("transducers.isReduced",r);h("transducers.comp",u);h("transducers.complement",l);h("transducers.map",y);h("transducers.filter",A);h("transducers.remove",function(a){return A(l(a))});h("transducers.keep",function(a){return function(b){return new J(a,b)}});h("transducers.keepIndexed",function(a){return function(b){return new K(a,b)}});h("transducers.cat",M);h("transducers.mapcat",function(a){return u(y(a),M)});
h("transducers.transduce",N);h("transducers.reduce",v);h("transducers.take",function(a){return function(b){return new B(a,b)}});h("transducers.takeWhile",function(a){return function(b){return new C(a,b)}});h("transducers.takeNth",function(a){return function(b){return new D(a,b)}});h("transducers.drop",function(a){return function(b){return new E(a,b)}});h("transducers.dropWhile",function(a){return function(b){return new F(a,b)}});
h("transducers.partitionBy",function(a){return function(b){return new H(a,b)}});h("transducers.partitionAll",function(a){return function(b){return new I(a,b)}});h("transducers.into",function(a,b,c){if("string"==typeof x)return N(b,O,a,c);if(k(c))return N(b,P,a,c);if("object"==f(c))return N(b,Q,a,c)});h("transducers.toFn",function(a,b){"function"==typeof b&&(b=n(b));var c=a(b);return c.step.bind(c)});h("transducers.wrap",n);h("transducers.completing",function(a,b){b=b||t;return new R(b,a)});
h("transducers.first",S);h("transducers.ensureReduced",S);h("transducers.unreduced",S);})();
