// function moveZeros(nums){
//   let left = 0

//   for(let right = 0; right < nums.length ; right++){
//     if(nums[right]!==0){
//       [nums[left] ,nums[right]] =   [nums[right],nums[left]]
//       left ++ ;
//     }
//   }
//   return nums
// }
// console.log(moveZeros([0,1,3,0,11,0,12]));


function moveZeros(nums){
  let left = 0

  for(let right =0 ;right < nums.length; right++){
    if(nums[right]!==0){
      [nums[left],nums[right]] = [nums[right],nums[left]];
      left ++;
    }
  }
    return nums;
}

console.log(moveZeros([0,0,0,0,1,2,3,4,5,6,7,8,9]))