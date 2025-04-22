#!/bin/bash

set -xe

# Ensure variables are passed in
DOMAIN=$1
WEBROOT=$2

# Check if the domain and webroot are provided
if [ -z "$DOMAIN" ] || [ -z "$WEBROOT" ]; then
    echo "Usage: $0 <domain> <webroot>"
    exit 1
fi

# Create the directory for the website if it doesn't exist
sudo mkdir -p "$WEBROOT"

# Copy the built website (assuming it's in a 'dist' directory)
sudo cp -r dist/* "$WEBROOT"

# Create the Nginx configuration file
CONFIG_FILE="/etc/nginx/sites-available/$DOMAIN"
sudo tee "$CONFIG_FILE" > /dev/null <<EOL
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    root $WEBROOT;
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EOL

# Disable default site if it's still enabled
if [ -L /etc/nginx/sites-enabled/default ]; then
    echo "Disabling default Nginx site..."
    sudo rm /etc/nginx/sites-enabled/default
fi

# Enable the site configuration by creating a symlink in 'sites-enabled'
sudo ln -sf "$CONFIG_FILE" /etc/nginx/sites-enabled/

# Test the Nginx configuration for syntax errors
sudo nginx -t

# Reload Nginx to apply the new configuration
sudo systemctl reload nginx

echo "Nginx configured for $DOMAIN and site deployed."