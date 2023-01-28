const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Got user');
        reject('User not logged in');
    },2000);
});

promise
    .then(user =>{
        console.log(user);
    })
    .catch(err=> console.log(err));