### InstantBootstrap
InstantBootstrap is a quick and easy way to start creating bootstrap themes using LESS, SASS, GRUNT, and BOWER.

### Little to No Configuration
Instant Bootstrap is rediculously easy to set up and start using.
Fisrt step is to download, or clone the InstantBootstrap Git Repository.
```
$ git clone https://github.com/DrkDevil/InstantBootstrap 
```
Once downloaded navigate to the root of your projects folder where you downloaded InstantBootstrap and run $ npm install
This will download all the dependencies needed to use InstantBootstrap and run your GRUNT Tasks.

### GRUNT TASKS
```
$ GRUNT Dist-test 
```
This will run JSHINT

```
$ GRUNT default
```
This will run Uglify on your js, will read your less files and minify them into your selected distribution folder.

```
$ GRUNT dist-less
```
This will read your less files and minify them into your selected distribution folder.

```
$ GRUNT dist-sass
```
This will read your scss files and minify them into your selected distribution folder.

```
$GRUNT dist-watch
```
This will run the watch command on your less, or sass files as well run browsersync.

###BOWER Files
Navigate to the root of your project and run ```$ BOWER INIT```
I have included a .bowerrc file in the root of InstantBootstrap. Now that BOWER is initiated in your project it will automatically put them in the components foler under source in the root of your project.
