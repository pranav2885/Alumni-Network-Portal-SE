import { useState } from "react";

const faqs = [
  {
    question: "How do I register?",
    answer: "You can register by visiting the event page and clicking on the 'Register Now' button. Fill in your details, and you'll receive a confirmation email.",
  },
  {
    question: "Are these events free?",
    answer: "Most of our events are free for alumni. However, some premium events may have a registration fee. Check the event details for more information.",
  },
  {
    question: "Can I bring a guest?",
    answer: "Yes! Many events allow guests. Please check the event page for guest policies and RSVP accordingly.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">❓ FAQs</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <button 
              className="w-full text-left text-lg font-medium flex justify-between items-center" 
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "➖" : "➕"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
