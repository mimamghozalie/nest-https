sudo apt-get install nginx -y

nano /etc/nginx/nginx.conf

# Add under 
# include sites-enabled/*
include /homde/*/config/nginx/nginx.conf;