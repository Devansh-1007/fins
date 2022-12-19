import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div> <img
            className="absolute top-[121px] left-[758px] w-[900px] h-[900px] hidden"
            alt=""
            src="../ellipse-2.svg"
        />
            <img
                className="absolute top-[0px] left-[4px] w-[1508px] h-[830px] object-cover hidden"
                alt=""
                src="../screenshot-20220812-at-1049-1@2x.png"
            />
            <div className="absolute top-[18px] left-[-12px] w-[1508px] h-[54.22px] text-4xl">
                <div className="absolute h-[94.21%] w-[10.62%] top-[-6.25%] right-[85.01%] bottom-[12.04%] left-[4.38%] text-9xl text-indigo-100">
                    <img
                        className="absolute h-[94.13%] w-[44.09%] top-[5.87%] right-[55.91%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="../screenshot-20220812-at-518-1@2x.png"
                    />
                    <b className="absolute h-[78.11%] w-[58.78%] top-[0%] left-[41.22%] inline-block">
                        Fins
                    </b>
                </div>
                <Link to="/">
                    <div className="absolute w-[7.53%] top-[24.53%] left-[23.68%] font-medium inline-block">
                        Home
                    </div>
                </Link>
                <Link to="/discover">

                    <div className="absolute w-[11.19%] top-[24.53%] left-[36.7%] font-medium inline-block">
                        Discover
                    </div>
                </Link>


                <div className="absolute w-[7.26%] top-[24.53%] left-[53.39%] font-medium inline-block">
                    Learn
                </div>
                <div className="absolute w-[11.94%] top-[24.53%] left-[66.15%] font-medium inline-block">
                    About Us
                </div>
                <div className="absolute w-[15.47%] top-[5.53%] left-[84.53%] font-medium text-white inline-block">
                    <button class="px-4 py-2 rounded-l-xl text-white m-0 bg-indigo-100 hover:bg-red-600 transition">Login</button>
                    <button class="px-4 py-2 rounded-r-xl bg-neutral-50 hover:bg-neutral-100 transition">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Header