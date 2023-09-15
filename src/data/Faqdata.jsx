import Faq from "@/app/Component/Faq";

const Faqdata = () => {
    const faqData = [
        {
            question: 'Do You Rent To International Visitors?',
            answer:
                'Viverra accumsan in nisl scelerisque nisi. At risus viverra adipiscing at in tellus. Integer neq u aliquam vestibulum en morbi blandit cursi us risus ultrices ataugue ut lectus arcu sed done.',
        },
        {
            question: 'Do You Have Insurance?',
            answer:
                'Viverra accumsan in nisl scelerisque nisi. At risus viverra adipiscing at in tellus. Integer neq u aliquam vestibulum en morbi blandit cursi us risus ultrices ataugue ut lectus arcu sed done.',
        },
        {
            question: 'do you cmuch harge How for ghost mannequin services?',
            answer:
                'Our packages are catered to your needs and we offer the most affordable deals in photo editing. To know about our ghost mannequin charges, check out our pricing page. ',
        },
        {
            question: 'How much do you charge for ghost mannequin services?',
            answer:
                'Our packages are catered to your needs and we offer the most affordable deals in photo editing. To know about our ghost mannequin charges, check out our pricing page.',
        },
        {
            question: 'If I Rent A Vehicle Can I Choose The Chauffeur?',
            answer: 'Yes, you can avail of a free ghost mannequin product editing service as a free trial.',
        },
        {
            question: ' How Old Do You Have To Be To Rent A Car? ',
            answer: 'We’re ready to make as many edits as you need to ensure you’re satisfied with the work. ',
        },
    ];

    return (
           <>
            <div className='border-b-2 py-10'>
                <h3 className='text-4xl font-bold pb-2'>Frequently Asked Questions </h3>
                <p className='text-xl font-semibold'>List of answers</p>
            </div>

                <div className="">
                    {faqData.map((item, index) => (
                        <Faq 
                        key={index}
                       {...item}
                        />
                    ))}
                </div>
            </>
        
    );
};

export default Faqdata;