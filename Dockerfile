# Stage 0, based on Node.js, to build and compile Angular
FROM node:18.19.1 AS wildernessbath-stage
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm ci && npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.27
EXPOSE 80
COPY --from=wildernessbath-stage /app/dist/wildernessbath/browser /usr/share/nginx/html
# COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
