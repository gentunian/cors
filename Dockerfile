FROM node:8-alpine

ADD package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "."]

