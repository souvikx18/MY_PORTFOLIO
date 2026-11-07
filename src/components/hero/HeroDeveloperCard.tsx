import React, { useState } from 'react';
import { profileData } from '../../data';

const renderSkillLogo = (skill: string) => {
  const normalized = skill.toLowerCase().trim();
  if (normalized === 'typescript') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text x="12" y="16.5" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">TS</text>
      </svg>
    );
  }
  if (normalized === 'react') {
    return (
      <svg width="13" height="13" viewBox="-11.5 -10.23174 23 20.46348" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  if (normalized === 'python') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M11.91 2c-5.26 0-4.94 2.28-4.94 2.28l.01 2.37h5.02v.71H4.95S2 7.03 2 12.33s2.58 5.17 2.58 5.17h1.54v-2.17s-.08-2.58 2.53-2.58h5.04s2.43.04 2.43-2.37V4.94S16.65 2 11.91 2zM9.06 3.73a.85.85 0 110 1.7.85.85 0 010-1.7z" fill="#38BDF8"/>
        <path d="M12.09 22c5.26 0 4.94-2.28 4.94-2.28l-.01-2.37h-5.02v-.71h7.05s2.95.33 2.95-4.97-2.58-5.17-2.58-5.17h-1.54v2.17s.08 2.58-2.53 2.58H9.85s-2.43-.04-2.43 2.37v7.64S7.35 22 12.09 22zm2.85-1.73a.85.85 0 110-1.7.85.85 0 010 1.7z" fill="#FCD34D"/>
      </svg>
    );
  }
  if (normalized === 'node.js' || normalized.includes('node')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <polygon points="12,2 21,7.2 21,17.8 12,23 3,17.8 3,7.2" fill="#1C3822" stroke="#68A063" strokeWidth="1.6" />
        <path d="M8 17V7l8 10V7" stroke="#84BA64" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (normalized.includes('postgres')) {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 2C7.5 2 4 5 4 9c0 2.8 1.8 5.2 4.5 6.3V21l3-2v-3.2c.2 0 .3.1.5.1 4.5 0 8-3 8-7 0-4-3.5-7-8-7z" fill="#336791"/>
        <circle cx="14.5" cy="8" r="1.2" fill="#FFFFFF"/>
        <path d="M8.5 15.3C7 16 5.5 17.5 5 19.5" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }
  if (normalized === 'docker') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.929 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.184.186v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.186v1.888c0 .102.084.185.186.185m-2.929 0h2.12a.185.185 0 00.184-.186V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185M23.76 9.89c-.365-2.073-1.89-3.21-3.255-3.376-.328-.04-.61.16-.69.473-.342 1.334-.863 2.274-1.865 2.894a.294.294 0 01-.19.052H.795a.485.485 0 00-.472.585c.677 3.328 2.87 8.358 8.01 8.358 5.767 0 9.877-3.79 11.237-7.462 1.95.27 3.84-.712 4.19-1.524z" fill="#2496ED"/>
      </svg>
    );
  }
  if (normalized === 'fastapi') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10.5" fill="#009688" />
        <path d="M12.5 4.5 7.5 13.5h4.5l-1 6.5 6-9.5h-4.5z" fill="#FFFFFF"/>
      </svg>
    );
  }
  if (normalized === 'dsa') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="5" r="3" fill="#A78BFA" fillOpacity="0.25"/>
        <circle cx="5" cy="19" r="3" fill="#A78BFA" fillOpacity="0.25"/>
        <circle cx="19" cy="19" r="3" fill="#A78BFA" fillOpacity="0.25"/>
        <path d="m7.2 16.8 3.6-9.6"/>
        <path d="m16.8 16.8-3.6-9.6"/>
      </svg>
    );
  }
  return null;
};

