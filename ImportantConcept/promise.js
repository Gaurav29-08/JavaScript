const cart = ["shoes","paint","shirt"];

createOrder(cart,function (orderId){
  proceedToPayment(orderId,function (paymentInfo){
    showOrderSummary(paymentInfo,function(){
      updateWallet();
    })
  })
});


