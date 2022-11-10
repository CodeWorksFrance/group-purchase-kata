FROM node:18-alpine

COPY ../backend /usr/local/app/
WORKDIR /usr/local/app/backend

RUN npm install

EXPOSE ${PORT}

CMD npm run start:dev
