FROM node:12.18

COPY build swingstate-state-service/build/
COPY node_modules swingstate-state-service/node_modules/
COPY focal-legacy-279818-f8408bf01c4d.json swingstate-state-service/

CMD npm run deploy --prefix swingstate-state-service/build