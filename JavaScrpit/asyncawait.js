const promise1 = new Promise((resolve,reject) => {
    resolve('User happy');
})

async function fetchData() {
    const response = await promise1;
    console.log(response);   
}
fetchData();