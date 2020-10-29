---
title: "协同 nginx-proxy 与 letsencrypt-nginx-proxy-companion 来使用 docker 部署 web 应用"
date: "2020-09-08"
---
一般的 web 应用在部署时可能会使用 nginx 来进行反向代理，使用 [nginx-proxy](https://github.com/nginx-proxy/nginx-proxy) 可以非常简单的基于 docker 来反向代理 web 应用。部署的 web 应用理所应当配置域名证书上https，而 [letsencrypt-nginx-proxy-companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) 可以配合上述的 nginx-proxy 来使用， 自动获取 let's encrypt的免费域名证书并定期更新(let's encrypt 的免费域名证书需要每 3 个月续期一次)。本文基于 nginx-proxy 与 letsencrypt-nginx-proxy-companion 来部署一个简单的 react 应用。

## 你可以直接去浏览官方文档
[letsencrypt-nginx-proxy-companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) 的文档关于怎么使用 nginx-proxy 与 letsencrypt-nginx-proxy-companion 来部署一个应用已经写得非常清楚了。

## 前提条件
你的服务器需要安装 docker，如果没有安装可以戳: https://docs.docker.com/get-docker/

## nginx-proxy
在 terminal 中输入如下命令来运行 nginx-proxy 容器: 
```bash
docker run --detach \
    --name nginx-proxy \
    --publish 80:80 \
    --publish 443:443 \
    --volume /etc/nginx/certs \
    --volume /etc/nginx/vhost.d \
    --volume /usr/share/nginx/html \
    --volume /var/run/docker.sock:/tmp/docker.sock:ro \
    jwilder/nginx-proxy
```
##  letsencrypt-nginx-proxy-companion
在 terminal 中输入如下命令来运行 letsencrypt-nginx-proxy-companion 容器: 
```bash
docker run --detach \
    --name nginx-proxy-letsencrypt \
    --volumes-from nginx-proxy \
    --volume /var/run/docker.sock:/var/run/docker.sock:ro \
    --env "DEFAULT_EMAIL=mail@yourdomain.tld" \
    jrcs/letsencrypt-nginx-proxy-companion
```
请将`mail@yourdomain.tld`替换成自己的 email。
