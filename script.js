const music=document.getElementById("music"),vol=document.getElementById("volume"),nameEl=document.getElementById("songName");
const songs=["songs/song1.mp3","songs/song2.mp3","songs/song3.mp3"]; const names=["Miss You","Song 2","Song 3"];
function changeSong(i){music.src=songs[i];music.play();nameEl.innerText=names[i];}
vol.oninput=()=>music.volume=vol.value;
document.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px";});
for(let i=0;i<35;i++){let s=document.createElement("span");s.innerHTML="✦";s.style.left=Math.random()*100+"vw";s.style.animationDuration=(5+Math.random()*10)+"s";s.style.fontSize=(10+Math.random()*15)+"px";s.style.animationName="fall";document.getElementById("particles").appendChild(s);}
let st=document.createElement('style');st.innerHTML='@keyframes fall{to{transform:translateY(110vh)}}';document.head.appendChild(st);
document.body.addEventListener("click",()=>music.play(),{once:true});