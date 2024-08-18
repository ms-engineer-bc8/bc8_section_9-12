"use client";

import React from "react";
import useSWR from "swr";
import ActivityList from "./activityList";
import { ActivitiesProps } from "@/app/commons/types/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ActivityPage: React.FC = () => {
    const categoryId = 2;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_ACTIVITIES_URL}/${categoryId}`;
    const {
        data: activities,
        error,
        isLoading,
    } = useSWR<ActivitiesProps[]>(apiUrl, fetcher);

    if (isLoading) return <div>ローディング中...</div>;
    if (error) return <div>エラーが発生しました</div>;
    if (!activities || activities.length === 0) return <div>アクティビティが見つかりません</div>;

    return (
        <div>
            <h1>アクティビティ一覧</h1>
            <ActivityList activities={activities} />
        </div>
    );
};

export default ActivityPage;

// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import Heading from "@/app/components/ui-elements/heading";
// import useSWR from "swr";
// import { ActivitiesProps } from "@/app/commons/types/types";
// import ActivityCard from "@/app/components/ui-elements/activity/activity";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const ActivitiesList = () => {
//     const fetcher = (url: string) => fetch(url).then((res) => res.json());
//     const categoryId = 2;
//     const apiUrl = `${process.env.NEXT_PUBLIC_API_ACTIVITIES_URL}/${categoryId}`;
//     const {
//         data: activities,
//         error,
//         isLoading,
//     } = useSWR<ActivitiesProps[]>(apiUrl, fetcher);

//     const scrollRef = useRef<HTMLDivElement>(null);
//     const [showArrows, setShowArrows] = useState(false);

//     useEffect(() => {
//         const checkOverflow = () => {
//             if (scrollRef.current) {
//                 setShowArrows(
//                     scrollRef.current.scrollWidth >
//                         scrollRef.current.clientWidth
//                 );
//             }
//         };

//         checkOverflow();
//         window.addEventListener("resize", checkOverflow);
//         return () => window.removeEventListener("resize", checkOverflow);
//     }, [activities]);

//     const scroll = (direction: "left" | "right") => {
//         if (scrollRef.current) {
//             const scrollAmount = direction === "left" ? -200 : 200;
//             scrollRef.current.scrollBy({
//                 left: scrollAmount,
//                 behavior: "smooth",
//             });
//         }
//     };

//     if (isLoading) return <div>ローディング中...</div>;
//     if (error) return <div>エラーが発生しました</div>;
//     if (!activities) return <div>アクティビティが見つかりません</div>;

//     return (
//         <div className="relative">
//             <Heading>スペシャル体験ソロ活✨</Heading>
//             <div className="container mx-auto px-12 mt-8 overflow-hidden">
//                 <div
//                     ref={scrollRef}
//                     className="flex gap-4 py-4 overflow-x-scroll whitespace-nowrap scrolling-touch"
//                     style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//                 >
//                     <style jsx>{`
//                         div::-webkit-scrollbar {
//                             display: none;
//                         }
//                     `}</style>
//                     {activities.map((activity) => (
//                         <ActivityCard key={activity.id} activity={activity} />
//                     ))}
//                 </div>
//             </div>
//             {showArrows && (
//                 <>
//                     <button
//                         onClick={() => scroll("left")}
//                         className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
//                     >
//                         <ChevronLeft size={24} />
//                     </button>
//                     <button
//                         onClick={() => scroll("right")}
//                         className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
//                     >
//                         <ChevronRight size={24} />
//                     </button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default ActivitiesList;
