from fastapi import APIRouter

router = APIRouter()


@router.get("/{user_id}", tags=["users"])
def get_user():
    return {"message": "User got"}


@router.post("/", tags=["users"])
def post_user():
    return {"message": "User created"}


@router.put("/{user_id}", tags=["users"])
def put_user():
    return {"message": "User updated"}


# TODO: レスポンスでソロ活タイプを返す
@router.put("/type/{user_id}", tags=["users"])
def put_user_type():
    return {"message": "User type updated"}
