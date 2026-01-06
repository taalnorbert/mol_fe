FROM node:24-alpine3.21 AS build
WORKDIR /app
COPY index.html package.json tsconfig*.json vite.config.ts eslint.config.js ./

COPY docker/prod/config-generator.sh docker/prod/startup.sh ./

COPY src ./src
COPY public ./public

RUN sed -i 's/\r$//' /app/config-generator.sh
RUN sed -i 's/\r$//' /app/startup.sh

RUN chmod +x /app/*.sh

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

ARG VITE_API_URL

COPY --from=build /app/dist/ /usr/share/nginx/html/

COPY --from=build /app/config-generator.sh /opt/scripts/config-generator.sh
COPY --from=build /app/startup.sh /opt/scripts/startup.sh

RUN chmod +x /opt/scripts/*.sh

COPY docker/prod/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["sh", "/opt/scripts/startup.sh"]
