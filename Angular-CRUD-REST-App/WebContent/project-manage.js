//Define module name and dependency modules     
angular.module('manage-customers', ['update-project','ngRoute']).
    config(function($routeProvider) {
    $routeProvider.
    when('/', {controller:listCustomers, templateUrl:'listCustomers.html'}).   
     when('/customers/:id', {controller:editCustomer, templateUrl:'customerDetails.html'}).
     when('/customers', {controller:CreateNewCustomer, templateUrl:'customerDetails.html'}).  
    /* when('/customers/:id', {controller:deleteCustomer,templateUrl:'listCustomers.html'}).  */
     otherwise({redirectTo:'/'});
    });
     
     //list controller
    function listCustomers($scope, $location,Customer,$window) {
        $scope.customers = Customer.query();          
        
      //Function within listCustomers scope
        $scope.deleteCustomer=function(custObj) {
       	 console.log("Delete Customer for  "+custObj.id);
       	 var flag = $window.confirm("Are you sure to delete customer with id  "+custObj.id);    	 
       	 if(flag)
       		 Customer.remove({id: custObj.id});   
         	 $location.path('/#');
           }
    }
     
     /*
      * The error 'unexpected token u at object parse' means it is 
      * expecting json response
      */
    function CreateNewCustomer($scope, $location, Customer) {
    	
    	//Function within CreateNewCustomer scope
    $scope.addCustomer = function() {
	    	Customer.save($scope.customer);	   
	    	//$scope.customer.$save();	         
	        $location.path('/');
	       
	    }   
    }//end of CreateNewCustomer controller 
     
   //The editCustomer controller
    function editCustomer($scope, $location, $routeParams, Customer) {
            var self = this;   
		    Customer.get({id: $routeParams.id}, function(customer) {
		    self.original = customer;
		    $scope.customer = new Customer(self.original);
		    });
     
		    //Functions within editCustomer scope
		    $scope.isClean = function() {
		      var flag =   angular.equals(self.original, $scope.customer);      
		      return flag;
		    }        
		     
		    $scope.updateCustomer = function() {	   		    	      
		    	      $scope.customer.updateData();	    	      
			          $location.path('/');		  
		         }    	 
      
		    
         
    }//end of editCustomer controller
    
     