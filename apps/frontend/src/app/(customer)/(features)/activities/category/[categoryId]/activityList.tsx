import React, { useRef, useState, useEffect } from "react";
import ActivityCard from "@/app/components/ui-elements/activity/activity";
import { ActivitiesProps } from "@/app/commons/types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ActivityListProps = {
    activities: ActivitiesProps[];
};

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

    const groupedActivities = activities.reduce((acc, activity) => {
        if (!acc[activity.subcategory]) {
            acc[activity.subcategory] = [];
        }
        acc[activity.subcategory].push(activity);
        return acc;
    }, {} as Record<string, ActivitiesProps[]>);

    const scroll = (containerIndex: number, direction: "left" | "right") => {
        const container = scrollContainerRefs.current[containerIndex];
        if (container) {
            const scrollAmount = container.clientWidth;
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const checkScrollPosition = (containerIndex: number) => {
        const container = scrollContainerRefs.current[containerIndex];
        if (container) {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollLeft <
                    container.scrollWidth - container.clientWidth
            );
        }
    };

    useEffect(() => {
        scrollContainerRefs.current.forEach((_, index) =>
            checkScrollPosition(index)
        );
    }, [activities]);

    return (
      <div className="container m-8 mx-auto px-2 sm:px-3">
            {Object.entries(groupedActivities).map(
                ([subcategory, subcategoryActivities], index) => (
                    <div key={subcategory} className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800 px-10">
                            {subcategory}
                        </h2>
                        <div className="relative">
                            <div
                                className="overflow-x-auto pb-4 scrollbar-hide"
                                ref={(el) =>
                                    (scrollContainerRefs.current[index] = el)
                                }
                                onScroll={() => checkScrollPosition(index)}
                            >
                                <div className="flex space-x-4 px-10">
                                    {subcategoryActivities.map((activity) => (
                                        <ActivityCard
                                            key={activity.id}
                                            activity={activity}
                                        />
                                    ))}
                                </div>
                            </div>
                            {showLeftArrow && (
                                <button
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                                    onClick={() => scroll(index, "left")}
                                    aria-label="Scroll left"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            )}
                            {showRightArrow && (
                                <button
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                                    onClick={() => scroll(index, "right")}
                                    aria-label="Scroll right"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ActivityList;
