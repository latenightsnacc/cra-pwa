import React from 'react'

export default function LoadingImage() {
    return (
        <div className="w-full md:w-1/3 md:mx-3 mb-5">
            <div className=" flex items-center mx-auto">
                <div className="group relative w-80">
                    <div className="w-64 h-96 bg-gray-300 mr-5"></div>
                    {/* <!--Feature Tag--> */}
                    <div className="absolute top-0 bottom-0">
                        
                    </div>
                    {/* <!--Add to cart Button--> */}
                    <div className="absolute bottom-0 left-0 right-0">
                        
                    </div>
                </div>
            </div>
            {/* <!--Image Category Tag--> */}
            <div className="my-1 bg-gray-300 w-20 h-4 capitalize pt-2 font-semibold"></div>
            {/* <!--Image Title--> */}
            <div className="bg-gray-300 w-32 h-8"></div>
            {/* <!--Image Price--> */}
            <div className="text-gray-600  flex flex-row items-center"> <span className="text-sm"><i className="fas fa-dollar-sign"></i></span><span className="text-xl">3.98</span></div>     
        </div>
    )
}
