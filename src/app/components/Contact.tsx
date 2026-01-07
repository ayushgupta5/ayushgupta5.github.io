import { Mail, MapPin, ExternalLink, Check } from "lucide-react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { memo } from "react";

// Memoized check icon for list items
const CheckIcon = memo(() => (
  <div className="w-6 h-6 bg-blue-400 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
    <Check className="w-4 h-4" />
  </div>
));

CheckIcon.displayName = 'CheckIcon';

// Code icon component for coding profiles
function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/ayush_gupta4/", color: "text-orange-600" },
  { name: "GeeksForGeeks", url: "https://www.geeksforgeeks.org/profile/ayush_gupta4", color: "text-green-600" },
  { name: "CodeChef", url: "https://www.codechef.com/users/ayush_gupta4", color: "text-purple-600" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/ayush_gupta4", color: "text-blue-600" },
];

const lookingFor = [
  "Challenging technical problems involving distributed systems, high-scale backend work, or platform infrastructure",
  "Opportunities to mentor other engineers and help shape technical decisions at team or org level",
  "Teams that value production excellence, code quality, and pragmatic engineering decisions",
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl text-gray-900 mb-4 font-bold">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Interested in roles involving distributed systems, high-scale backend work, or platform infrastructure
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {/* Email */}
            <a
              href="mailto:ayushgupta.ac@gmail.com"
              className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 hover:bg-gray-100 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Send email to ayushgupta.ac@gmail.com"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-1 font-medium">
                  Email
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  ayushgupta.ac@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ayush-kr-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 hover:bg-gray-100 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg text-gray-900 mb-1 flex items-center gap-2 font-medium">
                  LinkedIn
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  linkedin.com/in/ayush-kr-gupta
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 md:col-span-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg text-gray-900 mb-1 font-medium">
                  Location
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Bengaluru, India • Open to remote opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Coding Profiles */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl text-gray-900 mb-6 text-center font-semibold">
              Coding Profiles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4" role="list" aria-label="Coding platform profiles">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={`View ${profile.name} profile (opens in new tab)`}
                >
                  <CodeIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${profile.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs sm:text-sm text-gray-900 font-medium">{profile.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="mt-10 sm:mt-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-center font-semibold">
              What I'm Looking For
            </h3>
            <ul className="space-y-3 sm:space-y-4 max-w-2xl mx-auto" role="list">
              {lookingFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-blue-50 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="mt-10 sm:mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl text-gray-900 mb-4 font-semibold">
              Education
            </h3>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg text-gray-900 mb-1 font-medium">
                  Bachelor of Technology in Computer Science & Engineering
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-1">
                  Jaypee University of Information Technology
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  2016 – 2020 • CGPA: 8.2/10.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
