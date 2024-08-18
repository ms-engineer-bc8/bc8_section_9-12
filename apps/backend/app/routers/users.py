from fastapi import APIRouter, status, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.models.users import User, SoloType
from app.schemas.user import (
    UserCreate,
    UserUpdate,
    UserType,
    UserResponse,
    UserIdResponse,
    UserTypeResponse,
)


router = APIRouter()


def get_solo_type_id(item):
    print(item)
    return 2


# TODO: 認証成功していたら渡す emailの取得方法を検討
@router.get(
    "/me", tags=["users"], response_model=UserResponse, status_code=status.HTTP_200_OK
)
def get_user_me(db: Session = Depends(get_db)):
    item = (
        db.query(
            User.email,
            User.nickname,
            User.age,
            SoloType.name.label("solo_type"),
        )
        .join(SoloType, User.solo_type_id == SoloType.id)
        .filter(User.email == "検討中")
        .first()
    )

    if not item:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Activity not found")

    return UserResponse.model_validate(item)


@router.post(
    "/",
    tags=["users"],
    response_model=UserIdResponse,
    status_code=status.HTTP_201_CREATED,
)
def post_user(item: UserCreate, db: Session = Depends(get_db)):
    user_item = User(**item.model_dump())
    db.add(user_item)
    db.commit()
    db.refresh(user_item)

    return UserIdResponse(id=user_item.id)


@router.put(
    "/type-test/{user_id}",
    tags=["users"],
    response_model=UserTypeResponse,
    status_code=status.HTTP_200_OK,
)
def put_user_type(user_id: int, item: UserType, db: Session = Depends(get_db)):
    user_item = db.query(User).filter(User.id == user_id).first()

    if user_item is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")

    solo_type_id = get_solo_type_id(item)
    solo_type_name = (
        db.query(SoloType.name).filter(SoloType.id == solo_type_id).scalar()
    )

    user_item.solo_level = item.solo_level
    user_item.activity_preference = item.activity_preference
    user_item.time_preference = item.time_preference
    user_item.is_planned = item.is_planned
    user_item.weekend_plan_preference = item.weekend_plan_preference
    user_item.after_work_preference = item.after_work_preference
    user_item.comfort_adventure = item.comfort_adventure
    user_item.solo_type_id = solo_type_id

    db.commit()
    db.refresh(user_item)

    return UserTypeResponse(solo_type=solo_type_name)


@router.put("/{user_id}", tags=["users"], status_code=status.HTTP_200_OK)
def put_user(user_id: int, item: UserUpdate, db: Session = Depends(get_db)):
    user_item = db.query(User).filter(User.id == user_id).first()

    if user_item is None:
        return {"message": "User not found"}, status.HTTP_404_NOT_FOUND

    user_item.id = user_id
    user_item.email = item.email
    user_item.age = item.age

    db.commit()
    db.refresh(user_item)

    return {"message": "User updated", "user": user_item}
