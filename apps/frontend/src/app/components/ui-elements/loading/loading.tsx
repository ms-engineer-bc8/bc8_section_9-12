import React from "react";

interface SolocoLoadingProps {
    width?: number;
    height?: number;
    loadingText?: string;
}

const SolocoLoading: React.FC<SolocoLoadingProps> = ({
    width = 300,
    height = 150,
    loadingText = "ローディング中",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 700 300"
            width={width}
            height={height}
        >
            <svg
                version="1.1"
                id="レイヤー_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 700 350"
                style={{ width: "100%", height: "auto" }}
            >
                <defs>
                    <style>
                        {`
            .st0{fill:#494949;}
            .st1{fill:#FFFFFF;}
            @keyframes eyeMove {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(2px, 2px); }
            }
            @keyframes mouthMove {
                0%, 100% { transform: scale(1, 1); }
                50% { transform: scale(1.1, 0.9); }
            }
            @keyframes loadingDots {
                0%, 100% { opacity: 0; }
                50% { opacity: 1; }
            }
            .eye { animation: eyeMove 2s ease-in-out infinite; }
            .mouth { animation: mouthMove 2s ease-in-out infinite; }
            .loading-dot { animation: loadingDots 1.5s infinite; }
            .loading-dot:nth-child(2) { animation-delay: 0.5s; }
            .loading-dot:nth-child(3) { animation-delay: 1s; }
            .loading-text { font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; }
            `}
                    </style>
                </defs>
                <g transform="translate(0, -25)">
                    <path
                        className="st0"
                        d="M11.5,198.2l20.1-33.6c11,9.6,30.2,34.2,42.9,34.2c14.6,0,21.8-5.8,21.8-15c0-9.8-8.8-12.9-22.3-18.4l-20.1-8.6
            c-16.1-6.5-31.3-19.7-31.3-42.2c0-25.7,22.9-46.2,55.2-46.2c17.8,0,43,10.6,56.4,23.9L113,119.9c-10.2-7.8-23-21.3-35.2-21.3
            c-12.1,0-19.8,5-19.8,13.9c0,9.5,10.1,13,23.7,18.3l19.7,8c18.9,7.6,30.7,20.2,30.7,42.1c0,25.7-21.4,48-58.4,48
            C53.6,229.1,27.3,213,11.5,198.2z"
                    />
                    <path
                        className="st0"
                        d="M145.8,167.3c0-39.2,24.9-64.5,57.4-61.9c29.7,2.4,56.9,20.8,56.9,60c0,39.1-27.1,63.6-56.9,63.6
            S145.8,206.4,145.8,167.3z M224.9,167.3c0-20.4-7.3-35.7-21.6-33.7c-13.9,2-21.6,13.3-21.6,33.7s7.2,33.6,21.6,33.6
            C217.7,200.9,224.9,187.7,224.9,167.3z"
                    />
                    <path
                        className="st0"
                        d="M343.2,167.3c0-39.2,24.9-64.5,57.4-61.9c29.7,2.4,56.9,20.8,56.9,60c0,39.1-27.1,63.6-56.9,63.6
            S343.2,206.4,343.2,167.3z M422.3,167.3c0-20.4-7.3-35.7-21.6-33.7c-13.9,2-21.6,13.3-21.6,33.7s7.2,33.6,21.6,33.6
            S422.3,187.7,422.3,167.3z"
                    />
                    <path
                        className="st0"
                        d="M282.7,189.6l-5.2-128.9l46.4,0.6L317.6,191c0,7.5,3.5,9.9,6.3,9.9c1.3,0,5.8-6.1,7.8-6.5l0.6,31.8
            c-3.9,1.7-9.6,2.9-17.5,2.9C290.9,229.1,282.7,213.4,282.7,189.6z"
                    />
                    <path
                        className="st0"
                        d="M471.3,167.3c0-39.2,28.9-61.9,61.4-61.9c14.5,0,28.5,9.2,37.3,16.7l-11.7,24.6c-5.6-4.8-19-8.4-24.6-8.4
            c-16.8,0-26.6,8.5-26.6,28.9s10.9,29.3,26,29.3c7.7,0,15.7-9.1,21.8-14l18.5,32.4c-11.5,10.1-31,14.1-43.8,14.1
            C496.7,229.1,471.3,206.4,471.3,167.3z"
                    />
                    <ellipse
                        className="st0 eye"
                        cx="215.2"
                        cy="166.2"
                        rx="14.9"
                        ry="15.8"
                    />
                    <ellipse
                        className="st0 eye"
                        cx="413"
                        cy="166.2"
                        rx="14.9"
                        ry="15.8"
                    />
                    <path
                        className="st0"
                        d="M633.4,105.4c-32.6-2.7-57.4,22.7-57.4,61.9c0,39.1,27.6,61.8,57.4,61.8s56.9-24.5,56.9-63.6
            C690.3,126.2,663.1,107.9,633.4,105.4z"
                    />
                    <g className="mouth">
                        <path
                            className="st1"
                            d="M613.5,182.5l12.4-4.1c0,0,0.3-4.1-1-10.7s-2-7.3-3.3-9.5c-1.4-2.2-3.6-3.7-4.8-3.9c-1.2-0.2-3.3-0.2-3.9,0.1
                c-0.5,0.3-3.2,1.8-4,3.2c-0.8,1.4-2.1,3.1-1.7,7.8c0.4,4.8,1.9,8.7,2.6,10.7C610.4,178.3,613.5,182.5,613.5,182.5z"
                        />
                        <path
                            className="st1"
                            d="M626.9,180.8l-12.3,4.5c0,0,1.2,5,3.4,7.1c2.1,2.1,3.6,3,5.6,2.6c2.1-0.4,3.4-0.8,3.8-1.4s1.7-1.5,1.8-3.2
                c0.1-1.8-0.2-3.7-0.5-4.7s-0.5-1.8-0.8-2.6C627.6,182,626.9,180.7,626.9,180.8z"
                        />
                    </g>
                    <g className="mouth">
                        <path
                            className="st1"
                            d="M650.5,162.4l-12.8-2.2c0,0-0.9-4.1-0.6-10.7c0.3-6.6,0.9-7.5,1.9-9.9s3.1-4.2,4.2-4.6s3.3-0.7,3.8-0.4
                s3.5,1.3,4.4,2.6c1,1.3,2.6,2.7,2.8,7.5c0.3,4.8-0.6,8.9-1,11C652.9,157.8,650.5,162.4,650.5,162.4z"
                        />
                        <path
                            className="st1"
                            d="M637,162.7l12.8,2.6c0,0-0.5,5.1-2.3,7.5c-1.8,2.4-3.1,3.5-5.2,3.4c-2.1-0.1-3.4-0.3-4-0.8
                c-0.6-0.5-1.9-1.2-2.3-2.9c-0.3-1.7-0.4-3.7-0.2-4.7c0.2-1,0.2-1.9,0.4-2.7C636.4,164,637,162.6,637,162.7z"
                        />
                    </g>
                </g>
                <g transform="translate(250, 300)">
                    <text className="loading-text st0">
                        ローディング
                        <tspan className="loading-dot">.</tspan>
                        <tspan className="loading-dot">.</tspan>
                        <tspan className="loading-dot">.</tspan>
                    </text>
                </g>
            </svg>
        </svg>
    );
};

export default SolocoLoading;
