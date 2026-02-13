'use strict';Object.defineProperty(exports,'__esModule',{value:true});var react=require('react'),ogl=require('ogl'),jsxRuntime=require('react/jsx-runtime');var He=Object.defineProperty,Ye=Object.defineProperties;var qe=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;var ke=(e,r,o)=>r in e?He(e,r,{enumerable:true,configurable:true,writable:true,value:o}):e[r]=o,E=(e,r)=>{for(var o in r||(r={}))$e.call(r,o)&&ke(e,o,r[o]);if(we)for(var o of we(r))Xe.call(r,o)&&ke(e,o,r[o]);return e},Q=(e,r)=>Ye(e,qe(r));function _e(e){var r,o,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(o=_e(e[r]))&&(t&&(t+=" "),t+=o);}else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}function Re(){for(var e,r,o=0,t="",a=arguments.length;o<a;o++)(e=arguments[o])&&(r=_e(e))&&(t&&(t+=" "),t+=r);return t}var Je=(e,r)=>{let o=new Array(e.length+r.length);for(let t=0;t<e.length;t++)o[t]=e[t];for(let t=0;t<r.length;t++)o[e.length+t]=r[t];return o},Ke=(e,r)=>({classGroupId:e,validator:r}),Ce=(e=new Map,r=null,o)=>({nextPart:e,validators:r,classGroupId:o});var Ge=[],Qe="arbitrary..",Ze=e=>{let r=oo(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return {getClassGroupId:n=>{if(n.startsWith("[")&&n.endsWith("]"))return eo(n);let i=n.split("-"),c=i[0]===""&&i.length>1?1:0;return Te(i,c,r)},getConflictingClassGroupIds:(n,i)=>{if(i){let c=t[n],f=o[n];return c?f?Je(f,c):c:f||Ge}return o[n]||Ge}}},Te=(e,r,o)=>{if(e.length-r===0)return o.classGroupId;let a=e[r],d=o.nextPart.get(a);if(d){let f=Te(e,r+1,d);if(f)return f}let n=o.validators;if(n===null)return;let i=r===0?e.join("-"):e.slice(r).join("-"),c=n.length;for(let f=0;f<c;f++){let h=n[f];if(h.validator(i))return h.classGroupId}},eo=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{let r=e.slice(1,-1),o=r.indexOf(":"),t=r.slice(0,o);return t?Qe+t:void 0})(),oo=e=>{let{theme:r,classGroups:o}=e;return ro(o,r)},ro=(e,r)=>{let o=Ce();for(let t in e){let a=e[t];de(a,o,t,r);}return o},de=(e,r,o,t)=>{let a=e.length;for(let d=0;d<a;d++){let n=e[d];to(n,r,o,t);}},to=(e,r,o,t)=>{if(typeof e=="string"){ao(e,r,o);return}if(typeof e=="function"){no(e,r,o,t);return}so(e,r,o,t);},ao=(e,r,o)=>{let t=e===""?r:ze(r,e);t.classGroupId=o;},no=(e,r,o,t)=>{if(lo(e)){de(e(t),r,o,t);return}r.validators===null&&(r.validators=[]),r.validators.push(Ke(o,e));},so=(e,r,o,t)=>{let a=Object.entries(e),d=a.length;for(let n=0;n<d;n++){let[i,c]=a[n];de(c,ze(r,i),o,t);}},ze=(e,r)=>{let o=e,t=r.split("-"),a=t.length;for(let d=0;d<a;d++){let n=t[d],i=o.nextPart.get(n);i||(i=Ce(),o.nextPart.set(n,i)),o=i;}return o},lo=e=>"isThemeGetter"in e&&e.isThemeGetter===true,io=e=>{if(e<1)return {get:()=>{},set:()=>{}};let r=0,o=Object.create(null),t=Object.create(null),a=(d,n)=>{o[d]=n,r++,r>e&&(r=0,t=o,o=Object.create(null));};return {get(d){let n=o[d];if(n!==void 0)return n;if((n=t[d])!==void 0)return a(d,n),n},set(d,n){d in o?o[d]=n:a(d,n);}}};var co=[],Ae=(e,r,o,t,a)=>({modifiers:e,hasImportantModifier:r,baseClassName:o,maybePostfixModifierPosition:t,isExternal:a}),uo=e=>{let{prefix:r,experimentalParseClassName:o}=e,t=a=>{let d=[],n=0,i=0,c=0,f,h=a.length;for(let R=0;R<h;R++){let v=a[R];if(n===0&&i===0){if(v===":"){d.push(a.slice(c,R)),c=R+1;continue}if(v==="/"){f=R;continue}}v==="["?n++:v==="]"?n--:v==="("?i++:v===")"&&i--;}let x=d.length===0?a:a.slice(c),k=x,P=false;x.endsWith("!")?(k=x.slice(0,-1),P=true):x.startsWith("!")&&(k=x.slice(1),P=true);let C=f&&f>c?f-c:void 0;return Ae(d,P,k,C)};if(r){let a=r+":",d=t;t=n=>n.startsWith(a)?d(n.slice(a.length)):Ae(co,false,n,void 0,true);}if(o){let a=t;t=d=>o({className:d,parseClassName:a});}return t},po=e=>{let r=new Map;return e.orderSensitiveModifiers.forEach((o,t)=>{r.set(o,1e6+t);}),o=>{let t=[],a=[];for(let d=0;d<o.length;d++){let n=o[d],i=n[0]==="[",c=r.has(n);i||c?(a.length>0&&(a.sort(),t.push(...a),a=[]),t.push(n)):a.push(n);}return a.length>0&&(a.sort(),t.push(...a)),t}},mo=e=>E({cache:io(e.cacheSize),parseClassName:uo(e),sortModifiers:po(e)},Ze(e)),fo=/\s+/,ho=(e,r)=>{let{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:a,sortModifiers:d}=r,n=[],i=e.trim().split(fo),c="";for(let f=i.length-1;f>=0;f-=1){let h=i[f],{isExternal:x,modifiers:k,hasImportantModifier:P,baseClassName:C,maybePostfixModifierPosition:R}=o(h);if(x){c=h+(c.length>0?" "+c:c);continue}let v=!!R,M=t(v?C.substring(0,R):C);if(!M){if(!v){c=h+(c.length>0?" "+c:c);continue}if(M=t(C),!M){c=h+(c.length>0?" "+c:c);continue}v=false;}let A=k.length===0?"":k.length===1?k[0]:d(k).join(":"),y=P?A+"!":A,_=y+M;if(n.indexOf(_)>-1)continue;n.push(_);let T=a(M,v);for(let B=0;B<T.length;++B){let V=T[B];n.push(y+V);}c=h+(c.length>0?" "+c:c);}return c},go=(...e)=>{let r=0,o,t,a="";for(;r<e.length;)(o=e[r++])&&(t=Se(o))&&(a&&(a+=" "),a+=t);return a},Se=e=>{if(typeof e=="string")return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=Se(e[t]))&&(o&&(o+=" "),o+=r);return o},bo=(e,...r)=>{let o,t,a,d,n=c=>{let f=r.reduce((h,x)=>x(h),e());return o=mo(f),t=o.cache.get,a=o.cache.set,d=i,i(c)},i=c=>{let f=t(c);if(f)return f;let h=ho(c,o);return a(c,h),h};return d=n,(...c)=>d(go(...c))},vo=[],g=e=>{let r=o=>o[e]||vo;return r.isThemeGetter=true,r},Ie=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ee=/^\((?:(\w[\w-]*):)?(.+)\)$/i,xo=/^\d+\/\d+$/,yo=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,wo=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ko=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,_o=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ro=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,U=e=>xo.test(e),m=e=>!!e&&!Number.isNaN(Number(e)),O=e=>!!e&&Number.isInteger(Number(e)),ie=e=>e.endsWith("%")&&m(e.slice(0,-1)),I=e=>yo.test(e),Go=()=>true,Ao=e=>wo.test(e)&&!ko.test(e),Oe=()=>false,Po=e=>_o.test(e),Mo=e=>Ro.test(e),Co=e=>!s(e)&&!l(e),To=e=>j(e,Le,Oe),s=e=>Ie.test(e),L=e=>j(e,Fe,Ao),ce=e=>j(e,Oo,m),Pe=e=>j(e,Be,Oe),zo=e=>j(e,Ne,Mo),Z=e=>j(e,Ue,Po),l=e=>Ee.test(e),D=e=>W(e,Fe),So=e=>W(e,Bo),Me=e=>W(e,Be),Io=e=>W(e,Le),Eo=e=>W(e,Ne),ee=e=>W(e,Ue,true),j=(e,r,o)=>{let t=Ie.exec(e);return t?t[1]?r(t[1]):o(t[2]):false},W=(e,r,o=false)=>{let t=Ee.exec(e);return t?t[1]?r(t[1]):o:false},Be=e=>e==="position"||e==="percentage",Ne=e=>e==="image"||e==="url",Le=e=>e==="length"||e==="size"||e==="bg-size",Fe=e=>e==="length",Oo=e=>e==="number",Bo=e=>e==="family-name",Ue=e=>e==="shadow";var No=()=>{let e=g("color"),r=g("font"),o=g("text"),t=g("font-weight"),a=g("tracking"),d=g("leading"),n=g("breakpoint"),i=g("container"),c=g("spacing"),f=g("radius"),h=g("shadow"),x=g("inset-shadow"),k=g("text-shadow"),P=g("drop-shadow"),C=g("blur"),R=g("perspective"),v=g("aspect"),M=g("ease"),A=g("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],_=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],T=()=>[..._(),l,s],B=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto","contain","none"],p=()=>[l,s,c],z=()=>[U,"full","auto",...p()],me=()=>[O,"none","subgrid",l,s],fe=()=>["auto",{span:["full",O,l,s]},O,l,s],q=()=>[O,"auto",l,s],he=()=>["auto","min","max","fr",l,s],ne=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],F=()=>["start","end","center","stretch","center-safe","end-safe"],S=()=>["auto",...p()],N=()=>[U,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...p()],u=()=>[e,l,s],ge=()=>[..._(),Me,Pe,{position:[l,s]}],be=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ve=()=>["auto","cover","contain",Io,To,{size:[l,s]}],se=()=>[ie,D,L],w=()=>["","none","full",f,l,s],G=()=>["",m,D,L],$=()=>["solid","dashed","dotted","double"],xe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],b=()=>[m,ie,Me,Pe],ye=()=>["","none",C,l,s],X=()=>["none",m,l,s],J=()=>["none",m,l,s],le=()=>[m,l,s],K=()=>[U,"full",...p()];return {cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[I],breakpoint:[I],color:[Go],container:[I],"drop-shadow":[I],ease:["in","out","in-out"],font:[Co],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[I],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[I],shadow:[I],spacing:["px",m],text:[I],"text-shadow":[I],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",U,s,l,v]}],container:["container"],columns:[{columns:[m,s,l,i]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:T()}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:z()}],"inset-x":[{"inset-x":z()}],"inset-y":[{"inset-y":z()}],start:[{start:z()}],end:[{end:z()}],top:[{top:z()}],right:[{right:z()}],bottom:[{bottom:z()}],left:[{left:z()}],visibility:["visible","invisible","collapse"],z:[{z:[O,"auto",l,s]}],basis:[{basis:[U,"full","auto",i,...p()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[m,U,"auto","initial","none",s]}],grow:[{grow:["",m,l,s]}],shrink:[{shrink:["",m,l,s]}],order:[{order:[O,"first","last","none",l,s]}],"grid-cols":[{"grid-cols":me()}],"col-start-end":[{col:fe()}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":me()}],"row-start-end":[{row:fe()}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":he()}],"auto-rows":[{"auto-rows":he()}],gap:[{gap:p()}],"gap-x":[{"gap-x":p()}],"gap-y":[{"gap-y":p()}],"justify-content":[{justify:[...ne(),"normal"]}],"justify-items":[{"justify-items":[...F(),"normal"]}],"justify-self":[{"justify-self":["auto",...F()]}],"align-content":[{content:["normal",...ne()]}],"align-items":[{items:[...F(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...F(),{baseline:["","last"]}]}],"place-content":[{"place-content":ne()}],"place-items":[{"place-items":[...F(),"baseline"]}],"place-self":[{"place-self":["auto",...F()]}],p:[{p:p()}],px:[{px:p()}],py:[{py:p()}],ps:[{ps:p()}],pe:[{pe:p()}],pt:[{pt:p()}],pr:[{pr:p()}],pb:[{pb:p()}],pl:[{pl:p()}],m:[{m:S()}],mx:[{mx:S()}],my:[{my:S()}],ms:[{ms:S()}],me:[{me:S()}],mt:[{mt:S()}],mr:[{mr:S()}],mb:[{mb:S()}],ml:[{ml:S()}],"space-x":[{"space-x":p()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":p()}],"space-y-reverse":["space-y-reverse"],size:[{size:N()}],w:[{w:[i,"screen",...N()]}],"min-w":[{"min-w":[i,"screen","none",...N()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[n]},...N()]}],h:[{h:["screen","lh",...N()]}],"min-h":[{"min-h":["screen","lh","none",...N()]}],"max-h":[{"max-h":["screen","lh",...N()]}],"font-size":[{text:["base",o,D,L]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[t,l,ce]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ie,s]}],"font-family":[{font:[So,s,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,l,s]}],"line-clamp":[{"line-clamp":[m,"none",l,ce]}],leading:[{leading:[d,...p()]}],"list-image":[{"list-image":["none",l,s]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",l,s]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:u()}],"text-color":[{text:u()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:[m,"from-font","auto",l,L]}],"text-decoration-color":[{decoration:u()}],"underline-offset":[{"underline-offset":[m,"auto",l,s]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l,s]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l,s]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ge()}],"bg-repeat":[{bg:be()}],"bg-size":[{bg:ve()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},O,l,s],radial:["",l,s],conic:[O,l,s]},Eo,zo]}],"bg-color":[{bg:u()}],"gradient-from-pos":[{from:se()}],"gradient-via-pos":[{via:se()}],"gradient-to-pos":[{to:se()}],"gradient-from":[{from:u()}],"gradient-via":[{via:u()}],"gradient-to":[{to:u()}],rounded:[{rounded:w()}],"rounded-s":[{"rounded-s":w()}],"rounded-e":[{"rounded-e":w()}],"rounded-t":[{"rounded-t":w()}],"rounded-r":[{"rounded-r":w()}],"rounded-b":[{"rounded-b":w()}],"rounded-l":[{"rounded-l":w()}],"rounded-ss":[{"rounded-ss":w()}],"rounded-se":[{"rounded-se":w()}],"rounded-ee":[{"rounded-ee":w()}],"rounded-es":[{"rounded-es":w()}],"rounded-tl":[{"rounded-tl":w()}],"rounded-tr":[{"rounded-tr":w()}],"rounded-br":[{"rounded-br":w()}],"rounded-bl":[{"rounded-bl":w()}],"border-w":[{border:G()}],"border-w-x":[{"border-x":G()}],"border-w-y":[{"border-y":G()}],"border-w-s":[{"border-s":G()}],"border-w-e":[{"border-e":G()}],"border-w-t":[{"border-t":G()}],"border-w-r":[{"border-r":G()}],"border-w-b":[{"border-b":G()}],"border-w-l":[{"border-l":G()}],"divide-x":[{"divide-x":G()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":G()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...$(),"hidden","none"]}],"divide-style":[{divide:[...$(),"hidden","none"]}],"border-color":[{border:u()}],"border-color-x":[{"border-x":u()}],"border-color-y":[{"border-y":u()}],"border-color-s":[{"border-s":u()}],"border-color-e":[{"border-e":u()}],"border-color-t":[{"border-t":u()}],"border-color-r":[{"border-r":u()}],"border-color-b":[{"border-b":u()}],"border-color-l":[{"border-l":u()}],"divide-color":[{divide:u()}],"outline-style":[{outline:[...$(),"none","hidden"]}],"outline-offset":[{"outline-offset":[m,l,s]}],"outline-w":[{outline:["",m,D,L]}],"outline-color":[{outline:u()}],shadow:[{shadow:["","none",h,ee,Z]}],"shadow-color":[{shadow:u()}],"inset-shadow":[{"inset-shadow":["none",x,ee,Z]}],"inset-shadow-color":[{"inset-shadow":u()}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:u()}],"ring-offset-w":[{"ring-offset":[m,L]}],"ring-offset-color":[{"ring-offset":u()}],"inset-ring-w":[{"inset-ring":G()}],"inset-ring-color":[{"inset-ring":u()}],"text-shadow":[{"text-shadow":["none",k,ee,Z]}],"text-shadow-color":[{"text-shadow":u()}],opacity:[{opacity:[m,l,s]}],"mix-blend":[{"mix-blend":[...xe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":xe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[m]}],"mask-image-linear-from-pos":[{"mask-linear-from":b()}],"mask-image-linear-to-pos":[{"mask-linear-to":b()}],"mask-image-linear-from-color":[{"mask-linear-from":u()}],"mask-image-linear-to-color":[{"mask-linear-to":u()}],"mask-image-t-from-pos":[{"mask-t-from":b()}],"mask-image-t-to-pos":[{"mask-t-to":b()}],"mask-image-t-from-color":[{"mask-t-from":u()}],"mask-image-t-to-color":[{"mask-t-to":u()}],"mask-image-r-from-pos":[{"mask-r-from":b()}],"mask-image-r-to-pos":[{"mask-r-to":b()}],"mask-image-r-from-color":[{"mask-r-from":u()}],"mask-image-r-to-color":[{"mask-r-to":u()}],"mask-image-b-from-pos":[{"mask-b-from":b()}],"mask-image-b-to-pos":[{"mask-b-to":b()}],"mask-image-b-from-color":[{"mask-b-from":u()}],"mask-image-b-to-color":[{"mask-b-to":u()}],"mask-image-l-from-pos":[{"mask-l-from":b()}],"mask-image-l-to-pos":[{"mask-l-to":b()}],"mask-image-l-from-color":[{"mask-l-from":u()}],"mask-image-l-to-color":[{"mask-l-to":u()}],"mask-image-x-from-pos":[{"mask-x-from":b()}],"mask-image-x-to-pos":[{"mask-x-to":b()}],"mask-image-x-from-color":[{"mask-x-from":u()}],"mask-image-x-to-color":[{"mask-x-to":u()}],"mask-image-y-from-pos":[{"mask-y-from":b()}],"mask-image-y-to-pos":[{"mask-y-to":b()}],"mask-image-y-from-color":[{"mask-y-from":u()}],"mask-image-y-to-color":[{"mask-y-to":u()}],"mask-image-radial":[{"mask-radial":[l,s]}],"mask-image-radial-from-pos":[{"mask-radial-from":b()}],"mask-image-radial-to-pos":[{"mask-radial-to":b()}],"mask-image-radial-from-color":[{"mask-radial-from":u()}],"mask-image-radial-to-color":[{"mask-radial-to":u()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":_()}],"mask-image-conic-pos":[{"mask-conic":[m]}],"mask-image-conic-from-pos":[{"mask-conic-from":b()}],"mask-image-conic-to-pos":[{"mask-conic-to":b()}],"mask-image-conic-from-color":[{"mask-conic-from":u()}],"mask-image-conic-to-color":[{"mask-conic-to":u()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ge()}],"mask-repeat":[{mask:be()}],"mask-size":[{mask:ve()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",l,s]}],filter:[{filter:["","none",l,s]}],blur:[{blur:ye()}],brightness:[{brightness:[m,l,s]}],contrast:[{contrast:[m,l,s]}],"drop-shadow":[{"drop-shadow":["","none",P,ee,Z]}],"drop-shadow-color":[{"drop-shadow":u()}],grayscale:[{grayscale:["",m,l,s]}],"hue-rotate":[{"hue-rotate":[m,l,s]}],invert:[{invert:["",m,l,s]}],saturate:[{saturate:[m,l,s]}],sepia:[{sepia:["",m,l,s]}],"backdrop-filter":[{"backdrop-filter":["","none",l,s]}],"backdrop-blur":[{"backdrop-blur":ye()}],"backdrop-brightness":[{"backdrop-brightness":[m,l,s]}],"backdrop-contrast":[{"backdrop-contrast":[m,l,s]}],"backdrop-grayscale":[{"backdrop-grayscale":["",m,l,s]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m,l,s]}],"backdrop-invert":[{"backdrop-invert":["",m,l,s]}],"backdrop-opacity":[{"backdrop-opacity":[m,l,s]}],"backdrop-saturate":[{"backdrop-saturate":[m,l,s]}],"backdrop-sepia":[{"backdrop-sepia":["",m,l,s]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":p()}],"border-spacing-x":[{"border-spacing-x":p()}],"border-spacing-y":[{"border-spacing-y":p()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",l,s]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[m,"initial",l,s]}],ease:[{ease:["linear","initial",M,l,s]}],delay:[{delay:[m,l,s]}],animate:[{animate:["none",A,l,s]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[R,l,s]}],"perspective-origin":[{"perspective-origin":T()}],rotate:[{rotate:X()}],"rotate-x":[{"rotate-x":X()}],"rotate-y":[{"rotate-y":X()}],"rotate-z":[{"rotate-z":X()}],scale:[{scale:J()}],"scale-x":[{"scale-x":J()}],"scale-y":[{"scale-y":J()}],"scale-z":[{"scale-z":J()}],"scale-3d":["scale-3d"],skew:[{skew:le()}],"skew-x":[{"skew-x":le()}],"skew-y":[{"skew-y":le()}],transform:[{transform:[l,s,"","none","gpu","cpu"]}],"transform-origin":[{origin:T()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:K()}],"translate-x":[{"translate-x":K()}],"translate-y":[{"translate-y":K()}],"translate-z":[{"translate-z":K()}],"translate-none":["translate-none"],accent:[{accent:u()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:u()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l,s]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l,s]}],fill:[{fill:["none",...u()]}],"stroke-w":[{stroke:[m,D,L,ce]}],stroke:[{stroke:["none",...u()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}};var je=bo(No);function We(...e){return je(Re(e))}var ue={color1:{r:226,g:98,b:75,a:1},color2:{r:255,g:255,b:255,a:1},color3:{r:30,g:34,b:159,a:1},speed:.4,scale:1,type:"stripe",noise:.08},oe={linear:0,conic:1,animated:2,wave:3,silk:4,smoke:5,stripe:6},Lo={cosmic:{color1:{r:85,g:4,b:129,a:1},color2:{r:0,g:145,b:255,a:1},color3:{r:0,g:4,b:5,a:1},speed:.4,scale:1.2,type:"silk",noise:.1},matrix:{color1:{r:34,g:54,b:145,a:1},color2:{r:0,g:0,b:0,a:1},color3:{r:147,g:251,b:173,a:1},speed:.8,scale:1,type:"silk",noise:.1},electric:{color1:{r:5,g:65,b:245,a:1},color2:{r:178,g:224,b:209,a:1},color3:{r:87,g:229,b:149,a:1},speed:.9,scale:2,type:"animated",noise:.18},inferno:{color1:{r:77,g:0,b:0,a:1},color2:{r:0,g:0,b:0,a:1},color3:{r:255,g:187,b:0,a:1},speed:.9,scale:1.1,type:"wave",noise:.18},mystic:{color1:{r:192,g:155,b:197,a:1},color2:{r:0,g:0,b:0,a:1},color3:{r:53,g:0,b:97,a:1},speed:.9,scale:2,type:"smoke",noise:.18},cyber:{color1:{r:102,g:237,b:255,a:1},color2:{r:0,g:0,b:0,a:1},color3:{r:0,g:255,b:110,a:1},speed:.9,scale:2,type:"silk",noise:.18},neon:{color1:{r:102,g:237,b:255,a:1},color2:{r:0,g:0,b:0,a:1},color3:{r:0,g:255,b:110,a:1},speed:.6,scale:2,type:"animated",noise:.18},plasma:{color1:{r:163,g:106,b:242,a:1},color2:{r:0,g:0,b:0,a:1},color3:{r:234,g:130,b:106,a:1},speed:.6,scale:1.2,type:"silk",noise:.18}};var re=e=>({rgb:[e.r/255,e.g/255,e.b/255],alpha:e.a});var Ho=`
  attribute vec2 position;
  varying vec2 vUv;

  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,Yo=`
  #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
  #else
    precision mediump float;
  #endif

  uniform float u_time;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;
  uniform float u_alpha1;
  uniform float u_alpha2;
  uniform float u_alpha3;
  uniform float u_speed;
  uniform float u_scale;
  uniform int u_type;
  uniform float u_noise;
  uniform vec2 u_resolution;

  varying vec2 vUv;

  #define PI 3.14159265359


  // @Utility
  float noise(vec2 st) {
    return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
  }

  // @Gradient Types
  vec4 linearGradient(vec2 uv, float time) {
    float t = (uv.y * u_scale) + sin(uv.x * PI + time) * 0.1;
    t = clamp(t, 0.0, 1.0);

    vec3 color;
    float alpha;
    if (t < 0.5) {
      float blend = t * 2.0;
      color = mix(u_color1, u_color2, blend);
      alpha = mix(u_alpha1, u_alpha2, blend);
    } else {
      float blend = (t - 0.5) * 2.0;
      color = mix(u_color2, u_color3, blend);
      alpha = mix(u_alpha2, u_alpha3, blend);
    }
    return vec4(color, alpha);
  }

  vec4 conicGradient(vec2 uv, float time) {
    vec2 center = vec2(0.5);
    vec2 pos = uv - center;

    float angle = atan(pos.y, pos.x);
    float normalizedAngle = (angle + PI) / (2.0 * PI);

    float t = fract(normalizedAngle * u_scale + time * 0.3);
    float smoothT = t;

    vec3 color;
    float alpha;
    if (smoothT < 0.33) {
      float blend = smoothstep(0.0, 0.33, smoothT);
      color = mix(u_color1, u_color2, blend);
      alpha = mix(u_alpha1, u_alpha2, blend);
    } else if (smoothT < 0.66) {
      float blend = smoothstep(0.33, 0.66, smoothT);
      color = mix(u_color2, u_color3, blend);
      alpha = mix(u_alpha2, u_alpha3, blend);
    } else {
      float blend = smoothstep(0.66, 1.0, smoothT);
      color = mix(u_color3, u_color1, blend);
      alpha = mix(u_alpha3, u_alpha1, blend);
    }

    float dist = length(pos);
    color += sin(dist * 8.0 + time * 1.5) * 0.03;

    return vec4(color, alpha);
  }

  #define S(a,b,t) smoothstep(a,b,t)

  mat2 Rot(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
  }

  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
    return fract(sin(p) * 43758.5453);
  }

  float advancedNoise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                      dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                  mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                      dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
    return 0.5 + 0.5 * n;
  }

  vec4 animatedGradient(vec2 uv, float time) {
    float ratio = u_resolution.x / u_resolution.y;
    vec2 tuv = uv;
    tuv -= 0.5;

    float degree = advancedNoise(vec2(time * 0.1 * u_speed, tuv.x * tuv.y));
    tuv.y *= 1.0 / ratio;
    tuv *= Rot(radians((degree - 0.5) * 720.0 * u_scale + 180.0));
    tuv.y *= ratio;

    float frequency = 5.0 * u_scale;
    float amplitude = 30.0;
    float speed = time * 2.0 * u_speed;
    tuv.x += sin(tuv.y * frequency + speed) / amplitude;
    tuv.y += sin(tuv.x * frequency * 1.5 + speed) / (amplitude * 0.5);

    vec3 layer1 = mix(u_color1, u_color2, S(-0.3, 0.2, (tuv * Rot(radians(-5.0))).x));
    vec3 layer2 = mix(u_color2, u_color3, S(-0.3, 0.2, (tuv * Rot(radians(-5.0))).x));
    float alpha1 = mix(u_alpha1, u_alpha2, S(-0.3, 0.2, (tuv * Rot(radians(-5.0))).x));
    float alpha2 = mix(u_alpha2, u_alpha3, S(-0.3, 0.2, (tuv * Rot(radians(-5.0))).x));

    vec3 finalComp = mix(layer1, layer2, S(0.05, -0.2, tuv.y));
    float finalAlpha = mix(alpha1, alpha2, S(0.05, -0.2, tuv.y));

    return vec4(finalComp, finalAlpha);
  }

  vec4 waveGradient(vec2 uv, float time) {
    float y = uv.y;

    float wave1 = sin(uv.x * PI * u_scale * 0.8 + time * u_speed * 0.5) * 0.1;
    float wave2 = sin(uv.x * PI * u_scale * 0.5 + time * u_speed * 0.3) * 0.15;
    float wave3 = sin(uv.x * PI * u_scale * 1.2 + time * u_speed * 0.8) * 0.2;

    float flowingY = y + wave1 + wave2 + wave3;
    float pattern = smoothstep(0.0, 1.0, clamp(flowingY, 0.0, 1.0));

    vec3 color;
    float alpha;
    if (pattern < 0.33) {
      float t = smoothstep(0.0, 0.33, pattern);
      color = mix(u_color1, u_color2, t);
      alpha = mix(u_alpha1, u_alpha2, t);
    } else if (pattern < 0.66) {
      float t = smoothstep(0.33, 0.66, pattern);
      color = mix(u_color2, u_color3, t);
      alpha = mix(u_alpha2, u_alpha3, t);
    } else {
      float t = smoothstep(0.66, 1.0, pattern);
      color = mix(u_color3, u_color1, t);
      alpha = mix(u_alpha3, u_alpha1, t);
    }

    float variation = sin(uv.x * PI * 2.0 + time * u_speed) *
                      cos(uv.y * PI * 1.5 + time * u_speed * 0.7) * 0.02;
    color += variation;

    return vec4(clamp(color, 0.0, 1.0), alpha);
  }

  vec4 silkGradient(vec2 uv, float time) {
    vec2 fragCoord = uv * u_resolution;
    vec2 invResolution = 1.0 / u_resolution.xy;
    vec2 centeredUv = (fragCoord * 2.0 - u_resolution.xy) * invResolution;

    centeredUv *= u_scale;

    float dampening = 1.0 / (1.0 + u_scale * 0.1);

    float d = -time * u_speed * 0.5;
    float a = 0.0;

    for (float i = 0.0; i < 8.0; ++i) {
        a += cos(i - d - a * centeredUv.x) * dampening;
        d += sin(centeredUv.y * i + a) * dampening;
    }

    d += time * u_speed * 0.5;

    vec3 patterns = vec3(
      cos(centeredUv.x * d + a) * 0.5 + 0.5,
      cos(centeredUv.y * a + d) * 0.5 + 0.5,
      cos((centeredUv.x + centeredUv.y) * (d + a) * 0.5) * 0.5 + 0.5
    );

    vec3 color1Mix = mix(u_color1, u_color2, patterns.x);
    vec3 color2Mix = mix(u_color2, u_color3, patterns.y);
    vec3 color3Mix = mix(u_color3, u_color1, patterns.z);

    float alpha1Mix = mix(u_alpha1, u_alpha2, patterns.x);
    float alpha2Mix = mix(u_alpha2, u_alpha3, patterns.y);
    float alpha3Mix = mix(u_alpha3, u_alpha1, patterns.z);

    vec3 finalColor = mix(color1Mix, color2Mix, patterns.z);
    finalColor = mix(finalColor, color3Mix, patterns.x * 0.5);

    float finalAlpha = mix(alpha1Mix, alpha2Mix, patterns.z);
    finalAlpha = mix(finalAlpha, alpha3Mix, patterns.x * 0.5);

    vec3 originalPattern = vec3(cos(centeredUv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
    originalPattern = cos(originalPattern * cos(vec3(d, a, 2.5)) * 0.5 + 0.5);

    return vec4(mix(finalColor, originalPattern * finalColor, 0.3), finalAlpha);
  }

  vec4 smokeGradient(vec2 uv, float time) {
    float mr = min(u_resolution.x, u_resolution.y);
    vec2 fragCoord = uv * u_resolution;
    vec2 p = (2.0 * fragCoord.xy - u_resolution.xy) / mr;

    p *= u_scale;

    float iTime = time * u_speed;

    for(int i = 1; i < 10; i++) {
      vec2 newp = p;
      float fi = float(i);
      newp.x += 0.6 / fi * sin(fi * p.y + iTime + 0.3 * fi) + 1.0;
      newp.y += 0.6 / fi * sin(fi * p.x + iTime + 0.3 * (fi + 10.0)) - 1.4;
      p = newp;
    }

    float redPattern = 1.0;
    float greenPattern = 1.0 - sin(p.y);
    float bluePattern = sin(p.x + p.y);

    greenPattern = clamp(greenPattern, 0.0, 1.0);
    bluePattern = bluePattern * 0.5 + 0.5;

    vec3 color12 = mix(u_color1, u_color2, greenPattern);
    float alpha12 = mix(u_alpha1, u_alpha2, greenPattern);

    vec3 color = mix(color12, u_color3, bluePattern);
    float alpha = mix(alpha12, u_alpha3, bluePattern);

    return vec4(clamp(color, 0.0, 1.0), alpha);
  }

  vec4 stripeGradient(vec2 uv, float time) {
    vec2 p = ((uv * u_resolution * 2.0 - u_resolution.xy) / (u_resolution.x + u_resolution.y) * 2.0) * u_scale;
    float t = time * 0.7, a = 4.0 * p.y - sin(-p.x * 3.0 + p.y - t);
    a = smoothstep(cos(a) * 0.7, sin(a) * 0.7 + 1.0, cos(a - 4.0 * p.y) - sin(a + 3.0 * p.x));

    vec2 warped = (cos(a) * p + sin(a) * vec2(-p.y, p.x)) * 0.5 + 0.5;
    vec3 color = mix(u_color1, u_color2, warped.x);
    float alpha = mix(u_alpha1, u_alpha2, warped.x);

    color = mix(color, u_color3, warped.y);
    alpha = mix(alpha, u_alpha3, warped.y);
    color *= color + 0.6 * sqrt(color);

    return vec4(clamp(color, 0.0, 1.0), alpha);
  }

  // @Main
  void main() {
    vec2 uv = vUv;
    float time = u_time * u_speed;

    vec4 result;

    if (u_type == 0) {
      result = linearGradient(uv, time);
    } else if (u_type == 1) {
      result = conicGradient(uv, time);
    } else if (u_type == 2) {
      result = animatedGradient(uv, time);
    } else if (u_type == 3) {
      result = waveGradient(uv, time);
    } else if (u_type == 4) {
      result = silkGradient(uv, time);
    } else if (u_type == 5) {
      result = smokeGradient(uv, time);
    } else if (u_type == 6) {
      result = stripeGradient(uv, time);
    } else {
      result = animatedGradient(uv, time);
    }

    vec3 color = result.rgb;
    float alpha = result.a;

    if (u_noise > 0.001) {
      float grain = noise(uv * 200.0 + time * 0.1);
      color *= (1.0 - u_noise * 0.4 + u_noise * grain * 0.4);
    }

    gl_FragColor = vec4(color, alpha);
  }
`;function De(e){let r=react.useRef(null),o=react.useRef(null),t=react.useRef(null),a=react.useRef(null),d=react.useRef(0),n=react.useMemo(()=>({color1:re(e.color1),color2:re(e.color2),color3:re(e.color3)}),[e.color1,e.color2,e.color3]);return react.useEffect(()=>{var M;let i=r.current;if(!i)return;let c=new ogl.Renderer({canvas:i,dpr:Math.min(window.devicePixelRatio,2),alpha:true,antialias:false,powerPreference:"high-performance",premultipliedAlpha:false});o.current=c;let f=c.gl;f.clearColor(0,0,0,0);let h=new ogl.Plane(f,{width:2,height:2}),x=()=>{if(!i.parentElement)return;let A=i.parentElement,y=A.clientWidth,_=A.clientHeight,T=Math.min(window.devicePixelRatio,2);i.width=y*T,i.height=_*T,i.style.width=y+"px",i.style.height=_+"px",c.setSize(y,_),t.current&&(t.current.uniforms.u_resolution.value=[y,_]);},k=new ogl.Program(f,{vertex:Ho,fragment:Yo,uniforms:{u_time:{value:0},u_color1:{value:n.color1.rgb},u_color2:{value:n.color2.rgb},u_color3:{value:n.color3.rgb},u_alpha1:{value:n.color1.alpha},u_alpha2:{value:n.color2.alpha},u_alpha3:{value:n.color3.alpha},u_speed:{value:e.speed},u_scale:{value:e.scale},u_type:{value:oe[(M=e.type)!=null?M:"animated"]},u_noise:{value:e.noise},u_resolution:{value:[i.clientWidth,i.clientHeight]}},transparent:true});t.current=k;let P=new ogl.Mesh(f,{geometry:h,program:k});a.current=P;let C=new ogl.Transform;P.setParent(C),x(),window.addEventListener("resize",x,{passive:true});let R=performance.now(),v=A=>{let y=(A-R)/1e3;k.uniforms.u_time.value=y,c.render({scene:P}),d.current=requestAnimationFrame(v);};return d.current=requestAnimationFrame(v),()=>{var y,_;cancelAnimationFrame(d.current),window.removeEventListener("resize",x);let A=(y=o.current)==null?void 0:y.gl;(_=t.current)!=null&&_.program&&A&&A.deleteProgram(t.current.program),o.current=null,t.current=null,a.current=null;}},[]),react.useEffect(()=>{var c;let i=t.current;i&&(i.uniforms.u_color1.value=n.color1.rgb,i.uniforms.u_color2.value=n.color2.rgb,i.uniforms.u_color3.value=n.color3.rgb,i.uniforms.u_alpha1.value=n.color1.alpha,i.uniforms.u_alpha2.value=n.color2.alpha,i.uniforms.u_alpha3.value=n.color3.alpha,i.uniforms.u_speed.value=e.speed,i.uniforms.u_scale.value=e.scale,i.uniforms.u_type.value=oe[(c=e.type)!=null?c:"animated"],i.uniforms.u_noise.value=e.noise);},[e,n]),{canvasRef:r,rendererRef:o,programRef:t,meshRef:a}}function te(e){let r=e.replace("#",""),o=parseInt(r,16),t=o>>16&255,a=o>>8&255,d=o&255;return {r:t,g:a,b:d}}function qo(e){let{r,g:o,b:t}=e;return "#"+((1<<24)+(r<<16)+(o<<8)+t).toString(16).slice(1)}function $o(e){return typeof e=="string"?te(e):e}function Xo(e){return typeof e=="object"&&"color"in e}function Jo(e){return typeof e=="object"&&"r"in e&&"g"in e&&"b"in e&&!("color"in e)}function Y(e){if(typeof e=="string"){let r=te(e);return Q(E({},r),{a:1})}if(Xo(e)){let r=typeof e.color=="string"?te(e.color):e.color,o=e.opacity!==void 0?Math.max(0,Math.min(1,e.opacity)):1;return Q(E({},r),{a:o})}return Jo(e)?Q(E({},e),{a:1}):{r:0,g:0,b:0,a:1}}function pe({config:e,className:r=""}){let o=react.useMemo(()=>{let a=E({},ue);return e&&(e.color1&&(a.color1=Y(e.color1)),e.color2&&(a.color2=Y(e.color2)),e.color3&&(a.color3=Y(e.color3)),e.speed!==void 0&&(a.speed=e.speed),e.scale!==void 0&&(a.scale=e.scale),e.type&&(a.type=e.type),e.noise!==void 0&&(a.noise=e.noise)),a},[e]),{canvasRef:t}=De(o);return jsxRuntime.jsx("canvas",{ref:t,className:We("w-full h-full block select-none touch-none",r),"aria-label":"gradflow animated gradient background"})}function ae(){return {r:Math.floor(Math.random()*256),g:Math.floor(Math.random()*256),b:Math.floor(Math.random()*256),a:1}}function Zo(){return {color1:ae(),color2:ae(),color3:ae()}}exports.DEFAULT_CONFIG=ue;exports.GRADIENT_TYPE_NUMBER=oe;exports.GradFlow=pe;exports.PRESETS=Lo;exports.default=pe;exports.generateRandomColors=Zo;exports.hexToRgb=te;exports.normalizeColor=$o;exports.normalizeColorWithAlpha=Y;exports.randomRGBA=ae;exports.rgbToHex=qo;