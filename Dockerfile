FROM node:16
WORKDIR /usr/src/gateway
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE  4500
CMD npm start