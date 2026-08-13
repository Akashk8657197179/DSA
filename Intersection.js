// we use  Set in Intersection 

// function Intersection (num1,num2){
//   const set1 = new Set(num1);       //store num1
//   const result = new Set();           //Avoid Duplicates in result

//    for (let num of num2){
//     if(set1.has(num)){
//       result.add(num);
//     }
//    }
//    return [...result];

// }

// console.log(Intersection([1,2,2,3,3,4,5],[1,1,2,4,3]));


function Intersection(num1,num2){
  const set1 = new Set(num1);
  const result = new Set();

  for(let num of num2){
    if(set1.has(num)){
      result.add(num);
    }
  }
  return [...result] 
}


console.log(Intersection([1,2,3,4],[1,2,3,5,6,7,8,43]))
