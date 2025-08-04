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
      <div className="animate-scroll whitespace-nowrap text-lg font-semibold text-secondary-foreground">
        {skills.map((skill, index) => (
          <span key={index} className="mx-8">
            {skill}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {skills.map((skill, index) => (
          <span key={`duplicate-${index}`} className="mx-8">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};