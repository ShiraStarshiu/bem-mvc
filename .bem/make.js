"use strict";

//process.env.YENV = 'production';
process.env.XJST_ASYNCIFY = 'yes';

require('bem-environ/lib/nodes');

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,

    bundlesLevelsRegexp: /^.+?\.bundles$/,

    libraries: [
        'bem-core @ v1',
        'bem-controls @ v2',
        'bem-pr @ v0.1'
    ]

});


MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'test.js',
            'test.js+browser.js+bemhtml',
            'browser.js+bemhtml',
            'css',
            'ie.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'html'
        ];
    },

    'create-js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {

        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);

    },

    'create-test.js-optimizer-node': function(tech, sourceNode, bundleNode) {

        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);

    },

    'create-browser.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {

        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);

    }

});
