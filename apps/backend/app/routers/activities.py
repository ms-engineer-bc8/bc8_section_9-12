from fastapi import APIRouter

router = APIRouter()

# TODO: 検索パラメータをセットする
@router.get("/", tags=["activities"])
def get_activities():
    return {"message": "Activites got"}

@router.get("/{activity_id}", tags=["activities"])
def get_activity(activity_id: int):
    return {"message": "Activity got"}