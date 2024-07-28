from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.logging_config import setup_logging
from app.routers import users, activities, reviews

logger = setup_logging(__name__)

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_main():
    logger.info("Root endpoint called")
    return {"Hello": "World"}


app.include_router(users.router, prefix="/users")
app.include_router(activities.router, prefix="/activities")
app.include_router(reviews.router, prefix="/reviews")

# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}
