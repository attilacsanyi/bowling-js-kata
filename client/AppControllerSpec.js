describe('App Controller', function() {

    // First, we load the app's module
    beforeEach(module('bowling')); 

    var $appController, $scope;

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $scope = _$rootScope_.$new();

        appController =  _$controller_('AppController as app', {
            '$scope': $scope
        });
    }));

    it('should define title of "Bowling Kata"', function() {
        expect($scope.app.title).toEqual('Bowling Kata');
    });
});