import React from 'react';
import "./TermsOfServiceDelivery.css"

const TermsOfServiceDelivery = () => {
    return (
        <>
            <div className={"infoBlock"}>
                <h5>1.</h5>
                <div>
                    <div>
                        <h6>Fast delivery from the store <br/>
                            In the cities where KK Shop supermarkets are present, there is a fast delivery from the
                            store
                            the same day.
                            Available payment methods: bank card, gift card. Bonuses may apply. The use of a gift card
                            and
                            bonuses is possible only with online payment.<br/>
                            How to place an order with delivery from a store in your city:</h6>
                        <h6 className={"transparent"}>
                            Select the desired funds on the site. <br/>
                            Check their availability in the store in your city.<br/>
                            Place an order on the site by choosing the "fast delivery from the store method".<br/>
                            You will receive an SMS as soon as the order has been collected and handed over to the
                            courier.<br/>
                            Wait for the courier with the parcel!
                        </h6>
                    </div>
                    <div>
                        <h6>Fast delivery is valid in all cities of presence. Please note that in Yekaterinburg,
                            delivery
                            from the store is valid only in the BOLSHOY <br/> Department Store; in Kazan - only in the
                            supermarket
                            at st. Pushkin, 2; in Moscow - only in the shopping center Afimall City, shopping center
                            Kuntsevo Plaza, shopping center Metropolis, shopping center Salaris. <br/>
                            ** Fast delivery from the store on the day of the order is valid in all cities of presence,
                            except for Moscow.</h6>
                        <h4>Delivery intervals:</h4>
                        <h6>In Moscow: orders placed before 21:00 are delivered the next day. Available delivery
                            intervals: 10:00 - 18:00, 10:00 - 14:00, 14:00 - 18:00, 18:00 - 22:00. In St. Petersburg:
                            orders placed before 04:00 are delivered In the same day. Available delivery intervals:
                            10:00 - 18:00, 10:00 - 14:00, 14:00 - 18:00. Orders placed before 14:00 will be delivered
                            the same day between 18:00 and 23:00.</h6>
                        <h6>In Yekaterinburg, Chelyabinsk, Kazan, Nizhny Novgorod, Volgograd, Novosibirsk,
                            Rostov-on-Don, Samara, Saratov and Khabarovsk: orders placed before 18:00 are delivered on
                            the same day. Available delivery intervals: 10:00 - 13:00, 13:00 - 16:00, 16:00 - 19:00,
                            19:00 - 23:00.</h6>
                        <h6>Please note that when choosing the delivery method “fast delivery from the store” in Moscow,
                            payment is available on the website when placing an order or by bank card upon receipt.</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className={"infoBlock"}>
                    <h5>2.</h5>

                    <div>
                        <div>
                            <h6>Pickup from the store. </h6>
                            <h6> Available payment methods: bank card, cash, gift cards. <br/></h6>
                            <h6><br/>How to place an order with pickup from the store:</h6>
                            <h6 className={"transparent"}>Select the desired funds on the site. Check their availability
                                in
                                the store in your city.
                                When placing an order,<br/> select the "store pickup" shipping method. As soon as the
                                order
                                is
                                collected, you will receive an SMS-<br/> message. Collect your order from the store.
                            </h6>
                        </div>
                        <div>
                            <h6 className={"accentuated"}>Draw your attention to:</h6>
                            <h6> – The shelf life of the order is 3 days from the date of collection.<br/>
                                – If the goods from the basket are not available, the operator will contact you to
                                clarify
                                the details of the order.<br/>
                                *Self-pickup is valid in all cities of presence. Please note that in Moscow self-pickup
                                is
                                valid only in the Afimall City shopping center, Metropolis shopping center, Kuntsevo
                                Plaza
                                shopping center, Salaris shopping center.</h6>
                        </div>


                    </div>
                </div>
                <div className={"infoBlock"}>
                    <div>
                        <h5>3.</h5>
                        <h5>4.</h5>
                        <h5>5.</h5>
                    </div>
                    <div>
                        <h6>Courier delivery to the selected address. Delivery is carried out by courier companies <br/>
                            Available payment methods: bank card, cash, it is not possible to use a gift card. <br/>
                            Please note that the Golden Apple courier service only accepts cashless payments.</h6>
                        <h6>Self-delivery from the points of issue of orders by courier services. The list of pickup
                            addresses is available when you select this delivery method. <br/>
                            Available payment methods: by bank card if technically possible, in cash, it is impossible
                            to use bonuses. <br/> Gift cards are not accepted for payment.</h6>
                        <h6>Pickup from post offices of the Russian Post, delivery is carried out by the Federal State
                            Unitary Enterprise Russian Post. <br/>
                            Available payment methods: by bank card if technically possible, in cash, it is impossible <br/>
                            to use bonuses. Gift cards are not accepted for payment.</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsOfServiceDelivery;