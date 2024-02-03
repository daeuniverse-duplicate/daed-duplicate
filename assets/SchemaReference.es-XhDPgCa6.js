import{s as b}from"./forEachState.es-b3Q3QezT.js";import{o as l,Z as k,I as F,Y as h,_ as S,$ as g,a0 as D,a1 as T,e as Q}from"./index-egzVLQof.js";var j=Object.defineProperty,r=(t,n)=>j(t,"name",{value:n,configurable:!0});function V(t,n){const e={schema:t,type:null,parentType:null,inputType:null,directiveDef:null,fieldDef:null,argDef:null,argDefs:null,objectFieldDefs:null};return b(n,a=>{var u,p;switch(a.kind){case"Query":case"ShortQuery":e.type=t.getQueryType();break;case"Mutation":e.type=t.getMutationType();break;case"Subscription":e.type=t.getSubscriptionType();break;case"InlineFragment":case"FragmentDefinition":a.type&&(e.type=t.getType(a.type));break;case"Field":case"AliasedField":e.fieldDef=e.type&&a.name?c(t,e.parentType,a.name):null,e.type=(u=e.fieldDef)===null||u===void 0?void 0:u.type;break;case"SelectionSet":e.parentType=e.type?l(e.type):null;break;case"Directive":e.directiveDef=a.name?t.getDirective(a.name):null;break;case"Arguments":const s=a.prevState?a.prevState.kind==="Field"?e.fieldDef:a.prevState.kind==="Directive"?e.directiveDef:a.prevState.kind==="AliasedField"?a.prevState.name&&c(t,e.parentType,a.prevState.name):null:null;e.argDefs=s?s.args:null;break;case"Argument":if(e.argDef=null,e.argDefs){for(let i=0;i<e.argDefs.length;i++)if(e.argDefs[i].name===a.name){e.argDef=e.argDefs[i];break}}e.inputType=(p=e.argDef)===null||p===void 0?void 0:p.type;break;case"EnumValue":const y=e.inputType?l(e.inputType):null;e.enumValue=y instanceof S?v(y.getValues(),i=>i.value===a.name):null;break;case"ListValue":const d=e.inputType?F(e.inputType):null;e.inputType=d instanceof h?d.ofType:null;break;case"ObjectValue":const m=e.inputType?l(e.inputType):null;e.objectFieldDefs=m instanceof k?m.getFields():null;break;case"ObjectField":const o=a.name&&e.objectFieldDefs?e.objectFieldDefs[a.name]:null;e.inputType=o==null?void 0:o.type;break;case"NamedType":e.type=a.name?t.getType(a.name):null;break}}),e}r(V,"getTypeInfo");function c(t,n,e){if(e===g.name&&t.getQueryType()===n)return g;if(e===D.name&&t.getQueryType()===n)return D;if(e===T.name&&Q(n))return T;if(n&&n.getFields)return n.getFields()[e]}r(c,"getFieldDef");function v(t,n){for(let e=0;e<t.length;e++)if(n(t[e]))return t[e]}r(v,"find");function A(t){return{kind:"Field",schema:t.schema,field:t.fieldDef,type:f(t.fieldDef)?null:t.parentType}}r(A,"getFieldReference");function L(t){return{kind:"Directive",schema:t.schema,directive:t.directiveDef}}r(L,"getDirectiveReference");function M(t){return t.directiveDef?{kind:"Argument",schema:t.schema,argument:t.argDef,directive:t.directiveDef}:{kind:"Argument",schema:t.schema,argument:t.argDef,field:t.fieldDef,type:f(t.fieldDef)?null:t.parentType}}r(M,"getArgumentReference");function R(t){return{kind:"EnumValue",value:t.enumValue||void 0,type:t.inputType?l(t.inputType):void 0}}r(R,"getEnumValueReference");function E(t,n){return{kind:"Type",schema:t.schema,type:n||t.type}}r(E,"getTypeReference");function f(t){return t.name.slice(0,2)==="__"}r(f,"isMetaField");export{V as E,R as G,A as L,E as O,L as R,M as _};
