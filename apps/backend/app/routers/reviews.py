from fastapi import APIRouter

router = APIRouter()

# 全レビュー取得
@router.get("/", tags=["reviews"])
def get_reviews():
    return {"message": "Reviews got"}


@router.get("/{activity_id}", tags=["reviews"])
def get_review():
    return {"message": "Review got"}


@router.post("/", tags=["reviews"])
def post_review():
    return {"message": "Review created"}


@router.put("/{review_id}", tags=["reviews"])
def put_review():
    return {"message": "Review updated"}
