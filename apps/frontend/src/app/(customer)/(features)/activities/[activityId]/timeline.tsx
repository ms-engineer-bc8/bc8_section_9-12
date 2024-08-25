import React from "react";

interface TimelineEvent {
    time: string;
    title: string;
    description: string;
    emoji: string;
}

interface TimelineItemProps extends TimelineEvent {
    isLast: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    time: '15:30',
    title: '乗車前のドレスアップ',
    description: 'ヘアメイク＆スタイリングで憧れのドレスに。鏡に映る自分に思わずうっとり。今夜は私が主役、ソロ活の華やかな幕開けです💄👗✨',
    emoji: '👸',
  },
  {
    time: '16:30',
    title: '自由が丘駅で乗車',
    description: '優雅に到着したリムジンに乗り込みます。豪華な内装にうっとり。お気に入りの音楽と共に、特別な時間の始まりです🎶',
    emoji: '🚗',
  },
  {
    time: '17:00',
    title: 'けやき坂到着',
    description: 'イルミネーション輝く六本木で記念撮影。ドレス姿で注目の的に。恥ずかしさも忘れ、最高の"ソロ活ショット"をゲット！✨',
    emoji: '📸',
  },
  {
    time: '17:30',
    title: '東京タワーへ',
    description: 'シャンパンを片手に、東京タワーをバックに華やかなバースデー演出。紙吹雪舞う中、ケーキのキャンドルを吹き消しました🎂',
    emoji: '🎂',
  },
  {
    time: '18:00',
    title: 'お台場に到着',
    description: '夕暮れのお台場の絶景に感動。ゆりかもめとレインボーブリッジの光が海面に映る夜景を満喫。静かな時間の中で、大人の誕生日を実感🌃',
    emoji: '🌉',
  },
];

const TimelineItem: React.FC<TimelineItemProps> = ({
    time,
    title,
    description,
    emoji,
    isLast,
}) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-6">
            <div className="text-4xl mb-2">{emoji}</div>
            {!isLast && <div className="w-px h-full bg-pink-300"></div>}
        </div>
        <div className="pb-10">
            <p className="text-sm text-pink-300 font-semibold mb-1">{time}</p>
            <h3 className="text-xl font-bold text-pink-500 mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    </div>
);

const OneRideLimousineTimeline: React.FC = () => {
    return (
        <div>
            <div className="max-w-2xl mx-auto">
                {timelineEvents.map((event, index) => (
                    <TimelineItem
                        key={index}
                        {...event}
                        isLast={index === timelineEvents.length - 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default OneRideLimousineTimeline;
