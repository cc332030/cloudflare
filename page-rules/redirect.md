
# 重定向

## https

重定向所有域名及子域名的 80 端口请求到 443

setting

    Always Use HTTPS

rule：

    *c332030.com:80/*

## forwarding 

重定向 http[s]://www.c332030.com -> https://c332030.com

setting

    Forwarding URL 301

rule

    www.c332030.com/*
    https://c332030.com/$1
