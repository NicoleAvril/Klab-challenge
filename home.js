
const items=  [{names:'bike',price:100},
{names:'TV',price:200},
{names:'Album',price:10},
{names:'Book',price:5},
{names:'Phone',price:500},
{names:'Computer',price:1000},
];

let filter;
let filter1;
let f;
let sum=0;
let i;
filter = items.price[0];

for(i =1 ;i<=6;i++){
 if(filter>=items.price[i]){
  filter= items.price[i];
  f=items.names[i];
 }
}
console.log(`the cheapest item is ${f}`);

filter1 = items.price[0]
for(i =1 ;i<=6;i++){
  if(filter1<=items.price[i]){
   filter1= items.price[i];
   f=items.names[i];
  }
 }

 console.log(`the most expensive item is ${f}`);

 for(i =1 ;i<=6;i++){
  sum = sum+items.price[i]
  
 }
 
 console.log(`the sum of all items is ${sum}`);

 let sum1 = 0;
 for(i =1 ;i<=6;i++){
  if(items.price[i] >= 10 ){
   sum1= sum1 + items.price[i];
   
  }
 }

 console.log(`the sum of all items except those under 10 dollars is ${sum1}`);
