FROM node:24-alpine3.21 AS build
WORKDIR /app
COPY index.html package.json tsconfig*.json vite.config.ts eslint.config.js ./

COPY src ./src

RUN npm install

COPY docker/dev/config-generator.sh docker/dev/startup.sh ./

RUN sed -i 's/\r$//' /app/config-generator.sh
RUN sed -i 's/\r$//' /app/startup.sh


FROM node:24-alpine3.21 AS runtime
COPY --from=build /app/config-generator.sh /opt/scripts/config-generator.sh
COPY --from=build /app/startup.sh /opt/scripts/startup.sh
COPY --from=build /app /app

RUN chmod +x /opt/scripts/*.sh

CMD ["sh", "/opt/scripts/startup.sh", "npm", "run" ,"dev" ,"--","--host"]