FROM gcr.io/distroless/nodejs

WORKDIR /opt/app

COPY dist /opt/app/dist

CMD [ "/opt/app/dist/apps/api/main.js" ]
