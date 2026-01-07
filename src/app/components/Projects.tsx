import { Database, Zap, Bell, TrendingUp, Shield, Code } from "lucide-react";

export function Projects() {
  const projects = [
    {
      icon: TrendingUp,
      title: "Revenue Generation Platform",
      problem: "Business needed new revenue streams from existing loan products without disrupting current operations.",
      solution: "Built configurable admin fee system with flexible pricing models (fixed/percentage) integrated across 15+ APIs. Implemented transparent notification system for customer awareness.",
      impact: [
        "Created entirely new revenue stream for business",
        "Zero production incidents during rollout",
        "Seamless integration with existing loan workflows"
      ],
      tech: ["Golang", "Kafka", "AWS Lambda", "MySQL", "Redis"],
      color: "blue"
    },
    {
      icon: Zap,
      title: "Automatic Portfolio Management (APM)",
      problem: "Operations team spent 200+ hours monthly on manual loan portfolio management tasks, creating bottlenecks and human error risk.",
      solution: "Designed event-driven automation system processing 1M+ daily Kafka messages. Automated credit limit adjustments, parameter updates, and workflow integrations with full audit trail.",
      impact: [
        "60% reduction in manual operational work",
        "200 hours/month saved for ops team",
        "40% improvement in processing performance",
        "Complete audit history for compliance"
      ],
      tech: ["Golang", "Kafka", "AWS Lambda", "AWS SQS", "MySQL"],
      color: "purple"
    },
    {
      icon: Bell,
      title: "Notification Infrastructure Modernization",
      problem: "Legacy notification system unreliable, causing customers to miss critical loan updates and generating 30% of support tickets.",
      solution: "Rebuilt entire notification infrastructure with unified multi-channel platform. Implemented robust retry logic, localization for Indonesia market, and coverage for 10+ loan events.",
      impact: [
        "95% improvement in delivery reliability",
        "30% reduction in notification-related support tickets",
        "Expanded to Indonesia market with localized templates"
      ],
      tech: ["Golang", "Kafka", "AWS SQS"],
      color: "green"
    },
    {
      icon: Database,
      title: "High-Performance Internal APIs",
      problem: "Internal teams needed fast, reliable APIs to search loans, view account details, and analyze customer data at scale.",
      solution: "Built comprehensive API suite with cursor-based pagination, optimized database queries, and efficient batch processing. Fixed critical N+1 query issues impacting dashboard performance.",
      impact: [
        "10x faster queries through cursor pagination",
        "40% improvement in batch processing speed",
        "Eliminated N+1 query bottlenecks",
        "Daily use by customer support and ops teams"
      ],
      tech: ["Golang", "MySQL", "Redis", "REST APIs"],
      color: "orange"
    },
    {
      icon: Shield,
      title: "Production Reliability & Debugging",
      problem: "Production incidents affecting thousands of daily requests required rapid diagnosis and fixes.",
      solution: "Implemented comprehensive monitoring, distributed tracing, and audit logging. Fixed critical bugs including null pointer crashes (1000+ daily requests), race conditions (5% message loss), and timezone edge cases.",
      impact: [
        "99.5% production stability across 100+ deployments",
        "Zero critical rollbacks in past year",
        "Same-day resolution for critical production bugs",
        "PII masking and compliance audit trails"
      ],
      tech: ["Golang", "Distributed Tracing", "Docker", "Kubernetes"],
      color: "red"
    },
    {
      icon: Code,
      title: "Microservices Architecture",
      problem: "Complex fintech domain required scalable, maintainable architecture across multiple teams and services.",
      solution: "Contributed to the design and development of 8+ distributed microservices using event-driven architecture and layered design principles. Integrated internal systems with external core banking and third-party platforms, ensuring reliable communication, extensibility, and long-term maintainability. Applied production-grade engineering practices to support rapid feature delivery and operational stability.",
      impact: [
        "Feature flags for safe production rollouts",
        "Circuit breakers and retry mechanisms for resilience",
        "2000+ lines of legacy code removed",
        "30+ code reviews conducted"
      ],
      tech: ["Microservices", "Kafka", "Feature Flags", "gRPC"],
      color: "indigo"
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", icon: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
    green: { bg: "bg-green-50", border: "border-green-200", icon: "text-green-600", badge: "bg-green-100 text-green-700" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", icon: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
    red: { bg: "bg-red-50", border: "border-red-200", icon: "text-red-600", badge: "bg-red-100 text-red-700" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-200", icon: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700" }
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Case Studies
            </span>
          </div>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl text-gray-900 mb-4 font-bold">
            Key Projects & Case Studies
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Problem → Solution → Impact: Real-world engineering challenges and measurable results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            const Icon = project.icon;
            
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${colors.bg} border-b ${colors.border} p-6`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${colors.icon} bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <h4 className="text-sm text-red-700 uppercase tracking-wide">Problem</h4>
                    </div>
                    <p className="text-gray-700">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <h4 className="text-sm text-blue-700 uppercase tracking-wide">Solution</h4>
                    </div>
                    <p className="text-gray-700">
                      {project.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <h4 className="text-sm text-green-700 uppercase tracking-wide">Impact</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className={`px-3 py-1 ${colors.badge} rounded-full text-xs`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}