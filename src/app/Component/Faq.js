'use client'
import { useRef, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Faq = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        
            <div className="bg-white my-10 shadow-lg  rounded-lg p-2">
                <h2
                    onClick={toggleAccordion}
                    className={` flex flex-row text-gray-600 text-xl lg:text-2xl hover:text-[#ff8a00] py-4 justify-between items-center font-semibold p-3 cursor-pointer ${isOpen ? "text-[#ff8a00]" : ""}`}
                >
                    {question}
                    <div className={`transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                        {isOpen ? (
                            <FaMinus className="fill-current text-[#ff8a00]  h-6 w-6" />
                        ) : (
                            <FaPlus className="fill-current text-gray-600  h-6 w-6" />
                        )}
                    </div>
                </h2>
                <div
                    className={`overflow-hidden duration-500 text-xl p-2 transition-all`}
                    style={{
                        maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : 0,
                        paddingTop: isOpen ? '1rem' : 0,
                        paddingBottom: isOpen ? '1rem' : 0,
                    }}
                    ref={contentRef}
                >
                    <p className="p-3 text-gray-900">{answer}</p>
                </div>
            </div>

    );
};

export default Faq;
