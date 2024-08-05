import React from "react";
import Heading from "@/app/components/ui-elements/heading";
import SubHeading from "@/app/components/ui-elements/subheading";

const Limousine = () => {
    return (
        <div className="container mx-auto p-5">
            <p className="text-center">プライベートな空間で特別なひとときを</p>
            <Heading>SkyDrive</Heading>
            <p className="text-center">
                自由が丘駅から徒歩1分に位置する「SkyDrive」。豪華なレザーシートでくつろぎ、最新のエンタメを満喫しながら、まるで映画の主人公に。お一人さま専用のリムジンで、ちょっとしたセレブ気分を味わってください。特別な時間を「OneRide
                Limousine」でどうぞ！
            </p>
            <SubHeading>PLAN</SubHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <p>写真</p>
                </div>
                <div>
                    <p>
                        【新宿ALTA発】東京の夜景を独り占め！ソロリムジンプラン（ドレスコード付き）
                    </p>
                    <h4>サービス</h4>
                    <li>ウェルカムドリンク</li>
                    <li>写真撮影</li>
                    <li>ドレスコード</li>
                    <h4>25,000円</h4>
                    <button>予約する</button>
                </div>
            </div>
        </div>
    );
};

export default Limousine;
