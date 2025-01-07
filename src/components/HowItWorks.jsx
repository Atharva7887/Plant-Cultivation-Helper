const steps = [
  {
    step: "Step 1",
    title: "Enter Plant Details",
    description: "Enter the name of your plant or upload a photo.",
    image: "https://play-lh.googleusercontent.com/Pb5XueakHaUHtBWvvgngRpRSSPWVkJRL66DaTpW4oBf0HuWWW4xZaRSdjAIcTo3IBjE=w2560-h1440-rw" // Plant identification/naming image
  },
  {
    step: "Step 2",
    title: "Measure Height",
    description: "Provide the height of your plant in centimeters.",
    image: "https://www.royalqueenseeds.com/img/cms/How-tall-weed-plants-grow-phone-EN.jpg" // Measuring plant image
  },
  {
    step: "Step 3",
    title: "Get Care Instructions",
    description: "Receive instant identification and care tips tailored to your plant.",
    image: "https://play-lh.googleusercontent.com/h_d4X7zoshzzOIyg6LW-Hkb12lzvPBnhA9ckSOE-HIGKVjgkexEMGOgMRCIbFZdhpVs=w2560-h1440-rw" // Plant care instructions image
  }
];

export default function HowItWorks() {
  return (
    <section className="py-40 px-4 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-playfair font-black text-emerald-900 mb-4">How It Works</h2>
          <p className="text-[22px] text-emerald-700 font-lato">
            Follow these simple steps to identify and care for your plants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <img 
                src={step.image}
                alt={step.title}
                className="w-full h-56 object-cover rounded-[32px] mb-4"
              />
              <div className="text-center">
                <span className="text-lime-600 text-xs font-lato">{step.step}</span>
                <h3 className="text-[22px] text-emerald-900 font-lato mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-emerald-700 font-lato">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}