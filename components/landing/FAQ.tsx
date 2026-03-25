"use client";

import { useState } from "react";

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "1. What is Coship?",
    answer: "Coship is a logistics as a service platform that provides the infrastructure for delivery companies to manage orders, automate pricing, and handle payments without building software from scratch."
  },
  {
    question: "2. How are delivery fees calculated for my customers?",
    answer: (
      <>
        Coship offers a flexible, multi-modal pricing engine. You can configure your rates based on:<br /><br />
        Distance: Charge per kilometer/mile.<br /><br />
        Weight: Charge based on package heaviness.<br /><br />
        Size: Fixed rates for Small, Medium, or Large items.<br /><br />
        Mixed: Combine any of the above for complex pricing logic.<br /><br />
        Flat: A simple, single rate for all deliveries.
      </>
    )
  },
  {
    question: "3. What is the Coship Service Charge?",
    answer: "Our business model is simple. We charge a flat ₦100 fee per successful delivery, so you can scale without high percentage commissions."
  },
  {
    question: "4. How does the Coship Wallet work?",
    answer: "Each company is provided with a digital wallet. You top up this wallet to cover our ₦100 service charges. Every time you create or complete an order, the fee is automatically deducted. This keeps your account active and ensures uninterrupted service for your customers."
  },
  {
    question: "5. Can I offer insurance to my customers?",
    answer: "You're in control of insurance settings. Enable or disable it anytime, and if enabled, the platform automatically calculates fees based on your set percentage."
  },
  {
    question: "6. How do my customers pay me?",
    answer: "As a PaaS provider, Coship handles the logistics logic, but you are in charge of your own revenue. You decide how your customers pay you (Cash on Delivery, direct bank transfer to your business, or third-party integrations). Our focus is solely on deducting our service charge from your tenant wallet."
  },
  {
    question: "7. Does Coship provide the riders/couriers?",
    answer: "No. Coship provides the software to manage your fleet. You bring your riders and vehicles, and we give you the tools to assign tasks, track movement, and manage performance."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[746px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#404040] text-center mb-[38px] tracking-[1px]">
          Questions? We <br /> have answers
        </h2>

        <div className="border-t border-gray-100">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#E9E9E9] transition-all"
            >
              <button
                className="w-full flex items-center justify-between py-8 text-left group"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className={`text-sm md:text-base font-semibold text-[#37394A] transition-colors ${openIndex === index ? 'text-black' : 'text-[#333333]'}`}>
                  {faq.question}
                </span>
                <span className="text-3xl font-light text-[#4A5565] ml-4 shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] pb-8" : "max-h-0"
                }`}
              >
                <div className="text-sm text-[#37394A] leading-[24px]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
