echo "Installing nodejs..."

curl -sL https://deb.nodesource.com/setup_15.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install nodejs -y
sudo apt-get install build-essential -y

printf "Success nodejs... \n\n"