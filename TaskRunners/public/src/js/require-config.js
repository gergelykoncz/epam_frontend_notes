// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
	"urlArgs": "bust=1",
	"paths": {
		"baseUrl": "./",
		"jquery": "../../vendor/jquery/dist/jquery",
		"pubSub": "./pubSub",

		"main": "./main",
		"pokemon": "./pokemon",
		"pokeCache": "./pokeCache",
		"pokeService": "./pokeService",
		"windowScroll": "./windowScroll"
	}
});

// Load the main app module to start the app
requirejs(["main"]);