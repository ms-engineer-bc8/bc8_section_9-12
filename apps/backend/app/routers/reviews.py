from typing import List
from fastapi import APIRouter
from app.schemas.review import ReviewResponse, Review

router = APIRouter()


@router.get("/", tags=["reviews"], response_model=List[ReviewResponse])
def get_reviews():
    return {"message": "Reviews got"}


@router.get("/{activity_id}", tags=["reviews"], response_model=ReviewResponse)
def get_review(activity_id: int):
    return {"message": "Review got"}


@router.post("/", tags=["reviews"])
def post_review(item: Review):
    return {"message": "Review created"}


@router.put("/{review_id}", tags=["reviews"])
def put_review(review_id: int, item: Review):
    return {"message": "Review updated"}
