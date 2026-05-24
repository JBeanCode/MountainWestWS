import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const netlifyFormData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(
          Array.from(
            netlifyFormData.entries()
          ) as [string, string][]
        ).toString(),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <section className="py-12 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-[rgb(39,89,83)] mb-4 sm:mb-6 drop-shadow-lg">
              Contact Us
            </h1>

            <p className="text-lg sm:text-xl text-[rgb(39,89,83)] px-4 drop-shadow">
              Let's discuss your project and bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

            {/* Left Side */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg">

              <h2 className="text-2xl sm:text-3xl text-[rgb(39,89,83)] mb-4 sm:mb-6">
                Get In Touch
              </h2>

              <p className="text-[rgb(39,89,83)] mb-6 sm:mb-8 text-sm sm:text-base">
                Have a project in mind? We'd love to hear from you.
                Send us a message and we'll respond as soon as possible.
              </p>

              <div className="space-y-4 sm:space-y-6">

                <div className="flex items-start">
                  <div className="bg-[rgb(39,89,83)]/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(39,89,83)]" />
                  </div>

                  <div>
                    <h3 className="text-[rgb(39,89,83)] mb-1 text-sm sm:text-base">
                      Email
                    </h3>

                    <a
                      href="mailto:josh@mountainwestwebstudio.com"
                      className="text-[rgb(39,89,83)] hover:text-black transition-colors text-sm sm:text-base break-all"
                    >
                      josh@mountainwestwebstudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[rgb(39,89,83)]/10 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(39,89,83)]" />
                  </div>

                  <div>
                    <h3 className="text-[rgb(39,89,83)] mb-1 text-sm sm:text-base">
                      Location
                    </h3>

                    <p className="text-[rgb(39,89,83)] text-sm sm:text-base">
                      Boulder, CO - USA
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg">

              {/* Hidden Netlify form */}
              <form
                name="contact"
                data-netlify="true"
                hidden
              >
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="tel" name="phone" />
                <textarea name="message"></textarea>
              </form>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="contact"
                />

                <p className="hidden">
                  <label>
                    Don’t fill this out:
                    <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-[rgb(39,89,83)] mb-2 text-sm sm:text-base"
                  >
                    Name *
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:border-[rgb(39,89,83)] focus:outline-none text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[rgb(39,89,83)] mb-2 text-sm sm:text-base"
                  >
                    Email *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:border-[rgb(39,89,83)] focus:outline-none text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[rgb(39,89,83)] mb-2 text-sm sm:text-base"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:border-[rgb(39,89,83)] focus:outline-none text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[rgb(39,89,83)] mb-2 text-sm sm:text-base"
                  >
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:border-[rgb(39,89,83)] focus:outline-none resize-none text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[rgb(39,89,83)] text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[rgb(29,79,73)] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}