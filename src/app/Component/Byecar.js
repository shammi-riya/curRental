import Image from "next/image";
import { AiFillApple } from "react-icons/ai";
import { MdPhoneAndroid } from "react-icons/md";
import { RiChat3Fill } from "react-icons/ri";

const Byecar = () => {
    return (
        <div className="myContainer grid-cols-1 my-20 grid lg:grid-cols-2 gap-6 md:px-5 lg:px-0">
            <div className="bg-[#ff6900] flex justify-center rounded-2xl p-5">
                <div className="p-5">
                    <h2 className="lg:text-5xl text-2xl my-3 font-bold text-[#fff]">Download
                        our app</h2>

                    <button className="bg-[#fff] rounded-md font-semibold text-[#ff6900] inline-flex mx-2 py-2 px-4 text-xl"><AiFillApple></AiFillApple> For IOS</button><br />
                    <button className="bg-[#fff] my-3 font-semibold rounded-md text-[#ff6900] inline-flex mx-2 py-2 px-4 text-xl"><span><MdPhoneAndroid></MdPhoneAndroid></span> For Android</button>
                </div>
                <Image
                    src='/phone.png'
                    height={250}
                    width={200}
                    objectFit="cover"
                    alt="Picture of the banner"
                />
            </div>
            <div className="bg-[#000] flex justify-center rounded-2xl p-5">
                <div className="p-5">
                    <h2 className="lg:text-5xl text-2xl my-3 font-bold text-[#fff]">How to buy <br /> a car?</h2>

                    <button className=" rounded-md font-semibold border-2 border-[#ff6900] hover:bg-[#ff6900] text-white duration-200 transition-all my-5  bg-transparent mx-2 lg:py-3 py-2 lg:px-4  px-3 lg:text-xl text-lg">Read More</button><br />


                </div>
                <div className="p-5"><li className="text-[#fff] text-xl list-none inline-flex"><span className="text-[#ff6900]"><RiChat3Fill></RiChat3Fill></span> best deals</li><br />
                    <li className="text-[#fff] text-xl list-none inline-flex"><span className="text-[#ff6900]"><RiChat3Fill></RiChat3Fill></span> sell your car</li><br />
                    <li className="text-[#fff] text-xl list-none inline-flex"><span className="text-[#ff6900]"><RiChat3Fill></RiChat3Fill></span> car book values</li><br />
                    <li className="text-[#fff] text-xl list-none inline-flex"><span className="text-[#ff6900]"><RiChat3Fill></RiChat3Fill></span> car dealers</li><br />
                    <li className="text-[#fff] text-xl list-none inline-flex"><span className="text-[#ff6900]"><RiChat3Fill></RiChat3Fill></span> compare prices</li>


                </div>
            </div>
        </div>
    );
};

export default Byecar;