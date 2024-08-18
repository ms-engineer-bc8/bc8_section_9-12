from typing import List
from fastapi import APIRouter, status, Depends, HTTPException
from app.database.database import get_db
from sqlalchemy.orm import Session
from app.models.users import User
from app.models.reviews import Review
from app.schemas.review import ReviewResponse, ReviewItem
from app.analysis.word_cloud import get_wordcloud

router = APIRouter()


@router.get(
    "/",
    tags=["reviews"],
    response_model=List[ReviewResponse],
    status_code=status.HTTP_200_OK,
)
def get_reviews(db: Session = Depends(get_db), keyword: str = ""):
    reviews_query = db.query(
        Review.id,
        User.nickname,
        Review.text,
        Review.image,
        Review.likes_count,
        Review.favorites_count,
        Review.updated_at.label("update_date"),
    ).join(User, Review.user_id == User.id)

    if keyword:
        reviews_query = reviews_query.filter(Review.text.like(f"%{keyword}%"))

    items = reviews_query.all()
    if not items:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Reviews not found")

    return [ReviewResponse.model_validate(item) for item in items]


@router.get(
    "/report",
    tags=["reviews"],
    response_model=List[ReviewResponse],
    status_code=status.HTTP_200_OK,
)
def get_report(db: Session = Depends(get_db), keyword: str = ""):
    reviews_query = db.query(
        Review.id,
        User.nickname,
        Review.text,
        Review.image,
        Review.likes_count,
        Review.favorites_count,
        Review.updated_at.label("update_date"),
    ).join(User, Review.user_id == User.id)

    if keyword:
        reviews_query = reviews_query.filter(Review.text.like(f"%{keyword}%"))

    items = reviews_query.all()
    if not items:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Reviews not found")

    result = [ReviewResponse.model_validate(item) for item in items]

    return {"message": "Wordcloud created", "wordcloud": get_wordcloud(result)}


@router.post("/", tags=["reviews"], status_code=status.HTTP_201_CREATED)
def post_review(item: ReviewItem, db: Session = Depends(get_db)):
    db_review = Review(user_id=item.user_id, text=item.text, image=item.image)
    db.add(db_review)
    db.commit()
    db.refresh(db_review)

    return {"message": "Review created"}


@router.put("/{review_id}", tags=["reviews"], status_code=status.HTTP_200_OK)
def put_review(review_id: int, item: ReviewItem, db: Session = Depends(get_db)):
    db_review = db.query(Review).filter(Review.id == review_id).first()

    if db_review is None:
        return {"message": "Review not found"}, status.HTTP_404_NOT_FOUND

    db_review.user_id = item.user_id
    db_review.text = item.text
    db_review.image = item.image

    db.commit()
    db.refresh(db_review)

    return {"message": "Review updated", "review": db_review}
