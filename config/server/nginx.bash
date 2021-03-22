echo "Install nginx...";

sudo apt-get install nginx -y

printf "\n\n## Execute command below!\n\n";
printf "nano /etc/nginx/nginx.conf \n\n"

printf "### place under include sites-enabled/* \n\n"
printf "include /home/*/config/nginx/nginx.conf"

printf "Done install Nginx \n\n"