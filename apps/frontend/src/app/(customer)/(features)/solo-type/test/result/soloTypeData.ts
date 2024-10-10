export type SoloTypeData = {
  type: string;
  image: string;
  description: string;
};

export const soloTypeDataList: SoloTypeData[] = [
  {
      type: "アクティブチャレンジャー",
      image: "test_result_active.png",
      description: `アドベンチャー精神旺盛なあなた！🏃‍♂️💨
      休日はアウトドアアクティビティで体を動かすのが大好き
      新しいスポーツや趣味にも積極的にチャレンジ
      一人でも思い切り楽しめる行動力が魅力的✨`,
  },
  {
      type: "スペシャル体験エクスプローラー",
      image: "test_result_special.png",
      description: `現代の優雅な冒険者、それがあなた！
      財布の中身は「一生に一度の体験」のため💃
      街でリムジンを見れば「私の車かしら」とつぶやき、休日の予定は「気球で空中ピクニック」🌌
      周りはきっと羨望の眼差し👀`,
  },
  {
      type: "リラックス名人",
      image: "test_result_relax.png",
      description: `ゆったりとした時間を大切にするあなた🧘‍♀️
      カフェでの読書や美術館巡り、温泉旅行が至福のひととき
      自分のペースを大切にし、心地よい空間で過ごすのが得意
      周りの喧騒を忘れ、自分と向き合う時間を楽しむ達人🍵`,
  },
  {
      type: "グルメハンター",
      image: "test_result_gourmet.png",
      description: `食べることが人生の喜び、それがあなた！🍽️😋
      新しい料理店を開拓するのが週末の楽しみ
      一人で気兼ねなく、とっておきの一皿を堪能
      食べ歩きブログのフォロワーも多く、隠れた名店に詳しい🍖🍣`,
  }
];