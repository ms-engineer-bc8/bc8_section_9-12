import React from 'react';

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
    time: '16:00',
    title: '自由が丘駅前で乗車',
    description: 'じいや...もとい、ドライバーの佐々木さんに出迎えられて華麗に乗車。目立って仕方ないけれど、周りの視線は気にしない😎 だって今日は私は女王様👑 ',
    emoji: '🚗',
  },
  {
    time: '16:30',
    title: 'BGMの設定',
    description: 'リムジンの乗り心地に慣れたら、BGMを設定！音響が素晴らしく、音に包まれている感覚✨最初の曲は竹内まりやの「Plastic love」にしたよ✌️エモい...✨',
    emoji: '🎵',
  },
  {
    time: '17:00',
    title: 'けやき坂到着',
    description: 'イルミネーション輝く六本木で記念撮影。ドラマの撮影かと思われたのか、ちょっと目立ったけど、素晴らしいソロ活写真をおさめました〜✌️ 後でSolocoのアプリにアップしよう...',
    emoji: '📸',
  },
  {
    time: '17:30',
    title: '東京タワーへ',
    description: 'サービスで付いてきたシャンパン片手に、自前で準備した煙の出ないくす玉を引いて、ケーキでお祝い。「ハッピーバースデートゥーミー🎵」',
    emoji: '🥂',
  },
  {
    time: '18:00',
    title: 'お台場に到着',
    description: '東京に10年住んでいるけど、お台場の夜景をこんなにじっくり眺めたのは初めて。一生忘れない誕生日の思い出になりました！',
    emoji: '📍',
  },
  {
    time: '18:30',
    title: 'パーティー終了',
    description: '約一人リムジンパーティー、大成功！',
    emoji: '🎂',
  },
];

const TimelineItem: React.FC<TimelineItemProps> = ({ time, title, description, emoji, isLast }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-6">
      <div className="text-4xl mb-2">{emoji}</div>
      {!isLast && <div className="w-px h-full bg-pink-300"></div>}
    </div>
    <div className="pb-10">
      <p className="text-sm text-pink-600 font-semibold mb-1">{time}</p>
      <h3 className="text-xl font-bold text-pink-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const OneRideLimousineTimeline: React.FC = () => {
  return (
    <div className="bg-pink-50 min-h-screen py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-12 text-pink-800">
        MEGUMIのソロリムジン誕生日🎂
      </h1>
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