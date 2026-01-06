# Minta - IT eszközigénylés

## Environment variables
VITE_API_URL: Server URL

## Development startup process
docker compose -f compose.dev.yml up --build --watch

## Production startup process
docker compose -f compose.prod.yml up --build -d
