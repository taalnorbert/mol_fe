#!/bin/sh

/opt/scripts/config-generator.sh
nginx -g 'daemon off;'