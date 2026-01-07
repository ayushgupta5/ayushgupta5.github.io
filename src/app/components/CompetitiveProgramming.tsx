import { Trophy, Code, Star, Award } from "lucide-react";

export function CompetitiveProgramming() {
  const platforms = [
    {
      name: "LeetCode",
      icon: Code,
      stats: "2200+ problems solved",
      achievement: "Consistent problem-solving practice",
      url: "https://leetcode.com/u/ayush_gupta4/",
      color: "orange"
    },
    {
      name: "GeeksForGeeks",
      icon: Trophy,
      stats: "1900+ problems solved",
      achievement: "Strong algorithmic foundation",
      url: "https://www.geeksforgeeks.org/profile/ayush_gupta4",
      color: "green"
    },
    {
      name: "CodeChef",
      icon: Star,
      stats: "4-star • Rank 511",
      achievement: "Competitive programming excellence",
      url: "https://www.codechef.com/users/ayush_gupta4",
      color: "purple"
    },
    {
      name: "HackerRank",
      icon: Award,
      stats: "5-star C++ • 4-star SQL",
      achievement: "Language mastery certification",
      url: "https://www.hackerrank.com/profile/ayush_gupta4",
      color: "blue"
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; hover: string }> = {
    orange: { bg: "bg-orange-50", border: "border-orange-200", icon: "text-orange-600", hover: "hover:bg-orange-100" },
    green: { bg: "bg-green-50", border: "border-green-200", icon: "text-green-600", hover: "hover:bg-green-100" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", icon: "text-purple-600", hover: "hover:bg-purple-100" },
    blue: { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-600", hover: "hover:bg-blue-100" }
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            Competitive Programming
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strong problem-solving skills demonstrated through 4000+ algorithm challenges
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform, index) => {
            const colors = colorMap[platform.color];
            const Icon = platform.icon;
            
            return (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.bg} border ${colors.border} rounded-xl p-6 ${colors.hover} transition-colors group`}
              >
                <div className={`w-12 h-12 ${colors.icon} bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">
                  {platform.name}
                </h3>
                <div className="text-2xl text-gray-900 mb-2">
                  {platform.stats}
                </div>
                <p className="text-sm text-gray-600">
                  {platform.achievement}
                </p>
              </a>
            );
          })}
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl mb-4">
              Problem-Solving Excellence
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              I enjoy solving algorithmic problems in my free time. This practice strengthens my ability to think through 
              complex technical challenges, optimize solutions, and write efficient code—skills that directly translate 
              to building better production systems.
            </p>
            <div className="flex justify-center items-center gap-8 text-center">
              <div>
                <div className="text-3xl text-blue-400 mb-1">4000+</div>
                <div className="text-sm text-gray-400">Problems Solved</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl text-blue-400 mb-1">4★</div>
                <div className="text-sm text-gray-400">CodeChef Rating</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl text-blue-400 mb-1">Top 511</div>
                <div className="text-sm text-gray-400">CodeChef Rank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
