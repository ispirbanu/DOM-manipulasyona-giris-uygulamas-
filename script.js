const buton=document.querySelector("#buton");
const konum= document.querySelector("#bosluk");
const container= document.querySelector(".container");


//element oluştur
const newspace=document.createElement("span");
newspace.setAttribute("id","bosluk");
//element değiştir
container.replaceChild(newspace,konum);


let k=1;



buton.addEventListener("click",olustur, false);
//buton.onclick=olustur;

function olustur(){
if(k==1)
{
const newbutton1= document.createElement("button");
newbutton1.setAttribute("id","btnpurple");
newbutton1.setAttribute("name","purple");
newbutton1.innerText="purple";

const newbutton2= document.createElement("button");
newbutton2.setAttribute("id","btngreen");
newbutton2.innerText="Green";

const newbutton3= document.createElement("button");
newbutton3.setAttribute("id","btnblack");
newbutton3.innerText="Black";

const newbutton4= document.createElement("button");
newbutton4.setAttribute("id","clear");
newbutton4.innerText="Clear";

const newinput=document.createElement("textarea");
newinput.setAttribute("id","notepad");
newinput.setAttribute("type","text");


newspace.appendChild(newbutton1);
newspace.appendChild(newbutton2);
newspace.appendChild(newbutton3);
newspace.appendChild(newinput);
newspace.appendChild(newbutton4);
k=2;
}
const btng= document.querySelector("#btngreen");
const btnb= document.querySelector("#btnblack");
const text=document.querySelector("#notepad");
const btnp= document.querySelector("#btnpurple");
const btnc=document.querySelector("#clear");

// btnb.addEventListener("click",function(){
//     console.log("black");
//      text.style.color="black";
//      text.focus();
// });

 btnp.onclick=function(){
    console.log("purple");
    text.style.color="purple";
    text.focus();

}
btng.onclick=()=>{
    console.log("green");
    text.style.color="green";
    text.focus();
}
btnb.onclick=function(){
    console.log("black");
    text.style.color="black";
    text.focus();
}
btnc.onclick=function(){
    text.value="";
    text.focus();
}



}

