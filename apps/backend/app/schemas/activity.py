from pydantic import BaseModel, Field
from datetime import datetime


# TODO: titleとしている部分を確認する
class ActivityCategoryResponse(BaseModel):
    title: str
    image: bytes
    provider_name: str = Field(examples=["OneRide Limousine"])
    budget: str = Field(examples=["5万円以上"])
    solo_level: str = Field(examples=["上級"])
    likes_count: int = Field(examples=["10"])
    favorites_count: int = Field(examples=["20"])


class ActivityResponse(BaseModel):
    provider_name: str  = Field(examples=["OneRide Limousine"])
    image_large: bytes
    title: str
    discription: str
    plan_name: str  = Field(examples=["OneRide Limousine"])
    price: int  = Field(examples=["25000"])
    image_small: bytes
    coupon_discount_rate: int = Field(examples=["10"])
