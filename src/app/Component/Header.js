'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenu } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';

const Header = () => {
    const [header, setHeader] = useState(false)
    const [nav, setNav] = useState(false)

    const isAdminView = false;
    const isAuthView = true;

    const user = {
        role:'admin'
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setHeader(true)
            } else {
                setHeader(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])




    const navlinks = [

        {
            path: '/',
            title: 'home'
        },
        {
            path: '/about',
            title: 'About'
        },
        {
            path: '/faq',
            title: 'Faq'
        },
        {
            path: '/regestar',
            title: 'Regester'
        },

    ]
    const navAdminlinks = [

        {
            path: '/addnewproducts',
            title: 'Add New Products'
        },
        {
            path: '/manageproducts',
            title: 'Manage products'
        },
       

    ]



    return (
        <div className={`${header ? "shadow-lg  bg-white text-black " : "bg-transparent shadow-none text-white  "} fixed w-full z-30 py-6  transition-all duration-200  `}>

            <div className="lg:myContainer lg:bg-transparent  w-full flex-col lg:flex-row  flex justify-between lg:items-center  ">


                <div className="flex px-5  justify-between items-center">
                    <Link href="/" className="lg:text-3xl text-xl text-[#ff6900] lg:font-bold font-semibold">
                        Cur Rental
                    </Link>
                    <div onClick={() => setNav(!nav)}
                        className="cursor-pointer lg:hidden md:block text-2xl">
                        {
                            nav ? <span><RxCross1></RxCross1></span> : <span><BiMenu></BiMenu></span>

                        }
                    </div>
                </div>

                <nav className={`${nav ? 'max-h-max   ' : 'max-h-0 xl:max-h-max shadow-none'} flex lg:flex-row flex-col overflow-hidden xl:gap-x-4 lg:text-xl text-lg gap-y-6 text-[#ff6900] transition-all duration-200 text-center`}>
                  {
                    isAuthView ?   
                        navlinks.map(({ path, title }, index) => (
                            <li className="list-none"
                                key={index}>
                                <Link href={path} className="cursor-pointer">
                                    {title}
                                </Link>
                            </li>
                        ))
                    :null
                        }

                    {
                        isAdminView? navAdminlinks.map(({ path, title }, index) => (
                            <li className="list-none"
                                key={index}>
                                <Link href={path} className="cursor-pointer">
                                    {title}
                                </Link>
                            </li>
                        )) :null
                    }
                </nav>

                <div className={`${nav ? 'max-h-max   ' : 'max-h-0 xl:max-h-max shadow-none'} flex lg:flex-row flex-col overflow-hidden xl:gap-x-4 lg:text-xl text-lg gap-y-6 transition-all duration-200 text-center`}>

                    {
                        !isAdminView && isAuthView ? <>
                            <button className="py-2 px-3 bg-[#ff6900] lg:mx-2 mx-0 lg:my-0 my-3 text-white">Account</button>
                            <button className="py-2 px-3 bg-[#ff6900]  text-white">Order</button>
                        </> : <>{null}</>
                    }

                    {
                        user.role == "admin" ? 
                        isAdminView ?  <button className="py-2 px-3 bg-[#ff6900] lg:mx-2 mx-0 lg:my-0 my-3 text-white">Client View</button>: <button className="py-2 px-3 bg-[#ff6900] lg:mx-2 mx-0 lg:my-0 my-3 text-white">Admin View</button>
                        :<>{null}</>
                    }

                    {
                        isAuthView ? <><button className="py-2 px-3 bg-[#ff6900] lg:mx-2 mx-0 lg:my-0 my-3 text-white">Logout</button></>:<><button className="py-2 px-3 bg-[#ff6900] lg:mx-2 mx-0 lg:my-0 my-3 text-white">Login</button></>
                    }


                </div>


            </div>

        </div>

    );
};

export default Header;
