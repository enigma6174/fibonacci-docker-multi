# Specify base image
FROM node:alpine

# Set working directory
WORKDIR "/app"

# Install dependencies
COPY ./package.json ./
RUN npm install

# Copy the contents of current directory
COPY ./ ./

# Startup command
CMD ["npm", "run", "start"]