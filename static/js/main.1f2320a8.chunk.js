(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,function(t,e,n){t.exports={form:"AddContact_form__W_yLj",inputName:"AddContact_inputName__3jXhC",inputNumber:"AddContact_inputNumber__mUJfn",buttonAddContacts:"AddContact_buttonAddContacts__36JBs"}},,function(t,e,n){t.exports={wrapper:"App_wrapper__2e_tR",titlePhonebook:"App_titlePhonebook__2V9E1",titleContacts:"App_titleContacts__7nCGy"}},function(t,e,n){t.exports={listItem:"OneContact_listItem__1cUjv",contactText:"OneContact_contactText__SWay7",deleteButton:"OneContact_deleteButton__33ple"}},function(t,e,n){t.exports={wrapper:"FilterConatcts_wrapper__2DLC0",inputName:"FilterConatcts_inputName__1u_aF",filter:"FilterConatcts_filter__2Kuyh"}},,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(10),s=n.n(r),l=(n(17),n(2)),i=n(6),u=n.n(i),m=n(11),p=n(20),b=n(4),d=n.n(b),j=function(t){var e=t.setContacts,n=t.contacts,o=Object(c.useState)(""),r=Object(l.a)(o,2),s=r[0],i=r[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),j=b[0],f=b[1];return Object(a.jsxs)("form",{className:d.a.form,autoComplete:"off",onSubmit:function(t){t.preventDefault(),n.find((function(t){return t.name===s}))?alert("".concat(s," is already in contacts.")):(localStorage.setItem("localContacts",JSON.stringify([].concat(Object(m.a)(n),[{name:s,number:j,id:Object(p.a)()}]))),e([]),i(""),f(""))},children:[Object(a.jsx)("input",{className:d.a.inputName,type:"text",name:"name",placeholder:"Full Name",value:s,onChange:function(t){var e=t.target;i(e.value)}}),Object(a.jsx)("input",{className:d.a.inputNumber,type:"text",name:"number",placeholder:"Nubmer xxx-xx-xx",value:j,onChange:function(t){var e=t.target;f(e.value)}}),Object(a.jsx)("button",{type:"submit",className:d.a.buttonAddContacts,children:"Add contacts?"})]})},f=n(7),_=n.n(f),C=function(t){var e=t.name,n=t.number,c=t.id,o=t.deleteContact;return Object(a.jsxs)("li",{className:_.a.listItem,children:[Object(a.jsxs)("p",{className:_.a.contactText,children:[e,": ",n]}),Object(a.jsx)("button",{className:_.a.deleteButton,onClick:function(){return o(c)},children:"Delete"})]})},O=function(t){var e=t.contacts,n=t.filter,c=t.deleteContact,o=e.filter((function(t){return t.name.toLowerCase().includes(n)}));return Object(a.jsx)("ul",{children:o.map((function(t){var e=t.name,n=t.number,o=t.id;return Object(a.jsx)(C,{name:e,number:n,id:o,deleteContact:c},o)}))})},x=n(8),h=n.n(x),N=function(t){var e=t.inputFilter;return Object(a.jsxs)("div",{className:h.a.wrapper,children:[Object(a.jsx)("p",{className:h.a.inputName,children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",placeholder:"Enter name",onChange:e,className:h.a.filter})]})};var g=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),i=s[0],m=s[1];return Object(c.useEffect)((function(){localStorage.getItem("localContacts")||localStorage.setItem("localContacts",JSON.stringify([])),JSON.parse(localStorage.getItem("localContacts")).length!==n.length&&o((function(t){return JSON.parse(localStorage.getItem("localContacts"))}))})),Object(a.jsxs)("div",{className:u.a.wrapper,children:[Object(a.jsx)("h1",{className:u.a.titlePhonebook,children:"Phonebook"}),Object(a.jsx)(j,{setContacts:o,contacts:n}),Object(a.jsx)("h2",{className:u.a.titleContacts,children:"Contacts"}),Object(a.jsx)(N,{inputFilter:function(t){var e=t.target;m(e.value.toLowerCase())}}),Object(a.jsx)(O,{contacts:n,filter:i,deleteContact:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}));var e=JSON.parse(localStorage.getItem("localContacts")).filter((function(e){return e.id!==t}));localStorage.setItem("localContacts",JSON.stringify(e))}})]})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.1f2320a8.chunk.js.map