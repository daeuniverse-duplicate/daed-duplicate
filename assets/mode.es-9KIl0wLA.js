import{C as r}from"./codemirror.es-bATKMzSO.js";import{W as o,a2 as s,a3 as i,a4 as n}from"./index-egzVLQof.js";import{r as l}from"./mode-indent.es-xQauvp-N.js";import"./codemirror.es2-qCFONIOJ.js";var c=Object.defineProperty,p=(e,a)=>c(e,"name",{value:a,configurable:!0});const m=p(e=>{const a=o({eatWhitespace:t=>t.eatWhile(s),lexRules:i,parseRules:n,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:a.startState,token:a.token,indent:l,electricInput:/^\s*[})\]]/,fold:"brace",lineComment:"#",closeBrackets:{pairs:'()[]{}""',explode:"()[]{}"}}},"graphqlModeFactory");r.defineMode("graphql",m);
