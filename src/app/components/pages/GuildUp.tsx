import { ExternalLink } from "lucide-react";
import screenshot1 from "../../../imports/image-14.png";
import screenshot2 from "../../../imports/image-15.png";
import screenshot3 from "../../../imports/image-16.png";

export function GuildUp() {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-white">
      <section className="py-12 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Project Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-[rgb(39,89,83)] mb-4">
              GuildUp
            </h1>
            <p className="text-lg sm:text-xl text-[rgb(39,89,83)] font-semibold">
              Project Still in Progress
            </p>
          </div>

          {/* Description Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl text-[rgb(39,89,83)] mb-4">Description</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              GuildUp is a website built to connect gamers on a more personal level. GuildUp breaks down the barriers that keep players apart by intelligently connecting and recommending fellow gamers based on the games they love, the games they are currently playing, the skills they've built, the style they play, and even the time they have available throughout the week to play. Because gaming is always better together, GuildUp wants you to build your Guild and have genuine connections.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl text-[rgb(39,89,83)] mb-4">Features</h2>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-[rgb(39,89,83)] mr-2">•</span>
                <span>Unique profiles for gamers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(39,89,83)] mr-2">•</span>
                <span>Instant messaging between gamers</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(39,89,83)] mr-2">•</span>
                <span>Display calendar availability throughout the week</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(39,89,83)] mr-2">•</span>
                <span>Save favorite and currently playing games to your profile</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(39,89,83)] mr-2">•</span>
                <span>Send friend requests, block and unfriend users</span>
              </li>
              <li className="flex items-start">
                <span className="text-[rgb(39,89,83)] mr-2">•</span>
                <span>And more to come!</span>
              </li>
            </ul>
          </div>

          {/* GitHub Link */}
          <div className="mb-8 sm:mb-12">
            <a
              href="https://github.com/JBeanCode/Profile-Research-App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgb(39,89,83)] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              View Project Documentation on GitHub
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Screenshots Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl text-[rgb(39,89,83)] mb-6">Project Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100">
                <img
                  src={screenshot1}
                  alt="GuildUp Screenshot 1"
                  className="w-full h-auto"
                  onError={(e) => console.error('Error loading screenshot1:', e)}
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100">
                <img
                  src={screenshot2}
                  alt="GuildUp Screenshot 2"
                  className="w-full h-auto"
                  onError={(e) => console.error('Error loading screenshot2:', e)}
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 md:col-span-2">
                <img
                  src={screenshot3}
                  alt="GuildUp Screenshot 3"
                  className="w-full h-auto"
                  onError={(e) => console.error('Error loading screenshot3:', e)}
                />
              </div>
            </div>
          </div>

          {/* Back to Our Work */}
          <div className="text-center">
            <a
              href="/our-work"
              className="inline-block text-[rgb(39,89,83)] hover:opacity-70 transition-opacity"
            >
              ← Back to Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
