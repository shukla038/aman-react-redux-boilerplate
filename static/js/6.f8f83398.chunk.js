(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[6],{55:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={posts:{GETPOST:"https://jsonplaceholder.typicode.com/posts",POSTDETAIL:function(t){return"https://jsonplaceholder.typicode.com/posts/".concat(t)},GETCOMMENTS:function(t){return"https://jsonplaceholder.typicode.com/posts/".concat(t,"/comments")}}}},56:function(t,e,n){},57:function(t,e,n){"use strict";var a=n(50),o=n(51),s=n(53),r=n(52),c=n(54),i=n(0),u=n.n(i),l=(n(56),function(t){function e(){return Object(a.a)(this,e),Object(s.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"header"},u.a.createElement("a",{href:!0,className:"active",onClick:function(){return t.props.history.push("/home")}},"Home"),u.a.createElement("div",{className:"header-right"},u.a.createElement("a",{href:!0,onClick:function(){return t.props.history.push("/")}},"Logout")))}}]),e}(u.a.Component));n.d(e,"a",function(){return l})},88:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var a=n(10),o=n(18),s=n(55),r=n(58),c=n.n(r);var i=function(t){return function(e,n){return c.a.get(s.a.posts.POSTDETAIL(t)).then(function(t){var n;t&&t.data&&200===t.status&&e((n=t.data,{type:o.b,payload:n}))}).catch(function(t){throw t})}},u=function(t){return function(e,n){return c.a.get(s.a.posts.GETCOMMENTS(t)).then(function(t){var n;t&&t.data&&200===t.status&&e((n=t.data,{type:o.a,payload:n}))}).catch(function(t){throw t})}},l=function(t,e){return function(n,a){return c.a.delete(s.a.posts.POSTDETAIL(t),e).then(function(t){if(t&&t.data&&200===t.status)return t}).catch(function(t){throw t})}},p=function(t,e){return function(n,a){return c.a.put(s.a.posts.POSTDETAIL(t),e).then(function(t){if(t&&t.data&&200===t.status)return t}).catch(function(t){throw t})}},m=n(7),d=n(50),h=n(51),f=n(53),y=n(52),v=n(54),E=n(0),b=n.n(E),w=n(57),O=(n(88),function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(f.a)(this,(t=Object(y.a)(e)).call.apply(t,[this].concat(o)))).state={listSize:10},n.addMorehandler=function(){n.setState({listSize:n.state.listSize+10})},n.hanldeDelete=function(){var t=n.props.match,e={id:t.params.id};n.props.deletePostAsync(t.params.id,e).then(function(t){t.success&&n.props.history.push("/home")})},n.handleComment=function(t){var e=n.props.match,a={body:t.target.value};n.props.editCommentAsync(e.params.id,a)},n}return Object(v.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match;this.props.getPostsListAsync(t.params.id),this.props.getCommentsListAsync(t.params.id)}},{key:"render",value:function(){var t=this,e=this.props,n=e.postsList,a=e.history,o=n.filteredPostListData.postDetailData;return console.log("postsListpostsList",o),b.a.createElement(b.a.Fragment,null,b.a.createElement(w.a,{history:a}),b.a.createElement("div",{className:"w3-panel w3-card card-wrapper"},b.a.createElement("div",{className:"font-weight-bold"},"Title :",o.title),b.a.createElement("div",null,o.body),b.a.createElement("button",{onClick:this.hanldeDelete},"Delete this post")),"Comments :",b.a.createElement("ul",null,n.filteredPostListData&&n.filteredPostListData.commentsData?n.filteredPostListData.commentsData.slice(0,this.state.listSize).map(function(e,n){return b.a.createElement("li",{className:"w3-panel w3-card card-wrapper",onClick:function(){return a.push("/posts/".concat(e.id))},key:"post--".concat(n)},b.a.createElement("div",{className:"font-weight-bold"},"Name : ",e.name),b.a.createElement("textarea",{rows:"6",cols:"50",name:"comment",form:"usrform",onChange:t.handleComment},e.body))}):null),b.a.createElement("div",{className:"more--button"},b.a.createElement("button",{onClick:this.addMorehandler},"Load More")))}}]),e}(b.a.Component));e.default=Object(a.c)(function(t){return{postsList:t}},function(t){return Object(m.b)({getPostsListAsync:i,getCommentsListAsync:u,deletePostAsync:l,editCommentAsync:p},t)})(O)}}]);
//# sourceMappingURL=6.f8f83398.chunk.js.map