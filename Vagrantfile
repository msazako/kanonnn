# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.require_version ">= 1.5"

Vagrant.configure("2") do |config|

  config.vm.hostname = "neko.js"

  config.vm.box = "scotch/box"

  config.vm.network :private_network, ip: "192.168.33.20"
  config.ssh.forward_agent = true

  config.vm.provider :virtualbox do |v|
    v.name = "neko.js"
  end

  config.vm.provision :shell, path: "provisioner.sh", args: ["neko.js"]

end
