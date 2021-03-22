# Meat - Angular App
Application developed in Angular for Restaurants

## Table of Content
- [Meat - Angular App](#meat---angular-app)
  - [Table of Content](#table-of-content)
  - [Screenshots](#screenshots)
  - [General info](#general-info)
    - [Email Regex](#email-regex)
    - [Number Regex](#number-regex)
  - [Technologies and dependencies](#technologies-and-dependencies)
  - [Setup](#setup)
  - [Author](#author)
  - [License and copyright](#license-and-copyright)
  - [Acknowledgments](#acknowledgments)

## Screenshots
![](/src/assets/img/meat_app_image.PNG)

## General info
Application featuring Angular 4,5,6. Firstly using Angular 4 and then updated to 5 and 6.

RegExp used in Forms Validation
### Email Regex

`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

### Number Regex

`/^[0-9]*$/`

## Technologies and dependencies
```
"dependencies": {
    "@angular/animations": "6.0.0",
    "@angular/common": "6.0.0",
    "@angular/compiler": "6.0.0",
    "@angular/core": "6.0.0",
    "@angular/forms": "6.0.0",
    "@angular/platform-browser": "6.0.0",
    "@angular/platform-browser-dynamic": "6.0.0",
    "@angular/platform-server": "6.0.0",
    "@angular/router": "6.0.0",
    "admin-lte": "2.3.11",
    "core-js": "2.5.4",
    "font-awesome": "4.7.0",
    "intl": "1.2.5",
    "jquery": "3.1.1",
    "reflect-metadata": "0.1.10",
    "rxjs": "6.0.0",
    "rxjs-compat": "6.0.0",
    "ts-helpers": "1.1.2",
    "web-animations-js": "2.2.5",
    "zone.js": "0.8.26",
    "ajv": "6.0.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "0.6.0",
    "@angular/compiler-cli": "6.0.0",
    "@angular/cli": "6.0.0",
    "@angular/language-service": "6.0.0",
    "@types/jasmine": "2.8.6",
    "@types/jasminewd2": "2.0.3",
    "@types/node": "8.9.4",
    "@types/express": "4.0.37",
    "@types/jsonwebtoken": "7.2.3",
    "codelyzer": "4.2.1",
    "jasmine-core": "2.99.1",
    "jasmine-spec-reporter": "4.2.1",
    "karma": "1.7.1",
    "karma-chrome-launcher": "2.2.0",
    "karma-coverage-istanbul-reporter": "1.4.2",
    "karma-jasmine": "1.1.1",
    "karma-jasmine-html-reporter": "0.2.2",
    "protractor": "5.3.0",
    "ts-node": "5.0.1",
    "tslint": "5.9.1",
    "json-server": "0.12.0",
    "jsonwebtoken": "7.4.1",
    "typescript": "2.7.2",
    "webdriver-manager": "12.0.6"
  }
```

## Setup
**_Frontend_**\
Cloning repository:\
`git clone https://github.com/Breno-do-val/meat-app.git`

Installing dependencies:\
`npm install`

In the project directory, you can run:\
`npm start || ng serve`\

Runs the app in the development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

**_Backend_**\
Installing Json-server:\
`npm install -g json-server`

Running the server:\
`nodemon --watch backend backend/dist/server.js`

**_Note_**
It's demanded to allow the browser fully access the backend,\
by typing `https:localhost:3001` on the browser and allowing it in advanced config.

## Author
Breno Ribeiro do Val - Following the instructions provided.

## License and copyright
MIT.
All images used on the app are from freepik.com.

## Acknowledgments
Thanks to [Tarso Bessa](https://www.linkedin.com/in/tarsobessa/) who provided this course.
