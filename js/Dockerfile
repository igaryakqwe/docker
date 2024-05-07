FROM node:20.12-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

COPY --from=build /app .

CMD ["app.js"]
