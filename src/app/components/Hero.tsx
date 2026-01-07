import { ArrowRight, Mail, Download } from "lucide-react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { memo, useState, useEffect } from "react";

// Professional photo - served from public folder
const PROFILE_PHOTO_URL = "/Ayush_Professional_Picture.jpg";

// Fallback placeholder for when image fails to load
const FALLBACK_INITIALS = "AG";

// Memoized stat card for performance
const StatCard = memo(({ value, label }: { value: string; label: string }) => (
  <div className="space-y-1 bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all">
    <div className="text-2xl sm:text-3xl text-blue-600 font-bold">{value}</div>
    <div className="text-xs sm:text-sm text-gray-600">{label}</div>
  </div>
));

StatCard.displayName = 'StatCard';

// Memoized tech badge
const TechBadge = memo(({ tech }: { tech: string }) => (
  <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all cursor-default">
    {tech}
  </span>
));

TechBadge.displayName = 'TechBadge';

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "1M+", label: "Daily Events" },
    { value: "99.5%", label: "Uptime" },
  ];

  const technologies = ["Golang", "Java", "Kafka", "AWS", "Kubernetes", "MySQL", "Redis", "Microservices"];

  return (
    <section
      id="hero"
      className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-6 sm:space-y-8 order-2 lg:order-1 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Senior Software Engineer
                </span>
              </div>
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 font-bold">
                Ayush Kumar Gupta
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                Backend engineer with <span className="text-blue-600 font-semibold">5+ years</span> building distributed systems and microservices at scale.
                Specialized in high-reliability fintech infrastructure serving <span className="text-blue-600 font-semibold">millions of users</span>.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6" role="list" aria-label="Key achievements">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/ayush-kr-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
                aria-label="View LinkedIn Profile (opens in new tab)"
              >
                <LinkedInIcon className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">LinkedIn Profile</span>
                <span className="sm:hidden">LinkedIn</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4">
              <a
                href="mailto:ayushgupta.ac@gmail.com"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label="Send email to ayushgupta.ac@gmail.com"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">ayushgupta.ac@gmail.com</span>
              </a>
              <div className="inline-flex items-center gap-2 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Decorative Background Elements */}
              <div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Image Container */}
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                {/* Loading skeleton */}
                {!imageLoaded && !imageError && (
                  <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-6xl font-bold text-gray-300">{FALLBACK_INITIALS}</div>
                  </div>
                )}

                {/* Fallback with initials on error */}
                {imageError && (
                  <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-7xl font-bold text-white">{FALLBACK_INITIALS}</span>
                  </div>
                )}

                {/* Profile Image */}
                <img
                  src={PROFILE_PHOTO_URL}
                  alt="Ayush Kumar Gupta - Senior Software Engineer specializing in distributed systems"
                  className={`w-full h-auto rounded-xl object-cover aspect-square transition-opacity duration-300 ${
                    imageLoaded && !imageError ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              
              {/* Availability Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="relative" aria-hidden="true">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full absolute top-0 animate-ping"></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-4 sm:mb-6">Core Technologies</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3" role="list" aria-label="Core technologies">
            {technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
