(this.webpackJsonpmarch_portfolio=this.webpackJsonpmarch_portfolio||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){},65:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c.n(i),a=c(21),n=c.n(a),r=(c(52),c(9)),l=c(12),o=c(11),j=c(10),d=c(24),b=c(6),m=c(18),h=c(28),u=c(45),p=(c(53),c(19)),x=c(22),O=c(27),f=(c(54),c(1));var g=function(){return Object(f.jsx)("footer",{className:"mt-5",children:Object(f.jsx)(m.a,{fluid:!0,children:Object(f.jsxs)(p.a,{className:"border-top justify-content-between p-3",children:[Object(f.jsx)(x.a,{className:"p-0",md:3,sm:12,children:"Meredith Jones 2021"}),Object(f.jsxs)(x.a,{className:"p-0","d-flex":!0,"justify-content-end":!0,md:2,children:["Site created using React ",Object(f.jsx)(O.c,{})]})]})})})},k=c(42);var v=function(e){return Object(f.jsx)(k.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(f.jsx)(m.a,{fluid:!0,children:Object(f.jsx)(p.a,{className:"justify-content-center py-5",children:Object(f.jsxs)(x.a,{md:8,sm:12,children:[e.title&&Object(f.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(f.jsx)("h3",{className:"display-4 font-wieght-light",children:e.subTitle}),e.text&&Object(f.jsx)("h3",{className:"lead font-weight-light",children:e.text})]})})})})},y=c(25),N=c.p+"static/media/ffa.9217e104.gif",w=c.p+"static/media/note_taker.01e5c11c.gif",T=c.p+"static/media/fitness_tracker.65f7bcf9.gif",S=c.p+"static/media/staff_directory.e8b858b1.gif",_=c(41);var C=function(e){var t=Object(_.b)({opacity:1,from:{opacity:0}});return Object(f.jsxs)(_.a.div,{className:"m-card-info",style:t,children:[Object(f.jsx)("p",{className:"m-card-title",children:e.title}),Object(f.jsx)("p",{className:"m-card-sub-title",children:e.subTitle}),Object(f.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View the Application "}),Object(f.jsx)("br",{}),Object(f.jsx)("a",{href:e.gitLink,target:"_blank",rel:"noopener noreferrer",children:"View on GitHub "})]})};var M=function(e){return Object(f.jsxs)("div",{className:"d-inline-block m-card",onClick:function(t){return e.click(e.item)},children:[Object(f.jsx)("img",{className:"m-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(f.jsx)(C,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link,gitLink:e.item.gitLink})]})},I=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var i;return Object(r.a)(this,c),(i=t.call(this,e)).handleCardClick=function(e,t){var c=Object(y.a)(i.state.items);c[e].selected=!c[e].selected,c.forEach((function(t){t.id!==e&&(t.selected=!1)})),i.setState({items:c})},i.makeItems=function(e){return e.map((function(e){return Object(f.jsx)(M,{item:e,click:function(t){return i.handleCardClick(e.id,t)}},e.id)}))},i.state={items:[{id:0,title:"Fridge For All",subTitle:"A collaborative project creating an inventory tracking \n system for community fridges in Phialdelphia",imgSrc:N,link:"https://fridge-for-all-philly.herokuapp.com/",gitLink:"https://github.com/meredithajones/Fridge_For_All",selected:!1},{id:1,title:"Note Taking Application",subTitle:"An app for users to store and delete notes",imgSrc:w,link:"https://boiling-citadel-67370.herokuapp.com/",gitLink:"https://github.com/meredithajones/note_taking_app",selected:!1},{id:2,title:"Fitness Tracker Application",subTitle:"An app for users to keep track of the type and duration of workouts",imgSrc:T,link:"https://morning-reef-44056.herokuapp.com/?id=6022f139e7cfc80015cd1c9b",gitLink:"https://github.com/meredithajones/get_fit",selected:!1},{id:3,title:"Employee Directory",subTitle:"A directory app to create an easy way for users to search for fellow staff members",imgSrc:S,link:"https://meredithajones.github.io/Employee_Directory/",gitLink:"https://github.com/meredithajones/Employee_Directory",selected:!1}]},i}return Object(l.a)(c,[{key:"render",value:function(){return Object(f.jsx)(m.a,{fluid:!0,children:Object(f.jsx)(p.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),c}(s.a.Component);var A=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(f.jsx)(I,{})]})};var L=function(e){return Object(f.jsx)(m.a,{fluid:!0,children:Object(f.jsx)(p.a,{className:"justify-content-center",children:Object(f.jsx)(x.a,{md:8,children:e.children})})})},P=c(47),F=(c(56),c.p+"static/media/me.c9b76504.jpg");var H=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{title:e.title}),Object(f.jsx)("div",{img:!0,src:"../About/me.jpg"}),Object(f.jsx)(L,{children:Object(f.jsxs)("div",{className:"bio",children:[Object(f.jsx)("p",{children:"Hello I'm Meredith, a web developer based in Philadelphia."}),Object(f.jsx)(P.a.Img,{className:"bioPic","d-flex":!0,src:F})," ",Object(f.jsx)("p",{children:" MERN proficient, happiest working in the front-end world. "}),Object(f.jsx)("p",{children:"I love expressing my creativity in the applications that I build. "}),Object(f.jsx)("p",{children:"My background includes an intensive full-stack coding education through the University of Pennsylvania's College of Liberal and Professional Studies."}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"Skills include:"}),Object(f.jsxs)(p.a,{className:"border-top justify-content-between p-2",children:[Object(f.jsxs)(x.a,{className:"p-0",md:3,sm:12,children:[Object(f.jsx)("li",{children:"Javascript"}),Object(f.jsx)("li",{children:"jQuery"}),Object(f.jsx)("li",{children:"Bootstap"}),Object(f.jsx)("li",{children:"Mongoose"}),Object(f.jsx)("li",{children:"MongoDB"}),Object(f.jsx)("li",{children:"MySQL"})]}),Object(f.jsxs)(x.a,{className:"p-0","d-flex":!0,"justify-content-end":!0,md:3,children:[Object(f.jsx)("li",{children:"Node.JS"}),Object(f.jsx)("li",{children:"Handlebars"}),Object(f.jsx)("li",{children:"Express"}),Object(f.jsx)("li",{children:"React"}),Object(f.jsx)("li",{children:"CSS3"}),Object(f.jsx)("li",{children:"HTML5"})]})]}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"I'm a beer nerd, animal lover, and outdoor enthusiast."}),Object(f.jsx)("p",{children:"When I am not behind a computer, you can find me at at local brewery, volunteering at an animal sanctuary, or hiking the Wissahickon trails."})]})})]})},B=c(15),E=c(46),J=(i.Component,c(35)),D=(c(61),c(62),c(32)),R=c.n(D);Object(D.init)("user_rMuPcHScdQ7joaXqMmqZr");var q=function(){return Object(f.jsxs)("div",{children:[" ",Object(f.jsx)(v,{title:"Get In Touch"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("form",{onSubmit:function(e){e.preventDefault(),R.a.sendForm("service_zimcbdw","template_e90bbd3",e.target,"user_rMuPcHScdQ7joaXqMmqZr").then((function(e){console.log(e.text),Object(J.b)("Thanks for your email! I will get right back to you",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"})}),(function(e){console.log(e.text),Object(J.b)("Oh no! Something went wrong. Please reach out directly at meredithjonesp@gmail.com",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"})})),e.target.reset()},children:Object(f.jsxs)("div",{className:"row pt-5 mx-auto",children:[Object(f.jsx)("div",{className:"col-8 form-group mx-auto",children:Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"name"})}),Object(f.jsx)("div",{className:"col-8 form-group pt-2 mx-auto",children:Object(f.jsx)("input",{type:"email",className:"form-control",placeholder:"Email Address",name:"email"})}),Object(f.jsx)("div",{className:"col-8 form-group pt-2 mx-auto",children:Object(f.jsx)("input",{type:"text",className:"form-control",placeholder:"Subject",name:"subject"})}),Object(f.jsx)("div",{className:"col-8 form-group pt-2 mx-auto",children:Object(f.jsx)("textarea",{className:"form-control",id:"",cols:"30",rows:"8",placeholder:"Your message",name:"message"})}),Object(f.jsx)("div",{className:"col-8 pt-3 mx-auto",children:Object(f.jsx)("input",{type:"submit",className:"btn btn-info",value:"Send Message"})})]})})}),Object(f.jsx)(J.a,{})]})]})},G=(c(65),function(){return Object(f.jsxs)("nav",{className:"SideNav",children:[Object(f.jsx)("a",{href:"https://www.linkedin.com/in/meredithjones4747/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("i",{className:"",children:Object(f.jsx)(O.b,{})})}),Object(f.jsx)("a",{href:"https://github.com/meredithajones",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("i",{className:"",children:Object(f.jsx)(O.a,{})})}),Object(f.jsx)(d.b,{to:"",children:Object(f.jsx)("i",{className:""})})]})}),Q=c.p+"static/media/meredith_jones_resume.4434d735.pdf",V=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){var i;return Object(r.a)(this,c),(i=t.call(this,e)).state={title:"Meredith Jones",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"},{title:"Resume",path:"/resume"}],home:{title:"Meredith Jones Creating Beautiful Online Spaces",subTitle:"Take a look at a few of my recent projects below",greeting:"Take a look at a few of my projects below"},about:{title:"About Me"},contact:{title:"Get In Touch",subTitle:"Download my resume"}},i}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(d.a,{children:[Object(f.jsx)("backGImage",{}),Object(f.jsxs)(m.a,{className:"p-0",fluid:!0,children:[Object(f.jsxs)(h.a,{className:"border-bottom",expand:"lg",children:[Object(f.jsx)(h.a.Brand,{children:Object(f.jsxs)("h3",{children:[" ","Meredith Jones"]})}),Object(f.jsx)(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(f.jsx)(h.a.Collapse,{id:"navbar.toggle",children:Object(f.jsxs)(u.a,{className:"ml-auto",children:[Object(f.jsx)(d.b,{className:"nav-link",to:"/home",children:"Home"}),Object(f.jsx)(d.b,{className:"nav-link",to:"/about",children:"About Me"}),Object(f.jsx)(d.b,{className:"nav-link",to:"/contact",children:"Contact"}),Object(f.jsx)("a",{className:"nav-link",href:Q,target:"_blank",rel:"noopener noreferrer",children:"Resume"})]})})]}),Object(f.jsx)(G,{}),Object(f.jsx)(b.a,{exact:!0,path:"/home",render:function(){return Object(f.jsx)(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(f.jsx)(b.a,{exact:!0,path:"/about",render:function(){return Object(f.jsx)(H,{title:e.state.about.title})}}),Object(f.jsx)(b.a,{exact:!0,path:"/contact",render:function(){return Object(f.jsx)(q,{title:e.state.contact.title})}}),Object(f.jsx)(b.a,{exact:!0,path:"/resume",render:function(){return Object(f.jsx)(Q,{})}}),Object(f.jsx)(g,{})]})]})}}]),c}(s.a.Component),W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),i(e),s(e),a(e),n(e)}))};c(73);n.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(V,{})}),document.getElementById("root")),W()}},[[74,1,2]]]);
//# sourceMappingURL=main.73da3316.chunk.js.map