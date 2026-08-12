// function majorityElements(nums){
//   const map = new Map()

//   for(let num of nums){
//     map.set(num ,(map.get(num) || 0 ) + 1);

//     if(map.get(num) > nums.length /2){
//       return num;
//     }
//   }
// }
// console.log(majorityElements([1,2,1,1,1,2,2,2,2,2,3]))


function majorityElements(nums){
  const map = new Map()

  for(let num of nums){
    map.set(num ,(map.get(num) || 0) + 1)

    if(map.get(num) > nums.length / 2){
      return num;
    }
  }
}

console.log(majorityElements([1,1,1,1,1,,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]))