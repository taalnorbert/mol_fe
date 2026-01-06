#!/bin/sh

cd /app
/opt/scripts/config-generator.sh
exec "$@"