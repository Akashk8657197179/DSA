// I will track two things:
//   minPrice → lowest price seen so far
//   maxProfit → highest profit seen so far

// For each price:
//   Update minPrice if current is lower
//   Calculate profit = current - minPrice
//   Update maxProfit if profit is higher"

// function maxProfit(prices){
//   let minPrice = Infinity;
//   let maxProfit = 0

//   for(let price of prices){
//     if(price < minPrice){                // ✅ new lowest price
//       minPrice = price;
//     }
//     const profit = price - minPrice;
  
//   if(profit > maxProfit){                  // ✅ new best profit
//     maxProfit = price;
//   }
// }
// return maxProfit;
// }

// console.log(maxProfit([7,1,2,3,5,6,9]))



// function maxProfit(prices){
//   let minPrice =Infinity;
//   let maxProfit = 0 

//   for (let price of prices){
//     if(price < minPrice){
//       minPrice = price
//     }
//     const profit = price - minPrice;
    
//     if(price > maxProfit){
//       maxProfit = price
//     }
//   }
//   return maxProfit ;
// }

// console.log(maxProfit([1,2,3,4,5,6,7,8,9,10]))



// function maxProfit(prices){
//   let minPrice = Infinity
//   let maxProfit = 0

//   for(let price of prices){
//     if(price < minPrice){
//       minPrice = price
//     }
//     const profit = price - minPrice

//     if(price > maxProfit){
//       maxProfit = price
//     }
//   }
//   return maxProfit
// }
// console.log(maxProfit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))

