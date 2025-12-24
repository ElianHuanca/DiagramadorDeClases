# Stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
# Variables VITE_* se leen AQUÍ
#ARG VITE_API_URL
#ENV VITE_API_URL=$VITE_API_URL
RUN npm run build
COPY public/env.js ./dist/env.js

# Stage 2: nginx server
FROM nginx:alpine as production
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
COPY /nginx/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
