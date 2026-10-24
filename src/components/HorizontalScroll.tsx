'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface SegmentProps {
  text: string;
  accent?: boolean;
  highlight?: boolean;
  svg?: React.ReactNode;
}

function TextSegment({ text, accent, highlight, svg }: SegmentProps) {
  return (
    <span
      className={`inline-flex items-center gap-4 whitespace-nowrap ${
        highlight
          ? 'text-blue-500 font-bold'
          : accent
          ? 'text-white'
          : 'text-slate-400'
      }`}
    >
      {svg && <span className="flex-shrink-0">{svg}</span>}
      <span className="font-serif">{text}</span>
    </span>
  );
}

// SVG decorative elements
const CurveIcon = () => (
  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-amber-400" aria-hidden="true">
    <path
      d="M5 15 Q 20 0, 30 10 Q 40 20, 55 5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const CircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-blue-400" aria-hidden="true">
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" className="text-amber-400" aria-hidden="true">
    <path
      d="M10 2 L12.5 7.5 L18 8 L14 12 L15 17.5 L10 15 L5 17.5 L6 12 L2 8 L7.5 7.5 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.4"
    />
  </svg>
);

const WaveIcon = () => (
  <svg width="50" height="15" viewBox="0 0 50 15" fill="none" className="text-blue-400" aria-hidden="true">
    <path
      d="M3 12 Q 10 3, 15 8 Q 20 13, 25 8 Q 30 3, 35 8 Q 40 13, 47 5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const section = sectionRef.current;
    const track = trackRef.current;

    const scrollWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    const travelDistance = scrollWidth - viewportWidth + 160;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const scrollTween = gsap.to(track, {
        x: -travelDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${travelDistance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        scrollTween.kill();
      };
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: sectionRef });

  // Accessible fallback for users with reduced motion preferences
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return (
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-4">
            We engineer <span className="text-blue-400">high-performance digital platforms</span> with{' '}
            <span className="text-amber-400">precision code</span> and purposeful design that move businesses{' '}
            <span className="text-blue-400">forward</span>.
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[420px] md:h-[100svh] bg-navy text-white overflow-hidden flex items-center py-16 md:py-0"
    >
      {/* Horizontal scrolling track container */}
      <div className="sticky top-0 h-full w-full flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-10 pl-6 md:pl-[8vw] pr-6 md:pr-[12vw] whitespace-nowrap overflow-x-auto md:overflow-x-visible no-scrollbar"
        >
          <span className="text-3xl sm:text-5xl md:text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold font-serif text-slate-100">
            We engineer
          </span>
          <TextSegment text="high-performance" accent />
          <span className="text-3xl sm:text-5xl md:text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold font-serif text-slate-100">
            digital platforms, combining
          </span>
          <TextSegment text="purposeful design" highlight svg={<CurveIcon />} />
          <TextSegment text="precision code" highlight svg={<StarIcon />} />
          <span className="text-3xl sm:text-5xl md:text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold font-serif text-slate-100">
            and
          </span>
          <TextSegment text="scalable architectures" accent svg={<WaveIcon />} />
          <span className="text-3xl sm:text-5xl md:text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold font-serif text-slate-100">
            that move businesses
          </span>
          <TextSegment text="forward" highlight svg={<CircleIcon />} />
          <span className="text-3xl sm:text-5xl md:text-[clamp(2.5rem,5.5vw,5.5rem)] font-bold font-serif text-slate-100">
            .
          </span>
        </div>
      </div>
    </section>
  );
}