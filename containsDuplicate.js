// we will use Set to track the numbers thet we have seen

// For each number:
//   If it exists in Set → duplicate found ✅ return true
//   If not → add to Set → continue

// function containsDuplicates(nums){
//   const seen = new Set();

//   for(let num of nums){
//     if(seen.has(num)){
//       return true;
//     }
//     seen.add(num);
//   }
//   return false ;
// }

// console.log(containsDuplicates([1,2,3,4,5,6,1]));


// function containsDuplicates(nums){
//   const seen = new Set();

//   for(let num of nums){
//     if(seen.has(num)){
//       return true;
//     }
//     seen.add(num);
//   }
//   return false;
// }


// console.log(containsDuplicates([1,2,3,4,5,6,7,8,9,10]))


// function containsDuplicates(nums){
//   const seen = new Set();

//   for(let num of nums){
//     if(seen.has(num)){
//       return true;
//     }
//     seen.add(num);
//   }
//   return false;
// }

// console.log(containsDuplicates([1,2,3,4,5,1,2,3,4,5]));

// Complexity 
// Time -	O(n)
// Space - O(n)

