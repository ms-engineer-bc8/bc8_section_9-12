import React from 'react';

interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ children, className = '' }) => {
  return (
    <>
      <div className={`speech-bubble bg-pink-50 p-6 rounded-3xl relative ${className}`}>
        {children}
      </div>
      <style jsx>{`
        .speech-bubble {
          position: relative;
        }
        .speech-bubble::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 20px solid transparent;
          border-bottom: 20px solid transparent;
          border-right: 20px solid #fef2f2; /* bg-pink-50 に対応する色 */
        }
        @media (max-width: 768px) {
          .speech-bubble::before {
            left: 50%;
            top: -20px;
            transform: translateX(-50%);
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 20px solid #fef2f2;
            border-top: none;
          }
        }
      `}</style>
    </>
  );
};

export default SpeechBubble;