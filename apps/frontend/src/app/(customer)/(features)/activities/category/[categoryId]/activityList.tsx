import React from "react";
import { ActivitiesProps } from "@/app/commons/types/types";
import { ActivityListProps } from "@/app/commons/types/types";
import ActivityGroup from "./activityGroup";
import { mockActivities } from "./mockData";

const ActivityList: React.FC<ActivityListProps> = ({}) => {

    // TODO：DBにデータ入ったら削除
    const normalizedActivities = mockActivities;

    // TODO：DBにデータ入ったら必要に応じて使う
    // const normalizedActivities = Array.isArray(activities) ? activities : activities ? [activities] : [];

    const groupedActivities = normalizedActivities.reduce((acc, activity) => {
        if (!acc[activity.subcategory]) {
            acc[activity.subcategory] = [];
        }
        acc[activity.subcategory].push(activity);
        return acc;
    }, {} as Record<string, ActivitiesProps[]>);

    if (normalizedActivities.length === 0) {
        return <div>アクティビティが見つかりませんでした</div>;
    }

    return (
        <div className="container mx-auto p-3 sm:px-3 max-w-5xl">
            {Object.entries(groupedActivities).map(([subcategory, subcategoryActivities]) => (
                <ActivityGroup
                    key={subcategory}
                    subcategory={subcategory}
                    activities={subcategoryActivities}
                />
            ))}
        </div>
    );
};

export default ActivityList;
