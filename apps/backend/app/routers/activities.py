from fastapi import APIRouter

router = APIRouter()

# TODO: 検索パラメータをセットする
@router.get("/")
def get_activities():
    return {"message": "Activites got"}

@router.get("/{activity_id}")
def get_activity():
    return {"message": "Activity got"}