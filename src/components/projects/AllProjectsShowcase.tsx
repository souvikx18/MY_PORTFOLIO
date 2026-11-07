import React, { useState, useRef } from 'react';
import { Project } from '../../types/portfolio';

interface AllProjectsShowcaseProps {
  projects: readonly Project[];
}

interface ProjectThemeConfig {
  accentColor: string;
  accentGradient: string;
  pillBg: string;
  pillBorder: string;
  pillColor: string;
  badgeText: string;
  iconType: 'layers' | 'rook' | 'bot' | 'cloud' | 'resume' | 'mic' | 'robot';
}

const PROJECT_THEMES: Record<string, ProjectThemeConfig> = {
  decisionos: {
    accentColor: '#8B5CF6',
    accentGradient: 'linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)',
    pillBg: 'rgba(139, 92, 246, 0.16)',
    pillBorder: 'rgba(168, 85, 247, 0.45)',
    pillColor: '#C084FC',
    badgeText: 'AI • Decision Support',
    iconType: 'layers'
  },
  matex: {
    accentColor: '#3B82F6',
    accentGradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
    pillBg: 'rgba(59, 130, 246, 0.16)',
    pillBorder: 'rgba(59, 130, 246, 0.45)',
    pillColor: '#60A5FA',
    badgeText: 'Chess • AI • Web',
    iconType: 'rook'
  },
  veridyn: {
    accentColor: '#06B6D4',
    accentGradient: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
    pillBg: 'rgba(6, 182, 212, 0.16)',
    pillBorder: 'rgba(6, 182, 212, 0.45)',
    pillColor: '#67E8F9',
    badgeText: 'RAG & Agent Evaluation',
    iconType: 'bot'
  },
  'flash-flood-prediction': {
    accentColor: '#0EA5E9',
    accentGradient: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 100%)',
    pillBg: 'rgba(14, 165, 233, 0.16)',
    pillBorder: 'rgba(14, 165, 233, 0.45)',
    pillColor: '#7DD3FC',
    badgeText: 'Geospatial ML • Hydrology',
    iconType: 'cloud'
  },
  hireiq: {
    accentColor: '#1D4ED8',
    accentGradient: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)',
    pillBg: 'rgba(30, 58, 138, 0.22)',
    pillBorder: 'rgba(37, 99, 235, 0.38)',
    pillColor: '#93C5FD',
    badgeText: 'AI Recruitment • ATS',
    iconType: 'resume'
  },
  jarvis: {
    accentColor: '#1D4ED8',
    accentGradient: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)',
    pillBg: 'rgba(30, 58, 138, 0.22)',
    pillBorder: 'rgba(37, 99, 235, 0.38)',
    pillColor: '#93C5FD',
    badgeText: 'Voice AI • Conversational',
    iconType: 'robot'
  }
};

const DEFAULT_THEME: ProjectThemeConfig = {
  accentColor: '#3B82F6',
  accentGradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
  pillBg: 'rgba(59, 130, 246, 0.16)',
  pillBorder: 'rgba(59, 130, 246, 0.45)',
  pillColor: '#60A5FA',
  badgeText: 'Software Engineering',
  iconType: 'layers'
};

/**
 * Renders 3D isometric icons with top-lit faces and extruded side facets.
 */
