sudo apt-get install nginx -y

nano /etc/nginx/nginx.conf

# Add under 
# include sites-enabled/*
include /home/*/config/nginx/nginx.conf;