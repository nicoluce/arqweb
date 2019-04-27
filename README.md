# TP 1

#Requirements
1. Go language
2. Angular Framework

## How to run

Running locally requires MongoDB.

1. [Install MongoDB](https://docs.mongodb.com/manual/administration/install-community/) and start server.

2. Install project dependencies:

```bash
#Current dir: src/api
$ dep ensure

```

3. Run Go backend application (port 8080):

```bash
#Current dir: src/api
$ go run main.go

```

2. Run Angular frontend application (port 4200)

```bash
#Current dir: src/ui
$ ng serve

```
