(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3884:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(s){u=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}},t.exports.__esModule=!0,t.exports.default=t.exports},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},3038:function(t,e,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},319:function(t,e,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},5658:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function o(t,e){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],o(r),o(n))}function a(t){try{return decodeURIComponent(t)}catch(a){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=o(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(e){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),s=0;s<u.length;s++){var c=u[s];t=t.replace(new RegExp(c,"g"),r[c])}return t}(t)}}},3297:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),a=0;a<n.length;a++){var i=n[a],u=t[i];(o?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2163:function(t,e,r){"use strict";var n=r(9713),o=r(3038),a=r(319);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=r(4159),c=r(5658),l=r(187),f=r(3297),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(t,e){return e.encode?e.strict?s(t):encodeURIComponent(t):t}function y(t,e){return e.decode?c(t):t}function m(t){return Array.isArray(t)?t.sort():"object"==typeof t?m(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function v(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function x(t){var e=(t=v(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function b(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return function(t,r,n){e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var o="string"==typeof r&&r.includes(t.arrayFormatSeparator),a="string"==typeof r&&!o&&y(r,t).includes(t.arrayFormatSeparator);r=a?y(r,t):r;var i=o||a?r.split(t.arrayFormatSeparator).map((function(e){return y(e,t)})):null===r?r:y(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return y(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=a}else n[e]=r?y(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var a,u=i(t.split("&"));try{for(u.s();!(a=u.n()).done;){var s=a.value;if(""!==s){var c=l(e.decode?s.replace(/\+/g," "):s,"="),f=o(c,2),p=f[0],g=f[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?g:y(g,e),r(y(p,e),g,n)}}}catch(O){u.e(O)}finally{u.f()}for(var v=0,x=Object.keys(n);v<x.length;v++){var h=x[v],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=b(w[Z],e)}else n[h]=b(w,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=m(r):t[e]=r,t}),Object.create(null))}e.extract=x,e.parse=h,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(e,t),"[",o,"]"].join("")]:[[g(e,t),"[",g(o,t),"]=",g(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(e,t),"[]"].join("")]:[[g(e,t),"[]=",g(n,t)].join("")])}};case"colon-list-separator":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(e,t),":list="].join("")]:[[g(e,t),":list=",g(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[g(r,t),e,g(o,t)].join("")]:[[n,g(o,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[g(e,t)]:[[g(e,t),"=",g(n,t)].join("")])}}}}(e),o={},i=0,u=Object.keys(t);i<u.length;i++){var s=u[i];r(s)||(o[s]=t[s])}var c=Object.keys(o);return!1!==e.sort&&c.sort(e.sort),c.map((function(r){var o=t[r];return void 0===o?"":null===o?g(r,e):Array.isArray(o)?0===o.length&&"bracket-separator"===e.arrayFormat?g(r,e)+"[]":o.reduce(n(r),[]).join("&"):g(r,e)+"="+g(o,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=l(t,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(x(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:y(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=v(t.url).split("?")[0]||"",a=e.extract(t.url),i=e.parse(a,{sort:!1}),u=Object.assign(i,t.query),s=e.stringify(u,r);s&&(s="?".concat(s));var c=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(c="#".concat(r[p]?g(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(o).concat(s).concat(c)},e.pick=function(t,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=e.parseUrl(t,o),i=a.url,u=a.query,s=a.fragmentIdentifier;return e.stringifyUrl({url:i,query:f(u,r),fragmentIdentifier:s},o)},e.exclude=function(t,r,n){var o=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,o,n)}},187:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},4159:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},9249:function(t,e,r){"use strict";r.d(e,{pQ:function(){return u},MQ:function(){return o},jo:function(){return b},c6:function(){return v}});var n=r(7294),o=function(t,e,r){void 0===r&&(r=10);var o=(0,n.useRef)(null),a=(0,n.useRef)(null),i=(0,n.useState)(1),u=i[0],s=i[1],c=(0,n.useMemo)((function(){return"All"!==t?e.filter((function(e){var r=e.node.frontmatter,n=r.categories,o=r.options;return!(null==o?void 0:o.hide)&&(n.reduce((function(t,e){return t?t+="/"+e:t=""+e,t}),"")===t||n.includes(t))})):e}),[t]);(0,n.useEffect)((function(){a.current=new IntersectionObserver((function(t,e){t[0].isIntersecting&&(s((function(t){return t+1})),e.unobserve(t[0].target))}))}),[]),(0,n.useEffect)((function(){return s(1)}),[t]),(0,n.useEffect)((function(){var t=r*u>=c.length;if(o.current&&o.current.children.length&&a.current&&!t){var e=o.current.children,n=e[e.length-1];a.current.observe(n)}}),[u,t]);var l=c.slice(0,u*r);return{containerRef:o,postList:l}},a=r(5317),i=r(8933),u=function(t){var e=(0,n.useState)(!1),r=e[0],o=e[1],u=(0,a.useMediaQuery)({query:(0,i.Wf)({type:t,isAtMedia:!1})});return(0,n.useEffect)((function(){return o((function(){return u}))}),[u]),r},s=r(3433),c=r(3366),l=r(136),f=r(9611);r(3728);function p(){p=function(t,e){return new r(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function r(t,n,o){var a=new RegExp(t,n);return e.set(a,o||e.get(t)),(0,f.Z)(a,r.prototype)}function n(t,r){var n=e.get(r);return Object.keys(n).reduce((function(e,r){return e[r]=t[n[r]],e}),Object.create(null))}return(0,l.Z)(r,RegExp),r.prototype.exec=function(e){var r=t.exec.call(this,e);return r&&(r.groups=n(r,this)),r},r.prototype[Symbol.replace]=function(r,o){if("string"==typeof o){var a=e.get(this);return t[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+a[e]})))}if("function"==typeof o){var i=this;return t[Symbol.replace].call(this,r,(function(){var t=arguments;return"object"!=typeof t[t.length-1]&&(t=[].slice.call(t)).push(n(t,i)),o.apply(this,t)}))}return t[Symbol.replace].call(this,r,o)},p.apply(this,arguments)}var d=function(t){var e=t.target,r=t.duration,n=void 0===r?1:r,o=t.idx,a=t.direction,i=t.isMarginAuto,u=(t.isIdxDelay&&(void 0!==o&&o>=0)?(o+1)*n:n)+"s",s="left"===a;i&&(s?e.style.marginLeft="auto":e.style.marginRight="auto"),e.style.position="relative",e.style.animation=u+" animations__slide--"+(s?"left":"right")},g=function(t){var e,r=p(/([0-9A-Z_a-z]+)?((\.|#)([0-9A-Z_a-z]+))?/gi,{TAG:1,TYPE:3,NAME:4}),n=(0,s.Z)(t.matchAll(r));return n&&n.length&&null!==(e=n.filter((function(t){if(t.groups)return!Object.values(t.groups).every((function(t){return!t}))}))[0].groups)&&void 0!==e?e:null},y=function(t,e){var r=t.tagName,n=t.classList,o=t.id,a=e.find((function(t){var e;if(t){var a=t.TYPE,i=t.NAME,u=null===(e=t.TAG)||void 0===e?void 0:e.toUpperCase(),s=a&&"#"===a&&o===i,c=a&&"."===a&&i&&n.contains(i);return u?s||c?u===r&&(s||c):u===r:s||c}}));return Boolean(a)},m=["target","type","duration"],v=function(t){var e=t.eleRef,r=t.options,o=(r=void 0===r?{duration:1.2,type:"blink",allowSelectors:["div","ul","li"]}:r).type,a=void 0===o?"blink":o,i=r.duration,u=void 0===i?1.2:i,l=r.isIdxDelay,f=r.allowSelectors,p=void 0===f?["div","ul","li"]:f,v=r.excludeOptions,x=t.observeOptions,b=void 0===x?{threshold:.2}:x,h=t.deps,w=void 0===h?[]:h,k=(0,n.useRef)(null),j=(0,n.useCallback)((function(t){var e=t.target,r=t.type,n=t.duration,o=(0,c.Z)(t,m);switch(r){case"left":d(Object.assign({},o,{target:e,duration:n,direction:"left"}));break;case"right":d(Object.assign({},o,{target:e,duration:n,direction:"right"}));break;case"blink":!function(t){var e=t.target,r=t.isIdxDelay,n=t.duration,o=void 0===n?1.2:n,a=t.idx,i=(r&&void 0!==a&&a>=0?(a+1)*o:o)+"s";e.style.animation=i+" animations__blink"}(Object.assign({},o,{target:e,duration:n}));break;case"zigzag":if(!(o.idx>=0))break;var a=(o.idx+1)%2==0?"right":"left";d(Object.assign({},o,{target:e,duration:n,direction:a}))}e.style.visibility="visible"}),[]),Z=(0,n.useCallback)((function(t,r){t.forEach((function(t){if(t.isIntersecting){var n=t.target,o=e.current&&function(t){var e,r=t.root,n=t.target;return function t(r){if(r&&void 0===e){var o=Array.from(r.children);if(o&&o.length)for(var a=0;a<o.length;a++){var i=o[a];i===n?e=a:t(i)}}}(r),e}({root:e.current,target:n})||0;j({target:n,duration:u,type:a,idx:o,isIdxDelay:l});var i=1e3*(l?(o+1)*u:u);window.setTimeout((function(){return function(t){var e=t.style,r=e.position,n=e.animation,o=e.visibility,a=e.marginLeft,i=e.marginRight;r&&(t.style.position=""),n&&(t.style.animation=""),o&&(t.style.visibility=""),a&&(t.style.marginLeft=""),i&&(t.style.marginRight="")}(n)}),i),r.unobserve(n)}}))}),[a,u,l]);(0,n.useEffect)((function(){k.current=new IntersectionObserver(Z,b)}),[Z]),(0,n.useEffect)((function(){if(e&&e.current){var t=w&&w.length>0;!function(t){var e=t.root,r=t.observer,n=t.allowSelectors,o=t.excludeOptions,a=t.checkAlreadyObserve,i=null==o?void 0:o.excludeSelectors,u=null==o?void 0:o.isExceptTarget,s=null==n?void 0:n.map((function(t){return g(t)})),c=null==i?void 0:i.map((function(t){return g(t)})),l=function(t,e){t.style.visibility="hidden",a&&e.takeRecords().find((function(e){return e.target===t}))||e.observe(t)};!function t(e){if(e&&r){var n=Array.from(e.children);n&&n.length&&n.forEach((function(e){c&&y(e,c)?u&&t(e):(t(e),s?y(e,s)&&l(e,r):l(e,r))}))}}(e)}({root:e.current,observer:k.current,allowSelectors:p,excludeOptions:v,checkAlreadyObserve:t})}}),[].concat((0,s.Z)(w),[Z]))},x=r(2823),b=function(t){void 0===t&&(t=100);var e=(0,n.useState)(!1),r=e[0],o=e[1],a=(0,n.useState)(null),i=a[0],u=a[1],s=(0,n.useCallback)((function(){return o((function(){return 0===window.scrollY}))}),[]);return(0,n.useEffect)((function(){return s(),window.addEventListener("scroll",(0,x.P2)({timer:i,setTimer:u,fn:s,delay:t})),function(){return window.removeEventListener("scroll",(0,x.P2)({timer:i,setTimer:u,fn:s,delay:t}))}}),[s,t]),r}},7983:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return $}});var n=r(2163),o=r(3366),a=r(2254),i=r(4720),u=r(3433),s=r(7294),c=r(7462),l=r(6661),f=r(1597),p=r(4382),d=["active","to"];var g=(0,l.Z)("div",{target:"e1cgew81"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),y=(0,l.Z)((function(t){t.active;var e=t.to,r=(0,o.Z)(t,d);return(0,p.tZ)(f.rU,(0,c.Z)({to:e},r))}),{target:"e1cgew80"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(t){return t.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),m=function(t){var e=t.selectedCategory,r=t.postData,n=t.excludeCategories,o=(0,s.useMemo)((function(){return r.reduce((function(t,e){var r=e.node.frontmatter,o=r.categories,a=r.options,i=null==a?void 0:a.hide,u=o&&o.some((function(t){return t&&n.includes(t)}));if(i||u)return t;var s="";return o.forEach((function(e){var r;if(s&&(s+="/"+e),s||(s=""+e),t.has(s)){var n,o=null!==(n=t.get(s))&&void 0!==n?n:0;t.set(s,o+1)}else t.set(s,1);t.set("All",(null!==(r=t.get("All"))&&void 0!==r?r:0)+1)})),t}),new Map([["All",0]]))}),[r]),a=(0,s.useMemo)((function(){return(0,u.Z)(o.entries()).map((function(t){var r=t[0],o=t[1];if(!n.includes(r)){var a=r===e;return(0,p.tZ)(y,{to:"/?category="+r,active:a,key:r},"#",r,"(",o,")")}}))}),[e,o]);return(0,p.tZ)(g,null,a)},v=r(396);var x=function(t){var e=t.profileImage;return(0,p.tZ)(b,{image:e,alt:"Profile Image"})},b=(0,l.Z)(v.G,{target:"e1dr1hge0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"});var h=(0,l.Z)("div",{target:"e1sa75994"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),w=(0,l.Z)("div",{target:"e1sa75993"})(""),k=(0,l.Z)("div",{target:"e1sa75992"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),j=(0,l.Z)("p",{target:"e1sa75991"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),Z=(0,l.Z)("p",{target:"e1sa75990"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),O=function(t){var e=t.text,r=t.gatsbyImageData,n=e.split("\n"),o=n[0],a=n[1];return(0,p.tZ)(h,null,(0,p.tZ)(k,null,(0,p.tZ)(x,{profileImage:r}),(0,p.tZ)(w,null,(0,p.tZ)(j,null,o),(0,p.tZ)(Z,null,a))))};var A=(0,l.Z)(f.rU,{target:"e13a7hbv7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),I=(0,l.Z)(v.G,{target:"e13a7hbv6"})({name:"jhwfkm",styles:"width:100%;height:250px;border-radius:10px 10px 0 0"}),S=(0,l.Z)("div",{target:"e13a7hbv5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),E=(0,l.Z)("div",{target:"e13a7hbv4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),_=(0,l.Z)("div",{target:"e13a7hbv3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),C=(0,l.Z)("div",{target:"e13a7hbv2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),M=(0,l.Z)("div",{target:"e13a7hbv1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),F=(0,l.Z)("div",{target:"e13a7hbv0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),R=function(t){var e=t.title,r=t.date,n=t.categories,o=t.summary,a=t.thumbnail,i=t.link,u=null==a?void 0:a.childImageSharp.gatsbyImageData;return(0,p.tZ)(A,{to:i},u&&(0,p.tZ)(I,{image:u,alt:"Post Item Image"}),(0,p.tZ)(S,null,(0,p.tZ)(E,null,e),(0,p.tZ)(_,null,r),(0,p.tZ)(C,null,n.map((function(t){return(0,p.tZ)(M,{key:t},t)}))),o&&(0,p.tZ)(F,null,o)))},D=r(9249);var N=function(t){var e=t.selectedCategory,r=t.postData,n=t.excludeCategories,o=(0,D.MQ)(e,r),a=o.containerRef,i=o.postList,u=(0,s.useMemo)((function(){return i.map((function(t){var e=t.node,r=e.id,o=e.frontmatter,a=e.fields,i=o.options,u=o.categories,s=null==i?void 0:i.hide,l=u&&u.some((function(t){return t&&n.includes(t)}));if(!s&&!l){var f="/posts"+a.slug;return(0,p.tZ)(R,(0,c.Z)({},Object.assign({},o,{link:f}),{key:r}))}}))}),[i]);return(0,p.tZ)(U,{ref:a},u)},U=(0,l.Z)("div",{target:"e1h3hf820"})({name:"94nan2",styles:"display:grid;grid-template-columns:1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){width:100%;padding:50px 20px;}"}),z=["postData","selectedCategory","profileImg","configData"],T=function(t){var e=t.postData,r=t.selectedCategory,n=t.profileImg,u=t.configData,s=(0,o.Z)(t,z),c=n.childImageSharp.gatsbyImageData,l=n.publicURL,f=u.introduce,d=u.footer,g=u.excludeCategories,y=Object.assign({},f,{gatsbyImageData:c}),v={selectedCategory:r,postData:e,excludeCategories:g};return(0,p.tZ)(a.Z,Object.assign({},s,{image:l}),(0,p.tZ)(i.ZL,null),(0,p.tZ)(i.tz,null,(0,p.tZ)(O,y),(0,p.tZ)(m,v),(0,p.tZ)(N,v)),(0,p.tZ)(i.$_,d))},L=r(8566),$=function(t){var e=t.location.search,r=n.parse(e),o="string"==typeof r.category&&r.category?r.category:"All",a=(0,L.useCommonMetaData)(),i=(0,L.Pr)(),u=i.metaData,s=i.profileImg,c=(0,L.iA)(),l=(0,L.A9)(),f=Object.assign({},u,a),d={postData:c,selectedCategory:o,profileImg:s,configData:l},g=Object.assign({},f,d);return(0,p.tZ)(T,g)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-27df5e0b955fd0e843df.js.map