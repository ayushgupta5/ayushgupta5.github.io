import { Code2, Zap, Shield, Users, Award } from "lucide-react";
import { memo } from "react";

// Memoized card component for performance
const ValueCard = memo(({
  icon: Icon,
  title,
  description,
  colorClass
}: {
  icon: typeof Code2;
  title: string;
  description: string;
  colorClass: { bg: string; border: string; iconBg: string };
}) => (
  <div className={`${colorClass.bg} p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all ${colorClass.border} group`}>
    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colorClass.iconBg} text-white rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
      <Icon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
    </div>
    <h3 className="text-lg sm:text-xl text-gray-900 mb-3 font-semibold">
      {title}
    </h3>
    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
      {description}
    </p>
  </div>
));

ValueCard.displayName = 'ValueCard';

const valueCards = [
  {
    icon: Code2,
    title: "Engineering Philosophy",
    description: "I enjoy solving complex problems—whether it's fixing a production bug at 2 AM, designing an API that makes sense to use, or refactoring messy code that nobody wants to touch. I care about writing code that works reliably, ships on time, and doesn't break in production.",
    colorClass: { bg: "bg-gradient-to-br from-blue-50 to-blue-100", border: "border border-blue-200", iconBg: "bg-blue-600" }
  },
  {
    icon: Zap,
    title: "Problem-Solving Mindset",
    description: "Good engineering isn't just about writing code—it's about understanding the business problem, making pragmatic tradeoffs, and building things that actually help people do their jobs better. I balance speed and quality in technical decisions.",
    colorClass: { bg: "bg-gradient-to-br from-purple-50 to-purple-100", border: "border border-purple-200", iconBg: "bg-purple-600" }
  },
  {
    icon: Shield,
    title: "Production Excellence",
    description: "Achieved 99.5% production stability across 100+ deployments with no critical rollbacks in the past year. I design systems that handle failure gracefully and debug production issues quickly under pressure.",
    colorClass: { bg: "bg-gradient-to-br from-green-50 to-green-100", border: "border border-green-200", iconBg: "bg-green-600" }
  },
  {
    icon: Users,
    title: "Collaboration & Mentorship",
    description: "I work effectively with product, QA, and ops teams to ship features. I write code that other people can understand and maintain, and I'm interested in mentoring engineers and shaping technical decisions at team level.",
    colorClass: { bg: "bg-gradient-to-br from-orange-50 to-orange-100", border: "border border-orange-200", iconBg: "bg-orange-600" }
  }
];

const masteredSkills = [
  "Designing systems that handle failure gracefully",
  "Writing code that other people can understand and maintain",
  "Debugging production issues quickly under pressure",
  "Working with cross-functional teams to ship features",
  "Making technical decisions that balance speed and quality",
  "Building distributed systems with event-driven architecture"
];

export function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Who I Am
            </span>
          </div>
          <h2 id="about-heading" className="text-3xl sm:text-4xl text-gray-900 mb-6 font-bold">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            I'm a software engineer with <strong>5+ years of experience</strong> working on backend systems, distributed architectures,
            and microservices. Most of my work has been in the <strong>fintech space</strong>, where I've built systems that handle real
            transactions, automate workflows, and help teams work more efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12" role="list" aria-label="Core values">
          {valueCards.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>

        {/* What I've Mastered */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 sm:p-10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3" aria-hidden="true">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">What I've Mastered</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" role="list" aria-label="Mastered skills">
            {masteredSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/10 p-3 sm:p-4 rounded-lg hover:bg-white/15 transition-colors"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                <span className="text-gray-100 text-sm sm:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
