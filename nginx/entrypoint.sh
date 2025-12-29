#!/bin/sh
sed -i "s|__API_URL__|$API_URL|g" /usr/share/nginx/html/env.js
#sed -i "s|__SOCKET_URL__|$SOCKET_URL|g" /usr/share/nginx/html/env.js
exec nginx -g "daemon off;"