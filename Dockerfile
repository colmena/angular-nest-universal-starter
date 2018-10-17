FROM node:10-alpine

WORKDIR /opt/app

COPY dist /opt/app/dist

CMD [ "node", "/opt/app/dist/apps/api/main" ]
