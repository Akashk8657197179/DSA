// Top K Frequent Elements -hashmap 

// Problem
// nums = [1, 1, 1, 2, 2, 3],  k = 2
// Output → [1, 2] ✅
// (1 appears 3 times, 2 appears 2 times)

// nums = [1],  k = 1
// Output → [1] ✅

// function topKFrequent(nums,k){

//   const map = new Map();
//   for(let num of nums){
//     map.set(num,(map.get(num)|| 0) + 1);
//   }
//   return [...map.entries()]
//     .sort((a,b)=> b[1] - a[1])
//     .slice(0,k)
//     .map(entry => entry[0])
// }

// console.log(topKFrequent([1,2,2,3,4,4],2));
// console.log(topKFrequent([1],1));


function topKFrequent(nums,k){
  const map = new Map();

  for (let num of nums){
    map.set(num, (map.get(num)||0) + 1)
  }
  return [...map.entries()]
    .sort((a,b)=> b[1]-a[b])
    .slice(0 ,k)
    .map(entry => entry[0]);
}
console.log(topKFrequent([1,1,2,2,3,4],2));
console.log(topKFrequent([1],1));

