# Build stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Expose the preview port
EXPOSE 3000

# Use preview instead of a static file server
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"] 