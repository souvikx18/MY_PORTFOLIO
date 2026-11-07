import React, { useState, useRef, useEffect } from 'react';
import { LexisMessage } from '../../types/lexis';
import { askLexis } from '../../services/lexisService';

interface LexisChatProps {
  onClose: () => void;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}

/* =========================================================================
   VECTOR ICONS (Exact Match to Mockup Design)
   ========================================================================= */

// 3 Stacked Isometric Diamond Layers (Project Insights)
const LayersIsometricIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 20,
  color = '#00D8F6'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 12l10 5 10-5" />
    <path d="M2 17l10 5 10-5" />
  </svg>
);

// Code Brackets </ > (Technical Stack)
const CodeBracketsIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 20,
  color = '#00D8F6'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// Graduation Cap (Academic Background)
const AcademicCapIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 20,
  color = '#00D8F6'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
  </svg>
);

// User Profile / Node (Engineering Decisions)
const UserEngineeringIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 20,
  color = '#00D8F6'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Laptop Icon
const LaptopQuickIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 22,
  color = '#00D8F6'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M2 20h20" />
  </svg>
);

// Database Cylinders
const DatabaseQuickIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 22,
  color = '#00D8F6'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

// Gear / Cog Settings
const GearQuickIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 22,
  color = '#00D8F6'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

// Sleek Right Arrow ->
const SleekArrowRight: React.FC<{ size?: number; color?: string }> = ({
  size = 16,
  color = '#64748B'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// 4 Corner Brackets Fullscreen Icon [ ]
const CornerBracketsFullscreenIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 17,
  color = '#94A3B8'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
  </svg>
);

// Clean Close X Icon
const MinimalCloseIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 17,
  color = '#94A3B8'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Paperclip Outline Icon
const CleanPaperclipIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 19,
  color = '#94A3B8'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

// Paper Airplane Solid Send Icon
const PaperAirplaneIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 17,
  color = '#070B13'
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

/* =========================================================================
   STIPPLED DOTTED TOPOGRAPHY MOUNTAIN WIREFRAME SVG
   ========================================================================= */

const MountainTopographyWireframe: React.FC = () => {
  // Generate stippled dot coordinates for a dense realistic LIDAR terrain look
  const dots: { cx: number; cy: number; r: number; op: number; col: string }[] = [];

  // Left Peak Slope dots
  for (let x = 10; x <= 130; x += 6) {
    const peakY = x < 75 ? 42 + ((75 - x) / 75) * 55 : 42 + ((x - 75) / 55) * 45;
    for (let y = peakY; y <= 115; y += 7) {
      const distFromApex = (y - peakY) / 70;
      dots.push({
        cx: x + ((y * 13) % 4) - 2,
        cy: y + ((x * 7) % 3) - 1,
        r: 0.8 + Math.random() * 0.5,
        op: Math.max(0.12, 0.75 - distFromApex * 0.6),
        col: (x + y) % 5 === 0 ? '#FFFFFF' : '#00D8F6'
      });
    }
  }

  // Right Peak Slope dots
  for (let x = 120; x <= 245; x += 7) {
    const peakY = x < 185 ? 56 + ((185 - x) / 65) * 45 : 56 + ((x - 185) / 60) * 40;
    for (let y = peakY; y <= 115; y += 7) {
      const distFromApex = (y - peakY) / 60;
      dots.push({
        cx: x + ((y * 11) % 4) - 2,
        cy: y + ((x * 9) % 3) - 1,
        r: 0.8 + Math.random() * 0.4,
        op: Math.max(0.1, 0.65 - distFromApex * 0.55),
        col: (x + y) % 4 === 0 ? '#FFFFFF' : '#00D8F6'
      });
    }
  }

  return (
    <div style={{ width: '100%', height: '125px', position: 'relative', overflow: 'hidden', marginTop: 'auto' }}>
      <svg
        viewBox="0 0 250 115"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Ridge 1: Peak Left Outline (Apex at 75, 42) */}
        <path
          d="M 5 115 L 40 80 L 75 42 L 105 70 L 135 95"
          fill="none"
          stroke="#00D8F6"
          strokeWidth="1.5"
          strokeDasharray="2.5 3"
          opacity="0.95"
        />

        {/* Ridge 2: Peak Right Outline (Apex at 185, 56) */}
        <path
          d="M 125 100 L 155 78 L 185 56 L 215 76 L 245 105"
          fill="none"
          stroke="#00D8F6"
          strokeWidth="1.5"
          strokeDasharray="2.5 3"
          opacity="0.85"
        />

        {/* Internal Contour Lines with variable dash */}
        <path
          d="M 15 115 L 50 88 L 75 58 L 100 82 L 130 102"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.6"
        />
        <path
          d="M 25 115 L 58 98 L 75 74 L 95 92 L 120 112"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.9"
          strokeDasharray="1.5 3.5"
          opacity="0.45"
        />
        <path
          d="M 135 112 L 160 88 L 185 70 L 210 88 L 235 110"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.55"
        />

        {/* Render stippled LIDAR point cloud dots */}
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.col} opacity={d.op} />
        ))}
      </svg>
    </div>
  );
};

