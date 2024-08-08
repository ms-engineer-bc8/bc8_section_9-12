import React from "react";
import Heading from "@/app/components/ui-elements/heading";
import Link from "next/link";

const specialActivities = [
    { id: 1, company: "SkyDive", time: "朝", level: "中級" },
    { id: 2, company: "MountainTrek", time: "昼", level: "上級" },
    { id: 3, company: "OceanExplore", time: "夕方", level: "初級" },
    { id: 4, company: "CityAdventure", time: "夜", level: "中級" },
    { id: 5, company: "ForestRetreat", time: "早朝", level: "上級" },
    { id: 6, company: "DesertSafari", time: "深夜", level: "初級" },
];

const SpecialCompanyList = () => {
    return (
        <div>
            <Heading>スペシャル体験ソロ活</Heading>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {specialActivities.map((activity) => (
                        <Link
                            key={activity.id}
                            href={{
                                pathname: "/activity/2",
                                query: { company: activity.company },
                            }}
                        >
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-bold mb-2">
                                    {activity.company}
                                </h2>
                                <p>時間帯: {activity.time}</p>
                                <p>レベル: {activity.level}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecialCompanyList;
