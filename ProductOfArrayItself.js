// function productExceptItself(nums){
//   const n = nums.length;
//   const left = new Array(n);
//   const right = new Array(n);
//   left[0] = 1
//   right[n-1]= 1

//   // left
//   for(let i = 1 ; i < n ; i++){
//     left[i] = left[i - 1] + nums[i - 1]
//   }
//   // right
//   for(let i = n -2 ; i >=0 ; i--){
//     right[i] = right [i + 1] * nums[i + 1]
//   }

//   const result= []
//   for(let i = 0 ; i < n ; i++ ){
//     const product = left[i] * right[i]
//     result.push(product)
//   }
//   return result;
// }

// console.log(productExceptItself([1,2,3,4,5]))

function productExceptItself(nums){
  const n = nums.length;
  const left = new Array(n);
  const right = new Array(n);
  left[0] = 1
  right[n-1]= 1
// left
  for(let i = 1 ; i < n ; i ++ ){
    left[i] = left[i - 1] * nums[i -1]
  }
  // right 
  for(let i = n - 2 ; i >= 0 ; i -- ){
    right[i] = right[i + 1] * nums[i + 1]
  }
  const result = []
  for(let i = 0 ; i < n ; i++){
    const product = left[i] * right[i]
    result.push(product)
  }
  return result;
}

console.log(productExceptItself([1,2,3,4,5,6,7,8,9,10]));