FROM node:12.18

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui

WORKDIR /react-ui

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx

#!/bin/sh

COPY nginx.conf ../nginx-1.19.1/conf/nginx.conf

## Remove default nginx index page
RUN rm -rf ../nginx-1.19.1/html/*

# Copy from the stahg 1
COPY --from=builder /react-ui/build ../nginx-1.19.1/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]