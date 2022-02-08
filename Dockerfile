FROM node:alpine

WORKDIR /code

COPY . /code/

RUN yarn install

CMD "npm run dev"
