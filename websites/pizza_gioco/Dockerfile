# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean install to avoid optional dependency issues
RUN rm -rf node_modules package-lock.json && \
    npm cache clean --force && \
    npm install

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
