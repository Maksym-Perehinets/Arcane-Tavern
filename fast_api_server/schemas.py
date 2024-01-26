from typing import Optional
from pydantic import BaseModel


class Item(BaseModel):
    name: str
