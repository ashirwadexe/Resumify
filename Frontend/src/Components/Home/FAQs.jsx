import React from 'react'

const FAQs = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "What is Resumify?",
            answer:
            "Resumify is an AI-powered resume builder that helps you create, edit, and optimize professional resumes quickly and easily.",
        },
        {
            question: "Is Resumify free to use?",
            answer:
            "Yes, Resumify offers a free plan with basic features. Advanced AI tools and premium templates may require an upgrade.",
        },
        {
            question: "Can I edit my resume after creating it?",
            answer:
            "Absolutely. You can edit, update, or delete your resume anytime from your dashboard.",
        },
        {
            question: "Does Resumify use AI to improve resumes?",
            answer:
            "Yes, Resumify uses AI to suggest better wording, improve clarity, and make your resume more ATS-friendly.",
        },
        {
            question: "Can I share my resume with recruiters?",
            answer:
            "Yes, you can generate a live shareable link and send it directly to recruiters or employers.",
        },
        {
            question: "Is my data secure on Resumify?",
            answer:
            "Yes, we use secure authentication and industry-standard practices to keep your data safe and private.",
        },
    ];


    return (
        <div className='flex flex-col items-center my-10 scroll-mt-12 pb-20'>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
                <img
                    className="max-w-sm w-full rounded-xl h-115"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                    alt=""
                />
                <div>
                    <p className="text-green-600 text-sm font-medium">FAQ's</p>
                    <h1 className="text-3xl text-slate-700 font-semibold">Looking for answer?</h1>
                    <p className="text-sm text-slate-500 mt-2 pb-4">
                        Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components.
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-200 py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base text-slate-700 font-medium">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQs