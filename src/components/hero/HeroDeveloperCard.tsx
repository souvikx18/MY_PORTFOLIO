import React, { useState } from 'react';
import { profileData } from '../../data';

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--surface-elevated)',
                border: '1px solid var(--border-active)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '16px',
                color: 'var(--accent-cyan)'
              }}
            >
              {profileData.initials}
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--text-lg)', margin: '0 0 2px 0', fontWeight: 650 }}>
                {profileData.name}
              </h3>
              <p className="font-mono" style={{ fontSize: '12px', color: 'var(--accent-cyan)', margin: 0 }}>
                Full-Stack &amp; Systems Developer
              </p>
            </div>
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
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--surface-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)'
                }}
              >
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
