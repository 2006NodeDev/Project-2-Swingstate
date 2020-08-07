FROM node:12.18

COPY build user-service/build
COPY node_modules user-service/node_modules
COPY focal-legacy-279818-f8408bf01c4d.json user-service


CMD ['npm', 'run', 'deploy']