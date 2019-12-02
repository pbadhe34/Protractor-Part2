     
 function TestController($scope,$rootScope) {
    	 //add name in this specific GreetController scope 
    	console.log("GreetController function");
        $scope.name = 'Sunil';
       
        $rootScope.user = "data1";
console.error("User value defined for in rootScope is  "+$rootScope.user);

    }
     
    function ListController($scope,$rootScope) {
    	
    	 //add name in this specific ListContrller scope 
         $scope.name = 'Nana';    	
        
    	//alert("Name value in ListController scope is "+$scope.name);

        console.warn("User value available in rootScope is  "+$rootScope.user);

        console.info("ListContrller function");

        //add names in this specific ListContrller scope 
        $scope.names = ['Vijay', 'Baba', 'Mohan'];







    }