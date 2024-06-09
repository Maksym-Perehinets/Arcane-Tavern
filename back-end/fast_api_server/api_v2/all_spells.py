from fastapi import APIRouter, Depends


router = APIRouter(
    prefix="/api/v2/spells",
    tags=["Home page logic"],
    responses={404: {"description": "Not found"}},
)


@router.get('/all_spells')
def all_spells():

    return {"I'm": "working"}