from fastapi import APIRouter

router = APIRouter()

# 全レビュー取得
@router.get("/")
def get_reviews():
    return {"message": "Reviews got"}


@router.get("/{activity_id}")
def get_review():
    return {"message": "Review got"}


@router.post("/")
def post_review():
    return {"message": "Review created"}


@router.put("/{review_id}")
def put_review():
    return {"message": "Review updated"}
