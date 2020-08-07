FROM node:12.18

COPY ../../build user-service/deployment/kube/build/
COPY ../../node_modules user-service/deployment/kube/node_modules
COPY focal-legacy-279818-f8408bf01c4d.json user-service


CMD ['npm', 'run', 'deploy']