#!/bin/bash
echo "Caizi SERVER setup";

sudo apt-get update

bash config/server/nodejs.bash;
bash config/server/nginx.bash;
bash config/server/certbot.bash;
bash config/server/firewall.bash;