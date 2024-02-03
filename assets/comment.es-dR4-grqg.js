import{c as K,h as Q}from"./codemirror.es2-qCFONIOJ.js";var X=Object.defineProperty,I=(S,A)=>X(S,"name",{value:A,configurable:!0});function q(S,A){for(var f=0;f<A.length;f++){const p=A[f];if(typeof p!="string"&&!Array.isArray(p)){for(const s in p)if(s!=="default"&&!(s in S)){const r=Object.getOwnPropertyDescriptor(p,s);r&&Object.defineProperty(S,s,r.get?r:{enumerable:!0,get:()=>p[s]})}}}return Object.freeze(Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}))}I(q,"_mergeNamespaces");var $={exports:{}};(function(S,A){(function(f){f(K())})(function(f){var p={},s=/[^\s\u00a0]/,r=f.Pos,J=f.cmpPos;function N(t){var i=t.search(s);return i==-1?0:i}I(N,"firstNonWS"),f.commands.toggleComment=function(t){t.toggleComment()},f.defineExtension("toggleComment",function(t){t||(t=p);for(var i=this,n=1/0,e=this.listSelections(),g=null,m=e.length-1;m>=0;m--){var o=e[m].from(),l=e[m].to();o.line>=n||(l.line>=n&&(l=r(n,0)),n=o.line,g==null?i.uncomment(o,l,t)?g="un":(i.lineComment(o,l,t),g="line"):g=="un"?i.uncomment(o,l,t):i.lineComment(o,l,t))}});function z(t,i,n){return/\bstring\b/.test(t.getTokenTypeAt(r(i.line,0)))&&!/^[\'\"\`]/.test(n)}I(z,"probablyInsideString");function j(t,i){var n=t.getMode();return n.useInnerComments===!1||!n.innerMode?n:t.getModeAt(i)}I(j,"getMode"),f.defineExtension("lineComment",function(t,i,n){n||(n=p);var e=this,g=j(e,t),m=e.getLine(t.line);if(!(m==null||z(e,t,m))){var o=n.lineComment||g.lineComment;if(!o){(n.blockCommentStart||g.blockCommentStart)&&(n.fullLines=!0,e.blockComment(t,i,n));return}var l=Math.min(i.ch!=0||i.line==t.line?i.line+1:i.line,e.lastLine()+1),b=n.padding==null?" ":n.padding,c=n.commentBlankLines||t.line==i.line;e.operation(function(){if(n.indent){for(var d=null,a=t.line;a<l;++a){var u=e.getLine(a),h=u.slice(0,N(u));(d==null||d.length>h.length)&&(d=h)}for(var a=t.line;a<l;++a){var u=e.getLine(a),v=d.length;!c&&!s.test(u)||(u.slice(0,v)!=d&&(v=N(u)),e.replaceRange(d+o+b,r(a,0),r(a,v)))}}else for(var a=t.line;a<l;++a)(c||s.test(e.getLine(a)))&&e.replaceRange(o+b,r(a,0))})}}),f.defineExtension("blockComment",function(t,i,n){n||(n=p);var e=this,g=j(e,t),m=n.blockCommentStart||g.blockCommentStart,o=n.blockCommentEnd||g.blockCommentEnd;if(!m||!o){(n.lineComment||g.lineComment)&&n.fullLines!=!1&&e.lineComment(t,i,n);return}if(!/\bcomment\b/.test(e.getTokenTypeAt(r(t.line,0)))){var l=Math.min(i.line,e.lastLine());l!=t.line&&i.ch==0&&s.test(e.getLine(l))&&--l;var b=n.padding==null?" ":n.padding;t.line>l||e.operation(function(){if(n.fullLines!=!1){var c=s.test(e.getLine(l));e.replaceRange(b+o,r(l)),e.replaceRange(m+b,r(t.line,0));var d=n.blockCommentLead||g.blockCommentLead;if(d!=null)for(var a=t.line+1;a<=l;++a)(a!=l||c)&&e.replaceRange(d+b,r(a,0))}else{var u=J(e.getCursor("to"),i)==0,h=!e.somethingSelected();e.replaceRange(o,i),u&&e.setSelection(h?i:e.getCursor("from"),i),e.replaceRange(m,t)}})}}),f.defineExtension("uncomment",function(t,i,n){n||(n=p);var e=this,g=j(e,t),m=Math.min(i.ch!=0||i.line==t.line?i.line:i.line-1,e.lastLine()),o=Math.min(t.line,m),l=n.lineComment||g.lineComment,b=[],c=n.padding==null?" ":n.padding,d;e:{if(!l)break e;for(var a=o;a<=m;++a){var u=e.getLine(a),h=u.indexOf(l);if(h>-1&&!/comment/.test(e.getTokenTypeAt(r(a,h+1)))&&(h=-1),h==-1&&s.test(u)||h>-1&&s.test(u.slice(0,h)))break e;b.push(u)}if(e.operation(function(){for(var C=o;C<=m;++C){var y=b[C-o],O=y.indexOf(l),k=O+l.length;O<0||(y.slice(k,k+c.length)==c&&(k+=c.length),d=!0,e.replaceRange("",r(C,O),r(C,k)))}}),d)return!0}var v=n.blockCommentStart||g.blockCommentStart,L=n.blockCommentEnd||g.blockCommentEnd;if(!v||!L)return!1;var w=n.blockCommentLead||g.blockCommentLead,E=e.getLine(o),P=E.indexOf(v);if(P==-1)return!1;var M=m==o?E:e.getLine(m),R=M.indexOf(L,m==o?P+v.length:0),B=r(o,P+1),D=r(m,R+1);if(R==-1||!/comment/.test(e.getTokenTypeAt(B))||!/comment/.test(e.getTokenTypeAt(D))||e.getRange(B,D,`
`).indexOf(L)>-1)return!1;var x=E.lastIndexOf(v,t.ch),T=x==-1?-1:E.slice(0,t.ch).indexOf(L,x+v.length);if(x!=-1&&T!=-1&&T+L.length!=t.ch)return!1;T=M.indexOf(L,i.ch);var W=M.slice(i.ch).lastIndexOf(v,T-i.ch);return x=T==-1||W==-1?-1:i.ch+W,T!=-1&&x!=-1&&x!=i.ch?!1:(e.operation(function(){e.replaceRange("",r(m,R-(c&&M.slice(R-c.length,R)==c?c.length:0)),r(m,R+L.length));var C=P+v.length;if(c&&E.slice(C,C+c.length)==c&&(C+=c.length),e.replaceRange("",r(o,P),r(o,C)),w)for(var y=o+1;y<=m;++y){var O=e.getLine(y),k=O.indexOf(w);if(!(k==-1||s.test(O.slice(0,k)))){var _=k+w.length;c&&O.slice(_,_+c.length)==c&&(_+=c.length),e.replaceRange("",r(y,k),r(y,_))}}}),!0)})})})();var F=$.exports;const G=Q(F),U=q({__proto__:null,default:G},[F]);export{U as c};
