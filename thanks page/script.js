var time = document.getElementById("time")

let t =7;
var ik = setInterval(() => {
    t--;
    time.innerHTML=t
    if(t==0){
       clearInterval(ik)
       window.open("https://bhavneet.netlify.app/","_Parent")
    }
    
}, 1000);
