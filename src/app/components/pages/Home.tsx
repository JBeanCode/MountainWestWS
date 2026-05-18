import laptopMockup from "../../../imports/laptop-mockup.png";
import mountainBg from "../../../imports/image-13.png";

export function Home() {
  return (
    <div>
      {/* Hero section with mountain background */}
      <section
        className="relative pt-24 sm:pt-28 pb-8 h-screen flex flex-col"
        style={{
          backgroundImage: `url(${mountainBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4 pt-12 sm:pt-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-[rgb(39,89,83)] mb-4 sm:mb-6 drop-shadow-lg">
            Mountain West Web Studio
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[rgb(39,89,83)] mb-6 sm:mb-8 px-4 max-w-3xl mx-auto drop-shadow italic">
            Website and mobile app design for individuals and businesses in the mountain west.
          </p>
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 pb-8 relative z-10">
          <a
            href="/contact-us"
            className="bg-[rgb(39,89,83)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:opacity-90 transition-opacity text-center shadow-lg"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="bg-[rgb(39,89,83)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:opacity-90 transition-opacity text-center shadow-lg"
          >
            View Services
          </a>
        </div>
      </section>

      <section className="bg-white text-[rgb(39,89,83)] py-16 sm:py-18 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                Building Your Digital Success
              </h2>
              <p className="text-base sm:text-lg text-700 mb-6">
                We build modern websites, landing pages, and mobile applications that help individuals and small businesses attract customers and generate leads online. We also modernize outdated websites to keep your business competitive in today's digital landscape.
              </p>
              <a
                href="/our-work"
                className="inline-block bg-[rgb(39,89,83)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Learn More About Our Work
              </a>
            </div>
            <div className="relative">
              <img
                src={laptopMockup}
                alt="Website and mobile application design mockup showing layered development process"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-8 sm:pt-12 pb-16 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-[rgb(39,89,83)] text-base sm:text-lg leading-relaxed">
            <p>
              At Mountain West Web Studio, we help small businesses, startups, and independent professionals across the Mountain West build a strong and lasting online presence through thoughtful web design and modern digital development. Based in Boulder, we work with businesses throughout Colorado, Utah, Idaho, Wyoming, Montana, and beyond to create websites that are clean, fast, mobile-friendly, and built to grow alongside your business.
            </p>
            <p>
              We specialize in custom websites, landing pages, and digital experiences designed to help businesses connect with customers, generate leads, and stand out online. Every project is built with performance, usability, and search visibility in mind so your business can be easily discovered by people actively searching for your services.
            </p>
            <p>
              Whether you're launching a new business and need your first website or upgrading an existing brand with a more professional digital presence, Mountain West Web Studio delivers tailored web solutions designed around your goals and budget. From conversion-focused landing pages to full-scale business websites and mobile app development, we help businesses throughout the region create a reliable digital foundation that supports long-term growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pt-8 sm:pt-12 pb-16 sm:pb-24 px-4">
        <div className="max-w-7xl mx-auto text-center text-[rgb(39,89,83)]">
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-[rgb(39,89,83)] mb-6 sm:mb-8 px-4">
            Let's Chat About Your Project
          </h2>
          <a
            href="/contact-us"
            className="inline-block bg-[rgb(39,89,83)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg mb-4"
          >
            Message Mountain West Web Studio
          </a>
          <p className="text-base sm:text-lg text-600 max-w-2xl mx-auto">
            All initial project discussions are completely free—no strings attached. Let's talk through your ideas and see how we can help.
          </p>
        </div>
      </section>
    </div>
  );
}
