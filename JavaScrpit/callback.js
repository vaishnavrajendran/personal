console.log('Start');
function userDetails(email,password,callback) {
    setTimeout(() => {
        console.log('We got the data');
        callback({userEmail: email})
    }, 2000);
}
function userVideos(callback) {
    setTimeout(() => {
        callback(['Video1','Video2','Video3']);
    }, 2000);
}

userDetails('Vyshnvrjndrn@gmail.com',12345, user => {
   console.log(user);
   userVideos(video =>{
    console.log(video)
})
});
console.log('End');