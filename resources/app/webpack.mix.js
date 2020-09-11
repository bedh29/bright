let mix = require('laravel-mix');
const glob = require('glob');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

var bower = './bower_components/';
var node = './node_modules/';
var resources = './resources/';
var public = './public/';
var theme = 'resources/themes/tabler/';

mix.babel(
    glob.sync(resources + 'js/*.js').concat(glob.sync(resources + 'js/*/*.js')),
    'public/js/app.js');

mix.babel(
    glob.sync('vendor/sankar/laravel-karla/resources/assets/js/*.js')
        .concat(glob.sync(
            'vendor/sankar/laravel-karla/resources/assets/js/*/*.js')),
    'public/js/karla.js');

mix.styles(
    glob.sync('resources/css/*.css').concat(glob.sync('resources/css/*/*.css')),
    'public/css/assets.css');

// Bower Scripts
mix.scripts(
    [
      node + 'jquery/dist/jquery.min.js',
      node + 'popper.js/dist/umd/popper.min.js',
      node + 'bootstrap/dist/js/bootstrap.min.js',
      bower + 'nprogress/nprogress.js',
      bower + 'jquery-pjax/jquery.pjax.js',
      bower + 'moment/min/moment.min.js',
      bower + 'noty/lib/noty.min.js',
    ],
    public + 'js/static.js');

mix.options({processCssUrls: false});

// Bower Styles
mix.styles(
    [bower + 'nprogress/nprogress.css', bower + 'animate.css/animate.min.css'],
    public + 'css/static.css');


mix.sass(theme + 'assets/scss/app.scss', public + 'css');

if (mix.inProduction()) {
  mix.version();
}
