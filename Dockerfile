FROM node:18.16.0-bullseye-slim

# Set work directory
WORKDIR /opt/language-game

# copy source code
COPY language-game /opt/language-game

# Install Build tools
RUN echo "Installing React NPM module and node dependencies..." && \
    npm install && \
    npm run build

# Expose the listening port of node-red
EXPOSE 8080

ENTRYPOINT npm start
