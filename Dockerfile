# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY . .

# Install dependencies (including devDependencies)
RUN npm install

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
