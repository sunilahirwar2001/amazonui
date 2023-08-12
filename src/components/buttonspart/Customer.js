import React from 'react';


function  Customer() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow rounded">
        <h1 className="text-3xl font-semibold mb-4">Amazon Help Center   <span>Number:1800 3000 9009</span></h1>
        <ul className="space-y-4">
          <li>
            <h2 className="text-xl font-semibold">Your Orders</h2>
            <ul className="ml-4 space-y-2">
              <li>Track packages</li>
              <li>Edit or cancel orders <span>
              To cancel orders that are not shipped yet:

Go to Your Orders
Select the item you want to cancel and click Cancel items
Provide reasons for cancellation (optional) and proceed
To cancel orders that are already shipped:

Go to Your Orders
Select the Request cancellation option and proceed further
The item(s) will be returned to us for a refund (if the payment is already made)
In case you're still contacted for delivery, please refuse to accept it.
Note:
If your order is combined with other active orders from your account and is shipped as a single shipment (common tracking number), then cancelling one order/item would result in cancellation of all the other orders/items combined in the shipment.
For orders shipped directly by the seller, your order will be cancelled by the seller. A refund will be processed to your original payment method by the seller, if the payment was already made.
International customers cannot cancel an export order once it is shipped. However, they may refuse delivery of the product(s) and contact us to get a refund.</span></li>
            </ul>
          </li>
          <li>
            <h2 className="text-xl font-semibold">Returns and Refunds
            <p>
About Refunds
100% purchase protection
Request an A-to-z Guarantee Refund
Cancel a Request for an A-to-z Guarantee Refund
Appeal a Denied A-to-z Guarantee Refund</p></h2>
            <ul className="ml-4 space-y-2">
              <li>Return or exchange items <p>FAQs about Returns and Replacement
Damaged, Defective or Wrong Product - FAQ
How to schedule a Return
Return Pick up and Self Ship Guidelines
Return orders with a third-party seller</p></li>
              <li>Print return mailing labels:cs-reply@amazon.in</li>
            </ul>
          </li>
          {/* Add more sections here */}
        </ul>
      </div>
    </div>
  );
}

export default Customer;
