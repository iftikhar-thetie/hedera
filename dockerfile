# Use an official Node.js runtime on Alpine Linux as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Install PM2 globally
RUN npm install -g pm2

# Copy the application code to the container
COPY . .

# Build the application (if needed)
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Set the entry point
CMD ["pm2-runtime", "start", "npm", "--", "start"]

