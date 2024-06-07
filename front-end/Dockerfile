FROM node:20-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .


RUN npm install
RUN npm i react-icons
RUN npm install -D sass

# Add app
COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev", "--", "--host"]
