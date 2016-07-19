'use strict';

var IndexModel = require('../models/index');
var fs = require('fs');
var fileService = require('../services/FileService');

module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {

        res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');

    });

    router.get('/test',function(req, res){
        res.send('<h1>Hello from test</h1>');
    });

    router.get('/api/files/all', function(req, res){

        fileService.getFiles('ftp').then(function(result){
            res.send(result);
        });

    });

};
