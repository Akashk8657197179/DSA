// "I will use a Set for O(1) lookup.

// Key insight:
//   Only start counting from sequence START
//   Sequence start = num where (num-1) is NOT in Set

// For each sequence start:
//   Count how long it goes (num+1, num+2...)
//   Update maxLength ✅"


// 1. Put all numbers in a Set
// 2. Loop through set
// 3. If num-1 NOT in set → sequence start
// 4. Count while num+1 exists in set
// 5. Update maxLength
// 6. Return maxLength

// Code---

//  function longestConsecutive(nums){
//   const set = new Set(nums);
//   let maxlength = 0;

//   for (let num of set){
//     if(!set.has(num - 1)){
//       let current = num
//       let length = 1

//       while (set.has(current + 1)){
//         current++
//         length++
//       }
//       maxlength = Math.max(maxlength,length);
//     }
//   }
//   return maxlength;
// }

// console.log(longestConsecutive([11,22,1,3,4,5,2,6]))


function longestConsecutive(nums){
  const set = new Set(nums);
  let maxlength = 0;

  for (let num of set){
    if(!set.has(num - 1)){
      let current = num
      let length = 1

      while(set.has(current + 1)){
        current ++
        length ++
      }
      maxlength = Math.max(maxlength,length)
    }
  }
  return maxlength;
}

console.log(longestConsecutive([1,45,2,56,3,954,4,8532,5,6,736,7,5456,8,9,395,10]))