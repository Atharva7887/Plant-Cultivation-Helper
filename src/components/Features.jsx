import { FaWater, FaRuler, FaSeedling, FaBell, FaBox, FaLeaf } from 'react-icons/fa';

const features = [
  {
    title: "Personalized Watering Guide",
    description: "Receive daily watering recommendations tailored to your plant's needs and height.",
    icon: FaWater
  },
  {
    title: "Soil Quantity Calculator",
    description: "Calculate the right amount of soil needed for your plants based on their size.",
    icon: FaRuler
  },
  {
    title: "Nutrient Recommendations",
    description: "Find out how much vermi compost to use for optimal growth based on your plant type.",
    icon: FaSeedling
  },
  {
    title: "Daily Care Reminders",
    description: "Stay on top of your plant care routine with timely reminders and tips.",
    icon: FaBell
  },
  {
    title: "Pot Size Suggestions",
    description: "Get advice on the ideal pot size for your plants to thrive comfortably.",
    icon: FaBox
  },
  {
    title: "Expert Plant Insights",
    description: "Access a wealth of knowledge about various plant species and their care requirements.",
    icon: FaLeaf
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-lime-600 text-base md:text-lg font-lato">Key Features</span>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mt-2 mb-4">Plant Care Made Easy</h2>
          <p className="text-emerald-700 text-base md:text-lg font-lato px-4">
            Get tailored advice for your plants based on their type and size. Simplifying plant care for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-4 px-4">
              <div className="p-3">
                <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-emerald-700" />
              </div>
              <div className="text-center">
                <h3 className="text-lg text-emerald-900 font-lato mb-2">{feature.title}</h3>
                <p className="text-sm text-emerald-700 font-lato">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}