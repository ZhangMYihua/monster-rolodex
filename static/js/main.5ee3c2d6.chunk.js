(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(15),n(4)),i=n(5),l=n(7),m=n(6),u=n(1),h=n(8),d=(n(16),function(e){var t=e.name,n=e.id,a=e.email;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monsters",src:"https://robohash.org/".concat(n,"?size=200x200&set=set2")}),r.a.createElement("div",{className:"details"},r.a.createElement("h3",null,t),r.a.createElement("p",null,a)))}),f=(n(17),function(e){var t=e.monsters;return r.a.createElement("div",{className:"card-list"},t.map(function(e,t){return r.a.createElement(d,{key:t,name:e.name,id:e.id,email:e.email})}))}),p=(n(18),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){console.log(Object(u.a)(e)),e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"App"},t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Monsters Rolodex "),r.a.createElement("input",{className:"search",type:"search",placeholder:"search monsters",onChange:this.onSearchChange}),r.a.createElement(f,{monsters:a})):r.a.createElement("h1",null,"Loading"))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.5ee3c2d6.chunk.js.map