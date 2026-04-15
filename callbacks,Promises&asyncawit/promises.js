// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promoise")
//     reject("some error");

// })


// function getData(dataid, getnextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             resolve("succcess");
//             if (getnextdata) {
//                 getnextdata();
//             }
//         },5000)
//     })
// }
// getData(23234)



/// =============promise===========
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am promise");
       
//     })
// }
// let promise = getPromise();
// promise.then(()=> {
//     console.log("promise fulfilled")
// })
// promise.catch((err) => {
//     console.log("rejected",err)
// })

///==========promise chain============  chaining is ak thin ka ander dusra thin use ho
function asy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1...");
            resolve("success")
        },4000)
    })
}
function asy2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2....");
            resolve("success")
        },4000)
    })
}
// console.log("fatching data1");
// let p1 = asy();
// p1.then((res) => {
//     console.log(res);
// })
// console.log("fatching data2..");
// let p2 = asy();
// p2.then((res) => {
//     console.log(res);
// })

//working of promise chaining
console.log("fatching data1")
asy().then((res) => {
    console.log("fatching data2")
    asy().then((res)=>{})
})