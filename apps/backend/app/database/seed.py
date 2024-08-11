from database import SessionLocal
from app.models.users import SoloType, User
from app.models.reviews import Review
from app.models.activities import Activity, ActivityCategory, ActivitySubcategory
from app.models.providers import Provider

db = SessionLocal()


def seed_solo_types():
    solo_types = [
        SoloType(id=1, name="アクティブチャレンジャー"),
        SoloType(id=2, name="スペシャル体験エクスプローラー"),
        SoloType(id=3, name="リラックス名人"),
        SoloType(id=4, name="グルメハンター"),
    ]

    db.add_all(solo_types)
    db.commit()


def seed_activity_categories():
    activity_categories = [
        ActivityCategory(id=1, name="アクティブ系ソロ活"),
        ActivityCategory(id=2, name="スペシャル体験ソロ活"),
        ActivityCategory(id=3, name="リラックス系ソロ活"),
        ActivityCategory(id=4, name="グルメ堪能ソロ活"),
    ]

    db.add_all(activity_categories)
    db.commit()


def seed_activity_subcategories():
    activity_subcategories = [
        ActivitySubcategory(id=1, name="ボウリング", activity_category_id=1),
        ActivitySubcategory(id=2, name="遊園地", activity_category_id=1),
        ActivitySubcategory(id=3, name="サバイバルゲーム", activity_category_id=1),
        ActivitySubcategory(id=4, name="ナイトプール", activity_category_id=1),
        ActivitySubcategory(id=5, name="シティホテル", activity_category_id=2),
        ActivitySubcategory(id=6, name="気球", activity_category_id=2),
        ActivitySubcategory(id=7, name="リムジン", activity_category_id=2),
        ActivitySubcategory(id=8, name="ヘリクルーズ", activity_category_id=2),
        ActivitySubcategory(id=9, name="プラネタリウム", activity_category_id=3),
        ActivitySubcategory(id=10, name="美術館 / 博物館", activity_category_id=3),
        ActivitySubcategory(id=11, name="スパ", activity_category_id=3),
        ActivitySubcategory(id=12, name="夜景", activity_category_id=3),
        ActivitySubcategory(id=13, name="焼肉", activity_category_id=4),
        ActivitySubcategory(id=14, name="寿司", activity_category_id=4),
        ActivitySubcategory(id=15, name="中華料理", activity_category_id=4),
        ActivitySubcategory(id=16, name="フレンチ", activity_category_id=4),
    ]

    db.add_all(activity_subcategories)
    db.commit()


def seed_activities():
    activities = Activity(
        id=1,
        name="【新宿ALTA発】東京の夜景を独り占め！ソロリムジンプラン（ドレスコード付き）",
        title="ソロリムジンといえばここ！特別な日のご褒美に",
        description="自由が丘駅から徒歩1分に位置する「OneRide Limousine」。豪華なレザーシートでくつろぎ、最新のエンタメを満喫しながら、まるで映画の主人公に。お一人さま専用のリムジンで、ちょっとしたセレブ気分を味わってください。特別な時間を「OneRide Limousine」でどうぞ！",
        price=25000,
        coupon_discount_rate=10,
        image_large="test",
        image_small="test",
        provider_id=1,
        activity_category_id=1,
        activity_subcategory_id=7,
        time_zone="夜",
        solo_level="上級",
        likes_count=10,
        favorites_count=20,
    )

    db.add(activities)
    db.commit()


def seed_reviews():
    reviews = Review(
        id=1,
        user_id=1,
        text="ひとりサンリオピューロランドに行ってきた〜！キティちゃんは平和の象徴。",
        image="test",
        likes_count=30,
        favorites_count=20,
        created_at="2024-08-02T10:12:59.073Z",
        updated_at="2024-08-02T10:12:59.073Z",
    )

    db.add(reviews)
    db.commit()


def seed_providers():
    providers = Provider(
        id=1,
        name="OneRide Limousine",
        email="oneride-limousine@example.com",
        tel="0312345678",
        address="東京都江戸川区南葛西2-1-25",
        url="https://star-limo.jp/",
        business_hours="年中無休 10:00～19:00",
    )

    db.add(providers)
    db.commit()


def seed_users():
    users = User(
        id=1, email="user@example.com", nickname="ソロ活を極めたい女子", age="31~35歳"
    )

    db.add(users)
    db.commit()


seed_solo_types()
seed_users()
seed_reviews()
seed_activity_categories()
seed_activity_subcategories()
seed_providers()
seed_activities()
