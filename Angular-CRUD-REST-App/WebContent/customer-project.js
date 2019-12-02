//Define module name and dependency modules 
var moduleApp = angular.module('update-project', [ 'ngResource' ]);
moduleApp.factory('Customer',
		function($resource) {
			// load the data from server side url and catgorize by id key	
	         //Generate Customer model
	        
				/* var Customer = $resource('customerData.json/:id',
				{
			          update: { method: 'PUT' }
			     }
			   );*/
	
	       //Default actions and methods added by $resource
	       /*var Customer = $resource('customers/:id',{},
		    		{ 'get':    {method:'GET'},
	 	    	      'save':   {method:'POST'},
		    	     'query':  {method:'GET', isArray:false},
		    	     'remove': {method:'DELETE'},		    	    
		    	     'update': {method:'PUT'},
		    	     'delete': {method:'DELETE'}
		    		}*/
	 
	  //Generate Customer model
	   var Customer = $resource('customers/:id',{},
				{
			          'update': { method: 'PUT' }//minimum config
			     }
	       );
	   
	        //Customize generated  Customer model
		    Customer.prototype.updateData = function (currentCustomerObj) {
		    	return Customer.update({ id: this.id },angular.extend({}, this, { id: this.id }), currentCustomerObj);
                 
		    };	     

			return Customer;

});
 
         