from typing import List
from fastapi import APIRouter, status
from app.schemas.activity import ActivityCategoryResponse, ActivityResponse

router = APIRouter()


@router.get(
    "/category/{category_id}",
    tags=["activities"],
    response_model=List[ActivityCategoryResponse],
    status_code=status.HTTP_200_OK,
)
def get_activities(category_id: int):
    return [
        ActivityCategoryResponse(
            activity_id=1,
            subcategory="リムジン",
            image="",
            provider_name="OneRide Limousine",
            time_zone="夜",
            solo_level="上級",
            likes_count=10,
            favorites_count=20,
        ),
        ActivityCategoryResponse(
            activity_id=2,
            subcategory="気球",
            image="",
            provider_name="スマイルバルーン",
            time_zone="朝",
            solo_level="上級",
            likes_count=20,
            favorites_count=55,
        ),
        ActivityCategoryResponse(
            activity_id=3,
            subcategory="ヘリクルーズ",
            image="",
            provider_name="AIROS Skyview",
            time_zone="夜",
            solo_level="上級",
            likes_count=15,
            favorites_count=10,
        ),
        ActivityCategoryResponse(
            activity_id=4,
            subcategory="シティホテル",
            image="",
            provider_name="ホテルニューオータニ",
            time_zone="夜",
            solo_level="上級",
            likes_count=30,
            favorites_count=40,
        ),
        ActivityCategoryResponse(
            activity_id=5,
            subcategory="リムジン",
            image="",
            provider_name="スターリムジン",
            time_zone="夜",
            solo_level="上級",
            likes_count=30,
            favorites_count=25,
        ),
    ]


@router.get(
    "/{activity_id}",
    tags=["activities"],
    response_model=ActivityResponse,
    status_code=status.HTTP_200_OK,
)
def get_activity(activity_id: int):
    return ActivityResponse(
        provider_name="OneRide Limousine",
        image_large="",
        title="ソロリムジンといえばここ！特別な日のご褒美に",
        discription="自由が丘駅から徒歩1分に位置する「OneRide Limousine」。豪華なレザーシートでくつろぎ、最新のエンタメを満喫しながら、まるで映画の主人公に。お一人さま専用のリムジンで、ちょっとしたセレブ気分を味わってください。特別な時間を「OneRide Limousine」でどうぞ！",
        plan_name="【新宿ALTA発】東京の夜景を独り占め！ソロリムジンプラン（ドレスコード付き）",
        price=25000,
        image_small="",
        coupon_discount_rate=10,
        url="https://lalalimousine.com/",
    )
