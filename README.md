# Angular2-SFS
Angular 2 project - Start from scratch

## Installation Step by Step
- Install Node.js

Go to [Node website](https://nodejs.org/en/)

- Install npm

Open command prompt

```
$ npm install npm -g
```

- Install angular-cli

A simple CLI for scaffolding Angular 2 projects
```
$ npm install -g angular-cli
```

- Install json-server ([source](https://github.com/typicode/json-server))

Full fake REST API
```
$ npm install -g json-server
```
## Usage

- Clone or Download the project

- Install dependencies
```
$ cd my-project
$ npm install
```

- Open first command prompt

a) for dev build
```
$ cd my-project
$ ng server
```

b) for prod build
```
$ cd my-project
$ ng build --prod
```
instead for AoT compilation:
```
$ ng build --prod --aot
```

Install http-server ([source](https://github.com/indexzero/http-server))

A command-line http server
```
$ npm install -g http-server
```
then 

```
$ cd my-project\dist
http-server
```

- Open second command prompt
```
$ cd my-project\fake_db
$ json-server --watch db.json
```

- Go to localhost

a) for dev build: [localhost:4200](http://localhost:4200/)

b) for prod build: [localhost:8080](http://localhost:8080/)

## Features

- made following [Angular 2 Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
- component, service, directive, pipe
- Shared and Core Modules
- RxJS Observable
- include 3rd-party JS library
- Lazy Loading
- JiT and AoT Compilation
- Animations
- [Webpack](https://webpack.github.io/)
- [Normalize](https://necolas.github.io/normalize.css/)
- [Angular 2 Bootstrap](https://github.com/ng-bootstrap/ng-bootstrap)
- [Angular 2 i18n](https://github.com/ocombe/ng2-translate)
- [Angular 2 Codelyzer](https://github.com/mgechev/codelyzer)
- NO unit/integration test has been developed.

## Conclusion

This is just a simple example, I hope this will help you to understand better Angular 2.
