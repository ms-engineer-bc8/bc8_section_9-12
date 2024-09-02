"use client";

import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/navigation";
import { useToken } from "@/app/commons/contexts/contexts";
import { ReviewProps, ReviewItem } from "@/app/commons/types/types";
import { uploadFile } from "../../../commons/images/s3/imageActions";
import LikeButton from "@/app/components/ui-elements/button/like/like";
import FavoriteButton from "@/app/components/ui-elements/button/favorite/favorite";
import { PinkButton } from "@/app/components/ui-elements/button/button";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_API_REVIEWS_URL}`;

export default function Reviews() {
    const { token } = useToken();
    const router = useRouter();

    if (token === ""){
        router.push("/login");
    }

    const {
        data: reviews,
        error,
        isLoading,
    } = useSWR<ReviewProps[]>(apiUrl, fetcher);
    const [reviewText, setReviewText] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [postError, setPostError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            console.log("画像を選ぶ:", selectedFile.name, selectedFile.type, selectedFile.size);
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
                console.log("画像プレビュー用URLを設定");
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleAddReview = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("handleAddReviewの呼び出し");
        setPostError(null);
        if (!reviewText.trim()) {
            setPostError("レビューテキストを入力してください。");
            return;
        }
        let imageUrl = "";
        if (file) {
            try {
                console.log("画像をアップロード中:", file.name);
                const formData = new FormData();
                formData.append("file", file);
                const result = await uploadFile(formData);
                imageUrl = result.url!;
                console.log("画像アップロード成功. URL:", imageUrl);
            } catch (error) {
                console.error("画像アップロードエラー:", error);
                setPostError("画像のアップロードに失敗しました。");
                return;
            }
        }

        const newReview: ReviewItem = {
            user_id: 1,
            text: reviewText,
            image: imageUrl || "",
        };

        console.log("Attempting to post review:", newReview);

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newReview),
            });
            console.log("Response status:", response.status);
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error response:", errorData);
                throw new Error(
                    errorData.message ||
                        `レビューの投稿に失敗しました: ${response.status} ${response.statusText}`
                );
            }
            const data = await response.json();
            console.log("成功:", data);
            mutate(apiUrl);
            setReviewText("");
            setFile(null);
            setPreviewUrl(null);
        } catch (error) {
            console.error("レビュー投稿エラー:", error);
        }
    };

    if (isLoading) return <div>ローディング中...</div>;
    if (error) return <div>エラーが発生しました: {error.message}</div>;
    if (!reviews) return <div>レビューが見つかりません</div>;

    const sortedReviews = [...reviews].sort((a, b) =>
        new Date(b.update_date).getTime() - new Date(a.update_date).getTime()
    );

    return (
        <div className="container mx-auto p-5">
            <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                <form onSubmit={handleAddReview} className="mb-8">
                    <textarea
                        className="w-full p-4 border rounded-lg mb-4 h-32"
                        placeholder="新しいレビューを書く..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    />
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="mb-4"
                    />
                    {previewUrl && (
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="mb-4 max-w-full h-auto"
                        />
                    )}
                    <PinkButton
                        type="submit"
                    >
                        レビューを投稿
                    </PinkButton>
                </form>

                {postError && <div className="text-red-500 mb-4">{postError}</div>}

                <div className="space-y-4">
                    {sortedReviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white border border-gray-200 rounded-lg p-4"
                        >
                            <p className="font-semibold">
                                {review.nickname}
                            </p>
                            <p className="text-gray-600 mt-2">{review.text}</p>
                            {review.image && (
                                <img
                                    src={review.image}
                                    alt="image"
                                    className="mt-4 max-w-full h-auto"
                                />
                            )}
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-sm text-gray-500">
                                    更新日:{" "}
                                    {new Date(
                                        review.update_date
                                    ).toLocaleDateString()}
                                </p>
                                <div className="flex space-x-4">
                                <span className="flex items-center">
                                    <LikeButton initialLikes={review.likes_count} />
                                </span>
                                <span className="flex items-center">
                                    <FavoriteButton initialFavorites={review.favorites_count} />
                                </span>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}