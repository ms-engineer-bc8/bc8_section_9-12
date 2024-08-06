from fastapi import APIRouter, status
from app.schemas.user import (
    UserCreate,
    UserUpdate,
    UserType,
    UserResponse,
    UserIdResponse,
    UserTypeResponse,
)

router = APIRouter()


@router.get(
    "/me", tags=["users"], response_model=UserResponse, status_code=status.HTTP_200_OK
)
def get_user_me():
    return UserResponse(
        email="user@example.com",
        nickname="ソロ活を極めたい女子",
        age="31~35歳",
        solo_type="アクティブチャレンジャー",
    )


@router.post("/", tags=["users"], response_model=UserIdResponse,status_code=status.HTTP_201_CREATED)
def post_user(item: UserCreate):
    return UserIdResponse(id="1")


@router.put("/type-test/{user_id}", tags=["users"], response_model=UserTypeResponse, status_code=status.HTTP_200_OK)
def put_user_type(item: UserType):
    return UserTypeResponse(solo_type="アクティブチャレンジャー")


@router.put("/{user_id}", tags=["users"], status_code=status.HTTP_200_OK)
def put_user(item: UserUpdate):
    return {"message": "User updated"}
