(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{2867:function(e,t,r){var l=r(2868),n=r(2871),o=r(598),m=r(2873),h=r(1313),c=r(597),d=o.makeSpan;e.exports=function(e,t,r){r=r||new h({});var o=c.TEXT;r.displayMode&&(o=c.DISPLAY);var v=new m({style:o,size:"size5"}),y=n(e,t,v),f=l(e,v),z=d(["katex"],[y,f]);return r.displayMode?d(["katex-display"],[z]):z}},2868:function(e,t,r){var l=r(277),n=r(597),o=r(598),m=r(2870),h=r(1314),c=r(486),d=r(253),v=o.makeSpan,y=function(e,t,r){for(var l=[],i=0;i<e.length;i++){var n=e[i];l.push(k(n,t,r)),r=n}return l},f={mathord:"mord",textord:"mord",bin:"mbin",rel:"mrel",text:"mord",open:"mopen",close:"mclose",inner:"minner",genfrac:"mord",array:"mord",spacing:"mord",punct:"mpunct",ordgroup:"mord",op:"mop",katex:"mord",overline:"mord",underline:"mord",rule:"mord",leftright:"minner",sqrt:"mord",accent:"mord"},z=function(e){return null==e?f.mathord:"supsub"===e.type?z(e.value.base):"llap"===e.type||"rlap"===e.type?z(e.value):"color"===e.type||"sizing"===e.type||"styling"===e.type?z(e.value.value):"delimsizing"===e.type?f[e.value.delimType]:f[e.type]},w=function(e){return!!e&&("ordgroup"===e.type?1===e.value.length?w(e.value[0]):e:"color"===e.type&&1===e.value.value.length?w(e.value.value[0]):e)},M=function(e){var t=w(e);return"mathord"===t.type||"textord"===t.type||"bin"===t.type||"rel"===t.type||"inner"===t.type||"open"===t.type||"close"===t.type||"punct"===t.type},S=function(e){return v(["sizing","reset-"+e.size,"size5",e.style.reset(),n.TEXT.cls(),"nulldelimiter"])},x={mathord:function(e,t,r){return o.makeOrd(e,t,"mathord")},textord:function(e,t,r){return o.makeOrd(e,t,"textord")},bin:function(e,t,r){for(var l="mbin",n=r;n&&"color"===n.type;){var m=n.value.value;n=m[m.length-1]}return r&&!d.contains(["mbin","mopen","mrel","mop","mpunct"],z(n))||(e.type="textord",l="mord"),o.mathsym(e.value,e.mode,t.getColor(),[l])},rel:function(e,t,r){return o.mathsym(e.value,e.mode,t.getColor(),["mrel"])},open:function(e,t,r){return o.mathsym(e.value,e.mode,t.getColor(),["mopen"])},close:function(e,t,r){return o.mathsym(e.value,e.mode,t.getColor(),["mclose"])},inner:function(e,t,r){return o.mathsym(e.value,e.mode,t.getColor(),["minner"])},punct:function(e,t,r){return o.mathsym(e.value,e.mode,t.getColor(),["mpunct"])},ordgroup:function(e,t,r){return v(["mord",t.style.cls()],y(e.value,t.reset()))},text:function(e,t,r){return v(["text","mord",t.style.cls()],y(e.value.body,t.reset()))},color:function(e,t,r){var l=y(e.value.value,t.withColor(e.value.color),r);return new o.makeFragment(l)}};x.supsub=function(e,t,r){if(function(e,t){return!!e&&("op"===e.type?e.value.limits&&(t.style.size===n.DISPLAY.size||e.value.alwaysHandleSupSub):"accent"===e.type?M(e.value.base):null)}(e.value.base,t))return x[e.value.base.type](e,t,r);var l,m,sup,sub,d,y,f,base=k(e.value.base,t.reset());e.value.sup&&(sup=k(e.value.sup,t.withStyle(t.style.sup())),l=v([t.style.reset(),t.style.sup().cls()],[sup])),e.value.sub&&(sub=k(e.value.sub,t.withStyle(t.style.sub())),m=v([t.style.reset(),t.style.sub().cls()],[sub])),M(e.value.base)?(d=0,y=0):(d=base.height-c.metrics.supDrop,y=base.depth+c.metrics.subDrop),f=t.style===n.DISPLAY?c.metrics.sup1:t.style.cramped?c.metrics.sup3:c.metrics.sup2;var w,S=n.TEXT.sizeMultiplier*t.style.sizeMultiplier,N=.5/c.metrics.ptPerEm/S+"em";if(e.value.sup)if(e.value.sub){d=Math.max(d,f,sup.depth+.25*c.metrics.xHeight),y=Math.max(y,c.metrics.sub2);var T=c.metrics.defaultRuleThickness;if(d-sup.depth-(sub.height-y)<4*T){y=4*T-(d-sup.depth)+sub.height;var R=.8*c.metrics.xHeight-(d-sup.depth);R>0&&(d+=R,y-=R)}w=o.makeVList([{type:"elem",elem:m,shift:y},{type:"elem",elem:l,shift:-d}],"individualShift",null,t),base instanceof h.symbolNode&&(w.children[0].style.marginLeft=-base.italic+"em"),w.children[0].style.marginRight=N,w.children[1].style.marginRight=N}else d=Math.max(d,f,sup.depth+.25*c.metrics.xHeight),(w=o.makeVList([{type:"elem",elem:l}],"shift",-d,t)).children[0].style.marginRight=N;else y=Math.max(y,c.metrics.sub1,sub.height-.8*c.metrics.xHeight),(w=o.makeVList([{type:"elem",elem:m}],"shift",y,t)).children[0].style.marginRight=N,base instanceof h.symbolNode&&(w.children[0].style.marginLeft=-base.italic+"em");return v([z(e.value.base)],[base,w])},x.genfrac=function(e,t,r){var l=t.style;"display"===e.value.size?l=n.DISPLAY:"text"===e.value.size&&(l=n.TEXT);var h,d,y,f,z,w,M,x,N=l.fracNum(),T=l.fracDen(),R=k(e.value.numer,t.withStyle(N)),A=v([l.reset(),N.cls()],[R]),C=k(e.value.denom,t.withStyle(T)),D=v([l.reset(),T.cls()],[C]);if(h=e.value.hasBarLine?c.metrics.defaultRuleThickness/t.style.sizeMultiplier:0,l.size===n.DISPLAY.size?(d=c.metrics.num1,y=h>0?3*h:7*c.metrics.defaultRuleThickness,f=c.metrics.denom1):(h>0?(d=c.metrics.num2,y=h):(d=c.metrics.num3,y=3*c.metrics.defaultRuleThickness),f=c.metrics.denom2),0===h){var L=d-R.depth-(C.height-f);L<y&&(d+=.5*(y-L),f+=.5*(y-L)),z=o.makeVList([{type:"elem",elem:D,shift:f},{type:"elem",elem:A,shift:-d}],"individualShift",null,t)}else{var P=c.metrics.axisHeight;d-R.depth-(P+.5*h)<y&&(d+=y-(d-R.depth-(P+.5*h))),P-.5*h-(C.height-f)<y&&(f+=y-(P-.5*h-(C.height-f)));var I=v([t.style.reset(),n.TEXT.cls(),"frac-line"]);I.height=h;var E=-(P-.5*h);z=o.makeVList([{type:"elem",elem:D,shift:f},{type:"elem",elem:I,shift:E},{type:"elem",elem:A,shift:-d}],"individualShift",null,t)}return z.height*=l.sizeMultiplier/t.style.sizeMultiplier,z.depth*=l.sizeMultiplier/t.style.sizeMultiplier,w=l.size===n.DISPLAY.size?c.metrics.delim1:c.metrics.getDelim2(l),M=null==e.value.leftDelim?S(t):m.customSizedDelim(e.value.leftDelim,w,!0,t.withStyle(l),e.mode),x=null==e.value.rightDelim?S(t):m.customSizedDelim(e.value.rightDelim,w,!0,t.withStyle(l),e.mode),v(["mord",t.style.reset(),l.cls()],[M,v(["mfrac"],[z]),x],t.getColor())},x.array=function(e,t,r){var n,m,h=e.value.body.length,y=0,body=new Array(h),f=1/c.metrics.ptPerEm,z=5*f,w=12*f,M=d.deflt(e.value.arraystretch,1)*w,S=.7*M,x=.3*M,N=0;for(n=0;n<e.value.body.length;++n){var T=e.value.body[n],R=S,A=x;y<T.length&&(y=T.length);var C=new Array(T.length);for(m=0;m<T.length;++m){var D=k(T[m],t);A<D.depth&&(A=D.depth),R<D.height&&(R=D.height),C[m]=D}var L=0;if(e.value.rowGaps[n]){switch((L=e.value.rowGaps[n].value).unit){case"em":L=L.number;break;case"ex":L=L.number*c.metrics.emPerEx;break;default:console.error("Can't handle unit "+L.unit),L=0}L>0&&(A<(L+=x)&&(A=L),L=0)}C.height=R,C.depth=A,N+=R,C.pos=N,N+=A+L,body[n]=C}var P,I,E=N/2+c.metrics.axisHeight,F=e.value.cols||[],V=[];for(m=0,I=0;m<y||I<F.length;++m,++I){for(var X=F[I]||{},H=!0;"separator"===X.type;){if(H||((P=v(["arraycolsep"],[])).style.width=c.metrics.doubleRuleSep+"em",V.push(P)),"|"!==X.separator)throw new l("Invalid separator type: "+X.separator);var O=v(["vertical-separator"],[]);O.style.height=N+"em",O.style.verticalAlign=-(N-E)+"em",V.push(O),X=F[++I]||{},H=!1}if(!(m>=y)){var B;(m>0||e.value.hskipBeforeAndAfter)&&0!==(B=d.deflt(X.pregap,z))&&((P=v(["arraycolsep"],[])).style.width=B+"em",V.push(P));var col=[];for(n=0;n<h;++n){var Y=body[n],U=Y[m];if(U){var G=Y.pos-E;U.depth=Y.depth,U.height=Y.height,col.push({type:"elem",elem:U,shift:G})}}col=o.makeVList(col,"individualShift",null,t),col=v(["col-align-"+(X.align||"c")],[col]),V.push(col),(m<y-1||e.value.hskipBeforeAndAfter)&&0!==(B=d.deflt(X.postgap,z))&&((P=v(["arraycolsep"],[])).style.width=B+"em",V.push(P))}}return body=v(["mtable"],V),v(["mord"],[body],t.getColor())},x.spacing=function(e,t,r){return"\\ "===e.value||"\\space"===e.value||" "===e.value||"~"===e.value?v(["mord","mspace"],[o.mathsym(e.value,e.mode)]):v(["mord","mspace",o.spacingFunctions[e.value].className])},x.llap=function(e,t,r){var l=v(["inner"],[k(e.value.body,t.reset())]),n=v(["fix"],[]);return v(["llap",t.style.cls()],[l,n])},x.rlap=function(e,t,r){var l=v(["inner"],[k(e.value.body,t.reset())]),n=v(["fix"],[]);return v(["rlap",t.style.cls()],[l,n])},x.op=function(e,t,r){var l,m,h=!1;"supsub"===e.type&&(l=e.value.sup,m=e.value.sub,e=e.value.base,h=!0);var base,y=!1;t.style.size===n.DISPLAY.size&&e.value.symbol&&!d.contains(["\\smallint"],e.value.body)&&(y=!0);var f=0,z=0;if(e.value.symbol){var style=y?"Size2-Regular":"Size1-Regular";f=((base=o.makeSymbol(e.value.body,style,"math",t.getColor(),["op-symbol",y?"large-op":"small-op","mop"])).height-base.depth)/2-c.metrics.axisHeight*t.style.sizeMultiplier,z=base.italic}else{for(var output=[],i=1;i<e.value.body.length;i++)output.push(o.mathsym(e.value.body[i],e.mode));base=v(["mop"],output,t.getColor())}if(h){var w,M,S,x,N,T,R;if(base=v([],[base]),l){var sup=k(l,t.withStyle(t.style.sup()));w=v([t.style.reset(),t.style.sup().cls()],[sup]),M=Math.max(c.metrics.bigOpSpacing1,c.metrics.bigOpSpacing3-sup.depth)}if(m){var sub=k(m,t.withStyle(t.style.sub()));S=v([t.style.reset(),t.style.sub().cls()],[sub]),x=Math.max(c.metrics.bigOpSpacing2,c.metrics.bigOpSpacing4-sub.height)}if(l)if(m){if(!l&&!m)return base;R=c.metrics.bigOpSpacing5+S.height+S.depth+x+base.depth+f,(N=o.makeVList([{type:"kern",size:c.metrics.bigOpSpacing5},{type:"elem",elem:S},{type:"kern",size:x},{type:"elem",elem:base},{type:"kern",size:M},{type:"elem",elem:w},{type:"kern",size:c.metrics.bigOpSpacing5}],"bottom",R,t)).children[0].style.marginLeft=-z+"em",N.children[2].style.marginLeft=z+"em"}else R=base.depth+f,(N=o.makeVList([{type:"elem",elem:base},{type:"kern",size:M},{type:"elem",elem:w},{type:"kern",size:c.metrics.bigOpSpacing5}],"bottom",R,t)).children[1].style.marginLeft=z+"em";else T=base.height-f,(N=o.makeVList([{type:"kern",size:c.metrics.bigOpSpacing5},{type:"elem",elem:S},{type:"kern",size:x},{type:"elem",elem:base}],"top",T,t)).children[0].style.marginLeft=-z+"em";return v(["mop","op-limits"],[N])}return e.value.symbol&&(base.style.top=f+"em"),base},x.katex=function(e,t,r){var l=v(["k"],[o.mathsym("K",e.mode)]),a=v(["a"],[o.mathsym("A",e.mode)]);a.height=.75*(a.height+.2),a.depth=.75*(a.height-.2);var n=v(["t"],[o.mathsym("T",e.mode)]),m=v(["e"],[o.mathsym("E",e.mode)]);m.height=m.height-.2155,m.depth=m.depth+.2155;var h=v(["x"],[o.mathsym("X",e.mode)]);return v(["katex-logo","mord"],[l,a,n,m,h],t.getColor())},x.overline=function(e,t,r){var l=k(e.value.body,t.withStyle(t.style.cramp())),m=c.metrics.defaultRuleThickness/t.style.sizeMultiplier,line=v([t.style.reset(),n.TEXT.cls(),"overline-line"]);line.height=m,line.maxFontSize=1;var h=o.makeVList([{type:"elem",elem:l},{type:"kern",size:3*m},{type:"elem",elem:line},{type:"kern",size:m}],"firstBaseline",null,t);return v(["overline","mord"],[h],t.getColor())},x.underline=function(e,t,r){var l=k(e.value.body,t),m=c.metrics.defaultRuleThickness/t.style.sizeMultiplier,line=v([t.style.reset(),n.TEXT.cls(),"underline-line"]);line.height=m,line.maxFontSize=1;var h=o.makeVList([{type:"kern",size:m},{type:"elem",elem:line},{type:"kern",size:3*m},{type:"elem",elem:l}],"top",l.height,t);return v(["underline","mord"],[h],t.getColor())},x.sqrt=function(e,t,r){var l=k(e.value.body,t.withStyle(t.style.cramp())),h=c.metrics.defaultRuleThickness/t.style.sizeMultiplier,line=v([t.style.reset(),n.TEXT.cls(),"sqrt-line"],[],t.getColor());line.height=h,line.maxFontSize=1;var d=h;t.style.id<n.TEXT.id&&(d=c.metrics.xHeight);var y=h+d/4,f=(l.height+l.depth)*t.style.sizeMultiplier+y+h,z=v(["sqrt-sign"],[m.customSizedDelim("\\surd",f,!1,t,e.mode)],t.getColor()),w=z.height+z.depth-h;w>l.height+l.depth+y&&(y=(y+w-l.height-l.depth)/2);var body,M=-(l.height+y+h)+z.height;if(z.style.top=M+"em",z.height-=M,z.depth+=M,body=0===l.height&&0===l.depth?v():o.makeVList([{type:"elem",elem:l},{type:"kern",size:y},{type:"elem",elem:line},{type:"kern",size:h}],"firstBaseline",null,t),e.value.index){var S=k(e.value.index,t.withStyle(n.SCRIPTSCRIPT)),x=v([t.style.reset(),n.SCRIPTSCRIPT.cls()],[S]),N=.6*(Math.max(z.height,body.height)-Math.max(z.depth,body.depth)),T=o.makeVList([{type:"elem",elem:x}],"shift",-N,t),R=v(["root"],[T]);return v(["sqrt","mord"],[R,z,body])}return v(["sqrt","mord"],[z,body])},x.sizing=function(e,t,r){var l=y(e.value.value,t.withSize(e.value.size),r),span=v(["mord"],[v(["sizing","reset-"+t.size,e.value.size,t.style.cls()],l)]),n=o.sizingMultiplier[e.value.size];return span.maxFontSize=n*t.style.sizeMultiplier,span},x.styling=function(e,t,r){var l={display:n.DISPLAY,text:n.TEXT,script:n.SCRIPT,scriptscript:n.SCRIPTSCRIPT}[e.value.style],o=y(e.value.value,t.withStyle(l),r);return v([t.style.reset(),l.cls()],o)},x.font=function(e,t,r){var l=e.value.font;return k(e.value.body,t.withFont(l),r)},x.delimsizing=function(e,t,r){var l=e.value.value;return"."===l?v([f[e.value.delimType]]):v([f[e.value.delimType]],[m.sizedDelim(l,e.value.size,t,e.mode)])},x.leftright=function(e,t,r){for(var l,n,o=y(e.value.body,t.reset()),h=0,c=0,i=0;i<o.length;i++)h=Math.max(o[i].height,h),c=Math.max(o[i].depth,c);return h*=t.style.sizeMultiplier,c*=t.style.sizeMultiplier,l="."===e.value.left?S(t):m.leftRightDelim(e.value.left,h,c,t,e.mode),o.unshift(l),n="."===e.value.right?S(t):m.leftRightDelim(e.value.right,h,c,t,e.mode),o.push(n),v(["minner",t.style.cls()],o,t.getColor())},x.rule=function(e,t,r){var l=v(["mord","rule"],[],t.getColor()),n=0;e.value.shift&&(n=e.value.shift.number,"ex"===e.value.shift.unit&&(n*=c.metrics.xHeight));var o=e.value.width.number;"ex"===e.value.width.unit&&(o*=c.metrics.xHeight);var m=e.value.height.number;return"ex"===e.value.height.unit&&(m*=c.metrics.xHeight),n/=t.style.sizeMultiplier,o/=t.style.sizeMultiplier,m/=t.style.sizeMultiplier,l.style.borderRightWidth=o+"em",l.style.borderTopWidth=m+"em",l.style.bottom=n+"em",l.width=o,l.height=m+n,l.depth=-n,l},x.accent=function(e,t,r){var l,base=e.value.base;if("supsub"===e.type){var n=e;base=(e=n.value.base).value.base,n.value.base=base,l=k(n,t.reset(),r)}var m,body=k(base,t.withStyle(t.style.cramp()));if(M(base)){var h=w(base);m=k(h,t.withStyle(t.style.cramp())).skew}else m=0;var d=Math.min(body.height,c.metrics.xHeight),y=o.makeSymbol(e.value.accent,"Main-Regular","math",t.getColor());y.italic=0;var f="\\vec"===e.value.accent?"accent-vec":null,z=v(["accent-body",f],[v([],[y])]);(z=o.makeVList([{type:"elem",elem:body},{type:"kern",size:-d},{type:"elem",elem:z}],"firstBaseline",null,t)).children[1].style.marginLeft=2*m+"em";var S=v(["mord","accent"],[z]);return l?(l.children[0]=S,l.height=Math.max(S.height,l.height),l.classes[0]="mord",l):S},x.phantom=function(e,t,r){var l=y(e.value.value,t.withPhantom(),r);return new o.makeFragment(l)};var k=function(e,t,r){if(!e)return v();if(x[e.type]){var n,m=x[e.type](e,t,r);return t.style!==t.parentStyle&&(n=t.style.sizeMultiplier/t.parentStyle.sizeMultiplier,m.height*=n,m.depth*=n),t.size!==t.parentSize&&(n=o.sizingMultiplier[t.size]/o.sizingMultiplier[t.parentSize],m.height*=n,m.depth*=n),m}throw new l("Got group of unknown type: '"+e.type+"'")};e.exports=function(e,t){e=JSON.parse(JSON.stringify(e));var r=y(e,t),body=v(["base",t.style.cls()],r),l=v(["strut"]),n=v(["strut","bottom"]);l.style.height=body.height+"em",n.style.height=body.height+body.depth+"em",n.style.verticalAlign=-body.depth+"em";var o=v(["katex-html"],[l,n,body]);return o.setAttribute("aria-hidden","true"),o}},2870:function(e,t,r){var l=r(277),n=r(597),o=r(598),m=r(486),h=r(599),c=r(253),d=o.makeSpan,v=function(symbol,e){return h.math[symbol]&&h.math[symbol].replace?m.getCharacterMetrics(h.math[symbol].replace,e):m.getCharacterMetrics(symbol,e)},y=function(e,t,r){var span=d(["style-wrap",r.style.reset(),t.cls()],[e]),l=t.sizeMultiplier/r.style.sizeMultiplier;return span.height*=l,span.depth*=l,span.maxFontSize=t.sizeMultiplier,span},f=function(e,t,r,l,h){var c=function(e,t,r){return o.makeSymbol(e,"Size"+t+"-Regular",r)}(e,t,h),span=y(d(["delimsizing","size"+t],[c],l.getColor()),n.TEXT,l);if(r){var v=(1-l.style.sizeMultiplier)*m.metrics.axisHeight;span.style.top=v+"em",span.height-=v,span.depth+=v}return span},z=function(symbol,e,t){var r;return"Size1-Regular"===e?r="delim-size1":"Size4-Regular"===e&&(r="delim-size4"),{type:"elem",elem:d(["delimsizinginner",r],[d([],[o.makeSymbol(symbol,e,t)])])}},w=function(e,t,r,l,h){var c,f,w,M;c=w=M=e,f=null;var S="Size1-Regular";"\\uparrow"===e?w=M="⏐":"\\Uparrow"===e?w=M="‖":"\\downarrow"===e?c=w="⏐":"\\Downarrow"===e?c=w="‖":"\\updownarrow"===e?(c="\\uparrow",w="⏐",M="\\downarrow"):"\\Updownarrow"===e?(c="\\Uparrow",w="‖",M="\\Downarrow"):"["===e||"\\lbrack"===e?(c="⎡",w="⎢",M="⎣",S="Size4-Regular"):"]"===e||"\\rbrack"===e?(c="⎤",w="⎥",M="⎦",S="Size4-Regular"):"\\lfloor"===e?(w=c="⎢",M="⎣",S="Size4-Regular"):"\\lceil"===e?(c="⎡",w=M="⎢",S="Size4-Regular"):"\\rfloor"===e?(w=c="⎥",M="⎦",S="Size4-Regular"):"\\rceil"===e?(c="⎤",w=M="⎥",S="Size4-Regular"):"("===e?(c="⎛",w="⎜",M="⎝",S="Size4-Regular"):")"===e?(c="⎞",w="⎟",M="⎠",S="Size4-Regular"):"\\{"===e||"\\lbrace"===e?(c="⎧",f="⎨",M="⎩",w="⎪",S="Size4-Regular"):"\\}"===e||"\\rbrace"===e?(c="⎫",f="⎬",M="⎭",w="⎪",S="Size4-Regular"):"\\lgroup"===e?(c="⎧",M="⎩",w="⎪",S="Size4-Regular"):"\\rgroup"===e?(c="⎫",M="⎭",w="⎪",S="Size4-Regular"):"\\lmoustache"===e?(c="⎧",M="⎭",w="⎪",S="Size4-Regular"):"\\rmoustache"===e?(c="⎫",M="⎩",w="⎪",S="Size4-Regular"):"\\surd"===e&&(c="",M="⎷",w="",S="Size4-Regular");var x=v(c,S),k=x.height+x.depth,N=v(w,S),T=N.height+N.depth,R=v(M,S),A=R.height+R.depth,C=0,D=1;if(null!==f){var L=v(f,S);C=L.height+L.depth,D=2}var P=k+A+C,I=Math.ceil((t-P)/(D*T)),E=P+I*D*T,F=m.metrics.axisHeight;r&&(F*=l.style.sizeMultiplier);var i,V=E/2-F,X=[];if(X.push(z(M,S,h)),null===f)for(i=0;i<I;i++)X.push(z(w,S,h));else{for(i=0;i<I;i++)X.push(z(w,S,h));for(X.push(z(f,S,h)),i=0;i<I;i++)X.push(z(w,S,h))}X.push(z(c,S,h));var H=o.makeVList(X,"bottom",V,l);return y(d(["delimsizing","mult"],[H],l.getColor()),n.TEXT,l)},M=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","\\surd"],S=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\\lmoustache","\\rmoustache"],x=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],k=[0,1.2,1.8,2.4,3],N=[{type:"small",style:n.SCRIPTSCRIPT},{type:"small",style:n.SCRIPT},{type:"small",style:n.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],T=[{type:"small",style:n.SCRIPTSCRIPT},{type:"small",style:n.SCRIPT},{type:"small",style:n.TEXT},{type:"stack"}],R=[{type:"small",style:n.SCRIPTSCRIPT},{type:"small",style:n.SCRIPT},{type:"small",style:n.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],A=function(e,t,r,l,n){"<"===e||"\\lt"===e?e="\\langle":">"!==e&&"\\gt"!==e||(e="\\rangle");var h=function(e,t,r,l){for(var n,i=Math.min(2,3-l.style.size);i<r.length&&"stack"!==r[i].type;i++){var o=v(e,"small"===(n=r[i]).type?"Main-Regular":"large"===n.type?"Size"+n.size+"-Regular":"stack"===n.type?"Size4-Regular":void 0),m=o.height+o.depth;if("small"===r[i].type&&(m*=r[i].style.sizeMultiplier),m>t)return r[i]}return r[r.length-1]}(e,t,c.contains(x,e)?N:c.contains(M,e)?R:T,l);return"small"===h.type?function(e,style,t,r,l){var text=o.makeSymbol(e,"Main-Regular",l),span=y(text,style,r);if(t){var n=(1-r.style.sizeMultiplier/style.sizeMultiplier)*m.metrics.axisHeight;span.style.top=n+"em",span.height-=n,span.depth+=n}return span}(e,h.style,r,l,n):"large"===h.type?f(e,h.size,r,l,n):"stack"===h.type?w(e,t,r,l,n):void 0};e.exports={sizedDelim:function(e,t,r,n){if("<"===e||"\\lt"===e?e="\\langle":">"!==e&&"\\gt"!==e||(e="\\rangle"),c.contains(M,e)||c.contains(x,e))return f(e,t,!1,r,n);if(c.contains(S,e))return w(e,k[t],!1,r,n);throw new l("Illegal delimiter: '"+e+"'")},customSizedDelim:A,leftRightDelim:function(e,t,r,l,n){var o=m.metrics.axisHeight*l.style.sizeMultiplier,h=5/m.metrics.ptPerEm,c=Math.max(t-o,r+o),d=Math.max(c/500*901,2*c-h);return A(e,d,!0,l,n)}}},2871:function(e,t,r){var l=r(598),n=r(486),o=r(2872),m=r(277),h=r(599),c=r(253),d=l.makeSpan,v=l.fontMap,y=function(text,e){return h[e][text]&&h[e][text].replace&&(text=h[e][text].replace),new o.TextNode(text)},f=function(e,t){var r=t.font;if(!r)return null;var l=e.mode;if("mathit"===r)return"italic";var o=e.value;if(c.contains(["\\imath","\\jmath"],o))return null;h[l][o]&&h[l][o].replace&&(o=h[l][o].replace);var m=v[r].fontName;return n.getCharacterMetrics(o,m)?v[t.font].variant:null},z={mathord:function(e,t){var r=new o.MathNode("mi",[y(e.value,e.mode)]),l=f(e,t);return l&&r.setAttribute("mathvariant",l),r},textord:function(e,t){var r,text=y(e.value,e.mode),l=f(e,t)||"normal";return/[0-9]/.test(e.value)?(r=new o.MathNode("mn",[text]),t.font&&r.setAttribute("mathvariant",l)):(r=new o.MathNode("mi",[text])).setAttribute("mathvariant",l),r},bin:function(e){return new o.MathNode("mo",[y(e.value,e.mode)])},rel:function(e){return new o.MathNode("mo",[y(e.value,e.mode)])},open:function(e){return new o.MathNode("mo",[y(e.value,e.mode)])},close:function(e){return new o.MathNode("mo",[y(e.value,e.mode)])},inner:function(e){return new o.MathNode("mo",[y(e.value,e.mode)])},punct:function(e){var t=new o.MathNode("mo",[y(e.value,e.mode)]);return t.setAttribute("separator","true"),t},ordgroup:function(e,t){var r=w(e.value,t);return new o.MathNode("mrow",r)},text:function(e,t){var r=w(e.value.body,t);return new o.MathNode("mtext",r)},color:function(e,t){var r=w(e.value.value,t),l=new o.MathNode("mstyle",r);return l.setAttribute("mathcolor",e.value.color),l},supsub:function(e,t){var r,l=[M(e.value.base,t)];return e.value.sub&&l.push(M(e.value.sub,t)),e.value.sup&&l.push(M(e.value.sup,t)),r=e.value.sub?e.value.sup?"msubsup":"msub":"msup",new o.MathNode(r,l)},genfrac:function(e,t){var r=new o.MathNode("mfrac",[M(e.value.numer,t),M(e.value.denom,t)]);if(e.value.hasBarLine||r.setAttribute("linethickness","0px"),null!=e.value.leftDelim||null!=e.value.rightDelim){var l=[];if(null!=e.value.leftDelim){var n=new o.MathNode("mo",[new o.TextNode(e.value.leftDelim)]);n.setAttribute("fence","true"),l.push(n)}if(l.push(r),null!=e.value.rightDelim){var m=new o.MathNode("mo",[new o.TextNode(e.value.rightDelim)]);m.setAttribute("fence","true"),l.push(m)}return new o.MathNode("mrow",l)}return r},array:function(e,t){return new o.MathNode("mtable",e.value.body.map((function(e){return new o.MathNode("mtr",e.map((function(e){return new o.MathNode("mtd",[M(e,t)])})))})))},sqrt:function(e,t){return e.value.index?new o.MathNode("mroot",[M(e.value.body,t),M(e.value.index,t)]):new o.MathNode("msqrt",[M(e.value.body,t)])},leftright:function(e,t){var r=w(e.value.body,t);if("."!==e.value.left){var l=new o.MathNode("mo",[y(e.value.left,e.mode)]);l.setAttribute("fence","true"),r.unshift(l)}if("."!==e.value.right){var n=new o.MathNode("mo",[y(e.value.right,e.mode)]);n.setAttribute("fence","true"),r.push(n)}return new o.MathNode("mrow",r)},accent:function(e,t){var r=new o.MathNode("mo",[y(e.value.accent,e.mode)]),l=new o.MathNode("mover",[M(e.value.base,t),r]);return l.setAttribute("accent","true"),l},spacing:function(e){var t;return"\\ "===e.value||"\\space"===e.value||" "===e.value||"~"===e.value?t=new o.MathNode("mtext",[new o.TextNode(" ")]):(t=new o.MathNode("mspace")).setAttribute("width",l.spacingFunctions[e.value].size),t},op:function(e){return e.value.symbol?new o.MathNode("mo",[y(e.value.body,e.mode)]):new o.MathNode("mi",[new o.TextNode(e.value.body.slice(1))])},katex:function(e){return new o.MathNode("mtext",[new o.TextNode("KaTeX")])},font:function(e,t){var r=e.value.font;return M(e.value.body,t.withFont(r))},delimsizing:function(e){var t=[];"."!==e.value.value&&t.push(y(e.value.value,e.mode));var r=new o.MathNode("mo",t);return"open"===e.value.delimType||"close"===e.value.delimType?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r},styling:function(e,t){var r=w(e.value.value,t),l=new o.MathNode("mstyle",r),n={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]}[e.value.style];return l.setAttribute("scriptlevel",n[0]),l.setAttribute("displaystyle",n[1]),l},sizing:function(e,t){var r=w(e.value.value,t),n=new o.MathNode("mstyle",r);return n.setAttribute("mathsize",l.sizingMultiplier[e.value.size]+"em"),n},overline:function(e,t){var r=new o.MathNode("mo",[new o.TextNode("‾")]);r.setAttribute("stretchy","true");var l=new o.MathNode("mover",[M(e.value.body,t),r]);return l.setAttribute("accent","true"),l},underline:function(e,t){var r=new o.MathNode("mo",[new o.TextNode("‾")]);r.setAttribute("stretchy","true");var l=new o.MathNode("munder",[M(e.value.body,t),r]);return l.setAttribute("accentunder","true"),l},rule:function(e){return new o.MathNode("mrow")},llap:function(e,t){var r=new o.MathNode("mpadded",[M(e.value.body,t)]);return r.setAttribute("lspace","-1width"),r.setAttribute("width","0px"),r},rlap:function(e,t){var r=new o.MathNode("mpadded",[M(e.value.body,t)]);return r.setAttribute("width","0px"),r},phantom:function(e,t,r){var l=w(e.value.value,t);return new o.MathNode("mphantom",l)}},w=function(e,t){for(var r=[],i=0;i<e.length;i++){var l=e[i];r.push(M(l,t))}return r},M=function(e,t){if(!e)return new o.MathNode("mrow");if(z[e.type])return z[e.type](e,t);throw new m("Got group of unknown type: '"+e.type+"'")};e.exports=function(e,t,r){var l=w(e,r),n=new o.MathNode("mrow",l),m=new o.MathNode("annotation",[new o.TextNode(t)]);m.setAttribute("encoding","application/x-tex");var h=new o.MathNode("semantics",[n,m]),c=new o.MathNode("math",[h]);return d(["katex-mathml"],[c])}},598:function(e,t,r){var l=r(1314),n=r(486),o=r(599),m=r(253),h=["\\Gamma","\\Delta","\\Theta","\\Lambda","\\Xi","\\Pi","\\Sigma","\\Upsilon","\\Phi","\\Psi","\\Omega"],c=["ı","ȷ"],d=function(e,style,t,r,m){o[t][e]&&o[t][e].replace&&(e=o[t][e].replace);var h,c=n.getCharacterMetrics(e,style);return c?h=new l.symbolNode(e,c.height,c.depth,c.italic,c.skew,m):("undefined"!=typeof console&&console.warn("No character metrics for '"+e+"' in style '"+style+"'"),h=new l.symbolNode(e,0,0,0,0,m)),r&&(h.style.color=r),h},v=function(e,t,r,l,n){if("mathord"===n)return y(e,t,r,l);if("textord"===n)return d(e,"Main-Regular",t,r,l.concat(["mathrm"]));throw new Error("unexpected type: "+n+" in mathDefault")},y=function(e,t,r,l){return/[0-9]/.test(e.charAt(0))||m.contains(c,e)||m.contains(h,e)?d(e,"Main-Italic",t,r,l.concat(["mainit"])):d(e,"Math-Italic",t,r,l.concat(["mathit"]))},f=function(e){var t=0,r=0,l=0;if(e.children)for(var i=0;i<e.children.length;i++)e.children[i].height>t&&(t=e.children[i].height),e.children[i].depth>r&&(r=e.children[i].depth),e.children[i].maxFontSize>l&&(l=e.children[i].maxFontSize);e.height=t,e.depth=r,e.maxFontSize=l},z=function(e,t,r){var span=new l.span(e,t);return f(span),r&&(span.style.color=r),span},w={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}};e.exports={fontMap:w,makeSymbol:d,mathsym:function(e,t,r,l){return"\\"===e||"main"===o[t][e].font?d(e,"Main-Regular",t,r,l):d(e,"AMS-Regular",t,r,l.concat(["amsrm"]))},makeSpan:z,makeFragment:function(e){var t=new l.documentFragment(e);return f(t),t},makeVList:function(e,t,r,n){var o,m,i;if("individualShift"===t){var h=e;for(e=[h[0]],m=o=-h[0].shift-h[0].elem.depth,i=1;i<h.length;i++){var c=-h[i].shift-m-h[i].elem.depth,d=c-(h[i-1].elem.height+h[i-1].elem.depth);m+=c,e.push({type:"kern",size:d}),e.push(h[i])}}else if("top"===t){var v=r;for(i=0;i<e.length;i++)"kern"===e[i].type?v-=e[i].size:v-=e[i].elem.height+e[i].elem.depth;o=v}else o="bottom"===t?-r:"shift"===t?-e[0].elem.depth-r:"firstBaseline"===t?-e[0].elem.depth:0;var y=0;for(i=0;i<e.length;i++)"elem"===e[i].type&&(y=Math.max(y,e[i].elem.maxFontSize));var f=function(e,t){var r=z([],[new l.symbolNode("​")]);return r.style.fontSize=t/e.style.sizeMultiplier+"em",z(["fontsize-ensurer","reset-"+e.size,"size5"],[r])}(n,y),w=[];for(m=o,i=0;i<e.length;i++)if("kern"===e[i].type)m+=e[i].size;else{var M=e[i].elem,S=-M.depth-m;m+=M.height+M.depth;var x=z([],[f,M]);x.height-=S,x.depth+=S,x.style.top=S+"em",w.push(x)}var k=z(["baseline-fix"],[f,new l.symbolNode("​")]);w.push(k);var N=z(["vlist"],w);return N.height=Math.max(m,N.height),N.depth=Math.max(-o,N.depth),N},makeOrd:function(e,t,r){var l=e.mode,h=e.value;o[l][h]&&o[l][h].replace&&(h=o[l][h].replace);var f=["mord"],z=t.getColor(),M=t.font;if(M){if("mathit"===M||m.contains(c,h))return y(h,l,z,f);var S=w[M].fontName;return n.getCharacterMetrics(h,S)?d(h,S,l,z,f.concat([M])):v(h,l,z,f,r)}return v(h,l,z,f,r)},sizingMultiplier:{size1:.5,size2:.7,size3:.8,size4:.9,size5:1,size6:1.2,size7:1.44,size8:1.73,size9:2.07,size10:2.49},spacingFunctions:{"\\qquad":{size:"2em",className:"qquad"},"\\quad":{size:"1em",className:"quad"},"\\enspace":{size:"0.5em",className:"enspace"},"\\;":{size:"0.277778em",className:"thickspace"},"\\:":{size:"0.22222em",className:"mediumspace"},"\\,":{size:"0.16667em",className:"thinspace"},"\\!":{size:"-0.16667em",className:"negativethinspace"}}}}}]);