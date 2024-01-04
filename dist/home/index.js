"use strict";(()=>{var kp=Object.create;var Ju=Object.defineProperty;var Hp=Object.getOwnPropertyDescriptor;var Vp=Object.getOwnPropertyNames;var Gp=Object.getPrototypeOf,Wp=Object.prototype.hasOwnProperty;var Xp=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var qp=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Vp(e))!Wp.call(i,r)&&r!==t&&Ju(i,r,{get:()=>e[r],enumerable:!(n=Hp(e,r))||n.enumerable});return i};var Yp=(i,e,t)=>(t=i!=null?kp(Gp(i)):{},qp(e||!i||!i.__esModule?Ju(t,"default",{value:i,enumerable:!0}):t,i));var xh=Xp((yh,Qa)=>{(function(i,e){"use strict";typeof Qa=="object"&&typeof Qa.exports=="object"?Qa.exports=i.document?e(i,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(i)})(typeof window<"u"?window:yh,function(i,e){"use strict";var t=[],n=Object.getPrototypeOf,r=t.slice,s=t.flat?function(o){return t.flat.call(o)}:function(o){return t.concat.apply([],o)},a=t.push,l=t.indexOf,u={},h=u.toString,p=u.hasOwnProperty,m=p.toString,v=m.call(Object),_={},R=function(d){return typeof d=="function"&&typeof d.nodeType!="number"&&typeof d.item!="function"},E=function(d){return d!=null&&d===d.window},g=i.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function T(o,d,x){x=x||g;var w,D,I=x.createElement("script");if(I.text=o,d)for(w in c)D=d[w]||d.getAttribute&&d.getAttribute(w),D&&I.setAttribute(w,D);x.head.appendChild(I).parentNode.removeChild(I)}function b(o){return o==null?o+"":typeof o=="object"||typeof o=="function"?u[h.call(o)]||"object":typeof o}var S="3.7.1",U=/HTML$/i,f=function(o,d){return new f.fn.init(o,d)};f.fn=f.prototype={jquery:S,constructor:f,length:0,toArray:function(){return r.call(this)},get:function(o){return o==null?r.call(this):o<0?this[o+this.length]:this[o]},pushStack:function(o){var d=f.merge(this.constructor(),o);return d.prevObject=this,d},each:function(o){return f.each(this,o)},map:function(o){return this.pushStack(f.map(this,function(d,x){return o.call(d,x,d)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(f.grep(this,function(o,d){return(d+1)%2}))},odd:function(){return this.pushStack(f.grep(this,function(o,d){return d%2}))},eq:function(o){var d=this.length,x=+o+(o<0?d:0);return this.pushStack(x>=0&&x<d?[this[x]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:t.sort,splice:t.splice},f.extend=f.fn.extend=function(){var o,d,x,w,D,I,k=arguments[0]||{},ie=1,Q=arguments.length,de=!1;for(typeof k=="boolean"&&(de=k,k=arguments[ie]||{},ie++),typeof k!="object"&&!R(k)&&(k={}),ie===Q&&(k=this,ie--);ie<Q;ie++)if((o=arguments[ie])!=null)for(d in o)w=o[d],!(d==="__proto__"||k===w)&&(de&&w&&(f.isPlainObject(w)||(D=Array.isArray(w)))?(x=k[d],D&&!Array.isArray(x)?I=[]:!D&&!f.isPlainObject(x)?I={}:I=x,D=!1,k[d]=f.extend(de,I,w)):w!==void 0&&(k[d]=w));return k},f.extend({expando:"jQuery"+(S+Math.random()).replace(/\D/g,""),isReady:!0,error:function(o){throw new Error(o)},noop:function(){},isPlainObject:function(o){var d,x;return!o||h.call(o)!=="[object Object]"?!1:(d=n(o),d?(x=p.call(d,"constructor")&&d.constructor,typeof x=="function"&&m.call(x)===v):!0)},isEmptyObject:function(o){var d;for(d in o)return!1;return!0},globalEval:function(o,d,x){T(o,{nonce:d&&d.nonce},x)},each:function(o,d){var x,w=0;if(z(o))for(x=o.length;w<x&&d.call(o[w],w,o[w])!==!1;w++);else for(w in o)if(d.call(o[w],w,o[w])===!1)break;return o},text:function(o){var d,x="",w=0,D=o.nodeType;if(!D)for(;d=o[w++];)x+=f.text(d);return D===1||D===11?o.textContent:D===9?o.documentElement.textContent:D===3||D===4?o.nodeValue:x},makeArray:function(o,d){var x=d||[];return o!=null&&(z(Object(o))?f.merge(x,typeof o=="string"?[o]:o):a.call(x,o)),x},inArray:function(o,d,x){return d==null?-1:l.call(d,o,x)},isXMLDoc:function(o){var d=o&&o.namespaceURI,x=o&&(o.ownerDocument||o).documentElement;return!U.test(d||x&&x.nodeName||"HTML")},merge:function(o,d){for(var x=+d.length,w=0,D=o.length;w<x;w++)o[D++]=d[w];return o.length=D,o},grep:function(o,d,x){for(var w,D=[],I=0,k=o.length,ie=!x;I<k;I++)w=!d(o[I],I),w!==ie&&D.push(o[I]);return D},map:function(o,d,x){var w,D,I=0,k=[];if(z(o))for(w=o.length;I<w;I++)D=d(o[I],I,x),D!=null&&k.push(D);else for(I in o)D=d(o[I],I,x),D!=null&&k.push(D);return s(k)},guid:1,support:_}),typeof Symbol=="function"&&(f.fn[Symbol.iterator]=t[Symbol.iterator]),f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(o,d){u["[object "+d+"]"]=d.toLowerCase()});function z(o){var d=!!o&&"length"in o&&o.length,x=b(o);return R(o)||E(o)?!1:x==="array"||d===0||typeof d=="number"&&d>0&&d-1 in o}function W(o,d){return o.nodeName&&o.nodeName.toLowerCase()===d.toLowerCase()}var F=t.pop,B=t.sort,ne=t.splice,te="[\\x20\\t\\r\\n\\f]",_e=new RegExp("^"+te+"+|((?:^|[^\\\\])(?:\\\\.)*)"+te+"+$","g");f.contains=function(o,d){var x=d&&d.parentNode;return o===x||!!(x&&x.nodeType===1&&(o.contains?o.contains(x):o.compareDocumentPosition&&o.compareDocumentPosition(x)&16))};var K=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ee(o,d){return d?o==="\0"?"\uFFFD":o.slice(0,-1)+"\\"+o.charCodeAt(o.length-1).toString(16)+" ":"\\"+o}f.escapeSelector=function(o){return(o+"").replace(K,ee)};var le=g,Me=a;(function(){var o,d,x,w,D,I=Me,k,ie,Q,de,Ae,De=f.expando,xe=0,Ye=0,Ct=Va(),jt=Va(),Ft=Va(),Bn=Va(),Cn=function(q,ue){return q===ue&&(D=!0),0},Ci="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Pi="(?:\\\\[\\da-fA-F]{1,6}"+te+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Wt="\\["+te+"*("+Pi+")(?:"+te+"*([*^$|!~]?=)"+te+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Pi+"))|)"+te+"*\\]",kr=":("+Pi+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Wt+")*)|.*)\\)|)",$t=new RegExp(te+"+","g"),gn=new RegExp("^"+te+"*,"+te+"*"),la=new RegExp("^"+te+"*([>+~]|"+te+")"+te+"*"),Pl=new RegExp(te+"|>"),Li=new RegExp(kr),ca=new RegExp("^"+Pi+"$"),Di={ID:new RegExp("^#("+Pi+")"),CLASS:new RegExp("^\\.("+Pi+")"),TAG:new RegExp("^("+Pi+"|[*])"),ATTR:new RegExp("^"+Wt),PSEUDO:new RegExp("^"+kr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+te+"*(even|odd|(([+-]|)(\\d*)n|)"+te+"*(?:([+-]|)"+te+"*(\\d+)|))"+te+"*\\)|)","i"),bool:new RegExp("^(?:"+Ci+")$","i"),needsContext:new RegExp("^"+te+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+te+"*((?:-\\d)?\\d*)"+te+"*\\)|)(?=[^-]|$)","i")},pr=/^(?:input|select|textarea|button)$/i,mr=/^h\d$/i,ai=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ll=/[+~]/,Xi=new RegExp("\\\\[\\da-fA-F]{1,6}"+te+"?|\\\\([^\\r\\n\\f])","g"),qi=function(q,ue){var ve="0x"+q.slice(1)-65536;return ue||(ve<0?String.fromCharCode(ve+65536):String.fromCharCode(ve>>10|55296,ve&1023|56320))},Ip=function(){gr()},Op=Wa(function(q){return q.disabled===!0&&W(q,"fieldset")},{dir:"parentNode",next:"legend"});function Np(){try{return k.activeElement}catch{}}try{I.apply(t=r.call(le.childNodes),le.childNodes),t[le.childNodes.length].nodeType}catch{I={apply:function(ue,ve){Me.apply(ue,r.call(ve))},call:function(ue){Me.apply(ue,r.call(arguments,1))}}}function Kt(q,ue,ve,Te){var Le,Ke,lt,mt,ct,Ht,Rt,Pt=ue&&ue.ownerDocument,Vt=ue?ue.nodeType:9;if(ve=ve||[],typeof q!="string"||!q||Vt!==1&&Vt!==9&&Vt!==11)return ve;if(!Te&&(gr(ue),ue=ue||k,Q)){if(Vt!==11&&(ct=ai.exec(q)))if(Le=ct[1]){if(Vt===9)if(lt=ue.getElementById(Le)){if(lt.id===Le)return I.call(ve,lt),ve}else return ve;else if(Pt&&(lt=Pt.getElementById(Le))&&Kt.contains(ue,lt)&&lt.id===Le)return I.call(ve,lt),ve}else{if(ct[2])return I.apply(ve,ue.getElementsByTagName(q)),ve;if((Le=ct[3])&&ue.getElementsByClassName)return I.apply(ve,ue.getElementsByClassName(Le)),ve}if(!Bn[q+" "]&&(!de||!de.test(q))){if(Rt=q,Pt=ue,Vt===1&&(Pl.test(q)||la.test(q))){for(Pt=Ll.test(q)&&Dl(ue.parentNode)||ue,(Pt!=ue||!_.scope)&&((mt=ue.getAttribute("id"))?mt=f.escapeSelector(mt):ue.setAttribute("id",mt=De)),Ht=ua(q),Ke=Ht.length;Ke--;)Ht[Ke]=(mt?"#"+mt:":scope")+" "+Ga(Ht[Ke]);Rt=Ht.join(",")}try{return I.apply(ve,Pt.querySelectorAll(Rt)),ve}catch{Bn(q,!0)}finally{mt===De&&ue.removeAttribute("id")}}}return $u(q.replace(_e,"$1"),ue,ve,Te)}function Va(){var q=[];function ue(ve,Te){return q.push(ve+" ")>d.cacheLength&&delete ue[q.shift()],ue[ve+" "]=Te}return ue}function vi(q){return q[De]=!0,q}function fs(q){var ue=k.createElement("fieldset");try{return!!q(ue)}catch{return!1}finally{ue.parentNode&&ue.parentNode.removeChild(ue),ue=null}}function Up(q){return function(ue){return W(ue,"input")&&ue.type===q}}function Fp(q){return function(ue){return(W(ue,"input")||W(ue,"button"))&&ue.type===q}}function ju(q){return function(ue){return"form"in ue?ue.parentNode&&ue.disabled===!1?"label"in ue?"label"in ue.parentNode?ue.parentNode.disabled===q:ue.disabled===q:ue.isDisabled===q||ue.isDisabled!==!q&&Op(ue)===q:ue.disabled===q:"label"in ue?ue.disabled===q:!1}}function Hr(q){return vi(function(ue){return ue=+ue,vi(function(ve,Te){for(var Le,Ke=q([],ve.length,ue),lt=Ke.length;lt--;)ve[Le=Ke[lt]]&&(ve[Le]=!(Te[Le]=ve[Le]))})})}function Dl(q){return q&&typeof q.getElementsByTagName<"u"&&q}function gr(q){var ue,ve=q?q.ownerDocument||q:le;return ve==k||ve.nodeType!==9||!ve.documentElement||(k=ve,ie=k.documentElement,Q=!f.isXMLDoc(k),Ae=ie.matches||ie.webkitMatchesSelector||ie.msMatchesSelector,ie.msMatchesSelector&&le!=k&&(ue=k.defaultView)&&ue.top!==ue&&ue.addEventListener("unload",Ip),_.getById=fs(function(Te){return ie.appendChild(Te).id=f.expando,!k.getElementsByName||!k.getElementsByName(f.expando).length}),_.disconnectedMatch=fs(function(Te){return Ae.call(Te,"*")}),_.scope=fs(function(){return k.querySelectorAll(":scope")}),_.cssHas=fs(function(){try{return k.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),_.getById?(d.filter.ID=function(Te){var Le=Te.replace(Xi,qi);return function(Ke){return Ke.getAttribute("id")===Le}},d.find.ID=function(Te,Le){if(typeof Le.getElementById<"u"&&Q){var Ke=Le.getElementById(Te);return Ke?[Ke]:[]}}):(d.filter.ID=function(Te){var Le=Te.replace(Xi,qi);return function(Ke){var lt=typeof Ke.getAttributeNode<"u"&&Ke.getAttributeNode("id");return lt&&lt.value===Le}},d.find.ID=function(Te,Le){if(typeof Le.getElementById<"u"&&Q){var Ke,lt,mt,ct=Le.getElementById(Te);if(ct){if(Ke=ct.getAttributeNode("id"),Ke&&Ke.value===Te)return[ct];for(mt=Le.getElementsByName(Te),lt=0;ct=mt[lt++];)if(Ke=ct.getAttributeNode("id"),Ke&&Ke.value===Te)return[ct]}return[]}}),d.find.TAG=function(Te,Le){return typeof Le.getElementsByTagName<"u"?Le.getElementsByTagName(Te):Le.querySelectorAll(Te)},d.find.CLASS=function(Te,Le){if(typeof Le.getElementsByClassName<"u"&&Q)return Le.getElementsByClassName(Te)},de=[],fs(function(Te){var Le;ie.appendChild(Te).innerHTML="<a id='"+De+"' href='' disabled='disabled'></a><select id='"+De+"-\r\\' disabled='disabled'><option selected=''></option></select>",Te.querySelectorAll("[selected]").length||de.push("\\["+te+"*(?:value|"+Ci+")"),Te.querySelectorAll("[id~="+De+"-]").length||de.push("~="),Te.querySelectorAll("a#"+De+"+*").length||de.push(".#.+[+~]"),Te.querySelectorAll(":checked").length||de.push(":checked"),Le=k.createElement("input"),Le.setAttribute("type","hidden"),Te.appendChild(Le).setAttribute("name","D"),ie.appendChild(Te).disabled=!0,Te.querySelectorAll(":disabled").length!==2&&de.push(":enabled",":disabled"),Le=k.createElement("input"),Le.setAttribute("name",""),Te.appendChild(Le),Te.querySelectorAll("[name='']").length||de.push("\\["+te+"*name"+te+"*="+te+`*(?:''|"")`)}),_.cssHas||de.push(":has"),de=de.length&&new RegExp(de.join("|")),Cn=function(Te,Le){if(Te===Le)return D=!0,0;var Ke=!Te.compareDocumentPosition-!Le.compareDocumentPosition;return Ke||(Ke=(Te.ownerDocument||Te)==(Le.ownerDocument||Le)?Te.compareDocumentPosition(Le):1,Ke&1||!_.sortDetached&&Le.compareDocumentPosition(Te)===Ke?Te===k||Te.ownerDocument==le&&Kt.contains(le,Te)?-1:Le===k||Le.ownerDocument==le&&Kt.contains(le,Le)?1:w?l.call(w,Te)-l.call(w,Le):0:Ke&4?-1:1)}),k}Kt.matches=function(q,ue){return Kt(q,null,null,ue)},Kt.matchesSelector=function(q,ue){if(gr(q),Q&&!Bn[ue+" "]&&(!de||!de.test(ue)))try{var ve=Ae.call(q,ue);if(ve||_.disconnectedMatch||q.document&&q.document.nodeType!==11)return ve}catch{Bn(ue,!0)}return Kt(ue,k,null,[q]).length>0},Kt.contains=function(q,ue){return(q.ownerDocument||q)!=k&&gr(q),f.contains(q,ue)},Kt.attr=function(q,ue){(q.ownerDocument||q)!=k&&gr(q);var ve=d.attrHandle[ue.toLowerCase()],Te=ve&&p.call(d.attrHandle,ue.toLowerCase())?ve(q,ue,!Q):void 0;return Te!==void 0?Te:q.getAttribute(ue)},Kt.error=function(q){throw new Error("Syntax error, unrecognized expression: "+q)},f.uniqueSort=function(q){var ue,ve=[],Te=0,Le=0;if(D=!_.sortStable,w=!_.sortStable&&r.call(q,0),B.call(q,Cn),D){for(;ue=q[Le++];)ue===q[Le]&&(Te=ve.push(Le));for(;Te--;)ne.call(q,ve[Te],1)}return w=null,q},f.fn.uniqueSort=function(){return this.pushStack(f.uniqueSort(r.apply(this)))},d=f.expr={cacheLength:50,createPseudo:vi,match:Di,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(q){return q[1]=q[1].replace(Xi,qi),q[3]=(q[3]||q[4]||q[5]||"").replace(Xi,qi),q[2]==="~="&&(q[3]=" "+q[3]+" "),q.slice(0,4)},CHILD:function(q){return q[1]=q[1].toLowerCase(),q[1].slice(0,3)==="nth"?(q[3]||Kt.error(q[0]),q[4]=+(q[4]?q[5]+(q[6]||1):2*(q[3]==="even"||q[3]==="odd")),q[5]=+(q[7]+q[8]||q[3]==="odd")):q[3]&&Kt.error(q[0]),q},PSEUDO:function(q){var ue,ve=!q[6]&&q[2];return Di.CHILD.test(q[0])?null:(q[3]?q[2]=q[4]||q[5]||"":ve&&Li.test(ve)&&(ue=ua(ve,!0))&&(ue=ve.indexOf(")",ve.length-ue)-ve.length)&&(q[0]=q[0].slice(0,ue),q[2]=ve.slice(0,ue)),q.slice(0,3))}},filter:{TAG:function(q){var ue=q.replace(Xi,qi).toLowerCase();return q==="*"?function(){return!0}:function(ve){return W(ve,ue)}},CLASS:function(q){var ue=Ct[q+" "];return ue||(ue=new RegExp("(^|"+te+")"+q+"("+te+"|$)"))&&Ct(q,function(ve){return ue.test(typeof ve.className=="string"&&ve.className||typeof ve.getAttribute<"u"&&ve.getAttribute("class")||"")})},ATTR:function(q,ue,ve){return function(Te){var Le=Kt.attr(Te,q);return Le==null?ue==="!=":ue?(Le+="",ue==="="?Le===ve:ue==="!="?Le!==ve:ue==="^="?ve&&Le.indexOf(ve)===0:ue==="*="?ve&&Le.indexOf(ve)>-1:ue==="$="?ve&&Le.slice(-ve.length)===ve:ue==="~="?(" "+Le.replace($t," ")+" ").indexOf(ve)>-1:ue==="|="?Le===ve||Le.slice(0,ve.length+1)===ve+"-":!1):!0}},CHILD:function(q,ue,ve,Te,Le){var Ke=q.slice(0,3)!=="nth",lt=q.slice(-4)!=="last",mt=ue==="of-type";return Te===1&&Le===0?function(ct){return!!ct.parentNode}:function(ct,Ht,Rt){var Pt,Vt,wt,sn,Qn,Vn=Ke!==lt?"nextSibling":"previousSibling",oi=ct.parentNode,Ii=mt&&ct.nodeName.toLowerCase(),ds=!Rt&&!mt,qn=!1;if(oi){if(Ke){for(;Vn;){for(wt=ct;wt=wt[Vn];)if(mt?W(wt,Ii):wt.nodeType===1)return!1;Qn=Vn=q==="only"&&!Qn&&"nextSibling"}return!0}if(Qn=[lt?oi.firstChild:oi.lastChild],lt&&ds){for(Vt=oi[De]||(oi[De]={}),Pt=Vt[q]||[],sn=Pt[0]===xe&&Pt[1],qn=sn&&Pt[2],wt=sn&&oi.childNodes[sn];wt=++sn&&wt&&wt[Vn]||(qn=sn=0)||Qn.pop();)if(wt.nodeType===1&&++qn&&wt===ct){Vt[q]=[xe,sn,qn];break}}else if(ds&&(Vt=ct[De]||(ct[De]={}),Pt=Vt[q]||[],sn=Pt[0]===xe&&Pt[1],qn=sn),qn===!1)for(;(wt=++sn&&wt&&wt[Vn]||(qn=sn=0)||Qn.pop())&&!((mt?W(wt,Ii):wt.nodeType===1)&&++qn&&(ds&&(Vt=wt[De]||(wt[De]={}),Vt[q]=[xe,qn]),wt===ct)););return qn-=Le,qn===Te||qn%Te===0&&qn/Te>=0}}},PSEUDO:function(q,ue){var ve,Te=d.pseudos[q]||d.setFilters[q.toLowerCase()]||Kt.error("unsupported pseudo: "+q);return Te[De]?Te(ue):Te.length>1?(ve=[q,q,"",ue],d.setFilters.hasOwnProperty(q.toLowerCase())?vi(function(Le,Ke){for(var lt,mt=Te(Le,ue),ct=mt.length;ct--;)lt=l.call(Le,mt[ct]),Le[lt]=!(Ke[lt]=mt[ct])}):function(Le){return Te(Le,0,ve)}):Te}},pseudos:{not:vi(function(q){var ue=[],ve=[],Te=Ul(q.replace(_e,"$1"));return Te[De]?vi(function(Le,Ke,lt,mt){for(var ct,Ht=Te(Le,null,mt,[]),Rt=Le.length;Rt--;)(ct=Ht[Rt])&&(Le[Rt]=!(Ke[Rt]=ct))}):function(Le,Ke,lt){return ue[0]=Le,Te(ue,null,lt,ve),ue[0]=null,!ve.pop()}}),has:vi(function(q){return function(ue){return Kt(q,ue).length>0}}),contains:vi(function(q){return q=q.replace(Xi,qi),function(ue){return(ue.textContent||f.text(ue)).indexOf(q)>-1}}),lang:vi(function(q){return ca.test(q||"")||Kt.error("unsupported lang: "+q),q=q.replace(Xi,qi).toLowerCase(),function(ue){var ve;do if(ve=Q?ue.lang:ue.getAttribute("xml:lang")||ue.getAttribute("lang"))return ve=ve.toLowerCase(),ve===q||ve.indexOf(q+"-")===0;while((ue=ue.parentNode)&&ue.nodeType===1);return!1}}),target:function(q){var ue=i.location&&i.location.hash;return ue&&ue.slice(1)===q.id},root:function(q){return q===ie},focus:function(q){return q===Np()&&k.hasFocus()&&!!(q.type||q.href||~q.tabIndex)},enabled:ju(!1),disabled:ju(!0),checked:function(q){return W(q,"input")&&!!q.checked||W(q,"option")&&!!q.selected},selected:function(q){return q.parentNode&&q.parentNode.selectedIndex,q.selected===!0},empty:function(q){for(q=q.firstChild;q;q=q.nextSibling)if(q.nodeType<6)return!1;return!0},parent:function(q){return!d.pseudos.empty(q)},header:function(q){return mr.test(q.nodeName)},input:function(q){return pr.test(q.nodeName)},button:function(q){return W(q,"input")&&q.type==="button"||W(q,"button")},text:function(q){var ue;return W(q,"input")&&q.type==="text"&&((ue=q.getAttribute("type"))==null||ue.toLowerCase()==="text")},first:Hr(function(){return[0]}),last:Hr(function(q,ue){return[ue-1]}),eq:Hr(function(q,ue,ve){return[ve<0?ve+ue:ve]}),even:Hr(function(q,ue){for(var ve=0;ve<ue;ve+=2)q.push(ve);return q}),odd:Hr(function(q,ue){for(var ve=1;ve<ue;ve+=2)q.push(ve);return q}),lt:Hr(function(q,ue,ve){var Te;for(ve<0?Te=ve+ue:ve>ue?Te=ue:Te=ve;--Te>=0;)q.push(Te);return q}),gt:Hr(function(q,ue,ve){for(var Te=ve<0?ve+ue:ve;++Te<ue;)q.push(Te);return q})}},d.pseudos.nth=d.pseudos.eq;for(o in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[o]=Up(o);for(o in{submit:!0,reset:!0})d.pseudos[o]=Fp(o);function Zu(){}Zu.prototype=d.filters=d.pseudos,d.setFilters=new Zu;function ua(q,ue){var ve,Te,Le,Ke,lt,mt,ct,Ht=jt[q+" "];if(Ht)return ue?0:Ht.slice(0);for(lt=q,mt=[],ct=d.preFilter;lt;){(!ve||(Te=gn.exec(lt)))&&(Te&&(lt=lt.slice(Te[0].length)||lt),mt.push(Le=[])),ve=!1,(Te=la.exec(lt))&&(ve=Te.shift(),Le.push({value:ve,type:Te[0].replace(_e," ")}),lt=lt.slice(ve.length));for(Ke in d.filter)(Te=Di[Ke].exec(lt))&&(!ct[Ke]||(Te=ct[Ke](Te)))&&(ve=Te.shift(),Le.push({value:ve,type:Ke,matches:Te}),lt=lt.slice(ve.length));if(!ve)break}return ue?lt.length:lt?Kt.error(q):jt(q,mt).slice(0)}function Ga(q){for(var ue=0,ve=q.length,Te="";ue<ve;ue++)Te+=q[ue].value;return Te}function Wa(q,ue,ve){var Te=ue.dir,Le=ue.next,Ke=Le||Te,lt=ve&&Ke==="parentNode",mt=Ye++;return ue.first?function(ct,Ht,Rt){for(;ct=ct[Te];)if(ct.nodeType===1||lt)return q(ct,Ht,Rt);return!1}:function(ct,Ht,Rt){var Pt,Vt,wt=[xe,mt];if(Rt){for(;ct=ct[Te];)if((ct.nodeType===1||lt)&&q(ct,Ht,Rt))return!0}else for(;ct=ct[Te];)if(ct.nodeType===1||lt)if(Vt=ct[De]||(ct[De]={}),Le&&W(ct,Le))ct=ct[Te]||ct;else{if((Pt=Vt[Ke])&&Pt[0]===xe&&Pt[1]===mt)return wt[2]=Pt[2];if(Vt[Ke]=wt,wt[2]=q(ct,Ht,Rt))return!0}return!1}}function Il(q){return q.length>1?function(ue,ve,Te){for(var Le=q.length;Le--;)if(!q[Le](ue,ve,Te))return!1;return!0}:q[0]}function Bp(q,ue,ve){for(var Te=0,Le=ue.length;Te<Le;Te++)Kt(q,ue[Te],ve);return ve}function Xa(q,ue,ve,Te,Le){for(var Ke,lt=[],mt=0,ct=q.length,Ht=ue!=null;mt<ct;mt++)(Ke=q[mt])&&(!ve||ve(Ke,Te,Le))&&(lt.push(Ke),Ht&&ue.push(mt));return lt}function Ol(q,ue,ve,Te,Le,Ke){return Te&&!Te[De]&&(Te=Ol(Te)),Le&&!Le[De]&&(Le=Ol(Le,Ke)),vi(function(lt,mt,ct,Ht){var Rt,Pt,Vt,wt,sn=[],Qn=[],Vn=mt.length,oi=lt||Bp(ue||"*",ct.nodeType?[ct]:ct,[]),Ii=q&&(lt||!ue)?Xa(oi,sn,q,ct,Ht):oi;if(ve?(wt=Le||(lt?q:Vn||Te)?[]:mt,ve(Ii,wt,ct,Ht)):wt=Ii,Te)for(Rt=Xa(wt,Qn),Te(Rt,[],ct,Ht),Pt=Rt.length;Pt--;)(Vt=Rt[Pt])&&(wt[Qn[Pt]]=!(Ii[Qn[Pt]]=Vt));if(lt){if(Le||q){if(Le){for(Rt=[],Pt=wt.length;Pt--;)(Vt=wt[Pt])&&Rt.push(Ii[Pt]=Vt);Le(null,wt=[],Rt,Ht)}for(Pt=wt.length;Pt--;)(Vt=wt[Pt])&&(Rt=Le?l.call(lt,Vt):sn[Pt])>-1&&(lt[Rt]=!(mt[Rt]=Vt))}}else wt=Xa(wt===mt?wt.splice(Vn,wt.length):wt),Le?Le(null,mt,wt,Ht):I.apply(mt,wt)})}function Nl(q){for(var ue,ve,Te,Le=q.length,Ke=d.relative[q[0].type],lt=Ke||d.relative[" "],mt=Ke?1:0,ct=Wa(function(Pt){return Pt===ue},lt,!0),Ht=Wa(function(Pt){return l.call(ue,Pt)>-1},lt,!0),Rt=[function(Pt,Vt,wt){var sn=!Ke&&(wt||Vt!=x)||((ue=Vt).nodeType?ct(Pt,Vt,wt):Ht(Pt,Vt,wt));return ue=null,sn}];mt<Le;mt++)if(ve=d.relative[q[mt].type])Rt=[Wa(Il(Rt),ve)];else{if(ve=d.filter[q[mt].type].apply(null,q[mt].matches),ve[De]){for(Te=++mt;Te<Le&&!d.relative[q[Te].type];Te++);return Ol(mt>1&&Il(Rt),mt>1&&Ga(q.slice(0,mt-1).concat({value:q[mt-2].type===" "?"*":""})).replace(_e,"$1"),ve,mt<Te&&Nl(q.slice(mt,Te)),Te<Le&&Nl(q=q.slice(Te)),Te<Le&&Ga(q))}Rt.push(ve)}return Il(Rt)}function zp(q,ue){var ve=ue.length>0,Te=q.length>0,Le=function(Ke,lt,mt,ct,Ht){var Rt,Pt,Vt,wt=0,sn="0",Qn=Ke&&[],Vn=[],oi=x,Ii=Ke||Te&&d.find.TAG("*",Ht),ds=xe+=oi==null?1:Math.random()||.1,qn=Ii.length;for(Ht&&(x=lt==k||lt||Ht);sn!==qn&&(Rt=Ii[sn])!=null;sn++){if(Te&&Rt){for(Pt=0,!lt&&Rt.ownerDocument!=k&&(gr(Rt),mt=!Q);Vt=q[Pt++];)if(Vt(Rt,lt||k,mt)){I.call(ct,Rt);break}Ht&&(xe=ds)}ve&&((Rt=!Vt&&Rt)&&wt--,Ke&&Qn.push(Rt))}if(wt+=sn,ve&&sn!==wt){for(Pt=0;Vt=ue[Pt++];)Vt(Qn,Vn,lt,mt);if(Ke){if(wt>0)for(;sn--;)Qn[sn]||Vn[sn]||(Vn[sn]=F.call(ct));Vn=Xa(Vn)}I.apply(ct,Vn),Ht&&!Ke&&Vn.length>0&&wt+ue.length>1&&f.uniqueSort(ct)}return Ht&&(xe=ds,x=oi),Qn};return ve?vi(Le):Le}function Ul(q,ue){var ve,Te=[],Le=[],Ke=Ft[q+" "];if(!Ke){for(ue||(ue=ua(q)),ve=ue.length;ve--;)Ke=Nl(ue[ve]),Ke[De]?Te.push(Ke):Le.push(Ke);Ke=Ft(q,zp(Le,Te)),Ke.selector=q}return Ke}function $u(q,ue,ve,Te){var Le,Ke,lt,mt,ct,Ht=typeof q=="function"&&q,Rt=!Te&&ua(q=Ht.selector||q);if(ve=ve||[],Rt.length===1){if(Ke=Rt[0]=Rt[0].slice(0),Ke.length>2&&(lt=Ke[0]).type==="ID"&&ue.nodeType===9&&Q&&d.relative[Ke[1].type]){if(ue=(d.find.ID(lt.matches[0].replace(Xi,qi),ue)||[])[0],ue)Ht&&(ue=ue.parentNode);else return ve;q=q.slice(Ke.shift().value.length)}for(Le=Di.needsContext.test(q)?0:Ke.length;Le--&&(lt=Ke[Le],!d.relative[mt=lt.type]);)if((ct=d.find[mt])&&(Te=ct(lt.matches[0].replace(Xi,qi),Ll.test(Ke[0].type)&&Dl(ue.parentNode)||ue))){if(Ke.splice(Le,1),q=Te.length&&Ga(Ke),!q)return I.apply(ve,Te),ve;break}}return(Ht||Ul(q,Rt))(Te,ue,!Q,ve,!ue||Ll.test(q)&&Dl(ue.parentNode)||ue),ve}_.sortStable=De.split("").sort(Cn).join("")===De,gr(),_.sortDetached=fs(function(q){return q.compareDocumentPosition(k.createElement("fieldset"))&1}),f.find=Kt,f.expr[":"]=f.expr.pseudos,f.unique=f.uniqueSort,Kt.compile=Ul,Kt.select=$u,Kt.setDocument=gr,Kt.tokenize=ua,Kt.escape=f.escapeSelector,Kt.getText=f.text,Kt.isXML=f.isXMLDoc,Kt.selectors=f.expr,Kt.support=f.support,Kt.uniqueSort=f.uniqueSort})();var me=function(o,d,x){for(var w=[],D=x!==void 0;(o=o[d])&&o.nodeType!==9;)if(o.nodeType===1){if(D&&f(o).is(x))break;w.push(o)}return w},Ee=function(o,d){for(var x=[];o;o=o.nextSibling)o.nodeType===1&&o!==d&&x.push(o);return x},Re=f.expr.match.needsContext,Be=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function qe(o,d,x){return R(d)?f.grep(o,function(w,D){return!!d.call(w,D,w)!==x}):d.nodeType?f.grep(o,function(w){return w===d!==x}):typeof d!="string"?f.grep(o,function(w){return l.call(d,w)>-1!==x}):f.filter(d,o,x)}f.filter=function(o,d,x){var w=d[0];return x&&(o=":not("+o+")"),d.length===1&&w.nodeType===1?f.find.matchesSelector(w,o)?[w]:[]:f.find.matches(o,f.grep(d,function(D){return D.nodeType===1}))},f.fn.extend({find:function(o){var d,x,w=this.length,D=this;if(typeof o!="string")return this.pushStack(f(o).filter(function(){for(d=0;d<w;d++)if(f.contains(D[d],this))return!0}));for(x=this.pushStack([]),d=0;d<w;d++)f.find(o,D[d],x);return w>1?f.uniqueSort(x):x},filter:function(o){return this.pushStack(qe(this,o||[],!1))},not:function(o){return this.pushStack(qe(this,o||[],!0))},is:function(o){return!!qe(this,typeof o=="string"&&Re.test(o)?f(o):o||[],!1).length}});var be,Oe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,je=f.fn.init=function(o,d,x){var w,D;if(!o)return this;if(x=x||be,typeof o=="string")if(o[0]==="<"&&o[o.length-1]===">"&&o.length>=3?w=[null,o,null]:w=Oe.exec(o),w&&(w[1]||!d))if(w[1]){if(d=d instanceof f?d[0]:d,f.merge(this,f.parseHTML(w[1],d&&d.nodeType?d.ownerDocument||d:g,!0)),Be.test(w[1])&&f.isPlainObject(d))for(w in d)R(this[w])?this[w](d[w]):this.attr(w,d[w]);return this}else return D=g.getElementById(w[2]),D&&(this[0]=D,this.length=1),this;else return!d||d.jquery?(d||x).find(o):this.constructor(d).find(o);else{if(o.nodeType)return this[0]=o,this.length=1,this;if(R(o))return x.ready!==void 0?x.ready(o):o(f)}return f.makeArray(o,this)};je.prototype=f.fn,be=f(g);var tt=/^(?:parents|prev(?:Until|All))/,ht={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({has:function(o){var d=f(o,this),x=d.length;return this.filter(function(){for(var w=0;w<x;w++)if(f.contains(this,d[w]))return!0})},closest:function(o,d){var x,w=0,D=this.length,I=[],k=typeof o!="string"&&f(o);if(!Re.test(o)){for(;w<D;w++)for(x=this[w];x&&x!==d;x=x.parentNode)if(x.nodeType<11&&(k?k.index(x)>-1:x.nodeType===1&&f.find.matchesSelector(x,o))){I.push(x);break}}return this.pushStack(I.length>1?f.uniqueSort(I):I)},index:function(o){return o?typeof o=="string"?l.call(f(o),this[0]):l.call(this,o.jquery?o[0]:o):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(o,d){return this.pushStack(f.uniqueSort(f.merge(this.get(),f(o,d))))},addBack:function(o){return this.add(o==null?this.prevObject:this.prevObject.filter(o))}});function gt(o,d){for(;(o=o[d])&&o.nodeType!==1;);return o}f.each({parent:function(o){var d=o.parentNode;return d&&d.nodeType!==11?d:null},parents:function(o){return me(o,"parentNode")},parentsUntil:function(o,d,x){return me(o,"parentNode",x)},next:function(o){return gt(o,"nextSibling")},prev:function(o){return gt(o,"previousSibling")},nextAll:function(o){return me(o,"nextSibling")},prevAll:function(o){return me(o,"previousSibling")},nextUntil:function(o,d,x){return me(o,"nextSibling",x)},prevUntil:function(o,d,x){return me(o,"previousSibling",x)},siblings:function(o){return Ee((o.parentNode||{}).firstChild,o)},children:function(o){return Ee(o.firstChild)},contents:function(o){return o.contentDocument!=null&&n(o.contentDocument)?o.contentDocument:(W(o,"template")&&(o=o.content||o),f.merge([],o.childNodes))}},function(o,d){f.fn[o]=function(x,w){var D=f.map(this,d,x);return o.slice(-5)!=="Until"&&(w=x),w&&typeof w=="string"&&(D=f.filter(w,D)),this.length>1&&(ht[o]||f.uniqueSort(D),tt.test(o)&&D.reverse()),this.pushStack(D)}});var pt=/[^\x20\t\r\n\f]+/g;function ft(o){var d={};return f.each(o.match(pt)||[],function(x,w){d[w]=!0}),d}f.Callbacks=function(o){o=typeof o=="string"?ft(o):f.extend({},o);var d,x,w,D,I=[],k=[],ie=-1,Q=function(){for(D=D||o.once,w=d=!0;k.length;ie=-1)for(x=k.shift();++ie<I.length;)I[ie].apply(x[0],x[1])===!1&&o.stopOnFalse&&(ie=I.length,x=!1);o.memory||(x=!1),d=!1,D&&(x?I=[]:I="")},de={add:function(){return I&&(x&&!d&&(ie=I.length-1,k.push(x)),function Ae(De){f.each(De,function(xe,Ye){R(Ye)?(!o.unique||!de.has(Ye))&&I.push(Ye):Ye&&Ye.length&&b(Ye)!=="string"&&Ae(Ye)})}(arguments),x&&!d&&Q()),this},remove:function(){return f.each(arguments,function(Ae,De){for(var xe;(xe=f.inArray(De,I,xe))>-1;)I.splice(xe,1),xe<=ie&&ie--}),this},has:function(Ae){return Ae?f.inArray(Ae,I)>-1:I.length>0},empty:function(){return I&&(I=[]),this},disable:function(){return D=k=[],I=x="",this},disabled:function(){return!I},lock:function(){return D=k=[],!x&&!d&&(I=x=""),this},locked:function(){return!!D},fireWith:function(Ae,De){return D||(De=De||[],De=[Ae,De.slice?De.slice():De],k.push(De),d||Q()),this},fire:function(){return de.fireWith(this,arguments),this},fired:function(){return!!w}};return de};function _t(o){return o}function ge(o){throw o}function bt(o,d,x,w){var D;try{o&&R(D=o.promise)?D.call(o).done(d).fail(x):o&&R(D=o.then)?D.call(o,d,x):d.apply(void 0,[o].slice(w))}catch(I){x.apply(void 0,[I])}}f.extend({Deferred:function(o){var d=[["notify","progress",f.Callbacks("memory"),f.Callbacks("memory"),2],["resolve","done",f.Callbacks("once memory"),f.Callbacks("once memory"),0,"resolved"],["reject","fail",f.Callbacks("once memory"),f.Callbacks("once memory"),1,"rejected"]],x="pending",w={state:function(){return x},always:function(){return D.done(arguments).fail(arguments),this},catch:function(I){return w.then(null,I)},pipe:function(){var I=arguments;return f.Deferred(function(k){f.each(d,function(ie,Q){var de=R(I[Q[4]])&&I[Q[4]];D[Q[1]](function(){var Ae=de&&de.apply(this,arguments);Ae&&R(Ae.promise)?Ae.promise().progress(k.notify).done(k.resolve).fail(k.reject):k[Q[0]+"With"](this,de?[Ae]:arguments)})}),I=null}).promise()},then:function(I,k,ie){var Q=0;function de(Ae,De,xe,Ye){return function(){var Ct=this,jt=arguments,Ft=function(){var Cn,Ci;if(!(Ae<Q)){if(Cn=xe.apply(Ct,jt),Cn===De.promise())throw new TypeError("Thenable self-resolution");Ci=Cn&&(typeof Cn=="object"||typeof Cn=="function")&&Cn.then,R(Ci)?Ye?Ci.call(Cn,de(Q,De,_t,Ye),de(Q,De,ge,Ye)):(Q++,Ci.call(Cn,de(Q,De,_t,Ye),de(Q,De,ge,Ye),de(Q,De,_t,De.notifyWith))):(xe!==_t&&(Ct=void 0,jt=[Cn]),(Ye||De.resolveWith)(Ct,jt))}},Bn=Ye?Ft:function(){try{Ft()}catch(Cn){f.Deferred.exceptionHook&&f.Deferred.exceptionHook(Cn,Bn.error),Ae+1>=Q&&(xe!==ge&&(Ct=void 0,jt=[Cn]),De.rejectWith(Ct,jt))}};Ae?Bn():(f.Deferred.getErrorHook?Bn.error=f.Deferred.getErrorHook():f.Deferred.getStackHook&&(Bn.error=f.Deferred.getStackHook()),i.setTimeout(Bn))}}return f.Deferred(function(Ae){d[0][3].add(de(0,Ae,R(ie)?ie:_t,Ae.notifyWith)),d[1][3].add(de(0,Ae,R(I)?I:_t)),d[2][3].add(de(0,Ae,R(k)?k:ge))}).promise()},promise:function(I){return I!=null?f.extend(I,w):w}},D={};return f.each(d,function(I,k){var ie=k[2],Q=k[5];w[k[1]]=ie.add,Q&&ie.add(function(){x=Q},d[3-I][2].disable,d[3-I][3].disable,d[0][2].lock,d[0][3].lock),ie.add(k[3].fire),D[k[0]]=function(){return D[k[0]+"With"](this===D?void 0:this,arguments),this},D[k[0]+"With"]=ie.fireWith}),w.promise(D),o&&o.call(D,D),D},when:function(o){var d=arguments.length,x=d,w=Array(x),D=r.call(arguments),I=f.Deferred(),k=function(ie){return function(Q){w[ie]=this,D[ie]=arguments.length>1?r.call(arguments):Q,--d||I.resolveWith(w,D)}};if(d<=1&&(bt(o,I.done(k(x)).resolve,I.reject,!d),I.state()==="pending"||R(D[x]&&D[x].then)))return I.then();for(;x--;)bt(D[x],k(x),I.reject);return I.promise()}});var at=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;f.Deferred.exceptionHook=function(o,d){i.console&&i.console.warn&&o&&at.test(o.name)&&i.console.warn("jQuery.Deferred exception: "+o.message,o.stack,d)},f.readyException=function(o){i.setTimeout(function(){throw o})};var yt=f.Deferred();f.fn.ready=function(o){return yt.then(o).catch(function(d){f.readyException(d)}),this},f.extend({isReady:!1,readyWait:1,ready:function(o){(o===!0?--f.readyWait:f.isReady)||(f.isReady=!0,!(o!==!0&&--f.readyWait>0)&&yt.resolveWith(g,[f]))}}),f.ready.then=yt.then;function it(){g.removeEventListener("DOMContentLoaded",it),i.removeEventListener("load",it),f.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?i.setTimeout(f.ready):(g.addEventListener("DOMContentLoaded",it),i.addEventListener("load",it));var It=function(o,d,x,w,D,I,k){var ie=0,Q=o.length,de=x==null;if(b(x)==="object"){D=!0;for(ie in x)It(o,d,ie,x[ie],!0,I,k)}else if(w!==void 0&&(D=!0,R(w)||(k=!0),de&&(k?(d.call(o,w),d=null):(de=d,d=function(Ae,De,xe){return de.call(f(Ae),xe)})),d))for(;ie<Q;ie++)d(o[ie],x,k?w:w.call(o[ie],ie,d(o[ie],x)));return D?o:de?d.call(o):Q?d(o[0],x):I},vt=/^-ms-/,y=/-([a-z])/g;function M(o,d){return d.toUpperCase()}function N(o){return o.replace(vt,"ms-").replace(y,M)}var V=function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType};function J(){this.expando=f.expando+J.uid++}J.uid=1,J.prototype={cache:function(o){var d=o[this.expando];return d||(d={},V(o)&&(o.nodeType?o[this.expando]=d:Object.defineProperty(o,this.expando,{value:d,configurable:!0}))),d},set:function(o,d,x){var w,D=this.cache(o);if(typeof d=="string")D[N(d)]=x;else for(w in d)D[N(w)]=d[w];return D},get:function(o,d){return d===void 0?this.cache(o):o[this.expando]&&o[this.expando][N(d)]},access:function(o,d,x){return d===void 0||d&&typeof d=="string"&&x===void 0?this.get(o,d):(this.set(o,d,x),x!==void 0?x:d)},remove:function(o,d){var x,w=o[this.expando];if(w!==void 0){if(d!==void 0)for(Array.isArray(d)?d=d.map(N):(d=N(d),d=d in w?[d]:d.match(pt)||[]),x=d.length;x--;)delete w[d[x]];(d===void 0||f.isEmptyObject(w))&&(o.nodeType?o[this.expando]=void 0:delete o[this.expando])}},hasData:function(o){var d=o[this.expando];return d!==void 0&&!f.isEmptyObject(d)}};var j=new J,pe=new J,ae=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Pe=/[A-Z]/g;function Ie(o){return o==="true"?!0:o==="false"?!1:o==="null"?null:o===+o+""?+o:ae.test(o)?JSON.parse(o):o}function Ue(o,d,x){var w;if(x===void 0&&o.nodeType===1)if(w="data-"+d.replace(Pe,"-$&").toLowerCase(),x=o.getAttribute(w),typeof x=="string"){try{x=Ie(x)}catch{}pe.set(o,d,x)}else x=void 0;return x}f.extend({hasData:function(o){return pe.hasData(o)||j.hasData(o)},data:function(o,d,x){return pe.access(o,d,x)},removeData:function(o,d){pe.remove(o,d)},_data:function(o,d,x){return j.access(o,d,x)},_removeData:function(o,d){j.remove(o,d)}}),f.fn.extend({data:function(o,d){var x,w,D,I=this[0],k=I&&I.attributes;if(o===void 0){if(this.length&&(D=pe.get(I),I.nodeType===1&&!j.get(I,"hasDataAttrs"))){for(x=k.length;x--;)k[x]&&(w=k[x].name,w.indexOf("data-")===0&&(w=N(w.slice(5)),Ue(I,w,D[w])));j.set(I,"hasDataAttrs",!0)}return D}return typeof o=="object"?this.each(function(){pe.set(this,o)}):It(this,function(ie){var Q;if(I&&ie===void 0)return Q=pe.get(I,o),Q!==void 0||(Q=Ue(I,o),Q!==void 0)?Q:void 0;this.each(function(){pe.set(this,o,ie)})},null,d,arguments.length>1,null,!0)},removeData:function(o){return this.each(function(){pe.remove(this,o)})}}),f.extend({queue:function(o,d,x){var w;if(o)return d=(d||"fx")+"queue",w=j.get(o,d),x&&(!w||Array.isArray(x)?w=j.access(o,d,f.makeArray(x)):w.push(x)),w||[]},dequeue:function(o,d){d=d||"fx";var x=f.queue(o,d),w=x.length,D=x.shift(),I=f._queueHooks(o,d),k=function(){f.dequeue(o,d)};D==="inprogress"&&(D=x.shift(),w--),D&&(d==="fx"&&x.unshift("inprogress"),delete I.stop,D.call(o,k,I)),!w&&I&&I.empty.fire()},_queueHooks:function(o,d){var x=d+"queueHooks";return j.get(o,x)||j.access(o,x,{empty:f.Callbacks("once memory").add(function(){j.remove(o,[d+"queue",x])})})}}),f.fn.extend({queue:function(o,d){var x=2;return typeof o!="string"&&(d=o,o="fx",x--),arguments.length<x?f.queue(this[0],o):d===void 0?this:this.each(function(){var w=f.queue(this,o,d);f._queueHooks(this,o),o==="fx"&&w[0]!=="inprogress"&&f.dequeue(this,o)})},dequeue:function(o){return this.each(function(){f.dequeue(this,o)})},clearQueue:function(o){return this.queue(o||"fx",[])},promise:function(o,d){var x,w=1,D=f.Deferred(),I=this,k=this.length,ie=function(){--w||D.resolveWith(I,[I])};for(typeof o!="string"&&(d=o,o=void 0),o=o||"fx";k--;)x=j.get(I[k],o+"queueHooks"),x&&x.empty&&(w++,x.empty.add(ie));return ie(),D.promise(d)}});var ye=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ot=new RegExp("^(?:([+-])=|)("+ye+")([a-z%]*)$","i"),Y=["Top","Right","Bottom","Left"],Se=g.documentElement,Ge=function(o){return f.contains(o.ownerDocument,o)},We={composed:!0};Se.getRootNode&&(Ge=function(o){return f.contains(o.ownerDocument,o)||o.getRootNode(We)===o.ownerDocument});var $e=function(o,d){return o=d||o,o.style.display==="none"||o.style.display===""&&Ge(o)&&f.css(o,"display")==="none"};function Lt(o,d,x,w){var D,I,k=20,ie=w?function(){return w.cur()}:function(){return f.css(o,d,"")},Q=ie(),de=x&&x[3]||(f.cssNumber[d]?"":"px"),Ae=o.nodeType&&(f.cssNumber[d]||de!=="px"&&+Q)&&ot.exec(f.css(o,d));if(Ae&&Ae[3]!==de){for(Q=Q/2,de=de||Ae[3],Ae=+Q||1;k--;)f.style(o,d,Ae+de),(1-I)*(1-(I=ie()/Q||.5))<=0&&(k=0),Ae=Ae/I;Ae=Ae*2,f.style(o,d,Ae+de),x=x||[]}return x&&(Ae=+Ae||+Q||0,D=x[1]?Ae+(x[1]+1)*x[2]:+x[2],w&&(w.unit=de,w.start=Ae,w.end=D)),D}var dt={};function Dt(o){var d,x=o.ownerDocument,w=o.nodeName,D=dt[w];return D||(d=x.body.appendChild(x.createElement(w)),D=f.css(d,"display"),d.parentNode.removeChild(d),D==="none"&&(D="block"),dt[w]=D,D)}function Xe(o,d){for(var x,w,D=[],I=0,k=o.length;I<k;I++)w=o[I],w.style&&(x=w.style.display,d?(x==="none"&&(D[I]=j.get(w,"display")||null,D[I]||(w.style.display="")),w.style.display===""&&$e(w)&&(D[I]=Dt(w))):x!=="none"&&(D[I]="none",j.set(w,"display",x)));for(I=0;I<k;I++)D[I]!=null&&(o[I].style.display=D[I]);return o}f.fn.extend({show:function(){return Xe(this,!0)},hide:function(){return Xe(this)},toggle:function(o){return typeof o=="boolean"?o?this.show():this.hide():this.each(function(){$e(this)?f(this).show():f(this).hide()})}});var oe=/^(?:checkbox|radio)$/i,He=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ze=/^$|^module$|\/(?:java|ecma)script/i;(function(){var o=g.createDocumentFragment(),d=o.appendChild(g.createElement("div")),x=g.createElement("input");x.setAttribute("type","radio"),x.setAttribute("checked","checked"),x.setAttribute("name","t"),d.appendChild(x),_.checkClone=d.cloneNode(!0).cloneNode(!0).lastChild.checked,d.innerHTML="<textarea>x</textarea>",_.noCloneChecked=!!d.cloneNode(!0).lastChild.defaultValue,d.innerHTML="<option></option>",_.option=!!d.lastChild})();var ut={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ut.tbody=ut.tfoot=ut.colgroup=ut.caption=ut.thead,ut.th=ut.td,_.option||(ut.optgroup=ut.option=[1,"<select multiple='multiple'>","</select>"]);function Qe(o,d){var x;return typeof o.getElementsByTagName<"u"?x=o.getElementsByTagName(d||"*"):typeof o.querySelectorAll<"u"?x=o.querySelectorAll(d||"*"):x=[],d===void 0||d&&W(o,d)?f.merge([o],x):x}function Nt(o,d){for(var x=0,w=o.length;x<w;x++)j.set(o[x],"globalEval",!d||j.get(d[x],"globalEval"))}var Xt=/<|&#?\w+;/;function un(o,d,x,w,D){for(var I,k,ie,Q,de,Ae,De=d.createDocumentFragment(),xe=[],Ye=0,Ct=o.length;Ye<Ct;Ye++)if(I=o[Ye],I||I===0)if(b(I)==="object")f.merge(xe,I.nodeType?[I]:I);else if(!Xt.test(I))xe.push(d.createTextNode(I));else{for(k=k||De.appendChild(d.createElement("div")),ie=(He.exec(I)||["",""])[1].toLowerCase(),Q=ut[ie]||ut._default,k.innerHTML=Q[1]+f.htmlPrefilter(I)+Q[2],Ae=Q[0];Ae--;)k=k.lastChild;f.merge(xe,k.childNodes),k=De.firstChild,k.textContent=""}for(De.textContent="",Ye=0;I=xe[Ye++];){if(w&&f.inArray(I,w)>-1){D&&D.push(I);continue}if(de=Ge(I),k=Qe(De.appendChild(I),"script"),de&&Nt(k),x)for(Ae=0;I=k[Ae++];)Ze.test(I.type||"")&&x.push(I)}return De}var yn=/^([^.]*)(?:\.(.+)|)/;function qt(){return!0}function ln(){return!1}function Fn(o,d,x,w,D,I){var k,ie;if(typeof d=="object"){typeof x!="string"&&(w=w||x,x=void 0);for(ie in d)Fn(o,ie,x,w,d[ie],I);return o}if(w==null&&D==null?(D=x,w=x=void 0):D==null&&(typeof x=="string"?(D=w,w=void 0):(D=w,w=x,x=void 0)),D===!1)D=ln;else if(!D)return o;return I===1&&(k=D,D=function(Q){return f().off(Q),k.apply(this,arguments)},D.guid=k.guid||(k.guid=f.guid++)),o.each(function(){f.event.add(this,d,D,w,x)})}f.event={global:{},add:function(o,d,x,w,D){var I,k,ie,Q,de,Ae,De,xe,Ye,Ct,jt,Ft=j.get(o);if(V(o))for(x.handler&&(I=x,x=I.handler,D=I.selector),D&&f.find.matchesSelector(Se,D),x.guid||(x.guid=f.guid++),(Q=Ft.events)||(Q=Ft.events=Object.create(null)),(k=Ft.handle)||(k=Ft.handle=function(Bn){return typeof f<"u"&&f.event.triggered!==Bn.type?f.event.dispatch.apply(o,arguments):void 0}),d=(d||"").match(pt)||[""],de=d.length;de--;)ie=yn.exec(d[de])||[],Ye=jt=ie[1],Ct=(ie[2]||"").split(".").sort(),Ye&&(De=f.event.special[Ye]||{},Ye=(D?De.delegateType:De.bindType)||Ye,De=f.event.special[Ye]||{},Ae=f.extend({type:Ye,origType:jt,data:w,handler:x,guid:x.guid,selector:D,needsContext:D&&f.expr.match.needsContext.test(D),namespace:Ct.join(".")},I),(xe=Q[Ye])||(xe=Q[Ye]=[],xe.delegateCount=0,(!De.setup||De.setup.call(o,w,Ct,k)===!1)&&o.addEventListener&&o.addEventListener(Ye,k)),De.add&&(De.add.call(o,Ae),Ae.handler.guid||(Ae.handler.guid=x.guid)),D?xe.splice(xe.delegateCount++,0,Ae):xe.push(Ae),f.event.global[Ye]=!0)},remove:function(o,d,x,w,D){var I,k,ie,Q,de,Ae,De,xe,Ye,Ct,jt,Ft=j.hasData(o)&&j.get(o);if(!(!Ft||!(Q=Ft.events))){for(d=(d||"").match(pt)||[""],de=d.length;de--;){if(ie=yn.exec(d[de])||[],Ye=jt=ie[1],Ct=(ie[2]||"").split(".").sort(),!Ye){for(Ye in Q)f.event.remove(o,Ye+d[de],x,w,!0);continue}for(De=f.event.special[Ye]||{},Ye=(w?De.delegateType:De.bindType)||Ye,xe=Q[Ye]||[],ie=ie[2]&&new RegExp("(^|\\.)"+Ct.join("\\.(?:.*\\.|)")+"(\\.|$)"),k=I=xe.length;I--;)Ae=xe[I],(D||jt===Ae.origType)&&(!x||x.guid===Ae.guid)&&(!ie||ie.test(Ae.namespace))&&(!w||w===Ae.selector||w==="**"&&Ae.selector)&&(xe.splice(I,1),Ae.selector&&xe.delegateCount--,De.remove&&De.remove.call(o,Ae));k&&!xe.length&&((!De.teardown||De.teardown.call(o,Ct,Ft.handle)===!1)&&f.removeEvent(o,Ye,Ft.handle),delete Q[Ye])}f.isEmptyObject(Q)&&j.remove(o,"handle events")}},dispatch:function(o){var d,x,w,D,I,k,ie=new Array(arguments.length),Q=f.event.fix(o),de=(j.get(this,"events")||Object.create(null))[Q.type]||[],Ae=f.event.special[Q.type]||{};for(ie[0]=Q,d=1;d<arguments.length;d++)ie[d]=arguments[d];if(Q.delegateTarget=this,!(Ae.preDispatch&&Ae.preDispatch.call(this,Q)===!1)){for(k=f.event.handlers.call(this,Q,de),d=0;(D=k[d++])&&!Q.isPropagationStopped();)for(Q.currentTarget=D.elem,x=0;(I=D.handlers[x++])&&!Q.isImmediatePropagationStopped();)(!Q.rnamespace||I.namespace===!1||Q.rnamespace.test(I.namespace))&&(Q.handleObj=I,Q.data=I.data,w=((f.event.special[I.origType]||{}).handle||I.handler).apply(D.elem,ie),w!==void 0&&(Q.result=w)===!1&&(Q.preventDefault(),Q.stopPropagation()));return Ae.postDispatch&&Ae.postDispatch.call(this,Q),Q.result}},handlers:function(o,d){var x,w,D,I,k,ie=[],Q=d.delegateCount,de=o.target;if(Q&&de.nodeType&&!(o.type==="click"&&o.button>=1)){for(;de!==this;de=de.parentNode||this)if(de.nodeType===1&&!(o.type==="click"&&de.disabled===!0)){for(I=[],k={},x=0;x<Q;x++)w=d[x],D=w.selector+" ",k[D]===void 0&&(k[D]=w.needsContext?f(D,this).index(de)>-1:f.find(D,this,null,[de]).length),k[D]&&I.push(w);I.length&&ie.push({elem:de,handlers:I})}}return de=this,Q<d.length&&ie.push({elem:de,handlers:d.slice(Q)}),ie},addProp:function(o,d){Object.defineProperty(f.Event.prototype,o,{enumerable:!0,configurable:!0,get:R(d)?function(){if(this.originalEvent)return d(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[o]},set:function(x){Object.defineProperty(this,o,{enumerable:!0,configurable:!0,writable:!0,value:x})}})},fix:function(o){return o[f.expando]?o:new f.Event(o)},special:{load:{noBubble:!0},click:{setup:function(o){var d=this||o;return oe.test(d.type)&&d.click&&W(d,"input")&&gi(d,"click",!0),!1},trigger:function(o){var d=this||o;return oe.test(d.type)&&d.click&&W(d,"input")&&gi(d,"click"),!0},_default:function(o){var d=o.target;return oe.test(d.type)&&d.click&&W(d,"input")&&j.get(d,"click")||W(d,"a")}},beforeunload:{postDispatch:function(o){o.result!==void 0&&o.originalEvent&&(o.originalEvent.returnValue=o.result)}}}};function gi(o,d,x){if(!x){j.get(o,d)===void 0&&f.event.add(o,d,qt);return}j.set(o,d,!1),f.event.add(o,d,{namespace:!1,handler:function(w){var D,I=j.get(this,d);if(w.isTrigger&1&&this[d]){if(I)(f.event.special[d]||{}).delegateType&&w.stopPropagation();else if(I=r.call(arguments),j.set(this,d,I),this[d](),D=j.get(this,d),j.set(this,d,!1),I!==D)return w.stopImmediatePropagation(),w.preventDefault(),D}else I&&(j.set(this,d,f.event.trigger(I[0],I.slice(1),this)),w.stopPropagation(),w.isImmediatePropagationStopped=qt)}})}f.removeEvent=function(o,d,x){o.removeEventListener&&o.removeEventListener(d,x)},f.Event=function(o,d){if(!(this instanceof f.Event))return new f.Event(o,d);o&&o.type?(this.originalEvent=o,this.type=o.type,this.isDefaultPrevented=o.defaultPrevented||o.defaultPrevented===void 0&&o.returnValue===!1?qt:ln,this.target=o.target&&o.target.nodeType===3?o.target.parentNode:o.target,this.currentTarget=o.currentTarget,this.relatedTarget=o.relatedTarget):this.type=o,d&&f.extend(this,d),this.timeStamp=o&&o.timeStamp||Date.now(),this[f.expando]=!0},f.Event.prototype={constructor:f.Event,isDefaultPrevented:ln,isPropagationStopped:ln,isImmediatePropagationStopped:ln,isSimulated:!1,preventDefault:function(){var o=this.originalEvent;this.isDefaultPrevented=qt,o&&!this.isSimulated&&o.preventDefault()},stopPropagation:function(){var o=this.originalEvent;this.isPropagationStopped=qt,o&&!this.isSimulated&&o.stopPropagation()},stopImmediatePropagation:function(){var o=this.originalEvent;this.isImmediatePropagationStopped=qt,o&&!this.isSimulated&&o.stopImmediatePropagation(),this.stopPropagation()}},f.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},f.event.addProp),f.each({focus:"focusin",blur:"focusout"},function(o,d){function x(w){if(g.documentMode){var D=j.get(this,"handle"),I=f.event.fix(w);I.type=w.type==="focusin"?"focus":"blur",I.isSimulated=!0,D(w),I.target===I.currentTarget&&D(I)}else f.event.simulate(d,w.target,f.event.fix(w))}f.event.special[o]={setup:function(){var w;if(gi(this,o,!0),g.documentMode)w=j.get(this,d),w||this.addEventListener(d,x),j.set(this,d,(w||0)+1);else return!1},trigger:function(){return gi(this,o),!0},teardown:function(){var w;if(g.documentMode)w=j.get(this,d)-1,w?j.set(this,d,w):(this.removeEventListener(d,x),j.remove(this,d));else return!1},_default:function(w){return j.get(w.target,o)},delegateType:d},f.event.special[d]={setup:function(){var w=this.ownerDocument||this.document||this,D=g.documentMode?this:w,I=j.get(D,d);I||(g.documentMode?this.addEventListener(d,x):w.addEventListener(o,x,!0)),j.set(D,d,(I||0)+1)},teardown:function(){var w=this.ownerDocument||this.document||this,D=g.documentMode?this:w,I=j.get(D,d)-1;I?j.set(D,d,I):(g.documentMode?this.removeEventListener(d,x):w.removeEventListener(o,x,!0),j.remove(D,d))}}}),f.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(o,d){f.event.special[o]={delegateType:d,bindType:d,handle:function(x){var w,D=this,I=x.relatedTarget,k=x.handleObj;return(!I||I!==D&&!f.contains(D,I))&&(x.type=k.origType,w=k.handler.apply(this,arguments),x.type=d),w}}}),f.fn.extend({on:function(o,d,x,w){return Fn(this,o,d,x,w)},one:function(o,d,x,w){return Fn(this,o,d,x,w,1)},off:function(o,d,x){var w,D;if(o&&o.preventDefault&&o.handleObj)return w=o.handleObj,f(o.delegateTarget).off(w.namespace?w.origType+"."+w.namespace:w.origType,w.selector,w.handler),this;if(typeof o=="object"){for(D in o)this.off(D,d,o[D]);return this}return(d===!1||typeof d=="function")&&(x=d,d=void 0),x===!1&&(x=ln),this.each(function(){f.event.remove(this,o,x,d)})}});var ls=/<script|<style|<link/i,ii=/checked\s*(?:[^=]|=\s*.checked.)/i,cs=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Vi(o,d){return W(o,"table")&&W(d.nodeType!==11?d:d.firstChild,"tr")&&f(o).children("tbody")[0]||o}function us(o){return o.type=(o.getAttribute("type")!==null)+"/"+o.type,o}function Gi(o){return(o.type||"").slice(0,5)==="true/"?o.type=o.type.slice(5):o.removeAttribute("type"),o}function hs(o,d){var x,w,D,I,k,ie,Q;if(d.nodeType===1){if(j.hasData(o)&&(I=j.get(o),Q=I.events,Q)){j.remove(d,"handle events");for(D in Q)for(x=0,w=Q[D].length;x<w;x++)f.event.add(d,D,Q[D][x])}pe.hasData(o)&&(k=pe.access(o),ie=f.extend({},k),pe.set(d,ie))}}function aa(o,d){var x=d.nodeName.toLowerCase();x==="input"&&oe.test(o.type)?d.checked=o.checked:(x==="input"||x==="textarea")&&(d.defaultValue=o.defaultValue)}function Ai(o,d,x,w){d=s(d);var D,I,k,ie,Q,de,Ae=0,De=o.length,xe=De-1,Ye=d[0],Ct=R(Ye);if(Ct||De>1&&typeof Ye=="string"&&!_.checkClone&&ii.test(Ye))return o.each(function(jt){var Ft=o.eq(jt);Ct&&(d[0]=Ye.call(this,jt,Ft.html())),Ai(Ft,d,x,w)});if(De&&(D=un(d,o[0].ownerDocument,!1,o,w),I=D.firstChild,D.childNodes.length===1&&(D=I),I||w)){for(k=f.map(Qe(D,"script"),us),ie=k.length;Ae<De;Ae++)Q=D,Ae!==xe&&(Q=f.clone(Q,!0,!0),ie&&f.merge(k,Qe(Q,"script"))),x.call(o[Ae],Q,Ae);if(ie)for(de=k[k.length-1].ownerDocument,f.map(k,Gi),Ae=0;Ae<ie;Ae++)Q=k[Ae],Ze.test(Q.type||"")&&!j.access(Q,"globalEval")&&f.contains(de,Q)&&(Q.src&&(Q.type||"").toLowerCase()!=="module"?f._evalUrl&&!Q.noModule&&f._evalUrl(Q.src,{nonce:Q.nonce||Q.getAttribute("nonce")},de):T(Q.textContent.replace(cs,""),Q,de))}return o}function G(o,d,x){for(var w,D=d?f.filter(d,o):o,I=0;(w=D[I])!=null;I++)!x&&w.nodeType===1&&f.cleanData(Qe(w)),w.parentNode&&(x&&Ge(w)&&Nt(Qe(w,"script")),w.parentNode.removeChild(w));return o}f.extend({htmlPrefilter:function(o){return o},clone:function(o,d,x){var w,D,I,k,ie=o.cloneNode(!0),Q=Ge(o);if(!_.noCloneChecked&&(o.nodeType===1||o.nodeType===11)&&!f.isXMLDoc(o))for(k=Qe(ie),I=Qe(o),w=0,D=I.length;w<D;w++)aa(I[w],k[w]);if(d)if(x)for(I=I||Qe(o),k=k||Qe(ie),w=0,D=I.length;w<D;w++)hs(I[w],k[w]);else hs(o,ie);return k=Qe(ie,"script"),k.length>0&&Nt(k,!Q&&Qe(o,"script")),ie},cleanData:function(o){for(var d,x,w,D=f.event.special,I=0;(x=o[I])!==void 0;I++)if(V(x)){if(d=x[j.expando]){if(d.events)for(w in d.events)D[w]?f.event.remove(x,w):f.removeEvent(x,w,d.handle);x[j.expando]=void 0}x[pe.expando]&&(x[pe.expando]=void 0)}}}),f.fn.extend({detach:function(o){return G(this,o,!0)},remove:function(o){return G(this,o)},text:function(o){return It(this,function(d){return d===void 0?f.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=d)})},null,o,arguments.length)},append:function(){return Ai(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var d=Vi(this,o);d.appendChild(o)}})},prepend:function(){return Ai(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var d=Vi(this,o);d.insertBefore(o,d.firstChild)}})},before:function(){return Ai(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this)})},after:function(){return Ai(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling)})},empty:function(){for(var o,d=0;(o=this[d])!=null;d++)o.nodeType===1&&(f.cleanData(Qe(o,!1)),o.textContent="");return this},clone:function(o,d){return o=o??!1,d=d??o,this.map(function(){return f.clone(this,o,d)})},html:function(o){return It(this,function(d){var x=this[0]||{},w=0,D=this.length;if(d===void 0&&x.nodeType===1)return x.innerHTML;if(typeof d=="string"&&!ls.test(d)&&!ut[(He.exec(d)||["",""])[1].toLowerCase()]){d=f.htmlPrefilter(d);try{for(;w<D;w++)x=this[w]||{},x.nodeType===1&&(f.cleanData(Qe(x,!1)),x.innerHTML=d);x=0}catch{}}x&&this.empty().append(d)},null,o,arguments.length)},replaceWith:function(){var o=[];return Ai(this,arguments,function(d){var x=this.parentNode;f.inArray(this,o)<0&&(f.cleanData(Qe(this)),x&&x.replaceChild(d,this))},o)}}),f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(o,d){f.fn[o]=function(x){for(var w,D=[],I=f(x),k=I.length-1,ie=0;ie<=k;ie++)w=ie===k?this:this.clone(!0),f(I[ie])[d](w),a.apply(D,w.get());return this.pushStack(D)}});var A=new RegExp("^("+ye+")(?!px)[a-z%]+$","i"),P=/^--/,O=function(o){var d=o.ownerDocument.defaultView;return(!d||!d.opener)&&(d=i),d.getComputedStyle(o)},L=function(o,d,x){var w,D,I={};for(D in d)I[D]=o.style[D],o.style[D]=d[D];w=x.call(o);for(D in d)o.style[D]=I[D];return w},C=new RegExp(Y.join("|"),"i");(function(){function o(){if(de){Q.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",de.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Se.appendChild(Q).appendChild(de);var Ae=i.getComputedStyle(de);x=Ae.top!=="1%",ie=d(Ae.marginLeft)===12,de.style.right="60%",I=d(Ae.right)===36,w=d(Ae.width)===36,de.style.position="absolute",D=d(de.offsetWidth/3)===12,Se.removeChild(Q),de=null}}function d(Ae){return Math.round(parseFloat(Ae))}var x,w,D,I,k,ie,Q=g.createElement("div"),de=g.createElement("div");de.style&&(de.style.backgroundClip="content-box",de.cloneNode(!0).style.backgroundClip="",_.clearCloneStyle=de.style.backgroundClip==="content-box",f.extend(_,{boxSizingReliable:function(){return o(),w},pixelBoxStyles:function(){return o(),I},pixelPosition:function(){return o(),x},reliableMarginLeft:function(){return o(),ie},scrollboxSize:function(){return o(),D},reliableTrDimensions:function(){var Ae,De,xe,Ye;return k==null&&(Ae=g.createElement("table"),De=g.createElement("tr"),xe=g.createElement("div"),Ae.style.cssText="position:absolute;left:-11111px;border-collapse:separate",De.style.cssText="box-sizing:content-box;border:1px solid",De.style.height="1px",xe.style.height="9px",xe.style.display="block",Se.appendChild(Ae).appendChild(De).appendChild(xe),Ye=i.getComputedStyle(De),k=parseInt(Ye.height,10)+parseInt(Ye.borderTopWidth,10)+parseInt(Ye.borderBottomWidth,10)===De.offsetHeight,Se.removeChild(Ae)),k}}))})();function Z(o,d,x){var w,D,I,k,ie=P.test(d),Q=o.style;return x=x||O(o),x&&(k=x.getPropertyValue(d)||x[d],ie&&k&&(k=k.replace(_e,"$1")||void 0),k===""&&!Ge(o)&&(k=f.style(o,d)),!_.pixelBoxStyles()&&A.test(k)&&C.test(d)&&(w=Q.width,D=Q.minWidth,I=Q.maxWidth,Q.minWidth=Q.maxWidth=Q.width=k,k=x.width,Q.width=w,Q.minWidth=D,Q.maxWidth=I)),k!==void 0?k+"":k}function H(o,d){return{get:function(){if(o()){delete this.get;return}return(this.get=d).apply(this,arguments)}}}var X=["Webkit","Moz","ms"],se=g.createElement("div").style,fe={};function re(o){for(var d=o[0].toUpperCase()+o.slice(1),x=X.length;x--;)if(o=X[x]+d,o in se)return o}function we(o){var d=f.cssProps[o]||fe[o];return d||(o in se?o:fe[o]=re(o)||o)}var Ne=/^(none|table(?!-c[ea]).+)/,Fe={position:"absolute",visibility:"hidden",display:"block"},Ce={letterSpacing:"0",fontWeight:"400"};function ke(o,d,x){var w=ot.exec(d);return w?Math.max(0,w[2]-(x||0))+(w[3]||"px"):d}function Ve(o,d,x,w,D,I){var k=d==="width"?1:0,ie=0,Q=0,de=0;if(x===(w?"border":"content"))return 0;for(;k<4;k+=2)x==="margin"&&(de+=f.css(o,x+Y[k],!0,D)),w?(x==="content"&&(Q-=f.css(o,"padding"+Y[k],!0,D)),x!=="margin"&&(Q-=f.css(o,"border"+Y[k]+"Width",!0,D))):(Q+=f.css(o,"padding"+Y[k],!0,D),x!=="padding"?Q+=f.css(o,"border"+Y[k]+"Width",!0,D):ie+=f.css(o,"border"+Y[k]+"Width",!0,D));return!w&&I>=0&&(Q+=Math.max(0,Math.ceil(o["offset"+d[0].toUpperCase()+d.slice(1)]-I-Q-ie-.5))||0),Q+de}function St(o,d,x){var w=O(o),D=!_.boxSizingReliable()||x,I=D&&f.css(o,"boxSizing",!1,w)==="border-box",k=I,ie=Z(o,d,w),Q="offset"+d[0].toUpperCase()+d.slice(1);if(A.test(ie)){if(!x)return ie;ie="auto"}return(!_.boxSizingReliable()&&I||!_.reliableTrDimensions()&&W(o,"tr")||ie==="auto"||!parseFloat(ie)&&f.css(o,"display",!1,w)==="inline")&&o.getClientRects().length&&(I=f.css(o,"boxSizing",!1,w)==="border-box",k=Q in o,k&&(ie=o[Q])),ie=parseFloat(ie)||0,ie+Ve(o,d,x||(I?"border":"content"),k,w,ie)+"px"}f.extend({cssHooks:{opacity:{get:function(o,d){if(d){var x=Z(o,"opacity");return x===""?"1":x}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(o,d,x,w){if(!(!o||o.nodeType===3||o.nodeType===8||!o.style)){var D,I,k,ie=N(d),Q=P.test(d),de=o.style;if(Q||(d=we(ie)),k=f.cssHooks[d]||f.cssHooks[ie],x!==void 0){if(I=typeof x,I==="string"&&(D=ot.exec(x))&&D[1]&&(x=Lt(o,d,D),I="number"),x==null||x!==x)return;I==="number"&&!Q&&(x+=D&&D[3]||(f.cssNumber[ie]?"":"px")),!_.clearCloneStyle&&x===""&&d.indexOf("background")===0&&(de[d]="inherit"),(!k||!("set"in k)||(x=k.set(o,x,w))!==void 0)&&(Q?de.setProperty(d,x):de[d]=x)}else return k&&"get"in k&&(D=k.get(o,!1,w))!==void 0?D:de[d]}},css:function(o,d,x,w){var D,I,k,ie=N(d),Q=P.test(d);return Q||(d=we(ie)),k=f.cssHooks[d]||f.cssHooks[ie],k&&"get"in k&&(D=k.get(o,!0,x)),D===void 0&&(D=Z(o,d,w)),D==="normal"&&d in Ce&&(D=Ce[d]),x===""||x?(I=parseFloat(D),x===!0||isFinite(I)?I||0:D):D}}),f.each(["height","width"],function(o,d){f.cssHooks[d]={get:function(x,w,D){if(w)return Ne.test(f.css(x,"display"))&&(!x.getClientRects().length||!x.getBoundingClientRect().width)?L(x,Fe,function(){return St(x,d,D)}):St(x,d,D)},set:function(x,w,D){var I,k=O(x),ie=!_.scrollboxSize()&&k.position==="absolute",Q=ie||D,de=Q&&f.css(x,"boxSizing",!1,k)==="border-box",Ae=D?Ve(x,d,D,de,k):0;return de&&ie&&(Ae-=Math.ceil(x["offset"+d[0].toUpperCase()+d.slice(1)]-parseFloat(k[d])-Ve(x,d,"border",!1,k)-.5)),Ae&&(I=ot.exec(w))&&(I[3]||"px")!=="px"&&(x.style[d]=w,w=f.css(x,d)),ke(x,w,Ae)}}}),f.cssHooks.marginLeft=H(_.reliableMarginLeft,function(o,d){if(d)return(parseFloat(Z(o,"marginLeft"))||o.getBoundingClientRect().left-L(o,{marginLeft:0},function(){return o.getBoundingClientRect().left}))+"px"}),f.each({margin:"",padding:"",border:"Width"},function(o,d){f.cssHooks[o+d]={expand:function(x){for(var w=0,D={},I=typeof x=="string"?x.split(" "):[x];w<4;w++)D[o+Y[w]+d]=I[w]||I[w-2]||I[0];return D}},o!=="margin"&&(f.cssHooks[o+d].set=ke)}),f.fn.extend({css:function(o,d){return It(this,function(x,w,D){var I,k,ie={},Q=0;if(Array.isArray(w)){for(I=O(x),k=w.length;Q<k;Q++)ie[w[Q]]=f.css(x,w[Q],!1,I);return ie}return D!==void 0?f.style(x,w,D):f.css(x,w)},o,d,arguments.length>1)}});function rt(o,d,x,w,D){return new rt.prototype.init(o,d,x,w,D)}f.Tween=rt,rt.prototype={constructor:rt,init:function(o,d,x,w,D,I){this.elem=o,this.prop=x,this.easing=D||f.easing._default,this.options=d,this.start=this.now=this.cur(),this.end=w,this.unit=I||(f.cssNumber[x]?"":"px")},cur:function(){var o=rt.propHooks[this.prop];return o&&o.get?o.get(this):rt.propHooks._default.get(this)},run:function(o){var d,x=rt.propHooks[this.prop];return this.options.duration?this.pos=d=f.easing[this.easing](o,this.options.duration*o,0,1,this.options.duration):this.pos=d=o,this.now=(this.end-this.start)*d+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),x&&x.set?x.set(this):rt.propHooks._default.set(this),this}},rt.prototype.init.prototype=rt.prototype,rt.propHooks={_default:{get:function(o){var d;return o.elem.nodeType!==1||o.elem[o.prop]!=null&&o.elem.style[o.prop]==null?o.elem[o.prop]:(d=f.css(o.elem,o.prop,""),!d||d==="auto"?0:d)},set:function(o){f.fx.step[o.prop]?f.fx.step[o.prop](o):o.elem.nodeType===1&&(f.cssHooks[o.prop]||o.elem.style[we(o.prop)]!=null)?f.style(o.elem,o.prop,o.now+o.unit):o.elem[o.prop]=o.now}}},rt.propHooks.scrollTop=rt.propHooks.scrollLeft={set:function(o){o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},f.easing={linear:function(o){return o},swing:function(o){return .5-Math.cos(o*Math.PI)/2},_default:"swing"},f.fx=rt.prototype.init,f.fx.step={};var st,nt,ze=/^(?:toggle|show|hide)$/,Ot=/queueHooks$/;function Mt(){nt&&(g.hidden===!1&&i.requestAnimationFrame?i.requestAnimationFrame(Mt):i.setTimeout(Mt,f.fx.interval),f.fx.tick())}function Je(){return i.setTimeout(function(){st=void 0}),st=Date.now()}function hn(o,d){var x,w=0,D={height:o};for(d=d?1:0;w<4;w+=2-d)x=Y[w],D["margin"+x]=D["padding"+x]=o;return d&&(D.opacity=D.width=o),D}function Et(o,d,x){for(var w,D=(Yt.tweeners[d]||[]).concat(Yt.tweeners["*"]),I=0,k=D.length;I<k;I++)if(w=D[I].call(x,d,o))return w}function En(o,d,x){var w,D,I,k,ie,Q,de,Ae,De="width"in d||"height"in d,xe=this,Ye={},Ct=o.style,jt=o.nodeType&&$e(o),Ft=j.get(o,"fxshow");x.queue||(k=f._queueHooks(o,"fx"),k.unqueued==null&&(k.unqueued=0,ie=k.empty.fire,k.empty.fire=function(){k.unqueued||ie()}),k.unqueued++,xe.always(function(){xe.always(function(){k.unqueued--,f.queue(o,"fx").length||k.empty.fire()})}));for(w in d)if(D=d[w],ze.test(D)){if(delete d[w],I=I||D==="toggle",D===(jt?"hide":"show"))if(D==="show"&&Ft&&Ft[w]!==void 0)jt=!0;else continue;Ye[w]=Ft&&Ft[w]||f.style(o,w)}if(Q=!f.isEmptyObject(d),!(!Q&&f.isEmptyObject(Ye))){De&&o.nodeType===1&&(x.overflow=[Ct.overflow,Ct.overflowX,Ct.overflowY],de=Ft&&Ft.display,de==null&&(de=j.get(o,"display")),Ae=f.css(o,"display"),Ae==="none"&&(de?Ae=de:(Xe([o],!0),de=o.style.display||de,Ae=f.css(o,"display"),Xe([o]))),(Ae==="inline"||Ae==="inline-block"&&de!=null)&&f.css(o,"float")==="none"&&(Q||(xe.done(function(){Ct.display=de}),de==null&&(Ae=Ct.display,de=Ae==="none"?"":Ae)),Ct.display="inline-block")),x.overflow&&(Ct.overflow="hidden",xe.always(function(){Ct.overflow=x.overflow[0],Ct.overflowX=x.overflow[1],Ct.overflowY=x.overflow[2]})),Q=!1;for(w in Ye)Q||(Ft?"hidden"in Ft&&(jt=Ft.hidden):Ft=j.access(o,"fxshow",{display:de}),I&&(Ft.hidden=!jt),jt&&Xe([o],!0),xe.done(function(){jt||Xe([o]),j.remove(o,"fxshow");for(w in Ye)f.style(o,w,Ye[w])})),Q=Et(jt?Ft[w]:0,w,xe),w in Ft||(Ft[w]=Q.start,jt&&(Q.end=Q.start,Q.start=0))}}function Ri(o,d){var x,w,D,I,k;for(x in o)if(w=N(x),D=d[w],I=o[x],Array.isArray(I)&&(D=I[1],I=o[x]=I[0]),x!==w&&(o[w]=I,delete o[x]),k=f.cssHooks[w],k&&"expand"in k){I=k.expand(I),delete o[w];for(x in I)x in o||(o[x]=I[x],d[x]=D)}else d[w]=D}function Yt(o,d,x){var w,D,I=0,k=Yt.prefilters.length,ie=f.Deferred().always(function(){delete Q.elem}),Q=function(){if(D)return!1;for(var De=st||Je(),xe=Math.max(0,de.startTime+de.duration-De),Ye=xe/de.duration||0,Ct=1-Ye,jt=0,Ft=de.tweens.length;jt<Ft;jt++)de.tweens[jt].run(Ct);return ie.notifyWith(o,[de,Ct,xe]),Ct<1&&Ft?xe:(Ft||ie.notifyWith(o,[de,1,0]),ie.resolveWith(o,[de]),!1)},de=ie.promise({elem:o,props:f.extend({},d),opts:f.extend(!0,{specialEasing:{},easing:f.easing._default},x),originalProperties:d,originalOptions:x,startTime:st||Je(),duration:x.duration,tweens:[],createTween:function(De,xe){var Ye=f.Tween(o,de.opts,De,xe,de.opts.specialEasing[De]||de.opts.easing);return de.tweens.push(Ye),Ye},stop:function(De){var xe=0,Ye=De?de.tweens.length:0;if(D)return this;for(D=!0;xe<Ye;xe++)de.tweens[xe].run(1);return De?(ie.notifyWith(o,[de,1,0]),ie.resolveWith(o,[de,De])):ie.rejectWith(o,[de,De]),this}}),Ae=de.props;for(Ri(Ae,de.opts.specialEasing);I<k;I++)if(w=Yt.prefilters[I].call(de,o,Ae,de.opts),w)return R(w.stop)&&(f._queueHooks(de.elem,de.opts.queue).stop=w.stop.bind(w)),w;return f.map(Ae,Et,de),R(de.opts.start)&&de.opts.start.call(o,de),de.progress(de.opts.progress).done(de.opts.done,de.opts.complete).fail(de.opts.fail).always(de.opts.always),f.fx.timer(f.extend(Q,{elem:o,anim:de,queue:de.opts.queue})),de}f.Animation=f.extend(Yt,{tweeners:{"*":[function(o,d){var x=this.createTween(o,d);return Lt(x.elem,o,ot.exec(d),x),x}]},tweener:function(o,d){R(o)?(d=o,o=["*"]):o=o.match(pt);for(var x,w=0,D=o.length;w<D;w++)x=o[w],Yt.tweeners[x]=Yt.tweeners[x]||[],Yt.tweeners[x].unshift(d)},prefilters:[En],prefilter:function(o,d){d?Yt.prefilters.unshift(o):Yt.prefilters.push(o)}}),f.speed=function(o,d,x){var w=o&&typeof o=="object"?f.extend({},o):{complete:x||!x&&d||R(o)&&o,duration:o,easing:x&&d||d&&!R(d)&&d};return f.fx.off?w.duration=0:typeof w.duration!="number"&&(w.duration in f.fx.speeds?w.duration=f.fx.speeds[w.duration]:w.duration=f.fx.speeds._default),(w.queue==null||w.queue===!0)&&(w.queue="fx"),w.old=w.complete,w.complete=function(){R(w.old)&&w.old.call(this),w.queue&&f.dequeue(this,w.queue)},w},f.fn.extend({fadeTo:function(o,d,x,w){return this.filter($e).css("opacity",0).show().end().animate({opacity:d},o,x,w)},animate:function(o,d,x,w){var D=f.isEmptyObject(o),I=f.speed(d,x,w),k=function(){var ie=Yt(this,f.extend({},o),I);(D||j.get(this,"finish"))&&ie.stop(!0)};return k.finish=k,D||I.queue===!1?this.each(k):this.queue(I.queue,k)},stop:function(o,d,x){var w=function(D){var I=D.stop;delete D.stop,I(x)};return typeof o!="string"&&(x=d,d=o,o=void 0),d&&this.queue(o||"fx",[]),this.each(function(){var D=!0,I=o!=null&&o+"queueHooks",k=f.timers,ie=j.get(this);if(I)ie[I]&&ie[I].stop&&w(ie[I]);else for(I in ie)ie[I]&&ie[I].stop&&Ot.test(I)&&w(ie[I]);for(I=k.length;I--;)k[I].elem===this&&(o==null||k[I].queue===o)&&(k[I].anim.stop(x),D=!1,k.splice(I,1));(D||!x)&&f.dequeue(this,o)})},finish:function(o){return o!==!1&&(o=o||"fx"),this.each(function(){var d,x=j.get(this),w=x[o+"queue"],D=x[o+"queueHooks"],I=f.timers,k=w?w.length:0;for(x.finish=!0,f.queue(this,o,[]),D&&D.stop&&D.stop.call(this,!0),d=I.length;d--;)I[d].elem===this&&I[d].queue===o&&(I[d].anim.stop(!0),I.splice(d,1));for(d=0;d<k;d++)w[d]&&w[d].finish&&w[d].finish.call(this);delete x.finish})}}),f.each(["toggle","show","hide"],function(o,d){var x=f.fn[d];f.fn[d]=function(w,D,I){return w==null||typeof w=="boolean"?x.apply(this,arguments):this.animate(hn(d,!0),w,D,I)}}),f.each({slideDown:hn("show"),slideUp:hn("hide"),slideToggle:hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(o,d){f.fn[o]=function(x,w,D){return this.animate(d,x,w,D)}}),f.timers=[],f.fx.tick=function(){var o,d=0,x=f.timers;for(st=Date.now();d<x.length;d++)o=x[d],!o()&&x[d]===o&&x.splice(d--,1);x.length||f.fx.stop(),st=void 0},f.fx.timer=function(o){f.timers.push(o),f.fx.start()},f.fx.interval=13,f.fx.start=function(){nt||(nt=!0,Mt())},f.fx.stop=function(){nt=null},f.fx.speeds={slow:600,fast:200,_default:400},f.fn.delay=function(o,d){return o=f.fx&&f.fx.speeds[o]||o,d=d||"fx",this.queue(d,function(x,w){var D=i.setTimeout(x,o);w.stop=function(){i.clearTimeout(D)}})},function(){var o=g.createElement("input"),d=g.createElement("select"),x=d.appendChild(g.createElement("option"));o.type="checkbox",_.checkOn=o.value!=="",_.optSelected=x.selected,o=g.createElement("input"),o.value="t",o.type="radio",_.radioValue=o.value==="t"}();var nn,rn=f.expr.attrHandle;f.fn.extend({attr:function(o,d){return It(this,f.attr,o,d,arguments.length>1)},removeAttr:function(o){return this.each(function(){f.removeAttr(this,o)})}}),f.extend({attr:function(o,d,x){var w,D,I=o.nodeType;if(!(I===3||I===8||I===2)){if(typeof o.getAttribute>"u")return f.prop(o,d,x);if((I!==1||!f.isXMLDoc(o))&&(D=f.attrHooks[d.toLowerCase()]||(f.expr.match.bool.test(d)?nn:void 0)),x!==void 0){if(x===null){f.removeAttr(o,d);return}return D&&"set"in D&&(w=D.set(o,x,d))!==void 0?w:(o.setAttribute(d,x+""),x)}return D&&"get"in D&&(w=D.get(o,d))!==null?w:(w=f.find.attr(o,d),w??void 0)}},attrHooks:{type:{set:function(o,d){if(!_.radioValue&&d==="radio"&&W(o,"input")){var x=o.value;return o.setAttribute("type",d),x&&(o.value=x),d}}}},removeAttr:function(o,d){var x,w=0,D=d&&d.match(pt);if(D&&o.nodeType===1)for(;x=D[w++];)o.removeAttribute(x)}}),nn={set:function(o,d,x){return d===!1?f.removeAttr(o,x):o.setAttribute(x,x),x}},f.each(f.expr.match.bool.source.match(/\w+/g),function(o,d){var x=rn[d]||f.find.attr;rn[d]=function(w,D,I){var k,ie,Q=D.toLowerCase();return I||(ie=rn[Q],rn[Q]=k,k=x(w,D,I)!=null?Q:null,rn[Q]=ie),k}});var An=/^(?:input|select|textarea|button)$/i,Rn=/^(?:a|area)$/i;f.fn.extend({prop:function(o,d){return It(this,f.prop,o,d,arguments.length>1)},removeProp:function(o){return this.each(function(){delete this[f.propFix[o]||o]})}}),f.extend({prop:function(o,d,x){var w,D,I=o.nodeType;if(!(I===3||I===8||I===2))return(I!==1||!f.isXMLDoc(o))&&(d=f.propFix[d]||d,D=f.propHooks[d]),x!==void 0?D&&"set"in D&&(w=D.set(o,x,d))!==void 0?w:o[d]=x:D&&"get"in D&&(w=D.get(o,d))!==null?w:o[d]},propHooks:{tabIndex:{get:function(o){var d=f.find.attr(o,"tabindex");return d?parseInt(d,10):An.test(o.nodeName)||Rn.test(o.nodeName)&&o.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),_.optSelected||(f.propHooks.selected={get:function(o){var d=o.parentNode;return d&&d.parentNode&&d.parentNode.selectedIndex,null},set:function(o){var d=o.parentNode;d&&(d.selectedIndex,d.parentNode&&d.parentNode.selectedIndex)}}),f.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){f.propFix[this.toLowerCase()]=this});function pn(o){var d=o.match(pt)||[];return d.join(" ")}function fn(o){return o.getAttribute&&o.getAttribute("class")||""}function tn(o){return Array.isArray(o)?o:typeof o=="string"?o.match(pt)||[]:[]}f.fn.extend({addClass:function(o){var d,x,w,D,I,k;return R(o)?this.each(function(ie){f(this).addClass(o.call(this,ie,fn(this)))}):(d=tn(o),d.length?this.each(function(){if(w=fn(this),x=this.nodeType===1&&" "+pn(w)+" ",x){for(I=0;I<d.length;I++)D=d[I],x.indexOf(" "+D+" ")<0&&(x+=D+" ");k=pn(x),w!==k&&this.setAttribute("class",k)}}):this)},removeClass:function(o){var d,x,w,D,I,k;return R(o)?this.each(function(ie){f(this).removeClass(o.call(this,ie,fn(this)))}):arguments.length?(d=tn(o),d.length?this.each(function(){if(w=fn(this),x=this.nodeType===1&&" "+pn(w)+" ",x){for(I=0;I<d.length;I++)for(D=d[I];x.indexOf(" "+D+" ")>-1;)x=x.replace(" "+D+" "," ");k=pn(x),w!==k&&this.setAttribute("class",k)}}):this):this.attr("class","")},toggleClass:function(o,d){var x,w,D,I,k=typeof o,ie=k==="string"||Array.isArray(o);return R(o)?this.each(function(Q){f(this).toggleClass(o.call(this,Q,fn(this),d),d)}):typeof d=="boolean"&&ie?d?this.addClass(o):this.removeClass(o):(x=tn(o),this.each(function(){if(ie)for(I=f(this),D=0;D<x.length;D++)w=x[D],I.hasClass(w)?I.removeClass(w):I.addClass(w);else(o===void 0||k==="boolean")&&(w=fn(this),w&&j.set(this,"__className__",w),this.setAttribute&&this.setAttribute("class",w||o===!1?"":j.get(this,"__className__")||""))}))},hasClass:function(o){var d,x,w=0;for(d=" "+o+" ";x=this[w++];)if(x.nodeType===1&&(" "+pn(fn(x))+" ").indexOf(d)>-1)return!0;return!1}});var zr=/\r/g;f.fn.extend({val:function(o){var d,x,w,D=this[0];return arguments.length?(w=R(o),this.each(function(I){var k;this.nodeType===1&&(w?k=o.call(this,I,f(this).val()):k=o,k==null?k="":typeof k=="number"?k+="":Array.isArray(k)&&(k=f.map(k,function(ie){return ie==null?"":ie+""})),d=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()],(!d||!("set"in d)||d.set(this,k,"value")===void 0)&&(this.value=k))})):D?(d=f.valHooks[D.type]||f.valHooks[D.nodeName.toLowerCase()],d&&"get"in d&&(x=d.get(D,"value"))!==void 0?x:(x=D.value,typeof x=="string"?x.replace(zr,""):x??"")):void 0}}),f.extend({valHooks:{option:{get:function(o){var d=f.find.attr(o,"value");return d??pn(f.text(o))}},select:{get:function(o){var d,x,w,D=o.options,I=o.selectedIndex,k=o.type==="select-one",ie=k?null:[],Q=k?I+1:D.length;for(I<0?w=Q:w=k?I:0;w<Q;w++)if(x=D[w],(x.selected||w===I)&&!x.disabled&&(!x.parentNode.disabled||!W(x.parentNode,"optgroup"))){if(d=f(x).val(),k)return d;ie.push(d)}return ie},set:function(o,d){for(var x,w,D=o.options,I=f.makeArray(d),k=D.length;k--;)w=D[k],(w.selected=f.inArray(f.valHooks.option.get(w),I)>-1)&&(x=!0);return x||(o.selectedIndex=-1),I}}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]={set:function(o,d){if(Array.isArray(d))return o.checked=f.inArray(f(o).val(),d)>-1}},_.checkOn||(f.valHooks[this].get=function(o){return o.getAttribute("value")===null?"on":o.value})});var _i=i.location,fr={guid:Date.now()},Wi=/\?/;f.parseXML=function(o){var d,x;if(!o||typeof o!="string")return null;try{d=new i.DOMParser().parseFromString(o,"text/xml")}catch{}return x=d&&d.getElementsByTagName("parsererror")[0],(!d||x)&&f.error("Invalid XML: "+(x?f.map(x.childNodes,function(w){return w.textContent}).join(`
`):o)),d};var dr=/^(?:focusinfocus|focusoutblur)$/,Hu=function(o){o.stopPropagation()};f.extend(f.event,{trigger:function(o,d,x,w){var D,I,k,ie,Q,de,Ae,De,xe=[x||g],Ye=p.call(o,"type")?o.type:o,Ct=p.call(o,"namespace")?o.namespace.split("."):[];if(I=De=k=x=x||g,!(x.nodeType===3||x.nodeType===8)&&!dr.test(Ye+f.event.triggered)&&(Ye.indexOf(".")>-1&&(Ct=Ye.split("."),Ye=Ct.shift(),Ct.sort()),Q=Ye.indexOf(":")<0&&"on"+Ye,o=o[f.expando]?o:new f.Event(Ye,typeof o=="object"&&o),o.isTrigger=w?2:3,o.namespace=Ct.join("."),o.rnamespace=o.namespace?new RegExp("(^|\\.)"+Ct.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,o.result=void 0,o.target||(o.target=x),d=d==null?[o]:f.makeArray(d,[o]),Ae=f.event.special[Ye]||{},!(!w&&Ae.trigger&&Ae.trigger.apply(x,d)===!1))){if(!w&&!Ae.noBubble&&!E(x)){for(ie=Ae.delegateType||Ye,dr.test(ie+Ye)||(I=I.parentNode);I;I=I.parentNode)xe.push(I),k=I;k===(x.ownerDocument||g)&&xe.push(k.defaultView||k.parentWindow||i)}for(D=0;(I=xe[D++])&&!o.isPropagationStopped();)De=I,o.type=D>1?ie:Ae.bindType||Ye,de=(j.get(I,"events")||Object.create(null))[o.type]&&j.get(I,"handle"),de&&de.apply(I,d),de=Q&&I[Q],de&&de.apply&&V(I)&&(o.result=de.apply(I,d),o.result===!1&&o.preventDefault());return o.type=Ye,!w&&!o.isDefaultPrevented()&&(!Ae._default||Ae._default.apply(xe.pop(),d)===!1)&&V(x)&&Q&&R(x[Ye])&&!E(x)&&(k=x[Q],k&&(x[Q]=null),f.event.triggered=Ye,o.isPropagationStopped()&&De.addEventListener(Ye,Hu),x[Ye](),o.isPropagationStopped()&&De.removeEventListener(Ye,Hu),f.event.triggered=void 0,k&&(x[Q]=k)),o.result}},simulate:function(o,d,x){var w=f.extend(new f.Event,x,{type:o,isSimulated:!0});f.event.trigger(w,null,d)}}),f.fn.extend({trigger:function(o,d){return this.each(function(){f.event.trigger(o,d,this)})},triggerHandler:function(o,d){var x=this[0];if(x)return f.event.trigger(o,d,x,!0)}});var _p=/\[\]$/,Vu=/\r?\n/g,vp=/^(?:submit|button|image|reset|file)$/i,yp=/^(?:input|select|textarea|keygen)/i;function wl(o,d,x,w){var D;if(Array.isArray(d))f.each(d,function(I,k){x||_p.test(o)?w(o,k):wl(o+"["+(typeof k=="object"&&k!=null?I:"")+"]",k,x,w)});else if(!x&&b(d)==="object")for(D in d)wl(o+"["+D+"]",d[D],x,w);else w(o,d)}f.param=function(o,d){var x,w=[],D=function(I,k){var ie=R(k)?k():k;w[w.length]=encodeURIComponent(I)+"="+encodeURIComponent(ie??"")};if(o==null)return"";if(Array.isArray(o)||o.jquery&&!f.isPlainObject(o))f.each(o,function(){D(this.name,this.value)});else for(x in o)wl(x,o[x],d,D);return w.join("&")},f.fn.extend({serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var o=f.prop(this,"elements");return o?f.makeArray(o):this}).filter(function(){var o=this.type;return this.name&&!f(this).is(":disabled")&&yp.test(this.nodeName)&&!vp.test(o)&&(this.checked||!oe.test(o))}).map(function(o,d){var x=f(this).val();return x==null?null:Array.isArray(x)?f.map(x,function(w){return{name:d.name,value:w.replace(Vu,`\r
`)}}):{name:d.name,value:x.replace(Vu,`\r
`)}}).get()}});var xp=/%20/g,bp=/#.*$/,Sp=/([?&])_=[^&]*/,Tp=/^(.*?):[ \t]*([^\r\n]*)$/mg,Mp=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,wp=/^(?:GET|HEAD)$/,Ep=/^\/\//,Gu={},El={},Wu="*/".concat("*"),Al=g.createElement("a");Al.href=_i.href;function Xu(o){return function(d,x){typeof d!="string"&&(x=d,d="*");var w,D=0,I=d.toLowerCase().match(pt)||[];if(R(x))for(;w=I[D++];)w[0]==="+"?(w=w.slice(1)||"*",(o[w]=o[w]||[]).unshift(x)):(o[w]=o[w]||[]).push(x)}}function qu(o,d,x,w){var D={},I=o===El;function k(ie){var Q;return D[ie]=!0,f.each(o[ie]||[],function(de,Ae){var De=Ae(d,x,w);if(typeof De=="string"&&!I&&!D[De])return d.dataTypes.unshift(De),k(De),!1;if(I)return!(Q=De)}),Q}return k(d.dataTypes[0])||!D["*"]&&k("*")}function Rl(o,d){var x,w,D=f.ajaxSettings.flatOptions||{};for(x in d)d[x]!==void 0&&((D[x]?o:w||(w={}))[x]=d[x]);return w&&f.extend(!0,o,w),o}function Ap(o,d,x){for(var w,D,I,k,ie=o.contents,Q=o.dataTypes;Q[0]==="*";)Q.shift(),w===void 0&&(w=o.mimeType||d.getResponseHeader("Content-Type"));if(w){for(D in ie)if(ie[D]&&ie[D].test(w)){Q.unshift(D);break}}if(Q[0]in x)I=Q[0];else{for(D in x){if(!Q[0]||o.converters[D+" "+Q[0]]){I=D;break}k||(k=D)}I=I||k}if(I)return I!==Q[0]&&Q.unshift(I),x[I]}function Rp(o,d,x,w){var D,I,k,ie,Q,de={},Ae=o.dataTypes.slice();if(Ae[1])for(k in o.converters)de[k.toLowerCase()]=o.converters[k];for(I=Ae.shift();I;)if(o.responseFields[I]&&(x[o.responseFields[I]]=d),!Q&&w&&o.dataFilter&&(d=o.dataFilter(d,o.dataType)),Q=I,I=Ae.shift(),I){if(I==="*")I=Q;else if(Q!=="*"&&Q!==I){if(k=de[Q+" "+I]||de["* "+I],!k){for(D in de)if(ie=D.split(" "),ie[1]===I&&(k=de[Q+" "+ie[0]]||de["* "+ie[0]],k)){k===!0?k=de[D]:de[D]!==!0&&(I=ie[0],Ae.unshift(ie[1]));break}}if(k!==!0)if(k&&o.throws)d=k(d);else try{d=k(d)}catch(De){return{state:"parsererror",error:k?De:"No conversion from "+Q+" to "+I}}}}return{state:"success",data:d}}f.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_i.href,type:"GET",isLocal:Mp.test(_i.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wu,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":f.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(o,d){return d?Rl(Rl(o,f.ajaxSettings),d):Rl(f.ajaxSettings,o)},ajaxPrefilter:Xu(Gu),ajaxTransport:Xu(El),ajax:function(o,d){typeof o=="object"&&(d=o,o=void 0),d=d||{};var x,w,D,I,k,ie,Q,de,Ae,De,xe=f.ajaxSetup({},d),Ye=xe.context||xe,Ct=xe.context&&(Ye.nodeType||Ye.jquery)?f(Ye):f.event,jt=f.Deferred(),Ft=f.Callbacks("once memory"),Bn=xe.statusCode||{},Cn={},Ci={},Pi="canceled",Wt={readyState:0,getResponseHeader:function($t){var gn;if(Q){if(!I)for(I={};gn=Tp.exec(D);)I[gn[1].toLowerCase()+" "]=(I[gn[1].toLowerCase()+" "]||[]).concat(gn[2]);gn=I[$t.toLowerCase()+" "]}return gn==null?null:gn.join(", ")},getAllResponseHeaders:function(){return Q?D:null},setRequestHeader:function($t,gn){return Q==null&&($t=Ci[$t.toLowerCase()]=Ci[$t.toLowerCase()]||$t,Cn[$t]=gn),this},overrideMimeType:function($t){return Q==null&&(xe.mimeType=$t),this},statusCode:function($t){var gn;if($t)if(Q)Wt.always($t[Wt.status]);else for(gn in $t)Bn[gn]=[Bn[gn],$t[gn]];return this},abort:function($t){var gn=$t||Pi;return x&&x.abort(gn),kr(0,gn),this}};if(jt.promise(Wt),xe.url=((o||xe.url||_i.href)+"").replace(Ep,_i.protocol+"//"),xe.type=d.method||d.type||xe.method||xe.type,xe.dataTypes=(xe.dataType||"*").toLowerCase().match(pt)||[""],xe.crossDomain==null){ie=g.createElement("a");try{ie.href=xe.url,ie.href=ie.href,xe.crossDomain=Al.protocol+"//"+Al.host!=ie.protocol+"//"+ie.host}catch{xe.crossDomain=!0}}if(xe.data&&xe.processData&&typeof xe.data!="string"&&(xe.data=f.param(xe.data,xe.traditional)),qu(Gu,xe,d,Wt),Q)return Wt;de=f.event&&xe.global,de&&f.active++===0&&f.event.trigger("ajaxStart"),xe.type=xe.type.toUpperCase(),xe.hasContent=!wp.test(xe.type),w=xe.url.replace(bp,""),xe.hasContent?xe.data&&xe.processData&&(xe.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(xe.data=xe.data.replace(xp,"+")):(De=xe.url.slice(w.length),xe.data&&(xe.processData||typeof xe.data=="string")&&(w+=(Wi.test(w)?"&":"?")+xe.data,delete xe.data),xe.cache===!1&&(w=w.replace(Sp,"$1"),De=(Wi.test(w)?"&":"?")+"_="+fr.guid+++De),xe.url=w+De),xe.ifModified&&(f.lastModified[w]&&Wt.setRequestHeader("If-Modified-Since",f.lastModified[w]),f.etag[w]&&Wt.setRequestHeader("If-None-Match",f.etag[w])),(xe.data&&xe.hasContent&&xe.contentType!==!1||d.contentType)&&Wt.setRequestHeader("Content-Type",xe.contentType),Wt.setRequestHeader("Accept",xe.dataTypes[0]&&xe.accepts[xe.dataTypes[0]]?xe.accepts[xe.dataTypes[0]]+(xe.dataTypes[0]!=="*"?", "+Wu+"; q=0.01":""):xe.accepts["*"]);for(Ae in xe.headers)Wt.setRequestHeader(Ae,xe.headers[Ae]);if(xe.beforeSend&&(xe.beforeSend.call(Ye,Wt,xe)===!1||Q))return Wt.abort();if(Pi="abort",Ft.add(xe.complete),Wt.done(xe.success),Wt.fail(xe.error),x=qu(El,xe,d,Wt),!x)kr(-1,"No Transport");else{if(Wt.readyState=1,de&&Ct.trigger("ajaxSend",[Wt,xe]),Q)return Wt;xe.async&&xe.timeout>0&&(k=i.setTimeout(function(){Wt.abort("timeout")},xe.timeout));try{Q=!1,x.send(Cn,kr)}catch($t){if(Q)throw $t;kr(-1,$t)}}function kr($t,gn,la,Pl){var Li,ca,Di,pr,mr,ai=gn;Q||(Q=!0,k&&i.clearTimeout(k),x=void 0,D=Pl||"",Wt.readyState=$t>0?4:0,Li=$t>=200&&$t<300||$t===304,la&&(pr=Ap(xe,Wt,la)),!Li&&f.inArray("script",xe.dataTypes)>-1&&f.inArray("json",xe.dataTypes)<0&&(xe.converters["text script"]=function(){}),pr=Rp(xe,pr,Wt,Li),Li?(xe.ifModified&&(mr=Wt.getResponseHeader("Last-Modified"),mr&&(f.lastModified[w]=mr),mr=Wt.getResponseHeader("etag"),mr&&(f.etag[w]=mr)),$t===204||xe.type==="HEAD"?ai="nocontent":$t===304?ai="notmodified":(ai=pr.state,ca=pr.data,Di=pr.error,Li=!Di)):(Di=ai,($t||!ai)&&(ai="error",$t<0&&($t=0))),Wt.status=$t,Wt.statusText=(gn||ai)+"",Li?jt.resolveWith(Ye,[ca,ai,Wt]):jt.rejectWith(Ye,[Wt,ai,Di]),Wt.statusCode(Bn),Bn=void 0,de&&Ct.trigger(Li?"ajaxSuccess":"ajaxError",[Wt,xe,Li?ca:Di]),Ft.fireWith(Ye,[Wt,ai]),de&&(Ct.trigger("ajaxComplete",[Wt,xe]),--f.active||f.event.trigger("ajaxStop")))}return Wt},getJSON:function(o,d,x){return f.get(o,d,x,"json")},getScript:function(o,d){return f.get(o,void 0,d,"script")}}),f.each(["get","post"],function(o,d){f[d]=function(x,w,D,I){return R(w)&&(I=I||D,D=w,w=void 0),f.ajax(f.extend({url:x,type:d,dataType:I,data:w,success:D},f.isPlainObject(x)&&x))}}),f.ajaxPrefilter(function(o){var d;for(d in o.headers)d.toLowerCase()==="content-type"&&(o.contentType=o.headers[d]||"")}),f._evalUrl=function(o,d,x){return f.ajax({url:o,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(w){f.globalEval(w,d,x)}})},f.fn.extend({wrapAll:function(o){var d;return this[0]&&(R(o)&&(o=o.call(this[0])),d=f(o,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&d.insertBefore(this[0]),d.map(function(){for(var x=this;x.firstElementChild;)x=x.firstElementChild;return x}).append(this)),this},wrapInner:function(o){return R(o)?this.each(function(d){f(this).wrapInner(o.call(this,d))}):this.each(function(){var d=f(this),x=d.contents();x.length?x.wrapAll(o):d.append(o)})},wrap:function(o){var d=R(o);return this.each(function(x){f(this).wrapAll(d?o.call(this,x):o)})},unwrap:function(o){return this.parent(o).not("body").each(function(){f(this).replaceWith(this.childNodes)}),this}}),f.expr.pseudos.hidden=function(o){return!f.expr.pseudos.visible(o)},f.expr.pseudos.visible=function(o){return!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length)},f.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch{}};var Cp={0:200,1223:204},oa=f.ajaxSettings.xhr();_.cors=!!oa&&"withCredentials"in oa,_.ajax=oa=!!oa,f.ajaxTransport(function(o){var d,x;if(_.cors||oa&&!o.crossDomain)return{send:function(w,D){var I,k=o.xhr();if(k.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(I in o.xhrFields)k[I]=o.xhrFields[I];o.mimeType&&k.overrideMimeType&&k.overrideMimeType(o.mimeType),!o.crossDomain&&!w["X-Requested-With"]&&(w["X-Requested-With"]="XMLHttpRequest");for(I in w)k.setRequestHeader(I,w[I]);d=function(ie){return function(){d&&(d=x=k.onload=k.onerror=k.onabort=k.ontimeout=k.onreadystatechange=null,ie==="abort"?k.abort():ie==="error"?typeof k.status!="number"?D(0,"error"):D(k.status,k.statusText):D(Cp[k.status]||k.status,k.statusText,(k.responseType||"text")!=="text"||typeof k.responseText!="string"?{binary:k.response}:{text:k.responseText},k.getAllResponseHeaders()))}},k.onload=d(),x=k.onerror=k.ontimeout=d("error"),k.onabort!==void 0?k.onabort=x:k.onreadystatechange=function(){k.readyState===4&&i.setTimeout(function(){d&&x()})},d=d("abort");try{k.send(o.hasContent&&o.data||null)}catch(ie){if(d)throw ie}},abort:function(){d&&d()}}}),f.ajaxPrefilter(function(o){o.crossDomain&&(o.contents.script=!1)}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(o){return f.globalEval(o),o}}}),f.ajaxPrefilter("script",function(o){o.cache===void 0&&(o.cache=!1),o.crossDomain&&(o.type="GET")}),f.ajaxTransport("script",function(o){if(o.crossDomain||o.scriptAttrs){var d,x;return{send:function(w,D){d=f("<script>").attr(o.scriptAttrs||{}).prop({charset:o.scriptCharset,src:o.url}).on("load error",x=function(I){d.remove(),x=null,I&&D(I.type==="error"?404:200,I.type)}),g.head.appendChild(d[0])},abort:function(){x&&x()}}}});var Yu=[],Cl=/(=)\?(?=&|$)|\?\?/;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var o=Yu.pop()||f.expando+"_"+fr.guid++;return this[o]=!0,o}}),f.ajaxPrefilter("json jsonp",function(o,d,x){var w,D,I,k=o.jsonp!==!1&&(Cl.test(o.url)?"url":typeof o.data=="string"&&(o.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Cl.test(o.data)&&"data");if(k||o.dataTypes[0]==="jsonp")return w=o.jsonpCallback=R(o.jsonpCallback)?o.jsonpCallback():o.jsonpCallback,k?o[k]=o[k].replace(Cl,"$1"+w):o.jsonp!==!1&&(o.url+=(Wi.test(o.url)?"&":"?")+o.jsonp+"="+w),o.converters["script json"]=function(){return I||f.error(w+" was not called"),I[0]},o.dataTypes[0]="json",D=i[w],i[w]=function(){I=arguments},x.always(function(){D===void 0?f(i).removeProp(w):i[w]=D,o[w]&&(o.jsonpCallback=d.jsonpCallback,Yu.push(w)),I&&R(D)&&D(I[0]),I=D=void 0}),"script"}),_.createHTMLDocument=function(){var o=g.implementation.createHTMLDocument("").body;return o.innerHTML="<form></form><form></form>",o.childNodes.length===2}(),f.parseHTML=function(o,d,x){if(typeof o!="string")return[];typeof d=="boolean"&&(x=d,d=!1);var w,D,I;return d||(_.createHTMLDocument?(d=g.implementation.createHTMLDocument(""),w=d.createElement("base"),w.href=g.location.href,d.head.appendChild(w)):d=g),D=Be.exec(o),I=!x&&[],D?[d.createElement(D[1])]:(D=un([o],d,I),I&&I.length&&f(I).remove(),f.merge([],D.childNodes))},f.fn.load=function(o,d,x){var w,D,I,k=this,ie=o.indexOf(" ");return ie>-1&&(w=pn(o.slice(ie)),o=o.slice(0,ie)),R(d)?(x=d,d=void 0):d&&typeof d=="object"&&(D="POST"),k.length>0&&f.ajax({url:o,type:D||"GET",dataType:"html",data:d}).done(function(Q){I=arguments,k.html(w?f("<div>").append(f.parseHTML(Q)).find(w):Q)}).always(x&&function(Q,de){k.each(function(){x.apply(this,I||[Q.responseText,de,Q])})}),this},f.expr.pseudos.animated=function(o){return f.grep(f.timers,function(d){return o===d.elem}).length},f.offset={setOffset:function(o,d,x){var w,D,I,k,ie,Q,de,Ae=f.css(o,"position"),De=f(o),xe={};Ae==="static"&&(o.style.position="relative"),ie=De.offset(),I=f.css(o,"top"),Q=f.css(o,"left"),de=(Ae==="absolute"||Ae==="fixed")&&(I+Q).indexOf("auto")>-1,de?(w=De.position(),k=w.top,D=w.left):(k=parseFloat(I)||0,D=parseFloat(Q)||0),R(d)&&(d=d.call(o,x,f.extend({},ie))),d.top!=null&&(xe.top=d.top-ie.top+k),d.left!=null&&(xe.left=d.left-ie.left+D),"using"in d?d.using.call(o,xe):De.css(xe)}},f.fn.extend({offset:function(o){if(arguments.length)return o===void 0?this:this.each(function(D){f.offset.setOffset(this,o,D)});var d,x,w=this[0];if(w)return w.getClientRects().length?(d=w.getBoundingClientRect(),x=w.ownerDocument.defaultView,{top:d.top+x.pageYOffset,left:d.left+x.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var o,d,x,w=this[0],D={top:0,left:0};if(f.css(w,"position")==="fixed")d=w.getBoundingClientRect();else{for(d=this.offset(),x=w.ownerDocument,o=w.offsetParent||x.documentElement;o&&(o===x.body||o===x.documentElement)&&f.css(o,"position")==="static";)o=o.parentNode;o&&o!==w&&o.nodeType===1&&(D=f(o).offset(),D.top+=f.css(o,"borderTopWidth",!0),D.left+=f.css(o,"borderLeftWidth",!0))}return{top:d.top-D.top-f.css(w,"marginTop",!0),left:d.left-D.left-f.css(w,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var o=this.offsetParent;o&&f.css(o,"position")==="static";)o=o.offsetParent;return o||Se})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(o,d){var x=d==="pageYOffset";f.fn[o]=function(w){return It(this,function(D,I,k){var ie;if(E(D)?ie=D:D.nodeType===9&&(ie=D.defaultView),k===void 0)return ie?ie[d]:D[I];ie?ie.scrollTo(x?ie.pageXOffset:k,x?k:ie.pageYOffset):D[I]=k},o,w,arguments.length)}}),f.each(["top","left"],function(o,d){f.cssHooks[d]=H(_.pixelPosition,function(x,w){if(w)return w=Z(x,d),A.test(w)?f(x).position()[d]+"px":w})}),f.each({Height:"height",Width:"width"},function(o,d){f.each({padding:"inner"+o,content:d,"":"outer"+o},function(x,w){f.fn[w]=function(D,I){var k=arguments.length&&(x||typeof D!="boolean"),ie=x||(D===!0||I===!0?"margin":"border");return It(this,function(Q,de,Ae){var De;return E(Q)?w.indexOf("outer")===0?Q["inner"+o]:Q.document.documentElement["client"+o]:Q.nodeType===9?(De=Q.documentElement,Math.max(Q.body["scroll"+o],De["scroll"+o],Q.body["offset"+o],De["offset"+o],De["client"+o])):Ae===void 0?f.css(Q,de,ie):f.style(Q,de,Ae,ie)},d,k?D:void 0,k)}})}),f.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(o,d){f.fn[d]=function(x){return this.on(d,x)}}),f.fn.extend({bind:function(o,d,x){return this.on(o,null,d,x)},unbind:function(o,d){return this.off(o,null,d)},delegate:function(o,d,x,w){return this.on(d,o,x,w)},undelegate:function(o,d,x){return arguments.length===1?this.off(o,"**"):this.off(d,o||"**",x)},hover:function(o,d){return this.on("mouseenter",o).on("mouseleave",d||o)}}),f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(o,d){f.fn[d]=function(x,w){return arguments.length>0?this.on(d,null,x,w):this.trigger(d)}});var Pp=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;f.proxy=function(o,d){var x,w,D;if(typeof d=="string"&&(x=o[d],d=o,o=x),!!R(o))return w=r.call(arguments,2),D=function(){return o.apply(d||this,w.concat(r.call(arguments)))},D.guid=o.guid=o.guid||f.guid++,D},f.holdReady=function(o){o?f.readyWait++:f.ready(!0)},f.isArray=Array.isArray,f.parseJSON=JSON.parse,f.nodeName=W,f.isFunction=R,f.isWindow=E,f.camelCase=N,f.type=b,f.now=Date.now,f.isNumeric=function(o){var d=f.type(o);return(d==="number"||d==="string")&&!isNaN(o-parseFloat(o))},f.trim=function(o){return o==null?"":(o+"").replace(Pp,"$1")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return f});var Lp=i.jQuery,Dp=i.$;return f.noConflict=function(o){return i.$===f&&(i.$=Dp),o&&i.jQuery===f&&(i.jQuery=Lp),f},typeof e>"u"&&(i.jQuery=i.$=f),f})});var an=document.querySelector("#magic");console.log(an);uh();var Ut={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};function Xl(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}var xi=[],Vl=[];xi.push(new Xl);var rh=jp(an),he=rh.gl,Yn=rh.ext;$p()&&(Ut.DYE_RESOLUTION=512);Yn.supportLinearFiltering||(Ut.DYE_RESOLUTION=512,Ut.SHADING=!1,Ut.BLOOM=!1,Ut.SUNRAYS=!1);function jp(i){var e={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},t=i.getContext("webgl2",e),n=!!t;n||(t=i.getContext("webgl",e)||i.getContext("experimental-webgl",e));var r,s;n?(t.getExtension("EXT_color_buffer_float"),s=t.getExtension("OES_texture_float_linear")):(r=t.getExtension("OES_texture_half_float"),s=t.getExtension("OES_texture_half_float_linear")),t.clearColor(0,0,0,1);var a=n?t.HALF_FLOAT:r.HALF_FLOAT_OES,l,u,h;return n?(l=yr(t,t.RGBA16F,t.RGBA,a),u=yr(t,t.RG16F,t.RG,a),h=yr(t,t.R16F,t.RED,a)):(l=yr(t,t.RGBA,t.RGBA,a),u=yr(t,t.RGBA,t.RGBA,a),h=yr(t,t.RGBA,t.RGBA,a)),{gl:t,ext:{formatRGBA:l,formatRG:u,formatR:h,halfFloatTexType:a,supportLinearFiltering:s}}}function yr(i,e,t,n){if(!Zp(i,e,t,n))switch(e){case i.R16F:return yr(i,i.RG16F,i.RG,n);case i.RG16F:return yr(i,i.RGBA16F,i.RGBA,n);default:return null}return{internalFormat:e,format:t}}function Zp(i,e,t,n){var r=i.createTexture();i.bindTexture(i.TEXTURE_2D,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,e,4,4,0,t,n,null);var s=i.createFramebuffer();i.bindFramebuffer(i.FRAMEBUFFER,s),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,r,0);var a=i.checkFramebufferStatus(i.FRAMEBUFFER);return a==i.FRAMEBUFFER_COMPLETE}function $p(){return/Mobi|Android/i.test(navigator.userAgent)}var ql=function(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]};ql.prototype.setKeywords=function(e){for(var t=0,n=0;n<e.length;n++)t+=zm(e[n]);var r=this.programs[t];if(r==null){var s=Tn(he.FRAGMENT_SHADER,this.fragmentShaderSource,e);r=sh(this.vertexShader,s),this.programs[t]=r}r!=this.activeProgram&&(this.uniforms=ah(r),this.activeProgram=r)};ql.prototype.bind=function(){he.useProgram(this.activeProgram)};var In=function(e,t){this.uniforms={},this.program=sh(e,t),this.uniforms=ah(this.program)};In.prototype.bind=function(){he.useProgram(this.program)};function sh(i,e){var t=he.createProgram();if(he.attachShader(t,i),he.attachShader(t,e),he.linkProgram(t),!he.getProgramParameter(t,he.LINK_STATUS))throw he.getProgramInfoLog(t);return t}function ah(i){for(var e=[],t=he.getProgramParameter(i,he.ACTIVE_UNIFORMS),n=0;n<t;n++){var r=he.getActiveUniform(i,n).name;e[r]=he.getUniformLocation(i,r)}return e}function Tn(i,e,t){e=Jp(e,t);var n=he.createShader(i);if(he.shaderSource(n,e),he.compileShader(n),!he.getShaderParameter(n,he.COMPILE_STATUS))throw he.getShaderInfoLog(n);return n}function Jp(i,e){if(e==null)return i;var t="";return e.forEach(function(n){t+="#define "+n+`
`}),t+i}var zn=Tn(he.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),Kp=Tn(he.VERTEX_SHADER,`
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),Qp=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),em=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),tm=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),nm=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`),im=Tn(he.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;

    #define SCALE 25.0

    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`),rm=`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;

        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);

        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);

        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif

    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif

    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif

    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif

        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`,sm=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`),am=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`),om=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`),lm=Tn(he.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`),cm=Tn(he.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;

    #define ITERATIONS 16

    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;

        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;

        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;

        float color = texture2D(uTexture, vUv).a;

        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }

        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`),um=Tn(he.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),hm=Tn(he.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,Yn.supportLinearFiltering?null:["MANUAL_FILTERING"]),fm=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),dm=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),pm=Tn(he.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
`),mm=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),gm=Tn(he.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),_n=function(){return he.bindBuffer(he.ARRAY_BUFFER,he.createBuffer()),he.bufferData(he.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),he.STATIC_DRAW),he.bindBuffer(he.ELEMENT_ARRAY_BUFFER,he.createBuffer()),he.bufferData(he.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),he.STATIC_DRAW),he.vertexAttribPointer(0,2,he.FLOAT,!1,0,0),he.enableVertexAttribArray(0),function(i){he.bindFramebuffer(he.FRAMEBUFFER,i),he.drawElements(he.TRIANGLES,6,he.UNSIGNED_SHORT,0)}}(),Sn,Gt,Gl,Wl,vr,Yl,Vr=[],Ja,oh,ha=new In(Kp,Qp),Ku=new In(zn,em),Fl=new In(zn,tm),Qu=new In(zn,nm),eh=new In(zn,im),qa=new In(zn,sm),fa=new In(zn,am),Ya=new In(zn,om),th=new In(zn,lm),Bl=new In(zn,cm),_r=new In(zn,um),yi=new In(zn,hm),zl=new In(zn,fm),kl=new In(zn,dm),ps=new In(zn,pm),ja=new In(zn,mm),Za=new In(zn,gm),ms=new ql(zn,rm);function lh(){var i=Ka(Ut.SIM_RESOLUTION),e=Ka(Ut.DYE_RESOLUTION),t=Yn.halfFloatTexType,n=Yn.formatRGBA,r=Yn.formatRG,s=Yn.formatR,a=Yn.supportLinearFiltering?he.LINEAR:he.NEAREST;Sn==null?Sn=Hl(e.width,e.height,n.internalFormat,n.format,t,a):Sn=nh(Sn,e.width,e.height,n.internalFormat,n.format,t,a),Gt==null?Gt=Hl(i.width,i.height,r.internalFormat,r.format,t,a):Gt=nh(Gt,i.width,i.height,r.internalFormat,r.format,t,a),Gl=Oi(i.width,i.height,s.internalFormat,s.format,t,he.NEAREST),Wl=Oi(i.width,i.height,s.internalFormat,s.format,t,he.NEAREST),vr=Hl(i.width,i.height,s.internalFormat,s.format,t,he.NEAREST),_m(),vm()}function _m(){var i=Ka(Ut.BLOOM_RESOLUTION),e=Yn.halfFloatTexType,t=Yn.formatRGBA,n=Yn.supportLinearFiltering?he.LINEAR:he.NEAREST;Yl=Oi(i.width,i.height,t.internalFormat,t.format,e,n),Vr.length=0;for(var r=0;r<Ut.BLOOM_ITERATIONS;r++){var s=i.width>>r+1,a=i.height>>r+1;if(s<2||a<2)break;var l=Oi(s,a,t.internalFormat,t.format,e,n);Vr.push(l)}}function vm(){var i=Ka(Ut.SUNRAYS_RESOLUTION),e=Yn.halfFloatTexType,t=Yn.formatR,n=Yn.supportLinearFiltering?he.LINEAR:he.NEAREST;Ja=Oi(i.width,i.height,t.internalFormat,t.format,e,n),oh=Oi(i.width,i.height,t.internalFormat,t.format,e,n)}function Oi(i,e,t,n,r,s){he.activeTexture(he.TEXTURE0);var a=he.createTexture();he.bindTexture(he.TEXTURE_2D,a),he.texParameteri(he.TEXTURE_2D,he.TEXTURE_MIN_FILTER,s),he.texParameteri(he.TEXTURE_2D,he.TEXTURE_MAG_FILTER,s),he.texParameteri(he.TEXTURE_2D,he.TEXTURE_WRAP_S,he.CLAMP_TO_EDGE),he.texParameteri(he.TEXTURE_2D,he.TEXTURE_WRAP_T,he.CLAMP_TO_EDGE),he.texImage2D(he.TEXTURE_2D,0,t,i,e,0,n,r,null);var l=he.createFramebuffer();he.bindFramebuffer(he.FRAMEBUFFER,l),he.framebufferTexture2D(he.FRAMEBUFFER,he.COLOR_ATTACHMENT0,he.TEXTURE_2D,a,0),he.viewport(0,0,i,e),he.clear(he.COLOR_BUFFER_BIT);var u=1/i,h=1/e;return{texture:a,fbo:l,width:i,height:e,texelSizeX:u,texelSizeY:h,attach:function(m){return he.activeTexture(he.TEXTURE0+m),he.bindTexture(he.TEXTURE_2D,a),m}}}function Hl(i,e,t,n,r,s){var a=Oi(i,e,t,n,r,s),l=Oi(i,e,t,n,r,s);return{width:i,height:e,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a},set read(u){a=u},get write(){return l},set write(u){l=u},swap:function(){var h=a;a=l,l=h}}}function ym(i,e,t,n,r,s,a){var l=Oi(e,t,n,r,s,a);return Ku.bind(),he.uniform1i(Ku.uniforms.uTexture,i.attach(0)),_n(l.fbo),l}function nh(i,e,t,n,r,s,a){return i.width==e&&i.height==t||(i.read=ym(i.read,e,t,n,r,s,a),i.write=Oi(e,t,n,r,s,a),i.width=e,i.height=t,i.texelSizeX=1/e,i.texelSizeY=1/t),i}function xm(){var i=[];Ut.SHADING&&i.push("SHADING"),Ut.BLOOM&&i.push("BLOOM"),Ut.SUNRAYS&&i.push("SUNRAYS"),ms.setKeywords(i)}xm();lh();hh(parseInt(Math.random()*20)+5);var ih=Date.now(),$a=0;ch();function ch(){var i=bm();uh()&&lh(),Sm(i),Tm(),Ut.PAUSED||Mm(i),wm(null),requestAnimationFrame(ch)}function bm(){var i=Date.now(),e=(i-ih)/1e3;return e=Math.min(e,.016666),ih=i,e}function uh(){var i=Ni(an.clientWidth),e=Ni(an.clientHeight);return an.width!=i||an.height!=e?(an.width=i,an.height=e,!0):!1}function Sm(i){Ut.COLORFUL&&($a+=i*Ut.COLOR_UPDATE_SPEED,$a>=1&&($a=Bm($a,0,1),xi.forEach(function(e){e.color=jl()})))}function Tm(){Vl.length>0&&hh(Vl.pop()),xi.forEach(function(i){i.moved&&(i.moved=!1,Dm(i))})}function Mm(i){he.disable(he.BLEND),he.viewport(0,0,Gt.width,Gt.height),kl.bind(),he.uniform2f(kl.uniforms.texelSize,Gt.texelSizeX,Gt.texelSizeY),he.uniform1i(kl.uniforms.uVelocity,Gt.read.attach(0)),_n(Wl.fbo),ps.bind(),he.uniform2f(ps.uniforms.texelSize,Gt.texelSizeX,Gt.texelSizeY),he.uniform1i(ps.uniforms.uVelocity,Gt.read.attach(0)),he.uniform1i(ps.uniforms.uCurl,Wl.attach(1)),he.uniform1f(ps.uniforms.curl,Ut.CURL),he.uniform1f(ps.uniforms.dt,i),_n(Gt.write.fbo),Gt.swap(),zl.bind(),he.uniform2f(zl.uniforms.texelSize,Gt.texelSizeX,Gt.texelSizeY),he.uniform1i(zl.uniforms.uVelocity,Gt.read.attach(0)),_n(Gl.fbo),Fl.bind(),he.uniform1i(Fl.uniforms.uTexture,vr.read.attach(0)),he.uniform1f(Fl.uniforms.value,Ut.PRESSURE),_n(vr.write.fbo),vr.swap(),ja.bind(),he.uniform2f(ja.uniforms.texelSize,Gt.texelSizeX,Gt.texelSizeY),he.uniform1i(ja.uniforms.uDivergence,Gl.attach(0));for(var e=0;e<Ut.PRESSURE_ITERATIONS;e++)he.uniform1i(ja.uniforms.uPressure,vr.read.attach(1)),_n(vr.write.fbo),vr.swap();Za.bind(),he.uniform2f(Za.uniforms.texelSize,Gt.texelSizeX,Gt.texelSizeY),he.uniform1i(Za.uniforms.uPressure,vr.read.attach(0)),he.uniform1i(Za.uniforms.uVelocity,Gt.read.attach(1)),_n(Gt.write.fbo),Gt.swap(),yi.bind(),he.uniform2f(yi.uniforms.texelSize,Gt.texelSizeX,Gt.texelSizeY),Yn.supportLinearFiltering||he.uniform2f(yi.uniforms.dyeTexelSize,Gt.texelSizeX,Gt.texelSizeY);var t=Gt.read.attach(0);he.uniform1i(yi.uniforms.uVelocity,t),he.uniform1i(yi.uniforms.uSource,t),he.uniform1f(yi.uniforms.dt,i),he.uniform1f(yi.uniforms.dissipation,Ut.VELOCITY_DISSIPATION),_n(Gt.write.fbo),Gt.swap(),he.viewport(0,0,Sn.width,Sn.height),Yn.supportLinearFiltering||he.uniform2f(yi.uniforms.dyeTexelSize,Sn.texelSizeX,Sn.texelSizeY),he.uniform1i(yi.uniforms.uVelocity,Gt.read.attach(0)),he.uniform1i(yi.uniforms.uSource,Sn.read.attach(1)),he.uniform1f(yi.uniforms.dissipation,Ut.DENSITY_DISSIPATION),_n(Sn.write.fbo),Sn.swap()}function wm(i){Ut.BLOOM&&Cm(Sn.read,Yl),Ut.SUNRAYS&&(Pm(Sn.read,Sn.write,Ja),Lm(Ja,oh,1)),i==null||!Ut.TRANSPARENT?(he.blendFunc(he.ONE,he.ONE_MINUS_SRC_ALPHA),he.enable(he.BLEND)):he.disable(he.BLEND);var e=i==null?he.drawingBufferWidth:i.width,t=i==null?he.drawingBufferHeight:i.height;he.viewport(0,0,e,t);var n=i==null?null:i.fbo;Ut.TRANSPARENT||Em(n,Fm(Ut.BACK_COLOR)),i==null&&Ut.TRANSPARENT&&Am(n),Rm(n,e,t)}function Em(i,e){Qu.bind(),he.uniform4f(Qu.uniforms.color,e.r,e.g,e.b,1),_n(i)}function Am(i){eh.bind(),he.uniform1f(eh.uniforms.aspectRatio,an.width/an.height),_n(i)}function Rm(i,e,t){ms.bind(),Ut.SHADING&&he.uniform2f(ms.uniforms.texelSize,1/e,1/t),he.uniform1i(ms.uniforms.uTexture,Sn.read.attach(0)),Ut.BLOOM&&he.uniform1i(ms.uniforms.uBloom,Yl.attach(1)),Ut.SUNRAYS&&he.uniform1i(ms.uniforms.uSunrays,Ja.attach(3)),_n(i)}function Cm(i,e){if(!(Vr.length<2)){var t=e;he.disable(he.BLEND),qa.bind();var n=Ut.BLOOM_THRESHOLD*Ut.BLOOM_SOFT_KNEE+1e-4,r=Ut.BLOOM_THRESHOLD-n,s=n*2,a=.25/n;he.uniform3f(qa.uniforms.curve,r,s,a),he.uniform1f(qa.uniforms.threshold,Ut.BLOOM_THRESHOLD),he.uniform1i(qa.uniforms.uTexture,i.attach(0)),he.viewport(0,0,t.width,t.height),_n(t.fbo),fa.bind();for(var l=0;l<Vr.length;l++){var u=Vr[l];he.uniform2f(fa.uniforms.texelSize,t.texelSizeX,t.texelSizeY),he.uniform1i(fa.uniforms.uTexture,t.attach(0)),he.viewport(0,0,u.width,u.height),_n(u.fbo),t=u}he.blendFunc(he.ONE,he.ONE),he.enable(he.BLEND);for(var h=Vr.length-2;h>=0;h--){var p=Vr[h];he.uniform2f(fa.uniforms.texelSize,t.texelSizeX,t.texelSizeY),he.uniform1i(fa.uniforms.uTexture,t.attach(0)),he.viewport(0,0,p.width,p.height),_n(p.fbo),t=p}he.disable(he.BLEND),Ya.bind(),he.uniform2f(Ya.uniforms.texelSize,t.texelSizeX,t.texelSizeY),he.uniform1i(Ya.uniforms.uTexture,t.attach(0)),he.uniform1f(Ya.uniforms.intensity,Ut.BLOOM_INTENSITY),he.viewport(0,0,e.width,e.height),_n(e.fbo)}}function Pm(i,e,t){he.disable(he.BLEND),th.bind(),he.uniform1i(th.uniforms.uTexture,i.attach(0)),he.viewport(0,0,e.width,e.height),_n(e.fbo),Bl.bind(),he.uniform1f(Bl.uniforms.weight,Ut.SUNRAYS_WEIGHT),he.uniform1i(Bl.uniforms.uTexture,e.attach(0)),he.viewport(0,0,t.width,t.height),_n(t.fbo)}function Lm(i,e,t){ha.bind();for(var n=0;n<t;n++)he.uniform2f(ha.uniforms.texelSize,i.texelSizeX,0),he.uniform1i(ha.uniforms.uTexture,i.attach(0)),_n(e.fbo),he.uniform2f(ha.uniforms.texelSize,0,i.texelSizeY),he.uniform1i(ha.uniforms.uTexture,e.attach(0)),_n(i.fbo)}function Dm(i){var e=i.deltaX*Ut.SPLAT_FORCE,t=i.deltaY*Ut.SPLAT_FORCE;fh(i.texcoordX,i.texcoordY,e,t,i.color)}function hh(i){for(var e=0;e<i;e++){var t=jl();t.r*=10,t.g*=10,t.b*=10;var n=Math.random(),r=Math.random(),s=1e3*(Math.random()-.5),a=1e3*(Math.random()-.5);fh(n,r,s,a,t)}}function fh(i,e,t,n,r){he.viewport(0,0,Gt.width,Gt.height),_r.bind(),he.uniform1i(_r.uniforms.uTarget,Gt.read.attach(0)),he.uniform1f(_r.uniforms.aspectRatio,an.width/an.height),he.uniform2f(_r.uniforms.point,i,e),he.uniform3f(_r.uniforms.color,t,n,0),he.uniform1f(_r.uniforms.radius,Im(Ut.SPLAT_RADIUS/100)),_n(Gt.write.fbo),Gt.swap(),he.viewport(0,0,Sn.width,Sn.height),he.uniform1i(_r.uniforms.uTarget,Sn.read.attach(0)),he.uniform3f(_r.uniforms.color,r.r,r.g,r.b),_n(Sn.write.fbo),Sn.swap()}function Im(i){var e=an.width/an.height;return e>1&&(i*=e),i}an.addEventListener("mousedown",function(i){var e=Ni(i.offsetX),t=Ni(i.offsetY),n=xi.find(function(r){return r.id==-1});n==null&&(n=new Xl),dh(n,-1,e,t)});an.addEventListener("mousemove",function(i){var e=xi[0];if(e.down){var t=Ni(i.offsetX),n=Ni(i.offsetY);ph(e,t,n)}});window.addEventListener("mouseup",function(){mh(xi[0])});an.addEventListener("touchstart",function(i){i.preventDefault();for(var e=i.targetTouches;e.length>=xi.length;)xi.push(new Xl);for(var t=0;t<e.length;t++){var n=Ni(e[t].pageX),r=Ni(e[t].pageY);dh(xi[t+1],e[t].identifier,n,r)}});an.addEventListener("touchmove",function(i){i.preventDefault();for(var e=i.targetTouches,t=0;t<e.length;t++){var n=xi[t+1];if(n.down){var r=Ni(e[t].pageX),s=Ni(e[t].pageY);ph(n,r,s)}}},!1);window.addEventListener("touchend",function(i){for(var e=i.changedTouches,t=function(r){var s=xi.find(function(a){return a.id==e[r].identifier});s!=null&&mh(s)},n=0;n<e.length;n++)t(n)});window.addEventListener("keydown",function(i){i.code==="KeyP"&&(Ut.PAUSED=!Ut.PAUSED),i.key===" "&&Vl.push(parseInt(Math.random()*20)+5)});function dh(i,e,t,n){i.id=e,i.down=!0,i.moved=!1,i.texcoordX=t/an.width,i.texcoordY=1-n/an.height,i.prevTexcoordX=i.texcoordX,i.prevTexcoordY=i.texcoordY,i.deltaX=0,i.deltaY=0,i.color=jl()}function ph(i,e,t){i.prevTexcoordX=i.texcoordX,i.prevTexcoordY=i.texcoordY,i.texcoordX=e/an.width,i.texcoordY=1-t/an.height,i.deltaX=Om(i.texcoordX-i.prevTexcoordX),i.deltaY=Nm(i.texcoordY-i.prevTexcoordY),i.moved=Math.abs(i.deltaX)>0||Math.abs(i.deltaY)>0}function mh(i){i.down=!1}function Om(i){var e=an.width/an.height;return e<1&&(i*=e),i}function Nm(i){var e=an.width/an.height;return e>1&&(i/=e),i}function jl(){var i=Um(Math.random(),1,1);return i.r*=.15,i.g*=.15,i.b*=.15,i}function Um(i,e,t){var n,r,s,a,l,u,h,p;switch(a=Math.floor(i*6),l=i*6-a,u=t*(1-e),h=t*(1-l*e),p=t*(1-(1-l)*e),a%6){case 0:n=t,r=p,s=u;break;case 1:n=h,r=t,s=u;break;case 2:n=u,r=t,s=p;break;case 3:n=u,r=h,s=t;break;case 4:n=p,r=u,s=t;break;case 5:n=t,r=u,s=h;break}return{r:n,g:r,b:s}}function Fm(i){var e={r:i.r/255,g:i.g/255,b:i.b/255};return e}function Bm(i,e,t){var n=t-e;return n==0?e:(i-e)%n+e}function Ka(i){var e=he.drawingBufferWidth/he.drawingBufferHeight;e<1&&(e=1/e);var t=Math.round(i),n=Math.round(i*e);return he.drawingBufferWidth>he.drawingBufferHeight?{width:n,height:t}:{width:t,height:n}}function Ni(i){var e=window.devicePixelRatio||1;return Math.floor(i*e)}function zm(i){if(i.length==0)return 0;for(var e=0,t=0;t<i.length;t++)e=(e<<5)-e+i.charCodeAt(t),e|=0;return e}var gh=document.getElementsByClassName("item-link"),_h=document.getElementsByClassName("popup-close"),km=document.getElementsByClassName("popup-background");for(Ui=0;Ui<_h.length;Ui++)_h[Ui].addEventListener("click",vh),km[Ui].addEventListener("click",vh);var Ui;for(Ui=0;Ui<gh.length;Ui++)gh[Ui].addEventListener("click",Hm);var Ui;function Hm(i){for(var e=i&&i.target||event&&event.srcElement;e&&!e.classList.contains("grid-item");)e=e.parentNode;e.getElementsByClassName("popup-video")[1].play()}function vh(i){for(var e=i&&i.target||event&&event.srcElement;e&&!e.classList.contains("popup-inner");)e=e.parentNode;e.getElementsByClassName("popup-video")[1].pause()}var ku=Yp(xh(),1);var du="160",rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vm=0,bh=1,Gm=2;var ud=0,hd=1,Wm=2,Qi=3,Cr=0,ti=1,er=2;var Er=0,Fs=1,Po=2,Sh=3,Th=4,Xm=5,jr=100,qm=101,Ym=102,Mh=103,wh=104,jm=200,Zm=201,$m=202,Jm=203,Cc=204,Pc=205,Km=206,Qm=207,eg=208,tg=209,ng=210,ig=211,rg=212,sg=213,ag=214,og=0,lg=1,cg=2,Lo=3,ug=4,hg=5,fg=6,dg=7,cl=0,pg=1,mg=2,Ar=0,gg=1,_g=2,vg=3,pu=4,yg=5,xg=6,Eh="attached",bg="detached",fd=300,ks=301,Hs=302,Sa=303,Lc=304,ul=306,Vs=1e3,ei=1001,Dc=1002,kn=1003,Ah=1004;var Zl=1005;var ci=1006,Sg=1007;var Ta=1008;var Rr=1009,Tg=1010,Mg=1011,mu=1012,dd=1013,wr=1014,tr=1015,Ma=1016,pd=1017,md=1018,$r=1020,wg=1021,ui=1023,Eg=1024,Ag=1025,Jr=1026,Gs=1027,Rg=1028,gd=1029,Cg=1030,_d=1031,vd=1033,$l=33776,Jl=33777,Kl=33778,Ql=33779,Rh=35840,Ch=35841,Ph=35842,Lh=35843,yd=36196,Dh=37492,Ih=37496,Oh=37808,Nh=37809,Uh=37810,Fh=37811,Bh=37812,zh=37813,kh=37814,Hh=37815,Vh=37816,Gh=37817,Wh=37818,Xh=37819,qh=37820,Yh=37821,ec=36492,jh=36494,Zh=36495,Pg=36283,$h=36284,Jh=36285,Kh=36286;var Do=2300,Io=2301,tc=2302,Qh=2400,ef=2401,tf=2402,Lg=2500;var xd=3e3,Kr=3001,Dg=3200,Ig=3201,hl=0,Og=1,hi="",on="srgb",rr="srgb-linear",gu="display-p3",fl="display-p3-linear",Oo="linear",cn="srgb",No="rec709",Uo="p3";var gs=7680;var nf=519,Ng=512,Ug=513,Fg=514,bd=515,Bg=516,zg=517,kg=518,Hg=519,rf=35044;var sf="300 es",Ic=1035,nr=2e3,Fo=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=1234567,va=Math.PI/180,Ws=180/Math.PI;function Ur(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function Pn(i,e,t){return Math.max(e,Math.min(t,i))}function _u(i,e){return(i%e+e)%e}function Vg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Gg(i,e,t){return i!==e?(t-i)/(e-i):0}function ya(i,e,t){return(1-t)*i+t*e}function Wg(i,e,t,n){return ya(i,e,1-Math.exp(-t*n))}function Xg(i,e=1){return e-Math.abs(_u(i,e*2)-e)}function qg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zg(i,e){return i+Math.random()*(e-i)}function $g(i){return i*(.5-Math.random())}function Jg(i){i!==void 0&&(af=i);let e=af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kg(i){return i*va}function Qg(i){return i*Ws}function Oc(i){return(i&i-1)===0&&i!==0}function e0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function t0(i,e,t,n,r){let s=Math.cos,a=Math.sin,l=s(t/2),u=a(t/2),h=s((e+n)/2),p=a((e+n)/2),m=s((e-n)/2),v=a((e-n)/2),_=s((n-e)/2),R=a((n-e)/2);switch(r){case"XYX":i.set(l*p,u*m,u*v,l*h);break;case"YZY":i.set(u*v,l*p,u*m,l*h);break;case"ZXZ":i.set(u*m,u*v,l*p,l*h);break;case"XZX":i.set(l*p,u*R,u*_,l*h);break;case"YXY":i.set(u*_,l*p,u*R,l*h);break;case"ZYZ":i.set(u*R,u*_,l*p,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ds(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Nn={DEG2RAD:va,RAD2DEG:Ws,generateUUID:Ur,clamp:Pn,euclideanModulo:_u,mapLinear:Vg,inverseLerp:Gg,lerp:ya,damp:Wg,pingpong:Xg,smoothstep:qg,smootherstep:Yg,randInt:jg,randFloat:Zg,randFloatSpread:$g,seededRandom:Jg,degToRad:Kg,radToDeg:Qg,isPowerOfTwo:Oc,ceilPowerOfTwo:e0,floorPowerOfTwo:Bo,setQuaternionFromProperEuler:t0,normalize:jn,denormalize:Ds},At=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(e,t,n,r,s,a,l,u,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,u,h)}set(e,t,n,r,s,a,l,u,h){let p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=s,p[5]=u,p[6]=n,p[7]=a,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],u=n[6],h=n[1],p=n[4],m=n[7],v=n[2],_=n[5],R=n[8],E=r[0],g=r[3],c=r[6],T=r[1],b=r[4],S=r[7],U=r[2],f=r[5],z=r[8];return s[0]=a*E+l*T+u*U,s[3]=a*g+l*b+u*f,s[6]=a*c+l*S+u*z,s[1]=h*E+p*T+m*U,s[4]=h*g+p*b+m*f,s[7]=h*c+p*S+m*z,s[2]=v*E+_*T+R*U,s[5]=v*g+_*b+R*f,s[8]=v*c+_*S+R*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],p=e[8];return t*a*p-t*l*h-n*s*p+n*l*u+r*s*h-r*a*u}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],p=e[8],m=p*a-l*h,v=l*u-p*s,_=h*s-a*u,R=t*m+n*v+r*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/R;return e[0]=m*E,e[1]=(r*h-p*n)*E,e[2]=(l*n-r*a)*E,e[3]=v*E,e[4]=(p*t-r*u)*E,e[5]=(r*s-l*t)*E,e[6]=_*E,e[7]=(n*u-h*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){let u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*l)+a+e,-r*h,r*u,-r*(-h*a+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(nc.makeScale(e,t)),this}rotate(e){return this.premultiply(nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nc=new zt;function Sd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function n0(){let i=wa("canvas");return i.style.display="block",i}var of={};function xa(i){i in of||(of[i]=!0,console.warn(i))}var lf=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cf=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[rr]:{transfer:Oo,primaries:No,toReference:i=>i,fromReference:i=>i},[on]:{transfer:cn,primaries:No,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[fl]:{transfer:Oo,primaries:Uo,toReference:i=>i.applyMatrix3(cf),fromReference:i=>i.applyMatrix3(lf)},[gu]:{transfer:cn,primaries:Uo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(cf),fromReference:i=>i.applyMatrix3(lf).convertLinearToSRGB()}},i0=new Set([rr,fl]),en={enabled:!0,_workingColorSpace:rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!i0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=eo[e].toReference,r=eo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return eo[i].primaries},getTransfer:function(i){return i===hi?Oo:eo[i].transfer}};function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ic(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _s,zo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=wa("canvas")),_s.width=e.width,_s.height=e.height;let n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bs(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bs(t[n]/255)*255):t[n]=Bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},r0=0,ko=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(rc(r[a].image)):s.push(rc(r[a]))}else s=rc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function rc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var s0=0,Hn=class i extends Bi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ei,r=ei,s=ci,a=Ta,l=ui,u=Rr,h=i.DEFAULT_ANISOTROPY,p=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Ur(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Kr?on:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===on?Kr:xd}set encoding(e){xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kr?on:hi}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=fd;Hn.DEFAULT_ANISOTROPY=1;var Zt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,u=e.elements,h=u[0],p=u[4],m=u[8],v=u[1],_=u[5],R=u[9],E=u[2],g=u[6],c=u[10];if(Math.abs(p-v)<.01&&Math.abs(m-E)<.01&&Math.abs(R-g)<.01){if(Math.abs(p+v)<.1&&Math.abs(m+E)<.1&&Math.abs(R+g)<.1&&Math.abs(h+_+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(h+1)/2,S=(_+1)/2,U=(c+1)/2,f=(p+v)/4,z=(m+E)/4,W=(R+g)/4;return b>S&&b>U?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=f/n,s=z/n):S>U?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=f/r,s=W/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=z/s,r=W/s),this.set(n,r,s,t),this}let T=Math.sqrt((g-R)*(g-R)+(m-E)*(m-E)+(v-p)*(v-p));return Math.abs(T)<.001&&(T=1),this.x=(g-R)/T,this.y=(m-E)/T,this.z=(v-p)/T,this.w=Math.acos((h+_+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nc=class extends Bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(xa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kr?on:hi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Hn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sr=class extends Nc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ho=class extends Hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uc=class extends Hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let u=n[r+0],h=n[r+1],p=n[r+2],m=n[r+3],v=s[a+0],_=s[a+1],R=s[a+2],E=s[a+3];if(l===0){e[t+0]=u,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(l===1){e[t+0]=v,e[t+1]=_,e[t+2]=R,e[t+3]=E;return}if(m!==E||u!==v||h!==_||p!==R){let g=1-l,c=u*v+h*_+p*R+m*E,T=c>=0?1:-1,b=1-c*c;if(b>Number.EPSILON){let U=Math.sqrt(b),f=Math.atan2(U,c*T);g=Math.sin(g*f)/U,l=Math.sin(l*f)/U}let S=l*T;if(u=u*g+v*S,h=h*g+_*S,p=p*g+R*S,m=m*g+E*S,g===1-l){let U=1/Math.sqrt(u*u+h*h+p*p+m*m);u*=U,h*=U,p*=U,m*=U}}e[t]=u,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,s,a){let l=n[r],u=n[r+1],h=n[r+2],p=n[r+3],m=s[a],v=s[a+1],_=s[a+2],R=s[a+3];return e[t]=l*R+p*m+u*_-h*v,e[t+1]=u*R+p*v+h*m-l*_,e[t+2]=h*R+p*_+l*v-u*m,e[t+3]=p*R-l*m-u*v-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,u=Math.sin,h=l(n/2),p=l(r/2),m=l(s/2),v=u(n/2),_=u(r/2),R=u(s/2);switch(a){case"XYZ":this._x=v*p*m+h*_*R,this._y=h*_*m-v*p*R,this._z=h*p*R+v*_*m,this._w=h*p*m-v*_*R;break;case"YXZ":this._x=v*p*m+h*_*R,this._y=h*_*m-v*p*R,this._z=h*p*R-v*_*m,this._w=h*p*m+v*_*R;break;case"ZXY":this._x=v*p*m-h*_*R,this._y=h*_*m+v*p*R,this._z=h*p*R+v*_*m,this._w=h*p*m-v*_*R;break;case"ZYX":this._x=v*p*m-h*_*R,this._y=h*_*m+v*p*R,this._z=h*p*R-v*_*m,this._w=h*p*m+v*_*R;break;case"YZX":this._x=v*p*m+h*_*R,this._y=h*_*m+v*p*R,this._z=h*p*R-v*_*m,this._w=h*p*m-v*_*R;break;case"XZY":this._x=v*p*m-h*_*R,this._y=h*_*m-v*p*R,this._z=h*p*R+v*_*m,this._w=h*p*m+v*_*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],u=t[9],h=t[2],p=t[6],m=t[10],v=n+l+m;if(v>0){let _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(p-u)*_,this._y=(s-h)*_,this._z=(a-r)*_}else if(n>l&&n>m){let _=2*Math.sqrt(1+n-l-m);this._w=(p-u)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+h)/_}else if(l>m){let _=2*Math.sqrt(1+l-n-m);this._w=(s-h)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(u+p)/_}else{let _=2*Math.sqrt(1+m-n-l);this._w=(a-r)/_,this._x=(s+h)/_,this._y=(u+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,u=t._y,h=t._z,p=t._w;return this._x=n*p+a*l+r*h-s*u,this._y=r*p+a*u+s*l-n*h,this._z=s*p+a*h+n*u-r*l,this._w=a*p-n*l-r*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,a=this._w,l=a*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;let u=1-l*l;if(u<=Number.EPSILON){let _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}let h=Math.sqrt(u),p=Math.atan2(h,l),m=Math.sin((1-t)*p)/h,v=Math.sin(t*p)/h;return this._w=a*m+this._w*v,this._x=n*m+this._x*v,this._y=r*m+this._y*v,this._z=s*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ce=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,u=e.w,h=2*(a*r-l*n),p=2*(l*t-s*r),m=2*(s*n-a*t);return this.x=t+u*h+a*m-l*p,this.y=n+u*p+l*h-s*m,this.z=r+u*m+s*p-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,u=t.z;return this.x=r*u-s*l,this.y=s*a-n*u,this.z=n*l-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sc=new ce,uf=new wn,Pr=class{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(s,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),no.subVectors(this.max,da),vs.subVectors(e.a,da),ys.subVectors(e.b,da),xs.subVectors(e.c,da),xr.subVectors(ys,vs),br.subVectors(xs,ys),Gr.subVectors(vs,xs);let t=[0,-xr.z,xr.y,0,-br.z,br.y,0,-Gr.z,Gr.y,xr.z,0,-xr.x,br.z,0,-br.x,Gr.z,0,-Gr.x,-xr.y,xr.x,0,-br.y,br.x,0,-Gr.y,Gr.x,0];return!ac(t,vs,ys,xs,no)||(t=[1,0,0,0,1,0,0,0,1],!ac(t,vs,ys,xs,no))?!1:(io.crossVectors(xr,br),t=[io.x,io.y,io.z],ac(t,vs,ys,xs,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yi=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],bi=new ce,to=new Pr,vs=new ce,ys=new ce,xs=new ce,xr=new ce,br=new ce,Gr=new ce,da=new ce,no=new ce,io=new ce,Wr=new ce;function ac(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Wr.fromArray(i,s);let l=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),u=e.dot(Wr),h=t.dot(Wr),p=n.dot(Wr);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>l)return!1}return!0}var a0=new Pr,pa=new ce,oc=new ce,ar=class{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):a0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);let t=pa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(pa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(oc)),this.expandByPoint(pa.copy(e.center).sub(oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ji=new ce,lc=new ce,ro=new ce,Sr=new ce,cc=new ce,so=new ce,uc=new ce,or=class{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){lc.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(lc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(ro),l=Sr.dot(this.direction),u=-Sr.dot(ro),h=Sr.lengthSq(),p=Math.abs(1-a*a),m,v,_,R;if(p>0)if(m=a*u-l,v=a*l-u,R=s*p,m>=0)if(v>=-R)if(v<=R){let E=1/p;m*=E,v*=E,_=m*(m+a*v+2*l)+v*(a*m+v+2*u)+h}else v=s,m=Math.max(0,-(a*v+l)),_=-m*m+v*(v+2*u)+h;else v=-s,m=Math.max(0,-(a*v+l)),_=-m*m+v*(v+2*u)+h;else v<=-R?(m=Math.max(0,-(-a*s+l)),v=m>0?-s:Math.min(Math.max(-s,-u),s),_=-m*m+v*(v+2*u)+h):v<=R?(m=0,v=Math.min(Math.max(-s,-u),s),_=v*(v+2*u)+h):(m=Math.max(0,-(a*s+l)),v=m>0?s:Math.min(Math.max(-s,-u),s),_=-m*m+v*(v+2*u)+h);else v=a>0?-s:s,m=Math.max(0,-(a*v+l)),_=-m*m+v*(v+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(lc).addScaledVector(ro,v),_}intersectSphere(e,t){ji.subVectors(e.center,this.origin);let n=ji.dot(this.direction),r=ji.dot(ji)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,u,h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,v=this.origin;return h>=0?(n=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(n=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),p>=0?(s=(e.min.y-v.y)*p,a=(e.max.y-v.y)*p):(s=(e.max.y-v.y)*p,a=(e.min.y-v.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(l=(e.min.z-v.z)*m,u=(e.max.z-v.z)*m):(l=(e.max.z-v.z)*m,u=(e.min.z-v.z)*m),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,r,s){cc.subVectors(t,e),so.subVectors(n,e),uc.crossVectors(cc,so);let a=this.direction.dot(uc),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Sr.subVectors(this.origin,e);let u=l*this.direction.dot(so.crossVectors(Sr,so));if(u<0)return null;let h=l*this.direction.dot(cc.cross(Sr));if(h<0||u+h>a)return null;let p=-l*Sr.dot(uc);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class i{constructor(e,t,n,r,s,a,l,u,h,p,m,v,_,R,E,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,u,h,p,m,v,_,R,E,g)}set(e,t,n,r,s,a,l,u,h,p,m,v,_,R,E,g){let c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=r,c[1]=s,c[5]=a,c[9]=l,c[13]=u,c[2]=h,c[6]=p,c[10]=m,c[14]=v,c[3]=_,c[7]=R,c[11]=E,c[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/bs.setFromMatrixColumn(e,0).length(),s=1/bs.setFromMatrixColumn(e,1).length(),a=1/bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(r),h=Math.sin(r),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){let v=a*p,_=a*m,R=l*p,E=l*m;t[0]=u*p,t[4]=-u*m,t[8]=h,t[1]=_+R*h,t[5]=v-E*h,t[9]=-l*u,t[2]=E-v*h,t[6]=R+_*h,t[10]=a*u}else if(e.order==="YXZ"){let v=u*p,_=u*m,R=h*p,E=h*m;t[0]=v+E*l,t[4]=R*l-_,t[8]=a*h,t[1]=a*m,t[5]=a*p,t[9]=-l,t[2]=_*l-R,t[6]=E+v*l,t[10]=a*u}else if(e.order==="ZXY"){let v=u*p,_=u*m,R=h*p,E=h*m;t[0]=v-E*l,t[4]=-a*m,t[8]=R+_*l,t[1]=_+R*l,t[5]=a*p,t[9]=E-v*l,t[2]=-a*h,t[6]=l,t[10]=a*u}else if(e.order==="ZYX"){let v=a*p,_=a*m,R=l*p,E=l*m;t[0]=u*p,t[4]=R*h-_,t[8]=v*h+E,t[1]=u*m,t[5]=E*h+v,t[9]=_*h-R,t[2]=-h,t[6]=l*u,t[10]=a*u}else if(e.order==="YZX"){let v=a*u,_=a*h,R=l*u,E=l*h;t[0]=u*p,t[4]=E-v*m,t[8]=R*m+_,t[1]=m,t[5]=a*p,t[9]=-l*p,t[2]=-h*p,t[6]=_*m+R,t[10]=v-E*m}else if(e.order==="XZY"){let v=a*u,_=a*h,R=l*u,E=l*h;t[0]=u*p,t[4]=-m,t[8]=h*p,t[1]=v*m+E,t[5]=a*p,t[9]=_*m-R,t[2]=R*m-_,t[6]=l*p,t[10]=E*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o0,e,l0)}lookAt(e,t,n){let r=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Tr.crossVectors(n,ri),Tr.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Tr.crossVectors(n,ri)),Tr.normalize(),ao.crossVectors(ri,Tr),r[0]=Tr.x,r[4]=ao.x,r[8]=ri.x,r[1]=Tr.y,r[5]=ao.y,r[9]=ri.y,r[2]=Tr.z,r[6]=ao.z,r[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],u=n[8],h=n[12],p=n[1],m=n[5],v=n[9],_=n[13],R=n[2],E=n[6],g=n[10],c=n[14],T=n[3],b=n[7],S=n[11],U=n[15],f=r[0],z=r[4],W=r[8],F=r[12],B=r[1],ne=r[5],te=r[9],_e=r[13],K=r[2],ee=r[6],le=r[10],Me=r[14],me=r[3],Ee=r[7],Re=r[11],Be=r[15];return s[0]=a*f+l*B+u*K+h*me,s[4]=a*z+l*ne+u*ee+h*Ee,s[8]=a*W+l*te+u*le+h*Re,s[12]=a*F+l*_e+u*Me+h*Be,s[1]=p*f+m*B+v*K+_*me,s[5]=p*z+m*ne+v*ee+_*Ee,s[9]=p*W+m*te+v*le+_*Re,s[13]=p*F+m*_e+v*Me+_*Be,s[2]=R*f+E*B+g*K+c*me,s[6]=R*z+E*ne+g*ee+c*Ee,s[10]=R*W+E*te+g*le+c*Re,s[14]=R*F+E*_e+g*Me+c*Be,s[3]=T*f+b*B+S*K+U*me,s[7]=T*z+b*ne+S*ee+U*Ee,s[11]=T*W+b*te+S*le+U*Re,s[15]=T*F+b*_e+S*Me+U*Be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],u=e[9],h=e[13],p=e[2],m=e[6],v=e[10],_=e[14],R=e[3],E=e[7],g=e[11],c=e[15];return R*(+s*u*m-r*h*m-s*l*v+n*h*v+r*l*_-n*u*_)+E*(+t*u*_-t*h*v+s*a*v-r*a*_+r*h*p-s*u*p)+g*(+t*h*m-t*l*_-s*a*m+n*a*_+s*l*p-n*h*p)+c*(-r*l*p-t*u*m+t*l*v+r*a*m-n*a*v+n*u*p)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],p=e[8],m=e[9],v=e[10],_=e[11],R=e[12],E=e[13],g=e[14],c=e[15],T=m*g*h-E*v*h+E*u*_-l*g*_-m*u*c+l*v*c,b=R*v*h-p*g*h-R*u*_+a*g*_+p*u*c-a*v*c,S=p*E*h-R*m*h+R*l*_-a*E*_-p*l*c+a*m*c,U=R*m*u-p*E*u-R*l*v+a*E*v+p*l*g-a*m*g,f=t*T+n*b+r*S+s*U;if(f===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/f;return e[0]=T*z,e[1]=(E*v*s-m*g*s-E*r*_+n*g*_+m*r*c-n*v*c)*z,e[2]=(l*g*s-E*u*s+E*r*h-n*g*h-l*r*c+n*u*c)*z,e[3]=(m*u*s-l*v*s-m*r*h+n*v*h+l*r*_-n*u*_)*z,e[4]=b*z,e[5]=(p*g*s-R*v*s+R*r*_-t*g*_-p*r*c+t*v*c)*z,e[6]=(R*u*s-a*g*s-R*r*h+t*g*h+a*r*c-t*u*c)*z,e[7]=(a*v*s-p*u*s+p*r*h-t*v*h-a*r*_+t*u*_)*z,e[8]=S*z,e[9]=(R*m*s-p*E*s-R*n*_+t*E*_+p*n*c-t*m*c)*z,e[10]=(a*E*s-R*l*s+R*n*h-t*E*h-a*n*c+t*l*c)*z,e[11]=(p*l*s-a*m*s-p*n*h+t*m*h+a*n*_-t*l*_)*z,e[12]=U*z,e[13]=(p*E*r-R*m*r+R*n*v-t*E*v-p*n*g+t*m*g)*z,e[14]=(R*l*r-a*E*r-R*n*u+t*E*u+a*n*g-t*l*g)*z,e[15]=(a*m*r-p*l*r+p*n*u-t*m*u-a*n*v+t*l*v)*z,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,u=e.z,h=s*a,p=s*l;return this.set(h*a+n,h*l-r*u,h*u+r*l,0,h*l+r*u,p*l+n,p*u-r*a,0,h*u-r*l,p*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,l=t._z,u=t._w,h=s+s,p=a+a,m=l+l,v=s*h,_=s*p,R=s*m,E=a*p,g=a*m,c=l*m,T=u*h,b=u*p,S=u*m,U=n.x,f=n.y,z=n.z;return r[0]=(1-(E+c))*U,r[1]=(_+S)*U,r[2]=(R-b)*U,r[3]=0,r[4]=(_-S)*f,r[5]=(1-(v+c))*f,r[6]=(g+T)*f,r[7]=0,r[8]=(R+b)*z,r[9]=(g-T)*z,r[10]=(1-(v+E))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=bs.set(r[0],r[1],r[2]).length(),a=bs.set(r[4],r[5],r[6]).length(),l=bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Si.copy(this);let h=1/s,p=1/a,m=1/l;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=p,Si.elements[5]*=p,Si.elements[6]*=p,Si.elements[8]*=m,Si.elements[9]*=m,Si.elements[10]*=m,t.setFromRotationMatrix(Si),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,a,l=nr){let u=this.elements,h=2*s/(t-e),p=2*s/(n-r),m=(t+e)/(t-e),v=(n+r)/(n-r),_,R;if(l===nr)_=-(a+s)/(a-s),R=-2*a*s/(a-s);else if(l===Fo)_=-a/(a-s),R=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=R,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=nr){let u=this.elements,h=1/(t-e),p=1/(n-r),m=1/(a-s),v=(t+e)*h,_=(n+r)*p,R,E;if(l===nr)R=(a+s)*m,E=-2*m;else if(l===Fo)R=s*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-v,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-_,u[2]=0,u[6]=0,u[10]=E,u[14]=-R,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bs=new ce,Si=new Tt,o0=new ce(0,0,0),l0=new ce(1,1,1),Tr=new ce,ao=new ce,ri=new ce,hf=new Tt,ff=new wn,Jn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],l=r[8],u=r[1],h=r[5],p=r[9],m=r[2],v=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Pn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-p,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},c0=0,df=new ce,Ss=new wn,Zi=new Tt,oo=new ce,ma=new ce,u0=new ce,h0=new wn,pf=new ce(1,0,0),mf=new ce(0,1,0),gf=new ce(0,0,1),f0={type:"added"},d0={type:"removed"},dn=class i extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new ce,t=new Jn,n=new wn,r=new ce(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new zt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(pf,e)}rotateY(e){return this.rotateOnAxis(mf,e)}rotateZ(e){return this.rotateOnAxis(gf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pf,e)}translateY(e){return this.translateOnAxis(mf,e)}translateZ(e){return this.translateOnAxis(gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(ma,oo,this.up):Zi.lookAt(oo,ma,this.up),this.quaternion.setFromRotationMatrix(Zi),r&&(Zi.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(d0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,u0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,h0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let u=l.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){let m=u[h];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(s(e.materials,this.material[u]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let u=this.animations[l];r.animations.push(s(e.animations,u))}}if(t){let l=a(e.geometries),u=a(e.materials),h=a(e.textures),p=a(e.images),m=a(e.shapes),v=a(e.skeletons),_=a(e.animations),R=a(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),v.length>0&&(n.skeletons=v),_.length>0&&(n.animations=_),R.length>0&&(n.nodes=R)}return n.object=r,n;function a(l){let u=[];for(let h in l){let p=l[h];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};dn.DEFAULT_UP=new ce(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new ce,$i=new ce,hc=new ce,Ji=new ce,Ts=new ce,Ms=new ce,_f=new ce,fc=new ce,dc=new ce,pc=new ce,lo=!1,Is=class i{constructor(e=new ce,t=new ce,n=new ce){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ti.subVectors(e,t),r.cross(Ti);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ti.subVectors(r,t),$i.subVectors(n,t),hc.subVectors(e,t);let a=Ti.dot(Ti),l=Ti.dot($i),u=Ti.dot(hc),h=$i.dot($i),p=$i.dot(hc),m=a*h-l*l;if(m===0)return s.set(0,0,0),null;let v=1/m,_=(h*u-l*p)*v,R=(a*p-l*u)*v;return s.set(1-_-R,R,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(e,t,n,r,s,a,l,u){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),this.getInterpolation(e,t,n,r,s,a,l,u)}static getInterpolation(e,t,n,r,s,a,l,u){return this.getBarycoord(e,t,n,r,Ji)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Ji.x),u.addScaledVector(a,Ji.y),u.addScaledVector(l,Ji.z),u)}static isFrontFacing(e,t,n,r){return Ti.subVectors(n,t),$i.subVectors(e,t),Ti.cross($i).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Ti.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,l;Ts.subVectors(r,n),Ms.subVectors(s,n),fc.subVectors(e,n);let u=Ts.dot(fc),h=Ms.dot(fc);if(u<=0&&h<=0)return t.copy(n);dc.subVectors(e,r);let p=Ts.dot(dc),m=Ms.dot(dc);if(p>=0&&m<=p)return t.copy(r);let v=u*m-p*h;if(v<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(n).addScaledVector(Ts,a);pc.subVectors(e,s);let _=Ts.dot(pc),R=Ms.dot(pc);if(R>=0&&_<=R)return t.copy(s);let E=_*h-u*R;if(E<=0&&h>=0&&R<=0)return l=h/(h-R),t.copy(n).addScaledVector(Ms,l);let g=p*R-_*m;if(g<=0&&m-p>=0&&_-R>=0)return _f.subVectors(s,r),l=(m-p)/(m-p+(_-R)),t.copy(r).addScaledVector(_f,l);let c=1/(g+E+v);return a=E*c,l=v*c,t.copy(n).addScaledVector(Ts,a).addScaledVector(Ms,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},co={h:0,s:0,l:0};function mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=en.workingColorSpace){if(e=_u(e,1),t=Pn(t,0,1),n=Pn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=mc(a,s,e+1/3),this.g=mc(a,s,e),this.b=mc(a,s,e-1/3)}return en.toWorkingColorSpace(this,r),this}setStyle(e,t=on){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let n=Td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=ic(e.r),this.g=ic(e.g),this.b=ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return en.fromWorkingColorSpace(Wn.copy(this),e),Math.round(Pn(Wn.r*255,0,255))*65536+Math.round(Pn(Wn.g*255,0,255))*256+Math.round(Pn(Wn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.fromWorkingColorSpace(Wn.copy(this),t);let n=Wn.r,r=Wn.g,s=Wn.b,a=Math.max(n,r,s),l=Math.min(n,r,s),u,h,p=(l+a)/2;if(l===a)u=0,h=0;else{let m=a-l;switch(h=p<=.5?m/(a+l):m/(2-a-l),a){case n:u=(r-s)/m+(r<s?6:0);break;case r:u=(s-n)/m+2;break;case s:u=(n-r)/m+4;break}u/=6}return e.h=u,e.s=h,e.l=p,e}getRGB(e,t=en.workingColorSpace){return en.fromWorkingColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=on){en.fromWorkingColorSpace(Wn.copy(this),e);let t=Wn.r,n=Wn.g,r=Wn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(co);let n=ya(Mr.h,co.h,t),r=ya(Mr.s,co.s,t),s=ya(Mr.l,co.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new xt;xt.NAMES=Td;var p0=0,wi=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Fs,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Pc,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pc&&(n.blendDst=this.blendDst),this.blendEquation!==jr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let l in s){let u=s[l];delete u.metadata,a.push(u)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xs=class extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mn=new ce,uo=new At,fi=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array),r=jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),n=jn(n,this.array),r=jn(r,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rf&&(e.usage=this.usage),e}};var qs=class extends fi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vo=class extends fi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vn=class extends fi{constructor(e,t,n){super(new Float32Array(e),t,n)}};var m0=0,li=new Tt,gc=new dn,ws=new ce,si=new Pr,ga=new Pr,On=new ce,Xn=class i extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sd(e)?Vo:qs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new zt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];si.setFromBufferAttribute(s),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ce,1/0);return}if(e){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let l=t[s];ga.setFromBufferAttribute(l),this.morphTargetsRelative?(On.addVectors(si.min,ga.min),si.expandByPoint(On),On.addVectors(si.max,ga.max),si.expandByPoint(On)):(si.expandByPoint(ga.min),si.expandByPoint(ga.max))}si.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)On.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(On));if(t)for(let s=0,a=t.length;s<a;s++){let l=t[s],u=this.morphTargetsRelative;for(let h=0,p=l.count;h<p;h++)On.fromBufferAttribute(l,h),u&&(ws.fromBufferAttribute(e,h),On.add(ws)),r=Math.max(r,n.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*l),4));let u=this.getAttribute("tangent").array,h=[],p=[];for(let B=0;B<l;B++)h[B]=new ce,p[B]=new ce;let m=new ce,v=new ce,_=new ce,R=new At,E=new At,g=new At,c=new ce,T=new ce;function b(B,ne,te){m.fromArray(r,B*3),v.fromArray(r,ne*3),_.fromArray(r,te*3),R.fromArray(a,B*2),E.fromArray(a,ne*2),g.fromArray(a,te*2),v.sub(m),_.sub(m),E.sub(R),g.sub(R);let _e=1/(E.x*g.y-g.x*E.y);isFinite(_e)&&(c.copy(v).multiplyScalar(g.y).addScaledVector(_,-E.y).multiplyScalar(_e),T.copy(_).multiplyScalar(E.x).addScaledVector(v,-g.x).multiplyScalar(_e),h[B].add(c),h[ne].add(c),h[te].add(c),p[B].add(T),p[ne].add(T),p[te].add(T))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let B=0,ne=S.length;B<ne;++B){let te=S[B],_e=te.start,K=te.count;for(let ee=_e,le=_e+K;ee<le;ee+=3)b(n[ee+0],n[ee+1],n[ee+2])}let U=new ce,f=new ce,z=new ce,W=new ce;function F(B){z.fromArray(s,B*3),W.copy(z);let ne=h[B];U.copy(ne),U.sub(z.multiplyScalar(z.dot(ne))).normalize(),f.crossVectors(W,ne);let _e=f.dot(p[B])<0?-1:1;u[B*4]=U.x,u[B*4+1]=U.y,u[B*4+2]=U.z,u[B*4+3]=_e}for(let B=0,ne=S.length;B<ne;++B){let te=S[B],_e=te.start,K=te.count;for(let ee=_e,le=_e+K;ee<le;ee+=3)F(n[ee+0]),F(n[ee+1]),F(n[ee+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,_=n.count;v<_;v++)n.setXYZ(v,0,0,0);let r=new ce,s=new ce,a=new ce,l=new ce,u=new ce,h=new ce,p=new ce,m=new ce;if(e)for(let v=0,_=e.count;v<_;v+=3){let R=e.getX(v+0),E=e.getX(v+1),g=e.getX(v+2);r.fromBufferAttribute(t,R),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,g),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,g),l.add(p),u.add(p),h.add(p),n.setXYZ(R,l.x,l.y,l.z),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let v=0,_=t.count;v<_;v+=3)r.fromBufferAttribute(t,v+0),s.fromBufferAttribute(t,v+1),a.fromBufferAttribute(t,v+2),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),n.setXYZ(v+0,p.x,p.y,p.z),n.setXYZ(v+1,p.x,p.y,p.z),n.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)On.fromBufferAttribute(e,t),On.normalize(),e.setXYZ(t,On.x,On.y,On.z)}toNonIndexed(){function e(l,u){let h=l.array,p=l.itemSize,m=l.normalized,v=new h.constructor(u.length*p),_=0,R=0;for(let E=0,g=u.length;E<g;E++){l.isInterleavedBufferAttribute?_=u[E]*l.data.stride+l.offset:_=u[E]*p;for(let c=0;c<p;c++)v[R++]=h[_++]}return new fi(v,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let l in r){let u=r[l],h=e(u,n);t.setAttribute(l,h)}let s=this.morphAttributes;for(let l in s){let u=[],h=s[l];for(let p=0,m=h.length;p<m;p++){let v=h[p],_=e(v,n);u.push(_)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let u in n){let h=n[u];e.data.attributes[u]=h.toJSON(e.data)}let r={},s=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],p=[];for(let m=0,v=h.length;m<v;m++){let _=h[m];p.push(_.toJSON(e.data))}p.length>0&&(r[u]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let h in r){let p=r[h];this.setAttribute(h,p.clone(t))}let s=e.morphAttributes;for(let h in s){let p=[],m=s[h];for(let v=0,_=m.length;v<_;v++)p.push(m[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,p=a.length;h<p;h++){let m=a[h];this.addGroup(m.start,m.count,m.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vf=new Tt,Xr=new or,ho=new ar,yf=new ce,Es=new ce,As=new ce,Rs=new ce,_c=new ce,fo=new ce,po=new At,mo=new At,go=new At,xf=new ce,bf=new ce,Sf=new ce,_o=new ce,vo=new ce,$n=class extends dn{constructor(e=new Xn,t=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(s&&l){fo.set(0,0,0);for(let u=0,h=s.length;u<h;u++){let p=l[u],m=s[u];p!==0&&(_c.fromBufferAttribute(m,e),a?fo.addScaledVector(_c,p):fo.addScaledVector(_c.sub(t),p))}t.add(fo)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(ho.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(ho,yf)===null||Xr.origin.distanceToSquared(yf)>(e.far-e.near)**2))&&(vf.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(vf),!(n.boundingBox!==null&&Xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,l=s.index,u=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,v=s.groups,_=s.drawRange;if(l!==null)if(Array.isArray(a))for(let R=0,E=v.length;R<E;R++){let g=v[R],c=a[g.materialIndex],T=Math.max(g.start,_.start),b=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let S=T,U=b;S<U;S+=3){let f=l.getX(S),z=l.getX(S+1),W=l.getX(S+2);r=yo(this,c,e,n,h,p,m,f,z,W),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let R=Math.max(0,_.start),E=Math.min(l.count,_.start+_.count);for(let g=R,c=E;g<c;g+=3){let T=l.getX(g),b=l.getX(g+1),S=l.getX(g+2);r=yo(this,a,e,n,h,p,m,T,b,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let R=0,E=v.length;R<E;R++){let g=v[R],c=a[g.materialIndex],T=Math.max(g.start,_.start),b=Math.min(u.count,Math.min(g.start+g.count,_.start+_.count));for(let S=T,U=b;S<U;S+=3){let f=S,z=S+1,W=S+2;r=yo(this,c,e,n,h,p,m,f,z,W),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let R=Math.max(0,_.start),E=Math.min(u.count,_.start+_.count);for(let g=R,c=E;g<c;g+=3){let T=g,b=g+1,S=g+2;r=yo(this,a,e,n,h,p,m,T,b,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function g0(i,e,t,n,r,s,a,l){let u;if(e.side===ti?u=n.intersectTriangle(a,s,r,!0,l):u=n.intersectTriangle(r,s,a,e.side===Cr,l),u===null)return null;vo.copy(l),vo.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(vo);return h<t.near||h>t.far?null:{distance:h,point:vo.clone(),object:i}}function yo(i,e,t,n,r,s,a,l,u,h){i.getVertexPosition(l,Es),i.getVertexPosition(u,As),i.getVertexPosition(h,Rs);let p=g0(i,e,t,n,Es,As,Rs,_o);if(p){r&&(po.fromBufferAttribute(r,l),mo.fromBufferAttribute(r,u),go.fromBufferAttribute(r,h),p.uv=Is.getInterpolation(_o,Es,As,Rs,po,mo,go,new At)),s&&(po.fromBufferAttribute(s,l),mo.fromBufferAttribute(s,u),go.fromBufferAttribute(s,h),p.uv1=Is.getInterpolation(_o,Es,As,Rs,po,mo,go,new At),p.uv2=p.uv1),a&&(xf.fromBufferAttribute(a,l),bf.fromBufferAttribute(a,u),Sf.fromBufferAttribute(a,h),p.normal=Is.getInterpolation(_o,Es,As,Rs,xf,bf,Sf,new ce),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let m={a:l,b:u,c:h,normal:new ce,materialIndex:0};Is.getNormal(Es,As,Rs,m.normal),p.face=m}return p}var Aa=class i extends Xn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let u=[],h=[],p=[],m=[],v=0,_=0;R("z","y","x",-1,-1,n,t,e,a,s,0),R("z","y","x",1,-1,n,t,-e,a,s,1),R("x","z","y",1,1,e,n,t,r,a,2),R("x","z","y",1,-1,e,n,-t,r,a,3),R("x","y","z",1,-1,e,t,n,r,s,4),R("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new vn(h,3)),this.setAttribute("normal",new vn(p,3)),this.setAttribute("uv",new vn(m,2));function R(E,g,c,T,b,S,U,f,z,W,F){let B=S/z,ne=U/W,te=S/2,_e=U/2,K=f/2,ee=z+1,le=W+1,Me=0,me=0,Ee=new ce;for(let Re=0;Re<le;Re++){let Be=Re*ne-_e;for(let qe=0;qe<ee;qe++){let be=qe*B-te;Ee[E]=be*T,Ee[g]=Be*b,Ee[c]=K,h.push(Ee.x,Ee.y,Ee.z),Ee[E]=0,Ee[g]=0,Ee[c]=f>0?1:-1,p.push(Ee.x,Ee.y,Ee.z),m.push(qe/z),m.push(1-Re/W),Me+=1}}for(let Re=0;Re<W;Re++)for(let Be=0;Be<z;Be++){let qe=v+Be+ee*Re,be=v+Be+ee*(Re+1),Oe=v+(Be+1)+ee*(Re+1),je=v+(Be+1)+ee*Re;u.push(qe,be,je),u.push(be,Oe,je),me+=6}l.addGroup(_,me,F),_+=me,v+=Me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Zn(i){let e={};for(let t=0;t<i.length;t++){let n=Ys(i[t]);for(let r in n)e[r]=n[r]}return e}function _0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Md(i){return i.getRenderTarget()===null?i.outputColorSpace:en.workingColorSpace}var v0={clone:Ys,merge:Zn},y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,lr=class extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=_0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Go=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xn=class extends Go{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*n/h,r*=a.width/u,n*=a.height/h}let l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Cs=-90,Ps=1,Fc=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xn(Cs,Ps,e,t);r.layers=this.layers,this.add(r);let s=new xn(Cs,Ps,e,t);s.layers=this.layers,this.add(s);let a=new xn(Cs,Ps,e,t);a.layers=this.layers,this.add(a);let l=new xn(Cs,Ps,e,t);l.layers=this.layers,this.add(l);let u=new xn(Cs,Ps,e,t);u.layers=this.layers,this.add(u);let h=new xn(Cs,Ps,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,u]=t;for(let h of t)this.remove(h);if(e===nr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,l,u,h,p]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,v,_),e.xr.enabled=R,n.texture.needsPMREMUpdate=!0}},Wo=class extends Hn{constructor(e,t,n,r,s,a,l,u,h,p){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,n,r,s,a,l,u,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bc=class extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(xa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kr?on:hi),this.texture=new Wo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Aa(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ti,blending:Er});s.uniforms.tEquirect.value=t;let a=new $n(r,s),l=t.minFilter;return t.minFilter===Ta&&(t.minFilter=ci),new Fc(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},vc=new ce,b0=new ce,S0=new zt,Mi=class{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=vc.subVectors(n,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||S0.getNormalMatrix(e),r=this.coplanarPoint(vc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qr=new ar,xo=new ce,Ra=class{constructor(e=new Mi,t=new Mi,n=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nr){let n=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],u=r[3],h=r[4],p=r[5],m=r[6],v=r[7],_=r[8],R=r[9],E=r[10],g=r[11],c=r[12],T=r[13],b=r[14],S=r[15];if(n[0].setComponents(u-s,v-h,g-_,S-c).normalize(),n[1].setComponents(u+s,v+h,g+_,S+c).normalize(),n[2].setComponents(u+a,v+p,g+R,S+T).normalize(),n[3].setComponents(u-a,v-p,g-R,S-T).normalize(),n[4].setComponents(u-l,v-m,g-E,S-b).normalize(),t===nr)n[5].setComponents(u+l,v+m,g+E,S+b).normalize();else if(t===Fo)n[5].setComponents(l,m,E,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xo.x=r.normal.x>0?e.max.x:e.min.x,xo.y=r.normal.y>0?e.max.y:e.min.y,xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wd(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function T0(i,e){let t=e.isWebGL2,n=new WeakMap;function r(h,p){let m=h.array,v=h.usage,_=m.byteLength,R=i.createBuffer();i.bindBuffer(p,R),i.bufferData(p,m,v),h.onUploadCallback();let E;if(m instanceof Float32Array)E=i.FLOAT;else if(m instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)E=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=i.SHORT;else if(m instanceof Uint32Array)E=i.UNSIGNED_INT;else if(m instanceof Int32Array)E=i.INT;else if(m instanceof Int8Array)E=i.BYTE;else if(m instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:R,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){let v=p.array,_=p._updateRange,R=p.updateRanges;if(i.bindBuffer(m,h),_.count===-1&&R.length===0&&i.bufferSubData(m,0,v),R.length!==0){for(let E=0,g=R.length;E<g;E++){let c=R[E];t?i.bufferSubData(m,c.start*v.BYTES_PER_ELEMENT,v,c.start,c.count):i.bufferSubData(m,c.start*v.BYTES_PER_ELEMENT,v.subarray(c.start,c.start+c.count))}p.clearUpdateRanges()}_.count!==-1&&(t?i.bufferSubData(m,_.offset*v.BYTES_PER_ELEMENT,v,_.offset,_.count):i.bufferSubData(m,_.offset*v.BYTES_PER_ELEMENT,v.subarray(_.offset,_.offset+_.count)),_.count=-1),p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);let p=n.get(h);p&&(i.deleteBuffer(p.buffer),n.delete(h))}function u(h,p){if(h.isGLBufferAttribute){let v=n.get(h);(!v||v.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let m=n.get(h);if(m===void 0)n.set(h,r(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:a,remove:l,update:u}}var zc=class i extends Xn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,l=Math.floor(n),u=Math.floor(r),h=l+1,p=u+1,m=e/l,v=t/u,_=[],R=[],E=[],g=[];for(let c=0;c<p;c++){let T=c*v-a;for(let b=0;b<h;b++){let S=b*m-s;R.push(S,-T,0),E.push(0,0,1),g.push(b/l),g.push(1-c/u)}}for(let c=0;c<u;c++)for(let T=0;T<l;T++){let b=T+h*c,S=T+h*(c+1),U=T+1+h*(c+1),f=T+1+h*c;_.push(b,S,f),_.push(S,U,f)}this.setIndex(_),this.setAttribute("position",new vn(R,3)),this.setAttribute("normal",new vn(E,3)),this.setAttribute("uv",new vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Z0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",t_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,n_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,f_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,d_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,__=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,M_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,O_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,z_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,k_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,H_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:M0,alphahash_pars_fragment:w0,alphamap_fragment:E0,alphamap_pars_fragment:A0,alphatest_fragment:R0,alphatest_pars_fragment:C0,aomap_fragment:P0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:I0,begin_vertex:O0,beginnormal_vertex:N0,bsdfs:U0,iridescence_fragment:F0,bumpmap_pars_fragment:B0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:V0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:X0,color_vertex:q0,common:Y0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:$0,displacementmap_vertex:J0,emissivemap_fragment:K0,emissivemap_pars_fragment:Q0,colorspace_fragment:e_,colorspace_pars_fragment:t_,envmap_fragment:n_,envmap_common_pars_fragment:i_,envmap_pars_fragment:r_,envmap_pars_vertex:s_,envmap_physical_pars_fragment:__,envmap_vertex:a_,fog_vertex:o_,fog_pars_vertex:l_,fog_fragment:c_,fog_pars_fragment:u_,gradientmap_pars_fragment:h_,lightmap_fragment:f_,lightmap_pars_fragment:d_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:v_,lights_toon_pars_fragment:y_,lights_phong_fragment:x_,lights_phong_pars_fragment:b_,lights_physical_fragment:S_,lights_physical_pars_fragment:T_,lights_fragment_begin:M_,lights_fragment_maps:w_,lights_fragment_end:E_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:C_,logdepthbuf_vertex:P_,map_fragment:L_,map_pars_fragment:D_,map_particle_fragment:I_,map_particle_pars_fragment:O_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:U_,morphcolor_vertex:F_,morphnormal_vertex:B_,morphtarget_pars_vertex:z_,morphtarget_vertex:k_,normal_fragment_begin:H_,normal_fragment_maps:V_,normal_pars_fragment:G_,normal_pars_vertex:W_,normal_vertex:X_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:Y_,clearcoat_normal_fragment_maps:j_,clearcoat_pars_fragment:Z_,iridescence_pars_fragment:$_,opaque_fragment:J_,packing:K_,premultiplied_alpha_fragment:Q_,project_vertex:ev,dithering_fragment:tv,dithering_pars_fragment:nv,roughnessmap_fragment:iv,roughnessmap_pars_fragment:rv,shadowmap_pars_fragment:sv,shadowmap_pars_vertex:av,shadowmap_vertex:ov,shadowmask_pars_fragment:lv,skinbase_vertex:cv,skinning_pars_vertex:uv,skinning_vertex:hv,skinnormal_vertex:fv,specularmap_fragment:dv,specularmap_pars_fragment:pv,tonemapping_fragment:mv,tonemapping_pars_fragment:gv,transmission_fragment:_v,transmission_pars_fragment:vv,uv_pars_fragment:yv,uv_pars_vertex:xv,uv_vertex:bv,worldpos_vertex:Sv,background_vert:Tv,background_frag:Mv,backgroundCube_vert:wv,backgroundCube_frag:Ev,cube_vert:Av,cube_frag:Rv,depth_vert:Cv,depth_frag:Pv,distanceRGBA_vert:Lv,distanceRGBA_frag:Dv,equirect_vert:Iv,equirect_frag:Ov,linedashed_vert:Nv,linedashed_frag:Uv,meshbasic_vert:Fv,meshbasic_frag:Bv,meshlambert_vert:zv,meshlambert_frag:kv,meshmatcap_vert:Hv,meshmatcap_frag:Vv,meshnormal_vert:Gv,meshnormal_frag:Wv,meshphong_vert:Xv,meshphong_frag:qv,meshphysical_vert:Yv,meshphysical_frag:jv,meshtoon_vert:Zv,meshtoon_frag:$v,points_vert:Jv,points_frag:Kv,shadow_vert:Qv,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},et={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Fi={basic:{uniforms:Zn([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Zn([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new xt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Zn([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Zn([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Zn([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new xt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Zn([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Zn([et.points,et.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Zn([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Zn([et.common,et.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Zn([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Zn([et.sprite,et.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Zn([et.common,et.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Zn([et.lights,et.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Fi.physical={uniforms:Zn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var bo={r:0,b:0,g:0};function iy(i,e,t,n,r,s,a){let l=new xt(0),u=s===!0?0:1,h,p,m=null,v=0,_=null;function R(g,c){let T=!1,b=c.isScene===!0?c.background:null;b&&b.isTexture&&(b=(c.backgroundBlurriness>0?t:e).get(b)),b===null?E(l,u):b&&b.isColor&&(E(b,1),T=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===ul)?(p===void 0&&(p=new $n(new Aa(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Ys(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,f,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=b,p.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,p.material.toneMapped=en.getTransfer(b.colorSpace)!==cn,(m!==b||v!==b.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,m=b,v=b.version,_=i.toneMapping),p.layers.enableAll(),g.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new $n(new zc(2,2),new lr({name:"BackgroundMaterial",uniforms:Ys(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,h.material.toneMapped=en.getTransfer(b.colorSpace)!==cn,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(m!==b||v!==b.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,m=b,v=b.version,_=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function E(g,c){g.getRGB(bo,Md(i)),n.buffers.color.setClear(bo.r,bo.g,bo.b,c,a)}return{getClearColor:function(){return l},setClearColor:function(g,c=1){l.set(g),u=c,E(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(g){u=g,E(l,u)},render:R}}function ry(i,e,t,n){let r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,l={},u=g(null),h=u,p=!1;function m(K,ee,le,Me,me){let Ee=!1;if(a){let Re=E(Me,le,ee);h!==Re&&(h=Re,_(h.object)),Ee=c(K,Me,le,me),Ee&&T(K,Me,le,me)}else{let Re=ee.wireframe===!0;(h.geometry!==Me.id||h.program!==le.id||h.wireframe!==Re)&&(h.geometry=Me.id,h.program=le.id,h.wireframe=Re,Ee=!0)}me!==null&&t.update(me,i.ELEMENT_ARRAY_BUFFER),(Ee||p)&&(p=!1,W(K,ee,le,Me),me!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function v(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function _(K){return n.isWebGL2?i.bindVertexArray(K):s.bindVertexArrayOES(K)}function R(K){return n.isWebGL2?i.deleteVertexArray(K):s.deleteVertexArrayOES(K)}function E(K,ee,le){let Me=le.wireframe===!0,me=l[K.id];me===void 0&&(me={},l[K.id]=me);let Ee=me[ee.id];Ee===void 0&&(Ee={},me[ee.id]=Ee);let Re=Ee[Me];return Re===void 0&&(Re=g(v()),Ee[Me]=Re),Re}function g(K){let ee=[],le=[],Me=[];for(let me=0;me<r;me++)ee[me]=0,le[me]=0,Me[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:le,attributeDivisors:Me,object:K,attributes:{},index:null}}function c(K,ee,le,Me){let me=h.attributes,Ee=ee.attributes,Re=0,Be=le.getAttributes();for(let qe in Be)if(Be[qe].location>=0){let Oe=me[qe],je=Ee[qe];if(je===void 0&&(qe==="instanceMatrix"&&K.instanceMatrix&&(je=K.instanceMatrix),qe==="instanceColor"&&K.instanceColor&&(je=K.instanceColor)),Oe===void 0||Oe.attribute!==je||je&&Oe.data!==je.data)return!0;Re++}return h.attributesNum!==Re||h.index!==Me}function T(K,ee,le,Me){let me={},Ee=ee.attributes,Re=0,Be=le.getAttributes();for(let qe in Be)if(Be[qe].location>=0){let Oe=Ee[qe];Oe===void 0&&(qe==="instanceMatrix"&&K.instanceMatrix&&(Oe=K.instanceMatrix),qe==="instanceColor"&&K.instanceColor&&(Oe=K.instanceColor));let je={};je.attribute=Oe,Oe&&Oe.data&&(je.data=Oe.data),me[qe]=je,Re++}h.attributes=me,h.attributesNum=Re,h.index=Me}function b(){let K=h.newAttributes;for(let ee=0,le=K.length;ee<le;ee++)K[ee]=0}function S(K){U(K,0)}function U(K,ee){let le=h.newAttributes,Me=h.enabledAttributes,me=h.attributeDivisors;le[K]=1,Me[K]===0&&(i.enableVertexAttribArray(K),Me[K]=1),me[K]!==ee&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](K,ee),me[K]=ee)}function f(){let K=h.newAttributes,ee=h.enabledAttributes;for(let le=0,Me=ee.length;le<Me;le++)ee[le]!==K[le]&&(i.disableVertexAttribArray(le),ee[le]=0)}function z(K,ee,le,Me,me,Ee,Re){Re===!0?i.vertexAttribIPointer(K,ee,le,me,Ee):i.vertexAttribPointer(K,ee,le,Me,me,Ee)}function W(K,ee,le,Me){if(n.isWebGL2===!1&&(K.isInstancedMesh||Me.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let me=Me.attributes,Ee=le.getAttributes(),Re=ee.defaultAttributeValues;for(let Be in Ee){let qe=Ee[Be];if(qe.location>=0){let be=me[Be];if(be===void 0&&(Be==="instanceMatrix"&&K.instanceMatrix&&(be=K.instanceMatrix),Be==="instanceColor"&&K.instanceColor&&(be=K.instanceColor)),be!==void 0){let Oe=be.normalized,je=be.itemSize,tt=t.get(be);if(tt===void 0)continue;let ht=tt.buffer,gt=tt.type,pt=tt.bytesPerElement,ft=n.isWebGL2===!0&&(gt===i.INT||gt===i.UNSIGNED_INT||be.gpuType===dd);if(be.isInterleavedBufferAttribute){let _t=be.data,ge=_t.stride,bt=be.offset;if(_t.isInstancedInterleavedBuffer){for(let at=0;at<qe.locationSize;at++)U(qe.location+at,_t.meshPerAttribute);K.isInstancedMesh!==!0&&Me._maxInstanceCount===void 0&&(Me._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let at=0;at<qe.locationSize;at++)S(qe.location+at);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let at=0;at<qe.locationSize;at++)z(qe.location+at,je/qe.locationSize,gt,Oe,ge*pt,(bt+je/qe.locationSize*at)*pt,ft)}else{if(be.isInstancedBufferAttribute){for(let _t=0;_t<qe.locationSize;_t++)U(qe.location+_t,be.meshPerAttribute);K.isInstancedMesh!==!0&&Me._maxInstanceCount===void 0&&(Me._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let _t=0;_t<qe.locationSize;_t++)S(qe.location+_t);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let _t=0;_t<qe.locationSize;_t++)z(qe.location+_t,je/qe.locationSize,gt,Oe,je*pt,je/qe.locationSize*_t*pt,ft)}}else if(Re!==void 0){let Oe=Re[Be];if(Oe!==void 0)switch(Oe.length){case 2:i.vertexAttrib2fv(qe.location,Oe);break;case 3:i.vertexAttrib3fv(qe.location,Oe);break;case 4:i.vertexAttrib4fv(qe.location,Oe);break;default:i.vertexAttrib1fv(qe.location,Oe)}}}}f()}function F(){te();for(let K in l){let ee=l[K];for(let le in ee){let Me=ee[le];for(let me in Me)R(Me[me].object),delete Me[me];delete ee[le]}delete l[K]}}function B(K){if(l[K.id]===void 0)return;let ee=l[K.id];for(let le in ee){let Me=ee[le];for(let me in Me)R(Me[me].object),delete Me[me];delete ee[le]}delete l[K.id]}function ne(K){for(let ee in l){let le=l[ee];if(le[K.id]===void 0)continue;let Me=le[K.id];for(let me in Me)R(Me[me].object),delete Me[me];delete le[K.id]}}function te(){_e(),p=!0,h!==u&&(h=u,_(h.object))}function _e(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:m,reset:te,resetDefaultState:_e,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:ne,initAttributes:b,enableAttribute:S,disableUnusedAttributes:f}}function sy(i,e,t,n){let r=n.isWebGL2,s;function a(p){s=p}function l(p,m){i.drawArrays(s,p,m),t.update(m,s,1)}function u(p,m,v){if(v===0)return;let _,R;if(r)_=i,R="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),R="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[R](s,p,m,v),t.update(m,s,v)}function h(p,m,v){if(v===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let R=0;R<v;R++)this.render(p[R],m[R]);else{_.multiDrawArraysWEBGL(s,p,0,m,0,v);let R=0;for(let E=0;E<v;E++)R+=m[E];t.update(R,s,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function ay(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let z=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",l=t.precision!==void 0?t.precision:"highp",u=s(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=a||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),R=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),E=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),c=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,S=a||e.has("OES_texture_float"),U=b&&S,f=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:R,maxAttributes:E,maxVertexUniforms:g,maxVaryings:c,maxFragmentUniforms:T,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:U,maxSamples:f}}function oy(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Mi,l=new zt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){let _=m.length!==0||v||n!==0||r;return r=v,n=m.length,_},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,v){t=p(m,v,0)},this.setState=function(m,v,_){let R=m.clippingPlanes,E=m.clipIntersection,g=m.clipShadows,c=i.get(m);if(!r||R===null||R.length===0||s&&!g)s?p(null):h();else{let T=s?0:n,b=T*4,S=c.clippingState||null;u.value=S,S=p(R,v,b,_);for(let U=0;U!==b;++U)S[U]=t[U];c.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,v,_,R){let E=m!==null?m.length:0,g=null;if(E!==0){if(g=u.value,R!==!0||g===null){let c=_+E*4,T=v.matrixWorldInverse;l.getNormalMatrix(T),(g===null||g.length<c)&&(g=new Float32Array(c));for(let b=0,S=_;b!==E;++b,S+=4)a.copy(m[b]).applyMatrix4(T,l),a.normal.toArray(g,S),g[S+3]=a.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}function ly(i){let e=new WeakMap;function t(a,l){return l===Sa?a.mapping=ks:l===Lc&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){let l=a.mapping;if(l===Sa||l===Lc)if(e.has(a)){let u=e.get(a).texture;return t(u,a.mapping)}else{let u=a.image;if(u&&u.height>0){let h=new Bc(u.height/2);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){let l=a.target;l.removeEventListener("dispose",r);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var js=class extends Go{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,l-=p*this.view.offsetY,u=l-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Os=4,Tf=[.125,.215,.35,.446,.526,.582],Zr=20,yc=new js,Mf=new xt,xc=null,bc=0,Sc=0,Yr=(1+Math.sqrt(5))/2,Ls=1/Yr,wf=[new ce(1,1,1),new ce(-1,1,1),new ce(1,1,-1),new ce(-1,1,-1),new ce(0,Yr,Ls),new ce(0,Yr,-Ls),new ce(Ls,0,Yr),new ce(-Ls,0,Yr),new ce(Yr,Ls,0),new ce(-Yr,Ls,0)],Xo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){xc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,bc,Sc),e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Ma,format:ui,colorSpace:rr,depthBuffer:!1},r=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cy(s)),this._blurMaterial=uy(s,e,t)}return r}_compileMaterial(e){let t=new $n(this._lodPlanes[0],e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,n,r){let l=new xn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,v=p.toneMapping;p.getClearColor(Mf),p.toneMapping=Ar,p.autoClear=!1;let _=new Xs({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),R=new $n(new Aa,_),E=!1,g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,E=!0):(_.color.copy(Mf),E=!0);for(let c=0;c<6;c++){let T=c%3;T===0?(l.up.set(0,u[c],0),l.lookAt(h[c],0,0)):T===1?(l.up.set(0,0,u[c]),l.lookAt(0,h[c],0)):(l.up.set(0,u[c],0),l.lookAt(0,0,h[c]));let b=this._cubeSize;So(r,T*b,c>2?b:0,b,b),p.setRenderTarget(r),E&&p.render(R,l),p.render(e,l)}R.geometry.dispose(),R.material.dispose(),p.toneMapping=v,p.autoClear=m,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ks||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new $n(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;let u=this._cubeSize;So(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,yc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wf[(r-1)%wf.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,l){let u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let p=3,m=new $n(this._lodPlanes[r],h),v=h.uniforms,_=this._sizeLods[n]-1,R=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Zr-1),E=s/R,g=isFinite(s)?1+Math.floor(p*E):Zr;g>Zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zr}`);let c=[],T=0;for(let z=0;z<Zr;++z){let W=z/E,F=Math.exp(-W*W/2);c.push(F),z===0?T+=F:z<g&&(T+=2*F)}for(let z=0;z<c.length;z++)c[z]=c[z]/T;v.envMap.value=e.texture,v.samples.value=g,v.weights.value=c,v.latitudinal.value=a==="latitudinal",l&&(v.poleAxis.value=l);let{_lodMax:b}=this;v.dTheta.value=R,v.mipInt.value=b-n;let S=this._sizeLods[r],U=3*S*(r>b-Os?r-b+Os:0),f=4*(this._cubeSize-S);So(t,U,f,3*S,2*S),u.setRenderTarget(t),u.render(m,yc)}};function cy(i){let e=[],t=[],n=[],r=i,s=i-Os+1+Tf.length;for(let a=0;a<s;a++){let l=Math.pow(2,r);t.push(l);let u=1/l;a>i-Os?u=Tf[a-i+Os-1]:a===0&&(u=0),n.push(u);let h=1/(l-2),p=-h,m=1+h,v=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,R=6,E=3,g=2,c=1,T=new Float32Array(E*R*_),b=new Float32Array(g*R*_),S=new Float32Array(c*R*_);for(let f=0;f<_;f++){let z=f%3*2/3-1,W=f>2?0:-1,F=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];T.set(F,E*R*f),b.set(v,g*R*f);let B=[f,f,f,f,f,f];S.set(B,c*R*f)}let U=new Xn;U.setAttribute("position",new fi(T,E)),U.setAttribute("uv",new fi(b,g)),U.setAttribute("faceIndex",new fi(S,c)),e.push(U),r>Os&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ef(i,e,t){let n=new sr(i,e,t);return n.texture.mapping=ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function uy(i,e,t){let n=new Float32Array(Zr),r=new ce(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Af(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Rf(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hy(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){let u=l.mapping,h=u===Sa||u===Lc,p=u===ks||u===Hs;if(h||p)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let m=e.get(l);return t===null&&(t=new Xo(i)),m=h?t.fromEquirectangular(l,m):t.fromCubemap(l,m),e.set(l,m),m.texture}else{if(e.has(l))return e.get(l).texture;{let m=l.image;if(h&&m&&m.height>0||p&&m&&r(m)){t===null&&(t=new Xo(i));let v=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",s),v.texture}else return null}}}return l}function r(l){let u=0,h=6;for(let p=0;p<h;p++)l[p]!==void 0&&u++;return u===h}function s(l){let u=l.target;u.removeEventListener("dispose",s);let h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function dy(i,e,t,n){let r={},s=new WeakMap;function a(m){let v=m.target;v.index!==null&&e.remove(v.index);for(let R in v.attributes)e.remove(v.attributes[R]);for(let R in v.morphAttributes){let E=v.morphAttributes[R];for(let g=0,c=E.length;g<c;g++)e.remove(E[g])}v.removeEventListener("dispose",a),delete r[v.id];let _=s.get(v);_&&(e.remove(_),s.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(m,v){return r[v.id]===!0||(v.addEventListener("dispose",a),r[v.id]=!0,t.memory.geometries++),v}function u(m){let v=m.attributes;for(let R in v)e.update(v[R],i.ARRAY_BUFFER);let _=m.morphAttributes;for(let R in _){let E=_[R];for(let g=0,c=E.length;g<c;g++)e.update(E[g],i.ARRAY_BUFFER)}}function h(m){let v=[],_=m.index,R=m.attributes.position,E=0;if(_!==null){let T=_.array;E=_.version;for(let b=0,S=T.length;b<S;b+=3){let U=T[b+0],f=T[b+1],z=T[b+2];v.push(U,f,f,z,z,U)}}else if(R!==void 0){let T=R.array;E=R.version;for(let b=0,S=T.length/3-1;b<S;b+=3){let U=b+0,f=b+1,z=b+2;v.push(U,f,f,z,z,U)}}else return;let g=new(Sd(v)?Vo:qs)(v,1);g.version=E;let c=s.get(m);c&&e.remove(c),s.set(m,g)}function p(m){let v=s.get(m);if(v){let _=m.index;_!==null&&v.version<_.version&&h(m)}else h(m);return s.get(m)}return{get:l,update:u,getWireframeAttribute:p}}function py(i,e,t,n){let r=n.isWebGL2,s;function a(_){s=_}let l,u;function h(_){l=_.type,u=_.bytesPerElement}function p(_,R){i.drawElements(s,R,l,_*u),t.update(R,s,1)}function m(_,R,E){if(E===0)return;let g,c;if(r)g=i,c="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[c](s,R,l,_*u,E),t.update(R,s,E)}function v(_,R,E){if(E===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let c=0;c<E;c++)this.render(_[c]/u,R[c]);else{g.multiDrawElementsWEBGL(s,R,0,l,_,0,E);let c=0;for(let T=0;T<E;T++)c+=R[T];t.update(c,s,1)}}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function my(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function gy(i,e){return i[0]-e[0]}function _y(i,e){return Math.abs(e[1])-Math.abs(i[1])}function vy(i,e,t){let n={},r=new Float32Array(8),s=new WeakMap,a=new Zt,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function u(h,p,m){let v=h.morphTargetInfluences;if(e.isWebGL2===!0){let _=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,R=_!==void 0?_.length:0,E=s.get(p);if(E===void 0||E.count!==R){let K=function(){te.dispose(),s.delete(p),p.removeEventListener("dispose",K)};E!==void 0&&E.texture.dispose();let T=p.morphAttributes.position!==void 0,b=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,U=p.morphAttributes.position||[],f=p.morphAttributes.normal||[],z=p.morphAttributes.color||[],W=0;T===!0&&(W=1),b===!0&&(W=2),S===!0&&(W=3);let F=p.attributes.position.count*W,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);let ne=new Float32Array(F*B*4*R),te=new Ho(ne,F,B,R);te.type=tr,te.needsUpdate=!0;let _e=W*4;for(let ee=0;ee<R;ee++){let le=U[ee],Me=f[ee],me=z[ee],Ee=F*B*4*ee;for(let Re=0;Re<le.count;Re++){let Be=Re*_e;T===!0&&(a.fromBufferAttribute(le,Re),ne[Ee+Be+0]=a.x,ne[Ee+Be+1]=a.y,ne[Ee+Be+2]=a.z,ne[Ee+Be+3]=0),b===!0&&(a.fromBufferAttribute(Me,Re),ne[Ee+Be+4]=a.x,ne[Ee+Be+5]=a.y,ne[Ee+Be+6]=a.z,ne[Ee+Be+7]=0),S===!0&&(a.fromBufferAttribute(me,Re),ne[Ee+Be+8]=a.x,ne[Ee+Be+9]=a.y,ne[Ee+Be+10]=a.z,ne[Ee+Be+11]=me.itemSize===4?a.w:1)}}E={count:R,texture:te,size:new At(F,B)},s.set(p,E),p.addEventListener("dispose",K)}let g=0;for(let T=0;T<v.length;T++)g+=v[T];let c=p.morphTargetsRelative?1:1-g;m.getUniforms().setValue(i,"morphTargetBaseInfluence",c),m.getUniforms().setValue(i,"morphTargetInfluences",v),m.getUniforms().setValue(i,"morphTargetsTexture",E.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",E.size)}else{let _=v===void 0?0:v.length,R=n[p.id];if(R===void 0||R.length!==_){R=[];for(let b=0;b<_;b++)R[b]=[b,0];n[p.id]=R}for(let b=0;b<_;b++){let S=R[b];S[0]=b,S[1]=v[b]}R.sort(_y);for(let b=0;b<8;b++)b<_&&R[b][1]?(l[b][0]=R[b][0],l[b][1]=R[b][1]):(l[b][0]=Number.MAX_SAFE_INTEGER,l[b][1]=0);l.sort(gy);let E=p.morphAttributes.position,g=p.morphAttributes.normal,c=0;for(let b=0;b<8;b++){let S=l[b],U=S[0],f=S[1];U!==Number.MAX_SAFE_INTEGER&&f?(E&&p.getAttribute("morphTarget"+b)!==E[U]&&p.setAttribute("morphTarget"+b,E[U]),g&&p.getAttribute("morphNormal"+b)!==g[U]&&p.setAttribute("morphNormal"+b,g[U]),r[b]=f,c+=f):(E&&p.hasAttribute("morphTarget"+b)===!0&&p.deleteAttribute("morphTarget"+b),g&&p.hasAttribute("morphNormal"+b)===!0&&p.deleteAttribute("morphNormal"+b),r[b]=0)}let T=p.morphTargetsRelative?1:1-c;m.getUniforms().setValue(i,"morphTargetBaseInfluence",T),m.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function yy(i,e,t,n){let r=new WeakMap;function s(u){let h=n.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){let v=u.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return m}function a(){r=new WeakMap}function l(u){let h=u.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}var qo=class extends Hn{constructor(e,t,n,r,s,a,l,u,h,p){if(p=p!==void 0?p:Jr,p!==Jr&&p!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===Jr&&(n=wr),n===void 0&&p===Gs&&(n=$r),super(null,r,s,a,l,u,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:kn,this.minFilter=u!==void 0?u:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ed=new Hn,Ad=new qo(1,1);Ad.compareFunction=bd;var Rd=new Ho,Cd=new Uc,Pd=new Wo,Cf=[],Pf=[],Lf=new Float32Array(16),Df=new Float32Array(9),If=new Float32Array(4);function ta(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Cf[r];if(s===void 0&&(s=new Float32Array(r),Cf[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function Ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function dl(i,e){let t=Pf[e];t===void 0&&(t=new Int32Array(e),Pf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function by(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2fv(this.addr,e),Dn(t,e)}}function Sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ln(t,e))return;i.uniform3fv(this.addr,e),Dn(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4fv(this.addr,e),Dn(t,e)}}function My(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;If.set(n),i.uniformMatrix2fv(this.addr,!1,If),Dn(t,n)}}function wy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;Df.set(n),i.uniformMatrix3fv(this.addr,!1,Df),Dn(t,n)}}function Ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dn(t,e)}else{if(Ln(t,n))return;Lf.set(n),i.uniformMatrix4fv(this.addr,!1,Lf),Dn(t,n)}}function Ay(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2iv(this.addr,e),Dn(t,e)}}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3iv(this.addr,e),Dn(t,e)}}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4iv(this.addr,e),Dn(t,e)}}function Ly(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;i.uniform2uiv(this.addr,e),Dn(t,e)}}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;i.uniform3uiv(this.addr,e),Dn(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;i.uniform4uiv(this.addr,e),Dn(t,e)}}function Ny(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s=this.type===i.SAMPLER_2D_SHADOW?Ad:Ed;t.setTexture2D(e||s,r)}function Uy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Cd,r)}function Fy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Pd,r)}function By(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rd,r)}function zy(i){switch(i){case 5126:return xy;case 35664:return by;case 35665:return Sy;case 35666:return Ty;case 35674:return My;case 35675:return wy;case 35676:return Ey;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Ly;case 36294:return Dy;case 36295:return Iy;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return By}}function ky(i,e){i.uniform1fv(this.addr,e)}function Hy(i,e){let t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function Vy(i,e){let t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function Gy(i,e){let t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function Wy(i,e){let t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xy(i,e){let t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qy(i,e){let t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yy(i,e){i.uniform1iv(this.addr,e)}function jy(i,e){i.uniform2iv(this.addr,e)}function Zy(i,e){i.uniform3iv(this.addr,e)}function $y(i,e){i.uniform4iv(this.addr,e)}function Jy(i,e){i.uniform1uiv(this.addr,e)}function Ky(i,e){i.uniform2uiv(this.addr,e)}function Qy(i,e){i.uniform3uiv(this.addr,e)}function ex(i,e){i.uniform4uiv(this.addr,e)}function tx(i,e,t){let n=this.cache,r=e.length,s=dl(t,r);Ln(n,s)||(i.uniform1iv(this.addr,s),Dn(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ed,s[a])}function nx(i,e,t){let n=this.cache,r=e.length,s=dl(t,r);Ln(n,s)||(i.uniform1iv(this.addr,s),Dn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Cd,s[a])}function ix(i,e,t){let n=this.cache,r=e.length,s=dl(t,r);Ln(n,s)||(i.uniform1iv(this.addr,s),Dn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Pd,s[a])}function rx(i,e,t){let n=this.cache,r=e.length,s=dl(t,r);Ln(n,s)||(i.uniform1iv(this.addr,s),Dn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Rd,s[a])}function sx(i){switch(i){case 5126:return ky;case 35664:return Hy;case 35665:return Vy;case 35666:return Gy;case 35674:return Wy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return jy;case 35668:case 35672:return Zy;case 35669:case 35673:return $y;case 5125:return Jy;case 36294:return Ky;case 36295:return Qy;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return rx}}var kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zy(t.type)}},Hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sx(t.type)}},Vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let l=r[s];l.setValue(e,t[l.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function Of(i,e){i.seq.push(e),i.map[e.id]=e}function ax(i,e,t){let n=i.name,r=n.length;for(Tc.lastIndex=0;;){let s=Tc.exec(n),a=Tc.lastIndex,l=s[1],u=s[2]==="]",h=s[3];if(u&&(l=l|0),h===void 0||h==="["&&a+2===r){Of(t,h===void 0?new kc(l,i,e):new Hc(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new Vc(l),Of(t,m)),t=m}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ax(s,a,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Nf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ox=37297,lx=0;function cx(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}function ux(i){let e=en.getPrimaries(en.workingColorSpace),t=en.getPrimaries(i),n;switch(e===t?n="":e===Uo&&t===No?n="LinearDisplayP3ToLinearSRGB":e===No&&t===Uo&&(n="LinearSRGBToLinearDisplayP3"),i){case rr:case fl:return[n,"LinearTransferOETF"];case on:case gu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Uf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cx(i.getShaderSource(e),a)}else return r}function hx(i,e){let t=ux(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fx(i,e){let t;switch(e){case gg:t="Linear";break;case _g:t="Reinhard";break;case vg:t="OptimizedCineon";break;case pu:t="ACESFilmic";break;case xg:t="AgX";break;case yg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function mx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),a=s.name,l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function Ns(i){return i!==""}function Ff(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(_x,yx)}var vx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yx(i,e){let t=Bt[e];if(t===void 0){let n=vx.get(e);if(n!==void 0)t=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gc(t)}var xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(i){return i.replace(xx,bx)}function bx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function Tx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case Hs:e="ENVMAP_TYPE_CUBE";break;case ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function wx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case pg:e="ENVMAP_BLENDING_MIX";break;case mg:e="ENVMAP_BLENDING_ADD";break}return e}function Ex(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ax(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,l=t.fragmentShader,u=Sx(t),h=Tx(t),p=Mx(t),m=wx(t),v=Ex(t),_=t.isWebGL2?"":dx(t),R=px(t),E=mx(s),g=r.createProgram(),c,T,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ns).join(`
`),c.length>0&&(c+=`
`),T=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ns).join(`
`),T.length>0&&(T+=`
`)):(c=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),T=[_,kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?Bt.tonemapping_pars_fragment:"",t.toneMapping!==Ar?fx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,hx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Gc(a),a=Ff(a,t),a=Bf(a,t),l=Gc(l),l=Ff(l,t),l=Bf(l,t),a=zf(a),l=zf(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,c=[R,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);let S=b+c+a,U=b+T+l,f=Nf(r,r.VERTEX_SHADER,S),z=Nf(r,r.FRAGMENT_SHADER,U);r.attachShader(g,f),r.attachShader(g,z),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function W(te){if(i.debug.checkShaderErrors){let _e=r.getProgramInfoLog(g).trim(),K=r.getShaderInfoLog(f).trim(),ee=r.getShaderInfoLog(z).trim(),le=!0,Me=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,f,z);else{let me=Uf(r,f,"vertex"),Ee=Uf(r,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+_e+`
`+me+`
`+Ee)}else _e!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_e):(K===""||ee==="")&&(Me=!1);Me&&(te.diagnostics={runnable:le,programLog:_e,vertexShader:{log:K,prefix:c},fragmentShader:{log:ee,prefix:T}})}r.deleteShader(f),r.deleteShader(z),F=new zs(r,g),B=gx(r,g)}let F;this.getUniforms=function(){return F===void 0&&W(this),F};let B;this.getAttributes=function(){return B===void 0&&W(this),B};let ne=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ne===!1&&(ne=r.getProgramParameter(g,ox)),ne},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=f,this.fragmentShader=z,this}var Rx=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xc(e),t.set(e,n)),n}},Xc=class{constructor(e){this.id=Rx++,this.code=e,this.usedTimes=0}};function Cx(i,e,t,n,r,s,a){let l=new Ea,u=new Wc,h=[],p=r.isWebGL2,m=r.logarithmicDepthBuffer,v=r.vertexTextures,_=r.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(F){return F===0?"uv":`uv${F}`}function g(F,B,ne,te,_e){let K=te.fog,ee=_e.geometry,le=F.isMeshStandardMaterial?te.environment:null,Me=(F.isMeshStandardMaterial?t:e).get(F.envMap||le),me=Me&&Me.mapping===ul?Me.image.height:null,Ee=R[F.type];F.precision!==null&&(_=r.getMaxPrecision(F.precision),_!==F.precision&&console.warn("THREE.WebGLProgram.getParameters:",F.precision,"not supported, using",_,"instead."));let Re=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Be=Re!==void 0?Re.length:0,qe=0;ee.morphAttributes.position!==void 0&&(qe=1),ee.morphAttributes.normal!==void 0&&(qe=2),ee.morphAttributes.color!==void 0&&(qe=3);let be,Oe,je,tt;if(Ee){let yn=Fi[Ee];be=yn.vertexShader,Oe=yn.fragmentShader}else be=F.vertexShader,Oe=F.fragmentShader,u.update(F),je=u.getVertexShaderID(F),tt=u.getFragmentShaderID(F);let ht=i.getRenderTarget(),gt=_e.isInstancedMesh===!0,pt=_e.isBatchedMesh===!0,ft=!!F.map,_t=!!F.matcap,ge=!!Me,bt=!!F.aoMap,at=!!F.lightMap,yt=!!F.bumpMap,it=!!F.normalMap,It=!!F.displacementMap,vt=!!F.emissiveMap,y=!!F.metalnessMap,M=!!F.roughnessMap,N=F.anisotropy>0,V=F.clearcoat>0,J=F.iridescence>0,j=F.sheen>0,pe=F.transmission>0,ae=N&&!!F.anisotropyMap,Pe=V&&!!F.clearcoatMap,Ie=V&&!!F.clearcoatNormalMap,Ue=V&&!!F.clearcoatRoughnessMap,ye=J&&!!F.iridescenceMap,ot=J&&!!F.iridescenceThicknessMap,Y=j&&!!F.sheenColorMap,Se=j&&!!F.sheenRoughnessMap,Ge=!!F.specularMap,We=!!F.specularColorMap,$e=!!F.specularIntensityMap,Lt=pe&&!!F.transmissionMap,dt=pe&&!!F.thicknessMap,Dt=!!F.gradientMap,Xe=!!F.alphaMap,oe=F.alphaTest>0,He=!!F.alphaHash,Ze=!!F.extensions,ut=!!ee.attributes.uv1,Qe=!!ee.attributes.uv2,Nt=!!ee.attributes.uv3,Xt=Ar;return F.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Xt=i.toneMapping),{isWebGL2:p,shaderID:Ee,shaderType:F.type,shaderName:F.name,vertexShader:be,fragmentShader:Oe,defines:F.defines,customVertexShaderID:je,customFragmentShaderID:tt,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:_,batching:pt,instancing:gt,instancingColor:gt&&_e.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:rr,map:ft,matcap:_t,envMap:ge,envMapMode:ge&&Me.mapping,envMapCubeUVHeight:me,aoMap:bt,lightMap:at,bumpMap:yt,normalMap:it,displacementMap:v&&It,emissiveMap:vt,normalMapObjectSpace:it&&F.normalMapType===Og,normalMapTangentSpace:it&&F.normalMapType===hl,metalnessMap:y,roughnessMap:M,anisotropy:N,anisotropyMap:ae,clearcoat:V,clearcoatMap:Pe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ue,iridescence:J,iridescenceMap:ye,iridescenceThicknessMap:ot,sheen:j,sheenColorMap:Y,sheenRoughnessMap:Se,specularMap:Ge,specularColorMap:We,specularIntensityMap:$e,transmission:pe,transmissionMap:Lt,thicknessMap:dt,gradientMap:Dt,opaque:F.transparent===!1&&F.blending===Fs,alphaMap:Xe,alphaTest:oe,alphaHash:He,combine:F.combine,mapUv:ft&&E(F.map.channel),aoMapUv:bt&&E(F.aoMap.channel),lightMapUv:at&&E(F.lightMap.channel),bumpMapUv:yt&&E(F.bumpMap.channel),normalMapUv:it&&E(F.normalMap.channel),displacementMapUv:It&&E(F.displacementMap.channel),emissiveMapUv:vt&&E(F.emissiveMap.channel),metalnessMapUv:y&&E(F.metalnessMap.channel),roughnessMapUv:M&&E(F.roughnessMap.channel),anisotropyMapUv:ae&&E(F.anisotropyMap.channel),clearcoatMapUv:Pe&&E(F.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&E(F.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&E(F.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&E(F.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&E(F.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&E(F.sheenColorMap.channel),sheenRoughnessMapUv:Se&&E(F.sheenRoughnessMap.channel),specularMapUv:Ge&&E(F.specularMap.channel),specularColorMapUv:We&&E(F.specularColorMap.channel),specularIntensityMapUv:$e&&E(F.specularIntensityMap.channel),transmissionMapUv:Lt&&E(F.transmissionMap.channel),thicknessMapUv:dt&&E(F.thicknessMap.channel),alphaMapUv:Xe&&E(F.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(it||N),vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUv1s:ut,vertexUv2s:Qe,vertexUv3s:Nt,pointsUvs:_e.isPoints===!0&&!!ee.attributes.uv&&(ft||Xe),fog:!!K,useFog:F.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:F.flatShading===!0,sizeAttenuation:F.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:_e.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:qe,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:F.dithering,shadowMapEnabled:i.shadowMap.enabled&&ne.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ft&&F.map.isVideoTexture===!0&&en.getTransfer(F.map.colorSpace)===cn,premultipliedAlpha:F.premultipliedAlpha,doubleSided:F.side===er,flipSided:F.side===ti,useDepthPacking:F.depthPacking>=0,depthPacking:F.depthPacking||0,index0AttributeName:F.index0AttributeName,extensionDerivatives:Ze&&F.extensions.derivatives===!0,extensionFragDepth:Ze&&F.extensions.fragDepth===!0,extensionDrawBuffers:Ze&&F.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ze&&F.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ze&&F.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:F.customProgramCacheKey()}}function c(F){let B=[];if(F.shaderID?B.push(F.shaderID):(B.push(F.customVertexShaderID),B.push(F.customFragmentShaderID)),F.defines!==void 0)for(let ne in F.defines)B.push(ne),B.push(F.defines[ne]);return F.isRawShaderMaterial===!1&&(T(B,F),b(B,F),B.push(i.outputColorSpace)),B.push(F.customProgramCacheKey),B.join()}function T(F,B){F.push(B.precision),F.push(B.outputColorSpace),F.push(B.envMapMode),F.push(B.envMapCubeUVHeight),F.push(B.mapUv),F.push(B.alphaMapUv),F.push(B.lightMapUv),F.push(B.aoMapUv),F.push(B.bumpMapUv),F.push(B.normalMapUv),F.push(B.displacementMapUv),F.push(B.emissiveMapUv),F.push(B.metalnessMapUv),F.push(B.roughnessMapUv),F.push(B.anisotropyMapUv),F.push(B.clearcoatMapUv),F.push(B.clearcoatNormalMapUv),F.push(B.clearcoatRoughnessMapUv),F.push(B.iridescenceMapUv),F.push(B.iridescenceThicknessMapUv),F.push(B.sheenColorMapUv),F.push(B.sheenRoughnessMapUv),F.push(B.specularMapUv),F.push(B.specularColorMapUv),F.push(B.specularIntensityMapUv),F.push(B.transmissionMapUv),F.push(B.thicknessMapUv),F.push(B.combine),F.push(B.fogExp2),F.push(B.sizeAttenuation),F.push(B.morphTargetsCount),F.push(B.morphAttributeCount),F.push(B.numDirLights),F.push(B.numPointLights),F.push(B.numSpotLights),F.push(B.numSpotLightMaps),F.push(B.numHemiLights),F.push(B.numRectAreaLights),F.push(B.numDirLightShadows),F.push(B.numPointLightShadows),F.push(B.numSpotLightShadows),F.push(B.numSpotLightShadowsWithMaps),F.push(B.numLightProbes),F.push(B.shadowMapType),F.push(B.toneMapping),F.push(B.numClippingPlanes),F.push(B.numClipIntersection),F.push(B.depthPacking)}function b(F,B){l.disableAll(),B.isWebGL2&&l.enable(0),B.supportsVertexTextures&&l.enable(1),B.instancing&&l.enable(2),B.instancingColor&&l.enable(3),B.matcap&&l.enable(4),B.envMap&&l.enable(5),B.normalMapObjectSpace&&l.enable(6),B.normalMapTangentSpace&&l.enable(7),B.clearcoat&&l.enable(8),B.iridescence&&l.enable(9),B.alphaTest&&l.enable(10),B.vertexColors&&l.enable(11),B.vertexAlphas&&l.enable(12),B.vertexUv1s&&l.enable(13),B.vertexUv2s&&l.enable(14),B.vertexUv3s&&l.enable(15),B.vertexTangents&&l.enable(16),B.anisotropy&&l.enable(17),B.alphaHash&&l.enable(18),B.batching&&l.enable(19),F.push(l.mask),l.disableAll(),B.fog&&l.enable(0),B.useFog&&l.enable(1),B.flatShading&&l.enable(2),B.logarithmicDepthBuffer&&l.enable(3),B.skinning&&l.enable(4),B.morphTargets&&l.enable(5),B.morphNormals&&l.enable(6),B.morphColors&&l.enable(7),B.premultipliedAlpha&&l.enable(8),B.shadowMapEnabled&&l.enable(9),B.useLegacyLights&&l.enable(10),B.doubleSided&&l.enable(11),B.flipSided&&l.enable(12),B.useDepthPacking&&l.enable(13),B.dithering&&l.enable(14),B.transmission&&l.enable(15),B.sheen&&l.enable(16),B.opaque&&l.enable(17),B.pointsUvs&&l.enable(18),B.decodeVideoTexture&&l.enable(19),F.push(l.mask)}function S(F){let B=R[F.type],ne;if(B){let te=Fi[B];ne=v0.clone(te.uniforms)}else ne=F.uniforms;return ne}function U(F,B){let ne;for(let te=0,_e=h.length;te<_e;te++){let K=h[te];if(K.cacheKey===B){ne=K,++ne.usedTimes;break}}return ne===void 0&&(ne=new Ax(i,B,F,s),h.push(ne)),ne}function f(F){if(--F.usedTimes===0){let B=h.indexOf(F);h[B]=h[h.length-1],h.pop(),F.destroy()}}function z(F){u.remove(F)}function W(){u.dispose()}return{getParameters:g,getProgramCacheKey:c,getUniforms:S,acquireProgram:U,releaseProgram:f,releaseShaderCache:z,programs:h,dispose:W}}function Px(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,l){i.get(s)[a]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Lx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(m,v,_,R,E,g){let c=i[e];return c===void 0?(c={id:m.id,object:m,geometry:v,material:_,groupOrder:R,renderOrder:m.renderOrder,z:E,group:g},i[e]=c):(c.id=m.id,c.object=m,c.geometry=v,c.material=_,c.groupOrder=R,c.renderOrder=m.renderOrder,c.z=E,c.group=g),e++,c}function l(m,v,_,R,E,g){let c=a(m,v,_,R,E,g);_.transmission>0?n.push(c):_.transparent===!0?r.push(c):t.push(c)}function u(m,v,_,R,E,g){let c=a(m,v,_,R,E,g);_.transmission>0?n.unshift(c):_.transparent===!0?r.unshift(c):t.unshift(c)}function h(m,v){t.length>1&&t.sort(m||Lx),n.length>1&&n.sort(v||Hf),r.length>1&&r.sort(v||Hf)}function p(){for(let m=e,v=i.length;m<v;m++){let _=i[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:p,sort:h}}function Dx(){let i=new WeakMap;function e(n,r){let s=i.get(n),a;return s===void 0?(a=new Vf,i.set(n,[a])):r>=s.length?(a=new Vf,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ix(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ce,color:new xt};break;case"SpotLight":t={position:new ce,direction:new ce,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return i[e.id]=t,t}}}function Ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Nx=0;function Ux(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fx(i,e){let t=new Ix,n=Ox(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ce);let s=new ce,a=new Tt,l=new Tt;function u(p,m){let v=0,_=0,R=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let E=0,g=0,c=0,T=0,b=0,S=0,U=0,f=0,z=0,W=0,F=0;p.sort(Ux);let B=m===!0?Math.PI:1;for(let te=0,_e=p.length;te<_e;te++){let K=p[te],ee=K.color,le=K.intensity,Me=K.distance,me=K.shadow&&K.shadow.map?K.shadow.map.texture:null;if(K.isAmbientLight)v+=ee.r*le*B,_+=ee.g*le*B,R+=ee.b*le*B;else if(K.isLightProbe){for(let Ee=0;Ee<9;Ee++)r.probe[Ee].addScaledVector(K.sh.coefficients[Ee],le);F++}else if(K.isDirectionalLight){let Ee=t.get(K);if(Ee.color.copy(K.color).multiplyScalar(K.intensity*B),K.castShadow){let Re=K.shadow,Be=n.get(K);Be.shadowBias=Re.bias,Be.shadowNormalBias=Re.normalBias,Be.shadowRadius=Re.radius,Be.shadowMapSize=Re.mapSize,r.directionalShadow[E]=Be,r.directionalShadowMap[E]=me,r.directionalShadowMatrix[E]=K.shadow.matrix,S++}r.directional[E]=Ee,E++}else if(K.isSpotLight){let Ee=t.get(K);Ee.position.setFromMatrixPosition(K.matrixWorld),Ee.color.copy(ee).multiplyScalar(le*B),Ee.distance=Me,Ee.coneCos=Math.cos(K.angle),Ee.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),Ee.decay=K.decay,r.spot[c]=Ee;let Re=K.shadow;if(K.map&&(r.spotLightMap[z]=K.map,z++,Re.updateMatrices(K),K.castShadow&&W++),r.spotLightMatrix[c]=Re.matrix,K.castShadow){let Be=n.get(K);Be.shadowBias=Re.bias,Be.shadowNormalBias=Re.normalBias,Be.shadowRadius=Re.radius,Be.shadowMapSize=Re.mapSize,r.spotShadow[c]=Be,r.spotShadowMap[c]=me,f++}c++}else if(K.isRectAreaLight){let Ee=t.get(K);Ee.color.copy(ee).multiplyScalar(le),Ee.halfWidth.set(K.width*.5,0,0),Ee.halfHeight.set(0,K.height*.5,0),r.rectArea[T]=Ee,T++}else if(K.isPointLight){let Ee=t.get(K);if(Ee.color.copy(K.color).multiplyScalar(K.intensity*B),Ee.distance=K.distance,Ee.decay=K.decay,K.castShadow){let Re=K.shadow,Be=n.get(K);Be.shadowBias=Re.bias,Be.shadowNormalBias=Re.normalBias,Be.shadowRadius=Re.radius,Be.shadowMapSize=Re.mapSize,Be.shadowCameraNear=Re.camera.near,Be.shadowCameraFar=Re.camera.far,r.pointShadow[g]=Be,r.pointShadowMap[g]=me,r.pointShadowMatrix[g]=K.shadow.matrix,U++}r.point[g]=Ee,g++}else if(K.isHemisphereLight){let Ee=t.get(K);Ee.skyColor.copy(K.color).multiplyScalar(le*B),Ee.groundColor.copy(K.groundColor).multiplyScalar(le*B),r.hemi[b]=Ee,b++}}T>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=et.LTC_FLOAT_1,r.rectAreaLTC2=et.LTC_FLOAT_2):(r.rectAreaLTC1=et.LTC_HALF_1,r.rectAreaLTC2=et.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=et.LTC_FLOAT_1,r.rectAreaLTC2=et.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=et.LTC_HALF_1,r.rectAreaLTC2=et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=R;let ne=r.hash;(ne.directionalLength!==E||ne.pointLength!==g||ne.spotLength!==c||ne.rectAreaLength!==T||ne.hemiLength!==b||ne.numDirectionalShadows!==S||ne.numPointShadows!==U||ne.numSpotShadows!==f||ne.numSpotMaps!==z||ne.numLightProbes!==F)&&(r.directional.length=E,r.spot.length=c,r.rectArea.length=T,r.point.length=g,r.hemi.length=b,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=f,r.spotShadowMap.length=f,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=f+z-W,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=W,r.numLightProbes=F,ne.directionalLength=E,ne.pointLength=g,ne.spotLength=c,ne.rectAreaLength=T,ne.hemiLength=b,ne.numDirectionalShadows=S,ne.numPointShadows=U,ne.numSpotShadows=f,ne.numSpotMaps=z,ne.numLightProbes=F,r.version=Nx++)}function h(p,m){let v=0,_=0,R=0,E=0,g=0,c=m.matrixWorldInverse;for(let T=0,b=p.length;T<b;T++){let S=p[T];if(S.isDirectionalLight){let U=r.directional[v];U.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(c),v++}else if(S.isSpotLight){let U=r.spot[R];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(c),U.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(c),R++}else if(S.isRectAreaLight){let U=r.rectArea[E];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(c),l.identity(),a.copy(S.matrixWorld),a.premultiply(c),l.extractRotation(a),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),U.halfWidth.applyMatrix4(l),U.halfHeight.applyMatrix4(l),E++}else if(S.isPointLight){let U=r.point[_];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(c),_++}else if(S.isHemisphereLight){let U=r.hemi[g];U.direction.setFromMatrixPosition(S.matrixWorld),U.direction.transformDirection(c),g++}}}return{setup:u,setupView:h,state:r}}function Gf(i,e){let t=new Fx(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(m){n.push(m)}function l(m){r.push(m)}function u(m){t.setup(n,m)}function h(m){t.setupView(n,m)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:h,pushLight:a,pushShadow:l}}function Bx(i,e){let t=new WeakMap;function n(s,a=0){let l=t.get(s),u;return l===void 0?(u=new Gf(i,e),t.set(s,[u])):a>=l.length?(u=new Gf(i,e),l.push(u)):u=l[a],u}function r(){t=new WeakMap}return{get:n,dispose:r}}var qc=class extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yc=class extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hx(i,e,t){let n=new Ra,r=new At,s=new At,a=new Zt,l=new qc({depthPacking:Ig}),u=new Yc,h={},p=t.maxTextureSize,m={[Cr]:ti,[ti]:Cr,[er]:er},v=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:zx,fragmentShader:kx}),_=v.clone();_.defines.HORIZONTAL_PASS=1;let R=new Xn;R.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new $n(R,v),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let c=this.type;this.render=function(f,z,W){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||f.length===0)return;let F=i.getRenderTarget(),B=i.getActiveCubeFace(),ne=i.getActiveMipmapLevel(),te=i.state;te.setBlending(Er),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);let _e=c!==Qi&&this.type===Qi,K=c===Qi&&this.type!==Qi;for(let ee=0,le=f.length;ee<le;ee++){let Me=f[ee],me=Me.shadow;if(me===void 0){console.warn("THREE.WebGLShadowMap:",Me,"has no shadow.");continue}if(me.autoUpdate===!1&&me.needsUpdate===!1)continue;r.copy(me.mapSize);let Ee=me.getFrameExtents();if(r.multiply(Ee),s.copy(me.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/Ee.x),r.x=s.x*Ee.x,me.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/Ee.y),r.y=s.y*Ee.y,me.mapSize.y=s.y)),me.map===null||_e===!0||K===!0){let Be=this.type!==Qi?{minFilter:kn,magFilter:kn}:{};me.map!==null&&me.map.dispose(),me.map=new sr(r.x,r.y,Be),me.map.texture.name=Me.name+".shadowMap",me.camera.updateProjectionMatrix()}i.setRenderTarget(me.map),i.clear();let Re=me.getViewportCount();for(let Be=0;Be<Re;Be++){let qe=me.getViewport(Be);a.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),te.viewport(a),me.updateMatrices(Me,Be),n=me.getFrustum(),S(z,W,me.camera,Me,this.type)}me.isPointLightShadow!==!0&&this.type===Qi&&T(me,W),me.needsUpdate=!1}c=this.type,g.needsUpdate=!1,i.setRenderTarget(F,B,ne)};function T(f,z){let W=e.update(E);v.defines.VSM_SAMPLES!==f.blurSamples&&(v.defines.VSM_SAMPLES=f.blurSamples,_.defines.VSM_SAMPLES=f.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),f.mapPass===null&&(f.mapPass=new sr(r.x,r.y)),v.uniforms.shadow_pass.value=f.map.texture,v.uniforms.resolution.value=f.mapSize,v.uniforms.radius.value=f.radius,i.setRenderTarget(f.mapPass),i.clear(),i.renderBufferDirect(z,null,W,v,E,null),_.uniforms.shadow_pass.value=f.mapPass.texture,_.uniforms.resolution.value=f.mapSize,_.uniforms.radius.value=f.radius,i.setRenderTarget(f.map),i.clear(),i.renderBufferDirect(z,null,W,_,E,null)}function b(f,z,W,F){let B=null,ne=W.isPointLight===!0?f.customDistanceMaterial:f.customDepthMaterial;if(ne!==void 0)B=ne;else if(B=W.isPointLight===!0?u:l,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){let te=B.uuid,_e=z.uuid,K=h[te];K===void 0&&(K={},h[te]=K);let ee=K[_e];ee===void 0&&(ee=B.clone(),K[_e]=ee,z.addEventListener("dispose",U)),B=ee}if(B.visible=z.visible,B.wireframe=z.wireframe,F===Qi?B.side=z.shadowSide!==null?z.shadowSide:z.side:B.side=z.shadowSide!==null?z.shadowSide:m[z.side],B.alphaMap=z.alphaMap,B.alphaTest=z.alphaTest,B.map=z.map,B.clipShadows=z.clipShadows,B.clippingPlanes=z.clippingPlanes,B.clipIntersection=z.clipIntersection,B.displacementMap=z.displacementMap,B.displacementScale=z.displacementScale,B.displacementBias=z.displacementBias,B.wireframeLinewidth=z.wireframeLinewidth,B.linewidth=z.linewidth,W.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let te=i.properties.get(B);te.light=W}return B}function S(f,z,W,F,B){if(f.visible===!1)return;if(f.layers.test(z.layers)&&(f.isMesh||f.isLine||f.isPoints)&&(f.castShadow||f.receiveShadow&&B===Qi)&&(!f.frustumCulled||n.intersectsObject(f))){f.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,f.matrixWorld);let _e=e.update(f),K=f.material;if(Array.isArray(K)){let ee=_e.groups;for(let le=0,Me=ee.length;le<Me;le++){let me=ee[le],Ee=K[me.materialIndex];if(Ee&&Ee.visible){let Re=b(f,Ee,F,B);f.onBeforeShadow(i,f,z,W,_e,Re,me),i.renderBufferDirect(W,null,_e,Re,f,me),f.onAfterShadow(i,f,z,W,_e,Re,me)}}}else if(K.visible){let ee=b(f,K,F,B);f.onBeforeShadow(i,f,z,W,_e,ee,null),i.renderBufferDirect(W,null,_e,ee,f,null),f.onAfterShadow(i,f,z,W,_e,ee,null)}}let te=f.children;for(let _e=0,K=te.length;_e<K;_e++)S(te[_e],z,W,F,B)}function U(f){f.target.removeEventListener("dispose",U);for(let W in h){let F=h[W],B=f.target.uuid;B in F&&(F[B].dispose(),delete F[B])}}}function Vx(i,e,t){let n=t.isWebGL2;function r(){let oe=!1,He=new Zt,Ze=null,ut=new Zt(0,0,0,0);return{setMask:function(Qe){Ze!==Qe&&!oe&&(i.colorMask(Qe,Qe,Qe,Qe),Ze=Qe)},setLocked:function(Qe){oe=Qe},setClear:function(Qe,Nt,Xt,un,yn){yn===!0&&(Qe*=un,Nt*=un,Xt*=un),He.set(Qe,Nt,Xt,un),ut.equals(He)===!1&&(i.clearColor(Qe,Nt,Xt,un),ut.copy(He))},reset:function(){oe=!1,Ze=null,ut.set(-1,0,0,0)}}}function s(){let oe=!1,He=null,Ze=null,ut=null;return{setTest:function(Qe){Qe?pt(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(Qe){He!==Qe&&!oe&&(i.depthMask(Qe),He=Qe)},setFunc:function(Qe){if(Ze!==Qe){switch(Qe){case og:i.depthFunc(i.NEVER);break;case lg:i.depthFunc(i.ALWAYS);break;case cg:i.depthFunc(i.LESS);break;case Lo:i.depthFunc(i.LEQUAL);break;case ug:i.depthFunc(i.EQUAL);break;case hg:i.depthFunc(i.GEQUAL);break;case fg:i.depthFunc(i.GREATER);break;case dg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ze=Qe}},setLocked:function(Qe){oe=Qe},setClear:function(Qe){ut!==Qe&&(i.clearDepth(Qe),ut=Qe)},reset:function(){oe=!1,He=null,Ze=null,ut=null}}}function a(){let oe=!1,He=null,Ze=null,ut=null,Qe=null,Nt=null,Xt=null,un=null,yn=null;return{setTest:function(qt){oe||(qt?pt(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(qt){He!==qt&&!oe&&(i.stencilMask(qt),He=qt)},setFunc:function(qt,ln,Fn){(Ze!==qt||ut!==ln||Qe!==Fn)&&(i.stencilFunc(qt,ln,Fn),Ze=qt,ut=ln,Qe=Fn)},setOp:function(qt,ln,Fn){(Nt!==qt||Xt!==ln||un!==Fn)&&(i.stencilOp(qt,ln,Fn),Nt=qt,Xt=ln,un=Fn)},setLocked:function(qt){oe=qt},setClear:function(qt){yn!==qt&&(i.clearStencil(qt),yn=qt)},reset:function(){oe=!1,He=null,Ze=null,ut=null,Qe=null,Nt=null,Xt=null,un=null,yn=null}}}let l=new r,u=new s,h=new a,p=new WeakMap,m=new WeakMap,v={},_={},R=new WeakMap,E=[],g=null,c=!1,T=null,b=null,S=null,U=null,f=null,z=null,W=null,F=new xt(0,0,0),B=0,ne=!1,te=null,_e=null,K=null,ee=null,le=null,Me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),me=!1,Ee=0,Re=i.getParameter(i.VERSION);Re.indexOf("WebGL")!==-1?(Ee=parseFloat(/^WebGL (\d)/.exec(Re)[1]),me=Ee>=1):Re.indexOf("OpenGL ES")!==-1&&(Ee=parseFloat(/^OpenGL ES (\d)/.exec(Re)[1]),me=Ee>=2);let Be=null,qe={},be=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),je=new Zt().fromArray(be),tt=new Zt().fromArray(Oe);function ht(oe,He,Ze,ut){let Qe=new Uint8Array(4),Nt=i.createTexture();i.bindTexture(oe,Nt),i.texParameteri(oe,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(oe,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<Ze;Xt++)n&&(oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY)?i.texImage3D(He,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,Qe):i.texImage2D(He+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Qe);return Nt}let gt={};gt[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(gt[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),pt(i.DEPTH_TEST),u.setFunc(Lo),vt(!1),y(bh),pt(i.CULL_FACE),it(Er);function pt(oe){v[oe]!==!0&&(i.enable(oe),v[oe]=!0)}function ft(oe){v[oe]!==!1&&(i.disable(oe),v[oe]=!1)}function _t(oe,He){return _[oe]!==He?(i.bindFramebuffer(oe,He),_[oe]=He,n&&(oe===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=He),oe===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=He)),!0):!1}function ge(oe,He){let Ze=E,ut=!1;if(oe)if(Ze=R.get(He),Ze===void 0&&(Ze=[],R.set(He,Ze)),oe.isWebGLMultipleRenderTargets){let Qe=oe.texture;if(Ze.length!==Qe.length||Ze[0]!==i.COLOR_ATTACHMENT0){for(let Nt=0,Xt=Qe.length;Nt<Xt;Nt++)Ze[Nt]=i.COLOR_ATTACHMENT0+Nt;Ze.length=Qe.length,ut=!0}}else Ze[0]!==i.COLOR_ATTACHMENT0&&(Ze[0]=i.COLOR_ATTACHMENT0,ut=!0);else Ze[0]!==i.BACK&&(Ze[0]=i.BACK,ut=!0);ut&&(t.isWebGL2?i.drawBuffers(Ze):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ze))}function bt(oe){return g!==oe?(i.useProgram(oe),g=oe,!0):!1}let at={[jr]:i.FUNC_ADD,[qm]:i.FUNC_SUBTRACT,[Ym]:i.FUNC_REVERSE_SUBTRACT};if(n)at[Mh]=i.MIN,at[wh]=i.MAX;else{let oe=e.get("EXT_blend_minmax");oe!==null&&(at[Mh]=oe.MIN_EXT,at[wh]=oe.MAX_EXT)}let yt={[jm]:i.ZERO,[Zm]:i.ONE,[$m]:i.SRC_COLOR,[Cc]:i.SRC_ALPHA,[ng]:i.SRC_ALPHA_SATURATE,[eg]:i.DST_COLOR,[Km]:i.DST_ALPHA,[Jm]:i.ONE_MINUS_SRC_COLOR,[Pc]:i.ONE_MINUS_SRC_ALPHA,[tg]:i.ONE_MINUS_DST_COLOR,[Qm]:i.ONE_MINUS_DST_ALPHA,[ig]:i.CONSTANT_COLOR,[rg]:i.ONE_MINUS_CONSTANT_COLOR,[sg]:i.CONSTANT_ALPHA,[ag]:i.ONE_MINUS_CONSTANT_ALPHA};function it(oe,He,Ze,ut,Qe,Nt,Xt,un,yn,qt){if(oe===Er){c===!0&&(ft(i.BLEND),c=!1);return}if(c===!1&&(pt(i.BLEND),c=!0),oe!==Xm){if(oe!==T||qt!==ne){if((b!==jr||f!==jr)&&(i.blendEquation(i.FUNC_ADD),b=jr,f=jr),qt)switch(oe){case Fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFunc(i.ONE,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",oe);break}else switch(oe){case Fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",oe);break}S=null,U=null,z=null,W=null,F.set(0,0,0),B=0,T=oe,ne=qt}return}Qe=Qe||He,Nt=Nt||Ze,Xt=Xt||ut,(He!==b||Qe!==f)&&(i.blendEquationSeparate(at[He],at[Qe]),b=He,f=Qe),(Ze!==S||ut!==U||Nt!==z||Xt!==W)&&(i.blendFuncSeparate(yt[Ze],yt[ut],yt[Nt],yt[Xt]),S=Ze,U=ut,z=Nt,W=Xt),(un.equals(F)===!1||yn!==B)&&(i.blendColor(un.r,un.g,un.b,yn),F.copy(un),B=yn),T=oe,ne=!1}function It(oe,He){oe.side===er?ft(i.CULL_FACE):pt(i.CULL_FACE);let Ze=oe.side===ti;He&&(Ze=!Ze),vt(Ze),oe.blending===Fs&&oe.transparent===!1?it(Er):it(oe.blending,oe.blendEquation,oe.blendSrc,oe.blendDst,oe.blendEquationAlpha,oe.blendSrcAlpha,oe.blendDstAlpha,oe.blendColor,oe.blendAlpha,oe.premultipliedAlpha),u.setFunc(oe.depthFunc),u.setTest(oe.depthTest),u.setMask(oe.depthWrite),l.setMask(oe.colorWrite);let ut=oe.stencilWrite;h.setTest(ut),ut&&(h.setMask(oe.stencilWriteMask),h.setFunc(oe.stencilFunc,oe.stencilRef,oe.stencilFuncMask),h.setOp(oe.stencilFail,oe.stencilZFail,oe.stencilZPass)),N(oe.polygonOffset,oe.polygonOffsetFactor,oe.polygonOffsetUnits),oe.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(oe){te!==oe&&(oe?i.frontFace(i.CW):i.frontFace(i.CCW),te=oe)}function y(oe){oe!==Vm?(pt(i.CULL_FACE),oe!==_e&&(oe===bh?i.cullFace(i.BACK):oe===Gm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),_e=oe}function M(oe){oe!==K&&(me&&i.lineWidth(oe),K=oe)}function N(oe,He,Ze){oe?(pt(i.POLYGON_OFFSET_FILL),(ee!==He||le!==Ze)&&(i.polygonOffset(He,Ze),ee=He,le=Ze)):ft(i.POLYGON_OFFSET_FILL)}function V(oe){oe?pt(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function J(oe){oe===void 0&&(oe=i.TEXTURE0+Me-1),Be!==oe&&(i.activeTexture(oe),Be=oe)}function j(oe,He,Ze){Ze===void 0&&(Be===null?Ze=i.TEXTURE0+Me-1:Ze=Be);let ut=qe[Ze];ut===void 0&&(ut={type:void 0,texture:void 0},qe[Ze]=ut),(ut.type!==oe||ut.texture!==He)&&(Be!==Ze&&(i.activeTexture(Ze),Be=Ze),i.bindTexture(oe,He||gt[oe]),ut.type=oe,ut.texture=He)}function pe(){let oe=qe[Be];oe!==void 0&&oe.type!==void 0&&(i.bindTexture(oe.type,null),oe.type=void 0,oe.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Y(){try{i.texStorage2D.apply(i,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function Ge(){try{i.texImage2D.apply(i,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function We(){try{i.texImage3D.apply(i,arguments)}catch(oe){console.error("THREE.WebGLState:",oe)}}function $e(oe){je.equals(oe)===!1&&(i.scissor(oe.x,oe.y,oe.z,oe.w),je.copy(oe))}function Lt(oe){tt.equals(oe)===!1&&(i.viewport(oe.x,oe.y,oe.z,oe.w),tt.copy(oe))}function dt(oe,He){let Ze=m.get(He);Ze===void 0&&(Ze=new WeakMap,m.set(He,Ze));let ut=Ze.get(oe);ut===void 0&&(ut=i.getUniformBlockIndex(He,oe.name),Ze.set(oe,ut))}function Dt(oe,He){let ut=m.get(He).get(oe);p.get(He)!==ut&&(i.uniformBlockBinding(He,ut,oe.__bindingPointIndex),p.set(He,ut))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},Be=null,qe={},_={},R=new WeakMap,E=[],g=null,c=!1,T=null,b=null,S=null,U=null,f=null,z=null,W=null,F=new xt(0,0,0),B=0,ne=!1,te=null,_e=null,K=null,ee=null,le=null,je.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:pt,disable:ft,bindFramebuffer:_t,drawBuffers:ge,useProgram:bt,setBlending:it,setMaterial:It,setFlipSided:vt,setCullFace:y,setLineWidth:M,setPolygonOffset:N,setScissorTest:V,activeTexture:J,bindTexture:j,unbindTexture:pe,compressedTexImage2D:ae,compressedTexImage3D:Pe,texImage2D:Ge,texImage3D:We,updateUBOMapping:dt,uniformBlockBinding:Dt,texStorage2D:Y,texStorage3D:Se,texSubImage2D:Ie,texSubImage3D:Ue,compressedTexSubImage2D:ye,compressedTexSubImage3D:ot,scissor:$e,viewport:Lt,reset:Xe}}function Gx(i,e,t,n,r,s,a){let l=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap,m,v=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(y,M){return _?new OffscreenCanvas(y,M):wa("canvas")}function E(y,M,N,V){let J=1;if((y.width>V||y.height>V)&&(J=V/Math.max(y.width,y.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){let j=M?Bo:Math.floor,pe=j(J*y.width),ae=j(J*y.height);m===void 0&&(m=R(pe,ae));let Pe=N?R(pe,ae):m;return Pe.width=pe,Pe.height=ae,Pe.getContext("2d").drawImage(y,0,0,pe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+pe+"x"+ae+")."),Pe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function g(y){return Oc(y.width)&&Oc(y.height)}function c(y){return l?!1:y.wrapS!==ei||y.wrapT!==ei||y.minFilter!==kn&&y.minFilter!==ci}function T(y,M){return y.generateMipmaps&&M&&y.minFilter!==kn&&y.minFilter!==ci}function b(y){i.generateMipmap(y)}function S(y,M,N,V,J=!1){if(l===!1)return M;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let j=M;if(M===i.RED&&(N===i.FLOAT&&(j=i.R32F),N===i.HALF_FLOAT&&(j=i.R16F),N===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(j=i.R8UI),N===i.UNSIGNED_SHORT&&(j=i.R16UI),N===i.UNSIGNED_INT&&(j=i.R32UI),N===i.BYTE&&(j=i.R8I),N===i.SHORT&&(j=i.R16I),N===i.INT&&(j=i.R32I)),M===i.RG&&(N===i.FLOAT&&(j=i.RG32F),N===i.HALF_FLOAT&&(j=i.RG16F),N===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RGBA){let pe=J?Oo:en.getTransfer(V);N===i.FLOAT&&(j=i.RGBA32F),N===i.HALF_FLOAT&&(j=i.RGBA16F),N===i.UNSIGNED_BYTE&&(j=pe===cn?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function U(y,M,N){return T(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==kn&&y.minFilter!==ci?Math.log2(Math.max(M.width,M.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?M.mipmaps.length:1}function f(y){return y===kn||y===Ah||y===Zl?i.NEAREST:i.LINEAR}function z(y){let M=y.target;M.removeEventListener("dispose",z),F(M),M.isVideoTexture&&p.delete(M)}function W(y){let M=y.target;M.removeEventListener("dispose",W),ne(M)}function F(y){let M=n.get(y);if(M.__webglInit===void 0)return;let N=y.source,V=v.get(N);if(V){let J=V[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&B(y),Object.keys(V).length===0&&v.delete(N)}n.remove(y)}function B(y){let M=n.get(y);i.deleteTexture(M.__webglTexture);let N=y.source,V=v.get(N);delete V[M.__cacheKey],a.memory.textures--}function ne(y){let M=y.texture,N=n.get(y),V=n.get(M);if(V.__webglTexture!==void 0&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(N.__webglFramebuffer[J]))for(let j=0;j<N.__webglFramebuffer[J].length;j++)i.deleteFramebuffer(N.__webglFramebuffer[J][j]);else i.deleteFramebuffer(N.__webglFramebuffer[J]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[J])}else{if(Array.isArray(N.__webglFramebuffer))for(let J=0;J<N.__webglFramebuffer.length;J++)i.deleteFramebuffer(N.__webglFramebuffer[J]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let J=0;J<N.__webglColorRenderbuffer.length;J++)N.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[J]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let J=0,j=M.length;J<j;J++){let pe=n.get(M[J]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(M[J])}n.remove(M),n.remove(y)}let te=0;function _e(){te=0}function K(){let y=te;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),te+=1,y}function ee(y){let M=[];return M.push(y.wrapS),M.push(y.wrapT),M.push(y.wrapR||0),M.push(y.magFilter),M.push(y.minFilter),M.push(y.anisotropy),M.push(y.internalFormat),M.push(y.format),M.push(y.type),M.push(y.generateMipmaps),M.push(y.premultiplyAlpha),M.push(y.flipY),M.push(y.unpackAlignment),M.push(y.colorSpace),M.join()}function le(y,M){let N=n.get(y);if(y.isVideoTexture&&It(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){let V=y.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(N,y,M);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}function Me(y,M){let N=n.get(y);if(y.version>0&&N.__version!==y.version){je(N,y,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)}function me(y,M){let N=n.get(y);if(y.version>0&&N.__version!==y.version){je(N,y,M);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)}function Ee(y,M){let N=n.get(y);if(y.version>0&&N.__version!==y.version){tt(N,y,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)}let Re={[Vs]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Dc]:i.MIRRORED_REPEAT},Be={[kn]:i.NEAREST,[Ah]:i.NEAREST_MIPMAP_NEAREST,[Zl]:i.NEAREST_MIPMAP_LINEAR,[ci]:i.LINEAR,[Sg]:i.LINEAR_MIPMAP_NEAREST,[Ta]:i.LINEAR_MIPMAP_LINEAR},qe={[Ng]:i.NEVER,[Hg]:i.ALWAYS,[Ug]:i.LESS,[bd]:i.LEQUAL,[Fg]:i.EQUAL,[kg]:i.GEQUAL,[Bg]:i.GREATER,[zg]:i.NOTEQUAL};function be(y,M,N){if(N?(i.texParameteri(y,i.TEXTURE_WRAP_S,Re[M.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Re[M.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Re[M.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Be[M.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Be[M.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==ei||M.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,f(M.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,f(M.minFilter)),M.minFilter!==kn&&M.minFilter!==ci&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,qe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let V=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===kn||M.minFilter!==Zl&&M.minFilter!==Ta||M.type===tr&&e.has("OES_texture_float_linear")===!1||l===!1&&M.type===Ma&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(y,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Oe(y,M){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,M.addEventListener("dispose",z));let V=M.source,J=v.get(V);J===void 0&&(J={},v.set(V,J));let j=ee(M);if(j!==y.__cacheKey){J[j]===void 0&&(J[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[j].usedTimes++;let pe=J[y.__cacheKey];pe!==void 0&&(J[y.__cacheKey].usedTimes--,pe.usedTimes===0&&B(M)),y.__cacheKey=j,y.__webglTexture=J[j].texture}return N}function je(y,M,N){let V=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=i.TEXTURE_3D);let J=Oe(y,M),j=M.source;t.bindTexture(V,y.__webglTexture,i.TEXTURE0+N);let pe=n.get(j);if(j.version!==pe.__version||J===!0){t.activeTexture(i.TEXTURE0+N);let ae=en.getPrimaries(en.workingColorSpace),Pe=M.colorSpace===hi?null:en.getPrimaries(M.colorSpace),Ie=M.colorSpace===hi||ae===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ue=c(M)&&g(M.image)===!1,ye=E(M.image,Ue,!1,r.maxTextureSize);ye=vt(M,ye);let ot=g(ye)||l,Y=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),Ge=S(M.internalFormat,Y,Se,M.colorSpace,M.isVideoTexture);be(V,M,ot);let We,$e=M.mipmaps,Lt=l&&M.isVideoTexture!==!0&&Ge!==yd,dt=pe.__version===void 0||J===!0,Dt=U(M,ye,ot);if(M.isDepthTexture)Ge=i.DEPTH_COMPONENT,l?M.type===tr?Ge=i.DEPTH_COMPONENT32F:M.type===wr?Ge=i.DEPTH_COMPONENT24:M.type===$r?Ge=i.DEPTH24_STENCIL8:Ge=i.DEPTH_COMPONENT16:M.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Jr&&Ge===i.DEPTH_COMPONENT&&M.type!==mu&&M.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=wr,Se=s.convert(M.type)),M.format===Gs&&Ge===i.DEPTH_COMPONENT&&(Ge=i.DEPTH_STENCIL,M.type!==$r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=$r,Se=s.convert(M.type))),dt&&(Lt?t.texStorage2D(i.TEXTURE_2D,1,Ge,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Ge,ye.width,ye.height,0,Y,Se,null));else if(M.isDataTexture)if($e.length>0&&ot){Lt&&dt&&t.texStorage2D(i.TEXTURE_2D,Dt,Ge,$e[0].width,$e[0].height);for(let Xe=0,oe=$e.length;Xe<oe;Xe++)We=$e[Xe],Lt?t.texSubImage2D(i.TEXTURE_2D,Xe,0,0,We.width,We.height,Y,Se,We.data):t.texImage2D(i.TEXTURE_2D,Xe,Ge,We.width,We.height,0,Y,Se,We.data);M.generateMipmaps=!1}else Lt?(dt&&t.texStorage2D(i.TEXTURE_2D,Dt,Ge,ye.width,ye.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,Y,Se,ye.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,ye.width,ye.height,0,Y,Se,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Lt&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ge,$e[0].width,$e[0].height,ye.depth);for(let Xe=0,oe=$e.length;Xe<oe;Xe++)We=$e[Xe],M.format!==ui?Y!==null?Lt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Xe,0,0,0,We.width,We.height,ye.depth,Y,We.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Xe,Ge,We.width,We.height,ye.depth,0,We.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Xe,0,0,0,We.width,We.height,ye.depth,Y,Se,We.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Xe,Ge,We.width,We.height,ye.depth,0,Y,Se,We.data)}else{Lt&&dt&&t.texStorage2D(i.TEXTURE_2D,Dt,Ge,$e[0].width,$e[0].height);for(let Xe=0,oe=$e.length;Xe<oe;Xe++)We=$e[Xe],M.format!==ui?Y!==null?Lt?t.compressedTexSubImage2D(i.TEXTURE_2D,Xe,0,0,We.width,We.height,Y,We.data):t.compressedTexImage2D(i.TEXTURE_2D,Xe,Ge,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?t.texSubImage2D(i.TEXTURE_2D,Xe,0,0,We.width,We.height,Y,Se,We.data):t.texImage2D(i.TEXTURE_2D,Xe,Ge,We.width,We.height,0,Y,Se,We.data)}else if(M.isDataArrayTexture)Lt?(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ge,ye.width,ye.height,ye.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Y,Se,ye.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,ye.width,ye.height,ye.depth,0,Y,Se,ye.data);else if(M.isData3DTexture)Lt?(dt&&t.texStorage3D(i.TEXTURE_3D,Dt,Ge,ye.width,ye.height,ye.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Y,Se,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,ye.width,ye.height,ye.depth,0,Y,Se,ye.data);else if(M.isFramebufferTexture){if(dt)if(Lt)t.texStorage2D(i.TEXTURE_2D,Dt,Ge,ye.width,ye.height);else{let Xe=ye.width,oe=ye.height;for(let He=0;He<Dt;He++)t.texImage2D(i.TEXTURE_2D,He,Ge,Xe,oe,0,Y,Se,null),Xe>>=1,oe>>=1}}else if($e.length>0&&ot){Lt&&dt&&t.texStorage2D(i.TEXTURE_2D,Dt,Ge,$e[0].width,$e[0].height);for(let Xe=0,oe=$e.length;Xe<oe;Xe++)We=$e[Xe],Lt?t.texSubImage2D(i.TEXTURE_2D,Xe,0,0,Y,Se,We):t.texImage2D(i.TEXTURE_2D,Xe,Ge,Y,Se,We);M.generateMipmaps=!1}else Lt?(dt&&t.texStorage2D(i.TEXTURE_2D,Dt,Ge,ye.width,ye.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y,Se,ye)):t.texImage2D(i.TEXTURE_2D,0,Ge,Y,Se,ye);T(M,ot)&&b(V),pe.__version=j.version,M.onUpdate&&M.onUpdate(M)}y.__version=M.version}function tt(y,M,N){if(M.image.length!==6)return;let V=Oe(y,M),J=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);let j=n.get(J);if(J.version!==j.__version||V===!0){t.activeTexture(i.TEXTURE0+N);let pe=en.getPrimaries(en.workingColorSpace),ae=M.colorSpace===hi?null:en.getPrimaries(M.colorSpace),Pe=M.colorSpace===hi||pe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let Xe=0;Xe<6;Xe++)!Ie&&!Ue?ye[Xe]=E(M.image[Xe],!1,!0,r.maxCubemapSize):ye[Xe]=Ue?M.image[Xe].image:M.image[Xe],ye[Xe]=vt(M,ye[Xe]);let ot=ye[0],Y=g(ot)||l,Se=s.convert(M.format,M.colorSpace),Ge=s.convert(M.type),We=S(M.internalFormat,Se,Ge,M.colorSpace),$e=l&&M.isVideoTexture!==!0,Lt=j.__version===void 0||V===!0,dt=U(M,ot,Y);be(i.TEXTURE_CUBE_MAP,M,Y);let Dt;if(Ie){$e&&Lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,We,ot.width,ot.height);for(let Xe=0;Xe<6;Xe++){Dt=ye[Xe].mipmaps;for(let oe=0;oe<Dt.length;oe++){let He=Dt[oe];M.format!==ui?Se!==null?$e?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,oe,0,0,He.width,He.height,Se,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,oe,We,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,oe,0,0,He.width,He.height,Se,Ge,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,oe,We,He.width,He.height,0,Se,Ge,He.data)}}}else{Dt=M.mipmaps,$e&&Lt&&(Dt.length>0&&dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,We,ye[0].width,ye[0].height));for(let Xe=0;Xe<6;Xe++)if(Ue){$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,ye[Xe].width,ye[Xe].height,Se,Ge,ye[Xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,We,ye[Xe].width,ye[Xe].height,0,Se,Ge,ye[Xe].data);for(let oe=0;oe<Dt.length;oe++){let Ze=Dt[oe].image[Xe].image;$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,oe+1,0,0,Ze.width,Ze.height,Se,Ge,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,oe+1,We,Ze.width,Ze.height,0,Se,Ge,Ze.data)}}else{$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,Se,Ge,ye[Xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,We,Se,Ge,ye[Xe]);for(let oe=0;oe<Dt.length;oe++){let He=Dt[oe];$e?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,oe+1,0,0,Se,Ge,He.image[Xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,oe+1,We,Se,Ge,He.image[Xe])}}}T(M,Y)&&b(i.TEXTURE_CUBE_MAP),j.__version=J.version,M.onUpdate&&M.onUpdate(M)}y.__version=M.version}function ht(y,M,N,V,J,j){let pe=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),Pe=S(N.internalFormat,pe,ae,N.colorSpace);if(!n.get(M).__hasExternalTextures){let Ue=Math.max(1,M.width>>j),ye=Math.max(1,M.height>>j);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,j,Pe,Ue,ye,M.depth,0,pe,ae,null):t.texImage2D(J,j,Pe,Ue,ye,0,pe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),it(M)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,J,n.get(N).__webglTexture,0,yt(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,J,n.get(N).__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(y,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),M.depthBuffer&&!M.stencilBuffer){let V=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||it(M)){let J=M.depthTexture;J&&J.isDepthTexture&&(J.type===tr?V=i.DEPTH_COMPONENT32F:J.type===wr&&(V=i.DEPTH_COMPONENT24));let j=yt(M);it(M)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,V,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,j,V,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,V,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(M.depthBuffer&&M.stencilBuffer){let V=yt(M);N&&it(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,V,i.DEPTH24_STENCIL8,M.width,M.height):it(M)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{let V=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<V.length;J++){let j=V[J],pe=s.convert(j.format,j.colorSpace),ae=s.convert(j.type),Pe=S(j.internalFormat,pe,ae,j.colorSpace),Ie=yt(M);N&&it(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Pe,M.width,M.height):it(M)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Pe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(y,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le(M.depthTexture,0);let V=n.get(M.depthTexture).__webglTexture,J=yt(M);if(M.depthTexture.format===Jr)it(M)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,V,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,V,0);else if(M.depthTexture.format===Gs)it(M)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,V,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function ft(y){let M=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");pt(M.__webglFramebuffer,y)}else if(N){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]=i.createRenderbuffer(),gt(M.__webglDepthbuffer[V],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),gt(M.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(y,M,N){let V=n.get(y);M!==void 0&&ht(V.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&ft(y)}function ge(y){let M=y.texture,N=n.get(y),V=n.get(M);y.addEventListener("dispose",W),y.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=M.version,a.memory.textures++);let J=y.isWebGLCubeRenderTarget===!0,j=y.isWebGLMultipleRenderTargets===!0,pe=g(y)||l;if(J){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(l&&M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)N.__webglFramebuffer[ae][Pe]=i.createFramebuffer()}else N.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(l&&M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)N.__webglFramebuffer[ae]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(j)if(r.drawBuffers){let ae=y.texture;for(let Pe=0,Ie=ae.length;Pe<Ie;Pe++){let Ue=n.get(ae[Pe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&y.samples>0&&it(y)===!1){let ae=j?M:[M];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ae.length;Pe++){let Ie=ae[Pe];N.__webglColorRenderbuffer[Pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Pe]);let Ue=s.convert(Ie.format,Ie.colorSpace),ye=s.convert(Ie.type),ot=S(Ie.internalFormat,Ue,ye,Ie.colorSpace,y.isXRRenderTarget===!0),Y=yt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,ot,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,N.__webglColorRenderbuffer[Pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),be(i.TEXTURE_CUBE_MAP,M,pe);for(let ae=0;ae<6;ae++)if(l&&M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)ht(N.__webglFramebuffer[ae][Pe],y,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe);else ht(N.__webglFramebuffer[ae],y,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);T(M,pe)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let ae=y.texture;for(let Pe=0,Ie=ae.length;Pe<Ie;Pe++){let Ue=ae[Pe],ye=n.get(Ue);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),be(i.TEXTURE_2D,Ue,pe),ht(N.__webglFramebuffer,y,Ue,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,0),T(Ue,pe)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(l?ae=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,V.__webglTexture),be(ae,M,pe),l&&M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)ht(N.__webglFramebuffer[Pe],y,M,i.COLOR_ATTACHMENT0,ae,Pe);else ht(N.__webglFramebuffer,y,M,i.COLOR_ATTACHMENT0,ae,0);T(M,pe)&&b(ae),t.unbindTexture()}y.depthBuffer&&ft(y)}function bt(y){let M=g(y)||l,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let V=0,J=N.length;V<J;V++){let j=N[V];if(T(j,M)){let pe=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(j).__webglTexture;t.bindTexture(pe,ae),b(pe),t.unbindTexture()}}}function at(y){if(l&&y.samples>0&&it(y)===!1){let M=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,V=y.height,J=i.COLOR_BUFFER_BIT,j=[],pe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(y),Pe=y.isWebGLMultipleRenderTargets===!0;if(Pe)for(let Ie=0;Ie<M.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){j.push(i.COLOR_ATTACHMENT0+Ie),y.depthBuffer&&j.push(pe);let Ue=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ue===!1&&(y.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Pe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]),Ue===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),Pe){let ye=n.get(M[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,N,V,0,0,N,V,J,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pe)for(let Ie=0;Ie<M.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Ie]);let Ue=n.get(M[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function yt(y){return Math.min(r.maxSamples,y.samples)}function it(y){let M=n.get(y);return l&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function It(y){let M=a.render.frame;p.get(y)!==M&&(p.set(y,M),y.update())}function vt(y,M){let N=y.colorSpace,V=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Ic||N!==rr&&N!==hi&&(en.getTransfer(N)===cn?l===!1?e.has("EXT_sRGB")===!0&&V===ui?(y.format=Ic,y.minFilter=ci,y.generateMipmaps=!1):M=zo.sRGBToLinear(M):(V!==ui||J!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}this.allocateTextureUnit=K,this.resetTextureUnits=_e,this.setTexture2D=le,this.setTexture2DArray=Me,this.setTexture3D=me,this.setTextureCube=Ee,this.rebindTextures=_t,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=it}function Wx(i,e,t){let n=t.isWebGL2;function r(s,a=hi){let l,u=en.getTransfer(a);if(s===Rr)return i.UNSIGNED_BYTE;if(s===pd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===md)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Tg)return i.BYTE;if(s===Mg)return i.SHORT;if(s===mu)return i.UNSIGNED_SHORT;if(s===dd)return i.INT;if(s===wr)return i.UNSIGNED_INT;if(s===tr)return i.FLOAT;if(s===Ma)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===wg)return i.ALPHA;if(s===ui)return i.RGBA;if(s===Eg)return i.LUMINANCE;if(s===Ag)return i.LUMINANCE_ALPHA;if(s===Jr)return i.DEPTH_COMPONENT;if(s===Gs)return i.DEPTH_STENCIL;if(s===Ic)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===Rg)return i.RED;if(s===gd)return i.RED_INTEGER;if(s===Cg)return i.RG;if(s===_d)return i.RG_INTEGER;if(s===vd)return i.RGBA_INTEGER;if(s===$l||s===Jl||s===Kl||s===Ql)if(u===cn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===$l)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===$l)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rh||s===Ch||s===Ph||s===Lh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Rh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ch)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ph)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yd)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dh||s===Ih)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Dh)return u===cn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Ih)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Oh||s===Nh||s===Uh||s===Fh||s===Bh||s===zh||s===kh||s===Hh||s===Vh||s===Gh||s===Wh||s===Xh||s===qh||s===Yh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Oh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yh)return u===cn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ec||s===jh||s===Zh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===ec)return u===cn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pg||s===$h||s===Jh||s===Kh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===ec)return l.COMPRESSED_RED_RGTC1_EXT;if(s===$h)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$r?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}var jc=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ir=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xx={type:"move"},ba=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let E of e.hand.values()){let g=t.getJointPose(E,n),c=this._getHandJoint(h,E);g!==null&&(c.matrix.fromArray(g.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=g.radius),c.visible=g!==null}let p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],v=p.position.distanceTo(m.position),_=.02,R=.005;h.inputState.pinching&&v>_+R?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=_-R&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zc=class extends Bi{constructor(e,t){super();let n=this,r=null,s=1,a=null,l="local-floor",u=1,h=null,p=null,m=null,v=null,_=null,R=null,E=t.getContextAttributes(),g=null,c=null,T=[],b=[],S=new At,U=null,f=new xn;f.layers.enable(1),f.viewport=new Zt;let z=new xn;z.layers.enable(2),z.viewport=new Zt;let W=[f,z],F=new jc;F.layers.enable(1),F.layers.enable(2);let B=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(be){let Oe=T[be];return Oe===void 0&&(Oe=new ba,T[be]=Oe),Oe.getTargetRaySpace()},this.getControllerGrip=function(be){let Oe=T[be];return Oe===void 0&&(Oe=new ba,T[be]=Oe),Oe.getGripSpace()},this.getHand=function(be){let Oe=T[be];return Oe===void 0&&(Oe=new ba,T[be]=Oe),Oe.getHandSpace()};function te(be){let Oe=b.indexOf(be.inputSource);if(Oe===-1)return;let je=T[Oe];je!==void 0&&(je.update(be.inputSource,be.frame,h||a),je.dispatchEvent({type:be.type,data:be.inputSource}))}function _e(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",_e),r.removeEventListener("inputsourceschange",K);for(let be=0;be<T.length;be++){let Oe=b[be];Oe!==null&&(b[be]=null,T[be].disconnect(Oe))}B=null,ne=null,e.setRenderTarget(g),_=null,v=null,m=null,r=null,c=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(be){s=be,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(be){l=be,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(be){h=be},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return m},this.getFrame=function(){return R},this.getSession=function(){return r},this.setSession=async function(be){if(r=be,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",_e),r.addEventListener("inputsourceschange",K),E.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Oe={antialias:r.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,Oe),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),c=new sr(_.framebufferWidth,_.framebufferHeight,{format:ui,type:Rr,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let Oe=null,je=null,tt=null;E.depth&&(tt=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Oe=E.stencil?Gs:Jr,je=E.stencil?$r:wr);let ht={colorFormat:t.RGBA8,depthFormat:tt,scaleFactor:s};m=new XRWebGLBinding(r,t),v=m.createProjectionLayer(ht),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),c=new sr(v.textureWidth,v.textureHeight,{format:ui,type:Rr,depthTexture:new qo(v.textureWidth,v.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});let gt=e.properties.get(c);gt.__ignoreDepthValues=v.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await r.requestReferenceSpace(l),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(be){for(let Oe=0;Oe<be.removed.length;Oe++){let je=be.removed[Oe],tt=b.indexOf(je);tt>=0&&(b[tt]=null,T[tt].disconnect(je))}for(let Oe=0;Oe<be.added.length;Oe++){let je=be.added[Oe],tt=b.indexOf(je);if(tt===-1){for(let gt=0;gt<T.length;gt++)if(gt>=b.length){b.push(je),tt=gt;break}else if(b[gt]===null){b[gt]=je,tt=gt;break}if(tt===-1)break}let ht=T[tt];ht&&ht.connect(je)}}let ee=new ce,le=new ce;function Me(be,Oe,je){ee.setFromMatrixPosition(Oe.matrixWorld),le.setFromMatrixPosition(je.matrixWorld);let tt=ee.distanceTo(le),ht=Oe.projectionMatrix.elements,gt=je.projectionMatrix.elements,pt=ht[14]/(ht[10]-1),ft=ht[14]/(ht[10]+1),_t=(ht[9]+1)/ht[5],ge=(ht[9]-1)/ht[5],bt=(ht[8]-1)/ht[0],at=(gt[8]+1)/gt[0],yt=pt*bt,it=pt*at,It=tt/(-bt+at),vt=It*-bt;Oe.matrixWorld.decompose(be.position,be.quaternion,be.scale),be.translateX(vt),be.translateZ(It),be.matrixWorld.compose(be.position,be.quaternion,be.scale),be.matrixWorldInverse.copy(be.matrixWorld).invert();let y=pt+It,M=ft+It,N=yt-vt,V=it+(tt-vt),J=_t*ft/M*y,j=ge*ft/M*y;be.projectionMatrix.makePerspective(N,V,J,j,y,M),be.projectionMatrixInverse.copy(be.projectionMatrix).invert()}function me(be,Oe){Oe===null?be.matrixWorld.copy(be.matrix):be.matrixWorld.multiplyMatrices(Oe.matrixWorld,be.matrix),be.matrixWorldInverse.copy(be.matrixWorld).invert()}this.updateCamera=function(be){if(r===null)return;F.near=z.near=f.near=be.near,F.far=z.far=f.far=be.far,(B!==F.near||ne!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,ne=F.far);let Oe=be.parent,je=F.cameras;me(F,Oe);for(let tt=0;tt<je.length;tt++)me(je[tt],Oe);je.length===2?Me(F,f,z):F.projectionMatrix.copy(f.projectionMatrix),Ee(be,F,Oe)};function Ee(be,Oe,je){je===null?be.matrix.copy(Oe.matrixWorld):(be.matrix.copy(je.matrixWorld),be.matrix.invert(),be.matrix.multiply(Oe.matrixWorld)),be.matrix.decompose(be.position,be.quaternion,be.scale),be.updateMatrixWorld(!0),be.projectionMatrix.copy(Oe.projectionMatrix),be.projectionMatrixInverse.copy(Oe.projectionMatrixInverse),be.isPerspectiveCamera&&(be.fov=Ws*2*Math.atan(1/be.projectionMatrix.elements[5]),be.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(v===null&&_===null))return u},this.setFoveation=function(be){u=be,v!==null&&(v.fixedFoveation=be),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=be)};let Re=null;function Be(be,Oe){if(p=Oe.getViewerPose(h||a),R=Oe,p!==null){let je=p.views;_!==null&&(e.setRenderTargetFramebuffer(c,_.framebuffer),e.setRenderTarget(c));let tt=!1;je.length!==F.cameras.length&&(F.cameras.length=0,tt=!0);for(let ht=0;ht<je.length;ht++){let gt=je[ht],pt=null;if(_!==null)pt=_.getViewport(gt);else{let _t=m.getViewSubImage(v,gt);pt=_t.viewport,ht===0&&(e.setRenderTargetTextures(c,_t.colorTexture,v.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(c))}let ft=W[ht];ft===void 0&&(ft=new xn,ft.layers.enable(ht),ft.viewport=new Zt,W[ht]=ft),ft.matrix.fromArray(gt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(gt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(pt.x,pt.y,pt.width,pt.height),ht===0&&(F.matrix.copy(ft.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),tt===!0&&F.cameras.push(ft)}}for(let je=0;je<T.length;je++){let tt=b[je],ht=T[je];tt!==null&&ht!==void 0&&ht.update(tt,Oe,h||a)}Re&&Re(be,Oe),Oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Oe}),R=null}let qe=new wd;qe.setAnimationLoop(Be),this.setAnimationLoop=function(be){Re=be},this.dispose=function(){}}};function qx(i,e){function t(g,c){g.matrixAutoUpdate===!0&&g.updateMatrix(),c.value.copy(g.matrix)}function n(g,c){c.color.getRGB(g.fogColor.value,Md(i)),c.isFog?(g.fogNear.value=c.near,g.fogFar.value=c.far):c.isFogExp2&&(g.fogDensity.value=c.density)}function r(g,c,T,b,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(g,c):c.isMeshToonMaterial?(s(g,c),m(g,c)):c.isMeshPhongMaterial?(s(g,c),p(g,c)):c.isMeshStandardMaterial?(s(g,c),v(g,c),c.isMeshPhysicalMaterial&&_(g,c,S)):c.isMeshMatcapMaterial?(s(g,c),R(g,c)):c.isMeshDepthMaterial?s(g,c):c.isMeshDistanceMaterial?(s(g,c),E(g,c)):c.isMeshNormalMaterial?s(g,c):c.isLineBasicMaterial?(a(g,c),c.isLineDashedMaterial&&l(g,c)):c.isPointsMaterial?u(g,c,T,b):c.isSpriteMaterial?h(g,c):c.isShadowMaterial?(g.color.value.copy(c.color),g.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(g,c){g.opacity.value=c.opacity,c.color&&g.diffuse.value.copy(c.color),c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(g.map.value=c.map,t(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,t(c.alphaMap,g.alphaMapTransform)),c.bumpMap&&(g.bumpMap.value=c.bumpMap,t(c.bumpMap,g.bumpMapTransform),g.bumpScale.value=c.bumpScale,c.side===ti&&(g.bumpScale.value*=-1)),c.normalMap&&(g.normalMap.value=c.normalMap,t(c.normalMap,g.normalMapTransform),g.normalScale.value.copy(c.normalScale),c.side===ti&&g.normalScale.value.negate()),c.displacementMap&&(g.displacementMap.value=c.displacementMap,t(c.displacementMap,g.displacementMapTransform),g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,g.emissiveMapTransform)),c.specularMap&&(g.specularMap.value=c.specularMap,t(c.specularMap,g.specularMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest);let T=e.get(c).envMap;if(T&&(g.envMap.value=T,g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=c.reflectivity,g.ior.value=c.ior,g.refractionRatio.value=c.refractionRatio),c.lightMap){g.lightMap.value=c.lightMap;let b=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=c.lightMapIntensity*b,t(c.lightMap,g.lightMapTransform)}c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,g.aoMapTransform))}function a(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,c.map&&(g.map.value=c.map,t(c.map,g.mapTransform))}function l(g,c){g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale}function u(g,c,T,b){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.size.value=c.size*T,g.scale.value=b*.5,c.map&&(g.map.value=c.map,t(c.map,g.uvTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,t(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function h(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.rotation.value=c.rotation,c.map&&(g.map.value=c.map,t(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,t(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function p(g,c){g.specular.value.copy(c.specular),g.shininess.value=Math.max(c.shininess,1e-4)}function m(g,c){c.gradientMap&&(g.gradientMap.value=c.gradientMap)}function v(g,c){g.metalness.value=c.metalness,c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,g.metalnessMapTransform)),g.roughness.value=c.roughness,c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,g.roughnessMapTransform)),e.get(c).envMap&&(g.envMapIntensity.value=c.envMapIntensity)}function _(g,c,T){g.ior.value=c.ior,c.sheen>0&&(g.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),g.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(g.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,g.sheenColorMapTransform)),c.sheenRoughnessMap&&(g.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,g.sheenRoughnessMapTransform))),c.clearcoat>0&&(g.clearcoat.value=c.clearcoat,g.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(g.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,g.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(g.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===ti&&g.clearcoatNormalScale.value.negate())),c.iridescence>0&&(g.iridescence.value=c.iridescence,g.iridescenceIOR.value=c.iridescenceIOR,g.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(g.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,g.iridescenceMapTransform)),c.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),c.transmission>0&&(g.transmission.value=c.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),c.transmissionMap&&(g.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,g.transmissionMapTransform)),g.thickness.value=c.thickness,c.thicknessMap&&(g.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=c.attenuationDistance,g.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(g.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(g.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=c.specularIntensity,g.specularColor.value.copy(c.specularColor),c.specularColorMap&&(g.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,g.specularColorMapTransform)),c.specularIntensityMap&&(g.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,g.specularIntensityMapTransform))}function R(g,c){c.matcap&&(g.matcap.value=c.matcap)}function E(g,c){let T=e.get(c).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Yx(i,e,t,n){let r={},s={},a=[],l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(T,b){let S=b.program;n.uniformBlockBinding(T,S)}function h(T,b){let S=r[T.id];S===void 0&&(R(T),S=p(T),r[T.id]=S,T.addEventListener("dispose",g));let U=b.program;n.updateUBOMapping(T,U);let f=e.render.frame;s[T.id]!==f&&(v(T),s[T.id]=f)}function p(T){let b=m();T.__bindingPointIndex=b;let S=i.createBuffer(),U=T.__size,f=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,U,f),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function m(){for(let T=0;T<l;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){let b=r[T.id],S=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let f=0,z=S.length;f<z;f++){let W=Array.isArray(S[f])?S[f]:[S[f]];for(let F=0,B=W.length;F<B;F++){let ne=W[F];if(_(ne,f,F,U)===!0){let te=ne.__offset,_e=Array.isArray(ne.value)?ne.value:[ne.value],K=0;for(let ee=0;ee<_e.length;ee++){let le=_e[ee],Me=E(le);typeof le=="number"||typeof le=="boolean"?(ne.__data[0]=le,i.bufferSubData(i.UNIFORM_BUFFER,te+K,ne.__data)):le.isMatrix3?(ne.__data[0]=le.elements[0],ne.__data[1]=le.elements[1],ne.__data[2]=le.elements[2],ne.__data[3]=0,ne.__data[4]=le.elements[3],ne.__data[5]=le.elements[4],ne.__data[6]=le.elements[5],ne.__data[7]=0,ne.__data[8]=le.elements[6],ne.__data[9]=le.elements[7],ne.__data[10]=le.elements[8],ne.__data[11]=0):(le.toArray(ne.__data,K),K+=Me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,ne.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(T,b,S,U){let f=T.value,z=b+"_"+S;if(U[z]===void 0)return typeof f=="number"||typeof f=="boolean"?U[z]=f:U[z]=f.clone(),!0;{let W=U[z];if(typeof f=="number"||typeof f=="boolean"){if(W!==f)return U[z]=f,!0}else if(W.equals(f)===!1)return W.copy(f),!0}return!1}function R(T){let b=T.uniforms,S=0,U=16;for(let z=0,W=b.length;z<W;z++){let F=Array.isArray(b[z])?b[z]:[b[z]];for(let B=0,ne=F.length;B<ne;B++){let te=F[B],_e=Array.isArray(te.value)?te.value:[te.value];for(let K=0,ee=_e.length;K<ee;K++){let le=_e[K],Me=E(le),me=S%U;me!==0&&U-me<Me.boundary&&(S+=U-me),te.__data=new Float32Array(Me.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=S,S+=Me.storage}}}let f=S%U;return f>0&&(S+=U-f),T.__size=S,T.__cache={},this}function E(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function g(T){let b=T.target;b.removeEventListener("dispose",g);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function c(){for(let T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:u,update:h,dispose:c}}var Qr=class{constructor(e={}){let{canvas:t=n0(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let v;n!==null?v=n.getContextAttributes().alpha:v=a;let _=new Uint32Array(4),R=new Int32Array(4),E=null,g=null,c=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this._useLegacyLights=!1,this.toneMapping=Ar,this.toneMappingExposure=1;let b=this,S=!1,U=0,f=0,z=null,W=-1,F=null,B=new Zt,ne=new Zt,te=null,_e=new xt(0),K=0,ee=t.width,le=t.height,Me=1,me=null,Ee=null,Re=new Zt(0,0,ee,le),Be=new Zt(0,0,ee,le),qe=!1,be=new Ra,Oe=!1,je=!1,tt=null,ht=new Tt,gt=new At,pt=new ce,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _t(){return z===null?Me:1}let ge=n;function bt(G,A){for(let P=0;P<G.length;P++){let O=G[P],L=t.getContext(O,A);if(L!==null)return L}return null}try{let G={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${du}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",He,!1),ge===null){let A=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&A.shift(),ge=bt(A,G),ge===null)throw bt(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ge instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ge.getShaderPrecisionFormat===void 0&&(ge.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(G){throw console.error("THREE.WebGLRenderer: "+G.message),G}let at,yt,it,It,vt,y,M,N,V,J,j,pe,ae,Pe,Ie,Ue,ye,ot,Y,Se,Ge,We,$e,Lt;function dt(){at=new fy(ge),yt=new ay(ge,at,e),at.init(yt),We=new Wx(ge,at,yt),it=new Vx(ge,at,yt),It=new my(ge),vt=new Px,y=new Gx(ge,at,it,vt,yt,We,It),M=new ly(b),N=new hy(b),V=new T0(ge,yt),$e=new ry(ge,at,V,yt),J=new dy(ge,V,It,$e),j=new yy(ge,J,V,It),Y=new vy(ge,yt,y),Ue=new oy(vt),pe=new Cx(b,M,N,at,yt,$e,Ue),ae=new qx(b,vt),Pe=new Dx,Ie=new Bx(at,yt),ot=new iy(b,M,N,it,j,v,u),ye=new Hx(b,j,yt),Lt=new Yx(ge,It,yt,it),Se=new sy(ge,at,It,yt),Ge=new py(ge,at,It,yt),It.programs=pe.programs,b.capabilities=yt,b.extensions=at,b.properties=vt,b.renderLists=Pe,b.shadowMap=ye,b.state=it,b.info=It}dt();let Dt=new Zc(b,ge);this.xr=Dt,this.getContext=function(){return ge},this.getContextAttributes=function(){return ge.getContextAttributes()},this.forceContextLoss=function(){let G=at.get("WEBGL_lose_context");G&&G.loseContext()},this.forceContextRestore=function(){let G=at.get("WEBGL_lose_context");G&&G.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(G){G!==void 0&&(Me=G,this.setSize(ee,le,!1))},this.getSize=function(G){return G.set(ee,le)},this.setSize=function(G,A,P=!0){if(Dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=G,le=A,t.width=Math.floor(G*Me),t.height=Math.floor(A*Me),P===!0&&(t.style.width=G+"px",t.style.height=A+"px"),this.setViewport(0,0,G,A)},this.getDrawingBufferSize=function(G){return G.set(ee*Me,le*Me).floor()},this.setDrawingBufferSize=function(G,A,P){ee=G,le=A,Me=P,t.width=Math.floor(G*P),t.height=Math.floor(A*P),this.setViewport(0,0,G,A)},this.getCurrentViewport=function(G){return G.copy(B)},this.getViewport=function(G){return G.copy(Re)},this.setViewport=function(G,A,P,O){G.isVector4?Re.set(G.x,G.y,G.z,G.w):Re.set(G,A,P,O),it.viewport(B.copy(Re).multiplyScalar(Me).floor())},this.getScissor=function(G){return G.copy(Be)},this.setScissor=function(G,A,P,O){G.isVector4?Be.set(G.x,G.y,G.z,G.w):Be.set(G,A,P,O),it.scissor(ne.copy(Be).multiplyScalar(Me).floor())},this.getScissorTest=function(){return qe},this.setScissorTest=function(G){it.setScissorTest(qe=G)},this.setOpaqueSort=function(G){me=G},this.setTransparentSort=function(G){Ee=G},this.getClearColor=function(G){return G.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(G=!0,A=!0,P=!0){let O=0;if(G){let L=!1;if(z!==null){let C=z.texture.format;L=C===vd||C===_d||C===gd}if(L){let C=z.texture.type,Z=C===Rr||C===wr||C===mu||C===$r||C===pd||C===md,H=ot.getClearColor(),X=ot.getClearAlpha(),se=H.r,fe=H.g,re=H.b;Z?(_[0]=se,_[1]=fe,_[2]=re,_[3]=X,ge.clearBufferuiv(ge.COLOR,0,_)):(R[0]=se,R[1]=fe,R[2]=re,R[3]=X,ge.clearBufferiv(ge.COLOR,0,R))}else O|=ge.COLOR_BUFFER_BIT}A&&(O|=ge.DEPTH_BUFFER_BIT),P&&(O|=ge.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ge.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Pe.dispose(),Ie.dispose(),vt.dispose(),M.dispose(),N.dispose(),j.dispose(),$e.dispose(),Lt.dispose(),pe.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",yn),Dt.removeEventListener("sessionend",qt),tt&&(tt.dispose(),tt=null),ln.stop()};function Xe(G){G.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let G=It.autoReset,A=ye.enabled,P=ye.autoUpdate,O=ye.needsUpdate,L=ye.type;dt(),It.autoReset=G,ye.enabled=A,ye.autoUpdate=P,ye.needsUpdate=O,ye.type=L}function He(G){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",G.statusMessage)}function Ze(G){let A=G.target;A.removeEventListener("dispose",Ze),ut(A)}function ut(G){Qe(G),vt.remove(G)}function Qe(G){let A=vt.get(G).programs;A!==void 0&&(A.forEach(function(P){pe.releaseProgram(P)}),G.isShaderMaterial&&pe.releaseShaderCache(G))}this.renderBufferDirect=function(G,A,P,O,L,C){A===null&&(A=ft);let Z=L.isMesh&&L.matrixWorld.determinant()<0,H=hs(G,A,P,O,L);it.setMaterial(O,Z);let X=P.index,se=1;if(O.wireframe===!0){if(X=J.getWireframeAttribute(P),X===void 0)return;se=2}let fe=P.drawRange,re=P.attributes.position,we=fe.start*se,Ne=(fe.start+fe.count)*se;C!==null&&(we=Math.max(we,C.start*se),Ne=Math.min(Ne,(C.start+C.count)*se)),X!==null?(we=Math.max(we,0),Ne=Math.min(Ne,X.count)):re!=null&&(we=Math.max(we,0),Ne=Math.min(Ne,re.count));let Fe=Ne-we;if(Fe<0||Fe===1/0)return;$e.setup(L,O,H,P,X);let Ce,ke=Se;if(X!==null&&(Ce=V.get(X),ke=Ge,ke.setIndex(Ce)),L.isMesh)O.wireframe===!0?(it.setLineWidth(O.wireframeLinewidth*_t()),ke.setMode(ge.LINES)):ke.setMode(ge.TRIANGLES);else if(L.isLine){let Ve=O.linewidth;Ve===void 0&&(Ve=1),it.setLineWidth(Ve*_t()),L.isLineSegments?ke.setMode(ge.LINES):L.isLineLoop?ke.setMode(ge.LINE_LOOP):ke.setMode(ge.LINE_STRIP)}else L.isPoints?ke.setMode(ge.POINTS):L.isSprite&&ke.setMode(ge.TRIANGLES);if(L.isBatchedMesh)ke.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else if(L.isInstancedMesh)ke.renderInstances(we,Fe,L.count);else if(P.isInstancedBufferGeometry){let Ve=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,St=Math.min(P.instanceCount,Ve);ke.renderInstances(we,Fe,St)}else ke.render(we,Fe)};function Nt(G,A,P){G.transparent===!0&&G.side===er&&G.forceSinglePass===!1?(G.side=ti,G.needsUpdate=!0,Vi(G,A,P),G.side=Cr,G.needsUpdate=!0,Vi(G,A,P),G.side=er):Vi(G,A,P)}this.compile=function(G,A,P=null){P===null&&(P=G),g=Ie.get(P),g.init(),T.push(g),P.traverseVisible(function(L){L.isLight&&L.layers.test(A.layers)&&(g.pushLight(L),L.castShadow&&g.pushShadow(L))}),G!==P&&G.traverseVisible(function(L){L.isLight&&L.layers.test(A.layers)&&(g.pushLight(L),L.castShadow&&g.pushShadow(L))}),g.setupLights(b._useLegacyLights);let O=new Set;return G.traverse(function(L){let C=L.material;if(C)if(Array.isArray(C))for(let Z=0;Z<C.length;Z++){let H=C[Z];Nt(H,P,L),O.add(H)}else Nt(C,P,L),O.add(C)}),T.pop(),g=null,O},this.compileAsync=function(G,A,P=null){let O=this.compile(G,A,P);return new Promise(L=>{function C(){if(O.forEach(function(Z){vt.get(Z).currentProgram.isReady()&&O.delete(Z)}),O.size===0){L(G);return}setTimeout(C,10)}at.get("KHR_parallel_shader_compile")!==null?C():setTimeout(C,10)})};let Xt=null;function un(G){Xt&&Xt(G)}function yn(){ln.stop()}function qt(){ln.start()}let ln=new wd;ln.setAnimationLoop(un),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(G){Xt=G,Dt.setAnimationLoop(G),G===null?ln.stop():ln.start()},Dt.addEventListener("sessionstart",yn),Dt.addEventListener("sessionend",qt),this.render=function(G,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(A),A=Dt.getCamera()),G.isScene===!0&&G.onBeforeRender(b,G,A,z),g=Ie.get(G,T.length),g.init(),T.push(g),ht.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),be.setFromProjectionMatrix(ht),je=this.localClippingEnabled,Oe=Ue.init(this.clippingPlanes,je),E=Pe.get(G,c.length),E.init(),c.push(E),Fn(G,A,0,b.sortObjects),E.finish(),b.sortObjects===!0&&E.sort(me,Ee),this.info.render.frame++,Oe===!0&&Ue.beginShadows();let P=g.state.shadowsArray;if(ye.render(P,G,A),Oe===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(E,G),g.setupLights(b._useLegacyLights),A.isArrayCamera){let O=A.cameras;for(let L=0,C=O.length;L<C;L++){let Z=O[L];gi(E,G,Z,Z.viewport)}}else gi(E,G,A);z!==null&&(y.updateMultisampleRenderTarget(z),y.updateRenderTargetMipmap(z)),G.isScene===!0&&G.onAfterRender(b,G,A),$e.resetDefaultState(),W=-1,F=null,T.pop(),T.length>0?g=T[T.length-1]:g=null,c.pop(),c.length>0?E=c[c.length-1]:E=null};function Fn(G,A,P,O){if(G.visible===!1)return;if(G.layers.test(A.layers)){if(G.isGroup)P=G.renderOrder;else if(G.isLOD)G.autoUpdate===!0&&G.update(A);else if(G.isLight)g.pushLight(G),G.castShadow&&g.pushShadow(G);else if(G.isSprite){if(!G.frustumCulled||be.intersectsSprite(G)){O&&pt.setFromMatrixPosition(G.matrixWorld).applyMatrix4(ht);let Z=j.update(G),H=G.material;H.visible&&E.push(G,Z,H,P,pt.z,null)}}else if((G.isMesh||G.isLine||G.isPoints)&&(!G.frustumCulled||be.intersectsObject(G))){let Z=j.update(G),H=G.material;if(O&&(G.boundingSphere!==void 0?(G.boundingSphere===null&&G.computeBoundingSphere(),pt.copy(G.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),pt.copy(Z.boundingSphere.center)),pt.applyMatrix4(G.matrixWorld).applyMatrix4(ht)),Array.isArray(H)){let X=Z.groups;for(let se=0,fe=X.length;se<fe;se++){let re=X[se],we=H[re.materialIndex];we&&we.visible&&E.push(G,Z,we,P,pt.z,re)}}else H.visible&&E.push(G,Z,H,P,pt.z,null)}}let C=G.children;for(let Z=0,H=C.length;Z<H;Z++)Fn(C[Z],A,P,O)}function gi(G,A,P,O){let L=G.opaque,C=G.transmissive,Z=G.transparent;g.setupLightsView(P),Oe===!0&&Ue.setGlobalState(b.clippingPlanes,P),C.length>0&&ls(L,C,A,P),O&&it.viewport(B.copy(O)),L.length>0&&ii(L,A,P),C.length>0&&ii(C,A,P),Z.length>0&&ii(Z,A,P),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function ls(G,A,P,O){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;let C=yt.isWebGL2;tt===null&&(tt=new sr(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")?Ma:Rr,minFilter:Ta,samples:C?4:0})),b.getDrawingBufferSize(gt),C?tt.setSize(gt.x,gt.y):tt.setSize(Bo(gt.x),Bo(gt.y));let Z=b.getRenderTarget();b.setRenderTarget(tt),b.getClearColor(_e),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear();let H=b.toneMapping;b.toneMapping=Ar,ii(G,P,O),y.updateMultisampleRenderTarget(tt),y.updateRenderTargetMipmap(tt);let X=!1;for(let se=0,fe=A.length;se<fe;se++){let re=A[se],we=re.object,Ne=re.geometry,Fe=re.material,Ce=re.group;if(Fe.side===er&&we.layers.test(O.layers)){let ke=Fe.side;Fe.side=ti,Fe.needsUpdate=!0,cs(we,P,O,Ne,Fe,Ce),Fe.side=ke,Fe.needsUpdate=!0,X=!0}}X===!0&&(y.updateMultisampleRenderTarget(tt),y.updateRenderTargetMipmap(tt)),b.setRenderTarget(Z),b.setClearColor(_e,K),b.toneMapping=H}function ii(G,A,P){let O=A.isScene===!0?A.overrideMaterial:null;for(let L=0,C=G.length;L<C;L++){let Z=G[L],H=Z.object,X=Z.geometry,se=O===null?Z.material:O,fe=Z.group;H.layers.test(P.layers)&&cs(H,A,P,X,se,fe)}}function cs(G,A,P,O,L,C){G.onBeforeRender(b,A,P,O,L,C),G.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,G.matrixWorld),G.normalMatrix.getNormalMatrix(G.modelViewMatrix),L.onBeforeRender(b,A,P,O,G,C),L.transparent===!0&&L.side===er&&L.forceSinglePass===!1?(L.side=ti,L.needsUpdate=!0,b.renderBufferDirect(P,A,O,L,G,C),L.side=Cr,L.needsUpdate=!0,b.renderBufferDirect(P,A,O,L,G,C),L.side=er):b.renderBufferDirect(P,A,O,L,G,C),G.onAfterRender(b,A,P,O,L,C)}function Vi(G,A,P){A.isScene!==!0&&(A=ft);let O=vt.get(G),L=g.state.lights,C=g.state.shadowsArray,Z=L.state.version,H=pe.getParameters(G,L.state,C,A,P),X=pe.getProgramCacheKey(H),se=O.programs;O.environment=G.isMeshStandardMaterial?A.environment:null,O.fog=A.fog,O.envMap=(G.isMeshStandardMaterial?N:M).get(G.envMap||O.environment),se===void 0&&(G.addEventListener("dispose",Ze),se=new Map,O.programs=se);let fe=se.get(X);if(fe!==void 0){if(O.currentProgram===fe&&O.lightsStateVersion===Z)return Gi(G,H),fe}else H.uniforms=pe.getUniforms(G),G.onBuild(P,H,b),G.onBeforeCompile(H,b),fe=pe.acquireProgram(H,X),se.set(X,fe),O.uniforms=H.uniforms;let re=O.uniforms;return(!G.isShaderMaterial&&!G.isRawShaderMaterial||G.clipping===!0)&&(re.clippingPlanes=Ue.uniform),Gi(G,H),O.needsLights=Ai(G),O.lightsStateVersion=Z,O.needsLights&&(re.ambientLightColor.value=L.state.ambient,re.lightProbe.value=L.state.probe,re.directionalLights.value=L.state.directional,re.directionalLightShadows.value=L.state.directionalShadow,re.spotLights.value=L.state.spot,re.spotLightShadows.value=L.state.spotShadow,re.rectAreaLights.value=L.state.rectArea,re.ltc_1.value=L.state.rectAreaLTC1,re.ltc_2.value=L.state.rectAreaLTC2,re.pointLights.value=L.state.point,re.pointLightShadows.value=L.state.pointShadow,re.hemisphereLights.value=L.state.hemi,re.directionalShadowMap.value=L.state.directionalShadowMap,re.directionalShadowMatrix.value=L.state.directionalShadowMatrix,re.spotShadowMap.value=L.state.spotShadowMap,re.spotLightMatrix.value=L.state.spotLightMatrix,re.spotLightMap.value=L.state.spotLightMap,re.pointShadowMap.value=L.state.pointShadowMap,re.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=fe,O.uniformsList=null,fe}function us(G){if(G.uniformsList===null){let A=G.currentProgram.getUniforms();G.uniformsList=zs.seqWithValue(A.seq,G.uniforms)}return G.uniformsList}function Gi(G,A){let P=vt.get(G);P.outputColorSpace=A.outputColorSpace,P.batching=A.batching,P.instancing=A.instancing,P.instancingColor=A.instancingColor,P.skinning=A.skinning,P.morphTargets=A.morphTargets,P.morphNormals=A.morphNormals,P.morphColors=A.morphColors,P.morphTargetsCount=A.morphTargetsCount,P.numClippingPlanes=A.numClippingPlanes,P.numIntersection=A.numClipIntersection,P.vertexAlphas=A.vertexAlphas,P.vertexTangents=A.vertexTangents,P.toneMapping=A.toneMapping}function hs(G,A,P,O,L){A.isScene!==!0&&(A=ft),y.resetTextureUnits();let C=A.fog,Z=O.isMeshStandardMaterial?A.environment:null,H=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:rr,X=(O.isMeshStandardMaterial?N:M).get(O.envMap||Z),se=O.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,fe=!!P.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),re=!!P.morphAttributes.position,we=!!P.morphAttributes.normal,Ne=!!P.morphAttributes.color,Fe=Ar;O.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Fe=b.toneMapping);let Ce=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ke=Ce!==void 0?Ce.length:0,Ve=vt.get(O),St=g.state.lights;if(Oe===!0&&(je===!0||G!==F)){let Et=G===F&&O.id===W;Ue.setState(O,G,Et)}let rt=!1;O.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==St.state.version||Ve.outputColorSpace!==H||L.isBatchedMesh&&Ve.batching===!1||!L.isBatchedMesh&&Ve.batching===!0||L.isInstancedMesh&&Ve.instancing===!1||!L.isInstancedMesh&&Ve.instancing===!0||L.isSkinnedMesh&&Ve.skinning===!1||!L.isSkinnedMesh&&Ve.skinning===!0||L.isInstancedMesh&&Ve.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ve.instancingColor===!1&&L.instanceColor!==null||Ve.envMap!==X||O.fog===!0&&Ve.fog!==C||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ue.numPlanes||Ve.numIntersection!==Ue.numIntersection)||Ve.vertexAlphas!==se||Ve.vertexTangents!==fe||Ve.morphTargets!==re||Ve.morphNormals!==we||Ve.morphColors!==Ne||Ve.toneMapping!==Fe||yt.isWebGL2===!0&&Ve.morphTargetsCount!==ke)&&(rt=!0):(rt=!0,Ve.__version=O.version);let st=Ve.currentProgram;rt===!0&&(st=Vi(O,A,L));let nt=!1,ze=!1,Ot=!1,Mt=st.getUniforms(),Je=Ve.uniforms;if(it.useProgram(st.program)&&(nt=!0,ze=!0,Ot=!0),O.id!==W&&(W=O.id,ze=!0),nt||F!==G){Mt.setValue(ge,"projectionMatrix",G.projectionMatrix),Mt.setValue(ge,"viewMatrix",G.matrixWorldInverse);let Et=Mt.map.cameraPosition;Et!==void 0&&Et.setValue(ge,pt.setFromMatrixPosition(G.matrixWorld)),yt.logarithmicDepthBuffer&&Mt.setValue(ge,"logDepthBufFC",2/(Math.log(G.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Mt.setValue(ge,"isOrthographic",G.isOrthographicCamera===!0),F!==G&&(F=G,ze=!0,Ot=!0)}if(L.isSkinnedMesh){Mt.setOptional(ge,L,"bindMatrix"),Mt.setOptional(ge,L,"bindMatrixInverse");let Et=L.skeleton;Et&&(yt.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),Mt.setValue(ge,"boneTexture",Et.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}L.isBatchedMesh&&(Mt.setOptional(ge,L,"batchingTexture"),Mt.setValue(ge,"batchingTexture",L._matricesTexture,y));let hn=P.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0&&yt.isWebGL2===!0)&&Y.update(L,P,st),(ze||Ve.receiveShadow!==L.receiveShadow)&&(Ve.receiveShadow=L.receiveShadow,Mt.setValue(ge,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Je.envMap.value=X,Je.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1),ze&&(Mt.setValue(ge,"toneMappingExposure",b.toneMappingExposure),Ve.needsLights&&aa(Je,Ot),C&&O.fog===!0&&ae.refreshFogUniforms(Je,C),ae.refreshMaterialUniforms(Je,O,Me,le,tt),zs.upload(ge,us(Ve),Je,y)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(zs.upload(ge,us(Ve),Je,y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Mt.setValue(ge,"center",L.center),Mt.setValue(ge,"modelViewMatrix",L.modelViewMatrix),Mt.setValue(ge,"normalMatrix",L.normalMatrix),Mt.setValue(ge,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Et=O.uniformsGroups;for(let En=0,Ri=Et.length;En<Ri;En++)if(yt.isWebGL2){let Yt=Et[En];Lt.update(Yt,st),Lt.bind(Yt,st)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return st}function aa(G,A){G.ambientLightColor.needsUpdate=A,G.lightProbe.needsUpdate=A,G.directionalLights.needsUpdate=A,G.directionalLightShadows.needsUpdate=A,G.pointLights.needsUpdate=A,G.pointLightShadows.needsUpdate=A,G.spotLights.needsUpdate=A,G.spotLightShadows.needsUpdate=A,G.rectAreaLights.needsUpdate=A,G.hemisphereLights.needsUpdate=A}function Ai(G){return G.isMeshLambertMaterial||G.isMeshToonMaterial||G.isMeshPhongMaterial||G.isMeshStandardMaterial||G.isShadowMaterial||G.isShaderMaterial&&G.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(G,A,P){vt.get(G.texture).__webglTexture=A,vt.get(G.depthTexture).__webglTexture=P;let O=vt.get(G);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=P===void 0,O.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(G,A){let P=vt.get(G);P.__webglFramebuffer=A,P.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(G,A=0,P=0){z=G,U=A,f=P;let O=!0,L=null,C=!1,Z=!1;if(G){let X=vt.get(G);X.__useDefaultFramebuffer!==void 0?(it.bindFramebuffer(ge.FRAMEBUFFER,null),O=!1):X.__webglFramebuffer===void 0?y.setupRenderTarget(G):X.__hasExternalTextures&&y.rebindTextures(G,vt.get(G.texture).__webglTexture,vt.get(G.depthTexture).__webglTexture);let se=G.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Z=!0);let fe=vt.get(G).__webglFramebuffer;G.isWebGLCubeRenderTarget?(Array.isArray(fe[A])?L=fe[A][P]:L=fe[A],C=!0):yt.isWebGL2&&G.samples>0&&y.useMultisampledRTT(G)===!1?L=vt.get(G).__webglMultisampledFramebuffer:Array.isArray(fe)?L=fe[P]:L=fe,B.copy(G.viewport),ne.copy(G.scissor),te=G.scissorTest}else B.copy(Re).multiplyScalar(Me).floor(),ne.copy(Be).multiplyScalar(Me).floor(),te=qe;if(it.bindFramebuffer(ge.FRAMEBUFFER,L)&&yt.drawBuffers&&O&&it.drawBuffers(G,L),it.viewport(B),it.scissor(ne),it.setScissorTest(te),C){let X=vt.get(G.texture);ge.framebufferTexture2D(ge.FRAMEBUFFER,ge.COLOR_ATTACHMENT0,ge.TEXTURE_CUBE_MAP_POSITIVE_X+A,X.__webglTexture,P)}else if(Z){let X=vt.get(G.texture),se=A||0;ge.framebufferTextureLayer(ge.FRAMEBUFFER,ge.COLOR_ATTACHMENT0,X.__webglTexture,P||0,se)}W=-1},this.readRenderTargetPixels=function(G,A,P,O,L,C,Z){if(!(G&&G.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let H=vt.get(G).__webglFramebuffer;if(G.isWebGLCubeRenderTarget&&Z!==void 0&&(H=H[Z]),H){it.bindFramebuffer(ge.FRAMEBUFFER,H);try{let X=G.texture,se=X.format,fe=X.type;if(se!==ui&&We.convert(se)!==ge.getParameter(ge.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let re=fe===Ma&&(at.has("EXT_color_buffer_half_float")||yt.isWebGL2&&at.has("EXT_color_buffer_float"));if(fe!==Rr&&We.convert(fe)!==ge.getParameter(ge.IMPLEMENTATION_COLOR_READ_TYPE)&&!(fe===tr&&(yt.isWebGL2||at.has("OES_texture_float")||at.has("WEBGL_color_buffer_float")))&&!re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=G.width-O&&P>=0&&P<=G.height-L&&ge.readPixels(A,P,O,L,We.convert(se),We.convert(fe),C)}finally{let X=z!==null?vt.get(z).__webglFramebuffer:null;it.bindFramebuffer(ge.FRAMEBUFFER,X)}}},this.copyFramebufferToTexture=function(G,A,P=0){let O=Math.pow(2,-P),L=Math.floor(A.image.width*O),C=Math.floor(A.image.height*O);y.setTexture2D(A,0),ge.copyTexSubImage2D(ge.TEXTURE_2D,P,0,0,G.x,G.y,L,C),it.unbindTexture()},this.copyTextureToTexture=function(G,A,P,O=0){let L=A.image.width,C=A.image.height,Z=We.convert(P.format),H=We.convert(P.type);y.setTexture2D(P,0),ge.pixelStorei(ge.UNPACK_FLIP_Y_WEBGL,P.flipY),ge.pixelStorei(ge.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),ge.pixelStorei(ge.UNPACK_ALIGNMENT,P.unpackAlignment),A.isDataTexture?ge.texSubImage2D(ge.TEXTURE_2D,O,G.x,G.y,L,C,Z,H,A.image.data):A.isCompressedTexture?ge.compressedTexSubImage2D(ge.TEXTURE_2D,O,G.x,G.y,A.mipmaps[0].width,A.mipmaps[0].height,Z,A.mipmaps[0].data):ge.texSubImage2D(ge.TEXTURE_2D,O,G.x,G.y,Z,H,A.image),O===0&&P.generateMipmaps&&ge.generateMipmap(ge.TEXTURE_2D),it.unbindTexture()},this.copyTextureToTexture3D=function(G,A,P,O,L=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let C=G.max.x-G.min.x+1,Z=G.max.y-G.min.y+1,H=G.max.z-G.min.z+1,X=We.convert(O.format),se=We.convert(O.type),fe;if(O.isData3DTexture)y.setTexture3D(O,0),fe=ge.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)y.setTexture2DArray(O,0),fe=ge.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ge.pixelStorei(ge.UNPACK_FLIP_Y_WEBGL,O.flipY),ge.pixelStorei(ge.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),ge.pixelStorei(ge.UNPACK_ALIGNMENT,O.unpackAlignment);let re=ge.getParameter(ge.UNPACK_ROW_LENGTH),we=ge.getParameter(ge.UNPACK_IMAGE_HEIGHT),Ne=ge.getParameter(ge.UNPACK_SKIP_PIXELS),Fe=ge.getParameter(ge.UNPACK_SKIP_ROWS),Ce=ge.getParameter(ge.UNPACK_SKIP_IMAGES),ke=P.isCompressedTexture?P.mipmaps[L]:P.image;ge.pixelStorei(ge.UNPACK_ROW_LENGTH,ke.width),ge.pixelStorei(ge.UNPACK_IMAGE_HEIGHT,ke.height),ge.pixelStorei(ge.UNPACK_SKIP_PIXELS,G.min.x),ge.pixelStorei(ge.UNPACK_SKIP_ROWS,G.min.y),ge.pixelStorei(ge.UNPACK_SKIP_IMAGES,G.min.z),P.isDataTexture||P.isData3DTexture?ge.texSubImage3D(fe,L,A.x,A.y,A.z,C,Z,H,X,se,ke.data):P.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ge.compressedTexSubImage3D(fe,L,A.x,A.y,A.z,C,Z,H,X,ke.data)):ge.texSubImage3D(fe,L,A.x,A.y,A.z,C,Z,H,X,se,ke),ge.pixelStorei(ge.UNPACK_ROW_LENGTH,re),ge.pixelStorei(ge.UNPACK_IMAGE_HEIGHT,we),ge.pixelStorei(ge.UNPACK_SKIP_PIXELS,Ne),ge.pixelStorei(ge.UNPACK_SKIP_ROWS,Fe),ge.pixelStorei(ge.UNPACK_SKIP_IMAGES,Ce),L===0&&O.generateMipmaps&&ge.generateMipmap(fe),it.unbindTexture()},this.initTexture=function(G){G.isCubeTexture?y.setTextureCube(G,0):G.isData3DTexture?y.setTexture3D(G,0):G.isDataArrayTexture||G.isCompressedArrayTexture?y.setTexture2DArray(G,0):y.setTexture2D(G,0),it.unbindTexture()},this.resetState=function(){U=0,f=0,z=null,it.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gu?"display-p3":"srgb",t.unpackColorSpace=en.workingColorSpace===fl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===on?Kr:xd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kr?on:rr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},$c=class extends Qr{};$c.prototype.isWebGL1Renderer=!0;var Yo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zs=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Wf=new ce,Xf=new Zt,qf=new Zt,jx=new ce,Yf=new Tt,To=new ce,Mc=new ar,jf=new Tt,wc=new or,jo=class extends $n{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new Tt,this.bindMatrixInverse=new Tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pr),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingBox.expandByPoint(To)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ar),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingSphere.expandByPoint(To)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mc.copy(this.boundingSphere),Mc.applyMatrix4(r),e.ray.intersectsSphere(Mc)!==!1&&(jf.copy(r).invert(),wc.copy(e.ray).applyMatrix4(jf),!(this.boundingBox!==null&&wc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Zt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Xf.fromBufferAttribute(r.attributes.skinIndex,e),qf.fromBufferAttribute(r.attributes.skinWeight,e),Wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=qf.getComponent(s);if(a!==0){let l=Xf.getComponent(s);Yf.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(jx.copy(Wf).applyMatrix4(Yf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},$s=class extends dn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Jc=class extends Hn{constructor(e=null,t=1,n=1,r,s,a,l,u,h=kn,p=kn,m,v){super(null,a,l,u,h,p,r,s,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zf=new Tt,Zx=new Tt,Zo=class i{constructor(e=[],t=[]){this.uuid=Ur(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let l=e[s]?e[s].matrixWorld:Zx;Zf.multiplyMatrices(l,t[s]),Zf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Jc(t,e,e,ui,tr);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new $s),this.bones.push(a),this.boneInverses.push(new Tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let a=t[r];e.bones.push(a.uuid);let l=n[r];e.boneInverses.push(l.toArray())}return e}};var Ca=class extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$f=new ce,Jf=new ce,Kf=new Tt,Ec=new or,Mo=new ar,$o=class extends dn{constructor(e=new Xn,t=new Ca){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)$f.fromBufferAttribute(t,r-1),Jf.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=$f.distanceTo(Jf);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Mo.radius+=s,e.ray.intersectsSphere(Mo)===!1)return;Kf.copy(r).invert(),Ec.copy(e.ray).applyMatrix4(Kf);let l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=new ce,p=new ce,m=new ce,v=new ce,_=this.isLineSegments?2:1,R=n.index,g=n.attributes.position;if(R!==null){let c=Math.max(0,a.start),T=Math.min(R.count,a.start+a.count);for(let b=c,S=T-1;b<S;b+=_){let U=R.getX(b),f=R.getX(b+1);if(h.fromBufferAttribute(g,U),p.fromBufferAttribute(g,f),Ec.distanceSqToSegment(h,p,v,m)>u)continue;v.applyMatrix4(this.matrixWorld);let W=e.ray.origin.distanceTo(v);W<e.near||W>e.far||t.push({distance:W,point:m.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let c=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let b=c,S=T-1;b<S;b+=_){if(h.fromBufferAttribute(g,b),p.fromBufferAttribute(g,b+1),Ec.distanceSqToSegment(h,p,v,m)>u)continue;v.applyMatrix4(this.matrixWorld);let f=e.ray.origin.distanceTo(v);f<e.near||f>e.far||t.push({distance:f,point:m.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}};var Pa=class extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qf=new Tt,Kc=new or,wo=new ar,Eo=new ce,La=class extends dn{constructor(e=new Xn,t=new Pa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;Qf.copy(r).invert(),Kc.copy(e.ray).applyMatrix4(Qf);let l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,m=n.attributes.position;if(h!==null){let v=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let R=v,E=_;R<E;R++){let g=h.getX(R);Eo.fromBufferAttribute(m,g),ed(Eo,g,u,r,e,t,this)}}else{let v=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let R=v,E=_;R<E;R++)Eo.fromBufferAttribute(m,R),ed(Eo,R,u,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}};function ed(i,e,t,n,r,s,a){let l=Kc.distanceSqToPoint(i);if(l<t){let u=new ce;Kc.closestPointToPoint(i,u),u.applyMatrix4(n);let h=r.ray.origin.distanceTo(u);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,object:a})}}var Jo=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,a;t?a=t:a=e*n[s-1];let l=0,u=s-1,h;for(;l<=u;)if(r=Math.floor(l+(u-l)/2),h=n[r]-a,h<0)l=r+1;else if(h>0)u=r-1;else{u=r;break}if(r=u,n[r]===a)return r/(s-1);let p=n[r],v=n[r+1]-p,_=(a-p)/v;return(r+_)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),l=this.getPoint(s),u=t||(a.isVector2?new At:new ce);return u.copy(l).sub(a).normalize(),u}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new ce,r=[],s=[],a=[],l=new ce,u=new Tt;for(let _=0;_<=e;_++){let R=_/e;r[_]=this.getTangentAt(R,new ce)}s[0]=new ce,a[0]=new ce;let h=Number.MAX_VALUE,p=Math.abs(r[0].x),m=Math.abs(r[0].y),v=Math.abs(r[0].z);p<=h&&(h=p,n.set(1,0,0)),m<=h&&(h=m,n.set(0,1,0)),v<=h&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],l),a[0].crossVectors(r[0],s[0]);for(let _=1;_<=e;_++){if(s[_]=s[_-1].clone(),a[_]=a[_-1].clone(),l.crossVectors(r[_-1],r[_]),l.length()>Number.EPSILON){l.normalize();let R=Math.acos(Pn(r[_-1].dot(r[_]),-1,1));s[_].applyMatrix4(u.makeRotationAxis(l,R))}a[_].crossVectors(r[_],s[_])}if(t===!0){let _=Math.acos(Pn(s[0].dot(s[e]),-1,1));_/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(_=-_);for(let R=1;R<=e;R++)s[R].applyMatrix4(u.makeRotationAxis(r[R],_*R)),a[R].crossVectors(r[R],s[R])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};var $x={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Ld(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let l,u,h,p,m,v,_;if(n&&(s=t1(i,e,s,t)),i.length>80*t){l=h=i[0],u=p=i[1];for(let R=t;R<r;R+=t)m=i[R],v=i[R+1],m<l&&(l=m),v<u&&(u=v),m>h&&(h=m),v>p&&(p=v);_=Math.max(h-l,p-u),_=_!==0?32767/_:0}return Da(s,a,t,l,u,_,0),a}};function Ld(i,e,t,n,r){let s,a;if(r===f1(i,e,t,n)>0)for(s=e;s<t;s+=n)a=td(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=td(s,i[s],i[s+1],a);return a&&pl(a,a.next)&&(Oa(a),a=a.next),a}function es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(pl(t,t.next)||mn(t.prev,t,t.next)===0)){if(Oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Da(i,e,t,n,r,s,a){if(!i)return;!a&&s&&a1(i,n,r,s);let l=i,u,h;for(;i.prev!==i.next;){if(u=i.prev,h=i.next,s?Kx(i,n,r,s):Jx(i)){e.push(u.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),Oa(i),i=h.next,l=h.next;continue}if(i=h,i===l){a?a===1?(i=Qx(es(i),e,t),Da(i,e,t,n,r,s,2)):a===2&&e1(i,e,t,n,r,s):Da(es(i),e,t,n,r,s,1);break}}}function Jx(i){let e=i.prev,t=i,n=i.next;if(mn(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,l=e.y,u=t.y,h=n.y,p=r<s?r<a?r:a:s<a?s:a,m=l<u?l<h?l:h:u<h?u:h,v=r>s?r>a?r:a:s>a?s:a,_=l>u?l>h?l:h:u>h?u:h,R=n.next;for(;R!==e;){if(R.x>=p&&R.x<=v&&R.y>=m&&R.y<=_&&Us(r,l,s,u,a,h,R.x,R.y)&&mn(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function Kx(i,e,t,n){let r=i.prev,s=i,a=i.next;if(mn(r,s,a)>=0)return!1;let l=r.x,u=s.x,h=a.x,p=r.y,m=s.y,v=a.y,_=l<u?l<h?l:h:u<h?u:h,R=p<m?p<v?p:v:m<v?m:v,E=l>u?l>h?l:h:u>h?u:h,g=p>m?p>v?p:v:m>v?m:v,c=Qc(_,R,e,t,n),T=Qc(E,g,e,t,n),b=i.prevZ,S=i.nextZ;for(;b&&b.z>=c&&S&&S.z<=T;){if(b.x>=_&&b.x<=E&&b.y>=R&&b.y<=g&&b!==r&&b!==a&&Us(l,p,u,m,h,v,b.x,b.y)&&mn(b.prev,b,b.next)>=0||(b=b.prevZ,S.x>=_&&S.x<=E&&S.y>=R&&S.y<=g&&S!==r&&S!==a&&Us(l,p,u,m,h,v,S.x,S.y)&&mn(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;b&&b.z>=c;){if(b.x>=_&&b.x<=E&&b.y>=R&&b.y<=g&&b!==r&&b!==a&&Us(l,p,u,m,h,v,b.x,b.y)&&mn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;S&&S.z<=T;){if(S.x>=_&&S.x<=E&&S.y>=R&&S.y<=g&&S!==r&&S!==a&&Us(l,p,u,m,h,v,S.x,S.y)&&mn(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Qx(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!pl(r,s)&&Dd(r,n,n.next,s)&&Ia(r,s)&&Ia(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Oa(n),Oa(n.next),n=i=s),n=n.next}while(n!==i);return es(n)}function e1(i,e,t,n,r,s){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&c1(a,l)){let u=Id(a,l);a=es(a,a.next),u=es(u,u.next),Da(a,e,t,n,r,s,0),Da(u,e,t,n,r,s,0);return}l=l.next}a=a.next}while(a!==i)}function t1(i,e,t,n){let r=[],s,a,l,u,h;for(s=0,a=e.length;s<a;s++)l=e[s]*n,u=s<a-1?e[s+1]*n:i.length,h=Ld(i,l,u,n,!1),h===h.next&&(h.steiner=!0),r.push(l1(h));for(r.sort(n1),s=0;s<r.length;s++)t=i1(r[s],t);return t}function n1(i,e){return i.x-e.x}function i1(i,e){let t=r1(i,e);if(!t)return e;let n=Id(t,i);return es(n,n.next),es(t,t.next)}function r1(i,e){let t=e,n=-1/0,r,s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let v=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=s&&v>n&&(n=v,r=t.x<t.next.x?t:t.next,v===s))return r}t=t.next}while(t!==e);if(!r)return null;let l=r,u=r.x,h=r.y,p=1/0,m;t=r;do s>=t.x&&t.x>=u&&s!==t.x&&Us(a<h?s:n,a,u,h,a<h?n:s,a,t.x,t.y)&&(m=Math.abs(a-t.y)/(s-t.x),Ia(t,i)&&(m<p||m===p&&(t.x>r.x||t.x===r.x&&s1(r,t)))&&(r=t,p=m)),t=t.next;while(t!==l);return r}function s1(i,e){return mn(i.prev,i,e.prev)<0&&mn(e.next,i,i.next)<0}function a1(i,e,t,n){let r=i;do r.z===0&&(r.z=Qc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,o1(r)}function o1(i){let e,t,n,r,s,a,l,u,h=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,l=0,e=0;e<h&&(l++,n=n.nextZ,!!n);e++);for(u=h;l>0||u>0&&n;)l!==0&&(u===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,l--):(r=n,n=n.nextZ,u--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,h*=2}while(a>1);return i}function Qc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function l1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Us(i,e,t,n,r,s,a,l){return(r-a)*(e-l)>=(i-a)*(s-l)&&(i-a)*(n-l)>=(t-a)*(e-l)&&(t-a)*(s-l)>=(r-a)*(n-l)}function c1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!u1(i,e)&&(Ia(i,e)&&Ia(e,i)&&h1(i,e)&&(mn(i.prev,i,e.prev)||mn(i,e.prev,e))||pl(i,e)&&mn(i.prev,i,i.next)>0&&mn(e.prev,e,e.next)>0)}function mn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function pl(i,e){return i.x===e.x&&i.y===e.y}function Dd(i,e,t,n){let r=Ro(mn(i,e,t)),s=Ro(mn(i,e,n)),a=Ro(mn(t,n,i)),l=Ro(mn(t,n,e));return!!(r!==s&&a!==l||r===0&&Ao(i,t,e)||s===0&&Ao(i,n,e)||a===0&&Ao(t,i,n)||l===0&&Ao(t,e,n))}function Ao(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ro(i){return i>0?1:i<0?-1:0}function u1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ia(i,e){return mn(i.prev,i,i.next)<0?mn(i,e,i.next)>=0&&mn(i,i.prev,e)>=0:mn(i,e,i.prev)<0||mn(i,i.next,e)<0}function h1(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Id(i,e){let t=new eu(i.i,i.x,i.y),n=new eu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function td(i,e,t,n){let r=new eu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function f1(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}var Ko=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];nd(e),id(n,e);let a=e.length;t.forEach(nd);for(let u=0;u<t.length;u++)r.push(a),a+=t[u].length,id(n,t[u]);let l=$x.triangulate(n,r);for(let u=0;u<l.length;u+=3)s.push(l.slice(u,u+3));return s}};function nd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function id(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Qo=class i extends Xn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let u=Math.min(a+l,Math.PI),h=0,p=[],m=new ce,v=new ce,_=[],R=[],E=[],g=[];for(let c=0;c<=n;c++){let T=[],b=c/n,S=0;c===0&&a===0?S=.5/t:c===n&&u===Math.PI&&(S=-.5/t);for(let U=0;U<=t;U++){let f=U/t;m.x=-e*Math.cos(r+f*s)*Math.sin(a+b*l),m.y=e*Math.cos(a+b*l),m.z=e*Math.sin(r+f*s)*Math.sin(a+b*l),R.push(m.x,m.y,m.z),v.copy(m).normalize(),E.push(v.x,v.y,v.z),g.push(f+S,1-b),T.push(h++)}p.push(T)}for(let c=0;c<n;c++)for(let T=0;T<t;T++){let b=p[c][T+1],S=p[c][T],U=p[c+1][T],f=p[c+1][T+1];(c!==0||a>0)&&_.push(b,S,f),(c!==n-1||u<Math.PI)&&_.push(S,U,f)}this.setIndex(_),this.setAttribute("position",new vn(R,3)),this.setAttribute("normal",new vn(E,3)),this.setAttribute("uv",new vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var tu=class extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Na=class extends tu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Js=class extends wi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ks=class extends wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Co(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function d1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function p1(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function rd(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){let l=t[s]*e;for(let u=0;u!==e;++u)r[a++]=i[l+u]}return r}function Od(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}var Qs=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let l=t[1];e<l&&(n=2,s=l);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let l=n+a>>>1;e<t[l]?a=l:n=l+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nu=class extends Qs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,l=r[s],u=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case ef:s=e,l=2*t-n;break;case tf:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case ef:a=e,u=2*n-t;break;case tf:a=1,u=n+r[1]-r[0];break;default:a=e-1,u=t}let h=(n-t)*.5,p=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-n),this._offsetPrev=s*p,this._offsetNext=a*p}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,p=this._offsetPrev,m=this._offsetNext,v=this._weightPrev,_=this._weightNext,R=(n-t)/(r-t),E=R*R,g=E*R,c=-v*g+2*v*E-v*R,T=(1+v)*g+(-1.5-2*v)*E+(-.5+v)*R+1,b=(-1-_)*g+(1.5+_)*E+.5*R,S=_*g-_*E;for(let U=0;U!==l;++U)s[U]=c*a[p+U]+T*a[h+U]+b*a[u+U]+S*a[m+U];return s}},iu=class extends Qs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,p=(n-t)/(r-t),m=1-p;for(let v=0;v!==l;++v)s[v]=a[h+v]*m+a[u+v]*p;return s}},ru=class extends Qs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},di=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Co(t,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Do:t=this.InterpolantFactoryMethodDiscrete;break;case Io:t=this.InterpolantFactoryMethodLinear;break;case tc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return tc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let l=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){let u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,a),e=!1;break}a=u}if(r!==void 0&&d1(r))for(let l=0,u=r.length;l!==u;++l){let h=r[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===tc,s=e.length-1,a=1;for(let l=1;l<s;++l){let u=!1,h=e[l],p=e[l+1];if(h!==p&&(l!==1||h!==e[0]))if(r)u=!0;else{let m=l*n,v=m-n,_=m+n;for(let R=0;R!==n;++R){let E=t[m+R];if(E!==t[v+R]||E!==t[_+R]){u=!0;break}}}if(u){if(l!==a){e[a]=e[l];let m=l*n,v=a*n;for(let _=0;_!==n;++_)t[v+_]=t[m+_]}++a}}if(s>0){e[a]=e[s];for(let l=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[l+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Io;var Lr=class extends di{};Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=Do;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends di{};el.prototype.ValueTypeName="color";var Dr=class extends di{};Dr.prototype.ValueTypeName="number";var su=class extends Qs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=(n-t)/(r-t),h=e*l;for(let p=h+l;h!==p;h+=4)wn.slerpFlat(s,0,a,h-l,a,h,u);return s}},zi=class extends di{InterpolantFactoryMethodLinear(e){return new su(this.times,this.values,this.getValueSize(),e)}};zi.prototype.ValueTypeName="quaternion";zi.prototype.DefaultInterpolation=Io;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ir=class extends di{};Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=Do;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends di{};Or.prototype.ValueTypeName="vector";var tl=class{constructor(e,t=-1,n,r=Lg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ur(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(g1(n[a]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(di.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,a=[];for(let l=0;l<s;l++){let u=[],h=[];u.push((l+s-1)%s,l,(l+1)%s),h.push(0,1,0);let p=p1(u);u=rd(u,1,p),h=rd(h,1,p),!r&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new Dr(".morphTargetInfluences["+t[l].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){let h=e[l],p=h.name.match(s);if(p&&p.length>1){let m=p[1],v=r[m];v||(r[m]=v=[]),v.push(h)}}let a=[];for(let l in r)a.push(this.CreateFromMorphTargetSequence(l,r[l],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(m,v,_,R,E){if(_.length!==0){let g=[],c=[];Od(_,g,c,R),g.length!==0&&E.push(new m(v,g,c))}},r=[],s=e.name||"default",a=e.fps||30,l=e.blendMode,u=e.length||-1,h=e.hierarchy||[];for(let m=0;m<h.length;m++){let v=h[m].keys;if(!(!v||v.length===0))if(v[0].morphTargets){let _={},R;for(R=0;R<v.length;R++)if(v[R].morphTargets)for(let E=0;E<v[R].morphTargets.length;E++)_[v[R].morphTargets[E]]=-1;for(let E in _){let g=[],c=[];for(let T=0;T!==v[R].morphTargets.length;++T){let b=v[R];g.push(b.time),c.push(b.morphTarget===E?1:0)}r.push(new Dr(".morphTargetInfluence["+E+"]",g,c))}u=_.length*a}else{let _=".bones["+t[m].name+"]";n(Or,_+".position",v,"pos",r),n(zi,_+".quaternion",v,"rot",r),n(Or,_+".scale",v,"scl",r)}}return r.length===0?null:new this(s,u,r,l)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function m1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dr;case"vector":case"vector2":case"vector3":case"vector4":return Or;case"color":return el;case"quaternion":return zi;case"bool":case"boolean":return Lr;case"string":return Ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function g1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=m1(i.type);if(i.times===void 0){let t=[],n=[];Od(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var nl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ua=class{constructor(e,t,n){let r=this,s=!1,a=0,l=0,u,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,s===!1&&r.onStart!==void 0&&r.onStart(p,a,l),s=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){let m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,v=h.length;m<v;m+=2){let _=h[m],R=h[m+1];if(_.global&&(_.lastIndex=0),_.test(p))return R}return null}}},_1=new Ua,ki=class{constructor(e){this.manager=e!==void 0?e:_1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki={},au=class extends Error{constructor(e,t){super(e),this.response=t}},il=class extends ki{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=nl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:n,onError:r});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let p=Ki[e],m=h.body.getReader(),v=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),_=v?parseInt(v):0,R=_!==0,E=0,g=new ReadableStream({start(c){T();function T(){m.read().then(({done:b,value:S})=>{if(b)c.close();else{E+=S.byteLength;let U=new ProgressEvent("progress",{lengthComputable:R,loaded:E,total:_});for(let f=0,z=p.length;f<z;f++){let W=p[f];W.onProgress&&W.onProgress(U)}c.enqueue(S),T()}})}}});return new Response(g)}else throw new au(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return h.json();default:if(l===void 0)return h.text();{let m=/charset="?([^;"\s]*)"?/i.exec(l),v=m&&m[1]?m[1].toLowerCase():void 0,_=new TextDecoder(v);return h.arrayBuffer().then(R=>_.decode(R))}}}).then(h=>{nl.add(e,h);let p=Ki[e];delete Ki[e];for(let m=0,v=p.length;m<v;m++){let _=p[m];_.onLoad&&_.onLoad(h)}}).catch(h=>{let p=Ki[e];if(p===void 0)throw this.manager.itemError(e),h;delete Ki[e];for(let m=0,v=p.length;m<v;m++){let _=p[m];_.onError&&_.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ou=class extends ki{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=nl.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let l=wa("img");function u(){p(),nl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(m){p(),r&&r(m),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}};var Nr=class extends ki{constructor(e){super(e)}load(e,t,n,r){let s=new Hn,a=new ou(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ts=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},rl=class extends ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ac=new Tt,sd=new ce,ad=new ce,Fa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(sd),ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ad),t.updateMatrixWorld(),Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lu=class extends Fa{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ws*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ea=class extends ts{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},od=new Tt,_a=new ce,Rc=new ce,cu=class extends Fa{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new ce(1,0,0),new ce(-1,0,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,1,0),new ce(0,-1,0)],this._cubeUps=[new ce(0,1,0),new ce(0,1,0),new ce(0,1,0),new ce(0,1,0),new ce(0,0,1),new ce(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),n.position.copy(_a),Rc.copy(n.position),Rc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rc),n.updateMatrixWorld(),r.makeTranslation(-_a.x,-_a.y,-_a.z),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od)}},ns=class extends ts{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new cu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},uu=class extends Fa{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new uu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},sl=class extends ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var al=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ol=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ld(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ld();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ld(){return(typeof performance>"u"?Date:performance).now()}var yu="\\[\\]\\.:\\/",v1=new RegExp("["+yu+"]","g"),xu="[^"+yu+"]",y1="[^"+yu.replace("\\.","")+"]",x1=/((?:WC+[\/:])*)/.source.replace("WC",xu),b1=/(WCOD+)?/.source.replace("WCOD",y1),S1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),T1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),M1=new RegExp("^"+x1+b1+S1+T1+"$"),w1=["material","materials","bones","map"],hu=class{constructor(e,t,n){let r=n||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v1,"")}static parseTrackName(e){let t=M1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);w1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let l=s[a];if(l.name===t||l.uuid===t)return l;let u=n(l.children);if(u)return u}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[r];if(a===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qt.Composite=hu;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pb=new Float32Array(1);var ll=class{constructor(e,t,n=0,r=1/0){this.ray=new or(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return fu(e,this,n,t),n.sort(cd),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)fu(e[r],this,n,t);return n.sort(cd),n}};function cd(i,e){return i.distance-e.distance}function fu(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let r=i.children;for(let s=0,a=r.length;s<a;s++)fu(r[s],e,t,!0)}}var Ba=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);var Ud={type:"change"},bu={type:"start"},Fd={type:"end"},ml=new or,Bd=new Mi,E1=Math.cos(70*Nn.DEG2RAD),gl=class extends Bi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ce,this.cursor=new ce,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(Y){Y.addEventListener("keydown",j),this._domElementKeyEvents=Y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",j),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ud),n.update(),s=r.NONE},this.update=function(){let Y=new ce,Se=new wn().setFromUnitVectors(e.up,new ce(0,1,0)),Ge=Se.clone().invert(),We=new ce,$e=new wn,Lt=new ce,dt=2*Math.PI;return function(Xe=null){let oe=n.object.position;Y.copy(oe).sub(n.target),Y.applyQuaternion(Se),l.setFromVector3(Y),n.autoRotate&&s===r.NONE&&ne(F(Xe)),n.enableDamping?(l.theta+=u.theta*n.dampingFactor,l.phi+=u.phi*n.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);let He=n.minAzimuthAngle,Ze=n.maxAzimuthAngle;isFinite(He)&&isFinite(Ze)&&(He<-Math.PI?He+=dt:He>Math.PI&&(He-=dt),Ze<-Math.PI?Ze+=dt:Ze>Math.PI&&(Ze-=dt),He<=Ze?l.theta=Math.max(He,Math.min(Ze,l.theta)):l.theta=l.theta>(He+Ze)/2?Math.max(He,l.theta):Math.min(Ze,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&f||n.object.isOrthographicCamera?l.radius=Ee(l.radius):l.radius=Ee(l.radius*h),Y.setFromSpherical(l),Y.applyQuaternion(Ge),oe.copy(n.target).add(Y),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),p.set(0,0,0));let ut=!1;if(n.zoomToCursor&&f){let Qe=null;if(n.object.isPerspectiveCamera){let Nt=Y.length();Qe=Ee(Nt*h);let Xt=Nt-Qe;n.object.position.addScaledVector(S,Xt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Nt=new ce(U.x,U.y,0);Nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),ut=!0;let Xt=new ce(U.x,U.y,0);Xt.unproject(n.object),n.object.position.sub(Xt).add(Nt),n.object.updateMatrixWorld(),Qe=Y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Qe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Qe).add(n.object.position):(ml.origin.copy(n.object.position),ml.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ml.direction))<E1?e.lookAt(n.target):(Bd.setFromNormalAndCoplanarPoint(n.object.up,n.target),ml.intersectPlane(Bd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),ut=!0);return h=1,f=!1,ut||We.distanceToSquared(n.object.position)>a||8*(1-$e.dot(n.object.quaternion))>a||Lt.distanceToSquared(n.target)>0?(n.dispatchEvent(Ud),We.copy(n.object.position),$e.copy(n.object.quaternion),Lt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Pe),n.domElement.removeEventListener("pointerdown",vt),n.domElement.removeEventListener("pointercancel",M),n.domElement.removeEventListener("wheel",J),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",M),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",j),n._domElementKeyEvents=null)};let n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=r.NONE,a=1e-6,l=new Ba,u=new Ba,h=1,p=new ce,m=new At,v=new At,_=new At,R=new At,E=new At,g=new At,c=new At,T=new At,b=new At,S=new ce,U=new At,f=!1,z=[],W={};function F(Y){return Y!==null?2*Math.PI/60*n.autoRotateSpeed*Y:2*Math.PI/60/60*n.autoRotateSpeed}function B(Y){let Se=Math.abs(Y)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Se)}function ne(Y){u.theta-=Y}function te(Y){u.phi-=Y}let _e=function(){let Y=new ce;return function(Ge,We){Y.setFromMatrixColumn(We,0),Y.multiplyScalar(-Ge),p.add(Y)}}(),K=function(){let Y=new ce;return function(Ge,We){n.screenSpacePanning===!0?Y.setFromMatrixColumn(We,1):(Y.setFromMatrixColumn(We,0),Y.crossVectors(n.object.up,Y)),Y.multiplyScalar(Ge),p.add(Y)}}(),ee=function(){let Y=new ce;return function(Ge,We){let $e=n.domElement;if(n.object.isPerspectiveCamera){let Lt=n.object.position;Y.copy(Lt).sub(n.target);let dt=Y.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),_e(2*Ge*dt/$e.clientHeight,n.object.matrix),K(2*We*dt/$e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(_e(Ge*(n.object.right-n.object.left)/n.object.zoom/$e.clientWidth,n.object.matrix),K(We*(n.object.top-n.object.bottom)/n.object.zoom/$e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function le(Y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=Y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Me(Y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=Y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function me(Y,Se){if(!n.zoomToCursor)return;f=!0;let Ge=n.domElement.getBoundingClientRect(),We=Y-Ge.left,$e=Se-Ge.top,Lt=Ge.width,dt=Ge.height;U.x=We/Lt*2-1,U.y=-($e/dt)*2+1,S.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ee(Y){return Math.max(n.minDistance,Math.min(n.maxDistance,Y))}function Re(Y){m.set(Y.clientX,Y.clientY)}function Be(Y){me(Y.clientX,Y.clientX),c.set(Y.clientX,Y.clientY)}function qe(Y){R.set(Y.clientX,Y.clientY)}function be(Y){v.set(Y.clientX,Y.clientY),_.subVectors(v,m).multiplyScalar(n.rotateSpeed);let Se=n.domElement;ne(2*Math.PI*_.x/Se.clientHeight),te(2*Math.PI*_.y/Se.clientHeight),m.copy(v),n.update()}function Oe(Y){T.set(Y.clientX,Y.clientY),b.subVectors(T,c),b.y>0?le(B(b.y)):b.y<0&&Me(B(b.y)),c.copy(T),n.update()}function je(Y){E.set(Y.clientX,Y.clientY),g.subVectors(E,R).multiplyScalar(n.panSpeed),ee(g.x,g.y),R.copy(E),n.update()}function tt(Y){me(Y.clientX,Y.clientY),Y.deltaY<0?Me(B(Y.deltaY)):Y.deltaY>0&&le(B(Y.deltaY)),n.update()}function ht(Y){let Se=!1;switch(Y.code){case n.keys.UP:Y.ctrlKey||Y.metaKey||Y.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ee(0,n.keyPanSpeed),Se=!0;break;case n.keys.BOTTOM:Y.ctrlKey||Y.metaKey||Y.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ee(0,-n.keyPanSpeed),Se=!0;break;case n.keys.LEFT:Y.ctrlKey||Y.metaKey||Y.shiftKey?ne(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ee(n.keyPanSpeed,0),Se=!0;break;case n.keys.RIGHT:Y.ctrlKey||Y.metaKey||Y.shiftKey?ne(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ee(-n.keyPanSpeed,0),Se=!0;break}Se&&(Y.preventDefault(),n.update())}function gt(Y){if(z.length===1)m.set(Y.pageX,Y.pageY);else{let Se=ot(Y),Ge=.5*(Y.pageX+Se.x),We=.5*(Y.pageY+Se.y);m.set(Ge,We)}}function pt(Y){if(z.length===1)R.set(Y.pageX,Y.pageY);else{let Se=ot(Y),Ge=.5*(Y.pageX+Se.x),We=.5*(Y.pageY+Se.y);R.set(Ge,We)}}function ft(Y){let Se=ot(Y),Ge=Y.pageX-Se.x,We=Y.pageY-Se.y,$e=Math.sqrt(Ge*Ge+We*We);c.set(0,$e)}function _t(Y){n.enableZoom&&ft(Y),n.enablePan&&pt(Y)}function ge(Y){n.enableZoom&&ft(Y),n.enableRotate&&gt(Y)}function bt(Y){if(z.length==1)v.set(Y.pageX,Y.pageY);else{let Ge=ot(Y),We=.5*(Y.pageX+Ge.x),$e=.5*(Y.pageY+Ge.y);v.set(We,$e)}_.subVectors(v,m).multiplyScalar(n.rotateSpeed);let Se=n.domElement;ne(2*Math.PI*_.x/Se.clientHeight),te(2*Math.PI*_.y/Se.clientHeight),m.copy(v)}function at(Y){if(z.length===1)E.set(Y.pageX,Y.pageY);else{let Se=ot(Y),Ge=.5*(Y.pageX+Se.x),We=.5*(Y.pageY+Se.y);E.set(Ge,We)}g.subVectors(E,R).multiplyScalar(n.panSpeed),ee(g.x,g.y),R.copy(E)}function yt(Y){let Se=ot(Y),Ge=Y.pageX-Se.x,We=Y.pageY-Se.y,$e=Math.sqrt(Ge*Ge+We*We);T.set(0,$e),b.set(0,Math.pow(T.y/c.y,n.zoomSpeed)),le(b.y),c.copy(T);let Lt=(Y.pageX+Se.x)*.5,dt=(Y.pageY+Se.y)*.5;me(Lt,dt)}function it(Y){n.enableZoom&&yt(Y),n.enablePan&&at(Y)}function It(Y){n.enableZoom&&yt(Y),n.enableRotate&&bt(Y)}function vt(Y){n.enabled!==!1&&(z.length===0&&(n.domElement.setPointerCapture(Y.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",M)),Ie(Y),Y.pointerType==="touch"?pe(Y):N(Y))}function y(Y){n.enabled!==!1&&(Y.pointerType==="touch"?ae(Y):V(Y))}function M(Y){Ue(Y),z.length===0&&(n.domElement.releasePointerCapture(Y.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",M)),n.dispatchEvent(Fd),s=r.NONE}function N(Y){let Se;switch(Y.button){case 0:Se=n.mouseButtons.LEFT;break;case 1:Se=n.mouseButtons.MIDDLE;break;case 2:Se=n.mouseButtons.RIGHT;break;default:Se=-1}switch(Se){case rs.DOLLY:if(n.enableZoom===!1)return;Be(Y),s=r.DOLLY;break;case rs.ROTATE:if(Y.ctrlKey||Y.metaKey||Y.shiftKey){if(n.enablePan===!1)return;qe(Y),s=r.PAN}else{if(n.enableRotate===!1)return;Re(Y),s=r.ROTATE}break;case rs.PAN:if(Y.ctrlKey||Y.metaKey||Y.shiftKey){if(n.enableRotate===!1)return;Re(Y),s=r.ROTATE}else{if(n.enablePan===!1)return;qe(Y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(bu)}function V(Y){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;be(Y);break;case r.DOLLY:if(n.enableZoom===!1)return;Oe(Y);break;case r.PAN:if(n.enablePan===!1)return;je(Y);break}}function J(Y){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(Y.preventDefault(),n.dispatchEvent(bu),tt(Y),n.dispatchEvent(Fd))}function j(Y){n.enabled===!1||n.enablePan===!1||ht(Y)}function pe(Y){switch(ye(Y),z.length){case 1:switch(n.touches.ONE){case ss.ROTATE:if(n.enableRotate===!1)return;gt(Y),s=r.TOUCH_ROTATE;break;case ss.PAN:if(n.enablePan===!1)return;pt(Y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ss.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(Y),s=r.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(Y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(bu)}function ae(Y){switch(ye(Y),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;bt(Y),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;at(Y),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(Y),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;It(Y),n.update();break;default:s=r.NONE}}function Pe(Y){n.enabled!==!1&&Y.preventDefault()}function Ie(Y){z.push(Y.pointerId)}function Ue(Y){delete W[Y.pointerId];for(let Se=0;Se<z.length;Se++)if(z[Se]==Y.pointerId){z.splice(Se,1);return}}function ye(Y){let Se=W[Y.pointerId];Se===void 0&&(Se=new At,W[Y.pointerId]=Se),Se.set(Y.pageX,Y.pageY)}function ot(Y){let Se=Y.pointerId===z[0]?z[1]:z[0];return W[Se]}n.domElement.addEventListener("contextmenu",Pe),n.domElement.addEventListener("pointerdown",vt),n.domElement.addEventListener("pointercancel",M),n.domElement.addEventListener("wheel",J,{passive:!1}),this.update()}};var zd=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))},A1=function(i){return new Worker(i)};try{URL.revokeObjectURL(zd(""))}catch{zd=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},A1=function(e){return new Worker(e,{type:"module"})}}var pi=Uint8Array,Fr=Uint16Array,Mu=Uint32Array,kd=new pi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Hd=new pi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),R1=new pi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Vd=function(i,e){for(var t=new Fr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Mu(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},Gd=Vd(kd,2),Wd=Gd[0],C1=Gd[1];Wd[28]=258,C1[258]=28;var Xd=Vd(Hd,0),P1=Xd[0],_b=Xd[1],wu=new Fr(32768);for(Jt=0;Jt<32768;++Jt)cr=(Jt&43690)>>>1|(Jt&21845)<<1,cr=(cr&52428)>>>2|(cr&13107)<<2,cr=(cr&61680)>>>4|(cr&3855)<<4,wu[Jt]=((cr&65280)>>>8|(cr&255)<<8)>>>1;var cr,Jt,za=function(i,e,t){for(var n=i.length,r=0,s=new Fr(e);r<n;++r)++s[i[r]-1];var a=new Fr(e);for(r=0;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var l;if(t){l=new Fr(1<<e);var u=15-e;for(r=0;r<n;++r)if(i[r])for(var h=r<<4|i[r],p=e-i[r],m=a[i[r]-1]++<<p,v=m|(1<<p)-1;m<=v;++m)l[wu[m]>>>u]=h}else for(l=new Fr(n),r=0;r<n;++r)i[r]&&(l[r]=wu[a[i[r]-1]++]>>>15-i[r]);return l},ka=new pi(288);for(Jt=0;Jt<144;++Jt)ka[Jt]=8;var Jt;for(Jt=144;Jt<256;++Jt)ka[Jt]=9;var Jt;for(Jt=256;Jt<280;++Jt)ka[Jt]=7;var Jt;for(Jt=280;Jt<288;++Jt)ka[Jt]=8;var Jt,qd=new pi(32);for(Jt=0;Jt<32;++Jt)qd[Jt]=5;var Jt;var L1=za(ka,9,1);var D1=za(qd,5,1),Su=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Ei=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Tu=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},I1=function(i){return(i/8|0)+(i&7&&1)},O1=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof Fr?Fr:i instanceof Mu?Mu:pi)(t-e);return n.set(i.subarray(e,t)),n},N1=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new pi(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new pi(n*3));var a=function(tt){var ht=e.length;if(tt>ht){var gt=new pi(Math.max(ht*2,tt));gt.set(e),e=gt}},l=t.f||0,u=t.p||0,h=t.b||0,p=t.l,m=t.d,v=t.m,_=t.n,R=n*8;do{if(!p){t.f=l=Ei(i,u,1);var E=Ei(i,u+1,3);if(u+=3,E)if(E==1)p=L1,m=D1,v=9,_=5;else if(E==2){var b=Ei(i,u,31)+257,S=Ei(i,u+10,15)+4,U=b+Ei(i,u+5,31)+1;u+=14;for(var f=new pi(U),z=new pi(19),W=0;W<S;++W)z[R1[W]]=Ei(i,u+W*3,7);u+=S*3;for(var F=Su(z),B=(1<<F)-1,ne=za(z,F,1),W=0;W<U;){var te=ne[Ei(i,u,B)];u+=te&15;var g=te>>>4;if(g<16)f[W++]=g;else{var _e=0,K=0;for(g==16?(K=3+Ei(i,u,3),u+=2,_e=f[W-1]):g==17?(K=3+Ei(i,u,7),u+=3):g==18&&(K=11+Ei(i,u,127),u+=7);K--;)f[W++]=_e}}var ee=f.subarray(0,b),le=f.subarray(b);v=Su(ee),_=Su(le),p=za(ee,v,1),m=za(le,_,1)}else throw"invalid block type";else{var g=I1(u)+4,c=i[g-4]|i[g-3]<<8,T=g+c;if(T>n){if(s)throw"unexpected EOF";break}r&&a(h+c),e.set(i.subarray(g,T),h),t.b=h+=c,t.p=u=T*8;continue}if(u>R){if(s)throw"unexpected EOF";break}}r&&a(h+131072);for(var Me=(1<<v)-1,me=(1<<_)-1,Ee=u;;Ee=u){var _e=p[Tu(i,u)&Me],Re=_e>>>4;if(u+=_e&15,u>R){if(s)throw"unexpected EOF";break}if(!_e)throw"invalid length/literal";if(Re<256)e[h++]=Re;else if(Re==256){Ee=u,p=null;break}else{var Be=Re-254;if(Re>264){var W=Re-257,qe=kd[W];Be=Ei(i,u,(1<<qe)-1)+Wd[W],u+=qe}var be=m[Tu(i,u)&me],Oe=be>>>4;if(!be)throw"invalid distance";u+=be&15;var le=P1[Oe];if(Oe>3){var qe=Hd[Oe];le+=Tu(i,u)&(1<<qe)-1,u+=qe}if(u>R){if(s)throw"unexpected EOF";break}r&&a(h+131072);for(var je=h+Be;h<je;h+=4)e[h]=e[h-le],e[h+1]=e[h+1-le],e[h+2]=e[h+2-le],e[h+3]=e[h+3-le];h=je}}t.l=p,t.p=Ee,t.b=h,p&&(l=1,t.m=v,t.d=m,t.n=_)}while(!l);return h==e.length?e:O1(e,0,h)};var U1=new pi(0);var F1=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Yd(i,e){return N1((F1(i),i.subarray(2,-4)),e)}var B1=typeof TextDecoder<"u"&&new TextDecoder,z1=0;try{B1.decode(U1,{stream:!0}),z1=1}catch{}function jd(i,e,t){let n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let r=i,s=n,a=Math.floor((r+s)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?s=a:r=a,a=Math.floor((r+s)/2);return a}function H1(i,e,t,n){let r=[],s=[],a=[];r[0]=1;for(let l=1;l<=t;++l){s[l]=e-n[i+1-l],a[l]=n[i+l]-e;let u=0;for(let h=0;h<l;++h){let p=a[h+1],m=s[l-h],v=r[h]/(p+m);r[h]=u+p*v,u=m*v}r[l]=u}return r}function Zd(i,e,t,n){let r=jd(i,n,e),s=H1(r,n,i,e),a=new Zt(0,0,0,0);for(let l=0;l<=i;++l){let u=t[r-i+l],h=s[l],p=u.w*h;a.x+=u.x*p,a.y+=u.y*p,a.z+=u.z*p,a.w+=u.w*h}return a}function V1(i,e,t,n,r){let s=[];for(let m=0;m<=t;++m)s[m]=0;let a=[];for(let m=0;m<=n;++m)a[m]=s.slice(0);let l=[];for(let m=0;m<=t;++m)l[m]=s.slice(0);l[0][0]=1;let u=s.slice(0),h=s.slice(0);for(let m=1;m<=t;++m){u[m]=e-r[i+1-m],h[m]=r[i+m]-e;let v=0;for(let _=0;_<m;++_){let R=h[_+1],E=u[m-_];l[m][_]=R+E;let g=l[_][m-1]/l[m][_];l[_][m]=v+R*g,v=E*g}l[m][m]=v}for(let m=0;m<=t;++m)a[0][m]=l[m][t];for(let m=0;m<=t;++m){let v=0,_=1,R=[];for(let E=0;E<=t;++E)R[E]=s.slice(0);R[0][0]=1;for(let E=1;E<=n;++E){let g=0,c=m-E,T=t-E;m>=E&&(R[_][0]=R[v][0]/l[T+1][c],g=R[_][0]*l[c][T]);let b=c>=-1?1:-c,S=m-1<=T?E-1:t-m;for(let f=b;f<=S;++f)R[_][f]=(R[v][f]-R[v][f-1])/l[T+1][c+f],g+=R[_][f]*l[c+f][T];m<=T&&(R[_][E]=-R[v][E-1]/l[T+1][m],g+=R[_][E]*l[m][T]),a[E][m]=g;let U=v;v=_,_=U}}let p=t;for(let m=1;m<=n;++m){for(let v=0;v<=t;++v)a[m][v]*=p;p*=t-m}return a}function G1(i,e,t,n,r){let s=r<i?r:i,a=[],l=jd(i,n,e),u=V1(l,n,i,s,e),h=[];for(let p=0;p<t.length;++p){let m=t[p].clone(),v=m.w;m.x*=v,m.y*=v,m.z*=v,h[p]=m}for(let p=0;p<=s;++p){let m=h[l-i].clone().multiplyScalar(u[p][0]);for(let v=1;v<=i;++v)m.add(h[l-i+v].clone().multiplyScalar(u[p][v]));a[p]=m}for(let p=s+1;p<=r+1;++p)a[p]=new Zt(0,0,0);return a}function W1(i,e){let t=1;for(let r=2;r<=i;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=i-e;++r)n*=r;return t/n}function X1(i){let e=i.length,t=[],n=[];for(let s=0;s<e;++s){let a=i[s];t[s]=new ce(a.x,a.y,a.z),n[s]=a.w}let r=[];for(let s=0;s<e;++s){let a=t[s].clone();for(let l=1;l<=s;++l)a.sub(r[s-l].clone().multiplyScalar(W1(s,l)*n[l]));r[s]=a.divideScalar(n[0])}return r}function $d(i,e,t,n,r){let s=G1(i,e,t,n,r);return X1(s)}var _l=class extends Jo{constructor(e,t,n,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let a=0;a<n.length;++a){let l=n[a];this.controlPoints[a]=new Zt(l.x,l.y,l.z,l.w)}}getPoint(e,t=new ce){let n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Zd(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new ce){let n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=$d(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}};var kt,bn,Kn,yl=class extends ki{constructor(e){super(e)}load(e,t,n,r){let s=this,a=s.path===""?al.extractUrlBase(e):s.path,l=new il(this.manager);l.setPath(s.path),l.setResponseType("arraybuffer"),l.setRequestHeader(s.requestHeader),l.setWithCredentials(s.withCredentials),l.load(e,function(u){try{t(s.parse(u,a))}catch(h){r?r(h):console.error(h),s.manager.itemError(e)}},n,r)}parse(e,t){if(Y1(e))kt=new Du().parse(e);else{let r=ep(e);if(!j1(r))throw new Error("THREE.FBXLoader: Unknown format.");if(Jd(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Jd(r));kt=new Lu().parse(r)}let n=new Nr(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Ru(n,this.manager).parse(kt)}},Ru=class{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){bn=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),s=new Cu().parse(r);return this.parseScene(r,s,n),Kn}parseConnections(){let e=new Map;return"Connections"in kt&&kt.Connections.connections.forEach(function(n){let r=n[0],s=n[1],a=n[2];e.has(r)||e.set(r,{parents:[],children:[]});let l={ID:s,relationship:a};e.get(r).parents.push(l),e.has(s)||e.set(s,{parents:[],children:[]});let u={ID:r,relationship:a};e.get(s).children.push(u)}),e}parseImages(){let e={},t={};if("Video"in kt.Objects){let n=kt.Objects.Video;for(let r in n){let s=n[r],a=parseInt(r);if(e[a]=s.RelativeFilename||s.Filename,"Content"in s){let l=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,u=typeof s.Content=="string"&&s.Content!=="";if(l||u){let h=this.parseImage(n[r]);t[s.RelativeFilename||s.Filename]=h}}}}for(let n in e){let r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase(),s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{let a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:s}))}}parseTextures(e){let t=new Map;if("Texture"in kt.Objects){let n=kt.Objects.Texture;for(let r in n){let s=this.parseTexture(n[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let r=e.WrapModeU,s=e.WrapModeV,a=r!==void 0?r.value:0,l=s!==void 0?s.value:0;if(n.wrapS=a===0?Vs:ei,n.wrapT=l===0?Vs:ei,"Scaling"in e){let u=e.Scaling.value;n.repeat.x=u[0],n.repeat.y=u[1]}if("Translation"in e){let u=e.Translation.value;n.offset.x=u[0],n.offset.y=u[1]}return n}loadTexture(e,t){let n,r=this.textureLoader.path,s=bn.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a,l=e.FileName.slice(-3).toLowerCase();if(l==="tga"){let u=this.manager.getHandler(".tga");u===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),a=new Hn):(u.setPath(this.textureLoader.path),a=u.load(n))}else if(l==="dds"){let u=this.manager.getHandler(".dds");u===null?(console.warn("FBXLoader: DDS loader not found, creating placeholder texture for",e.RelativeFilename),a=new Hn):(u.setPath(this.textureLoader.path),a=u.load(n))}else l==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),a=new Hn):a=this.textureLoader.load(n);return this.textureLoader.setPath(r),a}parseMaterials(e){let t=new Map;if("Material"in kt.Objects){let n=kt.Objects.Material;for(let r in n){let s=this.parseMaterial(n[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){let n=e.id,r=e.attrName,s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!bn.has(n))return null;let a=this.parseParameters(e,t,n),l;switch(s.toLowerCase()){case"phong":l=new Js;break;case"lambert":l=new Ks;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),l=new Js;break}return l.setValues(a),l.name=r,l}parseParameters(e,t,n){let r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new xt().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new xt().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new xt().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new xt().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new xt().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new xt().fromArray(e.SpecularColor.value).convertSRGBToLinear());let s=this;return bn.get(n).children.forEach(function(a){let l=a.relationship;switch(l){case"Bump":r.bumpMap=s.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,a.ID),r.map!==void 0&&(r.map.colorSpace=on);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,a.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,a.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=on);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,a.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,a.ID),r.envMap!==void 0&&(r.envMap.mapping=Sa,r.envMap.colorSpace=on);break;case"SpecularColor":r.specularMap=s.getTexture(t,a.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=on);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,a.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",l);break}}),r}getTexture(e,t){return"LayeredTexture"in kt.Objects&&t in kt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=bn.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if("Deformer"in kt.Objects){let n=kt.Objects.Deformer;for(let r in n){let s=n[r],a=bn.get(parseInt(r));if(s.attrType==="Skin"){let l=this.parseSkeleton(a,n);l.ID=r,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),l.geometryID=a.parents[0].ID,e[r]=l}else if(s.attrType==="BlendShape"){let l={id:r};l.rawTargets=this.parseMorphTargets(a,n),l.id=r,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=l}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(r){let s=t[r.ID];if(s.attrType!=="Cluster")return;let a={ID:r.ID,indices:[],weights:[],transformLink:new Tt().fromArray(s.TransformLink.a)};"Indexes"in s&&(a.indices=s.Indexes.a,a.weights=s.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let r=0;r<e.children.length;r++){let s=e.children[r],a=t[s.ID],l={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;l.geoID=bn.get(parseInt(s.ID)).children.filter(function(u){return u.relationship===void 0})[0].ID,n.push(l)}return n}parseScene(e,t,n){Kn=new ir;let r=this.parseModels(e.skeletons,t,n),s=kt.Objects.Model,a=this;r.forEach(function(u){let h=s[u.ID];a.setLookAtProperties(u,h),bn.get(u.ID).parents.forEach(function(m){let v=r.get(m.ID);v!==void 0&&v.add(u)}),u.parent===null&&Kn.add(u)}),this.bindSkeleton(e.skeletons,t,r),this.addGlobalSceneSettings(),Kn.traverse(function(u){if(u.userData.transformData){u.parent&&(u.userData.transformData.parentMatrix=u.parent.matrix,u.userData.transformData.parentMatrixWorld=u.parent.matrixWorld);let h=Kd(u.userData.transformData);u.applyMatrix4(h),u.updateWorldMatrix()}});let l=new Pu().parse();Kn.children.length===1&&Kn.children[0].isGroup&&(Kn.children[0].animations=l,Kn=Kn.children[0]),Kn.animations=l}parseModels(e,t,n){let r=new Map,s=kt.Objects.Model;for(let a in s){let l=parseInt(a),u=s[a],h=bn.get(l),p=this.buildSkeleton(h,e,l,u.attrName);if(!p){switch(u.attrType){case"Camera":p=this.createCamera(h);break;case"Light":p=this.createLight(h);break;case"Mesh":p=this.createMesh(h,t,n);break;case"NurbsCurve":p=this.createCurve(h,t);break;case"LimbNode":case"Root":p=new $s;break;case"Null":default:p=new ir;break}p.name=u.attrName?Qt.sanitizeNodeName(u.attrName):"",p.userData.originalName=u.attrName,p.ID=l}this.getTransformData(p,u),r.set(l,p)}return r}buildSkeleton(e,t,n,r){let s=null;return e.parents.forEach(function(a){for(let l in t){let u=t[l];u.rawBones.forEach(function(h,p){if(h.ID===a.ID){let m=s;s=new $s,s.matrixWorld.copy(h.transformLink),s.name=r?Qt.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=n,u.bones[p]=s,m!==null&&s.add(m)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(r){let s=kt.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new dn;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let l=window.innerWidth,u=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(l=n.AspectWidth.value,u=n.AspectHeight.value);let h=l/u,p=45;n.FieldOfView!==void 0&&(p=n.FieldOfView.value);let m=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new xn(p,h,s,a),m!==null&&t.setFocalLength(m);break;case 1:t=new js(-l/2,l/2,u/2,-u/2,s,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new dn;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){let s=kt.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new dn;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new xt().fromArray(n.Color.value).convertSRGBToLinear());let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let l=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?l=0:l=n.FarAttenuationEnd.value);let u=1;switch(r){case 0:t=new ns(s,a,l,u);break;case 1:t=new is(s,a);break;case 2:let h=Math.PI/3;n.InnerAngle!==void 0&&(h=Nn.degToRad(n.InnerAngle.value));let p=0;n.OuterAngle!==void 0&&(p=Nn.degToRad(n.OuterAngle.value),p=Math.max(p,1)),t=new ea(s,a,l,h,p,u);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new ns(s,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,s=null,a=null,l=[];return e.children.forEach(function(u){t.has(u.ID)&&(s=t.get(u.ID)),n.has(u.ID)&&l.push(n.get(u.ID))}),l.length>1?a=l:l.length>0?a=l[0]:(a=new Js({name:ki.DEFAULT_MATERIAL_NAME,color:13421772}),l.push(a)),"color"in s.attributes&&l.forEach(function(u){u.vertexColors=!0}),s.FBX_Deformer?(r=new jo(s,a),r.normalizeSkinWeights()):r=new $n(s,a),r}createCurve(e,t){let n=e.children.reduce(function(s,a){return t.has(a.ID)&&(s=t.get(a.ID)),s},null),r=new Ca({name:ki.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new $o(n,r)}getTransformData(e,t){let n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Qd(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&bn.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){let s=kt.Objects.Model[r.ID];if("Lcl_Translation"in s){let a=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),Kn.add(e.target)):e.lookAt(new ce().fromArray(a))}}})}bindSkeleton(e,t,n){let r=this.parsePoseNodes();for(let s in e){let a=e[s];bn.get(parseInt(a.ID)).parents.forEach(function(u){if(t.has(u.ID)){let h=u.ID;bn.get(h).parents.forEach(function(m){n.has(m.ID)&&n.get(m.ID).bind(new Zo(a.bones),r[m.ID])})}})}}parsePoseNodes(){let e={};if("Pose"in kt.Objects){let t=kt.Objects.Pose;for(let n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){let r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Tt().fromArray(s.Matrix.a)}):e[r.Node]=new Tt().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in kt){if("AmbientColor"in kt.GlobalSettings){let e=kt.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){let s=new xt(t,n,r).convertSRGBToLinear();Kn.add(new sl(s,1))}}"UnitScaleFactor"in kt.GlobalSettings&&(Kn.userData.unitScaleFactor=kt.GlobalSettings.UnitScaleFactor.value)}}},Cu=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if("Geometry"in kt.Objects){let n=kt.Objects.Geometry;for(let r in n){let s=bn.get(parseInt(r)),a=this.parseGeometry(s,n[r],e);t.set(parseInt(r),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let r=n.skeletons,s=[],a=e.parents.map(function(m){return kt.Objects.Model[m.ID]});if(a.length===0)return;let l=e.children.reduce(function(m,v){return r[v.ID]!==void 0&&(m=r[v.ID]),m},null);e.children.forEach(function(m){n.morphTargets[m.ID]!==void 0&&s.push(n.morphTargets[m.ID])});let u=a[0],h={};"RotationOrder"in u&&(h.eulerOrder=Qd(u.RotationOrder.value)),"InheritType"in u&&(h.inheritType=parseInt(u.InheritType.value)),"GeometricTranslation"in u&&(h.translation=u.GeometricTranslation.value),"GeometricRotation"in u&&(h.rotation=u.GeometricRotation.value),"GeometricScaling"in u&&(h.scale=u.GeometricScaling.value);let p=Kd(h);return this.genGeometry(t,l,s,p)}genGeometry(e,t,n,r){let s=new Xn;e.attrName&&(s.name=e.attrName);let a=this.parseGeoNode(e,t),l=this.genBuffers(a),u=new vn(l.vertex,3);if(u.applyMatrix4(r),s.setAttribute("position",u),l.colors.length>0&&s.setAttribute("color",new vn(l.colors,3)),t&&(s.setAttribute("skinIndex",new qs(l.weightsIndices,4)),s.setAttribute("skinWeight",new vn(l.vertexWeights,4)),s.FBX_Deformer=t),l.normal.length>0){let h=new zt().getNormalMatrix(r),p=new vn(l.normal,3);p.applyNormalMatrix(h),s.setAttribute("normal",p)}if(l.uvs.forEach(function(h,p){let m=p===0?"uv":`uv${p}`;s.setAttribute(m,new vn(l.uvs[p],2))}),a.material&&a.material.mappingType!=="AllSame"){let h=l.materialIndex[0],p=0;if(l.materialIndex.forEach(function(m,v){m!==h&&(s.addGroup(p,v-p,h),h=m,p=v)}),s.groups.length>0){let m=s.groups[s.groups.length-1],v=m.start+m.count;v!==l.materialIndex.length&&s.addGroup(v,l.materialIndex.length-v,h)}s.groups.length===0&&s.addGroup(0,l.materialIndex.length,l.materialIndex[0])}return this.addMorphTargets(s,e,n,r),s}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(a,l){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:s,weight:r.weights[l]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,r=0,s=!1,a=[],l=[],u=[],h=[],p=[],m=[],v=this;return e.vertexIndices.forEach(function(_,R){let E,g=!1;_<0&&(_=_^-1,g=!0);let c=[],T=[];if(a.push(_*3,_*3+1,_*3+2),e.color){let b=vl(R,n,_,e.color);u.push(b[0],b[1],b[2])}if(e.skeleton){if(e.weightTable[_]!==void 0&&e.weightTable[_].forEach(function(b){T.push(b.weight),c.push(b.id)}),T.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);let b=[0,0,0,0],S=[0,0,0,0];T.forEach(function(U,f){let z=U,W=c[f];S.forEach(function(F,B,ne){if(z>F){ne[B]=z,z=F;let te=b[B];b[B]=W,W=te}})}),c=b,T=S}for(;T.length<4;)T.push(0),c.push(0);for(let b=0;b<4;++b)p.push(T[b]),m.push(c[b])}if(e.normal){let b=vl(R,n,_,e.normal);l.push(b[0],b[1],b[2])}e.material&&e.material.mappingType!=="AllSame"&&(E=vl(R,n,_,e.material)[0],E<0&&(v.negativeMaterialIndices=!0,E=0)),e.uv&&e.uv.forEach(function(b,S){let U=vl(R,n,_,b);h[S]===void 0&&(h[S]=[]),h[S].push(U[0]),h[S].push(U[1])}),r++,g&&(v.genFace(t,e,a,E,l,u,h,p,m,r),n++,r=0,a=[],l=[],u=[],h=[],p=[],m=[])}),t}getNormalNewell(e){let t=new ce(0,0,0);for(let n=0;n<e.length;n++){let r=e[n],s=e[(n+1)%e.length];t.x+=(r.y-s.y)*(r.z+s.z),t.y+=(r.z-s.z)*(r.x+s.x),t.z+=(r.x-s.x)*(r.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),r=(Math.abs(t.z)>.5?new ce(0,1,0):new ce(0,0,1)).cross(t).normalize(),s=t.clone().cross(r).normalize();return{normal:t,tangent:r,bitangent:s}}flattenVertex(e,t,n){return new At(e.dot(t),e.dot(n))}genFace(e,t,n,r,s,a,l,u,h,p){let m;if(p>3){let v=[];for(let g=0;g<n.length;g+=3)v.push(new ce(t.vertexPositions[n[g]],t.vertexPositions[n[g+1]],t.vertexPositions[n[g+2]]));let{tangent:_,bitangent:R}=this.getNormalTangentAndBitangent(v),E=[];for(let g of v)E.push(this.flattenVertex(g,_,R));m=Ko.triangulateShape(E,[])}else m=[[0,1,2]];for(let[v,_,R]of m)e.vertex.push(t.vertexPositions[n[v*3]]),e.vertex.push(t.vertexPositions[n[v*3+1]]),e.vertex.push(t.vertexPositions[n[v*3+2]]),e.vertex.push(t.vertexPositions[n[_*3]]),e.vertex.push(t.vertexPositions[n[_*3+1]]),e.vertex.push(t.vertexPositions[n[_*3+2]]),e.vertex.push(t.vertexPositions[n[R*3]]),e.vertex.push(t.vertexPositions[n[R*3+1]]),e.vertex.push(t.vertexPositions[n[R*3+2]]),t.skeleton&&(e.vertexWeights.push(u[v*4]),e.vertexWeights.push(u[v*4+1]),e.vertexWeights.push(u[v*4+2]),e.vertexWeights.push(u[v*4+3]),e.vertexWeights.push(u[_*4]),e.vertexWeights.push(u[_*4+1]),e.vertexWeights.push(u[_*4+2]),e.vertexWeights.push(u[_*4+3]),e.vertexWeights.push(u[R*4]),e.vertexWeights.push(u[R*4+1]),e.vertexWeights.push(u[R*4+2]),e.vertexWeights.push(u[R*4+3]),e.weightsIndices.push(h[v*4]),e.weightsIndices.push(h[v*4+1]),e.weightsIndices.push(h[v*4+2]),e.weightsIndices.push(h[v*4+3]),e.weightsIndices.push(h[_*4]),e.weightsIndices.push(h[_*4+1]),e.weightsIndices.push(h[_*4+2]),e.weightsIndices.push(h[_*4+3]),e.weightsIndices.push(h[R*4]),e.weightsIndices.push(h[R*4+1]),e.weightsIndices.push(h[R*4+2]),e.weightsIndices.push(h[R*4+3])),t.color&&(e.colors.push(a[v*3]),e.colors.push(a[v*3+1]),e.colors.push(a[v*3+2]),e.colors.push(a[_*3]),e.colors.push(a[_*3+1]),e.colors.push(a[_*3+2]),e.colors.push(a[R*3]),e.colors.push(a[R*3+1]),e.colors.push(a[R*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[v*3]),e.normal.push(s[v*3+1]),e.normal.push(s[v*3+2]),e.normal.push(s[_*3]),e.normal.push(s[_*3+1]),e.normal.push(s[_*3+2]),e.normal.push(s[R*3]),e.normal.push(s[R*3+1]),e.normal.push(s[R*3+2])),t.uv&&t.uv.forEach(function(E,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(l[g][v*2]),e.uvs[g].push(l[g][v*2+1]),e.uvs[g].push(l[g][_*2]),e.uvs[g].push(l[g][_*2+1]),e.uvs[g].push(l[g][R*2]),e.uvs[g].push(l[g][R*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let s=this;n.forEach(function(a){a.rawTargets.forEach(function(l){let u=kt.Objects.Geometry[l.geoID];u!==void 0&&s.genMorphGeometry(e,t,u,r,l.name)})})}genMorphGeometry(e,t,n,r,s){let a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],u=n.Indexes!==void 0?n.Indexes.a:[],h=e.attributes.position.count*3,p=new Float32Array(h);for(let R=0;R<u.length;R++){let E=u[R]*3;p[E]=l[R*3],p[E+1]=l[R*3+1],p[E+2]=l[R*3+2]}let m={vertexIndices:a,vertexPositions:p},v=this.genBuffers(m),_=new vn(v.vertex,3);_.name=s||n.attrName,_.applyMatrix4(r),e.morphAttributes.position.push(_)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a,s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a,s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a,s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let a=0,l=new xt;a<r.length;a+=4)l.fromArray(r,a).convertSRGBToLinear().toArray(r,a);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};let r=e.Materials.a,s=[];for(let a=0;a<r.length;++a)s.push(a);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Xn;let n=t-1,r=e.KnotVector.a,s=[],a=e.Points.a;for(let m=0,v=a.length;m<v;m+=4)s.push(new Zt().fromArray(a,m));let l,u;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){l=n,u=r.length-1-l;for(let m=0;m<n;++m)s.push(s[m])}let p=new _l(n,r,s,l,u).getPoints(s.length*12);return new Xn().setFromPoints(p)}},Pu=class{parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let r=t[n],s=this.addClip(r);e.push(s)}return e}parseClips(){if(kt.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=kt.Objects.AnimationCurveNode,t=new Map;for(let n in e){let r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){let s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){let t=kt.Objects.AnimationCurve;for(let n in t){let r={id:t[n].id,times:t[n].KeyTime.a.map(Z1),values:t[n].KeyValueFloat.a},s=bn.get(r.id);if(s!==void 0){let a=s.parents[0].ID,l=s.parents[0].relationship;l.match(/X/)?e.get(a).curves.x=r:l.match(/Y/)?e.get(a).curves.y=r:l.match(/Z/)?e.get(a).curves.z=r:l.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=r)}}}parseAnimationLayers(e){let t=kt.Objects.AnimationLayer,n=new Map;for(let r in t){let s=[],a=bn.get(parseInt(r));a!==void 0&&(a.children.forEach(function(u,h){if(e.has(u.ID)){let p=e.get(u.ID);if(p.curves.x!==void 0||p.curves.y!==void 0||p.curves.z!==void 0){if(s[h]===void 0){let m=bn.get(u.ID).parents.filter(function(v){return v.relationship!==void 0})[0].ID;if(m!==void 0){let v=kt.Objects.Model[m.toString()];if(v===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",u);return}let _={modelName:v.attrName?Qt.sanitizeNodeName(v.attrName):"",ID:v.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Kn.traverse(function(R){R.ID===v.id&&(_.transform=R.matrix,R.userData.transformData&&(_.eulerOrder=R.userData.transformData.eulerOrder))}),_.transform||(_.transform=new Tt),"PreRotation"in v&&(_.preRotation=v.PreRotation.value),"PostRotation"in v&&(_.postRotation=v.PostRotation.value),s[h]=_}}s[h]&&(s[h][p.attr]=p)}else if(p.curves.morph!==void 0){if(s[h]===void 0){let m=bn.get(u.ID).parents.filter(function(c){return c.relationship!==void 0})[0].ID,v=bn.get(m).parents[0].ID,_=bn.get(v).parents[0].ID,R=bn.get(_).parents[0].ID,E=kt.Objects.Model[R],g={modelName:E.attrName?Qt.sanitizeNodeName(E.attrName):"",morphName:kt.Objects.Deformer[m].attrName};s[h]=g}s[h][p.attr]=p}}}),n.set(parseInt(r),s))}return n}parseAnimStacks(e){let t=kt.Objects.AnimationStack,n={};for(let r in t){let s=bn.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");let a=e.get(s[0].ID);n[r]={name:t[r].attrName,layer:a}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),new tl(e.name,-1,t)}generateTracks(e){let t=[],n=new ce,r=new ce;if(e.transform&&e.transform.decompose(n,new wn,r),n=n.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let s=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){let s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,n,r){let s=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(s,t,n);return new Or(e+"."+r,s,a)}generateRotationTrack(e,t,n,r,s){let a,l;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){let m=this.interpolateRotations(t.x,t.y,t.z,s);a=m[0],l=m[1]}n!==void 0&&(n=n.map(Nn.degToRad),n.push(s),n=new Jn().fromArray(n),n=new wn().setFromEuler(n)),r!==void 0&&(r=r.map(Nn.degToRad),r.push(s),r=new Jn().fromArray(r),r=new wn().setFromEuler(r).invert());let u=new wn,h=new Jn,p=[];if(!l||!a)return new zi(e+".quaternion",[],[]);for(let m=0;m<l.length;m+=3)h.set(l[m],l[m+1],l[m+2],s),u.setFromEuler(h),n!==void 0&&u.premultiply(n),r!==void 0&&u.multiply(r),m>2&&new wn().fromArray(p,(m-3)/3*4).dot(u)<0&&u.set(-u.x,-u.y,-u.z,-u.w),u.toArray(p,m/3*4);return new zi(e+".quaternion",a,p)}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),r=Kn.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Dr(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let s=1;s<t.length;s++){let a=t[s];a!==r&&(t[n]=a,r=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){let r=n,s=[],a=-1,l=-1,u=-1;return e.forEach(function(h){if(t.x&&(a=t.x.times.indexOf(h)),t.y&&(l=t.y.times.indexOf(h)),t.z&&(u=t.z.times.indexOf(h)),a!==-1){let p=t.x.values[a];s.push(p),r[0]=p}else s.push(r[0]);if(l!==-1){let p=t.y.values[l];s.push(p),r[1]=p}else s.push(r[1]);if(u!==-1){let p=t.z.values[u];s.push(p),r[2]=p}else s.push(r[2])}),s}interpolateRotations(e,t,n,r){let s=[],a=[];s.push(e.times[0]),a.push(Nn.degToRad(e.values[0])),a.push(Nn.degToRad(t.values[0])),a.push(Nn.degToRad(n.values[0]));for(let l=1;l<e.values.length;l++){let u=[e.values[l-1],t.values[l-1],n.values[l-1]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;let h=u.map(Nn.degToRad),p=[e.values[l],t.values[l],n.values[l]];if(isNaN(p[0])||isNaN(p[1])||isNaN(p[2]))continue;let m=p.map(Nn.degToRad),v=[p[0]-u[0],p[1]-u[1],p[2]-u[2]],_=[Math.abs(v[0]),Math.abs(v[1]),Math.abs(v[2])];if(_[0]>=180||_[1]>=180||_[2]>=180){let E=Math.max(..._)/180,g=new Jn(...h,r),c=new Jn(...m,r),T=new wn().setFromEuler(g),b=new wn().setFromEuler(c);T.dot(b)&&b.set(-b.x,-b.y,-b.z,-b.w);let S=e.times[l-1],U=e.times[l]-S,f=new wn,z=new Jn;for(let W=0;W<1;W+=1/E)f.copy(T.clone().slerp(b.clone(),W)),s.push(S+W*U),z.setFromQuaternion(f,r),a.push(z.x),a.push(z.y),a.push(z.z)}else s.push(e.times[l]),a.push(Nn.degToRad(e.values[l])),a.push(Nn.degToRad(t.values[l])),a.push(Nn.degToRad(n.values[l]))}return[s,a]}},Lu=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new bl,this.nodeStack=[],this.currentProp=[],this.currentPropName="";let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,s){let a=r.match(/^[\s\t]*;/),l=r.match(/^[\s\t]*$/);if(a||l)return;let u=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),h=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),p=r.match("^\\t{"+(t.currentIndent-1)+"}}");u?t.parseNodeBegin(r,u):h?t.parseNodeProperty(r,h,n[++s]):p?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(u){return u.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},a=this.parseNodeAttr(r),l=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in l?(n==="PoseNode"?l.PoseNode.push(s):l[n].id!==void 0&&(l[n]={},l[n][l[n].id]=l[n]),a.id!==""&&(l[n][a.id]=s)):typeof a.id=="number"?(l[n]={},l[n][a.id]=s):n!=="Properties70"&&(n==="PoseNode"?l[n]=[s]:l[n]=s),typeof a.id=="number"&&(s.id=a.id),a.name!==""&&(s.attrName=a.name),a.type!==""&&(s.attrType=a.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());let a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){let u=s.split(",").slice(1),h=parseInt(u[0]),p=parseInt(u[1]),m=s.split(",").slice(3);m=m.map(function(v){return v.trim().replace(/^"/,"")}),r="connections",s=[h,p],J1(s,m),a[r]===void 0&&(a[r]=[])}r==="Node"&&(a.id=s),r in a&&Array.isArray(a[r])?a[r].push(s):r!=="a"?a[r]=s:a.a=s,this.setCurrentProp(a,r),r==="a"&&s.slice(-1)!==","&&(a.a=Au(s))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Au(t.a))}parseNodeSpecialProperty(e,t,n){let r=n.split('",').map(function(p){return p.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],a=r[1],l=r[2],u=r[3],h=r[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":h=parseFloat(h);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":h=Au(h);break}this.getPrevNode()[s]={type:a,type2:l,flag:u,value:h},this.setCurrentProp(this.getPrevNode(),s)}},Du=class{parse(e){let t=new xl(e);t.skip(23);let n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);let r=new bl;for(;!this.endOfContent(t);){let s=this.parseNode(t,n);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let a=e.getUint8(),l=e.getString(a);if(r===0)return null;let u=[];for(let v=0;v<s;v++)u.push(this.parseProperty(e));let h=u.length>0?u[0]:"",p=u.length>1?u[1]:"",m=u.length>2?u[2]:"";for(n.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){let v=this.parseNode(e,t);v!==null&&this.parseSubNode(l,n,v)}return n.propertyList=u,typeof h=="number"&&(n.id=h),p!==""&&(n.attrName=p),m!==""&&(n.attrType=m),l!==""&&(n.name=l),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){let r=[];n.propertyList.forEach(function(s,a){a!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],s=n.propertyList[1],a=n.propertyList[2],l=n.propertyList[3],u;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?u=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:u=n.propertyList[4],t[r]={type:s,type2:a,flag:l,value:u}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":let r=e.getUint32(),s=e.getUint32(),a=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}let l=Yd(new Uint8Array(e.getArrayBuffer(a))),u=new xl(l.buffer);switch(t){case"b":case"c":return u.getBooleanArray(r);case"d":return u.getFloat64Array(r);case"f":return u.getFloat32Array(r);case"i":return u.getInt32Array(r);case"l":return u.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}},xl=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let r=n.indexOf(0);return r>=0&&(n=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(n)}},bl=class{add(e,t){this[e]=t}};function Y1(i){let e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===ep(i,0,e.length)}function j1(i){let e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],t=0;function n(r){let s=i[r-1];return i=i.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function Jd(i){let e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Z1(i){return i/46186158e3}var $1=[];function vl(i,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=i;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);let s=r*n.dataSize,a=s+n.dataSize;return K1($1,n.buffer,s,a)}var Eu=new Jn,na=new ce;function Kd(i){let e=new Tt,t=new Tt,n=new Tt,r=new Tt,s=new Tt,a=new Tt,l=new Tt,u=new Tt,h=new Tt,p=new Tt,m=new Tt,v=new Tt,_=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(na.fromArray(i.translation)),i.preRotation){let B=i.preRotation.map(Nn.degToRad);B.push(i.eulerOrder||Jn.DEFAULT_ORDER),t.makeRotationFromEuler(Eu.fromArray(B))}if(i.rotation){let B=i.rotation.map(Nn.degToRad);B.push(i.eulerOrder||Jn.DEFAULT_ORDER),n.makeRotationFromEuler(Eu.fromArray(B))}if(i.postRotation){let B=i.postRotation.map(Nn.degToRad);B.push(i.eulerOrder||Jn.DEFAULT_ORDER),r.makeRotationFromEuler(Eu.fromArray(B)),r.invert()}i.scale&&s.scale(na.fromArray(i.scale)),i.scalingOffset&&l.setPosition(na.fromArray(i.scalingOffset)),i.scalingPivot&&a.setPosition(na.fromArray(i.scalingPivot)),i.rotationOffset&&u.setPosition(na.fromArray(i.rotationOffset)),i.rotationPivot&&h.setPosition(na.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(m.copy(i.parentMatrix),p.copy(i.parentMatrixWorld));let R=t.clone().multiply(n).multiply(r),E=new Tt;E.extractRotation(p);let g=new Tt;g.copyPosition(p);let c=g.clone().invert().multiply(p),T=E.clone().invert().multiply(c),b=s,S=new Tt;if(_===0)S.copy(E).multiply(R).multiply(T).multiply(b);else if(_===1)S.copy(E).multiply(T).multiply(R).multiply(b);else{let ne=new Tt().scale(new ce().setFromMatrixScale(m)).clone().invert(),te=T.clone().multiply(ne);S.copy(E).multiply(R).multiply(te).multiply(b)}let U=h.clone().invert(),f=a.clone().invert(),z=e.clone().multiply(u).multiply(h).multiply(t).multiply(n).multiply(r).multiply(U).multiply(l).multiply(a).multiply(s).multiply(f),W=new Tt().copyPosition(z),F=p.clone().multiply(W);return v.copyPosition(F),z=v.clone().multiply(S),z.premultiply(p.invert()),z}function Qd(i){i=i||0;let e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function Au(i){return i.split(",").map(function(t){return parseFloat(t)})}function ep(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),new TextDecoder().decode(new Uint8Array(i,e,t))}function J1(i,e){for(let t=0,n=i.length,r=e.length;t<r;t++,n++)i[n]=e[t]}function K1(i,e,t,n){for(let r=t,s=0;r<n;r++,s++)i[s]=e[r];return i}var Sl,np,mi,hr,ni,tp,ur,Br=new Zs,Iu,Ou,Nu=!1,Tl=0,Uu=!0,Fu,ip,Q1,as=document.getElementById("contact-container"),eb=document.getElementById("progress-bar"),tb=document.querySelector(".progress-bar-container"),Bu=new Ua;Bu.onLoad=function(){tb.style.display="none"};Bu.onProgress=function(i,e,t){eb.value=e/t*100};function rp(){Sl=document.querySelector("#bubble"),Sl.height=as.offsetHeight,Sl.width=as.offsetWidth,ni=new Qr({canvas:Sl,antialias:!0,alpha:!0}),hr=new xn(45,window.innerWidth/window.innerHeight,1,1e4),hr.position.set(100,50,150),np=new ol;let i=new Nr().load("https://uploads-ssl.webflow.com/649802b639d4f2cdad48d8db/64b64138ad558e5a9292da54_wall_texture.webp"),e=new Na({roughness:1,clearcoat:1,clearcoatRoughness:1,transmission:0,thickness:1,reflectivity:0,color:5263440,map:i}),t=new Ks({color:"white"}),n=new Na({color:16753920,emissive:0,metalness:.8,roughness:.2,reflectivity:.6,clearcoat:1,clearcoatRoughness:1,thickness:1});new yl(Bu).load("https://qn.edwardxwliu.cn/cat%20fix.fbx",function(h){h.traverse(function(p){p.isMesh&&(p.name==="cat3"&&(Fu=p),p.name==="cat1003"||p.name==="cat2"||p.name==="cat3"?p.material=t:p.name==="Coin_Dollar_1,5_cm"?p.material=n:p.name==="cat4"&&(p.material=e))}),$(window).width()>768?h.scale.setScalar(as.clientWidth/as.clientHeight*.05):h.scale.setScalar(as.clientWidth/as.clientHeight*.1),h.position.set(0,-50,0),Q1=h,Br.add(h)});let s=new ea(16777215,500);s.name="Spot Light",s.angle=Math.PI/5,s.penumbra=.3,s.position.set(100,100,50),s.castShadow=!0,s.shadow.camera.near=80,s.shadow.camera.far=300,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,Br.add(s);let a=new is(16777215,3);a.name="Dir. Light",a.position.set(0,100,0),a.castShadow=!0,a.shadow.camera.near=1,a.shadow.camera.far=130,a.shadow.camera.right=150,a.shadow.camera.left=-150,a.shadow.camera.top=150,a.shadow.camera.bottom=-150,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,Br.add(a);let l=new is(16777215,3);l.name="Dir. Light 2",l.position.set(50,-50,0),l.castShadow=!0,Br.add(l);let u=new rl(16777215,16777215,1);u.color.setHSL(.6,1,.6),u.groundColor.setHSL(.095,1,.75),u.position.set(0,150,0),Br.add(u),ur=new $n(new Qo(1,8,8),new Xs({color:16777215})),Br.add(ur),ur.add(new ns(16777215,3e3)),ni.setPixelRatio(window.devicePixelRatio),ni.setSize(window.innerWidth,window.innerHeight),ni.useLegacyLights=!1,ni.shadowMap.enabled=!0,ni.shadowMap.type=ud,ni.toneMapping=pu,ni.toneMappingExposure=1.25,mi=new gl(hr,ni.domElement),mi.screenSpacePanning=!0,mi.enablePan=!0,mi.enableZoom=!0,mi.minDistance=50,mi.maxDistance=500,mi.target.set(0,2,0),mi.update(),window.addEventListener("resize",nb),$(window).width()>768?ni.domElement.addEventListener("mousemove",rb,!0):ni.domElement.addEventListener("touchstart",sb)}function nb(){hr.aspect=window.innerWidth/window.innerHeight,hr.updateProjectionMatrix(),ni.setSize(window.innerWidth,window.innerHeight)}function sp(){let i={root:null,threshold:.5};new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting?ap():cancelAnimationFrame(ip)})},i).observe(as)}function ap(){ip=requestAnimationFrame(ap),Uu?(Fu.rotation.x+=.02,Tl++,Tl>=50&&(Uu=!1)):(Fu.rotation.x-=.02,Tl--,Tl<=-.79&&(Uu=!0)),ib()}function ib(){let i=np.getDelta();tp!==void 0&&tp.update(i);let e=Date.now()*25e-5;$(window).width()>768?(ur.position.x=Math.sin(e*7)*50,ur.position.y=Math.cos(e*5)*50-50,ur.position.z=Math.cos(e*3)*50):(ur.position.x=Math.sin(e*7)*25,ur.position.y=Math.cos(e*5)*25-25,ur.position.z=Math.cos(e*3)*25),ni.render(Br,hr)}function rb(i){var e=new ce(0,0,.5),t=ni.domElement.getBoundingClientRect();e.x=(i.clientX-t.left)/(t.right-t.left)*2-1,e.y=-((i.clientY-t.top)/(t.bottom-t.top))*2+1,e.unproject(hr);var n=new ll(hr.position,e.sub(hr.position).normalize()),r=n.intersectObjects(Br.children);mi.enabled=r.length>0}function sb(i){var e=+(i.targetTouches[0].clientX/window.innerWidth)*2+-1,t=-(i.targetTouches[0].clientY/window.innerHeight)*2+1;if(!Nu)return Nu=!0,setTimeout(function(){Nu=!1},300),Iu=e,Ou=t,!1;i.preventDefault(),Math.abs(e-Iu)/2<.2&&Math.abs(t-Ou)/2<.2&&Math.abs(e-Iu)/2>0&&Math.abs(t-Ou)/2>0&&(mi.enabled=!mi.enabled,mi.enabled?$("#bubble").css("touch-action","none"):$("#bubble").css("touch-action","auto"))}var Un=typeof module<"u"&&module.exports&&typeof global<"u"?global:window;(Un._gsQueue||(Un._gsQueue=[])).push(function(){"use strict";Un._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(i,e,t){var n=function(E){var g,c=[],T=E.length;for(g=0;g!==T;c.push(E[g++]));return c},r=function(E,g,c){var T,b,S=E.cycle;for(T in S)b=S[T],E[T]=typeof b=="function"?b.call(g[c],c):b[c%b.length];delete E.cycle},s=function(E,g,c){t.call(this,E,g,c),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=s.prototype.render},a=1e-10,l=t._internals,u=l.isSelector,h=l.isArray,p=s.prototype=t.to({},.1,{}),m=[];s.version="1.18.0",p.constructor=s,p.kill()._gc=!1,s.killTweensOf=s.killDelayedCallsTo=t.killTweensOf,s.getTweensOf=t.getTweensOf,s.lagSmoothing=t.lagSmoothing,s.ticker=t.ticker,s.render=t.render,p.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},p.updateTo=function(E,g){var c,T=this.ratio,b=this.vars.immediateRender||E.immediateRender;g&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(c in E)this.vars[c]=E[c];if(this._initted||b){if(g)this._initted=!1,b&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&t._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var S=this._time;this.render(0,!0,!1),this._initted=!1,this.render(S,!0,!1)}else if(this._time>0||b){this._initted=!1,this._init();for(var U,f=1/(1-T),z=this._firstPT;z;)U=z.s+z.c,z.c*=f,z.s=U-z.c,z=z._next}}return this},p.render=function(E,g,c){this._initted||this._duration===0&&this.vars.repeat&&this.invalidate();var T,b,S,U,f,z,W,F,B=this._dirty?this.totalDuration():this._totalDuration,ne=this._time,te=this._totalTime,_e=this._cycle,K=this._duration,ee=this._rawPrevTime;if(E>=B?(this._totalTime=B,this._cycle=this._repeat,this._yoyo&&1&this._cycle?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=K,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(T=!0,b="onComplete",c=c||this._timeline.autoRemoveChildren),K===0&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(E=0),(E===0||0>ee||ee===a)&&ee!==E&&(c=!0,ee>a&&(b="onReverseComplete")),this._rawPrevTime=F=!g||E||ee===E?E:a)):1e-7>E?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(te!==0||K===0&&ee>0)&&(b="onReverseComplete",T=this._reversed),0>E&&(this._active=!1,K===0&&(this._initted||!this.vars.lazy||c)&&(ee>=0&&(c=!0),this._rawPrevTime=F=!g||E||ee===E?E:a)),this._initted||(c=!0)):(this._totalTime=this._time=E,this._repeat!==0&&(U=K+this._repeatDelay,this._cycle=this._totalTime/U>>0,this._cycle!==0&&this._cycle===this._totalTime/U&&this._cycle--,this._time=this._totalTime-this._cycle*U,this._yoyo&&1&this._cycle&&(this._time=K-this._time),this._time>K?this._time=K:0>this._time&&(this._time=0)),this._easeType?(f=this._time/K,z=this._easeType,W=this._easePower,(z===1||z===3&&f>=.5)&&(f=1-f),z===3&&(f*=2),W===1?f*=f:W===2?f*=f*f:W===3?f*=f*f*f:W===4&&(f*=f*f*f*f),this.ratio=z===1?1-f:z===2?f:.5>this._time/K?f/2:1-f/2):this.ratio=this._ease.getRatio(this._time/K)),ne===this._time&&!c&&_e===this._cycle)return te!==this._totalTime&&this._onUpdate&&(g||this._callback("onUpdate")),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=ne,this._totalTime=te,this._rawPrevTime=ee,this._cycle=_e,l.lazyTweens.push(this),this._lazy=[E,g],void 0;this._time&&!T?this.ratio=this._ease.getRatio(this._time/K):T&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==ne&&E>=0&&(this._active=!0),te===0&&(this._initted===2&&E>0&&this._init(),this._startAt&&(E>=0?this._startAt.render(E,g,c):b||(b="_dummyGS")),this.vars.onStart&&(this._totalTime!==0||K===0)&&(g||this._callback("onStart"))),S=this._firstPT;S;)S.f?S.t[S.p](S.c*this.ratio+S.s):S.t[S.p]=S.c*this.ratio+S.s,S=S._next;this._onUpdate&&(0>E&&this._startAt&&this._startTime&&this._startAt.render(E,g,c),g||(this._totalTime!==te||T)&&this._callback("onUpdate")),this._cycle!==_e&&(g||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),b&&(!this._gc||c)&&(0>E&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(E,g,c),T&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!g&&this.vars[b]&&this._callback(b),K===0&&this._rawPrevTime===a&&F!==a&&(this._rawPrevTime=0))},s.to=function(E,g,c){return new s(E,g,c)},s.from=function(E,g,c){return c.runBackwards=!0,c.immediateRender=c.immediateRender!=0,new s(E,g,c)},s.fromTo=function(E,g,c,T){return T.startAt=c,T.immediateRender=T.immediateRender!=0&&c.immediateRender!=0,new s(E,g,T)},s.staggerTo=s.allTo=function(E,g,c,T,b,S,U){T=T||0;var f,z,W,F,B=c.delay||0,ne=[],te=function(){c.onComplete&&c.onComplete.apply(c.onCompleteScope||this,arguments),b.apply(U||c.callbackScope||this,S||m)},_e=c.cycle,K=c.startAt&&c.startAt.cycle;for(h(E)||(typeof E=="string"&&(E=t.selector(E)||E),u(E)&&(E=n(E))),E=E||[],0>T&&(E=n(E),E.reverse(),T*=-1),f=E.length-1,W=0;f>=W;W++){z={};for(F in c)z[F]=c[F];if(_e&&r(z,E,W),K){K=z.startAt={};for(F in c.startAt)K[F]=c.startAt[F];r(z.startAt,E,W)}z.delay=B,W===f&&b&&(z.onComplete=te),ne[W]=new s(E[W],g,z),B+=T}return ne},s.staggerFrom=s.allFrom=function(E,g,c,T,b,S,U){return c.runBackwards=!0,c.immediateRender=c.immediateRender!=0,s.staggerTo(E,g,c,T,b,S,U)},s.staggerFromTo=s.allFromTo=function(E,g,c,T,b,S,U,f){return T.startAt=c,T.immediateRender=T.immediateRender!=0&&c.immediateRender!=0,s.staggerTo(E,g,T,b,S,U,f)},s.delayedCall=function(E,g,c,T,b){return new s(g,0,{delay:E,onComplete:g,onCompleteParams:c,callbackScope:T,onReverseComplete:g,onReverseCompleteParams:c,immediateRender:!1,useFrames:b,overwrite:0})},s.set=function(E,g){return new s(E,0,g)},s.isTweening=function(E){return t.getTweensOf(E,!0).length>0};var v=function(E,g){for(var c=[],T=0,b=E._first;b;)b instanceof t?c[T++]=b:(g&&(c[T++]=b),c=c.concat(v(b,g)),T=c.length),b=b._next;return c},_=s.getAllTweens=function(E){return v(i._rootTimeline,E).concat(v(i._rootFramesTimeline,E))};s.killAll=function(E,g,c,T){g==null&&(g=!0),c==null&&(c=!0);var b,S,U,f=_(T!=0),z=f.length,W=g&&c&&T;for(U=0;z>U;U++)S=f[U],(W||S instanceof e||(b=S.target===S.vars.onComplete)&&c||g&&!b)&&(E?S.totalTime(S._reversed?0:S.totalDuration()):S._enabled(!1,!1))},s.killChildTweensOf=function(E,g){if(E!=null){var c,T,b,S,U,f=l.tweenLookup;if(typeof E=="string"&&(E=t.selector(E)||E),u(E)&&(E=n(E)),h(E))for(S=E.length;--S>-1;)s.killChildTweensOf(E[S],g);else{c=[];for(b in f)for(T=f[b].target.parentNode;T;)T===E&&(c=c.concat(f[b].tweens)),T=T.parentNode;for(U=c.length,S=0;U>S;S++)g&&c[S].totalTime(c[S].totalDuration()),c[S]._enabled(!1,!1)}}};var R=function(E,g,c,T){g=g!==!1,c=c!==!1,T=T!==!1;for(var b,S,U=_(T),f=g&&c&&T,z=U.length;--z>-1;)S=U[z],(f||S instanceof e||(b=S.target===S.vars.onComplete)&&c||g&&!b)&&S.paused(E)};return s.pauseAll=function(E,g,c){R(!0,E,g,c)},s.resumeAll=function(E,g,c){R(!1,E,g,c)},s.globalTimeScale=function(E){var g=i._rootTimeline,c=t.ticker.time;return arguments.length?(E=E||a,g._startTime=c-(c-g._startTime)*g._timeScale/E,g=i._rootFramesTimeline,c=t.ticker.frame,g._startTime=c-(c-g._startTime)*g._timeScale/E,g._timeScale=i._rootTimeline._timeScale=E,E):g._timeScale},p.progress=function(E){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&1&this._cycle?1-E:E)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},p.totalProgress=function(E){return arguments.length?this.totalTime(this.totalDuration()*E,!1):this._totalTime/this.totalDuration()},p.time=function(E,g){return arguments.length?(this._dirty&&this.totalDuration(),E>this._duration&&(E=this._duration),this._yoyo&&1&this._cycle?E=this._duration-E+this._cycle*(this._duration+this._repeatDelay):this._repeat!==0&&(E+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(E,g)):this._time},p.duration=function(E){return arguments.length?i.prototype.duration.call(this,E):this._duration},p.totalDuration=function(E){return arguments.length?this._repeat===-1?this:this.duration((E-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},p.repeat=function(E){return arguments.length?(this._repeat=E,this._uncache(!0)):this._repeat},p.repeatDelay=function(E){return arguments.length?(this._repeatDelay=E,this._uncache(!0)):this._repeatDelay},p.yoyo=function(E){return arguments.length?(this._yoyo=E,this):this._yoyo},s},!0),Un._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(i,e,t){var n=function(c){e.call(this,c),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var T,b,S=this.vars;for(b in S)T=S[b],u(T)&&T.join("").indexOf("{self}")!==-1&&(S[b]=this._swapSelfInParams(T));u(S.tweens)&&this.add(S.tweens,0,S.align,S.stagger)},r=1e-10,s=t._internals,a=n._internals={},l=s.isSelector,u=s.isArray,h=s.lazyTweens,p=s.lazyRender,m=Un._gsDefine.globals,v=function(c){var T,b={};for(T in c)b[T]=c[T];return b},_=function(c,T,b){var S,U,f=c.cycle;for(S in f)U=f[S],c[S]=typeof U=="function"?U.call(T[b],b):U[b%U.length];delete c.cycle},R=a.pauseCallback=function(){},E=function(c){var T,b=[],S=c.length;for(T=0;T!==S;b.push(c[T++]));return b},g=n.prototype=new e;return n.version="1.18.0",g.constructor=n,g.kill()._gc=g._forcingPlayhead=g._hasPause=!1,g.to=function(c,T,b,S){var U=b.repeat&&m.TweenMax||t;return T?this.add(new U(c,T,b),S):this.set(c,b,S)},g.from=function(c,T,b,S){return this.add((b.repeat&&m.TweenMax||t).from(c,T,b),S)},g.fromTo=function(c,T,b,S,U){var f=S.repeat&&m.TweenMax||t;return T?this.add(f.fromTo(c,T,b,S),U):this.set(c,S,U)},g.staggerTo=function(c,T,b,S,U,f,z,W){var F,B,ne=new n({onComplete:f,onCompleteParams:z,callbackScope:W,smoothChildTiming:this.smoothChildTiming}),te=b.cycle;for(typeof c=="string"&&(c=t.selector(c)||c),c=c||[],l(c)&&(c=E(c)),S=S||0,0>S&&(c=E(c),c.reverse(),S*=-1),B=0;c.length>B;B++)F=v(b),F.startAt&&(F.startAt=v(F.startAt),F.startAt.cycle&&_(F.startAt,c,B)),te&&_(F,c,B),ne.to(c[B],T,F,B*S);return this.add(ne,U)},g.staggerFrom=function(c,T,b,S,U,f,z,W){return b.immediateRender=b.immediateRender!=0,b.runBackwards=!0,this.staggerTo(c,T,b,S,U,f,z,W)},g.staggerFromTo=function(c,T,b,S,U,f,z,W,F){return S.startAt=b,S.immediateRender=S.immediateRender!=0&&b.immediateRender!=0,this.staggerTo(c,T,S,U,f,z,W,F)},g.call=function(c,T,b,S){return this.add(t.delayedCall(0,c,T,b),S)},g.set=function(c,T,b){return b=this._parseTimeOrLabel(b,0,!0),T.immediateRender==null&&(T.immediateRender=b===this._time&&!this._paused),this.add(new t(c,0,T),b)},n.exportRoot=function(c,T){c=c||{},c.smoothChildTiming==null&&(c.smoothChildTiming=!0);var b,S,U=new n(c),f=U._timeline;for(T==null&&(T=!0),f._remove(U,!0),U._startTime=0,U._rawPrevTime=U._time=U._totalTime=f._time,b=f._first;b;)S=b._next,T&&b instanceof t&&b.target===b.vars.onComplete||U.add(b,b._startTime-b._delay),b=S;return f.add(U,0),U},g.add=function(c,T,b,S){var U,f,z,W,F,B;if(typeof T!="number"&&(T=this._parseTimeOrLabel(T,0,!0,c)),!(c instanceof i)){if(c instanceof Array||c&&c.push&&u(c)){for(b=b||"normal",S=S||0,U=T,f=c.length,z=0;f>z;z++)u(W=c[z])&&(W=new n({tweens:W})),this.add(W,U),typeof W!="string"&&typeof W!="function"&&(b==="sequence"?U=W._startTime+W.totalDuration()/W._timeScale:b==="start"&&(W._startTime-=W.delay())),U+=S;return this._uncache(!0)}if(typeof c=="string")return this.addLabel(c,T);if(typeof c!="function")throw"Cannot add "+c+" into the timeline; it is not a tween, timeline, function, or string.";c=t.delayedCall(0,c)}if(e.prototype.add.call(this,c,T),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(F=this,B=F.rawTime()>c._startTime;F._timeline;)B&&F._timeline.smoothChildTiming?F.totalTime(F._totalTime,!0):F._gc&&F._enabled(!0,!1),F=F._timeline;return this},g.remove=function(c){if(c instanceof i){this._remove(c,!1);var T=c._timeline=c.vars.useFrames?i._rootFramesTimeline:i._rootTimeline;return c._startTime=(c._paused?c._pauseTime:T._time)-(c._reversed?c.totalDuration()-c._totalTime:c._totalTime)/c._timeScale,this}if(c instanceof Array||c&&c.push&&u(c)){for(var b=c.length;--b>-1;)this.remove(c[b]);return this}return typeof c=="string"?this.removeLabel(c):this.kill(null,c)},g._remove=function(c,T){e.prototype._remove.call(this,c,T);var b=this._last;return b?this._time>b._startTime+b._totalDuration/b._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},g.append=function(c,T){return this.add(c,this._parseTimeOrLabel(null,T,!0,c))},g.insert=g.insertMultiple=function(c,T,b,S){return this.add(c,T||0,b,S)},g.appendMultiple=function(c,T,b,S){return this.add(c,this._parseTimeOrLabel(null,T,!0,c),b,S)},g.addLabel=function(c,T){return this._labels[c]=this._parseTimeOrLabel(T),this},g.addPause=function(c,T,b,S){var U=t.delayedCall(0,R,b,S||this);return U.vars.onComplete=U.vars.onReverseComplete=T,U.data="isPause",this._hasPause=!0,this.add(U,c)},g.removeLabel=function(c){return delete this._labels[c],this},g.getLabelTime=function(c){return this._labels[c]!=null?this._labels[c]:-1},g._parseTimeOrLabel=function(c,T,b,S){var U;if(S instanceof i&&S.timeline===this)this.remove(S);else if(S&&(S instanceof Array||S.push&&u(S)))for(U=S.length;--U>-1;)S[U]instanceof i&&S[U].timeline===this&&this.remove(S[U]);if(typeof T=="string")return this._parseTimeOrLabel(T,b&&typeof c=="number"&&this._labels[T]==null?c-this.duration():0,b);if(T=T||0,typeof c!="string"||!isNaN(c)&&this._labels[c]==null)c==null&&(c=this.duration());else{if(U=c.indexOf("="),U===-1)return this._labels[c]==null?b?this._labels[c]=this.duration()+T:T:this._labels[c]+T;T=parseInt(c.charAt(U-1)+"1",10)*Number(c.substr(U+1)),c=U>1?this._parseTimeOrLabel(c.substr(0,U-1),0,b):this.duration()}return Number(c)+T},g.seek=function(c,T){return this.totalTime(typeof c=="number"?c:this._parseTimeOrLabel(c),T!==!1)},g.stop=function(){return this.paused(!0)},g.gotoAndPlay=function(c,T){return this.play(c,T)},g.gotoAndStop=function(c,T){return this.pause(c,T)},g.render=function(c,T,b){this._gc&&this._enabled(!0,!1);var S,U,f,z,W,F,B=this._dirty?this.totalDuration():this._totalDuration,ne=this._time,te=this._startTime,_e=this._timeScale,K=this._paused;if(c>=B)this._totalTime=this._time=B,this._reversed||this._hasPausedChild()||(U=!0,z="onComplete",W=!!this._timeline.autoRemoveChildren,this._duration===0&&(c===0||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==c&&this._first&&(W=!0,this._rawPrevTime>r&&(z="onReverseComplete"))),this._rawPrevTime=this._duration||!T||c||this._rawPrevTime===c?c:r,c=B+1e-4;else if(1e-7>c)if(this._totalTime=this._time=0,(ne!==0||this._duration===0&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>c&&this._rawPrevTime>=0))&&(z="onReverseComplete",U=this._reversed),0>c)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(W=U=!0,z="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(W=!0),this._rawPrevTime=c;else{if(this._rawPrevTime=this._duration||!T||c||this._rawPrevTime===c?c:r,c===0&&U)for(S=this._first;S&&S._startTime===0;)S._duration||(U=!1),S=S._next;c=0,this._initted||(W=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!T){if(c>=ne)for(S=this._first;S&&c>=S._startTime&&!F;)S._duration||S.data!=="isPause"||S.ratio||S._startTime===0&&this._rawPrevTime===0||(F=S),S=S._next;else for(S=this._last;S&&S._startTime>=c&&!F;)S._duration||S.data==="isPause"&&S._rawPrevTime>0&&(F=S),S=S._prev;F&&(this._time=c=F._startTime,this._totalTime=c+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=c}if(this._time!==ne&&this._first||b||W||F){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==ne&&c>0&&(this._active=!0),ne===0&&this.vars.onStart&&this._time!==0&&(T||this._callback("onStart")),this._time>=ne)for(S=this._first;S&&(f=S._next,!this._paused||K);)(S._active||S._startTime<=this._time&&!S._paused&&!S._gc)&&(F===S&&this.pause(),S._reversed?S.render((S._dirty?S.totalDuration():S._totalDuration)-(c-S._startTime)*S._timeScale,T,b):S.render((c-S._startTime)*S._timeScale,T,b)),S=f;else for(S=this._last;S&&(f=S._prev,!this._paused||K);){if(S._active||ne>=S._startTime&&!S._paused&&!S._gc){if(F===S){for(F=S._prev;F&&F.endTime()>this._time;)F.render(F._reversed?F.totalDuration()-(c-F._startTime)*F._timeScale:(c-F._startTime)*F._timeScale,T,b),F=F._prev;F=null,this.pause()}S._reversed?S.render((S._dirty?S.totalDuration():S._totalDuration)-(c-S._startTime)*S._timeScale,T,b):S.render((c-S._startTime)*S._timeScale,T,b)}S=f}this._onUpdate&&(T||(h.length&&p(),this._callback("onUpdate"))),z&&(this._gc||(te===this._startTime||_e!==this._timeScale)&&(this._time===0||B>=this.totalDuration())&&(U&&(h.length&&p(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!T&&this.vars[z]&&this._callback(z)))}},g._hasPausedChild=function(){for(var c=this._first;c;){if(c._paused||c instanceof n&&c._hasPausedChild())return!0;c=c._next}return!1},g.getChildren=function(c,T,b,S){S=S||-9999999999;for(var U=[],f=this._first,z=0;f;)S>f._startTime||(f instanceof t?T!==!1&&(U[z++]=f):(b!==!1&&(U[z++]=f),c!==!1&&(U=U.concat(f.getChildren(!0,T,b)),z=U.length))),f=f._next;return U},g.getTweensOf=function(c,T){var b,S,U=this._gc,f=[],z=0;for(U&&this._enabled(!0,!0),b=t.getTweensOf(c),S=b.length;--S>-1;)(b[S].timeline===this||T&&this._contains(b[S]))&&(f[z++]=b[S]);return U&&this._enabled(!1,!0),f},g.recent=function(){return this._recent},g._contains=function(c){for(var T=c.timeline;T;){if(T===this)return!0;T=T.timeline}return!1},g.shiftChildren=function(c,T,b){b=b||0;for(var S,U=this._first,f=this._labels;U;)U._startTime>=b&&(U._startTime+=c),U=U._next;if(T)for(S in f)f[S]>=b&&(f[S]+=c);return this._uncache(!0)},g._kill=function(c,T){if(!c&&!T)return this._enabled(!1,!1);for(var b=T?this.getTweensOf(T):this.getChildren(!0,!0,!1),S=b.length,U=!1;--S>-1;)b[S]._kill(c,T)&&(U=!0);return U},g.clear=function(c){var T=this.getChildren(!1,!0,!0),b=T.length;for(this._time=this._totalTime=0;--b>-1;)T[b]._enabled(!1,!1);return c!==!1&&(this._labels={}),this._uncache(!0)},g.invalidate=function(){for(var c=this._first;c;)c.invalidate(),c=c._next;return i.prototype.invalidate.call(this)},g._enabled=function(c,T){if(c===this._gc)for(var b=this._first;b;)b._enabled(c,!0),b=b._next;return e.prototype._enabled.call(this,c,T)},g.totalTime=function(){this._forcingPlayhead=!0;var c=i.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,c},g.duration=function(c){return arguments.length?(this.duration()!==0&&c!==0&&this.timeScale(this._duration/c),this):(this._dirty&&this.totalDuration(),this._duration)},g.totalDuration=function(c){if(!arguments.length){if(this._dirty){for(var T,b,S=0,U=this._last,f=999999999999;U;)T=U._prev,U._dirty&&U.totalDuration(),U._startTime>f&&this._sortChildren&&!U._paused?this.add(U,U._startTime-U._delay):f=U._startTime,0>U._startTime&&!U._paused&&(S-=U._startTime,this._timeline.smoothChildTiming&&(this._startTime+=U._startTime/this._timeScale),this.shiftChildren(-U._startTime,!1,-9999999999),f=0),b=U._startTime+U._totalDuration/U._timeScale,b>S&&(S=b),U=T;this._duration=this._totalDuration=S,this._dirty=!1}return this._totalDuration}return this.totalDuration()!==0&&c!==0&&this.timeScale(this._totalDuration/c),this},g.paused=function(c){if(!c)for(var T=this._first,b=this._time;T;)T._startTime===b&&T.data==="isPause"&&(T._rawPrevTime=0),T=T._next;return i.prototype.paused.apply(this,arguments)},g.usesFrames=function(){for(var c=this._timeline;c._timeline;)c=c._timeline;return c===i._rootFramesTimeline},g.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},n},!0),Un._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(i,e,t){var n=function(p){i.call(this,p),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,s=e._internals,a=s.lazyTweens,l=s.lazyRender,u=new t(null,null,1,0),h=n.prototype=new i;return h.constructor=n,h.kill()._gc=!1,n.version="1.18.0",h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},h.addCallback=function(p,m,v,_){return this.add(e.delayedCall(0,p,v,_),m)},h.removeCallback=function(p,m){if(p)if(m==null)this._kill(null,p);else for(var v=this.getTweensOf(p,!1),_=v.length,R=this._parseTimeOrLabel(m);--_>-1;)v[_]._startTime===R&&v[_]._enabled(!1,!1);return this},h.removePause=function(p){return this.removeCallback(i._internals.pauseCallback,p)},h.tweenTo=function(p,m){m=m||{};var v,_,R,E={ease:u,useFrames:this.usesFrames(),immediateRender:!1};for(_ in m)E[_]=m[_];return E.time=this._parseTimeOrLabel(p),v=Math.abs(Number(E.time)-this._time)/this._timeScale||.001,R=new e(this,v,E),E.onStart=function(){R.target.paused(!0),R.vars.time!==R.target.time()&&v===R.duration()&&R.duration(Math.abs(R.vars.time-R.target.time())/R.target._timeScale),m.onStart&&R._callback("onStart")},R},h.tweenFromTo=function(p,m,v){v=v||{},p=this._parseTimeOrLabel(p),v.startAt={onComplete:this.seek,onCompleteParams:[p],callbackScope:this},v.immediateRender=v.immediateRender!==!1;var _=this.tweenTo(m,v);return _.duration(Math.abs(_.vars.time-p)/this._timeScale||.001)},h.render=function(p,m,v){this._gc&&this._enabled(!0,!1);var _,R,E,g,c,T,b,S=this._dirty?this.totalDuration():this._totalDuration,U=this._duration,f=this._time,z=this._totalTime,W=this._startTime,F=this._timeScale,B=this._rawPrevTime,ne=this._paused,te=this._cycle;if(p>=S)this._locked||(this._totalTime=S,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(R=!0,g="onComplete",c=!!this._timeline.autoRemoveChildren,this._duration===0&&(p===0||0>B||B===r)&&B!==p&&this._first&&(c=!0,B>r&&(g="onReverseComplete"))),this._rawPrevTime=this._duration||!m||p||this._rawPrevTime===p?p:r,this._yoyo&&1&this._cycle?this._time=p=0:(this._time=U,p=U+1e-4);else if(1e-7>p)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(f!==0||U===0&&B!==r&&(B>0||0>p&&B>=0)&&!this._locked)&&(g="onReverseComplete",R=this._reversed),0>p)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(c=R=!0,g="onReverseComplete"):B>=0&&this._first&&(c=!0),this._rawPrevTime=p;else{if(this._rawPrevTime=U||!m||p||this._rawPrevTime===p?p:r,p===0&&R)for(_=this._first;_&&_._startTime===0;)_._duration||(R=!1),_=_._next;p=0,this._initted||(c=!0)}else if(U===0&&0>B&&(c=!0),this._time=this._rawPrevTime=p,this._locked||(this._totalTime=p,this._repeat!==0&&(T=U+this._repeatDelay,this._cycle=this._totalTime/T>>0,this._cycle!==0&&this._cycle===this._totalTime/T&&this._cycle--,this._time=this._totalTime-this._cycle*T,this._yoyo&&1&this._cycle&&(this._time=U-this._time),this._time>U?(this._time=U,p=U+1e-4):0>this._time?this._time=p=0:p=this._time)),this._hasPause&&!this._forcingPlayhead&&!m){if(p=this._time,p>=f)for(_=this._first;_&&p>=_._startTime&&!b;)_._duration||_.data!=="isPause"||_.ratio||_._startTime===0&&this._rawPrevTime===0||(b=_),_=_._next;else for(_=this._last;_&&_._startTime>=p&&!b;)_._duration||_.data==="isPause"&&_._rawPrevTime>0&&(b=_),_=_._prev;b&&(this._time=p=b._startTime,this._totalTime=p+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==te&&!this._locked){var _e=this._yoyo&&(1&te)!==0,K=_e===(this._yoyo&&(1&this._cycle)!==0),ee=this._totalTime,le=this._cycle,Me=this._rawPrevTime,me=this._time;if(this._totalTime=te*U,te>this._cycle?_e=!_e:this._totalTime+=U,this._time=f,this._rawPrevTime=U===0?B-1e-4:B,this._cycle=te,this._locked=!0,f=_e?0:U,this.render(f,m,U===0),m||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),K&&(f=_e?U+1e-4:-1e-4,this.render(f,!0,!1)),this._locked=!1,this._paused&&!ne)return;this._time=me,this._totalTime=ee,this._cycle=le,this._rawPrevTime=Me}if(!(this._time!==f&&this._first||v||c||b))return z!==this._totalTime&&this._onUpdate&&(m||this._callback("onUpdate")),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==z&&p>0&&(this._active=!0),z===0&&this.vars.onStart&&this._totalTime!==0&&(m||this._callback("onStart")),this._time>=f)for(_=this._first;_&&(E=_._next,!this._paused||ne);)(_._active||_._startTime<=this._time&&!_._paused&&!_._gc)&&(b===_&&this.pause(),_._reversed?_.render((_._dirty?_.totalDuration():_._totalDuration)-(p-_._startTime)*_._timeScale,m,v):_.render((p-_._startTime)*_._timeScale,m,v)),_=E;else for(_=this._last;_&&(E=_._prev,!this._paused||ne);){if(_._active||f>=_._startTime&&!_._paused&&!_._gc){if(b===_){for(b=_._prev;b&&b.endTime()>this._time;)b.render(b._reversed?b.totalDuration()-(p-b._startTime)*b._timeScale:(p-b._startTime)*b._timeScale,m,v),b=b._prev;b=null,this.pause()}_._reversed?_.render((_._dirty?_.totalDuration():_._totalDuration)-(p-_._startTime)*_._timeScale,m,v):_.render((p-_._startTime)*_._timeScale,m,v)}_=E}this._onUpdate&&(m||(a.length&&l(),this._callback("onUpdate"))),g&&(this._locked||this._gc||(W===this._startTime||F!==this._timeScale)&&(this._time===0||S>=this.totalDuration())&&(R&&(a.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!m&&this.vars[g]&&this._callback(g)))},h.getActive=function(p,m,v){p==null&&(p=!0),m==null&&(m=!0),v==null&&(v=!1);var _,R,E=[],g=this.getChildren(p,m,v),c=0,T=g.length;for(_=0;T>_;_++)R=g[_],R.isActive()&&(E[c++]=R);return E},h.getLabelAfter=function(p){p||p!==0&&(p=this._time);var m,v=this.getLabelsArray(),_=v.length;for(m=0;_>m;m++)if(v[m].time>p)return v[m].name;return null},h.getLabelBefore=function(p){p==null&&(p=this._time);for(var m=this.getLabelsArray(),v=m.length;--v>-1;)if(p>m[v].time)return m[v].name;return null},h.getLabelsArray=function(){var p,m=[],v=0;for(p in this._labels)m[v++]={time:this._labels[p],name:p};return m.sort(function(_,R){return _.time-R.time}),m},h.progress=function(p,m){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&1&this._cycle?1-p:p)+this._cycle*(this._duration+this._repeatDelay),m):this._time/this.duration()},h.totalProgress=function(p,m){return arguments.length?this.totalTime(this.totalDuration()*p,m):this._totalTime/this.totalDuration()},h.totalDuration=function(p){return arguments.length?this._repeat===-1?this:this.duration((p-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(i.prototype.totalDuration.call(this),this._totalDuration=this._repeat===-1?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},h.time=function(p,m){return arguments.length?(this._dirty&&this.totalDuration(),p>this._duration&&(p=this._duration),this._yoyo&&1&this._cycle?p=this._duration-p+this._cycle*(this._duration+this._repeatDelay):this._repeat!==0&&(p+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(p,m)):this._time},h.repeat=function(p){return arguments.length?(this._repeat=p,this._uncache(!0)):this._repeat},h.repeatDelay=function(p){return arguments.length?(this._repeatDelay=p,this._uncache(!0)):this._repeatDelay},h.yoyo=function(p){return arguments.length?(this._yoyo=p,this):this._yoyo},h.currentLabel=function(p){return arguments.length?this.seek(p,!0):this.getLabelBefore(this._time+1e-8)},n},!0),function(){var i=180/Math.PI,e=[],t=[],n=[],r={},s=Un._gsDefine.globals,a=function(c,T,b,S){this.a=c,this.b=T,this.c=b,this.d=S,this.da=S-c,this.ca=b-c,this.ba=T-c},l=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",u=function(c,T,b,S){var U={a:c},f={},z={},W={c:S},F=(c+T)/2,B=(T+b)/2,ne=(b+S)/2,te=(F+B)/2,_e=(B+ne)/2,K=(_e-te)/8;return U.b=F+(c-F)/4,f.b=te+K,U.c=f.a=(U.b+f.b)/2,f.c=z.a=(te+_e)/2,z.b=_e-K,W.b=ne+(S-ne)/4,z.c=W.a=(z.b+W.b)/2,[U,f,z,W]},h=function(c,T,b,S,U){var f,z,W,F,B,ne,te,_e,K,ee,le,Me,me,Ee=c.length-1,Re=0,Be=c[0].a;for(f=0;Ee>f;f++)B=c[Re],z=B.a,W=B.d,F=c[Re+1].d,U?(le=e[f],Me=t[f],me=.25*(Me+le)*T/(S?.5:n[f]||.5),ne=W-(W-z)*(S?.5*T:le!==0?me/le:0),te=W+(F-W)*(S?.5*T:Me!==0?me/Me:0),_e=W-(ne+((te-ne)*(3*le/(le+Me)+.5)/4||0))):(ne=W-.5*(W-z)*T,te=W+.5*(F-W)*T,_e=W-(ne+te)/2),ne+=_e,te+=_e,B.c=K=ne,B.b=f!==0?Be:Be=B.a+.6*(B.c-B.a),B.da=W-z,B.ca=K-z,B.ba=Be-z,b?(ee=u(z,Be,K,W),c.splice(Re,1,ee[0],ee[1],ee[2],ee[3]),Re+=4):Re++,Be=te;B=c[Re],B.b=Be,B.c=Be+.4*(B.d-Be),B.da=B.d-B.a,B.ca=B.c-B.a,B.ba=Be-B.a,b&&(ee=u(B.a,Be,B.c,B.d),c.splice(Re,1,ee[0],ee[1],ee[2],ee[3]))},p=function(c,T,b,S){var U,f,z,W,F,B,ne=[];if(S)for(c=[S].concat(c),f=c.length;--f>-1;)typeof(B=c[f][T])=="string"&&B.charAt(1)==="="&&(c[f][T]=S[T]+Number(B.charAt(0)+B.substr(2)));if(U=c.length-2,0>U)return ne[0]=new a(c[0][T],0,0,c[-1>U?0:1][T]),ne;for(f=0;U>f;f++)z=c[f][T],W=c[f+1][T],ne[f]=new a(z,0,0,W),b&&(F=c[f+2][T],e[f]=(e[f]||0)+(W-z)*(W-z),t[f]=(t[f]||0)+(F-W)*(F-W));return ne[f]=new a(c[f][T],0,0,c[f+1][T]),ne},m=function(c,T,b,S,U,f){var z,W,F,B,ne,te,_e,K,ee={},le=[],Me=f||c[0];U=typeof U=="string"?","+U+",":l,T==null&&(T=1);for(W in c[0])le.push(W);if(c.length>1){for(K=c[c.length-1],_e=!0,z=le.length;--z>-1;)if(W=le[z],Math.abs(Me[W]-K[W])>.05){_e=!1;break}_e&&(c=c.concat(),f&&c.unshift(f),c.push(c[1]),f=c[c.length-3])}for(e.length=t.length=n.length=0,z=le.length;--z>-1;)W=le[z],r[W]=U.indexOf(","+W+",")!==-1,ee[W]=p(c,W,r[W],f);for(z=e.length;--z>-1;)e[z]=Math.sqrt(e[z]),t[z]=Math.sqrt(t[z]);if(!S){for(z=le.length;--z>-1;)if(r[W])for(F=ee[le[z]],te=F.length-1,B=0;te>B;B++)ne=F[B+1].da/t[B]+F[B].da/e[B],n[B]=(n[B]||0)+ne*ne;for(z=n.length;--z>-1;)n[z]=Math.sqrt(n[z])}for(z=le.length,B=b?4:1;--z>-1;)W=le[z],F=ee[W],h(F,T,b,S,r[W]),_e&&(F.splice(0,B),F.splice(F.length-B,B));return ee},v=function(c,T,b){T=T||"soft";var S,U,f,z,W,F,B,ne,te,_e,K,ee={},le=T==="cubic"?3:2,Me=T==="soft",me=[];if(Me&&b&&(c=[b].concat(c)),c==null||le+1>c.length)throw"invalid Bezier data";for(te in c[0])me.push(te);for(F=me.length;--F>-1;){for(te=me[F],ee[te]=W=[],_e=0,ne=c.length,B=0;ne>B;B++)S=b==null?c[B][te]:typeof(K=c[B][te])=="string"&&K.charAt(1)==="="?b[te]+Number(K.charAt(0)+K.substr(2)):Number(K),Me&&B>1&&ne-1>B&&(W[_e++]=(S+W[_e-2])/2),W[_e++]=S;for(ne=_e-le+1,_e=0,B=0;ne>B;B+=le)S=W[B],U=W[B+1],f=W[B+2],z=le===2?0:W[B+3],W[_e++]=K=le===3?new a(S,U,f,z):new a(S,(2*U+S)/3,(2*U+f)/3,f);W.length=_e}return ee},_=function(c,T,b){for(var S,U,f,z,W,F,B,ne,te,_e,K,ee=1/b,le=c.length;--le>-1;)for(_e=c[le],f=_e.a,z=_e.d-f,W=_e.c-f,F=_e.b-f,S=U=0,ne=1;b>=ne;ne++)B=ee*ne,te=1-B,S=U-(U=(B*B*z+3*te*(B*W+te*F))*B),K=le*b+ne-1,T[K]=(T[K]||0)+S*S},R=function(c,T){T=T>>0||6;var b,S,U,f,z=[],W=[],F=0,B=0,ne=T-1,te=[],_e=[];for(b in c)_(c[b],z,T);for(U=z.length,S=0;U>S;S++)F+=Math.sqrt(z[S]),f=S%T,_e[f]=F,f===ne&&(B+=F,f=S/T>>0,te[f]=_e,W[f]=B,F=0,_e=[]);return{length:B,lengths:W,segments:te}},E=Un._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(c,T,b){this._target=c,T instanceof Array&&(T={values:T}),this._func={},this._round={},this._props=[],this._timeRes=T.timeResolution==null?6:parseInt(T.timeResolution,10);var S,U,f,z,W,F=T.values||[],B={},ne=F[0],te=T.autoRotate||b.vars.orientToBezier;this._autoRotate=te?te instanceof Array?te:[["x","y","rotation",te===!0?0:Number(te)||0]]:null;for(S in ne)this._props.push(S);for(f=this._props.length;--f>-1;)S=this._props[f],this._overwriteProps.push(S),U=this._func[S]=typeof c[S]=="function",B[S]=U?c[S.indexOf("set")||typeof c["get"+S.substr(3)]!="function"?S:"get"+S.substr(3)]():parseFloat(c[S]),W||B[S]!==F[0][S]&&(W=B);if(this._beziers=T.type!=="cubic"&&T.type!=="quadratic"&&T.type!=="soft"?m(F,isNaN(T.curviness)?1:T.curviness,!1,T.type==="thruBasic",T.correlate,W):v(F,T.type,B),this._segCount=this._beziers[S].length,this._timeRes){var _e=R(this._beziers,this._timeRes);this._length=_e.length,this._lengths=_e.lengths,this._segments=_e.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(te=this._autoRotate)for(this._initialRotations=[],te[0]instanceof Array||(this._autoRotate=te=[te]),f=te.length;--f>-1;){for(z=0;3>z;z++)S=te[f][z],this._func[S]=typeof c[S]=="function"?c[S.indexOf("set")||typeof c["get"+S.substr(3)]!="function"?S:"get"+S.substr(3)]:!1;S=te[f][2],this._initialRotations[f]=this._func[S]?this._func[S].call(this._target):this._target[S]}return this._startRatio=b.vars.runBackwards?1:0,!0},set:function(c){var T,b,S,U,f,z,W,F,B,ne,te=this._segCount,_e=this._func,K=this._target,ee=c!==this._startRatio;if(this._timeRes){if(B=this._lengths,ne=this._curSeg,c*=this._length,S=this._li,c>this._l2&&te-1>S){for(F=te-1;F>S&&c>=(this._l2=B[++S]););this._l1=B[S-1],this._li=S,this._curSeg=ne=this._segments[S],this._s2=ne[this._s1=this._si=0]}else if(this._l1>c&&S>0){for(;S>0&&(this._l1=B[--S])>=c;);S===0&&this._l1>c?this._l1=0:S++,this._l2=B[S],this._li=S,this._curSeg=ne=this._segments[S],this._s1=ne[(this._si=ne.length-1)-1]||0,this._s2=ne[this._si]}if(T=S,c-=this._l1,S=this._si,c>this._s2&&ne.length-1>S){for(F=ne.length-1;F>S&&c>=(this._s2=ne[++S]););this._s1=ne[S-1],this._si=S}else if(this._s1>c&&S>0){for(;S>0&&(this._s1=ne[--S])>=c;);S===0&&this._s1>c?this._s1=0:S++,this._s2=ne[S],this._si=S}z=(S+(c-this._s1)/(this._s2-this._s1))*this._prec}else T=0>c?0:c>=1?te-1:te*c>>0,z=(c-T*(1/te))*te;for(b=1-z,S=this._props.length;--S>-1;)U=this._props[S],f=this._beziers[U][T],W=(z*z*f.da+3*b*(z*f.ca+b*f.ba))*z+f.a,this._round[U]&&(W=Math.round(W)),_e[U]?K[U](W):K[U]=W;if(this._autoRotate){var le,Me,me,Ee,Re,Be,qe,be=this._autoRotate;for(S=be.length;--S>-1;)U=be[S][2],Be=be[S][3]||0,qe=be[S][4]===!0?1:i,f=this._beziers[be[S][0]],le=this._beziers[be[S][1]],f&&le&&(f=f[T],le=le[T],Me=f.a+(f.b-f.a)*z,Ee=f.b+(f.c-f.b)*z,Me+=(Ee-Me)*z,Ee+=(f.c+(f.d-f.c)*z-Ee)*z,me=le.a+(le.b-le.a)*z,Re=le.b+(le.c-le.b)*z,me+=(Re-me)*z,Re+=(le.c+(le.d-le.c)*z-Re)*z,W=ee?Math.atan2(Re-me,Ee-Me)*qe+Be:this._initialRotations[S],_e[U]?K[U](W):K[U]=W)}}}),g=E.prototype;E.bezierThrough=m,E.cubicToQuadratic=u,E._autoCSS=!0,E.quadraticToCubic=function(c,T,b){return new a(c,(2*T+c)/3,(2*T+b)/3,b)},E._cssRegister=function(){var c=s.CSSPlugin;if(c){var T=c._internals,b=T._parseToProxy,S=T._setPluginRatio,U=T.CSSPropTween;T._registerComplexSpecialProp("bezier",{parser:function(f,z,W,F,B,ne){z instanceof Array&&(z={values:z}),ne=new E;var te,_e,K,ee=z.values,le=ee.length-1,Me=[],me={};if(0>le)return B;for(te=0;le>=te;te++)K=b(f,ee[te],F,B,ne,le!==te),Me[te]=K.end;for(_e in z)me[_e]=z[_e];return me.values=Me,B=new U(f,"bezier",0,0,K.pt,2),B.data=K,B.plugin=ne,B.setRatio=S,me.autoRotate===0&&(me.autoRotate=!0),!me.autoRotate||me.autoRotate instanceof Array||(te=me.autoRotate===!0?0:Number(me.autoRotate),me.autoRotate=K.end.left!=null?[["left","top","rotation",te,!1]]:K.end.x!=null?[["x","y","rotation",te,!1]]:!1),me.autoRotate&&(F._transform||F._enableTransforms(!1),K.autoRotate=F._target._gsTransform),ne._onInitTween(K.proxy,me,F._tween),B}})}},g._roundProps=function(c,T){for(var b=this._overwriteProps,S=b.length;--S>-1;)(c[b[S]]||c.bezier||c.bezierThrough)&&(this._round[b[S]]=T)},g._kill=function(c){var T,b,S=this._props;for(T in this._beziers)if(T in c)for(delete this._beziers[T],delete this._func[T],b=S.length;--b>-1;)S[b]===T&&S.splice(b,1);return this._super._kill.call(this,c)}}(),Un._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(i,e){var t,n,r,s,a=function(){i.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},l=Un._gsDefine.globals,u={},h=a.prototype=new i("css");h.constructor=a,a.version="1.18.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var p,m,v,_,R,E,g=/(?:\d|\-\d|\.\d|\-\.\d)+/g,c=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,T=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,b=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,S=/(?:\d|\-|\+|=|#|\.)*/g,U=/opacity *= *([^)]*)/i,f=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,W=/^(rgb|hsl)/,F=/([A-Z])/g,B=/-([a-z])/gi,ne=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,te=function(A,P){return P.toUpperCase()},_e=/(?:Left|Right|Width)/i,K=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,ee=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,le=/,(?=[^\)]*(?:\(|$))/gi,Me=Math.PI/180,me=180/Math.PI,Ee={},Re=document,Be=function(A){return Re.createElementNS?Re.createElementNS("http://www.w3.org/1999/xhtml",A):Re.createElement(A)},qe=Be("div"),be=Be("img"),Oe=a._internals={_specialProps:u},je=navigator.userAgent,tt=function(){var A=je.indexOf("Android"),P=Be("a");return v=je.indexOf("Safari")!==-1&&je.indexOf("Chrome")===-1&&(A===-1||Number(je.substr(A+8,1))>3),R=v&&6>Number(je.substr(je.indexOf("Version/")+8,1)),_=je.indexOf("Firefox")!==-1,(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(je)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(je))&&(E=parseFloat(RegExp.$1)),P?(P.style.cssText="top:1px;opacity:.55;",/^0.55/.test(P.style.opacity)):!1}(),ht=function(A){return U.test(typeof A=="string"?A:(A.currentStyle?A.currentStyle.filter:A.style.filter)||"")?parseFloat(RegExp.$1)/100:1},gt=function(A){window.console&&console.log(A)},pt="",ft="",_t=function(A,P){P=P||qe;var O,L,C=P.style;if(C[A]!==void 0)return A;for(A=A.charAt(0).toUpperCase()+A.substr(1),O=["O","Moz","ms","Ms","Webkit"],L=5;--L>-1&&C[O[L]+A]===void 0;);return L>=0?(ft=L===3?"ms":O[L],pt="-"+ft.toLowerCase()+"-",ft+A):null},ge=Re.defaultView?Re.defaultView.getComputedStyle:function(){},bt=a.getStyle=function(A,P,O,L,C){var Z;return tt||P!=="opacity"?(!L&&A.style[P]?Z=A.style[P]:(O=O||ge(A))?Z=O[P]||O.getPropertyValue(P)||O.getPropertyValue(P.replace(F,"-$1").toLowerCase()):A.currentStyle&&(Z=A.currentStyle[P]),C==null||Z&&Z!=="none"&&Z!=="auto"&&Z!=="auto auto"?Z:C):ht(A)},at=Oe.convertToPixels=function(A,P,O,L,C){if(L==="px"||!L)return O;if(L==="auto"||!O)return 0;var Z,H,X,se=_e.test(P),fe=A,re=qe.style,we=0>O;if(we&&(O=-O),L==="%"&&P.indexOf("border")!==-1)Z=O/100*(se?A.clientWidth:A.clientHeight);else{if(re.cssText="border:0 solid red;position:"+bt(A,"position")+";line-height:0;",L!=="%"&&fe.appendChild&&L.charAt(0)!=="v"&&L!=="rem")re[se?"borderLeftWidth":"borderTopWidth"]=O+L;else{if(fe=A.parentNode||Re.body,H=fe._gsCache,X=e.ticker.frame,H&&se&&H.time===X)return H.width*O/100;re[se?"width":"height"]=O+L}fe.appendChild(qe),Z=parseFloat(qe[se?"offsetWidth":"offsetHeight"]),fe.removeChild(qe),se&&L==="%"&&a.cacheWidths!==!1&&(H=fe._gsCache=fe._gsCache||{},H.time=X,H.width=100*(Z/O)),Z!==0||C||(Z=at(A,P,O,L,!0))}return we?-Z:Z},yt=Oe.calculateOffset=function(A,P,O){if(bt(A,"position",O)!=="absolute")return 0;var L=P==="left"?"Left":"Top",C=bt(A,"margin"+L,O);return A["offset"+L]-(at(A,P,parseFloat(C),C.replace(S,""))||0)},it=function(A,P){var O,L,C,Z={};if(P=P||ge(A,null))if(O=P.length)for(;--O>-1;)C=P[O],(C.indexOf("-transform")===-1||Ze===C)&&(Z[C.replace(B,te)]=P.getPropertyValue(C));else for(O in P)(O.indexOf("Transform")===-1||He===O)&&(Z[O]=P[O]);else if(P=A.currentStyle||A.style)for(O in P)typeof O=="string"&&Z[O]===void 0&&(Z[O.replace(B,te)]=P[O]);return tt||(Z.opacity=ht(A)),L=ii(A,P,!1),Z.rotation=L.rotation,Z.skewX=L.skewX,Z.scaleX=L.scaleX,Z.scaleY=L.scaleY,Z.x=L.x,Z.y=L.y,Qe&&(Z.z=L.z,Z.rotationX=L.rotationX,Z.rotationY=L.rotationY,Z.scaleZ=L.scaleZ),Z.filters&&delete Z.filters,Z},It=function(A,P,O,L,C){var Z,H,X,se={},fe=A.style;for(H in O)H!=="cssText"&&H!=="length"&&isNaN(H)&&(P[H]!==(Z=O[H])||C&&C[H])&&H.indexOf("Origin")===-1&&(typeof Z=="number"||typeof Z=="string")&&(se[H]=Z!=="auto"||H!=="left"&&H!=="top"?Z!==""&&Z!=="auto"&&Z!=="none"||typeof P[H]!="string"||P[H].replace(b,"")===""?Z:0:yt(A,H),fe[H]!==void 0&&(X=new Y(fe,H,fe[H],X)));if(L)for(H in L)H!=="className"&&(se[H]=L[H]);return{difs:se,firstMPT:X}},vt={width:["Left","Right"],height:["Top","Bottom"]},y=["marginLeft","marginRight","marginTop","marginBottom"],M=function(A,P,O){var L=parseFloat(P==="width"?A.offsetWidth:A.offsetHeight),C=vt[P],Z=C.length;for(O=O||ge(A,null);--Z>-1;)L-=parseFloat(bt(A,"padding"+C[Z],O,!0))||0,L-=parseFloat(bt(A,"border"+C[Z]+"Width",O,!0))||0;return L},N=function(A,P){if(A==="contain"||A==="auto"||A==="auto auto")return A+" ";(A==null||A==="")&&(A="0 0");var O=A.split(" "),L=A.indexOf("left")!==-1?"0%":A.indexOf("right")!==-1?"100%":O[0],C=A.indexOf("top")!==-1?"0%":A.indexOf("bottom")!==-1?"100%":O[1];return C==null?C=L==="center"?"50%":"0":C==="center"&&(C="50%"),(L==="center"||isNaN(parseFloat(L))&&(L+"").indexOf("=")===-1)&&(L="50%"),A=L+" "+C+(O.length>2?" "+O[2]:""),P&&(P.oxp=L.indexOf("%")!==-1,P.oyp=C.indexOf("%")!==-1,P.oxr=L.charAt(1)==="=",P.oyr=C.charAt(1)==="=",P.ox=parseFloat(L.replace(b,"")),P.oy=parseFloat(C.replace(b,"")),P.v=A),P||A},V=function(A,P){return typeof A=="string"&&A.charAt(1)==="="?parseInt(A.charAt(0)+"1",10)*parseFloat(A.substr(2)):parseFloat(A)-parseFloat(P)},J=function(A,P){return A==null?P:typeof A=="string"&&A.charAt(1)==="="?parseInt(A.charAt(0)+"1",10)*parseFloat(A.substr(2))+P:parseFloat(A)},j=function(A,P,O,L){var C,Z,H,X,se,fe=1e-6;return A==null?X=P:typeof A=="number"?X=A:(C=360,Z=A.split("_"),se=A.charAt(1)==="=",H=(se?parseInt(A.charAt(0)+"1",10)*parseFloat(Z[0].substr(2)):parseFloat(Z[0]))*(A.indexOf("rad")===-1?1:me)-(se?0:P),Z.length&&(L&&(L[O]=P+H),A.indexOf("short")!==-1&&(H%=C,H!==H%(C/2)&&(H=0>H?H+C:H-C)),A.indexOf("_cw")!==-1&&0>H?H=(H+9999999999*C)%C-(0|H/C)*C:A.indexOf("ccw")!==-1&&H>0&&(H=(H-9999999999*C)%C-(0|H/C)*C)),X=P+H),fe>X&&X>-fe&&(X=0),X},pe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(A,P,O){return A=0>A?A+1:A>1?A-1:A,0|255*(1>6*A?P+6*(O-P)*A:.5>A?O:2>3*A?P+6*(O-P)*(2/3-A):P)+.5},Pe=a.parseColor=function(A,P){var O,L,C,Z,H,X,se,fe,re,we,Ne;if(A)if(typeof A=="number")O=[A>>16,255&A>>8,255&A];else{if(A.charAt(A.length-1)===","&&(A=A.substr(0,A.length-1)),pe[A])O=pe[A];else if(A.charAt(0)==="#")A.length===4&&(L=A.charAt(1),C=A.charAt(2),Z=A.charAt(3),A="#"+L+L+C+C+Z+Z),A=parseInt(A.substr(1),16),O=[A>>16,255&A>>8,255&A];else if(A.substr(0,3)==="hsl")if(O=Ne=A.match(g),P){if(A.indexOf("=")!==-1)return A.match(c)}else H=Number(O[0])%360/360,X=Number(O[1])/100,se=Number(O[2])/100,C=.5>=se?se*(X+1):se+X-se*X,L=2*se-C,O.length>3&&(O[3]=Number(A[3])),O[0]=ae(H+1/3,L,C),O[1]=ae(H,L,C),O[2]=ae(H-1/3,L,C);else O=A.match(g)||pe.transparent;O[0]=Number(O[0]),O[1]=Number(O[1]),O[2]=Number(O[2]),O.length>3&&(O[3]=Number(O[3]))}else O=pe.black;return P&&!Ne&&(L=O[0]/255,C=O[1]/255,Z=O[2]/255,fe=Math.max(L,C,Z),re=Math.min(L,C,Z),se=(fe+re)/2,fe===re?H=X=0:(we=fe-re,X=se>.5?we/(2-fe-re):we/(fe+re),H=fe===L?(C-Z)/we+(Z>C?6:0):fe===C?(Z-L)/we+2:(L-C)/we+4,H*=60),O[0]=0|H+.5,O[1]=0|100*X+.5,O[2]=0|100*se+.5),O},Ie=function(A,P){var O,L,C,Z=A.match(Ue)||[],H=0,X=Z.length?"":A;for(O=0;Z.length>O;O++)L=Z[O],C=A.substr(H,A.indexOf(L,H)-H),H+=C.length+L.length,L=Pe(L,P),L.length===3&&L.push(1),X+=C+(P?"hsla("+L[0]+","+L[1]+"%,"+L[2]+"%,"+L[3]:"rgba("+L.join(","))+")";return X},Ue="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in pe)Ue+="|"+h+"\\b";Ue=RegExp(Ue+")","gi"),a.colorStringFilter=function(A){var P,O=A[0]+A[1];Ue.lastIndex=0,Ue.test(O)&&(P=O.indexOf("hsl(")!==-1||O.indexOf("hsla(")!==-1,A[0]=Ie(A[0],P),A[1]=Ie(A[1],P))},e.defaultStringFilter||(e.defaultStringFilter=a.colorStringFilter);var ye=function(A,P,O,L){if(A==null)return function(Ne){return Ne};var C,Z=P?(A.match(Ue)||[""])[0]:"",H=A.split(Z).join("").match(T)||[],X=A.substr(0,A.indexOf(H[0])),se=A.charAt(A.length-1)===")"?")":"",fe=A.indexOf(" ")!==-1?" ":",",re=H.length,we=re>0?H[0].replace(g,""):"";return re?C=P?function(Ne){var Fe,Ce,ke,Ve;if(typeof Ne=="number")Ne+=we;else if(L&&le.test(Ne)){for(Ve=Ne.replace(le,"|").split("|"),ke=0;Ve.length>ke;ke++)Ve[ke]=C(Ve[ke]);return Ve.join(",")}if(Fe=(Ne.match(Ue)||[Z])[0],Ce=Ne.split(Fe).join("").match(T)||[],ke=Ce.length,re>ke--)for(;re>++ke;)Ce[ke]=O?Ce[0|(ke-1)/2]:H[ke];return X+Ce.join(fe)+fe+Fe+se+(Ne.indexOf("inset")!==-1?" inset":"")}:function(Ne){var Fe,Ce,ke;if(typeof Ne=="number")Ne+=we;else if(L&&le.test(Ne)){for(Ce=Ne.replace(le,"|").split("|"),ke=0;Ce.length>ke;ke++)Ce[ke]=C(Ce[ke]);return Ce.join(",")}if(Fe=Ne.match(T)||[],ke=Fe.length,re>ke--)for(;re>++ke;)Fe[ke]=O?Fe[0|(ke-1)/2]:H[ke];return X+Fe.join(fe)+se}:function(Ne){return Ne}},ot=function(A){return A=A.split(","),function(P,O,L,C,Z,H,X){var se,fe=(O+"").split(" ");for(X={},se=0;4>se;se++)X[A[se]]=fe[se]=fe[se]||fe[(se-1)/2>>0];return C.parse(P,X,Z,H)}},Y=(Oe._setPluginRatio=function(A){this.plugin.setRatio(A);for(var P,O,L,C,Z=this.data,H=Z.proxy,X=Z.firstMPT,se=1e-6;X;)P=H[X.v],X.r?P=Math.round(P):se>P&&P>-se&&(P=0),X.t[X.p]=P,X=X._next;if(Z.autoRotate&&(Z.autoRotate.rotation=H.rotation),A===1)for(X=Z.firstMPT;X;){if(O=X.t,O.type){if(O.type===1){for(C=O.xs0+O.s+O.xs1,L=1;O.l>L;L++)C+=O["xn"+L]+O["xs"+(L+1)];O.e=C}}else O.e=O.s+O.xs0;X=X._next}},function(A,P,O,L,C){this.t=A,this.p=P,this.v=O,this.r=C,L&&(L._prev=this,this._next=L)}),Se=(Oe._parseToProxy=function(A,P,O,L,C,Z){var H,X,se,fe,re,we=L,Ne={},Fe={},Ce=O._transform,ke=Ee;for(O._transform=null,Ee=P,L=re=O.parse(A,P,L,C),Ee=ke,Z&&(O._transform=Ce,we&&(we._prev=null,we._prev&&(we._prev._next=null)));L&&L!==we;){if(1>=L.type&&(X=L.p,Fe[X]=L.s+L.c,Ne[X]=L.s,Z||(fe=new Y(L,"s",X,fe,L.r),L.c=0),L.type===1))for(H=L.l;--H>0;)se="xn"+H,X=L.p+"_"+se,Fe[X]=L.data[se],Ne[X]=L[se],Z||(fe=new Y(L,se,X,fe,L.rxp[se]));L=L._next}return{proxy:Ne,end:Fe,firstMPT:fe,pt:re}},Oe.CSSPropTween=function(A,P,O,L,C,Z,H,X,se,fe,re){this.t=A,this.p=P,this.s=O,this.c=L,this.n=H||P,A instanceof Se||s.push(this.n),this.r=X,this.type=Z||0,se&&(this.pr=se,t=!0),this.b=fe===void 0?O:fe,this.e=re===void 0?O+L:re,C&&(this._next=C,C._prev=this)}),Ge=function(A,P,O,L,C,Z){var H=new Se(A,P,O,L-O,C,-1,Z);return H.b=O,H.e=H.xs0=L,H},We=a.parseComplex=function(A,P,O,L,C,Z,H,X,se,fe){O=O||Z||"",H=new Se(A,P,0,0,H,fe?2:1,null,!1,X,O,L),L+="";var re,we,Ne,Fe,Ce,ke,Ve,St,rt,st,nt,ze,Ot,Mt=O.split(", ").join(",").split(" "),Je=L.split(", ").join(",").split(" "),hn=Mt.length,Et=p!==!1;for((L.indexOf(",")!==-1||O.indexOf(",")!==-1)&&(Mt=Mt.join(" ").replace(le,", ").split(" "),Je=Je.join(" ").replace(le,", ").split(" "),hn=Mt.length),hn!==Je.length&&(Mt=(Z||"").split(" "),hn=Mt.length),H.plugin=se,H.setRatio=fe,Ue.lastIndex=0,re=0;hn>re;re++)if(Fe=Mt[re],Ce=Je[re],St=parseFloat(Fe),St||St===0)H.appendXtra("",St,V(Ce,St),Ce.replace(c,""),Et&&Ce.indexOf("px")!==-1,!0);else if(C&&Ue.test(Fe))ze=Ce.charAt(Ce.length-1)===","?"),":")",Ot=Ce.indexOf("hsl")!==-1&&tt,Fe=Pe(Fe,Ot),Ce=Pe(Ce,Ot),rt=Fe.length+Ce.length>6,rt&&!tt&&Ce[3]===0?(H["xs"+H.l]+=H.l?" transparent":"transparent",H.e=H.e.split(Je[re]).join("transparent")):(tt||(rt=!1),Ot?H.appendXtra(rt?"hsla(":"hsl(",Fe[0],V(Ce[0],Fe[0]),",",!1,!0).appendXtra("",Fe[1],V(Ce[1],Fe[1]),"%,",!1).appendXtra("",Fe[2],V(Ce[2],Fe[2]),rt?"%,":"%"+ze,!1):H.appendXtra(rt?"rgba(":"rgb(",Fe[0],Ce[0]-Fe[0],",",!0,!0).appendXtra("",Fe[1],Ce[1]-Fe[1],",",!0).appendXtra("",Fe[2],Ce[2]-Fe[2],rt?",":ze,!0),rt&&(Fe=4>Fe.length?1:Fe[3],H.appendXtra("",Fe,(4>Ce.length?1:Ce[3])-Fe,ze,!1))),Ue.lastIndex=0;else if(ke=Fe.match(g)){if(Ve=Ce.match(c),!Ve||Ve.length!==ke.length)return H;for(Ne=0,we=0;ke.length>we;we++)nt=ke[we],st=Fe.indexOf(nt,Ne),H.appendXtra(Fe.substr(Ne,st-Ne),Number(nt),V(Ve[we],nt),"",Et&&Fe.substr(st+nt.length,2)==="px",we===0),Ne=st+nt.length;H["xs"+H.l]+=Fe.substr(Ne)}else H["xs"+H.l]+=H.l?" "+Fe:Fe;if(L.indexOf("=")!==-1&&H.data){for(ze=H.xs0+H.data.s,re=1;H.l>re;re++)ze+=H["xs"+re]+H.data["xn"+re];H.e=ze+H["xs"+re]}return H.l||(H.type=-1,H.xs0=H.e),H.xfirst||H},$e=9;for(h=Se.prototype,h.l=h.pr=0;--$e>0;)h["xn"+$e]=0,h["xs"+$e]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(A,P,O,L,C,Z){var H=this,X=H.l;return H["xs"+X]+=Z&&X?" "+A:A||"",O||X===0||H.plugin?(H.l++,H.type=H.setRatio?2:1,H["xs"+H.l]=L||"",X>0?(H.data["xn"+X]=P+O,H.rxp["xn"+X]=C,H["xn"+X]=P,H.plugin||(H.xfirst=new Se(H,"xn"+X,P,O,H.xfirst||H,0,H.n,C,H.pr),H.xfirst.xs0=0),H):(H.data={s:P+O},H.rxp={},H.s=P,H.c=O,H.r=C,H)):(H["xs"+X]+=P+(L||""),H)};var Lt=function(A,P){P=P||{},this.p=P.prefix&&_t(A)||A,u[A]=u[this.p]=this,this.format=P.formatter||ye(P.defaultValue,P.color,P.collapsible,P.multi),P.parser&&(this.parse=P.parser),this.clrs=P.color,this.multi=P.multi,this.keyword=P.keyword,this.dflt=P.defaultValue,this.pr=P.priority||0},dt=Oe._registerComplexSpecialProp=function(A,P,O){typeof P!="object"&&(P={parser:O});var L,C,Z=A.split(","),H=P.defaultValue;for(O=O||[H],L=0;Z.length>L;L++)P.prefix=L===0&&P.prefix,P.defaultValue=O[L]||H,C=new Lt(Z[L],P)},Dt=function(A){if(!u[A]){var P=A.charAt(0).toUpperCase()+A.substr(1)+"Plugin";dt(A,{parser:function(O,L,C,Z,H,X,se){var fe=l.com.greensock.plugins[P];return fe?(fe._cssRegister(),u[C].parse(O,L,C,Z,H,X,se)):(gt("Error: "+P+" js file not loaded."),H)}})}};h=Lt.prototype,h.parseComplex=function(A,P,O,L,C,Z){var H,X,se,fe,re,we,Ne=this.keyword;if(this.multi&&(le.test(O)||le.test(P)?(X=P.replace(le,"|").split("|"),se=O.replace(le,"|").split("|")):Ne&&(X=[P],se=[O])),se){for(fe=se.length>X.length?se.length:X.length,H=0;fe>H;H++)P=X[H]=X[H]||this.dflt,O=se[H]=se[H]||this.dflt,Ne&&(re=P.indexOf(Ne),we=O.indexOf(Ne),re!==we&&(we===-1?X[H]=X[H].split(Ne).join(""):re===-1&&(X[H]+=" "+Ne)));P=X.join(", "),O=se.join(", ")}return We(A,this.p,P,O,this.clrs,this.dflt,L,this.pr,C,Z)},h.parse=function(A,P,O,L,C,Z){return this.parseComplex(A.style,this.format(bt(A,this.p,r,!1,this.dflt)),this.format(P),C,Z)},a.registerSpecialProp=function(A,P,O){dt(A,{parser:function(L,C,Z,H,X,se){var fe=new Se(L,Z,0,0,X,2,Z,!1,O);return fe.plugin=se,fe.setRatio=P(L,C,H._tween,Z),fe},priority:O})},a.useSVGTransformAttr=v||_;var Xe,oe="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),He=_t("transform"),Ze=pt+"transform",ut=_t("transformOrigin"),Qe=_t("perspective")!==null,Nt=Oe.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Qe?a.defaultForce3D||"auto":!1},Xt=window.SVGElement,un=function(A,P,O){var L,C=Re.createElementNS("http://www.w3.org/2000/svg",A),Z=/([a-z])([A-Z])/g;for(L in O)C.setAttributeNS(null,L.replace(Z,"$1-$2").toLowerCase(),O[L]);return P.appendChild(C),C},yn=Re.documentElement,qt=function(){var A,P,O,L=E||/Android/i.test(je)&&!window.chrome;return Re.createElementNS&&!L&&(A=un("svg",yn),P=un("rect",A,{width:100,height:50,x:100}),O=P.getBoundingClientRect().width,P.style[ut]="50% 50%",P.style[He]="scaleX(0.5)",L=O===P.getBoundingClientRect().width&&!(_&&Qe),yn.removeChild(A)),L}(),ln=function(A,P,O,L,C){var Z,H,X,se,fe,re,we,Ne,Fe,Ce,ke,Ve,St,rt,st=A._gsTransform,nt=ls(A,!0);st&&(St=st.xOrigin,rt=st.yOrigin),(!L||2>(Z=L.split(" ")).length)&&(we=A.getBBox(),P=N(P).split(" "),Z=[(P[0].indexOf("%")!==-1?parseFloat(P[0])/100*we.width:parseFloat(P[0]))+we.x,(P[1].indexOf("%")!==-1?parseFloat(P[1])/100*we.height:parseFloat(P[1]))+we.y]),O.xOrigin=se=parseFloat(Z[0]),O.yOrigin=fe=parseFloat(Z[1]),L&&nt!==gi&&(re=nt[0],we=nt[1],Ne=nt[2],Fe=nt[3],Ce=nt[4],ke=nt[5],Ve=re*Fe-we*Ne,H=se*(Fe/Ve)+fe*(-Ne/Ve)+(Ne*ke-Fe*Ce)/Ve,X=se*(-we/Ve)+fe*(re/Ve)-(re*ke-we*Ce)/Ve,se=O.xOrigin=Z[0]=H,fe=O.yOrigin=Z[1]=X),st&&(C||C!==!1&&a.defaultSmoothOrigin!==!1?(H=se-St,X=fe-rt,st.xOffset+=H*nt[0]+X*nt[2]-H,st.yOffset+=H*nt[1]+X*nt[3]-X):st.xOffset=st.yOffset=0),A.setAttribute("data-svg-origin",Z.join(" "))},Fn=function(A){return!!(Xt&&typeof A.getBBox=="function"&&A.getCTM&&(!A.parentNode||A.parentNode.getBBox&&A.parentNode.getCTM))},gi=[1,0,0,1,0,0],ls=function(A,P){var O,L,C,Z,H,X=A._gsTransform||new Nt,se=1e5;if(He?L=bt(A,Ze,null,!0):A.currentStyle&&(L=A.currentStyle.filter.match(K),L=L&&L.length===4?[L[0].substr(4),Number(L[2].substr(4)),Number(L[1].substr(4)),L[3].substr(4),X.x||0,X.y||0].join(","):""),O=!L||L==="none"||L==="matrix(1, 0, 0, 1, 0, 0)",(X.svg||A.getBBox&&Fn(A))&&(O&&(A.style[He]+"").indexOf("matrix")!==-1&&(L=A.style[He],O=0),C=A.getAttribute("transform"),O&&C&&(C.indexOf("matrix")!==-1?(L=C,O=0):C.indexOf("translate")!==-1&&(L="matrix(1,0,0,1,"+C.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",O=0))),O)return gi;for(C=(L||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],$e=C.length;--$e>-1;)Z=Number(C[$e]),C[$e]=(H=Z-(Z|=0))?(0|H*se+(0>H?-.5:.5))/se+Z:Z;return P&&C.length>6?[C[0],C[1],C[4],C[5],C[12],C[13]]:C},ii=Oe.getTransform=function(A,P,O,L){if(A._gsTransform&&O&&!L)return A._gsTransform;var C,Z,H,X,se,fe,re=O?A._gsTransform||new Nt:new Nt,we=0>re.scaleX,Ne=2e-5,Fe=1e5,Ce=Qe&&(parseFloat(bt(A,ut,P,!1,"0 0 0").split(" ")[2])||re.zOrigin)||0,ke=parseFloat(a.defaultTransformPerspective)||0;if(re.svg=!(!A.getBBox||!Fn(A)),re.svg&&(ln(A,bt(A,ut,r,!1,"50% 50%")+"",re,A.getAttribute("data-svg-origin")),Xe=a.useSVGTransformAttr||qt),C=ls(A),C!==gi){if(C.length===16){var Ve,St,rt,st,nt,ze=C[0],Ot=C[1],Mt=C[2],Je=C[3],hn=C[4],Et=C[5],En=C[6],Ri=C[7],Yt=C[8],nn=C[9],rn=C[10],An=C[12],Rn=C[13],pn=C[14],fn=C[11],tn=Math.atan2(En,rn);re.zOrigin&&(pn=-re.zOrigin,An=Yt*pn-C[12],Rn=nn*pn-C[13],pn=rn*pn+re.zOrigin-C[14]),re.rotationX=tn*me,tn&&(st=Math.cos(-tn),nt=Math.sin(-tn),Ve=hn*st+Yt*nt,St=Et*st+nn*nt,rt=En*st+rn*nt,Yt=hn*-nt+Yt*st,nn=Et*-nt+nn*st,rn=En*-nt+rn*st,fn=Ri*-nt+fn*st,hn=Ve,Et=St,En=rt),tn=Math.atan2(Yt,rn),re.rotationY=tn*me,tn&&(st=Math.cos(-tn),nt=Math.sin(-tn),Ve=ze*st-Yt*nt,St=Ot*st-nn*nt,rt=Mt*st-rn*nt,nn=Ot*nt+nn*st,rn=Mt*nt+rn*st,fn=Je*nt+fn*st,ze=Ve,Ot=St,Mt=rt),tn=Math.atan2(Ot,ze),re.rotation=tn*me,tn&&(st=Math.cos(-tn),nt=Math.sin(-tn),ze=ze*st+hn*nt,St=Ot*st+Et*nt,Et=Ot*-nt+Et*st,En=Mt*-nt+En*st,Ot=St),re.rotationX&&Math.abs(re.rotationX)+Math.abs(re.rotation)>359.9&&(re.rotationX=re.rotation=0,re.rotationY+=180),re.scaleX=(0|Math.sqrt(ze*ze+Ot*Ot)*Fe+.5)/Fe,re.scaleY=(0|Math.sqrt(Et*Et+nn*nn)*Fe+.5)/Fe,re.scaleZ=(0|Math.sqrt(En*En+rn*rn)*Fe+.5)/Fe,re.skewX=0,re.perspective=fn?1/(0>fn?-fn:fn):0,re.x=An,re.y=Rn,re.z=pn,re.svg&&(re.x-=re.xOrigin-(re.xOrigin*ze-re.yOrigin*hn),re.y-=re.yOrigin-(re.yOrigin*Ot-re.xOrigin*Et))}else if(!(Qe&&!L&&C.length&&re.x===C[4]&&re.y===C[5]&&(re.rotationX||re.rotationY)||re.x!==void 0&&bt(A,"display",P)==="none")){var zr=C.length>=6,_i=zr?C[0]:1,fr=C[1]||0,Wi=C[2]||0,dr=zr?C[3]:1;re.x=C[4]||0,re.y=C[5]||0,H=Math.sqrt(_i*_i+fr*fr),X=Math.sqrt(dr*dr+Wi*Wi),se=_i||fr?Math.atan2(fr,_i)*me:re.rotation||0,fe=Wi||dr?Math.atan2(Wi,dr)*me+se:re.skewX||0,Math.abs(fe)>90&&270>Math.abs(fe)&&(we?(H*=-1,fe+=0>=se?180:-180,se+=0>=se?180:-180):(X*=-1,fe+=0>=fe?180:-180)),re.scaleX=H,re.scaleY=X,re.rotation=se,re.skewX=fe,Qe&&(re.rotationX=re.rotationY=re.z=0,re.perspective=ke,re.scaleZ=1),re.svg&&(re.x-=re.xOrigin-(re.xOrigin*_i+re.yOrigin*Wi),re.y-=re.yOrigin-(re.xOrigin*fr+re.yOrigin*dr))}re.zOrigin=Ce;for(Z in re)Ne>re[Z]&&re[Z]>-Ne&&(re[Z]=0)}return O&&(A._gsTransform=re,re.svg&&(Xe&&A.style[He]?e.delayedCall(.001,function(){Gi(A.style,He)}):!Xe&&A.getAttribute("transform")&&e.delayedCall(.001,function(){A.removeAttribute("transform")}))),re},cs=function(A){var P,O,L=this.data,C=-L.rotation*Me,Z=C+L.skewX*Me,H=1e5,X=(0|Math.cos(C)*L.scaleX*H)/H,se=(0|Math.sin(C)*L.scaleX*H)/H,fe=(0|Math.sin(Z)*-L.scaleY*H)/H,re=(0|Math.cos(Z)*L.scaleY*H)/H,we=this.t.style,Ne=this.t.currentStyle;if(Ne){O=se,se=-fe,fe=-O,P=Ne.filter,we.filter="";var Fe,Ce,ke=this.t.offsetWidth,Ve=this.t.offsetHeight,St=Ne.position!=="absolute",rt="progid:DXImageTransform.Microsoft.Matrix(M11="+X+", M12="+se+", M21="+fe+", M22="+re,st=L.x+ke*L.xPercent/100,nt=L.y+Ve*L.yPercent/100;if(L.ox!=null&&(Fe=(L.oxp?.01*ke*L.ox:L.ox)-ke/2,Ce=(L.oyp?.01*Ve*L.oy:L.oy)-Ve/2,st+=Fe-(Fe*X+Ce*se),nt+=Ce-(Fe*fe+Ce*re)),St?(Fe=ke/2,Ce=Ve/2,rt+=", Dx="+(Fe-(Fe*X+Ce*se)+st)+", Dy="+(Ce-(Fe*fe+Ce*re)+nt)+")"):rt+=", sizingMethod='auto expand')",we.filter=P.indexOf("DXImageTransform.Microsoft.Matrix(")!==-1?P.replace(ee,rt):rt+" "+P,(A===0||A===1)&&X===1&&se===0&&fe===0&&re===1&&(St&&rt.indexOf("Dx=0, Dy=0")===-1||U.test(P)&&parseFloat(RegExp.$1)!==100||P.indexOf(P.indexOf("Alpha"))===-1&&we.removeAttribute("filter")),!St){var ze,Ot,Mt,Je=8>E?1:-1;for(Fe=L.ieOffsetX||0,Ce=L.ieOffsetY||0,L.ieOffsetX=Math.round((ke-((0>X?-X:X)*ke+(0>se?-se:se)*Ve))/2+st),L.ieOffsetY=Math.round((Ve-((0>re?-re:re)*Ve+(0>fe?-fe:fe)*ke))/2+nt),$e=0;4>$e;$e++)Ot=y[$e],ze=Ne[Ot],O=ze.indexOf("px")!==-1?parseFloat(ze):at(this.t,Ot,parseFloat(ze),ze.replace(S,""))||0,Mt=O!==L[Ot]?2>$e?-L.ieOffsetX:-L.ieOffsetY:2>$e?Fe-L.ieOffsetX:Ce-L.ieOffsetY,we[Ot]=(L[Ot]=Math.round(O-Mt*($e===0||$e===2?1:Je)))+"px"}}},Vi=Oe.set3DTransformRatio=Oe.setTransformRatio=function(A){var P,O,L,C,Z,H,X,se,fe,re,we,Ne,Fe,Ce,ke,Ve,St,rt,st,nt,ze,Ot,Mt,Je=this.data,hn=this.t.style,Et=Je.rotation,En=Je.rotationX,Ri=Je.rotationY,Yt=Je.scaleX,nn=Je.scaleY,rn=Je.scaleZ,An=Je.x,Rn=Je.y,pn=Je.z,fn=Je.svg,tn=Je.perspective,zr=Je.force3D;if(!(((A!==1&&A!==0||zr!=="auto"||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&zr||pn||tn||Ri||En)&&(!Xe||!fn)&&Qe))return Et||Je.skewX||fn?(Et*=Me,Ot=Je.skewX*Me,Mt=1e5,P=Math.cos(Et)*Yt,C=Math.sin(Et)*Yt,O=Math.sin(Et-Ot)*-nn,Z=Math.cos(Et-Ot)*nn,Ot&&Je.skewType==="simple"&&(St=Math.tan(Ot),St=Math.sqrt(1+St*St),O*=St,Z*=St,Je.skewY&&(P*=St,C*=St)),fn&&(An+=Je.xOrigin-(Je.xOrigin*P+Je.yOrigin*O)+Je.xOffset,Rn+=Je.yOrigin-(Je.xOrigin*C+Je.yOrigin*Z)+Je.yOffset,Xe&&(Je.xPercent||Je.yPercent)&&(Ce=this.t.getBBox(),An+=.01*Je.xPercent*Ce.width,Rn+=.01*Je.yPercent*Ce.height),Ce=1e-6,Ce>An&&An>-Ce&&(An=0),Ce>Rn&&Rn>-Ce&&(Rn=0)),st=(0|P*Mt)/Mt+","+(0|C*Mt)/Mt+","+(0|O*Mt)/Mt+","+(0|Z*Mt)/Mt+","+An+","+Rn+")",fn&&Xe?this.t.setAttribute("transform","matrix("+st):hn[He]=(Je.xPercent||Je.yPercent?"translate("+Je.xPercent+"%,"+Je.yPercent+"%) matrix(":"matrix(")+st):hn[He]=(Je.xPercent||Je.yPercent?"translate("+Je.xPercent+"%,"+Je.yPercent+"%) matrix(":"matrix(")+Yt+",0,0,"+nn+","+An+","+Rn+")",void 0;if(_&&(Ce=1e-4,Ce>Yt&&Yt>-Ce&&(Yt=rn=2e-5),Ce>nn&&nn>-Ce&&(nn=rn=2e-5),!tn||Je.z||Je.rotationX||Je.rotationY||(tn=0)),Et||Je.skewX)Et*=Me,ke=P=Math.cos(Et),Ve=C=Math.sin(Et),Je.skewX&&(Et-=Je.skewX*Me,ke=Math.cos(Et),Ve=Math.sin(Et),Je.skewType==="simple"&&(St=Math.tan(Je.skewX*Me),St=Math.sqrt(1+St*St),ke*=St,Ve*=St,Je.skewY&&(P*=St,C*=St))),O=-Ve,Z=ke;else{if(!(Ri||En||rn!==1||tn||fn))return hn[He]=(Je.xPercent||Je.yPercent?"translate("+Je.xPercent+"%,"+Je.yPercent+"%) translate3d(":"translate3d(")+An+"px,"+Rn+"px,"+pn+"px)"+(Yt!==1||nn!==1?" scale("+Yt+","+nn+")":""),void 0;P=Z=1,O=C=0}fe=1,L=H=X=se=re=we=0,Ne=tn?-1/tn:0,Fe=Je.zOrigin,Ce=1e-6,nt=",",ze="0",Et=Ri*Me,Et&&(ke=Math.cos(Et),Ve=Math.sin(Et),X=-Ve,re=Ne*-Ve,L=P*Ve,H=C*Ve,fe=ke,Ne*=ke,P*=ke,C*=ke),Et=En*Me,Et&&(ke=Math.cos(Et),Ve=Math.sin(Et),St=O*ke+L*Ve,rt=Z*ke+H*Ve,se=fe*Ve,we=Ne*Ve,L=O*-Ve+L*ke,H=Z*-Ve+H*ke,fe*=ke,Ne*=ke,O=St,Z=rt),rn!==1&&(L*=rn,H*=rn,fe*=rn,Ne*=rn),nn!==1&&(O*=nn,Z*=nn,se*=nn,we*=nn),Yt!==1&&(P*=Yt,C*=Yt,X*=Yt,re*=Yt),(Fe||fn)&&(Fe&&(An+=L*-Fe,Rn+=H*-Fe,pn+=fe*-Fe+Fe),fn&&(An+=Je.xOrigin-(Je.xOrigin*P+Je.yOrigin*O)+Je.xOffset,Rn+=Je.yOrigin-(Je.xOrigin*C+Je.yOrigin*Z)+Je.yOffset),Ce>An&&An>-Ce&&(An=ze),Ce>Rn&&Rn>-Ce&&(Rn=ze),Ce>pn&&pn>-Ce&&(pn=0)),st=Je.xPercent||Je.yPercent?"translate("+Je.xPercent+"%,"+Je.yPercent+"%) matrix3d(":"matrix3d(",st+=(Ce>P&&P>-Ce?ze:P)+nt+(Ce>C&&C>-Ce?ze:C)+nt+(Ce>X&&X>-Ce?ze:X),st+=nt+(Ce>re&&re>-Ce?ze:re)+nt+(Ce>O&&O>-Ce?ze:O)+nt+(Ce>Z&&Z>-Ce?ze:Z),En||Ri?(st+=nt+(Ce>se&&se>-Ce?ze:se)+nt+(Ce>we&&we>-Ce?ze:we)+nt+(Ce>L&&L>-Ce?ze:L),st+=nt+(Ce>H&&H>-Ce?ze:H)+nt+(Ce>fe&&fe>-Ce?ze:fe)+nt+(Ce>Ne&&Ne>-Ce?ze:Ne)+nt):st+=",0,0,0,0,1,0,",st+=An+nt+Rn+nt+pn+nt+(tn?1+-pn/tn:1)+")",hn[He]=st};h=Nt.prototype,h.x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=h.xOffset=h.yOffset=0,h.scaleX=h.scaleY=h.scaleZ=1,dt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(A,P,O,L,C,Z,H){if(L._lastParsedTransform===H)return C;L._lastParsedTransform=H;var X,se,fe,re,we,Ne,Fe,Ce,ke,Ve,St=A._gsTransform,rt=A.style,st=1e-6,nt=oe.length,ze=H,Ot={},Mt="transformOrigin";if(H.display?(re=bt(A,"display"),rt.display="block",X=ii(A,r,!0,H.parseTransform),rt.display=re):X=ii(A,r,!0,H.parseTransform),L._transform=X,typeof ze.transform=="string"&&He)re=qe.style,re[He]=ze.transform,re.display="block",re.position="absolute",Re.body.appendChild(qe),se=ii(qe,null,!1),Re.body.removeChild(qe),se.perspective||(se.perspective=X.perspective),ze.xPercent!=null&&(se.xPercent=J(ze.xPercent,X.xPercent)),ze.yPercent!=null&&(se.yPercent=J(ze.yPercent,X.yPercent));else if(typeof ze=="object"){if(se={scaleX:J(ze.scaleX!=null?ze.scaleX:ze.scale,X.scaleX),scaleY:J(ze.scaleY!=null?ze.scaleY:ze.scale,X.scaleY),scaleZ:J(ze.scaleZ,X.scaleZ),x:J(ze.x,X.x),y:J(ze.y,X.y),z:J(ze.z,X.z),xPercent:J(ze.xPercent,X.xPercent),yPercent:J(ze.yPercent,X.yPercent),perspective:J(ze.transformPerspective,X.perspective)},Ce=ze.directionalRotation,Ce!=null)if(typeof Ce=="object")for(re in Ce)ze[re]=Ce[re];else ze.rotation=Ce;typeof ze.x=="string"&&ze.x.indexOf("%")!==-1&&(se.x=0,se.xPercent=J(ze.x,X.xPercent)),typeof ze.y=="string"&&ze.y.indexOf("%")!==-1&&(se.y=0,se.yPercent=J(ze.y,X.yPercent)),se.rotation=j("rotation"in ze?ze.rotation:"shortRotation"in ze?ze.shortRotation+"_short":"rotationZ"in ze?ze.rotationZ:X.rotation,X.rotation,"rotation",Ot),Qe&&(se.rotationX=j("rotationX"in ze?ze.rotationX:"shortRotationX"in ze?ze.shortRotationX+"_short":X.rotationX||0,X.rotationX,"rotationX",Ot),se.rotationY=j("rotationY"in ze?ze.rotationY:"shortRotationY"in ze?ze.shortRotationY+"_short":X.rotationY||0,X.rotationY,"rotationY",Ot)),se.skewX=ze.skewX==null?X.skewX:j(ze.skewX,X.skewX),se.skewY=ze.skewY==null?X.skewY:j(ze.skewY,X.skewY),(fe=se.skewY-X.skewY)&&(se.skewX+=fe,se.rotation+=fe)}for(Qe&&ze.force3D!=null&&(X.force3D=ze.force3D,Fe=!0),X.skewType=ze.skewType||X.skewType||a.defaultSkewType,Ne=X.force3D||X.z||X.rotationX||X.rotationY||se.z||se.rotationX||se.rotationY||se.perspective,Ne||ze.scale==null||(se.scaleZ=1);--nt>-1;)O=oe[nt],we=se[O]-X[O],(we>st||-st>we||ze[O]!=null||Ee[O]!=null)&&(Fe=!0,C=new Se(X,O,X[O],we,C),O in Ot&&(C.e=Ot[O]),C.xs0=0,C.plugin=Z,L._overwriteProps.push(C.n));return we=ze.transformOrigin,X.svg&&(we||ze.svgOrigin)&&(ke=X.xOffset,Ve=X.yOffset,ln(A,N(we),se,ze.svgOrigin,ze.smoothOrigin),C=Ge(X,"xOrigin",(St?X:se).xOrigin,se.xOrigin,C,Mt),C=Ge(X,"yOrigin",(St?X:se).yOrigin,se.yOrigin,C,Mt),(ke!==X.xOffset||Ve!==X.yOffset)&&(C=Ge(X,"xOffset",St?ke:X.xOffset,X.xOffset,C,Mt),C=Ge(X,"yOffset",St?Ve:X.yOffset,X.yOffset,C,Mt)),we=Xe?null:"0px 0px"),(we||Qe&&Ne&&X.zOrigin)&&(He?(Fe=!0,O=ut,we=(we||bt(A,O,r,!1,"50% 50%"))+"",C=new Se(rt,O,0,0,C,-1,Mt),C.b=rt[O],C.plugin=Z,Qe?(re=X.zOrigin,we=we.split(" "),X.zOrigin=(we.length>2&&(re===0||we[2]!=="0px")?parseFloat(we[2]):re)||0,C.xs0=C.e=we[0]+" "+(we[1]||"50%")+" 0px",C=new Se(X,"zOrigin",0,0,C,-1,C.n),C.b=re,C.xs0=C.e=X.zOrigin):C.xs0=C.e=we):N(we+"",X)),Fe&&(L._transformType=X.svg&&Xe||!Ne&&this._transformType!==3?2:3),C},prefix:!0}),dt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),dt("borderRadius",{defaultValue:"0px",parser:function(A,P,O,L,C){P=this.format(P);var Z,H,X,se,fe,re,we,Ne,Fe,Ce,ke,Ve,St,rt,st,nt,ze=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],Ot=A.style;for(Fe=parseFloat(A.offsetWidth),Ce=parseFloat(A.offsetHeight),Z=P.split(" "),H=0;ze.length>H;H++)this.p.indexOf("border")&&(ze[H]=_t(ze[H])),fe=se=bt(A,ze[H],r,!1,"0px"),fe.indexOf(" ")!==-1&&(se=fe.split(" "),fe=se[0],se=se[1]),re=X=Z[H],we=parseFloat(fe),Ve=fe.substr((we+"").length),St=re.charAt(1)==="=",St?(Ne=parseInt(re.charAt(0)+"1",10),re=re.substr(2),Ne*=parseFloat(re),ke=re.substr((Ne+"").length-(0>Ne?1:0))||""):(Ne=parseFloat(re),ke=re.substr((Ne+"").length)),ke===""&&(ke=n[O]||Ve),ke!==Ve&&(rt=at(A,"borderLeft",we,Ve),st=at(A,"borderTop",we,Ve),ke==="%"?(fe=100*(rt/Fe)+"%",se=100*(st/Ce)+"%"):ke==="em"?(nt=at(A,"borderLeft",1,"em"),fe=rt/nt+"em",se=st/nt+"em"):(fe=rt+"px",se=st+"px"),St&&(re=parseFloat(fe)+Ne+ke,X=parseFloat(se)+Ne+ke)),C=We(Ot,ze[H],fe+" "+se,re+" "+X,!1,"0px",C);return C},prefix:!0,formatter:ye("0px 0px 0px 0px",!1,!0)}),dt("backgroundPosition",{defaultValue:"0 0",parser:function(A,P,O,L,C,Z){var H,X,se,fe,re,we,Ne="background-position",Fe=r||ge(A,null),Ce=this.format((Fe?E?Fe.getPropertyValue(Ne+"-x")+" "+Fe.getPropertyValue(Ne+"-y"):Fe.getPropertyValue(Ne):A.currentStyle.backgroundPositionX+" "+A.currentStyle.backgroundPositionY)||"0 0"),ke=this.format(P);if(Ce.indexOf("%")!==-1!=(ke.indexOf("%")!==-1)&&(we=bt(A,"backgroundImage").replace(ne,""),we&&we!=="none")){for(H=Ce.split(" "),X=ke.split(" "),be.setAttribute("src",we),se=2;--se>-1;)Ce=H[se],fe=Ce.indexOf("%")!==-1,fe!==(X[se].indexOf("%")!==-1)&&(re=se===0?A.offsetWidth-be.width:A.offsetHeight-be.height,H[se]=fe?parseFloat(Ce)/100*re+"px":100*(parseFloat(Ce)/re)+"%");Ce=H.join(" ")}return this.parseComplex(A.style,Ce,ke,C,Z)},formatter:N}),dt("backgroundSize",{defaultValue:"0 0",formatter:N}),dt("perspective",{defaultValue:"0px",prefix:!0}),dt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),dt("transformStyle",{prefix:!0}),dt("backfaceVisibility",{prefix:!0}),dt("userSelect",{prefix:!0}),dt("margin",{parser:ot("marginTop,marginRight,marginBottom,marginLeft")}),dt("padding",{parser:ot("paddingTop,paddingRight,paddingBottom,paddingLeft")}),dt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(A,P,O,L,C,Z){var H,X,se;return 9>E?(X=A.currentStyle,se=8>E?" ":",",H="rect("+X.clipTop+se+X.clipRight+se+X.clipBottom+se+X.clipLeft+")",P=this.format(P).split(",").join(se)):(H=this.format(bt(A,this.p,r,!1,this.dflt)),P=this.format(P)),this.parseComplex(A.style,H,P,C,Z)}}),dt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),dt("autoRound,strictUnits",{parser:function(A,P,O,L,C){return C}}),dt("border",{defaultValue:"0px solid #000",parser:function(A,P,O,L,C,Z){return this.parseComplex(A.style,this.format(bt(A,"borderTopWidth",r,!1,"0px")+" "+bt(A,"borderTopStyle",r,!1,"solid")+" "+bt(A,"borderTopColor",r,!1,"#000")),this.format(P),C,Z)},color:!0,formatter:function(A){var P=A.split(" ");return P[0]+" "+(P[1]||"solid")+" "+(A.match(Ue)||["#000"])[0]}}),dt("borderWidth",{parser:ot("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),dt("float,cssFloat,styleFloat",{parser:function(A,P,O,L,C){var Z=A.style,H="cssFloat"in Z?"cssFloat":"styleFloat";return new Se(Z,H,0,0,C,-1,O,!1,0,Z[H],P)}});var us=function(A){var P,O=this.t,L=O.filter||bt(this.data,"filter")||"",C=0|this.s+this.c*A;C===100&&(L.indexOf("atrix(")===-1&&L.indexOf("radient(")===-1&&L.indexOf("oader(")===-1?(O.removeAttribute("filter"),P=!bt(this.data,"filter")):(O.filter=L.replace(z,""),P=!0)),P||(this.xn1&&(O.filter=L=L||"alpha(opacity="+C+")"),L.indexOf("pacity")===-1?C===0&&this.xn1||(O.filter=L+" alpha(opacity="+C+")"):O.filter=L.replace(U,"opacity="+C))};dt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(A,P,O,L,C,Z){var H=parseFloat(bt(A,"opacity",r,!1,"1")),X=A.style,se=O==="autoAlpha";return typeof P=="string"&&P.charAt(1)==="="&&(P=(P.charAt(0)==="-"?-1:1)*parseFloat(P.substr(2))+H),se&&H===1&&bt(A,"visibility",r)==="hidden"&&P!==0&&(H=0),tt?C=new Se(X,"opacity",H,P-H,C):(C=new Se(X,"opacity",100*H,100*(P-H),C),C.xn1=se?1:0,X.zoom=1,C.type=2,C.b="alpha(opacity="+C.s+")",C.e="alpha(opacity="+(C.s+C.c)+")",C.data=A,C.plugin=Z,C.setRatio=us),se&&(C=new Se(X,"visibility",0,0,C,-1,null,!1,0,H!==0?"inherit":"hidden",P===0?"hidden":"inherit"),C.xs0="inherit",L._overwriteProps.push(C.n),L._overwriteProps.push(O)),C}});var Gi=function(A,P){P&&(A.removeProperty?((P.substr(0,2)==="ms"||P.substr(0,6)==="webkit")&&(P="-"+P),A.removeProperty(P.replace(F,"-$1").toLowerCase())):A.removeAttribute(P))},hs=function(A){if(this.t._gsClassPT=this,A===1||A===0){this.t.setAttribute("class",A===0?this.b:this.e);for(var P=this.data,O=this.t.style;P;)P.v?O[P.p]=P.v:Gi(O,P.p),P=P._next;A===1&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};dt("className",{parser:function(A,P,O,L,C,Z,H){var X,se,fe,re,we,Ne=A.getAttribute("class")||"",Fe=A.style.cssText;if(C=L._classNamePT=new Se(A,O,0,0,C,2),C.setRatio=hs,C.pr=-11,t=!0,C.b=Ne,se=it(A,r),fe=A._gsClassPT){for(re={},we=fe.data;we;)re[we.p]=1,we=we._next;fe.setRatio(1)}return A._gsClassPT=C,C.e=P.charAt(1)!=="="?P:Ne.replace(RegExp("\\s*\\b"+P.substr(2)+"\\b"),"")+(P.charAt(0)==="+"?" "+P.substr(2):""),A.setAttribute("class",C.e),X=It(A,se,it(A),H,re),A.setAttribute("class",Ne),C.data=X.firstMPT,A.style.cssText=Fe,C=C.xfirst=L.parse(A,X.difs,C,Z)}});var aa=function(A){if((A===1||A===0)&&this.data._totalTime===this.data._totalDuration&&this.data.data!=="isFromStart"){var P,O,L,C,Z,H=this.t.style,X=u.transform.parse;if(this.e==="all")H.cssText="",C=!0;else for(P=this.e.split(" ").join("").split(","),L=P.length;--L>-1;)O=P[L],u[O]&&(u[O].parse===X?C=!0:O=O==="transformOrigin"?ut:u[O].p),Gi(H,O);C&&(Gi(H,He),Z=this.t._gsTransform,Z&&(Z.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(dt("clearProps",{parser:function(A,P,O,L,C){return C=new Se(A,O,0,0,C,2),C.setRatio=aa,C.e=P,C.pr=-10,C.data=L._tween,t=!0,C}}),h="bezier,throwProps,physicsProps,physics2D".split(","),$e=h.length;$e--;)Dt(h[$e]);h=a.prototype,h._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(A,P,O){if(!A.nodeType)return!1;this._target=A,this._tween=O,this._vars=P,p=P.autoRound,t=!1,n=P.suffixMap||a.suffixMap,r=ge(A,""),s=this._overwriteProps;var L,C,Z,H,X,se,fe,re,we,Ne=A.style;if(m&&Ne.zIndex===""&&(L=bt(A,"zIndex",r),(L==="auto"||L==="")&&this._addLazySet(Ne,"zIndex",0)),typeof P=="string"&&(H=Ne.cssText,L=it(A,r),Ne.cssText=H+";"+P,L=It(A,L,it(A)).difs,!tt&&f.test(P)&&(L.opacity=parseFloat(RegExp.$1)),P=L,Ne.cssText=H),this._firstPT=C=P.className?u.className.parse(A,P.className,"className",this,null,null,P):this.parse(A,P,null),this._transformType){for(we=this._transformType===3,He?v&&(m=!0,Ne.zIndex===""&&(fe=bt(A,"zIndex",r),(fe==="auto"||fe==="")&&this._addLazySet(Ne,"zIndex",0)),R&&this._addLazySet(Ne,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(we?"visible":"hidden"))):Ne.zoom=1,Z=C;Z&&Z._next;)Z=Z._next;re=new Se(A,"transform",0,0,null,2),this._linkCSSP(re,null,Z),re.setRatio=He?Vi:cs,re.data=this._transform||ii(A,r,!0),re.tween=O,re.pr=-1,s.pop()}if(t){for(;C;){for(se=C._next,Z=H;Z&&Z.pr>C.pr;)Z=Z._next;(C._prev=Z?Z._prev:X)?C._prev._next=C:H=C,(C._next=Z)?Z._prev=C:X=C,C=se}this._firstPT=H}return!0},h.parse=function(A,P,O,L){var C,Z,H,X,se,fe,re,we,Ne,Fe,Ce=A.style;for(C in P)fe=P[C],Z=u[C],Z?O=Z.parse(A,fe,C,this,O,L,P):(se=bt(A,C,r)+"",Ne=typeof fe=="string",C==="color"||C==="fill"||C==="stroke"||C.indexOf("Color")!==-1||Ne&&W.test(fe)?(Ne||(fe=Pe(fe),fe=(fe.length>3?"rgba(":"rgb(")+fe.join(",")+")"),O=We(Ce,C,se,fe,!0,"transparent",O,0,L)):!Ne||fe.indexOf(" ")===-1&&fe.indexOf(",")===-1?(H=parseFloat(se),re=H||H===0?se.substr((H+"").length):"",(se===""||se==="auto")&&(C==="width"||C==="height"?(H=M(A,C,r),re="px"):C==="left"||C==="top"?(H=yt(A,C,r),re="px"):(H=C!=="opacity"?0:1,re="")),Fe=Ne&&fe.charAt(1)==="=",Fe?(X=parseInt(fe.charAt(0)+"1",10),fe=fe.substr(2),X*=parseFloat(fe),we=fe.replace(S,"")):(X=parseFloat(fe),we=Ne?fe.replace(S,""):""),we===""&&(we=C in n?n[C]:re),fe=X||X===0?(Fe?X+H:X)+we:P[C],re!==we&&we!==""&&(X||X===0)&&H&&(H=at(A,C,H,re),we==="%"?(H/=at(A,C,100,"%")/100,P.strictUnits!==!0&&(se=H+"%")):we==="em"||we==="rem"?H/=at(A,C,1,we):we!=="px"&&(X=at(A,C,X,we),we="px"),Fe&&(X||X===0)&&(fe=X+H+we)),Fe&&(X+=H),!H&&H!==0||!X&&X!==0?Ce[C]!==void 0&&(fe||fe+""!="NaN"&&fe!=null)?(O=new Se(Ce,C,X||H||0,0,O,-1,C,!1,0,se,fe),O.xs0=fe!=="none"||C!=="display"&&C.indexOf("Style")===-1?fe:se):gt("invalid "+C+" tween value: "+P[C]):(O=new Se(Ce,C,H,X-H,O,0,C,p!==!1&&(we==="px"||C==="zIndex"),0,se,fe),O.xs0=we)):O=We(Ce,C,se,fe,!0,null,O,0,L)),L&&O&&!O.plugin&&(O.plugin=L);return O},h.setRatio=function(A){var P,O,L,C=this._firstPT,Z=1e-6;if(A!==1||this._tween._time!==this._tween._duration&&this._tween._time!==0)if(A||this._tween._time!==this._tween._duration&&this._tween._time!==0||this._tween._rawPrevTime===-1e-6)for(;C;){if(P=C.c*A+C.s,C.r?P=Math.round(P):Z>P&&P>-Z&&(P=0),C.type)if(C.type===1)if(L=C.l,L===2)C.t[C.p]=C.xs0+P+C.xs1+C.xn1+C.xs2;else if(L===3)C.t[C.p]=C.xs0+P+C.xs1+C.xn1+C.xs2+C.xn2+C.xs3;else if(L===4)C.t[C.p]=C.xs0+P+C.xs1+C.xn1+C.xs2+C.xn2+C.xs3+C.xn3+C.xs4;else if(L===5)C.t[C.p]=C.xs0+P+C.xs1+C.xn1+C.xs2+C.xn2+C.xs3+C.xn3+C.xs4+C.xn4+C.xs5;else{for(O=C.xs0+P+C.xs1,L=1;C.l>L;L++)O+=C["xn"+L]+C["xs"+(L+1)];C.t[C.p]=O}else C.type===-1?C.t[C.p]=C.xs0:C.setRatio&&C.setRatio(A);else C.t[C.p]=P+C.xs0;C=C._next}else for(;C;)C.type!==2?C.t[C.p]=C.b:C.setRatio(A),C=C._next;else for(;C;){if(C.type!==2)if(C.r&&C.type!==-1)if(P=Math.round(C.s+C.c),C.type){if(C.type===1){for(L=C.l,O=C.xs0+P+C.xs1,L=1;C.l>L;L++)O+=C["xn"+L]+C["xs"+(L+1)];C.t[C.p]=O}}else C.t[C.p]=P+C.xs0;else C.t[C.p]=C.e;else C.setRatio(A);C=C._next}},h._enableTransforms=function(A){this._transform=this._transform||ii(this._target,r,!0),this._transformType=this._transform.svg&&Xe||!A&&this._transformType!==3?2:3};var Ai=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(A,P,O){var L=this._firstPT=new Se(A,P,0,0,this._firstPT,2);L.e=O,L.setRatio=Ai,L.data=this},h._linkCSSP=function(A,P,O,L){return A&&(P&&(P._prev=A),A._next&&(A._next._prev=A._prev),A._prev?A._prev._next=A._next:this._firstPT===A&&(this._firstPT=A._next,L=!0),O?O._next=A:L||this._firstPT!==null||(this._firstPT=A),A._next=P,A._prev=O),A},h._kill=function(A){var P,O,L,C=A;if(A.autoAlpha||A.alpha){C={};for(O in A)C[O]=A[O];C.opacity=1,C.autoAlpha&&(C.visibility=1)}return A.className&&(P=this._classNamePT)&&(L=P.xfirst,L&&L._prev?this._linkCSSP(L._prev,P._next,L._prev._prev):L===this._firstPT&&(this._firstPT=P._next),P._next&&this._linkCSSP(P._next,P._next._next,L._prev),this._classNamePT=null),i.prototype._kill.call(this,C)};var G=function(A,P,O){var L,C,Z,H;if(A.slice)for(C=A.length;--C>-1;)G(A[C],P,O);else for(L=A.childNodes,C=L.length;--C>-1;)Z=L[C],H=Z.type,Z.style&&(P.push(it(Z)),O&&O.push(Z)),H!==1&&H!==9&&H!==11||!Z.childNodes.length||G(Z,P,O)};return a.cascadeTo=function(A,P,O){var L,C,Z,H,X=e.to(A,P,O),se=[X],fe=[],re=[],we=[],Ne=e._internals.reservedProps;for(A=X._targets||X.target,G(A,fe,we),X.render(P,!0,!0),G(A,re),X.render(0,!0,!0),X._enabled(!0),L=we.length;--L>-1;)if(C=It(we[L],fe[L],re[L]),C.firstMPT){C=C.difs;for(Z in O)Ne[Z]&&(C[Z]=O[Z]);H={};for(Z in C)H[Z]=fe[L][Z];se.push(e.fromTo(we[L],P,H,C))}return se},i.activate([a]),a},!0),function(){var i=Un._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(n,r,s){return this._tween=s,!0}}),e=function(n){for(;n;)n.f||n.blob||(n.r=1),n=n._next},t=i.prototype;t._onInitAllProps=function(){for(var n,r,s,a=this._tween,l=a.vars.roundProps.join?a.vars.roundProps:a.vars.roundProps.split(","),u=l.length,h={},p=a._propLookup.roundProps;--u>-1;)h[l[u]]=1;for(u=l.length;--u>-1;)for(n=l[u],r=a._firstPT;r;)s=r._next,r.pg?r.t._roundProps(h,!0):r.n===n&&(r.f===2&&r.t?e(r.t._firstPT):(this._add(r.t,n,r.s,r.c),s&&(s._prev=r._prev),r._prev?r._prev._next=s:a._firstPT===r&&(a._firstPT=s),r._next=r._prev=null,a._propLookup[n]=p)),r=s;return!1},t._add=function(n,r,s,a){this._addTween(n,r,s,s+a,r,!0),this._overwriteProps.push(r)}}(),function(){Un._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(i,e){var t;if(typeof i.setAttribute!="function")return!1;for(t in e)this._addTween(i,"setAttribute",i.getAttribute(t)+"",e[t]+"",t,!1,t),this._overwriteProps.push(t);return!0}})}(),Un._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(i,e){typeof e!="object"&&(e={rotation:e}),this.finals={};var t,n,r,s,a,l,u=e.useRadians===!0?2*Math.PI:360,h=1e-6;for(t in e)t!=="useRadians"&&(l=(e[t]+"").split("_"),n=l[0],r=parseFloat(typeof i[t]!="function"?i[t]:i[t.indexOf("set")||typeof i["get"+t.substr(3)]!="function"?t:"get"+t.substr(3)]()),s=this.finals[t]=typeof n=="string"&&n.charAt(1)==="="?r+parseInt(n.charAt(0)+"1",10)*Number(n.substr(2)):Number(n)||0,a=s-r,l.length&&(n=l.join("_"),n.indexOf("short")!==-1&&(a%=u,a!==a%(u/2)&&(a=0>a?a+u:a-u)),n.indexOf("_cw")!==-1&&0>a?a=(a+9999999999*u)%u-(0|a/u)*u:n.indexOf("ccw")!==-1&&a>0&&(a=(a-9999999999*u)%u-(0|a/u)*u)),(a>h||-h>a)&&(this._addTween(i,t,r,r+a,t),this._overwriteProps.push(t)));return!0},set:function(i){var e;if(i!==1)this._super.setRatio.call(this,i);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,Un._gsDefine("easing.Back",["easing.Ease"],function(i){var e,t,n,r=Un.GreenSockGlobals||Un,s=r.com.greensock,a=2*Math.PI,l=Math.PI/2,u=s._class,h=function(c,T){var b=u("easing."+c,function(){},!0),S=b.prototype=new i;return S.constructor=b,S.getRatio=T,b},p=i.register||function(){},m=function(c,T,b,S){var U=u("easing."+c,{easeOut:new T,easeIn:new b,easeInOut:new S},!0);return p(U,c),U},v=function(c,T,b){this.t=c,this.v=T,b&&(this.next=b,b.prev=this,this.c=b.v-T,this.gap=b.t-c)},_=function(c,T){var b=u("easing."+c,function(U){this._p1=U||U===0?U:1.70158,this._p2=1.525*this._p1},!0),S=b.prototype=new i;return S.constructor=b,S.getRatio=T,S.config=function(U){return new b(U)},b},R=m("Back",_("BackOut",function(c){return(c-=1)*c*((this._p1+1)*c+this._p1)+1}),_("BackIn",function(c){return c*c*((this._p1+1)*c-this._p1)}),_("BackInOut",function(c){return 1>(c*=2)?.5*c*c*((this._p2+1)*c-this._p2):.5*((c-=2)*c*((this._p2+1)*c+this._p2)+2)})),E=u("easing.SlowMo",function(c,T,b){T=T||T===0?T:.7,c==null?c=.7:c>1&&(c=1),this._p=c!==1?T:0,this._p1=(1-c)/2,this._p2=c,this._p3=this._p1+this._p2,this._calcEnd=b===!0},!0),g=E.prototype=new i;return g.constructor=E,g.getRatio=function(c){var T=c+(.5-c)*this._p;return this._p1>c?this._calcEnd?1-(c=1-c/this._p1)*c:T-(c=1-c/this._p1)*c*c*c*T:c>this._p3?this._calcEnd?1-(c=(c-this._p3)/this._p1)*c:T+(c-T)*(c=(c-this._p3)/this._p1)*c*c*c:this._calcEnd?1:T},E.ease=new E(.7,.7),g.config=E.config=function(c,T,b){return new E(c,T,b)},e=u("easing.SteppedEase",function(c){c=c||1,this._p1=1/c,this._p2=c+1},!0),g=e.prototype=new i,g.constructor=e,g.getRatio=function(c){return 0>c?c=0:c>=1&&(c=.999999999),(this._p2*c>>0)*this._p1},g.config=e.config=function(c){return new e(c)},t=u("easing.RoughEase",function(c){c=c||{};for(var T,b,S,U,f,z,W=c.taper||"none",F=[],B=0,ne=0|(c.points||20),te=ne,_e=c.randomize!==!1,K=c.clamp===!0,ee=c.template instanceof i?c.template:null,le=typeof c.strength=="number"?.4*c.strength:.4;--te>-1;)T=_e?Math.random():1/ne*te,b=ee?ee.getRatio(T):T,W==="none"?S=le:W==="out"?(U=1-T,S=U*U*le):W==="in"?S=T*T*le:.5>T?(U=2*T,S=.5*U*U*le):(U=2*(1-T),S=.5*U*U*le),_e?b+=Math.random()*S-.5*S:te%2?b+=.5*S:b-=.5*S,K&&(b>1?b=1:0>b&&(b=0)),F[B++]={x:T,y:b};for(F.sort(function(Me,me){return Me.x-me.x}),z=new v(1,1,null),te=ne;--te>-1;)f=F[te],z=new v(f.x,f.y,z);this._prev=new v(0,0,z.t!==0?z:z.next)},!0),g=t.prototype=new i,g.constructor=t,g.getRatio=function(c){var T=this._prev;if(c>T.t){for(;T.next&&c>=T.t;)T=T.next;T=T.prev}else for(;T.prev&&T.t>=c;)T=T.prev;return this._prev=T,T.v+(c-T.t)/T.gap*T.c},g.config=function(c){return new t(c)},t.ease=new t,m("Bounce",h("BounceOut",function(c){return 1/2.75>c?7.5625*c*c:2/2.75>c?7.5625*(c-=1.5/2.75)*c+.75:2.5/2.75>c?7.5625*(c-=2.25/2.75)*c+.9375:7.5625*(c-=2.625/2.75)*c+.984375}),h("BounceIn",function(c){return 1/2.75>(c=1-c)?1-7.5625*c*c:2/2.75>c?1-(7.5625*(c-=1.5/2.75)*c+.75):2.5/2.75>c?1-(7.5625*(c-=2.25/2.75)*c+.9375):1-(7.5625*(c-=2.625/2.75)*c+.984375)}),h("BounceInOut",function(c){var T=.5>c;return c=T?1-2*c:2*c-1,c=1/2.75>c?7.5625*c*c:2/2.75>c?7.5625*(c-=1.5/2.75)*c+.75:2.5/2.75>c?7.5625*(c-=2.25/2.75)*c+.9375:7.5625*(c-=2.625/2.75)*c+.984375,T?.5*(1-c):.5*c+.5})),m("Circ",h("CircOut",function(c){return Math.sqrt(1-(c-=1)*c)}),h("CircIn",function(c){return-(Math.sqrt(1-c*c)-1)}),h("CircInOut",function(c){return 1>(c*=2)?-.5*(Math.sqrt(1-c*c)-1):.5*(Math.sqrt(1-(c-=2)*c)+1)})),n=function(c,T,b){var S=u("easing."+c,function(f,z){this._p1=f>=1?f:1,this._p2=(z||b)/(1>f?f:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),U=S.prototype=new i;return U.constructor=S,U.getRatio=T,U.config=function(f,z){return new S(f,z)},S},m("Elastic",n("ElasticOut",function(c){return this._p1*Math.pow(2,-10*c)*Math.sin((c-this._p3)*this._p2)+1},.3),n("ElasticIn",function(c){return-(this._p1*Math.pow(2,10*(c-=1))*Math.sin((c-this._p3)*this._p2))},.3),n("ElasticInOut",function(c){return 1>(c*=2)?-.5*this._p1*Math.pow(2,10*(c-=1))*Math.sin((c-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(c-=1))*Math.sin((c-this._p3)*this._p2)+1},.45)),m("Expo",h("ExpoOut",function(c){return 1-Math.pow(2,-10*c)}),h("ExpoIn",function(c){return Math.pow(2,10*(c-1))-.001}),h("ExpoInOut",function(c){return 1>(c*=2)?.5*Math.pow(2,10*(c-1)):.5*(2-Math.pow(2,-10*(c-1)))})),m("Sine",h("SineOut",function(c){return Math.sin(c*l)}),h("SineIn",function(c){return-Math.cos(c*l)+1}),h("SineInOut",function(c){return-.5*(Math.cos(Math.PI*c)-1)})),u("easing.EaseLookup",{find:function(c){return i.map[c]}},!0),p(r.SlowMo,"SlowMo","ease,"),p(t,"RoughEase","ease,"),p(e,"SteppedEase","ease,"),R},!0)}),Un._gsDefine&&Un._gsQueue.pop()(),function(i,e){"use strict";var t=i.GreenSockGlobals=i.GreenSockGlobals||i;if(!t.TweenLite){var n,r,s,a,l,u=function(y){var M,N=y.split("."),V=t;for(M=0;N.length>M;M++)V[N[M]]=V=V[N[M]]||{};return V},h=u("com.greensock"),p=1e-10,m=function(y){var M,N=[],V=y.length;for(M=0;M!==V;N.push(y[M++]));return N},v=function(){},_=function(){var y=Object.prototype.toString,M=y.call([]);return function(N){return N!=null&&(N instanceof Array||typeof N=="object"&&!!N.push&&y.call(N)===M)}}(),R={},E=function(y,M,N,V){this.sc=R[y]?R[y].sc:[],R[y]=this,this.gsClass=null,this.func=N;var J=[];this.check=function(j){for(var pe,ae,Pe,Ie,Ue,ye=M.length,ot=ye;--ye>-1;)(pe=R[M[ye]]||new E(M[ye],[])).gsClass?(J[ye]=pe.gsClass,ot--):j&&pe.sc.push(this);if(ot===0&&N)for(ae=("com.greensock."+y).split("."),Pe=ae.pop(),Ie=u(ae.join("."))[Pe]=this.gsClass=N.apply(N,J),V&&(t[Pe]=Ie,Ue=typeof module<"u"&&module.exports,!Ue&&typeof define=="function"&&define.amd?define((i.GreenSockAMDPath?i.GreenSockAMDPath+"/":"")+y.split(".").pop(),[],function(){return Ie}):y===e&&Ue&&(module.exports=Ie)),ye=0;this.sc.length>ye;ye++)this.sc[ye].check()},this.check(!0)},g=i._gsDefine=function(y,M,N,V){return new E(y,M,N,V)},c=h._class=function(y,M,N){return M=M||function(){},g(y,[],function(){return M},N),M};g.globals=t;var T=[0,0,1,1],b=[],S=c("easing.Ease",function(y,M,N,V){this._func=y,this._type=N||0,this._power=V||0,this._params=M?T.concat(M):T},!0),U=S.map={},f=S.register=function(y,M,N,V){for(var J,j,pe,ae,Pe=M.split(","),Ie=Pe.length,Ue=(N||"easeIn,easeOut,easeInOut").split(",");--Ie>-1;)for(j=Pe[Ie],J=V?c("easing."+j,null,!0):h.easing[j]||{},pe=Ue.length;--pe>-1;)ae=Ue[pe],U[j+"."+ae]=U[ae+j]=J[ae]=y.getRatio?y:y[ae]||new y};for(s=S.prototype,s._calcEnd=!1,s.getRatio=function(y){if(this._func)return this._params[0]=y,this._func.apply(null,this._params);var M=this._type,N=this._power,V=M===1?1-y:M===2?y:.5>y?2*y:2*(1-y);return N===1?V*=V:N===2?V*=V*V:N===3?V*=V*V*V:N===4&&(V*=V*V*V*V),M===1?1-V:M===2?V:.5>y?V/2:1-V/2},n=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=n.length;--r>-1;)s=n[r]+",Power"+r,f(new S(null,null,1,r),s,"easeOut",!0),f(new S(null,null,2,r),s,"easeIn"+(r===0?",easeNone":"")),f(new S(null,null,3,r),s,"easeInOut");U.linear=h.easing.Linear.easeIn,U.swing=h.easing.Quad.easeInOut;var z=c("events.EventDispatcher",function(y){this._listeners={},this._eventTarget=y||this});s=z.prototype,s.addEventListener=function(y,M,N,V,J){J=J||0;var j,pe,ae=this._listeners[y],Pe=0;for(ae==null&&(this._listeners[y]=ae=[]),pe=ae.length;--pe>-1;)j=ae[pe],j.c===M&&j.s===N?ae.splice(pe,1):Pe===0&&J>j.pr&&(Pe=pe+1);ae.splice(Pe,0,{c:M,s:N,up:V,pr:J}),this!==a||l||a.wake()},s.removeEventListener=function(y,M){var N,V=this._listeners[y];if(V){for(N=V.length;--N>-1;)if(V[N].c===M)return V.splice(N,1),void 0}},s.dispatchEvent=function(y){var M,N,V,J=this._listeners[y];if(J)for(M=J.length,N=this._eventTarget;--M>-1;)V=J[M],V&&(V.up?V.c.call(V.s||N,{type:y,target:N}):V.c.call(V.s||N))};var W=i.requestAnimationFrame,F=i.cancelAnimationFrame,B=Date.now||function(){return new Date().getTime()},ne=B();for(n=["ms","moz","webkit","o"],r=n.length;--r>-1&&!W;)W=i[n[r]+"RequestAnimationFrame"],F=i[n[r]+"CancelAnimationFrame"]||i[n[r]+"CancelRequestAnimationFrame"];c("Ticker",function(y,M){var N,V,J,j,pe,ae=this,Pe=B(),Ie=M!==!1&&W,Ue=500,ye=33,ot="tick",Y=function(Se){var Ge,We,$e=B()-ne;$e>Ue&&(Pe+=$e-ye),ne+=$e,ae.time=(ne-Pe)/1e3,Ge=ae.time-pe,(!N||Ge>0||Se===!0)&&(ae.frame++,pe+=Ge+(Ge>=j?.004:j-Ge),We=!0),Se!==!0&&(J=V(Y)),We&&ae.dispatchEvent(ot)};z.call(ae),ae.time=ae.frame=0,ae.tick=function(){Y(!0)},ae.lagSmoothing=function(Se,Ge){Ue=Se||1/p,ye=Math.min(Ge,Ue,0)},ae.sleep=function(){J!=null&&(Ie&&F?F(J):clearTimeout(J),V=v,J=null,ae===a&&(l=!1))},ae.wake=function(){J!==null?ae.sleep():ae.frame>10&&(ne=B()-Ue+5),V=N===0?v:Ie&&W?W:function(Se){return setTimeout(Se,0|1e3*(pe-ae.time)+1)},ae===a&&(l=!0),Y(2)},ae.fps=function(Se){return arguments.length?(N=Se,j=1/(N||60),pe=this.time+j,ae.wake(),void 0):N},ae.useRAF=function(Se){return arguments.length?(ae.sleep(),Ie=Se,ae.fps(N),void 0):Ie},ae.fps(y),setTimeout(function(){Ie&&5>ae.frame&&ae.useRAF(!1)},1500)}),s=h.Ticker.prototype=new h.events.EventDispatcher,s.constructor=h.Ticker;var te=c("core.Animation",function(y,M){if(this.vars=M=M||{},this._duration=this._totalDuration=y||0,this._delay=Number(M.delay)||0,this._timeScale=1,this._active=M.immediateRender===!0,this.data=M.data,this._reversed=M.reversed===!0,_t){l||a.wake();var N=this.vars.useFrames?ft:_t;N.add(this,N._time),this.vars.paused&&this.paused(!0)}});a=te.ticker=new h.Ticker,s=te.prototype,s._dirty=s._gc=s._initted=s._paused=!1,s._totalTime=s._time=0,s._rawPrevTime=-1,s._next=s._last=s._onUpdate=s._timeline=s.timeline=null,s._paused=!1;var _e=function(){l&&B()-ne>2e3&&a.wake(),setTimeout(_e,2e3)};_e(),s.play=function(y,M){return y!=null&&this.seek(y,M),this.reversed(!1).paused(!1)},s.pause=function(y,M){return y!=null&&this.seek(y,M),this.paused(!0)},s.resume=function(y,M){return y!=null&&this.seek(y,M),this.paused(!1)},s.seek=function(y,M){return this.totalTime(Number(y),M!==!1)},s.restart=function(y,M){return this.reversed(!1).paused(!1).totalTime(y?-this._delay:0,M!==!1,!0)},s.reverse=function(y,M){return y!=null&&this.seek(y||this.totalDuration(),M),this.reversed(!0).paused(!1)},s.render=function(){},s.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},s.isActive=function(){var y,M=this._timeline,N=this._startTime;return!M||!this._gc&&!this._paused&&M.isActive()&&(y=M.rawTime())>=N&&N+this.totalDuration()/this._timeScale>y},s._enabled=function(y,M){return l||a.wake(),this._gc=!y,this._active=this.isActive(),M!==!0&&(y&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!y&&this.timeline&&this._timeline._remove(this,!0)),!1},s._kill=function(){return this._enabled(!1,!1)},s.kill=function(y,M){return this._kill(y,M),this},s._uncache=function(y){for(var M=y?this:this.timeline;M;)M._dirty=!0,M=M.timeline;return this},s._swapSelfInParams=function(y){for(var M=y.length,N=y.concat();--M>-1;)y[M]==="{self}"&&(N[M]=this);return N},s._callback=function(y){var M=this.vars;M[y].apply(M[y+"Scope"]||M.callbackScope||this,M[y+"Params"]||b)},s.eventCallback=function(y,M,N,V){if((y||"").substr(0,2)==="on"){var J=this.vars;if(arguments.length===1)return J[y];M==null?delete J[y]:(J[y]=M,J[y+"Params"]=_(N)&&N.join("").indexOf("{self}")!==-1?this._swapSelfInParams(N):N,J[y+"Scope"]=V),y==="onUpdate"&&(this._onUpdate=M)}return this},s.delay=function(y){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+y-this._delay),this._delay=y,this):this._delay},s.duration=function(y){return arguments.length?(this._duration=this._totalDuration=y,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&y!==0&&this.totalTime(this._totalTime*(y/this._duration),!0),this):(this._dirty=!1,this._duration)},s.totalDuration=function(y){return this._dirty=!1,arguments.length?this.duration(y):this._totalDuration},s.time=function(y,M){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(y>this._duration?this._duration:y,M)):this._time},s.totalTime=function(y,M,N){if(l||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>y&&!N&&(y+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var V=this._totalDuration,J=this._timeline;if(y>V&&!N&&(y=V),this._startTime=(this._paused?this._pauseTime:J._time)-(this._reversed?V-y:y)/this._timeScale,J._dirty||this._uncache(!1),J._timeline)for(;J._timeline;)J._timeline._time!==(J._startTime+J._totalTime)/J._timeScale&&J.totalTime(J._totalTime,!0),J=J._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==y||this._duration===0)&&(me.length&&bt(),this.render(y,M,!1),me.length&&bt())}return this},s.progress=s.totalProgress=function(y,M){var N=this.duration();return arguments.length?this.totalTime(N*y,M):N?this._time/N:this.ratio},s.startTime=function(y){return arguments.length?(y!==this._startTime&&(this._startTime=y,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,y-this._delay)),this):this._startTime},s.endTime=function(y){return this._startTime+(y!=0?this.totalDuration():this.duration())/this._timeScale},s.timeScale=function(y){if(!arguments.length)return this._timeScale;if(y=y||p,this._timeline&&this._timeline.smoothChildTiming){var M=this._pauseTime,N=M||M===0?M:this._timeline.totalTime();this._startTime=N-(N-this._startTime)*this._timeScale/y}return this._timeScale=y,this._uncache(!1)},s.reversed=function(y){return arguments.length?(y!=this._reversed&&(this._reversed=y,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},s.paused=function(y){if(!arguments.length)return this._paused;var M,N,V=this._timeline;return y!=this._paused&&V&&(l||y||a.wake(),M=V.rawTime(),N=M-this._pauseTime,!y&&V.smoothChildTiming&&(this._startTime+=N,this._uncache(!1)),this._pauseTime=y?M:null,this._paused=y,this._active=this.isActive(),!y&&N!==0&&this._initted&&this.duration()&&(M=V.smoothChildTiming?this._totalTime:(M-this._startTime)/this._timeScale,this.render(M,M===this._totalTime,!0))),this._gc&&!y&&this._enabled(!0,!1),this};var K=c("core.SimpleTimeline",function(y){te.call(this,0,y),this.autoRemoveChildren=this.smoothChildTiming=!0});s=K.prototype=new te,s.constructor=K,s.kill()._gc=!1,s._first=s._last=s._recent=null,s._sortChildren=!1,s.add=s.insert=function(y,M){var N,V;if(y._startTime=Number(M||0)+y._delay,y._paused&&this!==y._timeline&&(y._pauseTime=y._startTime+(this.rawTime()-y._startTime)/y._timeScale),y.timeline&&y.timeline._remove(y,!0),y.timeline=y._timeline=this,y._gc&&y._enabled(!0,!0),N=this._last,this._sortChildren)for(V=y._startTime;N&&N._startTime>V;)N=N._prev;return N?(y._next=N._next,N._next=y):(y._next=this._first,this._first=y),y._next?y._next._prev=y:this._last=y,y._prev=N,this._recent=y,this._timeline&&this._uncache(!0),this},s._remove=function(y,M){return y.timeline===this&&(M||y._enabled(!1,!0),y._prev?y._prev._next=y._next:this._first===y&&(this._first=y._next),y._next?y._next._prev=y._prev:this._last===y&&(this._last=y._prev),y._next=y._prev=y.timeline=null,y===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},s.render=function(y,M,N){var V,J=this._first;for(this._totalTime=this._time=this._rawPrevTime=y;J;)V=J._next,(J._active||y>=J._startTime&&!J._paused)&&(J._reversed?J.render((J._dirty?J.totalDuration():J._totalDuration)-(y-J._startTime)*J._timeScale,M,N):J.render((y-J._startTime)*J._timeScale,M,N)),J=V},s.rawTime=function(){return l||a.wake(),this._totalTime};var ee=c("TweenLite",function(y,M,N){if(te.call(this,M,N),this.render=ee.prototype.render,y==null)throw"Cannot tween a null target.";this.target=y=typeof y!="string"?y:ee.selector(y)||y;var V,J,j,pe=y.jquery||y.length&&y!==i&&y[0]&&(y[0]===i||y[0].nodeType&&y[0].style&&!y.nodeType),ae=this.vars.overwrite;if(this._overwrite=ae=ae==null?pt[ee.defaultOverwrite]:typeof ae=="number"?ae>>0:pt[ae],(pe||y instanceof Array||y.push&&_(y))&&typeof y[0]!="number")for(this._targets=j=m(y),this._propLookup=[],this._siblings=[],V=0;j.length>V;V++)J=j[V],J?typeof J!="string"?J.length&&J!==i&&J[0]&&(J[0]===i||J[0].nodeType&&J[0].style&&!J.nodeType)?(j.splice(V--,1),this._targets=j=j.concat(m(J))):(this._siblings[V]=at(J,this,!1),ae===1&&this._siblings[V].length>1&&it(J,this,null,1,this._siblings[V])):(J=j[V--]=ee.selector(J),typeof J=="string"&&j.splice(V+1,1)):j.splice(V--,1);else this._propLookup={},this._siblings=at(y,this,!1),ae===1&&this._siblings.length>1&&it(y,this,null,1,this._siblings);(this.vars.immediateRender||M===0&&this._delay===0&&this.vars.immediateRender!==!1)&&(this._time=-p,this.render(-this._delay))},!0),le=function(y){return y&&y.length&&y!==i&&y[0]&&(y[0]===i||y[0].nodeType&&y[0].style&&!y.nodeType)},Me=function(y,M){var N,V={};for(N in y)gt[N]||N in M&&N!=="transform"&&N!=="x"&&N!=="y"&&N!=="width"&&N!=="height"&&N!=="className"&&N!=="border"||!(!je[N]||je[N]&&je[N]._autoCSS)||(V[N]=y[N],delete y[N]);y.css=V};s=ee.prototype=new te,s.constructor=ee,s.kill()._gc=!1,s.ratio=0,s._firstPT=s._targets=s._overwrittenProps=s._startAt=null,s._notifyPluginsOfEnabled=s._lazy=!1,ee.version="1.18.0",ee.defaultEase=s._ease=new S(null,null,1,1),ee.defaultOverwrite="auto",ee.ticker=a,ee.autoSleep=120,ee.lagSmoothing=function(y,M){a.lagSmoothing(y,M)},ee.selector=i.$||i.jQuery||function(y){var M=i.$||i.jQuery;return M?(ee.selector=M,M(y)):typeof document>"u"?y:document.querySelectorAll?document.querySelectorAll(y):document.getElementById(y.charAt(0)==="#"?y.substr(1):y)};var me=[],Ee={},Re=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,Be=function(y){for(var M,N=this._firstPT,V=1e-6;N;)M=N.blob?y?this.join(""):this.start:N.c*y+N.s,N.r?M=Math.round(M):V>M&&M>-V&&(M=0),N.f?N.fp?N.t[N.p](N.fp,M):N.t[N.p](M):N.t[N.p]=M,N=N._next},qe=function(y,M,N,V){var J,j,pe,ae,Pe,Ie,Ue,ye=[y,M],ot=0,Y="",Se=0;for(ye.start=y,N&&(N(ye),y=ye[0],M=ye[1]),ye.length=0,J=y.match(Re)||[],j=M.match(Re)||[],V&&(V._next=null,V.blob=1,ye._firstPT=V),Pe=j.length,ae=0;Pe>ae;ae++)Ue=j[ae],Ie=M.substr(ot,M.indexOf(Ue,ot)-ot),Y+=Ie||!ae?Ie:",",ot+=Ie.length,Se?Se=(Se+1)%5:Ie.substr(-5)==="rgba("&&(Se=1),Ue===J[ae]||ae>=J.length?Y+=Ue:(Y&&(ye.push(Y),Y=""),pe=parseFloat(J[ae]),ye.push(pe),ye._firstPT={_next:ye._firstPT,t:ye,p:ye.length-1,s:pe,c:(Ue.charAt(1)==="="?parseInt(Ue.charAt(0)+"1",10)*parseFloat(Ue.substr(2)):parseFloat(Ue)-pe)||0,f:0,r:Se&&4>Se}),ot+=Ue.length;return Y+=M.substr(ot),Y&&ye.push(Y),ye.setRatio=Be,ye},be=function(y,M,N,V,J,j,pe,ae){var Pe,Ie,Ue=N==="get"?y[M]:N,ye=typeof y[M],ot=typeof V=="string"&&V.charAt(1)==="=",Y={t:y,p:M,s:Ue,f:ye==="function",pg:0,n:J||M,r:j,pr:0,c:ot?parseInt(V.charAt(0)+"1",10)*parseFloat(V.substr(2)):parseFloat(V)-Ue||0};return ye!=="number"&&(ye==="function"&&N==="get"&&(Ie=M.indexOf("set")||typeof y["get"+M.substr(3)]!="function"?M:"get"+M.substr(3),Y.s=Ue=pe?y[Ie](pe):y[Ie]()),typeof Ue=="string"&&(pe||isNaN(Ue))?(Y.fp=pe,Pe=qe(Ue,V,ae||ee.defaultStringFilter,Y),Y={t:Pe,p:"setRatio",s:0,c:1,f:2,pg:0,n:J||M,pr:0}):ot||(Y.c=parseFloat(V)-parseFloat(Ue)||0)),Y.c?((Y._next=this._firstPT)&&(Y._next._prev=Y),this._firstPT=Y,Y):void 0},Oe=ee._internals={isArray:_,isSelector:le,lazyTweens:me,blobDif:qe},je=ee._plugins={},tt=Oe.tweenLookup={},ht=0,gt=Oe.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},pt={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},ft=te._rootFramesTimeline=new K,_t=te._rootTimeline=new K,ge=30,bt=Oe.lazyRender=function(){var y,M=me.length;for(Ee={};--M>-1;)y=me[M],y&&y._lazy!==!1&&(y.render(y._lazy[0],y._lazy[1],!0),y._lazy=!1);me.length=0};_t._startTime=a.time,ft._startTime=a.frame,_t._active=ft._active=!0,setTimeout(bt,1),te._updateRoot=ee.render=function(){var y,M,N;if(me.length&&bt(),_t.render((a.time-_t._startTime)*_t._timeScale,!1,!1),ft.render((a.frame-ft._startTime)*ft._timeScale,!1,!1),me.length&&bt(),a.frame>=ge){ge=a.frame+(parseInt(ee.autoSleep,10)||120);for(N in tt){for(M=tt[N].tweens,y=M.length;--y>-1;)M[y]._gc&&M.splice(y,1);M.length===0&&delete tt[N]}if(N=_t._first,(!N||N._paused)&&ee.autoSleep&&!ft._first&&a._listeners.tick.length===1){for(;N&&N._paused;)N=N._next;N||a.sleep()}}},a.addEventListener("tick",te._updateRoot);var at=function(y,M,N){var V,J,j=y._gsTweenID;if(tt[j||(y._gsTweenID=j="t"+ht++)]||(tt[j]={target:y,tweens:[]}),M&&(V=tt[j].tweens,V[J=V.length]=M,N))for(;--J>-1;)V[J]===M&&V.splice(J,1);return tt[j].tweens},yt=function(y,M,N,V){var J,j,pe=y.vars.onOverwrite;return pe&&(J=pe(y,M,N,V)),pe=ee.onOverwrite,pe&&(j=pe(y,M,N,V)),J!==!1&&j!==!1},it=function(y,M,N,V,J){var j,pe,ae,Pe;if(V===1||V>=4){for(Pe=J.length,j=0;Pe>j;j++)if((ae=J[j])!==M)ae._gc||ae._kill(null,y,M)&&(pe=!0);else if(V===5)break;return pe}var Ie,Ue=M._startTime+p,ye=[],ot=0,Y=M._duration===0;for(j=J.length;--j>-1;)(ae=J[j])===M||ae._gc||ae._paused||(ae._timeline!==M._timeline?(Ie=Ie||It(M,0,Y),It(ae,Ie,Y)===0&&(ye[ot++]=ae)):Ue>=ae._startTime&&ae._startTime+ae.totalDuration()/ae._timeScale>Ue&&((Y||!ae._initted)&&2e-10>=Ue-ae._startTime||(ye[ot++]=ae)));for(j=ot;--j>-1;)if(ae=ye[j],V===2&&ae._kill(N,y,M)&&(pe=!0),V!==2||!ae._firstPT&&ae._initted){if(V!==2&&!yt(ae,M))continue;ae._enabled(!1,!1)&&(pe=!0)}return pe},It=function(y,M,N){for(var V=y._timeline,J=V._timeScale,j=y._startTime;V._timeline;){if(j+=V._startTime,J*=V._timeScale,V._paused)return-100;V=V._timeline}return j/=J,j>M?j-M:N&&j===M||!y._initted&&2*p>j-M?p:(j+=y.totalDuration()/y._timeScale/J)>M+p?0:j-M-p};s._init=function(){var y,M,N,V,J,j=this.vars,pe=this._overwrittenProps,ae=this._duration,Pe=!!j.immediateRender,Ie=j.ease;if(j.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),J={};for(V in j.startAt)J[V]=j.startAt[V];if(J.overwrite=!1,J.immediateRender=!0,J.lazy=Pe&&j.lazy!==!1,J.startAt=J.delay=null,this._startAt=ee.to(this.target,0,J),Pe){if(this._time>0)this._startAt=null;else if(ae!==0)return}}else if(j.runBackwards&&ae!==0)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{this._time!==0&&(Pe=!1),N={};for(V in j)gt[V]&&V!=="autoCSS"||(N[V]=j[V]);if(N.overwrite=0,N.data="isFromStart",N.lazy=Pe&&j.lazy!==!1,N.immediateRender=Pe,this._startAt=ee.to(this.target,0,N),Pe){if(this._time===0)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=Ie=Ie?Ie instanceof S?Ie:typeof Ie=="function"?new S(Ie,j.easeParams):U[Ie]||ee.defaultEase:ee.defaultEase,j.easeParams instanceof Array&&Ie.config&&(this._ease=Ie.config.apply(Ie,j.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(y=this._targets.length;--y>-1;)this._initProps(this._targets[y],this._propLookup[y]={},this._siblings[y],pe?pe[y]:null)&&(M=!0);else M=this._initProps(this.target,this._propLookup,this._siblings,pe);if(M&&ee._onPluginEvent("_onInitAllProps",this),pe&&(this._firstPT||typeof this.target!="function"&&this._enabled(!1,!1)),j.runBackwards)for(N=this._firstPT;N;)N.s+=N.c,N.c=-N.c,N=N._next;this._onUpdate=j.onUpdate,this._initted=!0},s._initProps=function(y,M,N,V){var J,j,pe,ae,Pe,Ie;if(y==null)return!1;Ee[y._gsTweenID]&&bt(),this.vars.css||y.style&&y!==i&&y.nodeType&&je.css&&this.vars.autoCSS!==!1&&Me(this.vars,y);for(J in this.vars)if(Ie=this.vars[J],gt[J])Ie&&(Ie instanceof Array||Ie.push&&_(Ie))&&Ie.join("").indexOf("{self}")!==-1&&(this.vars[J]=Ie=this._swapSelfInParams(Ie,this));else if(je[J]&&(ae=new je[J])._onInitTween(y,this.vars[J],this)){for(this._firstPT=Pe={_next:this._firstPT,t:ae,p:"setRatio",s:0,c:1,f:1,n:J,pg:1,pr:ae._priority},j=ae._overwriteProps.length;--j>-1;)M[ae._overwriteProps[j]]=this._firstPT;(ae._priority||ae._onInitAllProps)&&(pe=!0),(ae._onDisable||ae._onEnable)&&(this._notifyPluginsOfEnabled=!0),Pe._next&&(Pe._next._prev=Pe)}else M[J]=be.call(this,y,J,"get",Ie,J,0,null,this.vars.stringFilter);return V&&this._kill(V,y)?this._initProps(y,M,N,V):this._overwrite>1&&this._firstPT&&N.length>1&&it(y,this,M,this._overwrite,N)?(this._kill(M,y),this._initProps(y,M,N,V)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(Ee[y._gsTweenID]=!0),pe)},s.render=function(y,M,N){var V,J,j,pe,ae=this._time,Pe=this._duration,Ie=this._rawPrevTime;if(y>=Pe)this._totalTime=this._time=Pe,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(V=!0,J="onComplete",N=N||this._timeline.autoRemoveChildren),Pe===0&&(this._initted||!this.vars.lazy||N)&&(this._startTime===this._timeline._duration&&(y=0),(y===0||0>Ie||Ie===p&&this.data!=="isPause")&&Ie!==y&&(N=!0,Ie>p&&(J="onReverseComplete")),this._rawPrevTime=pe=!M||y||Ie===y?y:p);else if(1e-7>y)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(ae!==0||Pe===0&&Ie>0)&&(J="onReverseComplete",V=this._reversed),0>y&&(this._active=!1,Pe===0&&(this._initted||!this.vars.lazy||N)&&(Ie>=0&&(Ie!==p||this.data!=="isPause")&&(N=!0),this._rawPrevTime=pe=!M||y||Ie===y?y:p)),this._initted||(N=!0);else if(this._totalTime=this._time=y,this._easeType){var Ue=y/Pe,ye=this._easeType,ot=this._easePower;(ye===1||ye===3&&Ue>=.5)&&(Ue=1-Ue),ye===3&&(Ue*=2),ot===1?Ue*=Ue:ot===2?Ue*=Ue*Ue:ot===3?Ue*=Ue*Ue*Ue:ot===4&&(Ue*=Ue*Ue*Ue*Ue),this.ratio=ye===1?1-Ue:ye===2?Ue:.5>y/Pe?Ue/2:1-Ue/2}else this.ratio=this._ease.getRatio(y/Pe);if(this._time!==ae||N){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!N&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=ae,this._rawPrevTime=Ie,me.push(this),this._lazy=[y,M],void 0;this._time&&!V?this.ratio=this._ease.getRatio(this._time/Pe):V&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(this._time===0?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==ae&&y>=0&&(this._active=!0),ae===0&&(this._startAt&&(y>=0?this._startAt.render(y,M,N):J||(J="_dummyGS")),this.vars.onStart&&(this._time!==0||Pe===0)&&(M||this._callback("onStart"))),j=this._firstPT;j;)j.f?j.t[j.p](j.c*this.ratio+j.s):j.t[j.p]=j.c*this.ratio+j.s,j=j._next;this._onUpdate&&(0>y&&this._startAt&&y!==-1e-4&&this._startAt.render(y,M,N),M||(this._time!==ae||V)&&this._callback("onUpdate")),J&&(!this._gc||N)&&(0>y&&this._startAt&&!this._onUpdate&&y!==-1e-4&&this._startAt.render(y,M,N),V&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!M&&this.vars[J]&&this._callback(J),Pe===0&&this._rawPrevTime===p&&pe!==p&&(this._rawPrevTime=0))}},s._kill=function(y,M,N){if(y==="all"&&(y=null),y==null&&(M==null||M===this.target))return this._lazy=!1,this._enabled(!1,!1);M=typeof M!="string"?M||this._targets||this.target:ee.selector(M)||M;var V,J,j,pe,ae,Pe,Ie,Ue,ye,ot=N&&this._time&&N._startTime===this._startTime&&this._timeline===N._timeline;if((_(M)||le(M))&&typeof M[0]!="number")for(V=M.length;--V>-1;)this._kill(y,M[V],N)&&(Pe=!0);else{if(this._targets){for(V=this._targets.length;--V>-1;)if(M===this._targets[V]){ae=this._propLookup[V]||{},this._overwrittenProps=this._overwrittenProps||[],J=this._overwrittenProps[V]=y?this._overwrittenProps[V]||{}:"all";break}}else{if(M!==this.target)return!1;ae=this._propLookup,J=this._overwrittenProps=y?this._overwrittenProps||{}:"all"}if(ae){if(Ie=y||ae,Ue=y!==J&&J!=="all"&&y!==ae&&(typeof y!="object"||!y._tempKill),N&&(ee.onOverwrite||this.vars.onOverwrite)){for(j in Ie)ae[j]&&(ye||(ye=[]),ye.push(j));if((ye||!y)&&!yt(this,N,M,ye))return!1}for(j in Ie)(pe=ae[j])&&(ot&&(pe.f?pe.t[pe.p](pe.s):pe.t[pe.p]=pe.s,Pe=!0),pe.pg&&pe.t._kill(Ie)&&(Pe=!0),pe.pg&&pe.t._overwriteProps.length!==0||(pe._prev?pe._prev._next=pe._next:pe===this._firstPT&&(this._firstPT=pe._next),pe._next&&(pe._next._prev=pe._prev),pe._next=pe._prev=null),delete ae[j]),Ue&&(J[j]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return Pe},s.invalidate=function(){return this._notifyPluginsOfEnabled&&ee._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],te.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-p,this.render(-this._delay)),this},s._enabled=function(y,M){if(l||a.wake(),y&&this._gc){var N,V=this._targets;if(V)for(N=V.length;--N>-1;)this._siblings[N]=at(V[N],this,!0);else this._siblings=at(this.target,this,!0)}return te.prototype._enabled.call(this,y,M),this._notifyPluginsOfEnabled&&this._firstPT?ee._onPluginEvent(y?"_onEnable":"_onDisable",this):!1},ee.to=function(y,M,N){return new ee(y,M,N)},ee.from=function(y,M,N){return N.runBackwards=!0,N.immediateRender=N.immediateRender!=0,new ee(y,M,N)},ee.fromTo=function(y,M,N,V){return V.startAt=N,V.immediateRender=V.immediateRender!=0&&N.immediateRender!=0,new ee(y,M,V)},ee.delayedCall=function(y,M,N,V,J){return new ee(M,0,{delay:y,onComplete:M,onCompleteParams:N,callbackScope:V,onReverseComplete:M,onReverseCompleteParams:N,immediateRender:!1,lazy:!1,useFrames:J,overwrite:0})},ee.set=function(y,M){return new ee(y,0,M)},ee.getTweensOf=function(y,M){if(y==null)return[];y=typeof y!="string"?y:ee.selector(y)||y;var N,V,J,j;if((_(y)||le(y))&&typeof y[0]!="number"){for(N=y.length,V=[];--N>-1;)V=V.concat(ee.getTweensOf(y[N],M));for(N=V.length;--N>-1;)for(j=V[N],J=N;--J>-1;)j===V[J]&&V.splice(N,1)}else for(V=at(y).concat(),N=V.length;--N>-1;)(V[N]._gc||M&&!V[N].isActive())&&V.splice(N,1);return V},ee.killTweensOf=ee.killDelayedCallsTo=function(y,M,N){typeof M=="object"&&(N=M,M=!1);for(var V=ee.getTweensOf(y,M),J=V.length;--J>-1;)V[J]._kill(N,y)};var vt=c("plugins.TweenPlugin",function(y,M){this._overwriteProps=(y||"").split(","),this._propName=this._overwriteProps[0],this._priority=M||0,this._super=vt.prototype},!0);if(s=vt.prototype,vt.version="1.18.0",vt.API=2,s._firstPT=null,s._addTween=be,s.setRatio=Be,s._kill=function(y){var M,N=this._overwriteProps,V=this._firstPT;if(y[this._propName]!=null)this._overwriteProps=[];else for(M=N.length;--M>-1;)y[N[M]]!=null&&N.splice(M,1);for(;V;)y[V.n]!=null&&(V._next&&(V._next._prev=V._prev),V._prev?(V._prev._next=V._next,V._prev=null):this._firstPT===V&&(this._firstPT=V._next)),V=V._next;return!1},s._roundProps=function(y,M){for(var N=this._firstPT;N;)(y[this._propName]||N.n!=null&&y[N.n.split(this._propName+"_").join("")])&&(N.r=M),N=N._next},ee._onPluginEvent=function(y,M){var N,V,J,j,pe,ae=M._firstPT;if(y==="_onInitAllProps"){for(;ae;){for(pe=ae._next,V=J;V&&V.pr>ae.pr;)V=V._next;(ae._prev=V?V._prev:j)?ae._prev._next=ae:J=ae,(ae._next=V)?V._prev=ae:j=ae,ae=pe}ae=M._firstPT=J}for(;ae;)ae.pg&&typeof ae.t[y]=="function"&&ae.t[y]()&&(N=!0),ae=ae._next;return N},vt.activate=function(y){for(var M=y.length;--M>-1;)y[M].API===vt.API&&(je[new y[M]()._propName]=y[M]);return!0},g.plugin=function(y){if(!(y&&y.propName&&y.init&&y.API))throw"illegal plugin definition.";var M,N=y.propName,V=y.priority||0,J=y.overwriteProps,j={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},pe=c("plugins."+N.charAt(0).toUpperCase()+N.substr(1)+"Plugin",function(){vt.call(this,N,V),this._overwriteProps=J||[]},y.global===!0),ae=pe.prototype=new vt(N);ae.constructor=pe,pe.API=y.API;for(M in j)typeof y[M]=="function"&&(ae[j[M]]=y[M]);return pe.version=y.version,vt.activate([pe]),pe},n=i._gsQueue){for(r=0;n.length>r;r++)n[r]();for(s in R)R[s].func||i.console.log("GSAP encountered missing dependency: com.greensock."+s)}l=!1}}(typeof module<"u"&&module.exports&&typeof global<"u"?global:window,"TweenMax");var Ml=document.getElementById("tooltip-span");function op(){window.onmousemove=function(i){var e=i.clientX,t=i.clientY;Ml.style.top=t+20+"px",Ml.style.left=e+20+"px"},window.onmousedown=function(){Ml.style.display="none"},window.onmouseup=function(){Ml.style.display="block"},window.innerWidth<=768||ab()}function ab(){var i=$(".cursor"),e=$(".cursor-follower"),t=0,n=0,r=0,s=0;TweenMax.to({},.006,{repeat:-1,onRepeat:function(){t+=(r-t)/9,n+=(s-n)/9,TweenMax.set(e,{css:{left:t-0,top:n-0}}),TweenMax.set(i,{css:{left:r,top:s}})}}),$(document).on("mousemove",function(a){r=a.clientX,s=a.clientY}),$("a.f-bg-vid-keeper.w-inline-block, .f-grid-link").on("mouseenter",function(){i.addClass("active"),e.addClass("active")}),$("a.f-bg-vid-keeper.w-inline-block, .f-grid-link").on("mouseleave",function(){i.removeClass("active"),e.removeClass("active")}),$(".with-pov-h1-holder").on("mouseenter",function(){i.addClass("video"),e.addClass("video")}),$(".with-pov-h1-holder").on("mouseleave",function(){i.removeClass("video"),e.removeClass("video")}),$(".vjs-progress-holder").on("mouseenter",function(){i.addClass("bar"),e.addClass("bar")}),$(".vjs-progress-holder").on("mouseleave",function(){i.removeClass("bar"),e.removeClass("bar")})}function lp(){(function(i){"use strict";i(document).ready(function(){"use strict";var e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var n=function(){var a=i(window).scrollTop(),l=i(document).height()-i(window).height(),u=t-a*t/l;e.style.strokeDashoffset=u};n(),i(window).scroll(n);var r=50,s=550;jQuery(window).on("scroll",function(){jQuery(this).scrollTop()>r?jQuery(".progress-wrap").addClass("active-progress"):jQuery(".progress-wrap").removeClass("active-progress")}),jQuery(".progress-wrap").on("click",function(a){return a.preventDefault(),jQuery("html, body").animate({scrollTop:0},s),!1})})})(jQuery)}var ia,Hi,os,sa,ra,cp=0,up=0,hp=window.innerWidth/2,fp=window.innerHeight/2,dp,Ha=[],zu=document.getElementById("banner-container");function pp(){ia=document.querySelector("#banner-canvas"),ia.height=zu.offsetHeight,ia.width=zu.offsetWidth,sa=new Qr({canvas:ia,antialias:!0,alpha:!0}),Hi=new xn(75,window.innerWidth/window.innerHeight,1,2e3),Hi.position.z=1400,os=new Zs,os.fog=new Yo(0,8e-4);let i=new Xn,e=[],t=new Nr,n=h=>{h.colorSpace=on},r=t.load("https://uploads-ssl.webflow.com/649802b639d4f2cdad48d8db/64b9f2173b619fe50ee27ea9_ball.webp",n),s=t.load("https://uploads-ssl.webflow.com/649802b639d4f2cdad48d8db/64b9f217e1ae7e98fce71d13_disc.webp",n),a=t.load("https://uploads-ssl.webflow.com/649802b639d4f2cdad48d8db/64b9f2173b619fe50ee27df1_circle.webp",n),l=t.load("https://uploads-ssl.webflow.com/649802b639d4f2cdad48d8db/64b9f2176beddb56d427c607_spark1.webp",n),u=t.load("https://uploads-ssl.webflow.com/649802b639d4f2cdad48d8db/64b9e16942f7724f06ee984f_snowflake4.webp",n);for(let h=0;h<1e4;h++){let p=Math.random()*2e3-1e3,m=Math.random()*2e3-1e3,v=Math.random()*2e3-1e3;e.push(p,m,v)}i.setAttribute("position",new vn(e,3)),ra=[[[1,.2,.5],s,6],[[.95,.1,.5],a,5],[[.9,.05,.5],r,4],[[.85,0,.5],u,3],[[.8,0,.5],l,3]];for(let h=0;h<ra.length;h++){let p=ra[h][0],m=ra[h][1],v=ra[h][2];Ha[h]=new Pa({size:v,map:m,blending:Po,depthTest:!1,transparent:!0}),Ha[h].color.setHSL(p[0],p[1],p[2],on);let _=new La(i,Ha[h]);_.rotation.x=Math.random()*6,_.rotation.y=Math.random()*6,_.rotation.z=Math.random()*6,os.add(_)}sa.setPixelRatio(window.devicePixelRatio),sa.setSize(ia.offsetWidth,ia.offsetHeight),sa.useLegacyLights=!1,document.body.addEventListener("pointermove",lb),window.addEventListener("resize",ob)}function ob(){hp=window.innerWidth/2,fp=window.innerHeight/2,Hi.aspect=window.innerWidth/window.innerHeight,Hi.updateProjectionMatrix(),sa.setSize(window.innerWidth,window.innerHeight)}function lb(i){i.isPrimary!==!1&&(cp=i.clientX-hp,up=i.clientY-fp)}function mp(){let i={root:null,threshold:.5};new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting?gp():cancelAnimationFrame(dp)})},i).observe(zu)}function gp(){dp=requestAnimationFrame(gp),cb()}function cb(){let i=Date.now()*5e-5;Hi.position.x+=(cp-Hi.position.x)*.05,Hi.position.y+=(-up-Hi.position.y)*.05,Hi.lookAt(os.position);for(let e=0;e<os.children.length;e++){let t=os.children[e];t instanceof La&&(t.rotation.y=i*(e<4?e+1:-(e+1)))}for(let e=0;e<Ha.length;e++){let t=ra[e][0],n=360*(t[0]+i)%360/360;Ha[e].color.setHSL(n,t[1],t[2],on)}sa.render(os,Hi)}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{(0,ku.default)("#enter-button").on("click",ub),op(),lp(),rp(),sp(),pp(),mp()});function ub(){let i=(0,ku.default)("#bg-video").get(0)?.firstChild;i instanceof HTMLVideoElement&&i.play()}})();
/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.6.9
  *)
*/
