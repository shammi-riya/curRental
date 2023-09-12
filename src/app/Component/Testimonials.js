import Image from "next/image";
import { AiFillCaretDown } from "react-icons/ai";
import { BiStar } from "react-icons/bi";


const Testimonials = () => {
    return (
      <div className="my-20 static w-full lg:px-0 px-3 overflow-hidden">
          <div className="min-h-[80vh] relative flex justify-center items-center">
            <Image
                src="/bg-6.jpg"
                layout="fill"
                objectFit="cover"
                alt="Picture of the banner"
            />

            <div className="absolute w-full myContainer">
                <div>
                    <p className="text-red-300 text-xl">Our Testimonials</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold">What They’re Talking About Remons</h2>
                </div>


                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">

                 <div>
                 <div className="relative border-[1px] border-[#D0D7DE] bg-[#D0D7DE] rounded-2xl h-72 flex justify-center items-center">
                        <div className="relative">
                            <Image
                                src="/Text-2.png"
                                className=" -top-5 left-[43%] absolute transition-transform"
                                height={60}
                                width={60}
                                objectFit="cover"
                                alt="Picture of the testimonial"
                            />

                            <Image
                                src="/bg-30.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Picture of the testimonial"
                                className=""
                            />
                        </div>
                        <div className="bottom-0 rounded-2xl top-0 left-0 right-0 absolute w-full p-5 flex justify-center items-center text-center">
                            <Image
                                src="/Text-2.png"
                                className="-top-5 left-[43%] absolute transition-transform"
                                height={60}
                                width={60}
                                objectFit="cover"
                                alt="Picture of the testimonial"
                            />
                            <div>
                                <h4 className="text-xl">I was very impressed by the Remons service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum quia.</h4>
                                <div className="text-[#ff6900] justify-center items-center flex gap-2 text-xl">
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                </div>
                            </div>
                        </div>

                        <span className="left-[43%] text-7xl text-[#D0D7DE] -bottom-12 absolute">
                            <AiFillCaretDown></AiFillCaretDown>
                        </span>
                        
                    </div>
                    <div className="flex gap-3 my-10">
                        <Image
                            src="/img-home01-GJCW74Y.jpg"
                             className="rounded-full"
                            height={60}
                            width={60}
                            objectFit="cover"
                            alt="Picture of the testimonial"
                        />

                        <div>
                            <h3 className="text-xl">Kevin Martin</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                 </div>
                    <div>
                    <div className="relative border-[1px] border-[#D0D7DE] bg-[#edeff0] rounded-2xl h-72 flex justify-center items-center">
                        <div className="relative">
                            <Image
                                src="/Text-2.png"
                                className="left-[43%] absolute transition-transform"
                                height={60}
                                width={60}
                                objectFit="cover"
                                alt="Picture of the testimonial"
                            />
                            <Image
                                src="/bg-30.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Picture of the testimonial"
                                className=""
                            />
                        </div>
                        <div className="bottom-0 rounded-2xl top-0 left-0 right-0 absolute w-full p-5 flex justify-center items-center text-center">
                            <Image
                                src="/Text-2.png"
                                className="-top-5 left-[43%] absolute transition-transform"
                                height={60}
                                width={60}
                                objectFit="cover"
                                alt="Picture of the testimonial"
                            />
                            <div>
                                <h4 className="text-xl">I was very impressed by the Remons service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum quia.</h4>
                                <div className="text-[#ff6900] justify-center items-center flex gap-2 text-xl">
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                </div>
                            </div>
                        </div>
                        <span className="left-[43%] text-7xl text-[#edeff0] -bottom-12 absolute">
                            <AiFillCaretDown></AiFillCaretDown>
                        </span>
                    </div>
                    <div className="flex gap-3 my-10">
                        <Image
                            src="/img-home01-GJCW74Y.jpg"
                             className="rounded-full"
                            height={60}
                            width={60}
                            objectFit="cover"
                            alt="Picture of the testimonial"
                        />

                        <div>
                            <h3 className="text-xl">Jessica Brown</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                    </div>
                   <div>
                   <div className="relative border-[1px] border-[#D0D7DE] bg-[#ECF0F4] rounded-2xl h-72 flex justify-center items-center">
                        <div className="relative">
                            <Image
                                src="/Text-2.png"
                                className="left-[43%] absolute transition-transform"
                                height={60}
                                width={60}
                                objectFit="cover"
                                alt="Picture of the testimonial"
                            />
                            <Image
                                src="/bg-30.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Picture of the testimonial"
                                className=""
                            />
                        </div>
                        <div className="bottom-0 rounded-2xl top-0 left-0 right-0 absolute w-full p-5 flex justify-center items-center text-center">
                            <Image
                                src="/Text-2.png"
                                className="-top-5 left-[43%] absolute transition-transform"
                                height={60}
                                width={60}
                                objectFit="cover"
                                alt="Picture of the testimonial"
                            />
                            <div>
                                <h4 className="text-xl">I was very impressed by the Remons service. Lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum quia.</h4>
                                <div className="text-[#ff6900] justify-center items-center flex gap-2 text-xl">
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                    <span><BiStar></BiStar></span>
                                </div>
                            </div>
                        </div>
                        <span className="left-[43%] text-7xl text-[#ECF0F4] -bottom-12 absolute">
                            <AiFillCaretDown></AiFillCaretDown>
                        </span>
                    </div>
                    <div className="flex gap-3 my-10">
                        <Image
                            src="/img-home01-L9VVG4B.jpg"
                             className="rounded-full"
                            height={60}
                            width={60}
                            objectFit="cover"
                            alt="Picture of the testimonial"
                        />

                        <div>
                            <h3 className="text-xl">Jessica Brown</h3>
                            <p>Customer</p>
                        </div>
                    </div>
                   </div>





                </div>


            </div>
        </div>
      </div>



    );
};



export default Testimonials;