const renderProjectIcon3D = (iconType: string, accentColor: string) => {
  switch (iconType) {
    case 'layers': // DecisionOS: 3D Isometric Stack Slabs
      return (
        <svg width="30" height="30" viewBox="0 0 28 28" fill="none" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
          {/* Top Floating Slab */}
          <polygon points="14,2 23,6.5 14,11 5,6.5" fill="#FFFFFF" />
          <polygon points="5,6.5 14,11 14,13 5,8.5" fill="#CBD5E1" />
          <polygon points="14,11 23,6.5 23,8.5 14,13" fill="#94A3B8" />

          {/* Middle Slab */}
          <polygon points="14,8 23,12.5 14,17 5,12.5" fill="#E2E8F0" opacity="0.95" />
          <polygon points="5,12.5 14,17 14,19 5,14.5" fill="#94A3B8" />
          <polygon points="14,17 23,12.5 23,14.5 14,19" fill="#64748B" />

          {/* Bottom Slab */}
          <polygon points="14,14 23,18.5 14,23 5,18.5" fill="#CBD5E1" opacity="0.9" />
          <polygon points="5,18.5 14,23 14,24.5 5,20" fill="#64748B" />
          <polygon points="14,23 23,18.5 23,20 14,24.5" fill="#475569" />
        </svg>
      );

    case 'rook': // MateX: 3D Shaded Volumetric Chess Rook
      return (
        <svg width="30" height="30" viewBox="0 0 28 28" fill="none" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}>
          <defs>
            <linearGradient id="rook-light-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#E2E8F0" />
              <stop offset="80%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="rook-base-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
          </defs>
          <ellipse cx="14" cy="24.5" rx="9.5" ry="2.2" fill="#1E293B" />
          <path d="M5 23.5 C5 22 8 21.2 14 21.2 C20 21.2 23 22 23 23.5 L22 25 C22 26 19 26.8 14 26.8 C9 26.8 6 26 6 25 Z" fill="url(#rook-base-grad)" />
          <path d="M8 21.2 C8 17 9.5 13 9.5 11 L18.5 11 C18.5 13 20 17 20 21.2 C17.5 22.2 10.5 22.2 8 21.2 Z" fill="url(#rook-light-grad)" />
          <ellipse cx="14" cy="11" rx="5.5" ry="1.4" fill="#FFFFFF" />
          <path d="M7 6 L7 10 C7 11 10 11.6 14 11.6 C18 11.6 21 11 21 10 L21 6 L18.5 6 L18.5 7.5 L15.5 7.5 L15.5 6 L12.5 6 L12.5 7.5 L9.5 7.5 L9.5 6 Z" fill="url(#rook-light-grad)" />
          <ellipse cx="14" cy="6" rx="7" ry="1.5" fill="#FFFFFF" opacity="0.85" />
        </svg>
      );

    case 'bot': // Veridyn: 3D Isometric Agent Core Cube
      return (
        <svg width="30" height="30" viewBox="0 0 28 28" fill="none" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}>
          <polygon points="14,3 23,8 14,13 5,8" fill="#67E8F9" />
          <polygon points="5,8 14,13 14,23 5,18" fill="#0891B2" />
          <polygon points="14,13 23,8 23,18 14,23" fill="#0E7490" />
          <ellipse cx="14" cy="13" rx="3.5" ry="2" fill="#FFFFFF" />
          <circle cx="14" cy="13" r="1.5" fill="#0891B2" />
        </svg>
      );

    case 'cloud': // Flash Flood: 3D Mountain Terrain with Volumetric Crest
      return (
        <svg width="30" height="30" viewBox="0 0 28 28" fill="none" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}>
          <polygon points="14,3 23,19 14,16" fill="#0284C7" />
          <polygon points="14,3 14,16 5,19" fill="#38BDF8" />
          <polygon points="14,3 17,9 14,7.8 11,9" fill="#FFFFFF" />
          <path d="M3 20 C 7 17, 11 22, 16 18 C 21 14.5, 25 17.5, 26 20.5 L 26 25 C 20 27, 8 27, 3 25 Z" fill="#0EA5E9" opacity="0.9" />
          <path d="M3 20 C 7 17, 11 22, 16 18 C 21 14.5, 25 17.5, 26 20.5" stroke="#BAE6FD" strokeWidth="1.6" />
        </svg>
      );

    case 'resume': // HireIQ: 3D Isometric Faceted Shield & Badge in Dark Blue
      return (
        <svg width="30" height="30" viewBox="0 0 28 28" fill="none" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}>
          <polygon points="14,2 23,7 23,20 14,25 5,20 5,7" fill="#0F172A" />
          <polygon points="14,3.5 21.5,7.7 14,12 6.5,7.7" fill="#60A5FA" />
          <polygon points="6.5,7.7 14,12 14,23.5 6.5,19.2" fill="#2563EB" />
          <polygon points="14,12 21.5,7.7 21.5,19.2 14,23.5" fill="#1E40AF" />
          <polyline points="10 13 13 16 18 10" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'robot': // JARVIS: 3D Volumetric Robot Head in Dark Blue
    case 'mic':
      return (
        <svg width="30" height="30" viewBox="0 0 28 28" fill="none" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))' }}>
          <defs>
            {/* Robot Chassis Gradient (Metallic Dark Blue) */}
            <linearGradient id="jarvis-robot-chassis" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="30%" stopColor="#1D4ED8" />
              <stop offset="80%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Left Ear Pod Gradient */}
            <linearGradient id="jarvis-robot-ear-l" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>

            {/* Right Ear Pod Gradient */}
            <linearGradient id="jarvis-robot-ear-r" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Dark Glass Visor Screen */}
            <linearGradient id="jarvis-robot-visor" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#030712" />
            </linearGradient>
          </defs>

          {/* Top Antenna Mast & Glowing Cyan Beacon */}
          <line x1="14" y1="2" x2="14" y2="6.5" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="14" cy="6.5" rx="2.4" ry="0.9" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="0.6" />
          <circle cx="14" cy="2.5" r="1.8" fill="#38BDF8" />
          <circle cx="13.4" cy="1.9" r="0.6" fill="#FFFFFF" />

          {/* Left & Right 3D Ear Modules */}
          <rect x="3.5" y="11" width="2.5" height="7" rx="1.2" fill="url(#jarvis-robot-ear-l)" stroke="#3B82F6" strokeWidth="0.5" />
          <rect x="22" y="11" width="2.5" height="7" rx="1.2" fill="url(#jarvis-robot-ear-r)" stroke="#1E40AF" strokeWidth="0.5" />

          {/* Main 3D Metallic Head Chassis */}
          <rect x="5.5" y="6" width="17" height="17" rx="4.5" fill="url(#jarvis-robot-chassis)" />

          {/* Top-Edge Specular Lighting Bevel */}
          <path d="M 8.5 7.5 Q 14 6 19.5 7.5" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
          <path d="M 6.8 9.5 L 6.8 19" stroke="#60A5FA" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

          {/* Dark Glass Visor Screen */}
          <rect x="7.8" y="9.5" width="12.4" height="8" rx="2.8" fill="url(#jarvis-robot-visor)" stroke="#1E3A8A" strokeWidth="0.8" />

          {/* High-Tech Glowing Eyes */}
          <rect x="9.4" y="11.5" width="3.4" height="4" rx="1.4" fill="#38BDF8" />
          <circle cx="10.2" cy="12.4" r="0.7" fill="#FFFFFF" />

          <rect x="15.2" y="11.5" width="3.4" height="4" rx="1.4" fill="#38BDF8" />
          <circle cx="16" cy="12.4" r="0.7" fill="#FFFFFF" />

          {/* Lower Speaker / Acoustic Ventilation Vents */}
          <line x1="10.5" y1="19.8" x2="17.5" y2="19.8" stroke="#3B82F6" strokeWidth="1.1" strokeLinecap="round" opacity="0.8" />
          <line x1="11.8" y1="21.4" x2="16.2" y2="21.4" stroke="#1D4ED8" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
        </svg>
      );

    default:
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
  }
};

