from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


# TODO: email,nicknameを動的にする
def test_post_user():
    response = client.post(
        "/users/",
        json={"email": "example-26@soloco.com", "nickname": "test26", "age": "31-35"},
    )

    response_data = response.json()
    assert response.status_code == 201
    assert "id" in response_data

    # # idが整数であるか確認
    assert isinstance(response_data["id"], int)


# TODO: POSTの409エラーテスト
# TODO: POSTの500エラーテスト


# TODO: PUTの正常系テスト
# TODO: PUTの404エラーテスト
# TODO: PUSTの409エラーテスト
