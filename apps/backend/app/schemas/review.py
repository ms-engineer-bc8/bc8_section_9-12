from pydantic import BaseModel
from datetime import datetime


class ReviewResponse(BaseModel):
    nickname: str
    text: str
    image: bytes
    likes_count: int
    favorites_count: int
    update_date: datetime


# TODO: user_idの扱い要検討
class Review(BaseModel):
    user_id: int
    text: str
    image: bytes
