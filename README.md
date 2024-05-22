DeliveryDateAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

# NPM References

We have a custom npm feed for Nextime where you can access it directly from the APP project.
If you visit the .npmrc file you will see that we have the @@nextime scope defined there.

Scope will be set as:

`@nextime:registry=https://nextimeai.pkgs.visualstudio.com/_packaging/Nextime/npm/registry/`

This means that, for every package that has the @nextime scope defined, will be referenced to our custom feed.

The feed can be located [here](https://nextimeai.visualstudio.com/Nextime.ai%20DatePicker/_artifacts/feed/Nextime)

To authenticate to it you should use vsts authentication.

### Windows machines

1. Run `npm install -g vsts-npm-auth` in CMD
2. Run `vsts-npm-auth -config .npmrc` where the .npmrc file is located

Detailed explanation can be found [here](https://nextimeai.visualstudio.com/Nextime.ai%20DatePicker/_artifacts/feed/Nextime/connect)

### Others

Detailed explanation for other machines be found [here](https://nextimeai.visualstudio.com/Nextime.ai%20DatePicker/_artifacts/feed/Nextime) in the "Other" secion.

# Change NPM package referenceNextime

For instance, if you want to test Nextime components changes in a controlled environment we have our custom feed that help us through it!

To use the advantage of our custom feed, we can just the reference of the nextime components in the package.json

## Development package

Use the following package for development testing purposes

`{
  ...
      "@nextime/delivery-date": "x.x.x",
  ...
}
`

This package is located in [here](https://nextimeai.visualstudio.com/Nextime.ai%20DatePicker/_artifacts/feed/Nextime/Npm/@nextime%2Fdelivery-date/overview/1.0.51)

## Production package

Use the following package for production

`{
  ...
      "nextime-delivery-date": "x.x.x",
  ...
}
`

This package is located in [here](https://www.npmjs.com/package/nextime-delivery-date)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
