'use client'
import productsdata from '@/app/products';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const CarInfo = ({ params }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {

        const StoreComments = JSON.parse(localStorage.getItem('comments'))
        if (StoreComments) {
            setComments(StoreComments)
        }
    }, [])


    const car = params && params.id
        ? productsdata.find(product => product.id == params.id)
        : null;

    if (!car) {
        return <div>Car not found</div>;
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
        const name = e.target.fullName.value;
        const Description = e.target.Description.value;
        const email = e.target.email.value;

        console.log(name, Description, email);

        const newComments = {
            name, Description, email
        }

        setComments([...comments, newComments])
        localStorage.setItem('comments', JSON.stringify([...comments, newComments]))

        e.target.fullName.value = '';
        e.target.Description.value = '';
        e.target.email.value = '';


    }

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


            <div className='my-5'>
                <h3 className='text-2xl font-bold py-7'>Add A Comment</h3>
                <div className='border-b-2 py-4 w-full flex gap-2 '>
                    <Image
                        className='rounded-full'
                        src='https://img.freepik.com/free-photo/portrait-smiley-man-outdoor_23-2148514954.jpg?w=1380&t=st=1694773632~exp=1694774232~hmac=48b4427aefb4769bf91f54d833d1098268e37d17e90ce4606e28c4c41ddd73db'
                        height={100}
                        width={100}
                        objectFit="cover"
                        alt="Picture of the banner"
                    />
                    <div>
                        <h3 className='text-lg font-semibold'>nice</h3>
                        <p>akbor@gmail.com</p>
                    </div>
                </div>

                {
                    comments.map((comment) => (
                        <div key={comment.name} className='border-b-2 py-4 w-full flex gap-2'>
                            <Image
                                className='rounded-full'
                                src='https://img.freepik.com/free-photo/portrait-smiley-man-outdoor_23-2148514954.jpg?w=1380&t=st=1694773632~exp=1694774232~hmac=48b4427aefb4769bf91f54d833d1098268e37d17e90ce4606e28c4c41ddd73db'
                                height={100}
                                width={100}
                                objectFit="cover"
                                alt="Picture of the banner"
                            />
                            <div>
                                <h3 className='text-lg font-semibold'>{comment.Description}</h3>
                                <p>{comment.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='my-20'>

                <form onSubmit={handleSubmit}
                    class="lg:max-w-5xl w-full">
                    <div className='flex gap-5  items-center w-full'>

                        <div class=" border-b border-[#ff6900] py-2">
                            <input
                                name="fullName"
                                class="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="Jane Doe"
                                aria-label="Full name"
                            />

                        </div>
                        <div class=" border-b border-[#ff6900] py-2">
                            <input
                                name="email"
                                class="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                type="text"
                                placeholder="JaneDoe@gmail.com"
                                aria-label="email"
                            />

                        </div>
                    </div>
                    <div class=" border-b border-[#ff6900] py-2">
                        <input
                            name="Description"
                            class="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Description"
                            aria-label="Description"
                        />

                    </div>
                    <button
                        type='submit'
                        className='py-3 px-5 text-xl border-2 mt-5'>
                        Add Comment
                    </button>

                </form>

            </div>
        </div>
    );
};

export default CarInfo;