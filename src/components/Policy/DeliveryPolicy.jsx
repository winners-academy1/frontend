import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/policy/delivery-p.css"
function DeliveryPolicy() {
    return (
        <>
        <section className="delivery-p" >
        <div className="lamar-container">
          <div className="path">
            <Link to="/">
              <i class="fas fa-home"></i>
            </Link>
            <i class="fas fa-angle-right"></i> <span>Delivery Policy</span>
          </div>
        </div>
        <div className="lamar-container">
            <p><span>lamar fashion</span> r sit, amet consectetur adipisicing elit. Minus laborum, aliquid corrupti reprehenderit eius ullam quo voluptas doloremque consequuntur atque tempore nesciunt consectetur sunt deserunt, perspiciatis totam deleniti hic eaque.</p>
            <p>We ship all our goods directly from the factory in Qatar.</p>
            <p>If you have any other questions, please email us on <span>customersupport@lamar.com</span></p>
                <ul>
                    <li>NOTE: Important! Customs policies, forces of nature, strikes, and so on are excluded from the stated delivery time. Packages delivered internationally may be subject to customs duty. In this case, customs officials will inform you about how to receive your order. Customs duty may vary according to your order and shipping country. It is the responsibility of the customer to pay duty on any order subject to customs clearance.</li>
                </ul>
        </div>
        </section>
        </>
    )
}

export default DeliveryPolicy
