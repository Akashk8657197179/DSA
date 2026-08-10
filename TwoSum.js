// Problem 
// nums =[2,7,11,15]; Target = 9
// Find two numbers that Add up to 9

// A Hash Map an Object/Map in JavaScript) is a data structure that stores data as key-value pairs.

// We use a Hash Map because it allows us to find, insert, update, and delete data very quickly—usually in O(1) (constant time).

// 01
// function twoSum(nums,target){
//   const map = new Map();

//   for(let i = 0 ; i < nums.length; i++){
//     const needed = target - nums[i];  
//     if(map.has(needed)){
//       return [map.get(needed),i]
//     }
//     map.set(nums[i],i)
//   }
// }
// console.log(twoSum([2,7,11,15],9));



// 02
// function twoSum(nums,target){
//   const map = new Map();

//   for(let i = 0;i < nums.length ; i++){
//     const needed = target - nums[i];
//     if(map.has(needed)){
//       return [map.get(needed),i];
//     }
//     map.set(nums[i],i)
//   }
// }

// console.log(twoSum([3,2,4,6,7,8,9],6))


// 03
// function twoSum(nums,target){
//   const map = new Map();

//   for(let i=0;i<nums.length;i++){
//     const needed = target - nums[i];
//     if(map.has(needed)){
//       return [map.get(needed),i]
//     }
//     map.set(nums[i],i)
//   }
// }

// console.log(twoSum([3,3,4,8,9,2,5,6],6))

// Hash map - One Loop 
// store what we have seeen 
// look up what we need

// complexity - 
// Time - O(n)
// Space - O(n)