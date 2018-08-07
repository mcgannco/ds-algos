function maxProfit(arr) {
  if(arr.length < 2) {
    console.log("not enough stock info")
  }
  let maxProfit = arr[1] - arr[0];
  let lowestPrice = Math.min(arr[0], arr[1])
  for (let i = 2; i < arr.length; i++) {
    let currentPrice = arr[i];
    let potentialProfit = currentPrice - lowestPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);

    lowestPrice = Math.min(lowestPrice, currentPrice);
  }
  return maxProfit
}
