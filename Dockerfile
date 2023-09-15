FROM node:lts as base


RUN mkdir app

WORKDIR /app

RUN npm i @as-integrations/fastify


RUN git clone https://github.com/vishnubob/wait-for-it.git


COPY *.json  ./


RUN  npm install


COPY ./prisma ./prisma

RUN npx prisma generate


COPY ./ ./


FROM base as development
CMD [ "npm","run","dev" ]