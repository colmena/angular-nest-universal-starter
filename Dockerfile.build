# This is the build environment
FROM node:10-alpine as build-env

# Base packages and utils
RUN apk add --update --no-cache git tar curl vim python python-dev make gcc g++ automake autoconf linux-headers libgcc libstdc++

# Use yarn as package manager
RUN npm install -g yarn@latest

# Set cache for mounting docker volumes
RUN yarn config set cache-folder ~/.yarn

# Install build dependencies
RUN yarn global add node-sass @angular/cli

# Create build environment
RUN mkdir -p /opt/build
WORKDIR /opt/build

# Only do a reinstall if package.json changed.
COPY package.json .

# Copy the project
COPY . .

# Install deps
RUN yarn install

# Run build
RUN yarn build

# Create the final image
FROM node:10-alpine

# Set the working directory
WORKDIR /opt/app

# Selectively copy the app to the new image
COPY --from=build-env /opt/build/dist /opt/app/dist

# And go 🚀
CMD [ "node", "/opt/app/dist/apps/api/main" ]
