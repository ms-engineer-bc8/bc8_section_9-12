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
        ActivitySubcategory(id=1, name="ボウリング"),
        ActivitySubcategory(id=2, name="遊園地"),
        ActivitySubcategory(id=3, name="サバイバルゲーム"),
        ActivitySubcategory(id=4, name="ナイトプール"),
        ActivitySubcategory(id=5, name="シティホテル"),
        ActivitySubcategory(id=6, name="気球"),
        ActivitySubcategory(id=7, name="リムジン"),
        ActivitySubcategory(id=8, name="ヘリクルーズ"),
        ActivitySubcategory(id=9, name="プラネタリウム"),
        ActivitySubcategory(id=10, name="美術館 / 博物館"),
        ActivitySubcategory(id=11, name="スパ"),
        ActivitySubcategory(id=12, name="夜景"),
        ActivitySubcategory(id=13, name="焼肉"),
        ActivitySubcategory(id=14, name="寿司"),
        ActivitySubcategory(id=15, name="中華料理"),
        ActivitySubcategory(id=16, name="フレンチ"),
    ]

    db.add_all(activity_subcategories)
    db.commit()


def seed_activities():
    activities = [
        Activity(
            id=1,
            name="【新宿ALTA発】東京の夜景を独り占め！ソロリムジンプラン（ドレスコード付き）",
            title="ソロリムジンといえばここ！特別な日のご褒美に",
            discription="自由が丘駅から徒歩1分に位置する「OneRide Limousine」。豪華なレザーシートでくつろぎ、最新のエンタメを満喫しながら、まるで映画の主人公に。お一人さま専用のリムジンで、ちょっとしたセレブ気分を味わってください。特別な時間を「OneRide Limousine」でどうぞ！",
            price=25000,
            coupon_discount_rate=10,
            image_large="",
            image_small="",
            provider_id=1,
            activity_category_id=1,
            activity_subcategory_id=7,
            time_zone="夜",
            solo_level="上級",
            likes_count=10,
            favorites_count=20,
        ),
        Activity(
            id=2,
            name="プラン1",
            title="気球‗タイトル",
            discription="気球‗プラン説明",
            price=25000,
            coupon_discount_rate=0,
            image_large="",
            image_small="",
            provider_id=2,
            activity_category_id=1,
            activity_subcategory_id=6,
            time_zone="朝",
            solo_level="上級",
            likes_count=20,
            favorites_count=55,
        ),
        Activity(
            id=1,
            name="プラン1",
            title="気球‗タイトル",
            discription="気球‗プラン説明",
            price=25000,
            coupon_discount_rate=0,
            image_large="",
            image_small="",
            provider_id=2,
            activity_category_id=1,
            activity_subcategory_id=6,
            time_zone="朝",
            solo_level="上級",
            likes_count=20,
            favorites_count=55,
        ),
    ]

    db.add_all(activities)
    db.commit()


def seed_reviews():
    reviews = Review(
        id=1,
        user_id=1,
        text="ひとりサンリオピューロランドに行ってきた〜！キティちゃんは平和の象徴。",
        image="",
        likes_count=30,
        favorites_count=20,
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
seed_reviews()
seed_activities()
seed_activity_categories()
seed_activity_subcategories()
seed_providers()
seed_users()
