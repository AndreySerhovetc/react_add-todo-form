(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(8),n=a.n(s),i=a(9),r=a(2),c=a(3),o=a(5),l=a(4),d=a(7),u=a(1),m=a.n(u),h=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),b=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],p=a(0),j=function(e){var t=e.user,a=t.name,s=t.username,n=t.email;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"list-item",children:a}),Object(p.jsx)("div",{className:"list-item",children:s}),Object(p.jsx)("div",{className:"list-item",children:n})]})},g=function(e){var t=e.todo,a=t.user,s=t.title;return Object(p.jsxs)(p.Fragment,{children:[a&&Object(p.jsx)(j,{user:a}),Object(p.jsx)("div",{className:"list-item",children:s})]})},y=(a(16),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={title:"",userId:0,isTitleEmpty:!1,isSelectUser:!1},e.resetForm=function(){e.setState({title:"",userId:0,isTitleEmpty:!1,isSelectUser:!1})},e.handleChange=function(t){e.setState({title:t.target.value})},e.handleSelectChange=function(t){e.setState({userId:+t.target.value})},e.getValueFromForm=function(t){t.preventDefault();var a=e.state,s=a.userId,n=a.title;if(0!==n.trim().length)if(0!==s){var i={userId:s,id:e.props.tasks.length+1,title:n,user:e.props.users.find((function(t){return t.id===e.state.userId}))};e.props.addTodo(i),e.resetForm()}else e.setState((function(e){return{isSelectUser:!e.isSelectUser}}));else e.setState((function(e){return{isTitleEmpty:!e.isTitleEmpty}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.users,s=this.state,n=s.title,i=s.userId,r=s.isTitleEmpty,c=s.isSelectUser,o=this.getValueFromForm,l=this.handleChange,d=this.handleSelectChange;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"container d-flex flex-column",children:Object(p.jsx)("div",{className:"row mb-3",children:Object(p.jsxs)("form",{className:"form-todo",onSubmit:o,children:[Object(p.jsxs)("div",{className:"input-group d-flex justify-content-evenly",children:[Object(p.jsxs)("div",{className:"col-sm-5 mr-3",children:[Object(p.jsx)("input",{className:"form-control",type:"text",placeholder:"Write your task here",name:"title",id:"titleTodo",value:n,onChange:l}),r&&Object(p.jsx)("span",{className:"error",children:"Please enter the title!"})]}),Object(p.jsxs)("div",{className:"col-sm-5 mr-3",children:[Object(p.jsxs)("select",{className:"form-select",name:"userId",value:i,onChange:d,children:[Object(p.jsx)("option",{value:"",children:"Choose a user"}),a.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),c&&Object(p.jsx)("span",{className:"error",children:"Please select user!"})]})]}),Object(p.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(p.jsx)("button",{type:"submit",className:"btn btn-success btn-lg",children:"Add Task"})})]})})}),Object(p.jsx)("ul",{className:"todo list-group",children:t.map((function(e){return Object(p.jsx)("li",{className:"list-group-item d-flex justify-content-around",children:Object(p.jsx)(g,{todo:e})},e.id)}))})]})}}]),a}(m.a.Component)),f=b.map((function(e){var t=h.find((function(t){return t.id===e.userId}))||null;return Object(d.a)(Object(d.a)({},e),{},{user:t})})),v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={todos:f},e.addNewTask=function(t){e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[t])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.todos;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("h1",{children:"Add todo form"})}),Object(p.jsx)(y,{addTodo:this.addNewTask,tasks:e,users:h})]})}}]),a}(m.a.Component);n.a.render(Object(p.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.88d7d90a.chunk.js.map