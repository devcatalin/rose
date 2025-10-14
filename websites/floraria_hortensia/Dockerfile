# Build stage
FROM node:20-alpine3.22 AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --quiet

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:1.28.0-alpine

# Copy built assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
