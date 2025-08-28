const KEYWORDS = [
  'C', 'C++', 'Python', 'SQL', 'JavaScript', 'TypeScript',
  'HTML5', 'CSS3', 'Unix Shell', 'Linux',
  'React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Tailwind CSS',
  'Git', 'GitHub', 'Postman',
  'MongoDB', 'Firebase',
  'AWS', 'Vercel'
];


export function KeywordScroll() {
  return (
    <div className="my-16 overflow-hidden w-full">
      <p className="text-2xl font-bold uppercase pb-4">Skills</p>

      <div className="flex flex-wrap gap-4 text-xl">
        {KEYWORDS.map((keyword, i) => (
          <span
            key={i}
             className="
    px-4 py-2 rounded-lg
    border border-border
    bg-card/70 backdrop-blur-md
    shadow-md text-foreground
    transition-transform duration-300
    hover:-translate-y-1
  "
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}
