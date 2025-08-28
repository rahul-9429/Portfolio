import { View } from 'lucide-react';
import { SectionTitle } from './section-title';
import { ViewResumeButton } from './buttons/view-resume-btn';

export function About() {
  return (
    <section
      id='about'
      className='scroll-mt-16 lg:scroll-mt-24'
      aria-label='About me'
    >
      <SectionTitle>
        <h2 className='text-sm font-bold uppercase tracking-widest'>About</h2>
      </SectionTitle>
    <div className='max-w-[60ch] text-slate-400'>
  <p className='mb-4 text-pretty'>
    Hi, I&apos;m Rahul — a 4th-year B.Tech student and full-stack developer passionate about building scalable and intuitive digital products. I work with technologies like Next.js, TypeScript, TailwindCSS, and ShadCN to deliver fast, accessible, and visually polished web experiences. I enjoy bridging the gap between design and engineering, ensuring each product is functional and user-focused.
  </p>
  <p className='mb-4 text-pretty'>
    My work spans across AI, blockchain, and real-time web systems. Projects like <strong>HerSafe</strong> (a safety app using ML and blockchain) and <strong>AI Blog</strong> (an AI-assisted writing tool with Gemini API) reflect my interest in solving meaningful problems through code. I’m comfortable working across the stack and adapting quickly to new libraries, tools, or frameworks.
  </p>
  <p className='mb-4 text-pretty'>
    Outside of development, I lead the <strong>YUVA VIIT</strong> chapter, where I’ve organized tech events, hackathons, and workshops that bring students closer to real-world innovation. These experiences have strengthened my leadership, collaboration, and problem-solving skills beyond the classroom.
  </p>
  <p className='text-pretty'>
    As I move into the final year of my degree, I’m focused on exploring impactful opportunities in software development, contributing to meaningful projects, and continuing to grow as an engineer. Let’s build something innovative together.
  </p>
</div>

      <ViewResumeButton />
    </section>
  );
}
