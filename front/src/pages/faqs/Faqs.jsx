import React from "react"
import FaqsCard from "./FaqsCard";
import Title from "../../components/Title";
import { faqsList } from "../../data";

const Faqs = () => {
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-20 mx-auto px-4 md:px-8">
            <div className="text-center">
                <Title text1={"Frequently Asked Questions (FAQs)/अक्सर पूछे जाने वाले प्रश्न"}/>
            </div>
            <div className="space-y-3 text-center mt-10">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-10 max-w-5xl mx-auto">
                {
                    faqsList.map((item, index) => (
                        <FaqsCard
                            key={index}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Faqs;