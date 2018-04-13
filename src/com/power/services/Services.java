package com.power.services;


import java.sql.SQLException;

//import java.util.Base64;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONException;
import org.json.JSONObject;

import com.power.dao.DAOClass;
@Path("/")
public class Services{
	

	@GET
	@Path("/test")
	public String test() {
		return "a";
	}

	@SuppressWarnings("static-access")
	@GET
	@Path("/getRAP")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.TEXT_HTML, MediaType.TEXT_PLAIN })
	@Produces({ MediaType.APPLICATION_JSON, MediaType.TEXT_HTML, MediaType.TEXT_PLAIN })
	public Response getRAP() throws ClassNotFoundException, JSONException, SQLException {
		DAOClass dao = new DAOClass();
	
		JSONObject jObject = new JSONObject();
		String data = dao.getRAP();
		System.out.println("data--->"+data.toString());
		jObject.put("data", data.toString());
		return Response.status(200).entity(jObject.toString()).build();
	}
	@SuppressWarnings("static-access")
	@GET
	@Path("/getRAS")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.TEXT_HTML, MediaType.TEXT_PLAIN })
	@Produces({ MediaType.APPLICATION_JSON, MediaType.TEXT_HTML, MediaType.TEXT_PLAIN })
	public Response getRAS() throws ClassNotFoundException,JSONException, SQLException {
		DAOClass dao = new DAOClass();
		
		
		
		JSONObject jObject = new JSONObject();
		String data = dao.getRAS();
		System.out.println("data--->"+data.toString());
		jObject.put("data", data.toString());
		return Response.status(200).entity(jObject.toString()).build();
	}
	
	@SuppressWarnings("static-access")
	@GET
	@Path("/getRA")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.TEXT_HTML, MediaType.TEXT_PLAIN })
	@Produces({ MediaType.APPLICATION_JSON, MediaType.TEXT_HTML, MediaType.TEXT_PLAIN })
	public Response getRA() throws ClassNotFoundException, JSONException, SQLException {
		DAOClass dao = new DAOClass();
		
	
		JSONObject jObject = new JSONObject();
		
		String data = dao.getRA();
		
		System.out.println("data--->"+data.toString());
		jObject.put("data", data.toString());
		
		return Response.status(200).entity(jObject.toString()).build();
	}
	
	@SuppressWarnings("static-access")
	@GET
	@Path("/getData")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.TEXT_HTML, MediaType.TEXT_PLAIN })
	@Produces({ MediaType.APPLICATION_JSON, MediaType.TEXT_HTML, MediaType.TEXT_PLAIN })
	public Response getData() throws ClassNotFoundException, JSONException, SQLException {
		DAOClass dao = new DAOClass();

		JSONObject jObject = new JSONObject();

		String data = dao.getData();
		
		System.out.println("data--->"+data.toString());
		jObject.put("data", data.toString());
		
		return Response.status(200).entity(jObject.toString()).build();
	}

}

