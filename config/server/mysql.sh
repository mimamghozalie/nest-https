sudo apt update
sudo apt install mariadb-server -y

sudo mysql_secure_installation

sudo mysql


CREATE DATABASE IF NOT EXISTS ta_yudha;
GRANT ALL ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;

# Uninstall database
sudo apt remove --purge mariadb-server
sudo apt purge mariadb-server
sudo apt autoremove
sudo apt autoclean
sudo apt remove dbconfig-mysql