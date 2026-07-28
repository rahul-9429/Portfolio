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
    I&apos;m Rahul, a full-stack developer, actively looking for full-time roles in the UAE.
  </p>
  <p className='mb-4 text-pretty'>
    For the past six months I&apos;ve been the founding engineer at <strong>XyRo.ai</strong>, a B2B SaaS platform where I&apos;ve built and shipped production systems end-to-end - AI agent pipelines, third-party API integrations (Gmail, Google Maps, Zoho CRM), custom ERP systems for UAE clients, and the full platform across FastAPI, PostgreSQL, React, and Next.js. I own features from database schema through deployment, without handoffs.
  </p>
  <p className='mb-4 text-pretty'>
    My work spans AI, real-time systems, and full-stack web development. Outside XyRo, I&apos;ve built projects across blockchain, machine learning, and AI-assisted tools - <strong>HerSafe</strong> (a safety app with ML-based crime analytics and blockchain evidence storage) and an AI blog platform powered by the Gemini API are two I&apos;m proud of.
  </p>
  <p className='mb-4 text-pretty'>
    I graduated with a B.Tech in Computer Science from Vignan&apos;s Institute of Information Technology in 2026 and have 350+ LeetCode problems solved alongside competitive programming experience. I&apos;ve also led the <strong>YUVA VIIT</strong> chapter under Young Indians (CII), running hackathons and tech workshops that grew community participation by 35%.
  </p>
  <p className='text-pretty'>
    I&apos;m actively looking for engineering roles in Dubai, Abu Dhabi, or remotely for UAE-based companies. If you&apos;re building something ambitious, let&apos;s talk.
  </p>
</div>

      <ViewResumeButton />
    </section>
  );
}
