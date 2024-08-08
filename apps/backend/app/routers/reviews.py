from typing import List
from fastapi import APIRouter, status
from app.schemas.review import ReviewResponse, ReviewItem

router = APIRouter()


@router.get(
    "/",
    tags=["reviews"],
    response_model=List[ReviewResponse],
    status_code=status.HTTP_200_OK,
)
def get_reviews(keyword: str = ""):
    return [
        ReviewResponse(
            id=1,
            nickname="ソロ活を極めたい女子",
            text="ひとりサンリオピューロランドに行ってきた〜！キティちゃんは平和の象徴。",
            image="",
            likes_count=30,
            favorites_count=20,
            update_date="2024-08-02T10:12:59.073Z",
        ),
        ReviewResponse(
            id=2,
            nickname="アカウント1",
            text="リムジン最高！",
            image="",
            likes_count=30,
            favorites_count=20,
            update_date="2024-08-03T10:12:59.073Z",
        ),
        ReviewResponse(
            id=3,
            nickname="アカウント2",
            text="早起きして気球に乗ってきた。",
            image="",
            likes_count=30,
            favorites_count=20,
            update_date="2024-08-04T10:12:59.073Z",
        ),
        ReviewResponse(
            id=4,
            nickname="アカウント3",
            text="ヘリからの景色が素敵すぎた！",
            image="",
            likes_count=30,
            favorites_count=20,
            update_date="2024-08-05T10:12:59.073Z",
        ),
    ]


@router.post("/", tags=["reviews"], status_code=status.HTTP_201_CREATED)
def post_review(item: ReviewItem):
    return {"message": "Review created"}


@router.put("/{review_id}", tags=["reviews"], status_code=status.HTTP_200_OK)
def put_review(review_id: int, item: ReviewItem):
    return {"message": "Review updated"}
