"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import productsdata from "../products";

const Car = () => {
    const [carData, setCarData] = useState(null);

   



    return (
        <div className=" myContainer my-20">
           <div className="my-10">
           <p className="text-[#ff6900]">Handy picked</p>
            <h1 className="text-5xl font-bold ">Popolar Makes</h1>
           </div>
            <div className=" lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5">
                {
                    productsdata.map(car => <Link key={car.id} href={`/CarInfo/${car.id}`}
                    >
                    <div 
                        className='overflow-hidden  transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>

                        
                            <div className="w-[100%] h-[100%]">
                                <Image
                                    src={car.image}
                                    height={400}
                                    width={500}
                                    objectFit="cover"
                                    alt="Picture of the banner"
                                />
                            </div>
                        

                        <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                        <h3 className="text-xl">{car?.carname}</h3>
                        <h4>{car?.model}</h4>
                            <br />
                            <p className='mt-auto'>Hour: ${car.hour}</p>
                        </div>

                        <div>

                           
                        </div>
                    </div>
</Link>
                    )
                }
            </div>
        </div>


    );
};

export default Car;