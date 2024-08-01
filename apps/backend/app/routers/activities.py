from typing import List
from fastapi import APIRouter
from app.schemas.activity import ActivityCategoryResponse, ActivityResponse

router = APIRouter()


@router.get(
    "/category/{category_id}",
    tags=["activities"],
    response_model=List[ActivityCategoryResponse],
)
def get_activities(category_id):
    return {"message": "Activites got"}


@router.get("/{activity_id}", tags=["activities"], response_model=ActivityResponse)
def get_activity(activity_id: int):
    return {"message": "Activity got"}
