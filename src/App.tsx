import React, { useState, useEffect, Suspense } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { useTheme } from './hooks/useTheme';
import { Header, Footer } from './components/layout';
import { Hero } from './components/hero';
import { ProjectList } from './components/projects';
import { EngineeringApproach } from './components/approach';
import { SkillInventory } from './components/skills';
import { About } from './components/about';
import { SkipLink, CustomCursor, InteractiveBackground, TapRipple } from './components/ui';
import { LexisTrigger } from './components/lexis';
import { projectsData } from './data';

// Performance Guarantee (Section 76.16): Lazy-load the Lexis dialog chunk on-demand
const LexisDialog = React.lazy(() =>
  import('./components/lexis/LexisDialog').then(module => ({ default: module.LexisDialog }))
);

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLexisOpen, setIsLexisOpen] = useState(false);

  // Initialize Lenis smooth momentum scrolling throughout full website
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <SkipLink targetId="main-content" />

      {/* Fullscreen Viewport Touch & Mouse Reactive Background Canvas */}
      <InteractiveBackground />

      {/* Free Space Touch / Click Concentric Tap Animation */}
      <TapRipple />

      {/* Custom Precision Cursor (Smooth Outer Ring + Pinpoint Inner Dot) */}
      <CustomCursor />

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
        {/* 01 — HERO */}
        <Hero />

        {/* 02 — SELECTED WORK (ALL 6 VERIFIED PROJECTS & INTERACTIVE SCHEMATICS) */}
        <ProjectList projects={projectsData} />

        {/* 03 — ENGINEERING APPROACH */}
        <EngineeringApproach />

        {/* 04 — TECHNICAL INVENTORY */}
        <SkillInventory />

        {/* 05 — ABOUT & EDUCATION */}
        <About />
      </main>

      {/* 06 — CONTACT DIRECTORY & FOOTER */}
      <Footer />

      {/* 07 — LEXIS AI ASSISTANT LAUNCHER & ON-DEMAND MODAL */}
      <LexisTrigger
        isOpen={isLexisOpen}
        onToggle={() => setIsLexisOpen(prev => !prev)}
      />

      {isLexisOpen && (
        <Suspense fallback={null}>
          <LexisDialog
            isOpen={isLexisOpen}
            onClose={() => setIsLexisOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
};

export default App;