const renderTechIcon = (tag: string) => {
  const normalized = tag.toLowerCase().trim();
  if (normalized.includes('react')) {
    return (
      <svg width="13" height="13" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  if (normalized.includes('typescript')) {
    return (
      <span style={{ backgroundColor: '#3178C6', color: '#FFFFFF', fontSize: '9px', fontWeight: 800, padding: '1px 3px', borderRadius: '2px', lineHeight: 1 }}>
        TS
      </span>
    );
  }
  if (normalized.includes('javascript')) {
    return (
      <span style={{ backgroundColor: '#F7DF1E', color: '#000000', fontSize: '9px', fontWeight: 800, padding: '1px 3px', borderRadius: '2px', lineHeight: 1 }}>
        JS
      </span>
    );
  }
  if (normalized.includes('tailwind')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    );
  }
  if (normalized.includes('shadcn')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
        <path d="m4 12 8-8 8 8-8 8z" />
      </svg>
    );
  }
  if (normalized.includes('vite')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M21.5 3.5 12.5 21l-3-6-6-2.5 18-9Z" fill="#BD34FE" stroke="#FFD62E" strokeWidth="1.2"/>
      </svg>
    );
  }
  if (normalized.includes('vercel')) {
    return (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    );
  }
  if (normalized.includes('netlify')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#00C7B7">
        <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l5.5 5.5-5.5 5.5-5.5-5.5 5.5-5.5z"/>
      </svg>
    );
  }
  if (normalized.includes('node')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2L3 7.2v10.6L12 23l9-5.2V7.2L12 2zm0 2.4l6.8 3.9v7.8L12 20l-6.8-3.9V8.3L12 4.4z"/>
      </svg>
    );
  }
  if (normalized.includes('express')) {
    return (
      <span style={{ color: '#E2E8F0', fontSize: '10px', fontWeight: 700, fontFamily: 'monospace' }}>
        ex
      </span>
    );
  }
  if (normalized.includes('postgres')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#336791">
        <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 1.34 7 2s-3.13 2-7 2-7-1.34-7-2 3.13-2 7-2zm0 14c-3.87 0-7-1.34-7-2v-2.23c1.61.78 4.14 1.23 7 1.23s5.39-.45 7-1.23V17c0 .66-3.13 2-7 2zm0-5c-3.87 0-7-1.34-7-2V9.77c1.61.78 4.14 1.23 7 1.23s5.39-.45 7-1.23V12c0 .66-3.13 2-7 2z"/>
      </svg>
    );
  }
  if (normalized.includes('prisma')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2D3748" strokeWidth="2">
        <polygon points="12 2 2 22 22 22 12 2" fill="#5A67D8"/>
      </svg>
    );
  }
  if (normalized.includes('redis')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#DC382D">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L2 16l10 5 10-5-10-5z"/>
      </svg>
    );
  }
  if (normalized.includes('bullmq')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#E11D48">
        <circle cx="12" cy="12" r="9" />
        <path d="m9 12 2 2 4-4" stroke="#FFFFFF" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  if (normalized.includes('gemini')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#4E89FF">
        <path d="m12 0 2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0z"/>
      </svg>
    );
  }
  if (normalized.includes('websocket')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
        <path d="M8 7h8v10H8z" />
        <path d="M12 3v4M12 17v4" />
      </svg>
    );
  }
  if (normalized.includes('docker')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm9 8.5c-.5-.3-1.6-.4-2.5.2-1 .6-1.9.5-2.5.3-.2-.1-.4-.2-.5-.3-1.2-.8-2.7-.4-3.7.2-.6.3-1.4.3-2 .1-.6-.2-1.2-.5-1.9-.3-1.2.3-2.1 1.3-2.4 2.5C.3 13.9 0 15 0 15c1 .5 2.5.5 3.5.2 1.4-.4 2.8-.2 4 .5 1.4.8 3.1.8 4.5.1 1.4-.7 3.1-.6 4.4.2 1.2.7 2.6.7 3.8.1 1.2-.6 2.1-.2 2.6.1.4-.8.7-1.7.9-2.7.2-1.1-.3-1.9-.7-2z"/>
      </svg>
    );
  }
  if (normalized.includes('python')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#3776AB">
        <path d="M11.9 2c-4.4 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H5.7S2 6.1 2 10.5s3.3 4.2 3.3 4.2h1.9v-2.7s-.1-3.3 3.3-3.3h5.7s3.2.1 3.2-3.1-2.9-3.6-7.5-3.6zm-2.4 1.3c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm2.6 18.7c4.4 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h6.3s3.7.4 3.7-4-3.3-4.2-3.3-4.2h-1.9v2.7s.1 3.3-3.3 3.3H7.2s-3.2-.1-3.2 3.1 2.9 3.6 7.5 3.6zm2.4-1.3c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/>
      </svg>
    );
  }
  if (normalized.includes('chess')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#60A5FA">
        <path d="M4 20h16v2H4zM6 18h12l-1.5-8h-9L6 18zm-1-9.5h14V4h-2.5v2h-2V4h-3v2h-2V4H5v4.5z"/>
      </svg>
    );
  }
  if (normalized.includes('fastapi')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#009688">
        <path d="M12 2L3 14h7l-2 8 11-12h-7l2-8z"/>
      </svg>
    );
  }
  if (normalized.includes('next')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.83 14.54-6.42-8.31h1.79l5.51 7.15a8.07 8.07 0 0 1-.88 1.16ZM14.15 8.23h1.8v7.54h-1.8Z"/>
      </svg>
    );
  }
  if (normalized.includes('gsap')) {
    return (
      <span style={{ backgroundColor: '#0AE448', color: '#000000', fontSize: '8px', fontWeight: 900, padding: '1px 3px', borderRadius: '2px', lineHeight: 1 }}>
        GSAP
      </span>
    );
  }
  if (normalized.includes('lenis')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
        <path d="M4 12c4-8 12-8 16 0s-12 8-16 0" />
      </svg>
    );
  }
  if (normalized.includes('css')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#264DE4">
        <path d="M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3zm14.7 5.7h-7l.2 2.3h6.6l-.6 6.3-4.9 1.4-4.9-1.4-.3-3.6h2.2l.2 1.8 2.8.8 2.8-.8.3-3H7.8L7.3 4h10.8l-.4 3.7z"/>
      </svg>
    );
  }
  if (normalized.includes('sqlalchemy') || normalized.includes('alembic')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#D71E00">
        <path d="M6 2v6h1v8c0 3.3 2.7 6 6 6s6-2.7 6-6V8h1V2H6zm6 17c-2.2 0-4-1.8-4-4v-7h8v7c0 2.2-1.8 4-4 4z"/>
      </svg>
    );
  }
  if (normalized.includes('pydantic')) {
    return (
      <span style={{ backgroundColor: '#E92063', color: '#FFFFFF', fontSize: '8px', fontWeight: 900, padding: '1px 3px', borderRadius: '2px', lineHeight: 1 }}>
        P
      </span>
    );
  }
  if (normalized.includes('jwt')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#D63AFF">
        <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 5a3 3 0 0 1 6 0v3H9V7z"/>
      </svg>
    );
  }
  if (normalized.includes('pytest')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#0A9EDC">
        <path d="M12 2l3 7h7l-5.5 4.5 2 7.5L12 16.5 5.5 21l2-7.5L2 9h7l3-7z"/>
      </svg>
    );
  }
  if (normalized.includes('scikit') || normalized.includes('forest')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#F7931E">
        <path d="M12 2L4 12h4v8h8v-8h4L12 2z"/>
      </svg>
    );
  }
  if (normalized.includes('numpy') || normalized.includes('pandas')) {
    return (
      <span style={{ backgroundColor: '#013243', color: '#4DADCF', border: '1px solid #4DADCF', fontSize: '8px', fontWeight: 800, padding: '1px 3px', borderRadius: '2px', lineHeight: 1 }}>
        {normalized.includes('numpy') ? 'NP' : 'PD'}
      </span>
    );
  }
  if (normalized.includes('raster') || normalized.includes('netcdf')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M3 3h18v18H3V3zm2 2v6h6V5H5zm8 0v6h6V5h-6zm-8 8v6h6v-6H5zm8 0v6h6v-6h-6z"/>
      </svg>
    );
  }
  if (normalized.includes('meteo')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#F59E0B" strokeWidth="2"/>
      </svg>
    );
  }
  if (normalized.includes('spacy')) {
    return (
      <span style={{ backgroundColor: '#09A3D5', color: '#FFFFFF', fontSize: '8px', fontWeight: 900, padding: '1px 3px', borderRadius: '2px', lineHeight: 1 }}>
        spacy
      </span>
    );
  }
  if (normalized.includes('transformer') || normalized.includes('faiss')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="18" cy="6" r="3"/>
        <circle cx="12" cy="18" r="3"/>
        <line x1="8.5" y1="7.5" x2="15.5" y2="7.5"/>
        <line x1="7.5" y1="8.5" x2="10.5" y2="15.5"/>
        <line x1="16.5" y1="8.5" x2="13.5" y2="15.5"/>
      </svg>
    );
  }
  if (normalized.includes('sqlite')) {
    return (
      <span style={{ backgroundColor: '#003B57', color: '#00A9E0', fontSize: '8px', fontWeight: 800, padding: '1px 3px', borderRadius: '2px', lineHeight: 1 }}>
        SQL
      </span>
    );
  }
  if (normalized.includes('nginx')) {
    return (
      <span style={{ backgroundColor: '#009639', color: '#FFFFFF', fontSize: '8px', fontWeight: 900, padding: '1px 3px', borderRadius: '2px', lineHeight: 1 }}>
        NGX
      </span>
    );
  }
  if (normalized.includes('eleven') || normalized.includes('speech')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
        <path d="M12 2v20M8 7v10M16 7v10M4 10v4M20 10v4"/>
      </svg>
    );
  }
  if (normalized.includes('search')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.5">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    );
  }
  if (normalized.includes('rest') || normalized.includes('api') || normalized.includes('httpx')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="3"/>
        <circle cx="7" cy="12" r="1.5" fill="#10B981"/>
        <line x1="12" y1="12" x2="17" y2="12"/>
      </svg>
    );
  }
  if (normalized.includes('minimax') || normalized.includes('pruning')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
        <circle cx="12" cy="4" r="2"/>
        <circle cx="6" cy="12" r="2"/>
        <circle cx="18" cy="12" r="2"/>
        <path d="m10.5 5.5-3 5M13.5 5.5l3 5"/>
      </svg>
    );
  }
  return (
    <span style={{ color: 'var(--text-muted)', fontSize: '10px' }}>&bull;</span>
  );
};

