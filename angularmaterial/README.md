# Angularmaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

1. Install/update VSCode
2. Install/update NodeJS
3. npm install -g typescript@2.4.2
4. npm uninstall -g @angular/cli		//uninstalls the currently installed regular version of angular CLI
5. npm uninstall -g angular-cli			//uninstalls the legacy version of angular CLI
5. npm cache clean --force				//make sure we start with a clean slate for nodejs/npm
6. npm install -g @angular/cli@1.5.3	//the basic tool for creating fast angular apps
7. npm install -g yarn					//is is a dependency used by angular-cli for caching downloaded packages
8.1. ng new angularmaterial				//create a new ang-cli project, navigate into the newly created folder and run the app
8.2. cd angularmaterial
8.3. ng serve
9.1. npm install --save @angular/material @angular/cdk	//the development (dev) dependencies for Angular Material
9.2. npm install --save @angular/animations
9.3. npm install --save hammerjs
10. ng g m shared\material --dry-run
11. navigate to material.angular.io     //find tons of sample UI components