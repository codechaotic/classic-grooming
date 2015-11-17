A careful and experimental rebuild of [classicgrooming.com](http://classicgrooming.com).

### Goal

My goal with this project is to start afresh with several tools I have
become quite fond of, and to rebuild the website for better future maintainability,
a more lightweight but dynamic user experience, and a stronger admin interface. The original site was built using Wordpress. This will be built using Node and Angular.js.

### Setup

1. To get the application up and running, make sure Node and bower are installed.

2. Install dependencies by executing `npm install` followed by `bower install` from
the project directory.

3. Start the application by executing `gulp`. This will start the application and watch the development files for changes.

### Build

Source Files are built using the ever lovely Gulp for task automation. Please see the files in the `tasks/components` directory for details.

### Structure
This is an **Angular.js** application using **Bootstrap**. The files are organized in a feature-first layout inspired by [johnpapa's Angular Styleguide](https://github.com/johnpapa/angular-styleguide). Right now only a couple features have been incorporated for demonstration purposes.

On the **backend**, this application is a very simple server built on Koa.js. The backend is not yet implemented with any detail, but please see my other repository [*sample*](https://github.com/codechaotic/welcome) for a rough idea of what I have in mind.
