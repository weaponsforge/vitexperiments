FROM node:20.15.0-alpine AS base
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN chown -R node:node /opt/app
COPY package*.json ./

# BUILD TARGET
FROM base AS build
RUN npm install && npm cache clean --force
COPY . ./
RUN npm run build

# DEVELOPMENT CLIENT PROFILE
FROM base AS development
ENV NODE_ENV=development
RUN npm install && npm cache clean --force
COPY . ./
RUN mkdir /opt/app/node_modules/.vite \
  && mkdir /opt/app/node_modules/.tmp \
  && chown -R node:node /opt/app/node_modules/.vite \
  && chown -R node:node /opt/app/node_modules/.tmp
USER node
EXPOSE 3000 4173 51204
CMD ["npm", "run", "docker:dev"]
