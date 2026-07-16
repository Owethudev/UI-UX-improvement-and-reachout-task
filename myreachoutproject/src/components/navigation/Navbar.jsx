import React from "react";

import PageContainer from "../layout/PageContainer";

export default function Navbar() {

    return (

        <nav className="border-b bg-white shadow-sm">

            <PageContainer>

                <div className="h-20 flex items-center justify-between">

                    <h1 className="text-3xl font-black tracking-wide">

                        <span className="text-black">

                            Mega

                        </span>

                        <span className="text-yellow-600">

                            Mall

                        </span>

                    </h1>

                    <div className="hidden lg:flex gap-8 font-medium">

                        <a href="/" className="hover:text-yellow-600">

                            Home

                        </a>

                        <a href="/" className="hover:text-yellow-600">

                            Products

                        </a>

                        <a href="/" className="hover:text-yellow-600">

                            Categories

                        </a>

                        <a href="/" className="hover:text-yellow-600">

                            Deals

                        </a>

                    </div>

                    <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-yellow-600 transition">

                        Sign In

                    </button>

                </div>

            </PageContainer>

        </nav>

    )

}