import React, { useState, useRef, useEffect } from 'react';
import { LexisMessage } from '../../types/lexis';
import { askLexis } from '../../services/lexisService';

interface LexisChatProps {
  onClose: () => void;
}

export const LexisChat: React.FC<LexisChatProps> = ({ onClose }) => {
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
  
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  // Focus input on mount
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
      const response = await askLexis({ message: textToSend });
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
      const errorMessage: LexisMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: 'Lexis encountered an unexpected processing error. You can continue browsing the portfolio or reach Souvik directly.',
        isFallback: true,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMessage]);
      setAriaAnnouncement('Lexis encountered an unexpected error.');
    } finally {
      setIsThinking(false);
    }
  };

  const suggestedPrompts = [
    'What has Souvik built?',
    'Explain Veridyn.',
    'What is DecisionOS?',
    'Technical Stack',
    'Education & CGPA',
    'How can I contact him?'
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-sm)'
      }}
    >
      {/* Hidden screen-reader announcer */}
      <div className="sr-only" aria-live="polite" role="status">
        {ariaAnnouncement}
      </div>

      {/* Header */}
      <div
        style={{
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--bg-primary)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            className="font-mono"
            style={{
              padding: '2px 6px',
              backgroundColor: 'var(--accent-cyan)',
              color: '#070A0F',
              fontSize: '11px',
              fontWeight: 700,
              borderRadius: 'var(--radius-sm)'
            }}
          >
            LX
          </span>
          <div>
            <h2 style={{ fontSize: 'var(--text-base)', margin: 0, fontWeight: 650 }}>
              LEXIS
            </h2>
            <p
              className="font-mono"
              style={{
                fontSize: '10px',
                color: 'var(--text-muted)',
                margin: 0,
                letterSpacing: 'var(--tracking-wide)'
              }}
            >
              PORTFOLIO ASSISTANT &bull; VERIFIED KNOWLEDGE
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="btn-secondary"
          style={{
            minHeight: '32px',
            padding: '0 10px',
            fontSize: 'var(--text-xs)'
          }}
          aria-label="Close Lexis assistant dialog"
        >
          ESC &times;
        </button>
      </div>

      {/* Messages Scroll View */}
      <div
        tabIndex={0}
        aria-label="Conversation messages"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        {messages.map(msg => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '88%'
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '10px',
                color: 'var(--text-muted)',
                marginBottom: '4px',
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start'
              }}
            >
              {msg.role === 'user' ? 'YOU' : 'LEXIS'}
            </span>

            <div
              style={{
                padding: '12px 16px',
                backgroundColor: msg.role === 'user' ? 'var(--accent-blue)' : 'var(--surface)',
                color: msg.role === 'user' ? '#FFFFFF' : 'var(--text-primary)',
                border: '1px solid',
                borderColor: msg.role === 'user' ? 'var(--accent-blue)' : 'var(--border)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--leading-relaxed)',
                whiteSpace: 'pre-wrap'
              }}
            >
              {msg.content}

              {/* Source References (76.11) with Unicode Arrow */}
              {msg.sources && msg.sources.length > 0 && (
                <div
                  style={{
                    marginTop: '12px',
                    paddingTop: '8px',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    alignItems: 'center'
                  }}
                >
                  <span
                    className="font-mono"
                    style={{ fontSize: '10px', color: 'var(--accent-bronze)', fontWeight: 600 }}
                  >
                    SOURCES:
                  </span>
                  {msg.sources.map((src, sIdx) => (
                    <a
                      key={sIdx}
                      href={src.url}
                      className="editorial-link"
                      style={{ fontSize: '11px', color: 'var(--text-secondary)' }}
                      onClick={onClose}
                    >
                      <span>{src.title}</span> <span aria-hidden="true">&#x2197;</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isThinking && (
          <div
            style={{
              alignSelf: 'flex-start',
              padding: '10px 16px',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-muted)'
            }}
            className="font-mono"
          >
            Lexis is synthesizing response&hellip;
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts with hidden scrollbar */}
      <div
        className="no-scrollbar"
        style={{
          padding: '10px 20px',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-primary)',
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}
      >
        {suggestedPrompts.map((prompt, pIdx) => (
          <button
            key={pIdx}
            type="button"
            onClick={() => handleSend(prompt)}
            className="font-mono"
            style={{
              fontSize: '11px',
              padding: '6px 12px',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--surface)',
              color: 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all var(--duration-fast) var(--ease-standard)'
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSend();
        }}
        style={{
          padding: '16px 20px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          gap: '10px',
          backgroundColor: 'var(--surface)'
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          maxLength={400}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask Lexis about projects, stack, or background..."
          aria-label="Ask Lexis a question about Souvik's portfolio"
          style={{
            flex: 1,
            minHeight: '44px',
            padding: '0 14px',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-sm)',
            fontFamily: 'var(--font-body)'
          }}
        />

        <button
          type="submit"
          disabled={!input.trim() || isThinking}
          className="btn-primary"
          style={{
            minHeight: '44px',
            padding: '0 18px',
            fontSize: 'var(--text-xs)',
            opacity: !input.trim() || isThinking ? 0.6 : 1
          }}
        >
          SEND &rarr;
        </button>
      </form>
    </div>
  );
};
