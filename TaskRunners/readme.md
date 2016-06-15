# PokéApp - A task runner demonstration

## What?
This is a simple webapp showcasing why we are using JS task runners, and the differences between Gulp and Grunt.
It uses the must-have [Pokéapi](https://pokeapi.co/) to fetch Pokémon data and show it.

## Usage
Clone (or download) the repo, and run the following commands:
npm install
bower install
(if bower fails, run: npm install -g bower, then restart the CMD)

Try running Gulp and Grunt. If any of them fails, do the following:
npm install -g gulp
npm install -g grunt
npm install -g grunt-cli
Then restart the CMD.

Build the site with your favorite task runner:
grunt build OR
gulp build

Then launch it using:
node server.js

Visit:
localhost:3000 to browse the site.

## API
The following tasks are exposed both via Grunt and Gulp:
- clean: deletes artifacts and intermediary files
- lint: runs a linter (JSHint) on the JS source files
- compile: JS and CSS minification, HTML useref and dist folder creation
- karma: fires up a Karma test server using Jasmine and Chrome to run the unit tests in the project
- watch: monitors file changes and triggers the compile job
- build: triggers the build process