/* Delivery Options Component */
import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utils/money.js";

export function DeliveryOptions({cartItem,deliveryOptions,loadCart}) {
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

        //we create the function on each loop
        const updateDeliveryOption = async ()=> {
          await axios.put(`/api/cart-items/${cartItem.productId}`,{
            deliveryOptionId: deliveryOption.id
          });

          //setelah update, reload cart (keranjang belanja)
          await loadCart();

          // console.log("Delivery option updated");
        };

        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input
              type="radio"
              checked={deliveryOption.id ===cartItem.deliveryOptionId}
              className={`delivery-option-input`}
              name={`delivery-option-${cartItem.productId}`}
              onClick={updateDeliveryOption}
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