/**
 * Permanent 3D Project Logo Box
 * Sculpted with tactile bevels, specular top rim, deep multi-stop drop-shadow,
 * and continuous subtle 3D floating physics by default.
 */
interface ProjectLogo3DProps {
  iconType: string;
  accentColor: string;
  pillBg: string;
}

const ProjectLogo3D: React.FC<ProjectLogo3DProps> = ({
  iconType,
  accentColor,
  pillBg
}) => {
  const [interactiveOffset, setInteractiveOffset] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setInteractiveOffset({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setInteractiveOffset({ x: 0, y: 0, active: false });
  };

  const baseRotateX = 8;
  const baseRotateY = -7;
  const currentRotateX = interactiveOffset.active ? -interactiveOffset.y * 22 : baseRotateX;
  const currentRotateY = interactiveOffset.active ? interactiveOffset.x * 22 : baseRotateY;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="logo-3d-permanent-wrapper"
      style={{
        perspective: '700px',
        width: '52px',
        height: '52px',
        flexShrink: 0,
        cursor: 'pointer'
      }}
    >
      <div
        className={interactiveOffset.active ? 'logo-3d-permanent-box is-interacting' : 'logo-3d-permanent-box is-floating-3d'}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '14px',
          background: `linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(0, 0, 0, 0.4) 100%), ${pillBg}`,
          border: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) translateZ(14px) scale(${interactiveOffset.active ? 1.08 : 1})`,
          boxShadow: interactiveOffset.active
            ? '0 12px 28px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.15)'
            : '0 6px 18px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
          transition: interactiveOffset.active
            ? 'transform 0.08s ease-out, box-shadow 0.1s ease'
            : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
          willChange: 'transform, box-shadow'
        }}
      >
        <div
          style={{
            transform: 'translateZ(20px)',
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {renderProjectIcon3D(iconType, accentColor)}
        </div>
      </div>
    </div>
  );
};

export const AllProjectsShowcase: React.FC<AllProjectsShowcaseProps> = ({ projects }) => {
  return (
    <div
      className="projects-showcase-grid-layout"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px',
        marginTop: '64px',
        alignItems: 'stretch'
      }}
    >
      {projects.map(project => {
        const theme = PROJECT_THEMES[project.id] || DEFAULT_THEME;

        return (
          <article
            key={project.id}
            id={`project-${project.id}`}
            className="redesigned-project-card"
            style={{
              padding: 'clamp(24px, 2.8vw, 34px)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
              height: '100%',
              backgroundColor: '#0B0F19',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '22px',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
              transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
            }}
          >
            {/* Top Header Row: 3D Logo + Title/Tagline + Domain Badge */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  {/* Permanent 3D Isometric Logo Box */}
                  <ProjectLogo3D
                    iconType={theme.iconType}
                    accentColor={theme.accentColor}
                    pillBg={theme.pillBg}
                  />

                  <div>
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        margin: 0,
                        lineHeight: '1.2',
                        letterSpacing: '-0.02em',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {project.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: '#94A3B8',
                        margin: '5px 0 0 0',
                        lineHeight: '1.45',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Top-Right Domain / Category Badge */}
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 500,
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    backgroundColor: theme.pillBg,
                    border: `1px solid ${theme.pillBorder}`,
                    color: theme.pillColor,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  {theme.badgeText}
                </span>
              </div>

              {/* Clean, Flat Project Overview Box (NO 3D as requested) */}
              <div
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle Fluid Wave Accent */}
                <svg
                  style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                    opacity: 0.4,
                    height: '100%',
                    width: '170px'
                  }}
                  viewBox="0 0 170 85"
                  fill="none"
                >
                  <path d="M0 85 C 45 65, 95 20, 170 42" stroke={theme.accentColor} strokeWidth="1.5" />
                  <path d="M20 85 C 65 55, 115 15, 170 30" stroke={theme.accentColor} strokeWidth="1.2" />
                  <path d="M40 85 C 85 45, 135 10, 170 20" stroke={theme.accentColor} strokeWidth="0.9" />
                  <path d="M60 85 C 105 35, 150 5, 170 10" stroke={theme.accentColor} strokeWidth="0.6" />
                </svg>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <span>Project Overview</span>
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    color: '#94A3B8',
                    lineHeight: '1.6',
                    margin: 0,
                    fontFamily: 'var(--font-sans)',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {project.architectureOverview}
                </p>
              </div>

              {/* Core Features / Problems Solved */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#F1F5F9',
                    marginBottom: '12px',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3z" />
                    <path d="m4 12 8 4.5 8-4.5" />
                    <path d="m4 16.5 8 4.5 8-4.5" />
                  </svg>
                  <span>
                    {project.problemsFaced && project.problemsFaced.length > 0
                      ? 'Core Features & Problems Solved'
                      : 'Core Features'}
                  </span>
                </div>

                {project.problemsFaced && project.problemsFaced.length > 0 ? (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '11px'
                    }}
                  >
                    {project.problemsFaced.map((problem, pIdx) => (
                      <li
                        key={pIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '13px',
                          lineHeight: '1.5'
                        }}
                      >
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: theme.accentColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <div style={{ color: '#F1F5F9', fontWeight: 600, fontSize: '13px', marginBottom: '2px' }}>
                            {problem.title}
                          </div>
                          <div style={{ color: '#94A3B8', fontSize: '12.5px', lineHeight: '1.5' }}>
                            {problem.description}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '9px'
                    }}
                  >
                    {project.engineeringFocus.map((focus, fIdx) => (
                      <li
                        key={fIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '13px',
                          lineHeight: '1.5'
                        }}
                      >
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: theme.accentColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '1px'
                          }}
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span style={{ color: '#CBD5E1' }}>{focus}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tech Stack Pills with Icons */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#F1F5F9',
                    marginBottom: '10px',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span>Tech Stack</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '5px 11px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#E2E8F0',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {renderTechIcon(tag)}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Links (Launch Live Build & Source Repo) */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center',
                paddingTop: '8px'
              }}
            >
              {project.status === 'HOSTED' && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-live-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    background: theme.accentGradient,
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.35)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Launch Live Build →</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-repo-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Source Repository →</span>
                </a>
              )}

              {project.status === 'IN DEVELOPMENT' && (
                <span
                  style={{
                    fontSize: '12px',
                    color: theme.pillColor,
                    backgroundColor: theme.pillBg,
                    border: `1px solid ${theme.pillBorder}`,
                    padding: '7px 14px',
                    borderRadius: '8px',
                    fontWeight: 500,
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  Active Development &bull; In Progress
                </span>
              )}

              {project.status === 'NOT YET DEPLOYED' && (
                <span
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '7px 14px',
                    borderRadius: '8px',
                    fontWeight: 500,
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  Production Deployment Scheduled
                </span>
              )}
            </div>
          </article>
        );
      })}

      {/* Scoped CSS for Interactions and Responsiveness */}
      <style>{`
        .redesigned-project-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.16) !important;
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.55) !important;
        }

        .project-action-live-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .project-action-repo-btn:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
        }

        /* Permanent 3D Floating Motion for Logo Boxes */
        @keyframes permanent3DLogoFloat {
          0%, 100% {
            transform: rotateX(8deg) rotateY(-7deg) translateY(0px) translateZ(14px);
          }
          50% {
            transform: rotateX(12deg) rotateY(-4deg) translateY(-3.5px) translateZ(18px);
          }
        }

        .logo-3d-permanent-box.is-floating-3d {
          animation: permanent3DLogoFloat 4.5s ease-in-out infinite;
        }

        @media (max-width: 960px) {
          .projects-showcase-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            margin-top: 44px !important;
          }
        }
      `}</style>
    </div>
  );
};
