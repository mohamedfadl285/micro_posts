# micro_posts

Simple project using standards from ES2015, ES2016 & ES2017. It uses webpack, Babel and webpack-dev-server to compile and serve. also uses [JSON Server](http://github.com) to make fake REST API

## Usage

### Installation

Install the dependencies

```
  $ npm install
```

### Start JSON Server

To serve db.json and get default posts

```
  $ npm run json:server
    or
  $ json-server --watch api/db.json
```

### Serve

To serve in the browser - Runs webpack-dev-server

```
  $ npm start
```

### Build

Compile and build

```
  $ npm run build
```
