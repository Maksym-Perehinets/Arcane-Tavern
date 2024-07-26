FROM golang:1.22-alpine as build

WORKDIR /app
COPY . .

RUN go mod download && \
    go build -o /app/spell_server

FROM alpine:3.14 as prod
COPY --from=build /app/spell_server /spell_server

EXPOSE 80

ENTRYPOINT ["./spell_server"]

FROM golang:1.22-alpine as dev

ENV GIN_PORT=80 \
    GIN_MODE=debug

WORKDIR /app
COPY . .

RUN go install github.com/air-verse/air@latest && \
    go mod download

EXPOSE 80

CMD ["air"]
