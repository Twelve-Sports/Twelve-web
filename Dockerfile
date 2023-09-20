FROM node:20.0-alpine As development

WORKDIR /home/TwelveWeb

COPY package*.json .
COPY . .

RUN npm i
RUN npx yarn install

CMD npx yarn dev
