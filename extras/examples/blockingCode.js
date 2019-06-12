var Studied = true
var promess = new Promise(function(resolve, reject) {
    setTimeout(()=> {} , 1000);
    if (Studied) resolve('Pass');
    else reject(new Error('Fail'));
})


promess.then((data) => { console.log(data)}).catch((err)=> { console.log(err) });
console.log("test");