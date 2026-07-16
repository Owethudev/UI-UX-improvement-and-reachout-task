import React from "react";

import PageContainer from "../layout/PageContainer";

// Import the hero image from this location:
// src/assets/images/hero/hero-banner.webp
import heroImage from "../../assets/images/hero/hero-banner.webp";

export default function Hero() {

    return (

        <section className="py-16">

            <PageContainer>

                <div className="grid lg:grid-cols-2 items-center gap-16">

                    <div>

                        <p className="uppercase tracking-[4px] text-yellow-600 font-semibold">

                            Premium Electronics

                        </p>

                        <h1 className="text-5xl lg:text-7xl font-black mt-5 leading-tight">

                            Shop Smarter.

                            <br />

                            Live Better.

                        </h1>

                        <p className="mt-8 text-gray-600 text-lg">

                            Discover TVs, smartphones, laptops, gaming consoles,
                            kitchen appliances and more with a premium shopping experience.

                        </p>

                        <button className="mt-10 bg-black hover:bg-yellow-600 transition text-white px-8 py-4 rounded-xl">

                            Shop Now

                        </button>

                    </div>

                    <img

                        src={heroImage}

                        alt="Electronics"

                        className="rounded-3xl shadow-2xl"

                    />

                </div>

            </PageContainer>

        </section>

    )

}