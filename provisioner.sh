#!/usr/bin/env bash

# Install Neko.js
cd /vagrant
sudo npm install --no-bin-links

# Create Neko.js Service
sudo echo "
description 'Neko.js Service'
author 'TehSeph'

start on (local-filesystems and net-device-up IFACE=eth0)
stop on shutdown

pre-start script
	test -d /vagrant
end script

respawn
respawn limit unlimited

exec sudo /usr/local/bin/node /vagrant/neko.js --harmony
" >> /etc/init/neko.conf

# Start Neko.js Service
sudo service neko start

# Start SSH Sessions in Neko.js Directory
sudo echo "cd /vagrant" >> /home/vagrant/.bash_profile

# Customize Bash Prompt ( host[/current/directory] » )
sudo echo "PS1='\[\033[38;5;10m\]\h\[$(tput sgr0)\][\[\033[38;5;11m\]\w\[$(tput sgr0)\]]\[\033[38;5;9m\] » \[$(tput sgr0)\]'" >> /home/vagrant/.bash_profile
