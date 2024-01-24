from pydantic import BaseModel


class CreateUser(BaseModel):
    username: str
    password: str
    class Config:
        schema_extra = {
            "user_demo": {
                "username": "Nagibator_of_your_mother",
                "password": "123hui_zalupka_perizoc"
            }
        }



class Item(BaseModel):
    name: str
