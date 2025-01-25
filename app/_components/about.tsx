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
          Hi, I&apos;m Rahul, a passionate web developer who loves creating intuitive and scalable digital experiences. With expertise in React, TypeScript, and modern UI frameworks like ShadCN, I specialize in crafting seamless, high-performing web applications. My projects often feature dynamic functionality and thoughtful user interfaces, blending creativity with technical precision.
        </p>
        <p className='mb-4 text-pretty'>
          Beyond coding, I&apos;m an enthusiastic leader and collaborator. As the Lead of YUVA Club, I’ve organized events that merge technology with community impact, including hackathons and workshops. I also enjoy sharing knowledge!
        </p>
        <p className='text-pretty'>
          I thrive on solving challenges and constantly improving, whether it’s through hands-on experience, hosting events, or exploring new tools and frameworks. When I&apos;m not building web apps, I’m likely designing logos for websites or working on ideas that merge technology and design.
        </p>
        <p className='mb-4 text-pretty'>Let’s connect and bring your vision to life!</p>
      </div>
      <ViewResumeButton />
    </section>
  );
}
