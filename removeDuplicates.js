// function removeDuplicates(nums){
//   if(nums.length === 0) return 0;

//   let left = 0;

//   for(let right = 0; right < nums.length; right++){
//     if(nums[right] !== nums[right - 1]){
//       nums[left] = nums[right]
//       left++
//     }
//   }
//   return left;
// }

// console.log(removeDuplicates([1,1,2,2,3,4,4,5,6,7,7,8,8,9]))



function removeDuplicates(nums){
  if(nums.length === 0) return 0 ;

  let left = 0;

  for(let right = 0 ;right < nums.length; right++){
    if(nums[right] !== nums[right - 1]){
      nums[left] =nums[right]
      left ++;
    }
  }
  return left
}

console.log(removeDuplicates([0,0,1,2,3,3]))