import React from "react";

import PageContainer from "./PageContainer";

export default function Footer() {

    return (

        <footer className="bg-black text-white mt-24">

            <PageContainer>

                <div className="py-14 grid md:grid-cols-4 gap-10">

                    <div>

                        <h2 className="font-bold text-yellow-500 mb-4">

                            MegaMall

                        </h2>

                        <p className="text-gray-300">

                            Modern electronics shopping made simple.

                        </p>

                    </div>

                    <div>

                        <h3 className="font-semibold mb-3">

                            Customer Support

                        </h3>

                        <p>FAQs</p>

                        <p>Returns</p>

                        <p>Shipping</p>

                    </div>

                    <div>

                        <h3 className="font-semibold mb-3">

                            Company

                        </h3>

                        <p>About</p>

                        <p>Careers</p>

                        <p>Contact</p>

                    </div>

                    <div>

                        <h3 className="font-semibold mb-3">

                            Newsletter

                        </h3>

                        <input

                            placeholder="Email address"

                            className="w-full rounded-lg p-3 text-black"

                        />

                    </div>

                </div>

            </PageContainer>

        </footer>

    )

}