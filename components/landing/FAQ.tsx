"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the pricing work?",
    answer:
      "Our pricing is based on a monthly subscription. You can choose between our Simple and Pro plans depending on your business needs. There are no hidden fees or setup costs.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, the change will take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a 14-day free trial on all plans. No credit card required. You can explore all features and decide which plan works best for your courier business.",
  },
  {
    question: "How do I add drivers to my account?",
    answer:
      "Adding drivers is simple. From your dashboard, go to Team Management and click 'Add Driver'. You can send them an invite link or add them manually. Drivers will receive the mobile app to manage deliveries.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Absolutely! Simple plan users get email support with 24-hour response time. Pro plan users get priority support with live chat and phone support during business hours.",
  },
  {
    question: "Can I integrate Coship with other tools?",
    answer:
      "Yes, our Pro plan includes API access which allows you to integrate Coship with your existing tools, payment processors, and e-commerce platforms. We also offer pre-built integrations with Paystack and Flutterwave.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-sm font-semibold text-brand uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Questions? We have answers
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to know about Coship. Can&apos;t find what you&apos;re looking for? 
              Contact our support team.
            </p>
            <div className="mt-8">
              <a
                href="mailto:support@coship.com"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-brand border border-brand rounded-full hover:bg-brand-50 transition-colors"
              >
                Contact support
              </a>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-gray-300"
              >
                <button
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-base font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-5 lg:pb-6" : "max-h-0"
                  }`}
                >
                  <p className="px-5 lg:px-6 text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
