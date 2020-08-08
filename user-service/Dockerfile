FROM node:12.18

COPY build swingstate-user-service/build/
COPY node_modules swingstate-user-service/node_modules/
COPY focal-legacy-279818-f8408bf01c4d.json swingstate-user-service/

CMD npm run deploy --prefix swingstate-user-service/build
