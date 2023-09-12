import Image from "next/image";
import { AiFillCar, AiOutlineCar } from 'react-icons/ai';
import { BsCarFrontFill, BsCarFront } from 'react-icons/bs';

const Bannar = () => {
    return (
        <div className="min-h-[80vh] relative flex justify-center items-center">
            <Image
                src="/bg-1920-new.jpg"
                layout="fill"
                objectFit="cover"
                alt="Picture of the banner"
            />

            <div className="absolute w-full text-white text-center lg:px-0 px-5">
                <div>
                    <h2 className="text-4xl md:text-7xl font-extrabold mb-4">Find Your <span className="text-[#ff6900]">Perfect</span> Car</h2>

                    <div className="flex lg:flex-row   md:flex-wrap gap-7 justify-center">
                        <div className="flex flex-col items-center">
                            <p className="text-3xl p-3 border-2 rounded-full hover:border-[#ff6900] transition duration-300">
                                <AiFillCar />
                            </p>
                            <p className="mt-2">HatchBack</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-3xl p-3 border-2 rounded-full hover:border-[#ff6900] transition duration-300">
                                <BsCarFrontFill />
                            </p>
                            <p className="mt-2">HatchBack</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-3xl p-3 border-2 rounded-full hover:border-[#ff6900] transition duration-300">
                                <AiOutlineCar />
                            </p>
                            <p className="mt-2">BMW</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-3xl p-3 border-2 rounded-full hover:border-[#ff6900] transition duration-300">
                                <BsCarFront />
                            </p>
                            <p className="mt-2">Convertible</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-3xl p-3 border-2 rounded-full hover:border-[#ff6900] transition duration-300">
                                <BsCarFront />
                            </p>
                            <p className="mt-2">Coupe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;
