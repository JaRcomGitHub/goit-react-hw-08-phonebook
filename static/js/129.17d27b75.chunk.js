"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[129],{129:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(791),r=t(434),o=t(634),s=function(e){return e.phonebook.contacts},c=function(e){return e.phonebook.contacts.items},i=function(e){return e.phonebook.filter},u=function(e){var n=c(e),t=i(e).toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},l="Contact_ContactListItem__LbJXZ",d=t(184);function h(e){var n=e.name,t=e.number,a=e.onDeleteContact;return(0,d.jsxs)("li",{className:l,children:[(0,d.jsxs)("p",{children:[n,": "]}),(0,d.jsx)("p",{children:t}),(0,d.jsx)("button",{type:"button",onClick:a,children:"Delete"})]})}var m="ContactList_contactListBlock__wl5Ij";function p(){var e=(0,r.v9)(u),n=(0,r.I0)();return e.length>0?(0,d.jsx)("div",{className:m,children:(0,d.jsx)("ul",{children:e.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,d.jsx)(h,{name:a,number:r,onDeleteContact:function(){return n((0,o.GK)(t))}},t)}))})}):(0,d.jsx)("p",{children:"contact list is empty"})}var f=t(885),x=t(402),b="ContactForm_\u0441ontactForm__ujZb7";function j(){var e=(0,a.useState)(""),n=(0,f.Z)(e,2),t=n[0],s=n[1],i=(0,a.useState)(""),u=(0,f.Z)(i,2),l=u[0],h=u[1],m=(0,r.v9)(c),p=(0,r.I0)(),j=function(){s(""),h("")};return(0,d.jsxs)("form",{className:b,onSubmit:function(e){e.preventDefault(),function(e){var n=e.toLowerCase();return m.some((function(e){return e.name.toLowerCase().includes(n)}))}(t)?x.ZP.error("".concat(t," is already in contacts.")):(p((0,o.uK)({name:t,number:l})),j())},children:[(0,d.jsxs)("label",{children:["Name",(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(e){s(e.currentTarget.value)}})]}),(0,d.jsxs)("label",{children:["Phone number",(0,d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:l,onChange:function(e){h(e.currentTarget.value)}})]}),(0,d.jsx)("button",{type:"submit",children:"Add contact"})]})}var v=t(840),C="Filter_filterBlock__whgWd";function _(){var e=(0,r.v9)(c),n=(0,r.v9)(i),t=(0,r.I0)();return e.length>0&&(0,d.jsxs)("div",{className:C,children:[(0,d.jsx)("p",{children:"Find contacts by name"}),(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:function(e){t((0,v.T)(e.currentTarget.value))}})]})}function g(){var e=(0,r.I0)(),n=(0,r.v9)(s),t=n.isLoading,c=n.error;return(0,a.useEffect)((function(){e((0,o.yF)())}),[e]),(0,d.jsxs)("div",{children:[(0,d.jsx)("title",{children:"Contacts"}),(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsx)(j,{}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(_,{}),(0,d.jsx)(p,{}),t&&(0,d.jsx)("p",{children:"Loading contacts..."}),c&&(0,d.jsx)("p",{children:c})]})}}}]);
//# sourceMappingURL=129.17d27b75.chunk.js.map