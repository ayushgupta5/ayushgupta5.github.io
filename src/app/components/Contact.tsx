import { Mail, Linkedin, MapPin, Github, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600">
              Interested in roles involving distributed systems, high-scale backend work, or platform infrastructure
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:ayushgupta.ac@gmail.com"
              className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-1">
                  Email
                </h3>
                <p className="text-gray-600">
                  ayushgupta.ac@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ayush-kr-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6 hover:bg-gray-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-gray-900 mb-1 flex items-center gap-2">
                  LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </h3>
                <p className="text-gray-600">
                  linkedin.com/in/ayush-kr-gupta
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6 md:col-span-2">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg text-gray-900 mb-1">
                  Location
                </h3>
                <p className="text-gray-600">
                  Bengaluru, India
                </p>
              </div>
            </div>
          </div>

          {/* Coding Profiles */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl text-gray-900 mb-6 text-center">
              Coding Profiles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="https://leetcode.com/u/ayush_gupta4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <Code className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-900">LeetCode</span>
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/ayush_gupta4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <Code className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-900">GeeksForGeeks</span>
              </a>
              <a
                href="https://www.codechef.com/users/ayush_gupta4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <Code className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-900">CodeChef</span>
              </a>
              <a
                href="https://www.hackerrank.com/profile/ayush_gupta4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <Code className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-900">HackerRank</span>
              </a>
            </div>
          </div>

          {/* What I'm Looking For */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8">
            <h3 className="text-2xl mb-4 text-center">
              What I'm Looking For
            </h3>
            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-400 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-50">
                  Challenging technical problems involving distributed systems, high-scale backend work, or platform infrastructure
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-400 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-50">
                  Opportunities to mentor other engineers and help shape technical decisions at team or org level
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-400 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-50">
                  Teams that value production excellence, code quality, and pragmatic engineering decisions
                </span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl text-gray-900 mb-4">
              Education
            </h3>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg text-gray-900 mb-1">
                  Bachelor of Technology in Computer Science & Engineering
                </h4>
                <p className="text-gray-600 mb-1">
                  Jaypee University of Information Technology
                </p>
                <p className="text-sm text-gray-500">
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

function Code({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}