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
    title: '新宿アルタ前で乗車',
    description: 'じいや...もとい、ドライバーさんに出迎えられて華麗に乗車。周りの視線は気にしない😎',
    emoji: '🚗',
  },
  {
    time: '16:30',
    title: 'パーティー準備開始',
    description: '「本日の主役」タスキとバースデーハット着用。一人だって、誕生日は誕生日！',
    emoji: '🎁',
  },
  {
    time: '17:00',
    title: 'けやき坂到着',
    description: 'イルミネーション輝く六本木で記念撮影。恥ずかしいけど、思い出づくり！',
    emoji: '📸',
  },
  {
    time: '17:30',
    title: '東京タワーへ',
    description: 'シャンパン片手にくす玉引いて、ケーキ（のレプリカ）でお祝い。「ハッピーバースデートゥーミー♪」',
    emoji: '🥂',
  },
  {
    time: '18:00',
    title: 'お台場に到着',
    description: '広々としたリムジンでごろごろ。これ、私がリムジン史上初の「寝転がり客」？',
    emoji: '📍',
  },
  {
    time: '18:30',
    title: 'パーティー終了',
    description: '予定時間オーバーだけど、追加料金なし！一人リムジンパーティー、大成功！',
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
        OneRide Limousine 一人誕生日パーティー タイムライン
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