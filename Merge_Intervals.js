function Merge(intervals){
  if(intervals.length === 0) return [];

  intervals.sort((a,b)=> a[0] - b[0])

  const result = [intervals[0]];

  for(let i = 1 ; i < intervals.length; i++){
    const current = intervals[i]
    const last = result[result.length - 1]


    if(current[0] <= last[1]){
      last[1] = Math.max(last[1],current[1])
    } else {
      result.push(current)
    }
  }
  return result;
}
console.log(Merge([[1,2],[3,6],[6,8],[9,10]]))