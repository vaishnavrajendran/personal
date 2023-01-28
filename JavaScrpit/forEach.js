/*      ForEach

let array=[50,52,55,60,65]

array.forEach((n,i,array) =>{
    console.log(n,i,array);
}) 

      Function

let add=function(num1,num2){
    return num1+num2;
}
let result=add(11,13);
console.log(result);


function add(num1,num2){
    return num1+num2;
}
let result=add(5,6);
console.log(result);



function greet(user1){

    return `Hello ${user1}`;
}
let user= 'Vaishnav';
let str = greet(user);
console.log(str);

let laptop1 ={
    cpu: 'i7',
    ram:"4gb",
    brand:'Asus',
    getFunction: function(){
        console.log(this.brand);
    },
}
let laptop2 ={
    cpu: 'i9',
    ram:"16gb",
    brand:'Apple',
    getFunction: function(){
        console.log(this.brand);
    },
}

if(laptop1.cpu>laptop2.cpu){
    console.log(laptop1);
}else{
    console.log(laptop2);
}


function alien(name,tech){
    this.name=name;
    this.tech=tech;
}
let alien1=new alien("Ajay","JS");
alien1.tech="BlockChain";
console.log(alien1);
let alien2=new alien("Sumesh","Java");
console.log(alien2);


let a=5;
let b=6;
console.log(a,b);
[a,b]=[b,a]
console.log(a,b);



let nums= new Set();
nums.add(3);
nums.add(4);
nums.add("Vaishnav")
console.log(nums.has(3));

*/
function view(x) {
    x=7;
    console.log(x);
    var x;
}



