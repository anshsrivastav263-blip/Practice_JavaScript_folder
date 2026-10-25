// create date object 
const date=new Date()
console.log(date);

// print date into readable format 
console.log(`Current date is :${date.toLocaleDateString()}`);
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());

// print time 
console.log(`Current time is :${date.toLocaleTimeString()}`);
console.log('-----Detaile----');
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

const printTime=()=>{
    const date=new Date()

    console.log(`The time is :${date.toLocaleTimeString()}`);
}

const stop=setInterval(printTime,1000)
setTimeout(()=>clearInterval(stop),5000)



