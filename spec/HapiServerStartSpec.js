/**
 * Created by codeforcoffee on 3/13/16.
 */
'use strict';
describe('DotEnv KeyValuePair Tests', function () {
    var app;
    beforeEach(function() {
        app = require('../app');
    });
    it('should start and be hosted', function() {
        //console.log(app.info);
        expect(app.info.uri).toBeTruthy();
    });
    it('should be listening on an open port', function() {
        expect(app.info.port).toBeTruthy();
    });
    it('should be be provided a process id', function() {
        expect(app.info.id).toBeTruthy();
    });
    afterEach(function() {
        app.stop();
    });
});