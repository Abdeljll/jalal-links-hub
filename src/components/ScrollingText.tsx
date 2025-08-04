import { useLanguage } from "@/contexts/LanguageContext";

export const ScrollingText = () => {
  const { t } = useLanguage();
  
  const skills = [
    t('skills.fullstack'),
    t('skills.react'),
    t('skills.typescript'),
    t('skills.nodejs'),
    t('skills.uiux'),
    t('skills.performance'),
    t('skills.creative'),
    t('skills.solver')
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