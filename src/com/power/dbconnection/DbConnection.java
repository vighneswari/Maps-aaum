package com.power.dbconnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnection {
	public static Connection getConnection() throws SQLException {

		Connection con = null;
	
		String URL = "jdbc:mysql://192.168.1.108:3306/corpdb";

		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			 con=(Connection)DriverManager.getConnection(URL, "root", "aaum");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;

	}

}
