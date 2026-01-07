import { TrendingUp, Clock, AlertCircle, CheckCircle, Users, Zap } from "lucide-react";

export function Impact() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "1M+",
      label: "Daily Kafka Messages",
      description: "Event-driven system processing",
      color: "blue"
    },
    {
      icon: CheckCircle,
      value: "99.5%",
      label: "Production Stability",
      description: "Across 100+ deployments",
      color: "green"
    },
    {
      icon: Clock,
      value: "200hrs",
      label: "Monthly Time Saved",
      description: "Through automation (60% reduction)",
      color: "purple"
    },
    {
      icon: Zap,
      value: "10x",
      label: "Query Performance",
      description: "Cursor pagination optimization",
      color: "orange"
    },
    {
      icon: AlertCircle,
      value: "95%",
      label: "Delivery Improvement",
      description: "Notification reliability",
      color: "red"
    },
    {
      icon: Users,
      value: "0",
      label: "Critical Rollbacks",
      description: "In the past year",
      color: "indigo"
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; text: string }> = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600", text: "text-blue-700" },
    green: { bg: "bg-green-50", border: "border-green-200", icon: "text-green-600", text: "text-green-700" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", icon: "text-purple-600", text: "text-purple-700" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", icon: "text-orange-600", text: "text-orange-700" },
    red: { bg: "bg-red-50", border: "border-red-200", icon: "text-red-600", text: "text-red-700" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-200", icon: "text-indigo-600", text: "text-indigo-700" }
  };

  const achievements = [
    {
      category: "Revenue & Business Impact",
      items: [
        "Created new revenue stream through admin fee platform",
        "Enabled business to generate revenue from existing loan products",
        "Zero production incidents on revenue-critical feature launch"
      ]
    },
    {
      category: "Performance & Scale",
      items: [
        "Processing 1M+ Kafka messages daily with event-driven architecture",
        "10x query performance improvement through cursor-based pagination",
        "40% improvement in batch processing efficiency",
        "Fixed N+1 query issues impacting customer dashboard"
      ]
    },
    {
      category: "Operational Excellence",
      items: [
        "60% reduction in manual operational work",
        "200 hours/month saved for operations team",
        "95% improvement in notification delivery reliability",
        "30% reduction in customer support tickets"
      ]
    },
    {
      category: "Production Reliability",
      items: [
        "99.5% production stability across 100+ deployments",
        "Zero critical rollbacks in the past year",
        "Same-day resolution of critical production bugs (1000+ requests/day)",
        "Fixed race conditions causing 5% message loss",
        "Resolved timezone edge cases affecting international customers"
      ]
    },
    {
      category: "Code Quality & Architecture",
      items: [
        "Removed 2000+ lines of legacy code",
        "Conducted 30+ code reviews",
        "Implemented distributed tracing for easier debugging",
        "Added PII masking for data privacy compliance",
        "Built comprehensive audit logs for regulatory compliance"
      ]
    }
  ];

  return (
    <section
      id="impact"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Results & Achievements
            </span>
          </div>
          <h2 id="impact-heading" className="text-3xl sm:text-4xl text-gray-900 mb-4 font-bold">
            Measurable Impact
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Quantifiable results across performance, reliability, and business outcomes
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const colors = colorMap[metric.color];
            const Icon = metric.icon;
            
            return (
              <div key={index} className={`${colors.bg} border ${colors.border} rounded-xl p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <div className={`text-4xl ${colors.text} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Achievements */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl text-gray-900 mb-6">
                {achievement.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {achievement.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-600 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Production Support Highlights */}
        <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8">
          <h3 className="text-2xl mb-6">
            Production Support Excellence
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg mb-3 text-blue-100">
                Critical Bugs Fixed
              </h4>
              <ul className="space-y-2 text-blue-50">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Term Loan API null pointer crash (1000+ requests/day)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Database query optimization for customer dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Race condition in retry logic (5% message loss)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Timezone validation edge cases</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-3 text-blue-100">
                Infrastructure Improvements
              </h4>
              <ul className="space-y-2 text-blue-50">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Distributed tracing for debugging across services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Audit logging for compliance (who/what/when)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>PII masking for data privacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Feature flags for safe rollouts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}