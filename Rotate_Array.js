function Rotate(nums,k){
  k = k % nums.length

  function Reverse(start,end){
    while(start < end){
      [nums[start],nums[end]] = [nums[end],nums[start]]
      start++;
      end--;
    }
  }
    Reverse(0,nums.length - 1);
    Reverse(0,k-1);
    Reverse(k,nums.length - 1);

    return nums;
}

console.log(Rotate([1,2,3,4,5,6,7,8,9,10],4))