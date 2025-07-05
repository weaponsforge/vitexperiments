FROM node:20.15.0-alpine AS base
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN chown -R node:node /opt/app
COPY package*.json ./

# BUILD TARGET
FROM base AS build
RUN npm install && npm cache clean --force
COPY . ./
RUN npm run export
USER node

# DEVELOPMENT CLIENT PROFILE
FROM base AS development
ENV NODE_ENV=development
RUN npm install && npm cache clean --force
COPY . ./
RUN mkdir /opt/app/node_modules/.vite \
  && chown -R node:node /opt/app/node_modules/.vite
USER node
EXPOSE 3000
CMD ["npm", "run", "dev:docker"]
