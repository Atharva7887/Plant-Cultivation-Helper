import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function Contact() {
  return (
    <section className="py-16 md:py-32 px-4 bg-emerald-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="flex-1 px-4 md:px-12">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl font-playfair font-black text-emerald-900 mb-3">Contact Us</h2>
            <p className="text-lg md:text-[22px] text-emerald-900 font-lato">We're here to help!</p>
          </div>
<br></br>
          <div className="space-y-8 md:space-y-10">
            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <MdEmail className="w-6 h-6 text-emerald-900" />
              </div>
              <div>
                <h3 className="text-lg text-emerald-900 font-lato mb-2">Email</h3>
                <p className="text-sm text-emerald-700 font-lato">athshirke2002@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <MdPhone className="w-6 h-6 text-emerald-900" />
              </div>
              <div>
                <h3 className="text-lg text-emerald-900 font-lato mb-2">Phone</h3>
                <p className="text-sm text-emerald-700 font-lato">+91 7887333939</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <MdLocationOn className="w-6 h-6 text-emerald-900" />
              </div>
              <div>
                <h3 className="text-lg text-emerald-900 font-lato mb-2">Location</h3>
                <p className="text-sm text-emerald-700 font-lato">Pune City, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-emerald-900 rounded-[24px] md:rounded-[48px] p-6 md:p-12">
          <h3 className="text-2xl md:text-3xl text-emerald-100 font-lato mb-6">
            Want To Ask Something About the Plant?
          </h3>
          <form className="space-y-5">
            <div className="space-y-1">
              <label className="block text-sm text-emerald-100 font-lato">Plant Name</label>
              <input
                type="text"
                className="w-full h-11 md:h-13 px-4 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-700"
                placeholder="Enter Plant Name..."
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm text-emerald-100 font-lato">Height (cm)</label>
              <input
                type="number"
                className="w-full h-11 md:h-13 px-4 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-700"
                placeholder="Enter Height..."
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm text-emerald-100 font-lato">Additional Notes</label>
              <textarea
                className="w-full h-20 md:h-28 p-4 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-700"
                placeholder="Any special notes..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3.5 bg-lime-600 text-emerald-50 rounded-lg font-lato"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
