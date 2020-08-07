FROM node:12.18

COPY build swingstate-ui/build/
COPY node_modules swingstate-ui/node_modules/
COPY nginx-1.19.1

CMD npm run build
CMD start nginx  