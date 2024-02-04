FROM ubuntu:latest
LABEL authors="molip"

COPY fast_api_server /back-end/fast_api_server
COPY database /back-end/database
COPY json_parser /back-end/json_parser
COPY requirements.txt /back-end/

RUN apt-get update && \
    apt-get install -y python3 && \
    apt-get install -y python3-pip

WORKDIR /back-end

RUN python3 -m pip install -r requirements.txt
RUN ls

CMD ["uvicorn", "fast_api_server.main:app", "--host", "0.0.0.0", "--port", "8000"]

