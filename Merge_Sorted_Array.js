function Merge(num1,m,num2,n){
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while(p2 >= 0 ){
    if(p1 >= 0 && num1[p1] > num2[p2]){
      num1[p] = num1[p1];
      p1--;
    }else{
      num1[p] = num2[p2]
      p2--;
    }
    p--;
  }
  return num1 ;
}

console.log(Merge([1,2,3,0,0,0],3 ,[4,5,6],3))