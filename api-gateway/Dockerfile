FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port
EXPOSE 8080

# Start the server
CMD ["node", "src/index.js"]