export const HeroDeveloperCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'status'>('profile');

  const coreSkills = ['TypeScript', 'React', 'Python', 'Node.js', 'PostgreSQL', 'Docker', 'FastAPI', 'DSA'];

  return (
    <div
      className="editorial-card"
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: 'linear-gradient(145deg, var(--surface-raised) 0%, var(--surface) 100%)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
        width: '100%',
        maxWidth: '440px',
        margin: '0 auto'
      }}
    >
      {/* Top Window Navigation Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '14px',
          marginBottom: '16px',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }} />
          <span
            className="font-mono"
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              marginLeft: '6px'
            }}
          >
            developer.profile.ts
          </span>
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          {(['profile', 'stack', 'status'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className="font-mono"
              style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                padding: '3px 8px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: activeTab === tab ? 'var(--accent-cyan)' : 'transparent',
                color: activeTab === tab ? '#070A0F' : 'var(--text-muted)',
                fontWeight: activeTab === tab ? 700 : 400,
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--ease-standard)'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Profile Overview */}
      {activeTab === 'profile' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <h3 style={{ fontSize: 'var(--text-lg)', margin: '0 0 2px 0', fontWeight: 650 }}>
              {profileData.name}
            </h3>
            <p className="font-mono" style={{ fontSize: '12px', color: 'var(--accent-cyan)', margin: 0 }}>
              Full-Stack &amp; Systems Developer
            </p>
          </div>

          <div
            className="font-mono"
            style={{
              fontSize: '12px',
              lineHeight: '1.6',
              padding: '12px 14px',
              backgroundColor: 'rgba(7, 10, 15, 0.6)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)'
            }}
          >
            <div><span style={{ color: 'var(--accent-blue)' }}>const</span> education = <span style={{ color: 'var(--text-primary)' }}>&quot;3rd-Yr B.Tech CSE @ Brainware&quot;</span>;</div>
            <div><span style={{ color: 'var(--accent-blue)' }}>const</span> location = <span style={{ color: 'var(--text-primary)' }}>&quot;Kolkata, India&quot;</span>;</div>
            <div><span style={{ color: 'var(--accent-blue)' }}>const</span> cgpa = <span style={{ color: 'var(--accent-cyan)' }}>8.64</span>;</div>
            <div><span style={{ color: 'var(--accent-blue)' }}>const</span> focus = <span style={{ color: 'var(--text-primary)' }}>&quot;Full-Stack Apps &amp; Practical AI&quot;</span>;</div>
          </div>
        </div>
      )}

      {/* Tab 2: Core Stack */}
      {activeTab === 'stack' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>
            PRIMARY TECHNOLOGIES &amp; TOOLS
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="font-mono"
                style={{
                  fontSize: '11px',
                  padding: '4px 9px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--surface-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {renderSkillLogo(skill)}
                {skill}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: '4px 0 0 0', lineHeight: 1.5 }}>
            Practical engineering experience with threat-aware architecture (NASSCOM) and algorithm design.
          </p>
        </div>
      )}

      {/* Tab 3: Current Status & Opportunities */}
      {activeTab === 'status' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-cyan)',
                boxShadow: '0 0 8px rgba(54, 207, 201, 0.6)'
              }}
            />
            <span className="font-mono" style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: 600 }}>
              Learn &amp; Explore new things
            </span>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
            Actively exploring modern architectures, distributed software, deep algorithms, and building real-world tools.
          </p>

          <div
            className="font-mono"
            style={{
              fontSize: '11px',
              padding: '10px 12px',
              backgroundColor: 'rgba(7, 10, 15, 0.6)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)'
            }}
          >
            <div>Email: skonar566@gmail.com</div>
            <div>Phone: +91 9907488093</div>
            <div>GitHub: github.com/souvikx18</div>
          </div>
        </div>
      )}

      {/* Bottom Status Readout */}
      <div
        className="font-mono"
        style={{
          fontSize: '10px',
          color: 'var(--text-muted)',
          marginTop: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '10px'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
          6 Verified Projects
        </span>
        <span style={{ color: 'var(--accent-cyan)' }}>Live &amp; Documented</span>
      </div>
    </div>
  );
};
