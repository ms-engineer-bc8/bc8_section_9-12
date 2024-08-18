import React from "react";

interface SolocoLoadingProps {
    width?: number;
    height?: number;
    loadingText?: string;
}

const SolocoLoading: React.FC<SolocoLoadingProps> = ({
    width = 700,
    height = 350,
    loadingText = "ローディング中",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 350"
            width={width}
            height={height}
        >
            <style>
                {`
          @keyframes appear { from { opacity: 0; } to { opacity: 1; } }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          @keyframes blink { 0%, 90%, 100% { transform: scaleY(1); } 95% { transform: scaleY(0.1); } }
          .letter { opacity: 0; animation: appear 0.5s forwards, bounce 2s infinite; }
          .letter:nth-child(1) { animation-delay: 0.1s, 0.6s; }
          .letter:nth-child(2) { animation-delay: 0.2s, 0.7s; }
          .letter:nth-child(3) { animation-delay: 0.3s, 0.8s; }
          .letter:nth-child(4) { animation-delay: 0.4s, 0.9s; }
          .letter:nth-child(5) { animation-delay: 0.5s, 1.0s; }
          .letter:nth-child(6) { animation-delay: 0.6s, 1.1s; }
          .eye { animation: blink 3s infinite; }
          .loading-text { font-family: Arial, sans-serif; font-size: 24px; fill: #494949; }
          .dot { opacity: 0; animation: appear 0.3s infinite alternate; }
          .dot:nth-child(2) { animation-delay: 0.1s; }
          .dot:nth-child(3) { animation-delay: 0.2s; }
          .dot:nth-child(4) { animation-delay: 0.3s; }
        `}
            </style>

            <g fill="#494949">
                <path
                    className="letter"
                    d="M11.5,199.7l20.1-33.6c11,9.6,30.2,34.2,42.9,34.2c14.6,0,21.8-5.8,21.8-15c0-9.8-8.8-12.9-22.3-18.4 l-20.1-8.6c-16.1-6.5-31.3-19.7-31.3-42.2c0-25.7,22.9-46.2,55.2-46.2c17.8,0,43,10.6,56.4,23.9L113,121.3 c-10.2-7.8-23-21.3-35.2-21.3c-12.1,0-19.8,5-19.8,13.9c0,9.5,10.1,13,23.7,18.3l19.7,8c18.9,7.6,30.7,20.2,30.7,42.1 c0,25.7-21.4,48-58.4,48C53.6,230.5,27.3,214.4,11.5,199.7z"
                />

                <path
                    className="letter"
                    d="M145.8,168.7c0-39.2,24.9-64.5,57.4-61.9c29.7,2.4,56.9,20.8,56.9,60c0,39.1-27.1,63.6-56.9,63.6 S145.8,207.8,145.8,168.7z M224.9,168.7c0-20.4-7.3-35.7-21.6-33.7c-13.9,2-21.6,13.3-21.6,33.7s7.2,33.6,21.6,33.6 C217.7,202.3,224.9,189.1,224.9,168.7z"
                />
                <ellipse
                    className="letter"
                    cx="215.2"
                    cy="167.6"
                    rx="14.9"
                    ry="15.8"
                />

                <path
                    className="letter"
                    d="M343.2,168.7c0-39.2,24.9-64.5,57.4-61.9c29.7,2.4,56.9,20.8,56.9,60c0,39.1-27.1,63.6-56.9,63.6 S343.2,207.8,343.2,168.7z M422.3,168.7c0-20.4-7.3-35.7-21.6-33.7c-13.9,2-21.6,13.3-21.6,33.7s7.2,33.6,21.6,33.6 S422.3,189.1,422.3,168.7z"
                />
                <ellipse
                    className="letter"
                    cx="413"
                    cy="167.6"
                    rx="14.9"
                    ry="15.8"
                />

                <path
                    className="letter"
                    d="M575.9,168.7c0-39.2,24.9-64.5,57.4-61.9c29.7,2.4,56.9,20.8,56.9,60c0,39.1-27.1,63.6-56.9,63.6 S575.9,207.8,575.9,168.7z M655,168.7c0-20.4-7.3-35.7-21.6-33.7c-13.9,2-21.6,13.3-21.6,33.7s7.2,33.6,21.6,33.6 C647.8,202.3,655,189.1,655,168.7z"
                />
                <ellipse
                    className="letter"
                    cx="634.9"
                    cy="161.9"
                    rx="35.5"
                    ry="45.1"
                />

                <path
                    className="letter"
                    d="M282.7,191l-5.2-128.9l46.4,0.6l-6.3,129.8c0,7.5,3.5,9.9,6.3,9.9c1.3,0,5.8-6.1,7.8-6.5l0.6,31.8 c-3.9,1.7-9.6,2.9-17.5,2.9C290.9,230.5,282.7,214.8,282.7,191z"
                />

                <path
                    className="letter"
                    d="M471.3,168.7c0-39.2,28.9-61.9,61.4-61.9c14.5,0,28.5,9.2,37.3,16.7l-11.7,24.6c-5.6-4.8-19-8.4-24.6-8.4 c-16.8,0-26.6,8.5-26.6,28.9s10.9,29.3,26,29.3c7.7,0,15.7-9.1,21.8-14l18.5,32.4c-11.5,10.1-31,14.1-43.8,14.1 C496.7,230.5,471.3,207.8,471.3,168.7z"
                />
            </g>

            <g className="eye">
                <path
                    fill="#FFFFFF"
                    d="M615.5,188l12.4-4.1c0,0,0.3-4.1-1-10.7s-2-7.3-3.3-9.5c-1.4-2.2-3.6-3.7-4.8-3.9c-1.2-0.2-3.3-0.2-3.9,0.1 c-0.5,0.3-3.2,1.8-4,3.2c-0.8,1.4-2.1,3.1-1.7,7.8c0.4,4.8,1.9,8.7,2.6,10.7C612.4,183.8,615.5,188,615.5,188z"
                />
                <path
                    fill="#FFFFFF"
                    d="M628.9,186.3l-12.3,4.5c0,0,1.2,5,3.4,7.1c2.1,2.1,3.6,3,5.6,2.6s3.4-0.8,3.8-1.4c0.5-0.5,1.7-1.5,1.8-3.2 c0.1-1.8-0.2-3.7-0.5-4.7s-0.5-1.8-0.8-2.6C629.6,187.5,628.9,186.2,628.9,186.3z"
                />
            </g>

            <g className="eye">
                <path
                    fill="#FFFFFF"
                    d="M652.5,167.9l-12.8-2.2c0,0-0.9-4.1-0.6-10.7s0.9-7.5,1.9-9.9s3.1-4.2,4.2-4.6s3.3-0.7,3.8-0.4 s3.5,1.3,4.4,2.6c1,1.3,2.6,2.7,2.8,7.5c0.3,4.8-0.6,8.9-1,11C654.9,163.3,652.5,167.9,652.5,167.9z"
                />
                <path
                    fill="#FFFFFF"
                    d="M639,168.2l12.8,2.6c0,0-0.5,5.1-2.3,7.5s-3.1,3.5-5.2,3.4c-2.1-0.1-3.4-0.3-4-0.8c-0.6-0.5-1.9-1.2-2.3-2.9 c-0.3-1.7-0.4-3.7-0.2-4.7c0.2-1,0.2-1.9,0.4-2.7C638.4,169.5,638.9,168.1,639,168.2z"
                />
            </g>

            <text x="280" y="300" className="loading-text">
                {loadingText}
            </text>
            <text x="460" y="300" className="loading-text">
                <tspan className="dot">.</tspan>
                <tspan className="dot">.</tspan>
                <tspan className="dot">.</tspan>
                <tspan className="dot">.</tspan>
            </text>
        </svg>
    );
};

export default SolocoLoading;
