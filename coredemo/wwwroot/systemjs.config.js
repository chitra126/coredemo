/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            // angular bundles
            'app': 'app', // 'dist',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            'md2': 'npm:md2/bundles',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/material': 'npm:@angular/material/bundles',
            // other libraries
            'rxjs': 'npm:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {

            rxjs: {
                defaultExtension: 'js'
            },
            '.': {
                defaultExtension: 'js'
            },
            'md2': {
                format: 'cjs',
                main: 'md2.umd.js',
                defaultExtension: 'js'
            },
            '@angular/material': { main: 'material.umd.js', defaultExtension: 'js' },
            'ngx-youtube-player': {
                main: 'bundles/ngx-youtube-player.umd.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);