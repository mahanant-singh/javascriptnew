// asy code work kraga
// console.log("one")
// setTimeout(() => {
//     console.log("hello")

// }, 4000)
// console.log("two")
// function getdata(data) {
//     setTimeout(() => {
//       console.log("data",data)
//   },2000)
// }
// getdata(4)

//============callback===========
//setp 1 create a function
//step 2 create a another function in first function in kknow is calll backs function
 
function getdata(dataId, getNextdata) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextdata) {
            getNextdata();
        }
        
    }, 2000);

}

//call backhell ---> is nested callback
getdata(1, () => {
    getdata(2, () => {
        getdata(3);
    });
})