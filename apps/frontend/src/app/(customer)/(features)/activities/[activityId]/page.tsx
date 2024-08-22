"use client";

import React from "react";
import { ActivityProps } from "@/app/commons/types/types";
import Heading from "@/app/components/ui-elements/heading";
import SubHeading from "@/app/components/ui-elements/subheading";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import LimousineImage from "../../../../commons/images/activities/limousine.jpg";
import OneRideLimousineTimeline from "./timeline";

const Limousine: React.FC = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const activityId = 1;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_ACTIVITY_URL}/${activityId}`;
    const {
        data: activity,
        error,
        isLoading,
    } = useSWR<ActivityProps>(apiUrl, fetcher);

    if (isLoading) return <div>ローディング中...</div>;
    if (error) return <div>エラーが発生しました</div>;
    if (!activity) return <div>アクティビティが見つかりません</div>;

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="relative w-full h-96">
                    <Image
                        src={LimousineImage}
                        alt={activity.provider_name}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                    />
                </div>
                <div className="p-8">
                    <Heading>{activity.provider_name}</Heading>
                    <SubHeading>{activity.title}</SubHeading>
                    <p className="mt-4 text-lg text-gray-700">
                        {activity.description}
                    </p>

                    <div className="mt-12">
                        <SubHeading>Solocoのおすすめポイント</SubHeading>
                        <div className="mt-6 space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-pink-500 mb-2">
                                    1.
                                    東京の夜景とリムジンにしかない音響と向き合える
                                </h3>
                                <p className="text-gray-700">
                                    さあ、準備はいいですか？OneRide
                                    Limousineに乗り込んだ瞬間、あなたは東京の夜景VIPルームへワープします！でも、ちょっと待って。これ、本当に車？それとも動く個室カラオケ？
                                    まず、窓から見える夜景。ネオンきらめく東京の街並みが、まるでイルミネーションショーのように広がります。「わー、東京タワーだ！」なんて叫んでも恥ずかしくありません。だって、誰も聞いていませんからね（笑）。
                                    そして音響システム。ボリュームを上げれば、まるで自分が音楽に飲み込まれるような感覚。ベースが効きすぎて体が震える？大丈夫、誰にもバレません。思う存分、口パクで熱唱しちゃいましょう！
                                    車内照明は自由自在。気分はディスコ？はたまた幻想的な雰囲気？あなた次第で、この箱型の魔法の空間は変幻自在。
                                    そう、ここではあなたが主役で、監督で、観客。誰にも邪魔されない、至福の「自分エンターテイメント」の時間が始まるのです！
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-pink-500 mb-2">
                                    2.
                                    誰かに見せるわけではない、自分が自分のためにするドレスアップを楽しめる
                                </h3>
                                <p className="text-gray-700">
                                    「今日のドレスコードは...自分！」 OneRide
                                    Limousineは、あなたの秘密の変身部屋。普段着ないあのドレス、着てみたかったあのスーツ、思い切って着ちゃいましょう。誰も見ていないなんて寂しい？いいえ、むしろチャンス！
                                    鏡張りの内装で、360度どこを向いてもスーパースター気分。「鏡よ鏡、世界で一番美しいのは？」って聞いたら、「あなたです！」って答えが返ってきそう（実際には返ってきませんが）。
                                    自撮りタイムも忘れずに。「今日の私、イケてる！」というショットを撮りまくりましょう。SNSにアップしなくてもいいんです。これは、あなたと未来のあなたとの秘密の思い出なのです。
                                    気分を上げるなら、車内BGMとライトにもこだわりを。ボリュームMAXで「アイム・クイーン・オブ・ザ・ワールド！」と叫んでみては？Echo機能はついていませんが、きっと心の中でリピートされるはず。
                                    OneRide
                                    Limousineで過ごす時間は、まさに「私が私を楽しむ」至福のひととき。普段の自分にちょっとだけ反旗を翻す、そんなちょっぴりワガママな自分を思い切り楽しんでください！
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <SubHeading>
                            OneRide Limousine タイムラインプレビュー
                        </SubHeading>
                        <div className="mt-6 border border-pink-200 rounded-lg overflow-hidden">
                            <OneRideLimousineTimeline />
                        </div>
                    </div>

                    <div className="mt-12">
                        <SubHeading>会社情報</SubHeading>
                        <div className="mt-4 space-y-2 text-gray-700">
                            <p>
                                <strong>会社名:</strong> OneRide Limousine
                            </p>
                            <p>
                                <strong>メール:</strong>{" "}
                                oneride-limousine@example.com
                            </p>
                            <p>
                                <strong>電話:</strong> 312345678
                            </p>
                            <p>
                                <strong>住所:</strong>{" "}
                                東京都江戸川区南葛西2-1-25
                            </p>
                            <p>
                                <strong>ウェブサイト:</strong>{" "}
                                <a
                                    href="https://star-limo.jp/"
                                    className="text-pink-500 hover:underline"
                                >
                                    https://star-limo.jp/
                                </a>
                            </p>
                            <p>
                                <strong>営業時間:</strong> 年中無休 10:00～19:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Limousine;
