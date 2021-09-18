var cat = "this is javascript"
// console.log(cat)

const biscuitPrice = 16;
if(biscuitPrice != 16) {
    // console.log("let's eat biscuit")
}else{
    // console.log("don't eat biscuit")
}



var personOne = "Rahim";
var personTwo = "Karim";
var theyAreBrother = true;

if ("Rahim" == personOne){
    if("Karim" == personTwo){
        if (true == theyAreBrother){
            // console.log("they are brothers")
        }
    }
}

if("Rahim" == personOne && "Karim" == personOne && true == theyAreBrother){
    // console.log("they are brothers")
}else{
    // console.log("not brothers")
}

let jobPaiso = true;
let savingAmount = 50000;
if(jobPaiso == true || savingAmount > 20000){
    // console.log("let's get married")
}else{
    // console.log("Don't get married")
}

// Array 
let list =[ "kader", "kamal", "kuddus", "jamal"]
// console.log(list.length)

list[3] = "mintu"
// console.log(list)

// push pop 

let male = [ "kader", "kamal", "kuddus", "jamal", "zamila"];
let female = ["zannat", "santa", "riya", "mitu"];

const changeLady = male.pop();
female.push(changeLady)
// console.log(female)

// copy array 

let list1 = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "jun"
];

let list2 = [...list1];
list2[2]= "no day";
// console.log(list2,list1)

let chunk = list1.slice(1, 4);
// console.log(chunk)



