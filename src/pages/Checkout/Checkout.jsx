import { useEffect } from 'react';

function Checkout() {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <>
            <div className="mt-[15%] text-[green] text-['Monserrat'] font-medium text-[20px] md:text-[28px]">
                <div className="flex justify-center">
                    <span>Your order is successfully</span>
                </div>
                <div className="flex justify-center">
                    <span>My staff will be call you to comfirm your order</span>
                </div>
                <div className="flex justify-center">
                    <span>Please listen your phone when we call</span>
                </div>
                <div className="flex justify-center">
                    <span>And last, thank for purchase in my store</span>
                </div>
                <div className="flex justify-center">
                    <span>Best Regards</span>
                </div>
            </div>
        </>
    )
}

export default Checkout;