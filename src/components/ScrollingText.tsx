export const ScrollingText = () => {
  const skills = [
    "🚀 Full Stack Developer",
    "💻 React Expert", 
    "🎯 TypeScript Ninja",
    "🔥 Node.js Master",
    "✨ UI/UX Designer",
    "⚡ Performance Optimizer",
    "🎨 Creative Coder",
    "🌟 Problem Solver"
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-secondary py-4 relative">
      <div className="animate-scroll whitespace-nowrap text-lg font-semibold text-secondary-foreground flex">
        {/* Repeat the content multiple times for seamless loop */}
        {[...Array(4)].map((_, repeatIndex) => (
          <div key={repeatIndex} className="flex shrink-0">
            {skills.map((skill, index) => (
              <span key={`${repeatIndex}-${index}`} className="mx-8">
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};