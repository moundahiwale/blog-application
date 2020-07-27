# BlogApplication

A simple blog application developed using Angular 10 where a user can view blog posts, add and edit comments.    
The project demonstrates following key features of Angular:  
Components, services, routing, resolvers, pipes, directives to avoid code duplication (e.g. [ng-container](./src/app/components/posts/posts-list/posts-list.component.html)), forms module to create template driven forms, code separation best practices, using Angular Material for theming and creating UI components, etc.  

## Work In Progress   
1. Accessibility: some basic keyboard navigation and screen reader testing has been performed and a detailed review is needed.  
2. Writing tests  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).  

## Developer notes  
**Error handling:** The existing code uses error handler provided in the subscribe method. A better alternative is to define a global error interceptor so that every subscribe method doesn't have to be bloated with the error handling logic.  
Also the errors are being logged to console, for PROD apps something like TrackJS is preferred for error logging and Snackbar for displaying errors to the user on the UI.    

