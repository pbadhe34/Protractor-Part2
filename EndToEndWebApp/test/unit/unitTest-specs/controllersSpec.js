'use strict';

/* jasmine specs for controllers go here */
describe('PhoneModule controllers', function() {   


  beforeEach(module('phoneModule'));   


  describe('PhoneListCtrl test', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      scope = $rootScope.$new();
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
    }));


    it('should create "phones" model with 2 phones fetched from backend', function() {
      expect(scope.phones).toEqual([]);
      $httpBackend.flush();

     expect(angular.equals(scope.phones,[{name: 'Nexus S'}, {name: 'Motorola DROID'}])).toBe(true); 
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });


  describe('PhoneDetailCtrl test', function(){
    var scope, $httpBackend, ctrl,
        xyzPhoneData = function() {
          return {
            name: 'phone xyz',
                images: ['image/url1.png', 'image/url2.png']
          }
        };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
       console.log('PhoneDetailCtrl beforeEach init' );
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());        

      $routeParams.phoneId = 'xyz';
      scope = $rootScope.$new();      
      ctrl = $controller(PhoneDetailCtrl, {$scope: scope});
    }));


    /*
    it('should fetch phone detail', function() {
       //console.log(scope.phone);      

       expect(angular.equals(scope.phone,{})).toBe(true);     
       
       $httpBackend.flush();
       expect(scope.phone.name).toBe('phone xyz');

       //expect(angular.equals(scope.phone,xyzPhoneData())).toBe(true);       
    });
     */
  });
});
