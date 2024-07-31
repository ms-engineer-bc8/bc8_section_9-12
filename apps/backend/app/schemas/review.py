from pydantic import BaseModel, Field
from datetime import datetime


class ReviewResponse(BaseModel):
    nickname: str = Field(examples=["ソロ活を極めたい女子"])
    text: str = Field(examples=["ひとりサンリオピューロランドに行ってきた〜！キティちゃんは平和の象徴。"])
    image: bytes
    likes_count: int
    favorites_count: int
    update_date: datetime


# TODO: user_idの扱い要検討
class ReviewItem(BaseModel):
    user_id: int
    text: str = Field(examples=["ひとりサンリオピューロランドに行ってきた〜！キティちゃんは平和の象徴。"])
    image: bytes
