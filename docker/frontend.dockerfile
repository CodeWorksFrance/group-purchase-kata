FROM node:18-alpine

COPY ../frontend /usr/local/app/
WORKDIR /usr/local/app/frontend

RUN npm install

EXPOSE ${PORT}

CMD npm run dev -- --port ${PORT} --host
