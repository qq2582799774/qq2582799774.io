var posts=["2023/10/20/bizhi0001/","2023/10/14/HTML + CSS 实现一个酷炫的夜间模式切换动画/","2023/10/20/shubiaochufa001/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};