var arr = [
    {
        dp:"https://www.bing.com/th/id/OIP.YX1hkyvWHPxKaZzquka8RAHaFj?w=279&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2 " ,story:"https://www.istockphoto.com/photo/portrait-of-an-athletic-woman-gm2235623281-650959258?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffashion-model&utm_term=fashion+model%3A%3Awallpapers-no-affiliates%3Acontrol%3A5f5bab75-9cbc-4d65-9aed-86db396da4f3"
    },
    {
        dp:"iron men3.jpg",story:"iron men4.png"
    },
    {
        dp: "iron men4.png",
        story:"iron men3.jpg"
    }
]
var storiyan=document.querySelector("#storiyan")
var clutter = "";
arr.forEach(function (elem,idx) {
    clutter +=`<div id="story">
                    <img id="${idx}" src="${elem.dp}" alt="">

                </div>`

})
storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
})