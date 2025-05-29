"use client";
import { useState } from "react";

import "./fastyles.css";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of components do you offer?",
      answer:
        "We offer a wide range of responsive and modern UI components including headers, footers, hero sections, forms, buttons, alerts, cards, modals, and more.",
    },
    {
      question: "Are your components mobile-friendly?",
      answer:
        "Yes! All components are designed to be fully responsive and work seamlessly across devices of all screen sizes.",
    },
    {
      question: "Can I use these components in commercial projects?",
      answer:
        "Absolutely. All components come with a commercial license, so you're free to use them in client projects, SaaS apps, or any commercial product.",
    },
    {
      question: "What technologies are your components built with?",
      answer:
        "Our components are built using modern technologies like Tailwind CSS and React. They are optimized for performance and easy customization.",
    },
    {
      question: "Do I need to know React to use these components?",
      answer:
        "Most components are built with React, but we also offer HTML versions of some UI elements. If you're using React or Next.js, integration is seamless.",
    },
    {
      question: "How do I customize the components to match my brand?",
      answer:
        "Each component comes with clean, well-organized code. You can easily change colors, fonts, spacing, and layout using Tailwind utility classes or your custom styles.",
    },
    {
      question: "Will I get updates or new components after purchase?",
      answer:
        "Yes! We regularly update the component library and add new UI elements. You'll receive lifetime access to all future updates.",
    },
    {
      question: "Do you provide documentation or examples?",
      answer:
        "Yes, each component includes usage examples and inline documentation to help you get started quickly.",
    },
    {
      question: "Can I request a custom component?",
      answer:
        "We welcome suggestions! While we don’t offer custom services, we often add high-demand components to our collection based on user feedback.",
    },
    {
      question: "Do you offer support if I face issues?",
      answer:
        "Yes, we offer email support and a help center to assist with integration or usage questions.",
    },
  ];

  return (
    <section className="faqs_section pt-20 pb-20 md:pt-32 md:pb-32">
      <>
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl mb-10">
          FAQ’s (Frequently Asked Questions)
        </h2>
        <div className={`faq_wrapper inner_section "fade-in" : "opacity-0"}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {/* Accordion Header */}
              <div className="accordion_head">
                <span>{faq.question}</span>
                <p className={`icon ${activeIndex === index ? "rotate" : ""}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path stroke="currentColor" d="M13.5 5.5 8 11 2.5 5.5" />
                  </svg>
                </p>
              </div>

              {/* Accordion Content */}
              <div
                className="accordion_content"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0px",
                  opacity: activeIndex === index ? 1 : 0,
                  transform:
                    activeIndex === index
                      ? "translateY(0)"
                      : "translateY(-10px)",
                }}
              >
                <p className="faq_answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    </section>
  );
}
