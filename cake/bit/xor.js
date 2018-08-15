function findUniqueDeliveryId(deliveryIds) {

    var uniqueDeliveryId = 0;

    deliveryIds.forEach(function(deliveryId) {
      debugger
        uniqueDeliveryId ^= deliveryId;
    });

    return uniqueDeliveryId;
}

let arr = [1,2,3,4,5,6,5,6,3,1,2]
