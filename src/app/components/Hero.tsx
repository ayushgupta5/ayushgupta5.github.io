import { ArrowRight, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Senior Software Engineer
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl tracking-tight text-gray-900">
                Ayush Kumar Gupta
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Backend engineer with <span className="text-blue-600 font-semibold">5 years</span> building distributed systems and microservices at scale. 
                Specialized in high-reliability fintech infrastructure serving <span className="text-blue-600 font-semibold">millions of users</span>.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-1 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="text-3xl text-blue-600 font-bold">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="space-y-1 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="text-3xl text-blue-600 font-bold">1M+</div>
                <div className="text-sm text-gray-600">Daily Events</div>
              </div>
              <div className="space-y-1 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="text-3xl text-blue-600 font-bold">99.5%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/ayush-kr-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border border-gray-200"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href="mailto:ayushgupta.ac@gmail.com"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">ayushgupta.ac@gmail.com</span>
              </a>
              <div className="inline-flex items-center gap-2 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              
              {/* Image Container */}
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                {/* 
                  IMPORTANT: Replace this img src with your actual photo URL
                  To use your Google Drive photo:
                  1. Make sure the photo is publicly accessible
                  2. Get the direct image URL
                  3. Replace the src below
                */}
                <img
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyfGVufDF8fHx8MTc2NzY4NTk2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ayush Kumar Gupta - Senior Software Engineer"
                  className="w-full h-auto rounded-xl object-cover aspect-square max-w-md"
                />
              </div>
              
              {/* Availability Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full absolute top-0 animate-ping"></div>
                  </div>
                  <span className="text-sm font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-6">Core Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Golang", "Java", "Kafka", "AWS", "Kubernetes", "MySQL", "Redis", "Microservices"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
