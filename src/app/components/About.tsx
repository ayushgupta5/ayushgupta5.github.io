import { Code2, Zap, Shield, Users, Award, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Who I Am
            </span>
          </div>
          <h2 className="text-4xl text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a software engineer with 4+ years of experience working on backend systems, distributed architectures, 
            and microservices. Most of my work has been in the fintech space, where I've built systems that handle real 
            transactions, automate workflows, and help teams work more efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-blue-200">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Code2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl text-gray-900 mb-3 font-semibold">
              Engineering Philosophy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I enjoy solving complex problems—whether it's fixing a production bug at 2 AM, designing an API that makes 
              sense to use, or refactoring messy code that nobody wants to touch. I care about writing code that works 
              reliably, ships on time, and doesn't break in production.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-purple-200">
            <div className="w-14 h-14 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl text-gray-900 mb-3 font-semibold">
              Problem-Solving Mindset
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Good engineering isn't just about writing code—it's about understanding the business problem, making 
              pragmatic tradeoffs, and building things that actually help people do their jobs better. I balance speed 
              and quality in technical decisions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-green-200">
            <div className="w-14 h-14 bg-green-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-xl text-gray-900 mb-3 font-semibold">
              Production Excellence
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Achieved 99.5% production stability across 100+ deployments with no critical rollbacks in the past year. 
              I design systems that handle failure gracefully and debug production issues quickly under pressure.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-orange-200">
            <div className="w-14 h-14 bg-orange-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl text-gray-900 mb-3 font-semibold">
              Collaboration & Mentorship
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I work effectively with product, QA, and ops teams to ship features. I write code that other people can 
              understand and maintain, and I'm interested in mentoring engineers and shaping technical decisions at team level.
            </p>
          </div>
        </div>

        {/* What I've Learned */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold">What I've Mastered</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Designing systems that handle failure gracefully",
              "Writing code that other people can understand and maintain",
              "Debugging production issues quickly under pressure",
              "Working with cross-functional teams to ship features",
              "Making technical decisions that balance speed and quality",
              "Building distributed systems with event-driven architecture"
            ].map((skill, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-colors">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-100">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
