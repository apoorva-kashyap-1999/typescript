//tsc --> converts .ts to .js
//then run js file --> node file

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let n = 123;
let level; //type -> any

function render(document: any) {
    console.log(document);
}
render('APOORVA');

let arrays: number[] = [1,2,3];

//tuple : good for ey-value pair
let user: [number,string,boolean, number] = [1, 'apoorva', true, 0];

//ENUMS : list of related constant
const small=1;
const medium =2;
const large= 3;
// now alternate is enum
enum Size {Small=1, Medium, Large};
let mySize : Size = Size.Medium;


console.log(mySize);

const enum Sizes {Small=4, Medium, Large};
let mySizes : Sizes = Sizes.Medium;
console.log(mySizes);


//functions
function calculateTask(income:number, tax?:number): number {
    if (income < 50000){
        console.log(income*1.2);
        console.log(tax);
    return income*1.2;}
    else{ console.log(income);return 0;}
}
calculateTask(50_00078,2022);
calculateTask(80000);

//objects
// let emp:{
//     readonly id:number,
//     name: string,
//     age?:number
//     retire: (date: Date)=> void
// } = { id: 1, name:'',
// retire: (date: Date) => {console.log(date);
// }
// };

//type-alias
 
type Employee = {
    readonly id:number,
    name: string,
    age?:number
    retire: (date: Date)=> void
}

let employee1 :Employee = {
    id:1,
    name:'apoorva',
    age:25,
    retire:(date: Date) => {
        console.log(date);
    }
}

let employee2 :Employee = {
    id:2,
    name:'aparajita',
    retire:(date: Date) => {
        console.log(date);
    }
}

//union-types

function kgToLbs(weight:number | string): void {
    //narrowing
    if(typeof weight === 'number'){
        console.log(weight*2.2 +'kg')
    }
    else
       console.log(weight);
}


kgToLbs(10);
kgToLbs('100kg');



// Intersection Types
type Draggable ={
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;
let textBox : UIWidget = {
    drag:()=>{},
    resize:()=>{}
}

//literal types :exact value only
type Quantity = 50|100
 let quantity: 50 | 100 = 100;
 let quan : Quantity = 50;

 //literal
 type metric = 'cm' | 'inch'

 //nullable types

 function greet(name: string| null){
    if(name){ console.log(name.toUpperCase());}
    else{console.log('OOPS')}
 }

 greet(null);

// optional chaining
type Customer= {
    birthDay: Date
}

function getCustomer(id:number): Customer | null {
    return id === 0 ? null : {birthDay : new Date()}
}

let customer1 = getCustomer(0);
console.log(customer1);
let customer2 = getCustomer(2);
console.log(customer2);
let customer3 = getCustomer(3);
console.log(customer3?.birthDay); //gets executed only if not null --> optional chaining

//optional element access operator: customer?.[0]
//optional call operator:
let log : any = null;
log?.('a');




