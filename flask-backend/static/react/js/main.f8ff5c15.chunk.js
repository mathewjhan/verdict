(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"media/logo.e26f5965.png"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),s=(a(10),a(1));function i(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1];return c.a.createElement("div",{id:"form-container"},c.a.createElement("form",{id:"chat-form",onSubmit:function(t){t.preventDefault();var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat:r})};fetch("/sentiment",a).then((function(e){return e.json()})).then((function(t){e.setSentiment(t.sentiment),e.setVerdict(t.verdict),e.setKeywords(t.keywords),e.setSentences(t.worstSentence.map((function(e,a){return[e,t.worstScore[a]]})).filter((function(e){return""!==e[0]})))}))}},c.a.createElement("textarea",{onChange:function(e){l(e.target.value)},value:r,id:"chatlog",name:"new-input",rows:"7",cols:"50",placeholder:"Input a chatlog and determine its sentiment."}),c.a.createElement("br",null),c.a.createElement("button",{type:"submit",className:"btn submitButton btn-lrg btn-danger"},"Check Toxicity"),c.a.createElement("div",{class:"divider"}),c.a.createElement("button",{className:"btn btn-lrg btn-secondary",onClick:function(){return l("")}},"Reset")))}function m(e){return"NOT TOXIC"===e.verdict?c.a.createElement("span",{id:"not-toxic"},"NOT TOXIC"):"???"===e.verdict?c.a.createElement("span",{id:"question"},"?"):c.a.createElement("span",{id:"toxic"},"TOXIC")}function d(e){var t=e.sentences.map((function(e,t){return c.a.createElement("tr",null,c.a.createElement("td",null,e[0]),c.a.createElement("td",null,e[1]))}));return c.a.createElement("div",{id:"result"},c.a.createElement("div",{id:"sentences"},c.a.createElement("table",{className:"table table-danger table-striped table-bordered"},c.a.createElement("thead",{className:"thead-dark"},c.a.createElement("tr",null,c.a.createElement("th",{scole:"col"},"Phrase"),c.a.createElement("th",{scope:"col"},"Sentiment"))),c.a.createElement("tbody",null,t))),c.a.createElement("div",{id:"keywords",className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{class:"card-title"},"Key Phrases"),c.a.createElement("p",{class:"card-text"},e.keywords.join()))),c.a.createElement("div",{id:"sentiment",className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{class:"card-title"},"Overall sentiment"),c.a.createElement("p",{class:"card-text"},e.sentiment))),c.a.createElement("div",{id:"verdict",className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{class:"card-title"},"Result"),c.a.createElement("p",{class:"card-text"},c.a.createElement(m,{verdict:e.verdict})))))}var o=a(4),u=a.n(o);a(11);var E=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("???"),m=Object(s.a)(l,2),o=m[0],E=m[1],b=Object(n.useState)([]),v=Object(s.a)(b,2),p=v[0],f=v[1],h=Object(n.useState)([]),y=Object(s.a)(h,2),N=y[0],O=y[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},c.a.createElement("img",{id:"logo",src:u.a}),c.a.createElement("span",null,"Verdict.")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{id:"left-column",className:"column"},c.a.createElement(i,{setSentences:f,setKeywords:O,setSentiment:r,setVerdict:E})),c.a.createElement("div",{id:"right-column",className:"column"},c.a.createElement(d,{sentiment:a,keywords:N,verdict:o,sentences:p}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.f8ff5c15.chunk.js.map