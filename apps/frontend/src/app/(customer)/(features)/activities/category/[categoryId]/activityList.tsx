import React from "react";
import ActivityCard from "@/app/components/ui-elements/activity/activity";
import { ActivitiesProps } from "@/app/commons/types/types";

type ActivityListProps = {
    activities: ActivitiesProps[];
};

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
    console.log("Received activities:", activities); // デバッグ用ログ

    const groupedActivities = activities.reduce((acc, activity) => {
        if (!acc[activity.subcategory]) {
            acc[activity.subcategory] = [];
        }
        acc[activity.subcategory].push(activity);
        return acc;
    }, {} as Record<string, ActivitiesProps[]>);

    return (
        <div className="space-y-8">
            {Object.entries(groupedActivities).map(([subcategory, subcategoryActivities]) => (
                <div key={subcategory} className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800 px-4">{subcategory}</h2>
                    <div className="overflow-x-auto pb-4">
                        <div className="flex space-x-4 px-4">
                            {subcategoryActivities.map((activity) => (
                                <ActivityCard key={activity.id} activity={activity} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivityList;