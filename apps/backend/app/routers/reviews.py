from typing import List
from fastapi import APIRouter
from app.schemas.review import ReviewResponse, ReviewItem

router = APIRouter()


@router.get("/", tags=["reviews"], response_model=List[ReviewResponse])
def get_reviews(keyword: str = ""):
    return [
        ReviewResponse(
            nickname="ソロ活を極めたい女子",
            text="ひとりサンリオピューロランドに行ってきた〜！キティちゃんは平和の象徴。",
            image="",
            likes_count=30,
            favorites_count=20,
            update_date="2024-08-02T10:12:59.073Z",
        )
    ]


@router.post("/", tags=["reviews"])
def post_review(item: ReviewItem):
    return {"message": "Review created"}


@router.put("/{review_id}", tags=["reviews"])
def put_review(review_id: int, item: ReviewItem):
    return {"message": "Review updated"}
