(function(){
var d=document,r=d.documentElement,S=[].slice.call(d.querySelectorAll("main>section")),
L=[].slice.call(d.querySelectorAll("nav a")),bar=d.getElementById("bar");
function cur(){var y=scrollY+120,i=0;S.forEach(function(s,k){if(s.offsetTop<=y)i=k});return i}
function go(i){i=Math.max(0,Math.min(S.length-1,i));S[i].scrollIntoView({behavior:"smooth"})}
function upd(){var h=r.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+"%";
  var id=S[cur()].id;L.forEach(function(a){a.classList.toggle("act",a.getAttribute("href")==="#"+id)})}
addEventListener("scroll",upd,{passive:true});upd();
addEventListener("keydown",function(e){
  if(e.metaKey||e.ctrlKey||e.altKey)return;
  if(e.key==="ArrowRight"){e.preventDefault();go(cur()+1)}
  if(e.key==="ArrowLeft"){e.preventDefault();go(cur()-1)}
});
d.getElementById("theme").addEventListener("click",function(){
  var t=r.getAttribute("data-theme"),dark=t?t==="dark":!matchMedia("(prefers-color-scheme: light)").matches;
  r.setAttribute("data-theme",dark?"light":"dark");
});
})();
