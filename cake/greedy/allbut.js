function productsOfAllIntsExceptMe(intArray) {
  const productsOfAllIntsBeforeIndex = [];

  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsBeforeIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  productSoFar = 1;
  for (let i = intArray.length - 1; i >= 0; i--) {
    productsOfAllIntsBeforeIndex[i] = productSoFar * productsOfAllIntsBeforeIndex[i];
    productSoFar *= intArray[i];
  }

  return productsOfAllIntsBeforeIndex;


}
