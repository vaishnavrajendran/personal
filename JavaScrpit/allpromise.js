const promise1 = new Promise((resolve,reject)=>{
    resolve(['JavaScript','Html']);
});
const promise2 = new Promise((resolve,reject)=>{
    resolve(['Java','CSS']);
});

const allPromises = Promise.all([promise1,promise2]);
    allPromises.then(res => {
        console.log(res);
    });
