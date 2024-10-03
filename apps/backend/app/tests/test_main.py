from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_get_activities():
    response = client.get("/activities/1")
    assert response.status_code == 200
    assert response.json() == {
        "provider_name": "OneRide Limousine",
        "image_large": "no image",
        "title": "ソロリムジンといえばここ！特別な日のご褒美に",
        "description": "自由が丘駅から徒歩1分に位置する「OneRide Limousine」。豪華なレザーシートでくつろぎ、最新のエンタメを満喫しながら、まるで映画の主人公に。お一人さま専用のリムジンで、ちょっとしたセレブ気分を味わってください。特別な時間を「OneRide Limousine」でどうぞ！",
        "plan_name": "【新宿ALTA発】東京の夜景を独り占め！ソロリムジンプラン（ドレスコード付き）",
        "price": 25000,
        "image_small": "no image",
        "coupon_discount_rate": 10,
        "url": "https://star-limo.jp/",
    }


def test_get_activities_nonexistent_item():
    response = client.get("/activities/0")
    assert response.status_code == 404
    assert response.json() == {"detail": "Activity not found"}
