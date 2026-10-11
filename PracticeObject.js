// create object by constructor
const user=Object();

user.Name="Anshsrivastav";
user.Age=18;
user.Subject={
    "Maths":100,
    "Physics":100,
    "English":100,
    "Hindi":100,
    "Chemistry":100
};
// console.log(user);

// loop on object 
for(const [key,value] of Object.entries(user)){
    console.log(`${key} :${value}`);
    if(key==="Subject"){
        console.log(`Subjects :`);
        for(const [key,value] of Object.entries(user.Subject)){
            console.log(`${key} :${value}`);
        }
    }
}
