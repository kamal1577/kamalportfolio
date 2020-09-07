
const links =document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
  for(let i=0; i< links.length; i++){
      if(color == links[i].getAttribute('title')){
          links[i].removeAttribute("disabled");
      }
      else{
          links[i].setAttribute("disabled", "true");
      }
  }
}