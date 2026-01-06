cat > /usr/share/nginx/html/config.js << EOF
window.ENV = {
  VITE_API_URL: "${VITE_API_URL}",
};
EOF