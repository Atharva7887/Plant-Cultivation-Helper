export default function Mission() {
  return (
    <section className="py-20 px-4 md:px-8 bg-emerald-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3"
          alt="Our Mission"
          className="w-full md:w-1/2 h-[300px] md:h-[500px] object-cover rounded-[48px]"
        />
        
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-playfair font-black text-lime-600">Our Mission</h2>
          <p className="text-2xl md:text-4xl font-playfair font-black text-emerald-100">
            To empower plant lovers with the knowledge and tools to care for their green companions.
          </p>
        </div>
      </div>
    </section>
  );
}