package com.services;
 
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@Path("/customers")
public class CustomerService
{
    private static Map<String, Customer> customerDB;
	//private static Map<Customer_ID, Customer> customerDB;
    
    private static AtomicInteger idCounter;
     
   
   
   static
   {
	   System.out.println("The initilaization for customerDB");
	  // customerDB = new ConcurrentHashMap<Customer_ID, Customer>();
	   customerDB = new ConcurrentHashMap<String, Customer>();
	   idCounter = new AtomicInteger();
	   Customer cust = new Customer();
	   cust.setCity("Pune");
	   cust.setCountry("India");
	   cust.setFirstName("Asoka");
	   
	  /* Customer_ID id1 = new Customer_ID();
	   id1.set_id(""+idCount);*/
	   
	   int idCount = idCounter.incrementAndGet();
	   
	   
	   cust.setId(""+idCount);
	   
	   cust.setLastName("Gupta");
	   cust.setState("magadha");
	   cust.setStreet("Shanti Street");
	   cust.setZip("1222");
	   
	   Customer cust2 = new Customer();
	   cust2.setCity("Indore");
	   cust2.setCountry("Brazil");
	   cust2.setFirstName("Baba");
	   
	   
	   /*Customer_ID id2 = new Customer_ID();
	   id2.set_id("2");
	   d2.set_id(""+idCount);
	   */
	   
	   idCount = idCounter.incrementAndGet();   
	 
	   
	   cust2.setId(""+idCount);	   
	   cust2.setLastName("Vaishya");
	   cust2.setState("MP");
	   cust2.setStreet("M G Road");
	   cust2.setZip("3456");
	   //add customer objects to map;
	   customerDB.put("1", cust);
	   customerDB.put("2", cust2);
	   
   }
   

   public CustomerService()
   {
	   System.out.println("CustomerService.CustomerService()");
	   
   }
   
   @GET     
   @Produces({"application/json"})    
  // public Map getAllCustomers() 
   /*
    * The returned map doesnot work with array  data filtering on client side.And also with
    * AngularJS resource we have to add isArray:false congiguration for query method
    */
   public List getAllCustomers()
   {
	  System.out.println("getAllCustomers from json service");
	  int size = customerDB.size();
	  System.out.println("The number of initial customer entries are "+size);	  
	  System.out.println("The initial customer entries are "+customerDB);	  
	  
	  List<Customer>customerList = new ArrayList<Customer>(customerDB.values());
	  System.out.println("The customer list is  "+customerList);  
       
	  
	  /*
	    * The returned list works with array  data filtering on client side.And also with
	    * AngularJS resource we DoNOT have to add isArray:false congiguration for query method
	    */
	  return customerList;
   }
   @GET   
   @Path("/{id}")
   @Produces({"application/json"})    
   public Customer getCustomer(@PathParam("id") String id)
   {
	  System.out.println("getCustomer for json "+id);
	  int size = customerDB.size();
	  System.out.println("The customer entries are "+size);
	  Customer customer = customerDB.get(id);	
	  if (customer == null)
      {
        // throw new WebApplicationException(Response.Status.NOT_FOUND);
		  System.out.println("The Customer NOT identified as  "+customer);
	      
		  return null;
      }
	  System.out.println("\nCustomerResource.getCustomer() in json for "+customer.getId());
     
      
      System.out.println("The Customer identified as  "+customer.getFirstName());
      
      return customer;
   }
   

   
   @POST
   @Path("/")	 
   @Consumes("application/json")
   @Produces({"application/json"})    
   //public Response createCustomerInJSON(Customer customer)
    // //Here the angularJS on client side expects the same object as json in the response output
   public Customer createCustomerInJSON(Customer customer)
   {
	  System.out.println("CustomerResource.createCustomer() post from json "+customer);
     // customer.setId(""+cunter.incrementAndGet());
      //customer.setId(""+(++counter));
	  int idCount = idCounter.incrementAndGet();
	  
	  String cust_id = ""+idCount;
	  customer.setId(cust_id);
      customerDB.put(cust_id, customer);
      
      Customer custObj = customerDB.get(cust_id);
      System.out.println("The ciustomer in map is  "+custObj);
      System.out.println("Created customer " + cust_id);
      String result = "Added customer " + cust_id;
      int size = customerDB.size();
	  System.out.println("The customer entries in poste are "+size);
	   
      //return Response.status(201).entity(cust_id).build();
	  return customer;
      
   }

   @PUT
   @Path("/{id}")
   @Consumes("application/json")
   @Produces({"application/json"}) 
   //public Response updateCustomerInJSON(@PathParam("id") String id,Customer customer)
   //Here the angularJS on client side expects the same object as json in the respoinse output
	
   public Customer updateCustomerInJSON(@PathParam("id") String id,Customer customer)
   {
	  System.out.println("CustomerResource.updateCustomer() put in json "+customer);
      
	  String cust_id = customer.getId();
	  System.out.println("Updating the customer with id = "+id);
	  Customer custObj = customerDB.get(cust_id);
      System.out.println("The customer in map is  "+custObj);
      if(custObj==null)
    	  return null;
      
      customerDB.put(cust_id, customer);
     
      System.out.println("Updated customer " + cust_id);
      String result = "Updated customer " + cust_id;
      int size = customerDB.size();
	  System.out.println("The customer entries in update are "+size);     
	  
     // return Response.status(201).entity(result).build();
	  //Here the angularJS on client side expects the same object as json in the respoinse output
	  return customer;
      
   }

   
   @DELETE
   @Path("/{id}")   
   //Here the angularJS on client side expects the same object as json in the respoinse output
   //public Response removeCustomerInJSON(@PathParam("id") String id)

   public Customer removeCustomerInJSON(@PathParam("id") String id)
   {
	  System.out.println("CustomerResource.removeCustomerInJSON()  in json for "+id);     
	  
	  Customer custObj = customerDB.get(id);
      System.out.println("The customer in map is  "+custObj);
      if(custObj==null)
    	  return null;
      
      customerDB.remove(id);    
      
      String result = "Removed customer " + id;
      int size = customerDB.size();
	  System.out.println("The customer entries after  delete  are "+size);
     // return Response.status(201).entity(result).build();
	  
	  return custObj;
      
   }
   @GET   
   @Path("{id}")
   @Produces("text/plain")
   public String getCustomerString(@PathParam("id") String id)
   {
	  System.out.println("\nCustomerResource.getCustomerString() in plain text for  "+id);
	  Customer cust = getCustomer(id);
	  System.out.println("The customer in plain text is  "+cust);
	  if(cust==null)
		  return null;
	  else
		  return cust.toString();
   }
}
