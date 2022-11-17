(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(58),r=t.n(c),o=(t(74),t(4)),l=t(1),i=t(2),m=new(function(){function e(){Object(l.a)(this,e),this._baseUrl="https://frontend-take-home.fetchrewards.com/form",this._headers={"Content-Type":"application/json"}}return Object(i.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getFormOptions",value:function(){var e=this;return fetch("".concat(this._baseUrl),{headers:this._headers}).then(function(a){return e._getResponseData(a)})}},{key:"postNewUser",value:function(e){var a=this,t=e.name,n=e.email,s=e.password,c=e.occupation,r=e.state;return fetch("".concat(this._baseUrl),{method:"POST",headers:this.headers,body:JSON.stringify({name:t,email:n,password:s,occupation:c,state:r})}).then(function(e){return a._getResponseData(e)})}}]),e}()),u=t(64),d=t(12),_=d.a().shape({name:d.b().required("You must enter your name."),email:d.b().email("Email must be valid.").required("You must enter your email."),password:d.b().min(8).required("You must enter a password."),occupation:d.b().required("You must select an occupation."),state:d.b().required("You must select your state.")});var p=function(e){var a=e.occupations,t=e.states,n=e.onCreateUserSubmit,c=Object(u.a)({initialValues:{name:"",email:"",password:"",occupation:"",state:""},onSubmit:function(e){n(e)},validationSchema:_});return s.a.createElement("section",{className:"form__container"},s.a.createElement("div",{className:"form__heading"},s.a.createElement("p",{className:"form__subtitle"},"New here?"),s.a.createElement("h2",{className:"form__title"},"Create an account"),s.a.createElement("hr",{className:"form__heading_underline"})),s.a.createElement("form",{onSubmit:c.handleSubmit,className:"form"},s.a.createElement("fieldset",{className:"fieldset"},s.a.createElement("input",{id:"name",placeholder:"Full Name",type:"text",name:"name",onChange:c.handleChange,onBlur:c.handleBlur,className:"form-field input name__input",defaultValue:c.values.name,noValidate:!0}),c.touched.name&&c.errors.name&&s.a.createElement("span",{className:"form__error"},c.errors.name),s.a.createElement("input",{id:"email",required:!0,type:"email",placeholder:"Email",onChange:c.handleChange,onBlur:c.handleBlur,name:"email",className:"form-field input email__input",defaultValue:c.values.email,noValidate:!0}),c.touched.email&&c.errors.email&&s.a.createElement("span",{className:"form__error"},c.errors.email),s.a.createElement("input",{id:"password",type:"password",name:"password",placeholder:"Password",onChange:c.handleChange,onBlur:c.handleBlur,className:"form-field input password__input",required:!0,defaultValue:c.values.password,noValidate:!0}),c.touched.password&&c.errors.password&&s.a.createElement("span",{className:"form__error"},c.errors.password),s.a.createElement("select",{id:"occupation",className:"form-field select select__occupation",name:"occupation",onChange:c.handleChange,onBlur:c.handleBlur,required:!0,defaultValue:c.values.occupation,noValidate:!0},s.a.createElement("option",{selected:"selected",disabled:!0,value:"",className:"default__value"},"Choose occupation"),a.map(function(e,a){return s.a.createElement("option",{name:"occupation",key:a,className:"occupation-title"},e)})),c.touched.occupation&&c.errors.occupation&&s.a.createElement("span",{className:"form__error"},c.errors.occupation),s.a.createElement("select",{id:"state",className:"form-field select select__state",onChange:c.handleChange,onBlur:c.handleBlur,defaultValue:c.values.state,required:!0,noValidate:!0},s.a.createElement("option",{selected:"selected",disabled:!0,value:"",className:"default__value"},"Select your State"),t.map(function(e,a){return s.a.createElement("option",{key:a,className:"state"},Object.values(e).join(", "))})),c.touched.state&&c.errors.state&&s.a.createElement("span",{className:"form__error"},c.errors.state)),s.a.createElement("button",{className:"submit__button ".concat(c.isValid?"submit__button_valid":""),type:"submit",disabled:!c.isValid},s.a.createElement("span",{className:"".concat(c.isValid?"submit__button_icon":"")}),s.a.createElement("span",{className:"".concat(c.isValid?"submit__button_background":"")}),s.a.createElement("span",{className:"submit__button_text ".concat(c.isValid?"submit__button_valid":"submit__invalid")},"Create account"))))};var f=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"footer__content"},s.a.createElement("p",{className:"copyright"},"Jake Johnson \xa9 2022"),s.a.createElement("div",{className:"credits"},s.a.createElement("div",{className:"credit__item"},s.a.createElement("a",{href:"https://cssgradient.io/",className:"credit__link"},"CSS Gradients"),s.a.createElement("p",{className:"credit__text"},"Used to create all gradients on this site.")),s.a.createElement("div",{className:"credit__item"},s.a.createElement("a",{href:"https://www.flaticon.com/free-icon/bad-feedback_5362991?term=ui%20sad%20emoji&page=1&position=69&page=1&position=69&related_id=5362991&origin=search",className:"credit__link"},"Sad Icon"),s.a.createElement("p",{className:"credit__text"},"Icon used on error tooltip.")),s.a.createElement("div",{className:"credit__item"},s.a.createElement("a",{href:"https://www.flaticon.com/free-icon/success_1656126?related_id=1656126&origin=search",className:"credit__link"},"Success Icon"),s.a.createElement("p",{className:"credit__text"},"Icon used on successful api request tooltip.")))))};var h=function(e){var a=e.isOpen,t=e.onClose,n=e.status;return s.a.createElement("div",{className:a?"modal__background":"modal__hidden"},s.a.createElement("div",{className:"modal__container",noValidate:!0},s.a.createElement("button",{className:"modal__close-button",type:"button","aria-label":"close",onClick:t}),"success"===n?s.a.createElement("div",null,s.a.createElement("p",{className:"modal__success-message"},"Account successfully created!"),s.a.createElement("div",{className:"modal__icon success-icon"})):s.a.createElement("div",null,s.a.createElement("div",{className:"modal__text-container"},s.a.createElement("p",{className:"modal__message"},"Uh oh. Something went wrong."),s.a.createElement("p",{className:"modal__sub-message"},"Please try again.")),s.a.createElement("div",{className:"fail-icon modal__icon "}))))};var E=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),l=Object(o.a)(r,2),i=l[0],u=l[1],d=Object(n.useState)(!1),_=Object(o.a)(d,2),E=_[0],b=_[1],N=Object(n.useState)(""),v=Object(o.a)(N,2),g=v[0],w=v[1];return Object(n.useEffect)(function(){m.getFormOptions().then(function(e){c(e.occupations),u(e.states)})},[]),s.a.createElement("section",{className:"page"},s.a.createElement(f,null),s.a.createElement(p,{occupations:t,states:i,onCreateUserSubmit:function(e){m.postNewUser(e).then(function(){w("success"),b(!0)}).catch(function(e){console.error("Error: ".concat(e.status)),w("fail"),b(!0)})},infoTooltipOpen:function(){b(!0)}}),s.a.createElement(h,{status:g,isOpen:E,onClose:function(){b(!1)}}))},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,176)).then(function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),s(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(E,null))),b()},65:function(e,a,t){e.exports=t(175)},74:function(e,a,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.a8c14c03.chunk.js.map