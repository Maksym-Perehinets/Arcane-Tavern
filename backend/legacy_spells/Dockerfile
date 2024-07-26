FROM python:3.11-alpine3.20

WORKDIR /back-end

COPY fast_api_server /back-end/fast_api_server
COPY database /back-end/database
COPY json_parser /back-end/json_parser
COPY requirements.txt /back-end/

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

ENTRYPOINT ["uvicorn", "fast_api_server.main:app", "--host", "0.0.0.0", "--port", "80", "--reload"]