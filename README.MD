# Bask - CSS Boilerplate

Bask is a responsive CSS boilerplate built in SASS, with a focus on consistency and utility classes.

https://andreamorosi.github.io/bask/


## Table of contents

[Getting started](#getting-started)

[Documentation](#documentation)

[Built with](#built-with)

[Browser support](#browser-support)

[Copyright and license](#copyright-and-license)

[TODOs](#todos)


## Getting started

Bask is a ready to use CSS boilerplate: to use just take the compiled css file (bask.min.css) from the build folder and include it in your project, or get it from https://raw.githubusercontent.com/andreamorosi/bask/main/build/bask.min.css

However, if you wanna tinker with it, edit some properties and such just dig into the assets/css folder and start experimenting: the main entry point is the main.scss file, where all other SASS files are imported.

One of the most important SASS files is the _variables.scss, where the $u is located: this is my unit size (default 8px) which I use pretty much everywhere in Bask to keep everything in check, such as spacing and elements' sizes.

### Documentation

https://andreamorosi.github.io/bask/


## Built with

SASS & Webpack


## Copyright and license

Code copyright 2022 Andrea Morosi. MIT


## Browser support

Bask focuses mostly on the latest versions of Chrome, Firefox, Edge and Safari. Browser support is greatly enhanced by [Autoprefixer](#https://github.com/postcss/autoprefixer).
