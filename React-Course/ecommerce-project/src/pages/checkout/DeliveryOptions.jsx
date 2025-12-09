/* Delivery Options Component */
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money.js";

export function DeliveryOptions({cartItem,deliveryOptions}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      {deliveryOptions.map((deliveryOption) => {
        let shippingPriceString = "Free Shipping";
        if (deliveryOption.priceCents > 0) {
          shippingPriceString = `${formatMoney(
            deliveryOption.priceCents
          )} - Shipping`;
        }
        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
          >
            <input
              type="radio"
              checked={
                deliveryOption.id ===
                cartItem.deliveryOptionId
              }
              className={`delivery-option-input`}
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(
                  deliveryOption.estimatedDeliveryTimeMs
                ).format("dddd D MMMM")}
              </div>
              <div className="delivery-option-price">
                {shippingPriceString}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}