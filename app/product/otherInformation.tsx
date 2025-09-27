"use client"
import Compatibilty from "./otherInformation/compatibility";
import Product_Detail from "./otherInformation/productDetail";
import Shipping_And_Returns_Policy from "./otherInformation/shippingAndReturnsPolicy";
import Size_Guide from "./otherInformation/sizeGuide";

export default function Other_Information() {
    return (
        <div className="mt-7 w-full max-w-[450px] lg:max-w-[500px]">
            <Shipping_And_Returns_Policy />
            <Product_Detail />
            <Size_Guide />
            <Compatibilty />
        </div>
    );
}