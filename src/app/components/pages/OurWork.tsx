import { ExternalLink } from "lucide-react";
import guildUpImage from "../../../imports/image-17.png";

export function OurWork() {
  // Placeholder projects - you can add real project data here
  const projects = [
    {
      title: "GuildUp",
      description: "A website built to connect gamers on a more personal level",
      image: guildUpImage,
      link: "/projects/guildup",
      tags: ["Website"],
    },
    {
      title: "Project Name 2",
      description: "A brief description of the project and what was accomplished.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
      link: "#",
      tags: ["Mobile App", "Design"],
    },
    {
      title: "Project Name 3",
      description: "A brief description of the project and what was accomplished.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      link: "#",
      tags: ["Landing Page", "Marketing"],
    },
    {
      title: "Project Name 4",
      description: "A brief description of the project and what was accomplished.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      link: "#",
      tags: ["Website", "Blog"],
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-white">
      <section className="py-12 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-[rgb(39,89,83)] mb-4 sm:mb-6">
              Our Work
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              Take a look at some of the projects we've built for businesses across the Mountain West region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-[rgb(39,89,83)] mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[rgb(39,89,83)]/10 text-[rgb(39,89,83)] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-[rgb(39,89,83)] hover:opacity-70 transition-opacity"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Want to see your project here? Let's work together!
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-[rgb(39,89,83)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
