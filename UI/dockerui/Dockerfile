FROM node:alpine as node

WORKDIR /src
COPY . .

RUN npm install && npm run build

FROM nginx:alpine
COPY --from=node /src/dist/dockerui/browser/ /usr/share/nginx/html/
EXPOSE 80

