# angular-nest-universal-starter

A simple starter repo based on [Nrwl Nx](https://github.com/nrwl/nx).

It features a API built with Nest and an Angular app. It includes a Docker configuration that can be deployed to [now.sh](https://zeit.co/now).

## Installation

```
git clone https://github.com/colmena/angular-nest-universal-starter my-app
cd my-app
# This project uses yarn, npm will most likely work just as fine :)
yarn
```

## Running

```
yarn dev:api
yarn dev:admin
```

## Building

```
# Build the whole stack
yarn build

# Build an individual app
yarn api:build
yarn admin:build 
```


## Building in watch mode

You can rebuild the admin in watch mode. This is a great way Angular Universal to get almost instant compilation of server side rendered code.

First, you should start the build process of the admin in watch mode:

```markdown
# Build the admin app in watch mode
yarn build:watch
```

Leave that process running, and start the api in a second terminal, in dev mode.

```markdown
yarn dev:api
```

This will picks up the changes in the `dist` folder and restarts the server. When you now refresh the page, you will get the new server side rendered output.

## Docker

There is a Docker configuration (defined in `Dockerfile.build`) that builds the app and creates a container that contains the minimal assets to run.

The docker image name is defined in `package.json`, you probably want to change that from `colmena/angular-nest-universal` to something else.

```
# Build and run the docker image
yarn docker

# Build the docker image
yarn docker:build

# Run the docker image
yarn docker:run

# Push the docker image
yarn docker:push
```

## Deployment

The project is configured to deploy builds to [now.sh](https://zeit.co/now). We don't build the project on now.sh, instead we deploy the assets that are built somewhere else, for instance a CI process.

`now` is not installed as dependency as it's rather large, people who use it generally have it installed globally.

The `now` team name used for the deployment is defined in the `deploy` script in `package.json`, you should update it to your team or username. The `now` alias and deployment name are defined in `now.json`.

```
# Make sure to build the app
yarn build

# Deploy to now
yarn deploy
```

## MIT Licensed
