import{c as _,d as O}from"./chunk-ETZKBWR7.js";import"./chunk-VGIFZ7KC.js";import{Ka as b,Na as i,Za as p,aa as c,ab as x,bb as C,cb as v,db as r,eb as a,fb as d,mb as M,nb as m,ob as h,qb as g,rb as P}from"./chunk-E5QJH4FY.js";var k=e=>[e],y=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["app-blog-card"]],inputs:{post:"post"},standalone:!0,features:[g],decls:9,vars:7,consts:[[1,"blog-card"],[3,"src","alt"],[1,"content"],[3,"routerLink"]],template:function(n,o){if(n&1&&(r(0,"div",0),d(1,"img",1),r(2,"div",2)(3,"h2"),m(4),a(),r(5,"p"),m(6),a(),r(7,"a",3),m(8,"Read More"),a()()()),n&2){let l;i(),M("alt",o.post.title),p("src",o.post.img_url,b),i(3),h(o.post.title),i(2),h(o.post.description),i(),p("routerLink",P(5,k,((l=o.post.path.split("/public/posts/").pop())==null||(l=l.split("."))==null?null:l.shift())||""))}},dependencies:[O,_],styles:[".blog-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#1e1e1e;border-radius:8px;box-shadow:0 4px 8px #0000001a;overflow:hidden;transition:transform .2s}.blog-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.blog-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:20px}.blog-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 10px;font-size:1.5em}.blog-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 20px;color:#666}.blog-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#a77fd9;text-decoration:none}.blog-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px)}"]});let e=t;return e})();var s=class s{};s.basePath="/public/posts",s.data=[{title:"Hello World",path:`${s.basePath}/hello-world.md`,img_url:"https://avatars.githubusercontent.com/u/47220014?v=4&size=64",description:"Welcome to the blog! This is the first (test) post."}];var u=s;function F(e,t){if(e&1&&d(0,"app-blog-card",1),e&2){let w=t.$implicit;p("post",w)}}var R=(()=>{let t=class t{constructor(){this.posts=u.data}ngOnInit(){}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c({type:t,selectors:[["app-blog"]],standalone:!0,features:[g],decls:3,vars:0,consts:[[1,"blog-grid"],[3,"post"]],template:function(n,o){n&1&&(r(0,"div",0),C(1,F,1,1,"app-blog-card",1,x),a()),n&2&&(i(),v(o.posts))},dependencies:[y],styles:[".blog-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;padding:20px}app-blog-card[_ngcontent-%COMP%]{background:#171717;border-radius:8px;box-shadow:0 4px 8px #0000001a;overflow:hidden;transition:transform .2s}app-blog-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);transform:translate(2px)}"]});let e=t;return e})();export{R as BlogComponent};