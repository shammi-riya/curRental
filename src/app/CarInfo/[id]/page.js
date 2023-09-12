import productsdata from '@/app/products';
import Image from 'next/image';
import React from 'react';

const CarInfo = ({ params }) => {

    const car = productsdata.find((product => product.id == params.id))


    return (
        <div className='max-w-7xl mx-auto  py-40'>
            <div className='lg:flex flex-wrap gap-7 border-2 p-5 items-center'>

                <Image
                    src={car.image}
                    alt={car.carname}
                    width={600}
                    height={800}
                />

                <div className='space-y-3 text-xl '>
                    <h1 className='text-5xl font-bold'>{car.carname}</h1>
                    <p>Hour: ${car.hour}</p>
                    <p>Model: {car.model}</p>
                    <p>drive_type: {car.drive_type}</p>
                    <p>transmission: {car.transmission}</p>
                    <p>condition: {car.condition}</p>
                    <p>year: {car.year}</p>
                    <p>mileage: {car.mileage}</p>
                    <p>fuel_type: {car.fuel_type}</p>
                    <p>engine_size: {car.engine_size}</p>
                    <p>doors: {car.doors}</p>
                    <p>color: {car.color}</p>

                    <p>description: {car.description}</p>


                    <button className='py-3 px-5 text-xl border-2'>Book Now</button>

                </div>

            </div>

            <div className='lg:px-0 px-5'>
                <h3 className='text-3xl font-bold py-4'><span className='border-b-2'>Rolls</span> Royce Overview </h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo laborum consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla est pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.

                    Sagittis molestie magnis etiam nullam tincidunt hendrerit enim ultricies phasellus, laoreet nascetur ornare torquent ultrices sapien sodales volutpat duis, accumsan ridiculus magna dictum cras gravida leo mus ex.  Aenean dictum commodo iaculis fusce arcu, potenti aliquet venenatis leo nulla cras, velit pharetra quam. Nostra augue ac tempus odio laoreet taciti parturient gravida rutrum sociis habitant mollis tempor, quis aque nibh nam himenaeos massa turpis nisi mus cursus semper vehicula ridiculus.
                </p>
            </div>

            <div>
                <h3 className='text-3xl font-bold py-7'>Add A Comment</h3>
                <form class="max-w-5xl ">
                    <div className='flex gap-5  items-center w-full'>
                        <div class=" border-b border-[#ff6900] py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />

                        </div>
                        <div class=" border-b border-[#ff6900] py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Janedoe@gmail.com" aria-label="Full name" />

                        </div>
                    </div>
                    <div class=" border-b border-[#ff6900] py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Description" aria-label="Full name" />
                    </div>

                    <button className='py-3 px-5 text-xl border-2'>Add Commant</button>
                </form>
            </div>
        </div>
    );
};

export default CarInfo;