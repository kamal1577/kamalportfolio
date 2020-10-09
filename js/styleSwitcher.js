
const links =document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
  for(let i=0; i< links.length; i++){
      if(color ===links[i].getAttribute('title')){
          links[i].removeAttribute("disabled");
      }
      else{
          links[i].setAttribute("disabled", "true");
      }
  }
}

//body skin
const bodySkin = document.querySelectorAll(".body-skin")
for(var i=0; i< bodySkin.length; i++){
    bodySkin[i].addEventListener("change", function(){
       if(this.value === "dark"){
           document.body.className="dark"
       }
       else{
        document.body.className=""
       }
    })
}
