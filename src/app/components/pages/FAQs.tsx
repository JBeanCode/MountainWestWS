import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "The timeline varies depending on the project scope and complexity. A simple website can take 2-4 weeks, while more complex web applications may take 2-3 months or longer. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is the cost of a website or mobile app?",
      answer: "Pricing depends on your specific requirements, features, and complexity. We offer custom quotes based on your needs. Contact us for a free consultation and quote tailored to your project.",
    },
    {
      question: "Do you offer website maintenance and support?",
      answer: "Yes! We provide ongoing maintenance and support packages to keep your website or application running smoothly, secure, and up-to-date.",
    },
    {
      question: "Can my website grow as my business expands?",
      answer: "Absolutely! We build scalable solutions designed to grow with your business. Whether you need to add new features, handle more traffic, or expand functionality, we can help.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, all our websites are responsive and mobile-first, ensuring they look great and function perfectly on all devices - smartphones, tablets, and desktops.",
    },
    {
      question: "What do I need to provide to get started?",
      answer: "We'll need information about your business, goals, target audience, and any specific features you want. If you have brand assets (logo, colors, images), those are helpful too. We'll guide you through everything during our initial consultation.",
    },
    {
      question: "Do you provide hosting services?",
      answer: "We can recommend reliable hosting providers and help you set up hosting, or assist with deployment to your existing hosting infrastructure.",
    },
    {
      question: "How long after launch can I expect support?",
      answer: "We provide initial support immediately after launch to ensure everything runs smoothly. We also offer ongoing maintenance plans for long-term support and updates.",
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <section className="py-12 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-[rgb(39,89,83)] mb-6 sm:mb-8 text-center drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-[rgb(39,89,83)] text-center mb-8 sm:mb-12 px-4 drop-shadow">
            Find answers to common questions about our services
          </p>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-white transition-colors"
                >
                  <span className="text-[rgb(39,89,83)] text-base sm:text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[rgb(39,89,83)] flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-gray-700 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