/* =========================================================================
   LEXIS TWO-COLUMN COMPONENT (Pixel-Perfect to Reference Mockup)
   ========================================================================= */

export const LexisChat: React.FC<LexisChatProps> = ({
  onClose,
  isFullscreen = false,
  onToggleFullscreen
}) => {
  const [messages, setMessages] = useState<LexisMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Hello. I am Lexis, an elite, hyper-capable technical assistant representing Souvik Konar. I can answer inquiries regarding his software systems, engineering decisions, academic background, or technical stack.',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [ariaAnnouncement, setAriaAnnouncement] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  // Focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = async (queryText?: string) => {
    const textToSend = (queryText ?? input).trim();
    if (!textToSend || isThinking) return;

    const userMessage: LexisMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: textToSend,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);
    setAriaAnnouncement(`Searching verified portfolio for: ${textToSend}`);

    try {
      // Intentional 4-second thinking delay as requested by user
      const [response] = await Promise.all([
        askLexis({ message: textToSend }),
        new Promise(resolve => setTimeout(resolve, 4000))
      ]);
      const assistantMessage: LexisMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.reply,
        sources: response.sources,
        isFallback: response.isFallback,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setAriaAnnouncement(response.reply);
    } catch {
      await new Promise(resolve => setTimeout(resolve, 4000));
      const errorMessage: LexisMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content:
          'Lexis encountered an unexpected processing error. You can continue browsing the portfolio or reach Souvik directly.',
        isFallback: true,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMessage]);
      setAriaAnnouncement('Lexis encountered an unexpected error.');
    } finally {
      setIsThinking(false);
    }
  };

  // Helper to render text with "Souvik Konar" highlighted in cyan (#00D8F6)
  const renderMessageContent = (content: string) => {
    if (content.includes('Souvik Konar')) {
      const parts = content.split('Souvik Konar');
      return (
        <span>
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < parts.length - 1 && (
                <span style={{ color: '#00D8F6', fontWeight: 650 }}>Souvik Konar</span>
              )}
            </React.Fragment>
          ))}
        </span>
      );
    }
    return <span>{content}</span>;
  };

  // 4 Sidebar Topic Items
  const sidebarTopics = [
    {
      title: 'Project Insights',
      icon: <LayersIsometricIcon size={19} color="#00D8F6" />,
      query: "What are Souvik's core engineering projects and systems?"
    },
    {
      title: 'Technical Stack',
      icon: <CodeBracketsIcon size={19} color="#00D8F6" />,
      query: "What is Souvik's core technical stack and skills?"
    },
    {
      title: 'Academic Background',
      icon: <AcademicCapIcon size={19} color="#00D8F6" />,
      query: "What is Souvik's academic background and university CGPA?"
    },
    {
      title: 'Engineering Decisions',
      icon: <UserEngineeringIcon size={19} color="#00D8F6" />,
      query: "What are Souvik's engineering decisions and architectural principles?"
    }
  ];

  // 4 Quick Questions 2x2 Grid Items
  const quickQuestions = [
    {
      icon: <LaptopQuickIcon size={22} color="#00D8F6" />,
      line1: 'What has',
      line2: 'Souvik built?',
      query: 'What has Souvik built?'
    },
    {
      icon: <DatabaseQuickIcon size={22} color="#00D8F6" />,
      line1: 'Explain',
      line2: 'Veridyn.',
      query: 'Explain Veridyn.'
    },
    {
      icon: <CodeBracketsIcon size={22} color="#00D8F6" />,
      line1: 'What is',
      line2: 'DecisionOS?',
      query: 'What is DecisionOS?'
    },
    {
      icon: <GearQuickIcon size={22} color="#00D8F6" />,
      line1: 'Technical',
      line2: 'Stack?',
      query: "What is Souvik's technical stack?"
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        width: '100%',
        height: '100%',
        backgroundColor: '#070B13',
        color: '#E2E8F0',
        fontFamily: 'var(--font-body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Screen-reader live region */}
      <div className="sr-only" aria-live="polite" role="status">
        {ariaAnnouncement}
      </div>

      {/* =========================================================================
          LEFT COLUMN: SIDEBAR
          Top: 3 macOS dots
          Branding: [LX], LEXIS, Portfolio Assistant, Cyan bar, Italic description
          Navigation: 4 items separated by lines
          Graphic: Dotted mountain topography
          Footer: > LEXIS v1.0   ● Online
          ========================================================================= */}
      <aside
        style={{
          width: isMobile ? '100%' : '290px',
          minWidth: isMobile ? '100%' : '290px',
          maxWidth: isMobile ? '100%' : '290px',
          backgroundColor: '#060A12',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 24px 18px 24px',
          borderRight: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: isMobile ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
          boxSizing: 'border-box',
          overflowY: 'auto'
        }}
      >
        {/* Top: 3 macOS colored dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '28px' }}>
          <button
            type="button"
            onClick={onClose}
            title="Close"
            style={{
              width: '11px',
              height: '11px',
              borderRadius: '50%',
              backgroundColor: '#FF5F56',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          />
          <button
            type="button"
            title="Minimize"
            style={{
              width: '11px',
              height: '11px',
              borderRadius: '50%',
              backgroundColor: '#FFBD2E',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          />
          <button
            type="button"
            onClick={onToggleFullscreen}
            title="Fullscreen"
            style={{
              width: '11px',
              height: '11px',
              borderRadius: '50%',
              backgroundColor: '#27C93F',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          />
        </div>

        {/* Large Typography Badge: [LX] */}
        <div
          className="font-mono"
          style={{
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '2px',
            marginBottom: '16px'
          }}
        >
          <span style={{ color: '#00D8F6' }}>[</span>
          <span style={{ color: '#FFFFFF' }}>LX</span>
          <span style={{ color: '#00D8F6' }}>]</span>
        </div>

        {/* Main Heading: LEXIS */}
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '2px',
            margin: '0 0 6px 0',
            lineHeight: 1
          }}
        >
          LEXIS
        </h1>

        {/* Subtitle: Portfolio Assistant */}
        <p
          className="font-mono"
          style={{
            fontSize: '13px',
            color: '#94A3B8',
            letterSpacing: '0.4px',
            margin: '0 0 16px 0'
          }}
        >
          Portfolio Assistant
        </p>

        {/* Cyan Underline Bar */}
        <div
          style={{
            width: '36px',
            height: '2.5px',
            backgroundColor: '#00D8F6',
            borderRadius: '2px',
            boxShadow: '0 0 10px rgba(0, 216, 246, 0.7)',
            marginBottom: '18px'
          }}
        />

        {/* Italic Intro Description */}
        <p
          style={{
            fontSize: '13px',
            fontStyle: 'italic',
            color: '#94A3B8',
            lineHeight: 1.55,
            margin: '0 0 24px 0'
          }}
        >
          An intelligent assistant for Souvik Konar’s portfolio.
        </p>

        {/* 4 Topic Items separated by hairline dividers */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {sidebarTopics.map((topic, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(topic.query)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                height: '44px',
                padding: '0 6px',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                color: '#E2E8F0',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 150ms ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.backgroundColor = 'rgba(0, 216, 246, 0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#E2E8F0';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {topic.icon}
              </span>
              <span
                style={{
                  fontSize: '13.5px',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {topic.title}
              </span>
            </button>
          ))}
        </div>

        {/* Dotted Wireframe Mountain Topography */}
        <MountainTopographyWireframe />

        {/* Status Footer: > LEXIS v1.0    ● Online */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11.5px',
            marginTop: '12px'
          }}
        >
          <span className="font-mono" style={{ color: '#64748B' }}>
            &gt; LEXIS v1.0
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#94A3B8'
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#22C55E',
                boxShadow: '0 0 6px #22C55E'
              }}
            />
            Online
          </span>
        </div>
      </aside>

      {/* =========================================================================
          RIGHT COLUMN: CHAT PANEL
          Top Bar: // Portfolio Assistant         [ ]  ✕
          Canvas: Coordinate Grid, Welcome Message, 2x2 Quick Questions
          Bottom: Cyber Glowing Input Pill
          ========================================================================= */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#070B13',
          /* High-fidelity persistent technical coordinate grid */
          backgroundImage:
            'linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Right Top Header */}
        <div
          style={{
            height: '52px',
            minHeight: '52px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            userSelect: 'none'
          }}
        >
          {/* Header Title */}
          <span
            className="font-mono"
            style={{
              fontSize: '13px',
              color: '#94A3B8',
              letterSpacing: '0.4px'
            }}
          >
            //&nbsp;&nbsp;Portfolio Assistant
          </span>

          {/* Controls: Fullscreen Corner Brackets & Minimalist Close X */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {onToggleFullscreen && (
              <button
                type="button"
                onClick={onToggleFullscreen}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 150ms ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}
              >
                <CornerBracketsFullscreenIcon size={17} />
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close assistant"
              title="Close"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 150ms ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FF5F56')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}
            >
              <MinimalCloseIcon size={17} />
            </button>
          </div>
        </div>

        {/* Messages & Content Scroll Canvas */}
        <div
          tabIndex={0}
          aria-label="Conversation messages"
          className="cyber-scrollbar"
          data-lenis-prevent="true"
          style={{
            flex: 1,
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            padding: '24px 28px 16px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
          }}
        >
          {/* Messages Stream */}
          {messages.map(msg => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: msg.role === 'user' ? '82%' : '100%',
                width: msg.role === 'user' ? 'auto' : '100%'
              }}
            >
              {msg.role === 'assistant' ? (
                <div>
                  {/* Top: [LX] avatar + LEXIS • Just now */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px'
                    }}
                  >
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '7px',
                        border: '1.5px solid #00D8F6',
                        backgroundColor: 'rgba(0, 216, 246, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 10px rgba(0, 216, 246, 0.18)'
                      }}
                    >
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#00D8F6'
                        }}
                      >
                        LX
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        letterSpacing: '0.4px'
                      }}
                    >
                      LEXIS
                    </span>

                    <span style={{ fontSize: '11px', color: '#64748B' }}>&bull;</span>

                    <span
                      className="font-mono"
                      style={{
                        fontSize: '11.5px',
                        color: '#64748B'
                      }}
                    >
                      Just now
                    </span>
                  </div>

                  {/* Card Body with Cyan accent bar on left */}
                  <div
                    style={{
                      backgroundColor: 'rgba(10, 18, 34, 0.75)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(56, 189, 248, 0.18)',
                      borderLeft: '2.5px solid #00D8F6',
                      borderRadius: '12px',
                      padding: '18px 22px',
                      fontSize: '13.5px',
                      lineHeight: 1.65,
                      color: '#E2E8F0',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {renderMessageContent(msg.content)}

                    {/* Source References */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div
                        style={{
                          marginTop: '14px',
                          paddingTop: '10px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '10px',
                          alignItems: 'center'
                        }}
                      >
                        <span
                          className="font-mono"
                          style={{
                            fontSize: '10px',
                            color: '#00D8F6',
                            fontWeight: 650,
                            letterSpacing: '0.5px'
                          }}
                        >
                          SOURCES:
                        </span>
                        {msg.sources.map((src, sIdx) => (
                          <a
                            key={sIdx}
                            href={src.url}
                            className="editorial-link"
                            style={{
                              fontSize: '11px',
                              color: '#94A3B8',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '2px 8px',
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              borderRadius: '4px',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              transition: 'all 150ms ease'
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.color = '#00D8F6';
                              e.currentTarget.style.borderColor = 'rgba(0, 216, 246, 0.4)';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.color = '#94A3B8';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                            }}
                            onClick={onClose}
                          >
                            <span>{src.title}</span>
                            <span aria-hidden="true">&#x2197;</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* User Message Layout */
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '6px'
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '11px',
                        color: '#94A3B8'
                      }}
                    >
                      YOU
                    </span>
                    <span style={{ fontSize: '10px', color: '#64748B' }}>&bull;</span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '10px',
                        color: '#64748B'
                      }}
                    >
                      Just now
                    </span>
                  </div>

                  <div
                    style={{
                      padding: '12px 18px',
                      backgroundColor: 'rgba(14, 28, 54, 0.85)',
                      border: '1px solid rgba(0, 216, 246, 0.45)',
                      borderRadius: '10px',
                      color: '#F8FAFC',
                      fontSize: '13.5px',
                      lineHeight: 1.55,
                      boxShadow: '0 4px 16px rgba(0, 216, 246, 0.1)',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Thinking State: Clean badge without duplicate LX LEXIS header */}
          {isThinking && (
            <div
              style={{
                alignSelf: 'flex-start',
                backgroundColor: 'rgba(10, 18, 34, 0.75)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(56, 189, 248, 0.18)',
                borderLeft: '2.5px solid #00D8F6',
                borderRadius: '12px',
                padding: '12px 18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                maxWidth: 'fit-content',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)'
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#00D8F6',
                  boxShadow: '0 0 10px #00D8F6',
                  animation: 'pulse 1.2s infinite ease-in-out'
                }}
              />
              <span
                className="font-mono thinking-text"
                style={{
                  fontSize: '13.5px',
                  color: '#E2E8F0',
                  fontWeight: 500,
                  letterSpacing: '0.4px',
                  textShadow: 'none',
                  filter: 'none'
                }}
              >
                Thinking
                <span className="thinking-dot-1">.</span>
                <span className="thinking-dot-2">.</span>
                <span className="thinking-dot-3">.</span>
              </span>
            </div>
          )}

          {/* =================================================================
              QUICK QUESTIONS 2x2 GRID (Shown ONLY on initial welcome before any question)
              ================================================================= */}
          {!isThinking && messages.length === 1 && (
            <div style={{ marginTop: '10px', marginBottom: '8px' }}>
              {/* Header Divider: — Quick Questions ——————— */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '16px',
                    height: '2px',
                    backgroundColor: '#00D8F6',
                    borderRadius: '2px',
                    boxShadow: '0 0 6px #00D8F6'
                  }}
                />
                <span
                  style={{
                    fontSize: '14.5px',
                    fontWeight: 650,
                    color: '#F8FAFC',
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Quick Questions
                </span>
                <div
                  style={{
                    flex: 1,
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  }}
                />
              </div>

              {/* 2x2 Grid of 4 Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                  gap: '14px'
                }}
              >
                {quickQuestions.map((card, qIdx) => (
                  <button
                    key={qIdx}
                    type="button"
                    onClick={() => handleSend(card.query)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      backgroundColor: 'rgba(10, 17, 30, 0.75)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 180ms cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = 'rgba(14, 25, 45, 0.9)';
                      e.currentTarget.style.borderColor = 'rgba(0, 216, 246, 0.5)';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 216, 246, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      const arrow = e.currentTarget.querySelector('.qq-arrow') as HTMLElement | null;
                      if (arrow) arrow.style.color = '#00D8F6';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'rgba(10, 17, 30, 0.75)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                      const arrow = e.currentTarget.querySelector('.qq-arrow') as HTMLElement | null;
                      if (arrow) arrow.style.color = '#64748B';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                        {card.icon}
                      </span>
                      <div
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 500,
                          color: '#E2E8F0',
                          lineHeight: 1.35
                        }}
                      >
                        <div>{card.line1}</div>
                        <div>{card.line2}</div>
                      </div>
                    </div>

                    <span
                      className="qq-arrow"
                      style={{
                        color: '#64748B',
                        transition: 'color 160ms ease',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '10px'
                      }}
                    >
                      <SleekArrowRight size={16} />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* =================================================================
            BOTTOM INPUT PILL: cyan border, input, paperclip, cyan send button
            ================================================================= */}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSend();
          }}
          style={{
            padding: '14px 28px 22px 28px',
            backgroundColor: 'transparent',
            position: 'relative'
          }}
        >
          <div
            style={{
              height: '54px',
              backgroundColor: 'rgba(8, 14, 26, 0.95)',
              border: '1.5px solid rgba(0, 216, 246, 0.55)',
              borderRadius: '14px',
              boxShadow: '0 0 18px rgba(0, 216, 246, 0.14)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 8px 0 20px',
              gap: '10px',
              transition: 'border-color 150ms ease, box-shadow 150ms ease'
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              maxLength={400}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask anything about Souvik Konar..."
              aria-label="Ask anything about Souvik Konar"
              className="font-mono"
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#F8FAFC',
                fontSize: '13.5px'
              }}
            />

            {/* Paperclip Icon */}
            <button
              type="button"
              title="Attach context (preview)"
              aria-label="Attach context"
              onClick={() => {
                setInput('Can you analyze the architecture diagrams of DecisionOS and Veridyn?');
                inputRef.current?.focus();
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 150ms ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#00D8F6')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}
            >
              <CleanPaperclipIcon size={19} />
            </button>

            {/* Solid Cyan Send Button with Paper Airplane */}
            <button
              type="submit"
              disabled={!input.trim() || isThinking}
              aria-label="Send message"
              title="Send query"
              style={{
                width: '38px',
                height: '38px',
                backgroundColor: '#00D8F6',
                border: 'none',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: !input.trim() || isThinking ? 'not-allowed' : 'pointer',
                opacity: !input.trim() || isThinking ? 0.6 : 1,
                boxShadow: '0 0 12px rgba(0, 216, 246, 0.45)',
                transition: 'all 150ms ease'
              }}
              onMouseEnter={e => {
                if (input.trim() && !isThinking) {
                  e.currentTarget.style.backgroundColor = '#38BDF8';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 216, 246, 0.75)';
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#00D8F6';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 216, 246, 0.45)';
              }}
            >
              <PaperAirplaneIcon size={17} color="#070B13" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
