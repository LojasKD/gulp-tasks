'use strict';

const gulp = require('gulp');
const tasks = require('../');

tasks.sass(gulp, {
  src: './fixtures/input.sass',
  dest: './dist',
  minify: true,
  beautifier: true
});