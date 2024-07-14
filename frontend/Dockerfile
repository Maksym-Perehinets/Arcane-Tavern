FROM node:20-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm install \
    npm i react-icons \
    npm i -D sass \
    npm i react-query \
    npm install -D tailwindcss postcss autoprefixer \ 
    npx tailwindcss init -p

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev", "--", "--host"]