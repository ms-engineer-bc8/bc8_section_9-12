from sqlalchemy import Column, ForeignKey, Integer, String, LargeBinary, DateTime, func
from sqlalchemy.orm import relationship

from app.database.database import Base


class Activity(Base):
    __tablename__ = "activities"

    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    name = Column(String, nullable=False)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    price = Column(Integer, nullable=False)
    coupon_discount_rate = Column(Integer, nullable=False)
    image_large = Column(LargeBinary, nullable=False)
    image_small = Column(LargeBinary, nullable=False)
    provider_id = Column(
        Integer, ForeignKey("providers.id"), index=True, nullable=False
    )
    activity_category_id = Column(
        Integer, ForeignKey("activity_categories.id"), index=True, nullable=False
    )
    activity_subcategory_id = Column(
        Integer, ForeignKey("activity_subcategories.id"), index=True, nullable=False
    )
    created_at = Column(DateTime(timezone=True), default=func.now())
    updated_at = Column(
        DateTime(timezone=True), default=func.now(), onupdate=func.now()
    )

    providers = relationship("Provider", back_populates="activities", uselist=False)
    activity_categories = relationship(
        "ActivityCategory", back_populates="activities", uselist=False
    )
    activity_subcategories = relationship(
        "ActivitySubcategory", back_populates="activities", uselist=False
    )


class ActivityCategory(Base):
    __tablename__ = "activity_categories"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

    activity_subcategories = relationship(
        "ActivitySubcategory", back_populates="activity_subcategories"
    )


class ActivitySubcategory(Base):
    __tablename__ = "activity_subcategories"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    activity_category_id = Column(
        Integer, ForeignKey("activity_categories.id"), nullable=False
    )

    activity_categories = relationship(
        "ActivityCategory", back_populates="activity_subcategories"
    )
