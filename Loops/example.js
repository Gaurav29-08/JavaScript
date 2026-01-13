function discountCalculator(totalAmount) {
  // a variable to store the final amount after applying the discount
    let answer;
    if (totalAmount >= 100) {
        answer = totalAmount - (totalAmount * 0.10);
    }
    else if (totalAmount >= 50 && totalAmount <= 99.99) {
        answer = totalAmount - (totalAmount * 0.5);
    }
    else {
      answer = "no discount is applied"
  }

  // Check if the total amount is 100 or more to apply a 10% discount
  // Then subtract the discount value from the total amount to get the answer

  // Check if the total amount is between 50 and 99.99 (inclusive) to apply a 5% discount

  // If the total amount is less than 50, no discount is applied
  // In this case, the answer should be the same as the total amount


  // Returning the final amount after applying the discount
  return answer;
}
