import headshotImage from "../../../imports/headshot.jpeg";

export function AboutUs() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <section className="py-12 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-[rgb(39,89,83)] mb-6 sm:mb-8 text-center drop-shadow-lg">About Us</h1>

          <div className="flex justify-center mb-8 sm:mb-12">
            <img
              src={headshotImage}
              alt="Josh B - Founder of Mountain West Web Studio"
              className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover shadow-xl"
              style={{ imageRendering: 'auto' }}
            />
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl text-[rgb(39,89,83)] mb-3 sm:mb-4">Our Mission</h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              To empower businesses with modern, scalable, and user-friendly digital solutions
              that drive growth and enhance their online presence.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              We believe in building genuine partnerships with our clients. Throughout every project, we take a personalized approach—checking in regularly, gathering feedback, and ensuring your needs are met at every stage. Your success is our priority, and we're committed to being a trusted partner you can rely on as your business grows.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl text-[rgb(39,89,83)] mb-3 sm:mb-4">Why Choose Us</h2>
            <ul className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg">
              <li>• Custom solutions tailored to your specific needs</li>
              <li>• Modern technologies and best practices</li>
              <li>• Responsive and mobile-first design</li>
              <li>• Ongoing support and maintenance</li>
              <li>• Transparent communication throughout the project</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
