---
title: "在 香橙派4 中安装 ubuntu16.04, mongoDB, zsh, node"
description: "hello,world!"
date: "2020-08-30"
---
## 安装 ubuntu16.04 系统
由于使用 ubuntu 官网提供的 ubuntu16.04 版本的镜像可能会出现各种问题，所以直接使用香橙派提供的 ubuntu16.04 来安装系统：  
[香橙派4官网ubuntu16.04下载地址](http://www.orangepi.cn/downloadresourcescn/OrangePi4/2019-12-16/orangepi4_Ubuntu_image1.html)  

使用 etcher 来烧录系统：  
[etcher官网下载地址](https://www.balena.io/etcher/)  

系统烧录进 TF 卡后插入香橙派连接电源与显示器即可启动 TF 卡中的系统。

输入初始用户名与密码（均为 `orangepi`）即可登录系统。
打开 terminal ，在命令行中输入如下命令：

```bash
$ sudo install_to_emmc
```
即可将系统烧录到 香橙派自带的 EMMC Flash 中。
之后断开电源，取出 TF 卡即可，此时 ubuntu16.04 已经安装到香橙派中了。
此时的用户名与登录密码也均为 `orangepi`。登录之后应首先升级一下系统，打开terminal，在命令行中输入如下命令：

```bash
$ sudo apt update && sudo apt upgrade
```

## 添加具有 sudo 权限的用户
首先打开 terminal ，在命令行中输入如下命令来添加新用户：
```bash
$ sudo adduser nacht // nacht改成希望添加的用户名
```
添加用户完成后需要授予 sudo 权限，在命令行中输入如下命令来让  sudoers 文件可写：
```bash
$ sudo chmod +w /etc/sudoers
```
之后使用 vim 编辑此文件：
```bash
$ sudo vim /etc/sudoers
```
在 `root ALL=(ALL:ALL) ALL`下面添加这一行(`nacht`改成自己之前设置的用户名)之后保存并退出：
```
nacht ALL=(ALL:ALL) ALL
```
之后去掉  sudoer 文件的可写权限：
```bash
$ sudo chmod -w /etc/sudoers
```
此时切换到这个用户，使用如下命令进行切换： 
```bash
$ su nacht //nacht改成自己之前设置的用户名
```
以下操作均在新添加的这个用户下进行。
## 安装mongoDB
注：此处由于 ubuntu16.04 与arm板子的特殊性，太高的mongoDB版本无法安装，太低的mongoDB版本不提供arm支持，所以请不要参考网络上的教程，按照本文档的步骤操作即可成功安装mongoDB 4.0版本。

首先导入 GPG 秘钥：

```bash
$ wget -qO - https://www.mongodb.org/static/pgp/server-4.0.asc | sudo apt-key add -
```
看到命令行打印 OK 即为成功。  

创建`/etc/apt/sources.list.d/mongodb-org-4.0.list`文件：

```bash
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
```
刷新缓存:
```bash
sudo apt update
```
安装mongoDB：
```bash
$ sudo apt install -y mongodb-org
```
启动mongoDB并使mongoDB开机自启动：
```bash
$ sudo systemctl start mongod
$ sudo systemctl enable mongod
```
## 安装并配置zsh
### 安装zsh
```bash
$ sudo apt install zsh -y
```

### 安装oh-my-zsh

```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
安装 oh-my-zsh 时会提示是否将zsh设置为默认的shell，输入`y`确认。

### 安装常用的插件
这一步会安装三个插件，`z`，`zsh-syntax-highlighting`，`zsh-autosuggestions`。  
- `z`用来进行目录快速跳转
- `zsh-syntax-highlightinhg`用来进行目录高亮
- `zsh-autosuggestions` 用来进行自动补全  

### 安装`z`  
`z` 为zsh内置，直接在`~/.zshrc`中配置来开启插件即可：
```
plugins=(其他插件 z)
```

### 安装`zsh-syntax-highlighting`
克隆项目：
```bash
$ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
在`~/.zshrc`中配置：
```
plugins=(其他插件 zsh-syntax-highlighting)
```

### 安装 `zsh-autosuggestions`
克隆项目：
```bash
$ git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```
在`~/.zshrc`中配置：
```
plugins=(其他插件 zsh-autosuggestions)
```
最后使所有的配置生效：
```bash
$ source ~/.zshrc
```
## 使用nvm安装node
### 安装nvm
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | zsh
```
安装后需要重启一下terminal。

### 安装node
```bash
$ nvm install 12
```
## 其他必要配置
### 修改时区  
输入以下命令选择时区：
```bash
$ tzselect
```

更改系统时区： 
```bash
$ cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```
或者：
```bash
$ sudo timedatectl set-timezone 'Asia/Shanghai'
```
### 设置静态ip地址并在boot时连接网络  
首先静止network manager自启动:
```
$ sudo systemctl stop network manager
$ sudo systemctl disable network manager
```
使用以下命令来打开`/etc/network/interfaces`：
```
$ sudo vim /etc/network/interfaces
```
修改`/etc/network/interfaces`来配置网络：
```
auto eth0 # 自动配置 eth0 接口
iface eth0 inet static # 设置静态ip模式
gateway 192.168.110.1  # 设置网关
netmask 255.255.255.0 # 设置子网掩码
address 192.168.110.199  # 设置本设备ip地址
dns-nameservers 192.168.110.1 # 设置dns服务器，一般直接设置为网关ip即可
```
如果是wifi连接，需要如下配置：
```
auto wlan0
iface wlan0 inet static
wpa-ssid ssid-name # 此处将ssid-name换成自己的wifi名字
wpa-psk password # 此处将password换成自己的wifi密码
gateway 192.168.110.1
netmask 255.255.255.0
address 192.168.110.199
dns-nameservers 192.168.110.1
```
测试 eth0是否设置成功：
```
$ sudo ifdown eth0 && sudo ifup -v eth0
```
测试wlan0是否设置成功：
```
$ sudo ifdown wlan0 && sudo ifup -v wlan0
```
到此处网络已经设置完毕，在开机时会直接连接网络，可重启香橙派进行测试。