(this["webpackJsonpenglish-proj"]=this["webpackJsonpenglish-proj"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/game_img.f7102461.png"},function(e,a,t){e.exports=t.p+"static/media/correct.7e026ecd.ogg"},function(e,a,t){e.exports=t.p+"static/media/weird_music.155f1e08.mp3"},function(e,a,t){e.exports=t.p+"static/media/incorrect.503d9693.ogg"},,,function(e,a,t){e.exports=t(35)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r),o=(t(26),t(19)),u=t(1),s=(t(27),t(15)),i=t.n(s);function m(e){var a=e.history;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"title"},"Jogo dos Substantivos"),c.a.createElement("img",{src:i.a,className:"game-img",alt:"Game"}),c.a.createElement("h2",{className:"subtitle"},"COMO JOGAR:"),c.a.createElement("p",{className:"game-desc"},"\u2003Para jogar \xe9 simples! Basta observar a palavra que aparecer\xe1 na tela e clicar na op\xe7\xe3o correta! Aperte ",c.a.createElement("strong",null,'"play!"')," para come\xe7ar!"),c.a.createElement("button",{className:"play",onClick:function(){return a.push("/game")}},"PLAY!"))}var p=t(8),E=(t(28),t(16)),f=t.n(E),h=t(17),d=t.n(h),g=["Apple","Orange","Carrot","Cake","Hospital","School","Temple","Church","Pen","Pencil","Eraser","Bag","Lamp","Brush","Bottle","Car","Trophy","House","Chair","Table"],b=["Milk","Water","Coffee","Water","Oil","Juice","Air","Childhood","Sand","Salt","Rice","Wheat","Barley","Rain","Snow","Time","Soil","Love","Patience","Oat"],v=g.concat(b),N=new Audio(f.a);N.volume=.3;var O=new Audio(d.a);O.volume=.2;var y=0;function C(e){var a=e.history,t=Object(n.useState)(v[Math.round(Math.random()*(v.length-1))]),r=Object(p.a)(t,2),l=r[0],o=r[1],u=Object(n.useState)(10),s=Object(p.a)(u,2),i=s[0],m=s[1],E=Object(n.useState)(i),f=Object(p.a)(E,2),h=f[0],d=f[1];function C(e){g.includes(l)&&e||b.includes(l)&&!e?(y=Math.round(Math.random()*(v.length-1)),N.play(),o(v[y]),m(i>=2?i-1:1)):(O.pause(),a.push("/retry"))}return Object(n.useEffect)((function(){O.play()})),Object(n.useEffect)((function(){return d(i)}),[i]),Object(n.useEffect)((function(){var e=setInterval((function(){d(h-.01),h<.1&&(a.push("/retry"),O.pause())}),10);return function(){return clearInterval(e)}})),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"title"},"SASKE"),c.a.createElement("div",{className:"game-window"},c.a.createElement("p",{className:"mission"},"Essa palavra \xe9 ",c.a.createElement("strong",null,"countable")," ou ",c.a.createElement("strong",null,"uncountable")," ?"),c.a.createElement("p",{className:"word"},l),c.a.createElement("p",{className:"counter"},c.a.createElement("span",{className:h<5?"count":""},h.toFixed(2))," ",c.a.createElement("span",null,"segundos restantes!")," "),c.a.createElement("button",{className:"game-btn",id:"left",value:!0,onClick:function(){return C(!0)}},"COUNTABLE"),c.a.createElement("button",{className:"game-btn",id:"right",value:!1,onClick:function(){return C(!1)}},"UNCOUNTABLE")),c.a.createElement("button",{className:"back",onClick:function(){a.push("/"),O.pause()}},"VOLTAR"))}t(29);var A=t(18),j=new Audio(t.n(A).a);function S(e){var a=e.history;return Object(n.useEffect)((function(){j.play()})),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Voc\xea Perdeu!"),c.a.createElement("button",{className:"retry",onClick:function(){a.push("/game")}},"TENTAR NOVAMENTE"))}function k(){return c.a.createElement(o.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0,component:m}),c.a.createElement(u.a,{path:"/game",component:C}),c.a.createElement(u.a,{path:"/retry",component:S})))}j.volume=.3;var w=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content"},c.a.createElement(k,null)))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.85691c9d.chunk.js.map