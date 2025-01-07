const faqs = [
  {
    question: "What plants can I care for?",
    answer: "You can care for a wide variety of plants, from herbs to houseplants and more."
  },
  {
    question: "What is vermi compost?",
    answer: "Vermi compost is nutrient-rich compost made from worm castings, great for plants."
  },
  {
    question: "How often should I water?",
    answer: "Watering frequency depends on the plant type and its current height."
  },
  {
    question: "How do I know the pot size?",
    answer: "We provide recommendations based on your plant's height and type."
  },
  {
    question: "Can I use regular soil?",
    answer: "It's best to use soil suited for your specific plant type for optimal growth."
  },
  {
    question: "Still have a question?",
    answer: "We're here to help with any inquiries you may have."
  }
];

export default function FAQ() {
  return (
    <section className="py-32 px-8 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl font-playfair font-black text-emerald-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[22px] text-emerald-700 font-lato">
            Find answers to common questions about plant care and our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-lg text-emerald-900 font-lato">{faq.question}</h3>
              <p className="text-sm text-emerald-900 font-lato">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}