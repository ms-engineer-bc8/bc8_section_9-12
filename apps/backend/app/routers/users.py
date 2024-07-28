from fastapi import APIRouter

router = APIRouter()


@router.get("/{id}")
def get_user():
    return {"message": "User got"}


@router.post("/")
def post_user():
    return {"message": "User created"}


@router.put("/{id}")
def put_user():
    return {"message": "User updated"}
