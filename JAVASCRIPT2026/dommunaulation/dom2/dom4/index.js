// var elem1 = document.querySelector("#elem1")
// var elemimage = document.querySelector("#elem1 img")
// elem1.addEventListener("mousemove", function (dets) {
//     elemimage.style.left = dets.x
//         + "px"
//     elemimage.style.top=dets.y+"px"
// })
// elem1.addEventListener("mouseenter", function (dets) {
//     elemimage.style.opacity=1
// })
// elem1.addEventListener("mouseleave", function (dets) {
//     elemimage.style.opacity=0
// })
var elem = document.querySelectorAll(".elem");
elem.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        val.childNodes[2].style.opacity=1
    })
    val.childNodes("mouseleave", function () {
        val.childNodes[2].style.opacity=0
    })
    val.addEventListener("mousemove", function () {
         val.childNodes[2].style.left = dets.x + "px"
        val.childNodes[2].style.right=dets.y+"py"
    })

    
})

