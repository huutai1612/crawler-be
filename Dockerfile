FROM node:16

WORKDIR /usr/src

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD [ "node", "src/index.js" ]