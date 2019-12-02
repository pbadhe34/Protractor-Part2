package com.services;

import org.codehaus.jackson.annotate.JsonCreator;
import org.codehaus.jackson.annotate.JsonProperty;

public class Customer_ID {
	private String _id;
	
	@JsonCreator
	   public Customer_ID(@JsonProperty("id") String  _id )
			{
		    System.out.println("CustomerID.json Customer()"); 
	        this._id = _id;
	         
	   } 
	
	public Customer_ID()
	{
		_id= "Default";
	}

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}
	
	public String toString()
	   {
	      return "{_id:" + _id +"}";
	   }
}
