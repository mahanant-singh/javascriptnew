var istatus = document.querySelector("h3")
var adding = document.querySelector(".Adding")

var check =0
adding.addEventListener("click", function () {
    if (check == 0) {
         istatus.innerHTML = "tools is add now"
    istatus.style.color = "green"
        // alert("tools are adding successful ")
        adding.innerHTML="remove feiend"
        check=1

    } else {
        istatus.innerHTML = "tools is removed bow"
        istatus.style.color = "red"
        
        check = 0
        adding.innerHTML="Adding tools"
    }
   
})

