# clickhouseds-cubejs-driver

```
$ cat docker-compose.yml
version: '2.2'

services:
  cube:
    image: cubejs/cube:v0.33.23
    user: "1000:1000"
    ports:
      - 4000:4000
      - 15432:15432
    environment:
      - CUBEJS_DEV_MODE=true
    volumes:
      - ./cube:/cube/conf
```

```
$ mkdir ./cube/node_modules
$ cd ./cube/node_modules/
$ git clone https://github.com/hsp8712/clickhouseds-cubejs-driver.git
```

```
$ vim ./cube/.env
CUBEJS_DB_TYPE=clickhouseds
CUBEJS_DB_HOST=****
CUBEJS_DB_PORT=8443
CUBEJS_DB_NAME=imdb
CUBEJS_DB_USER=default
CUBEJS_DB_PASS=***
CUBEJS_DB_SSL=true
```
