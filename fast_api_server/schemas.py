from pydantic import BaseModel
from typing import Optional


class Filters(BaseModel):
    filter_name: str
    asc: bool

class Item(BaseModel):
    name: str
