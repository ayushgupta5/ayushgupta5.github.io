import { Building2, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Career Journey
            </span>
          </div>
          <h2 id="experience-heading" className="text-3xl sm:text-4xl text-gray-900 mb-4 font-bold">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Building scalable fintech infrastructure and enterprise solutions
          </p>
        </div>

        <div className="space-y-12">
          {/* Grab */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full hidden md:block"></div>
            
            <div className="md:pl-12">
              {/* Company Header */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl text-gray-900 mb-2">
                      Software Engineer
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="text-lg">Grab</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>March 2022 – Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Bengaluru, India</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Golang</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Kafka</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Microservices</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Redis</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Kubernetes</span>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="grid gap-6">
                {/* Achievement 1 */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg text-gray-900 mb-2">
                        Revenue Generation Platform (Admin Fee Implementation)
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Built a system to add configurable admin fees to loan products, opening up a new revenue stream for the business.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Fee calculation engine supporting multiple pricing models (fixed/percentage)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Integrated into 15+ existing APIs without breaking changes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Email and push notification system for transparent customer communication</span>
                        </div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="text-sm text-green-800">
                          <span className="font-semibold">Impact:</span> Created new revenue stream • Zero production incidents on launch
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement 2 */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg text-gray-900 mb-2">
                        Automatic Portfolio Management System (APM)
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Built an automation system that reduced manual work for operations team managing loan portfolios.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Event-driven system processing 1M+ Kafka messages daily</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Automated credit limit adjustments based on account health</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Audit trail API for parameter change history</span>
                        </div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="text-sm text-green-800">
                          <span className="font-semibold">Impact:</span> 60% reduction in manual work • 200 hours/month saved • 40% performance improvement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement 3 */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg text-gray-900 mb-2">
                        Notification Infrastructure Modernization
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Rebuilt notification system to improve reliability and customer communication.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Multi-channel unified notification platform</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Retry logic for failed notifications</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Indonesia market support with localized templates</span>
                        </div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="text-sm text-green-800">
                          <span className="font-semibold">Impact:</span> 95% improvement in delivery reliability • 30% reduction in support tickets
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement 4 */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg text-gray-900 mb-2">
                        API Development & Performance Optimization
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Built internal APIs and optimized query performance for critical customer-facing features.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Loan Search, Account Detail, Transaction History, and Customer Insight APIs</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Cursor-based pagination for large datasets</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">Fixed N+1 query issues and optimized batch processing</span>
                        </div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="text-sm text-green-800">
                          <span className="font-semibold">Impact:</span> 10x faster queries • 40% batch processing improvement
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HashedIn by Deloitte */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full hidden md:block"></div>
            
            <div className="md:pl-12">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl text-gray-900 mb-2">
                      Software Engineer
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="text-lg">HashedIn by Deloitte</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>November 2020 – March 2022</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Bengaluru, India</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Built 15+ enterprise APIs using Java Spring Boot and MuleSoft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Worked on integration layers connecting different enterprise systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Improved integration efficiency for large client projects</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Spring Boot</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">MuleSoft</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">REST APIs</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Microservices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}