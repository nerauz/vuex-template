FROM node:10-alpine as base


# -- Dependencies builder

FROM base as dependenciesBuilder

RUN mkdir /install
WORKDIR /install

RUN npm set progress=false

RUN npm i npm@latest -g
RUN npm i @vue/cli -g

COPY package.json .
COPY package-lock.json .

RUN npm i


# -- App builder

FROM base as appBuilder

RUN mkdir /app
WORKDIR /app

COPY --from=dependenciesBuilder /usr/local /usr/local
COPY --from=dependenciesBuilder /install/node_modules node_modules

COPY . .

ARG NODE_ENV

RUN touch .env

RUN echo NODE_ENV=$NODE_ENV > .env

RUN npm run build


# -- Nginx builder

FROM nginx:alpine

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=appBuilder /app/dist /usr/share/nginx/html

CMD ["service", "nginx", "start"]

