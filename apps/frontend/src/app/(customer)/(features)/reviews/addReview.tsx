import React, { useState } from "react";
import { ReviewItem, ReviewFormProps } from "@/app/commons/types/types";
import { mutate } from "swr";
import { PinkButton } from "@/app/components/ui-elements/button/button";

const ReviewForm: React.FC<ReviewFormProps> = ({ apiUrl }) => {
    const [reviewText, setReviewText] = useState("");

    const handleAddReview = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!reviewText.trim()) return;

        const newReview: ReviewItem = {
            user_id: 1,
            text: reviewText,
            image: "",
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newReview),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to post review");
            }
            const data = await response.json();
            console.log("Review posted successfully:", data);
            mutate(apiUrl);
            setReviewText("");
        } catch (error) {
            console.error("レビュー投稿エラー:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleAddReview} className="mb-8">
                <textarea
                    className="w-full p-4 border rounded-lg mb-4"
                    placeholder="新しいレビューを書く..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                />
                <PinkButton
                    type="submit"
                >
                    レビューを投稿
                </PinkButton>
            </form>
        </div>
    );
};

export default ReviewForm;
