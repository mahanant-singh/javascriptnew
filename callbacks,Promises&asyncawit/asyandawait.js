function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);

       },4000)
    });
}
async function get() {
    await api(1)  // first call completed 
    await api(2)  // then secand call completed
}
get()

