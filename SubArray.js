// num=1  → max(1,  -2+1)  = 1  → maxSum=1
// num=-3 → max(-3, 1-3)   = -2 → maxSum=1
// num=4  → max(4,  -2+4)  = 4  → maxSum=4
// num=-1 → max(-1, 4-1)   = 3  → maxSum=4
// num=2  → max(2,  3+2)   = 5  → maxSum=5
// num=1  → max(1,  5+1)   = 6  → maxSum=6 ✅
// num=-5 → max(-5, 6-5)   = 1  → maxSum=6
// num=4  → max(4,  1+4)   = 5  → maxSum=6

// return 6 ✅
// nums =[-2,1,-3,4,-1,2,1,-5,4] kadane's alogorithm

// 01
// function maxSubArray(nums){
//   let sum = 0;
//   let max = nums[0];

//   for(let i =0 ; i< nums.length ; i++){
//     sum += nums[i]
//     if(sum > max){
//       max = sum
//     }
//     if(sum < 0){
//       sum = 0
//     }
//   }
//   return max;
// }
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


// 02
// function maxSubArray(nums){
//   let sum = nums[0];
//   let max =nums[0];

//   for(let i =0 ; i < nums.length ; i++){
//     sum = sum + nums[i];
//     if(sum > max){
//       max = sum
//     }
//     if(sum < 0){
//       sum = 0
//     }
//   }
//   return max;
// }

// console.log(maxSubArray([-11,3,-4,-7,9,-4,-8,2,-6,3,-8]))




// 03
function maxSubArray(nums){
  let sum = 0;
  let max = nums[0];

for(let i = 0; i < nums.length ;i++){
  sum += nums[i]
  if(sum > max){
    max= sum
  }
  if(sum < 0){
    sum = 0
  }
}
return max;
}

console.log(maxSubArray([1,-2,3,-4,5,-6,7,-8,9,-10]))





