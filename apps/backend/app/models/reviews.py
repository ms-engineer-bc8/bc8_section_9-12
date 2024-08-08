from sqlalchemy import Column, ForeignKey, Integer, String, LargeBinary, DateTime, func
from sqlalchemy.orm import relationship

from app.database.database import Base


class Review(Base):
    __tablename__ = "reviews"

    # TODO:  idにautoincrement=Trueを追加する
    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    text = Column(String, nullable=False)
    image = Column(LargeBinary, nullable=False)
    likes_count = Column(Integer, default=0)
    favorites_count = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), default=func.now())
    updated_at = Column(
        DateTime(timezone=True), default=func.now(), onupdate=func.now()
    )

    users = relationship("User", back_populates="reviews", uselist=False)
