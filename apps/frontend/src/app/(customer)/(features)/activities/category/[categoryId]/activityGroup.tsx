import React, { useRef, useState, useEffect } from "react";
import { ActivityGroupProps } from "@/app/commons/types/types";
import ActivityCard from "@/app/components/ui-elements/Activity/Activity";
import ScrollButton from "@/app/components/ui-elements/Button/Scroll/Scroll";

const ActivityGroup: React.FC<ActivityGroupProps> = ({
    subcategory,
    activities,
}) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.clientWidth;
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const checkScrollPosition = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollLeft <
                    container.scrollWidth - container.clientWidth
            );
        }
    };

    useEffect(() => {
        checkScrollPosition();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", checkScrollPosition);
            return () =>
                container.removeEventListener("scroll", checkScrollPosition);
        }
    }, [activities]);

    return (
        <div className="space-y-4 mb-8">
            <h2 className="font-bold text-gray-800 px-4">{subcategory}</h2>
            <div className="relative">
                <div
                    className="overflow-x-hidden pb-4"
                    ref={scrollContainerRef}
                >
                    <div className="flex space-x-4 px-4 transition-transform duration-300 ease-in-out">
                        {activities.map((activity) => (
                            <ActivityCard
                                key={activity.id}
                                activity={activity}
                            />
                        ))}
                    </div>
                </div>
                <ScrollButton
                    direction="left"
                    onClick={() => scroll("left")}
                    show={showLeftArrow}
                />
                <ScrollButton
                    direction="right"
                    onClick={() => scroll("right")}
                    show={showRightArrow}
                />
            </div>
        </div>
    );
};

export default ActivityGroup;
