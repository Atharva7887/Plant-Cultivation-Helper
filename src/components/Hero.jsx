import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-emerald-900 py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 flex flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-[72px] text-emerald-100 font-playfair font-black leading-tight md:leading-[78px]">
              Cultivate Your Greenery
            </h1>
            <p className="text-lg md:text-[22px] text-gray-200 font-lato leading-normal md:leading-[31px]">
              Your guide to nurturing plants at home.
            </p>
          </div>
          <button 
            onClick={() => navigate('/plant-form')}
            className="w-full md:w-fit px-6 py-4 bg-lime-600 rounded-lg text-emerald-50 text-lg font-lato hover:bg-lime-700 transition-colors"
          >
            Start Growing Now
          </button>
        </div>
        <div className="flex-1 h-[400px] md:h-[704px] w-full rounded-[32px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3"
            alt="Plants"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}