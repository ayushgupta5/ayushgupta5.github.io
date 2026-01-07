import { Code2, Cloud, Database, Zap, GitBranch, Shield } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Golang (Primary)", "Java", "C/C++", "SQL"],
      color: "blue"
    },
    {
      icon: Zap,
      title: "Backend & Architecture",
      skills: [
        "Microservices Architecture",
        "Event-Driven Systems",
        "REST APIs",
        "gRPC",
        "Kafka",
        "Spring Boot",
        "Distributed Systems"
      ],
      color: "purple"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: [
        "AWS (EC2, EKS, Lambda, SQS)",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "CI/CD Pipelines"
      ],
      color: "green"
    },
    {
      icon: Database,
      title: "Databases & Caching",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Redis",
        "Query Optimization",
        "Database Design"
      ],
      color: "orange"
    },
    {
      icon: GitBranch,
      title: "Message Queues & Integration",
      skills: [
        "Apache Kafka",
        "AWS SQS",
        "MuleSoft",
        "Event Streaming",
        "Async Processing"
      ],
      color: "red"
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", icon: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
    green: { bg: "bg-green-50", border: "border-green-200", icon: "text-green-600", badge: "bg-green-100 text-green-700" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", icon: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
    red: { bg: "bg-red-50", border: "border-red-200", icon: "text-red-600", badge: "bg-red-100 text-red-700" }
  };

  const coreCompetencies = [
    "Building distributed systems with event-driven architecture",
    "Designing scalable APIs and microservices",
    "Optimizing database queries and improving performance",
    "Setting up CI/CD pipelines and handling deployments",
    "Writing clean, well-tested production code",
    "Debugging complex production issues under pressure"
  ];

  const architectureExperience = [
    {
      title: "Microservices Portfolio",
      description: "8+ microservices across loan lifecycle",
      services: ["LoanExp", "LoanCore", "AssetOffline", "Transaction-History", "Account-Service", "CR-Decision-Eng", "LoanApp", "Batchify"]
    },
    {
      title: "Architecture Patterns",
      description: "Production-proven design approaches",
      services: [
        "Event-driven with Kafka for real-time processing",
        "Layered architecture (experience/domain separation)",
        "Circuit breakers and retry mechanisms",
        "Database optimization and caching strategies",
        "API design and versioning"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Backend specialization in distributed systems, microservices, and high-scale infrastructure
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            const Icon = category.icon;
            
            return (
              <div key={index} className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${colors.icon} bg-white rounded-lg flex items-center justify-center shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg text-gray-900 font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className={`px-3 py-1 ${colors.badge} rounded-full text-sm font-medium`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl p-8 mb-16 shadow-xl">
          <h3 className="text-2xl mb-6 text-center">
            Core Engineering Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                <div className="w-6 h-6 bg-blue-500 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-100">{competency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Experience */}
        <div>
          <h3 className="text-2xl text-gray-900 mb-8 text-center">
            Architecture & System Design Experience
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {architectureExperience.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <h4 className="text-lg text-gray-900 mb-2 font-semibold">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.services.map((service, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Quality Practices */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 shadow-md">
          <h3 className="text-xl text-gray-900 mb-6 text-center">
            Code Quality & Best Practices
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Comprehensive test coverage for critical features</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Active technical debt reduction (2000+ lines removed)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Go best practices for error handling and structure</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Regular code reviews (30+ conducted)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Documentation and knowledge sharing</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Maintainable, readable code for team scalability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}