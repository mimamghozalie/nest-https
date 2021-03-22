sudo apt install certbot -y
sudo apt install python3-certbot-nginx -y

printf "# Install SSL : \n"
printf "sudo certbot --nginx -d yudha.aiva.store \n\n"

sudo systemctl status certbot.timer
printf "## Renew SSL : \n"
echo "sudo certbot renew --dry-run"
