package com.power.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONValue;

import com.power.dbconnection.DbConnection;

public class DAOClass {

	@SuppressWarnings({ "static-access", "unchecked", "deprecation" })
	public static String getRAP() throws ClassNotFoundException, SQLException {
		Map json = new HashMap();
		List list = new ArrayList();
		Connection con = null;

		DbConnection dbConnection = new DbConnection();
		String selectQuery = "select DATE_OF_ISSUE  from REPT_AIR_PRY_HY1 where DATE_OF_ISSUE between '2017-03-16 10:10:10' and '2017-03-17 10:10:10';";
		con = (Connection) dbConnection.getConnection();

		PreparedStatement st = (PreparedStatement) con.prepareStatement(selectQuery);
		ResultSet rs = (ResultSet) st.executeQuery();
		if (rs != null) {
			try {
				ResultSetMetaData metaData = (ResultSetMetaData) rs.getMetaData();
				while (rs.next()) {
					Map<String, Object> columnMap = new HashMap<String, Object>();
					for (int columnIndex = 1; columnIndex <= metaData.getColumnCount(); columnIndex++) {
						if (rs.getString(metaData.getColumnName(columnIndex)) != null)
							columnMap.put(metaData.getColumnLabel(columnIndex),
									rs.getString(metaData.getColumnName(columnIndex)));
						else
							columnMap.put(metaData.getColumnLabel(columnIndex), "");
					}
					list.add(columnMap);
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					con.close();
				} catch (Exception e) {
				}
			}
			json.put("data", list);
		}
		return JSONValue.toJSONString(json);
	}

	@SuppressWarnings({ "static-access", "unchecked" })
	public static String getRAS() throws ClassNotFoundException, SQLException {
		Map json = new HashMap();
		List list = new ArrayList();
		Connection con = null;

		DbConnection dbConnection = new DbConnection();
		String selectQuery = "select * from REPT_AIR_SEC_HY1 where DEPARTURE_DATE between '2017-03-16' and '2017-03-17';";
		con = dbConnection.getConnection();

		PreparedStatement st = (PreparedStatement) con.prepareStatement(selectQuery);
		ResultSet rs = (ResultSet) st.executeQuery();
		if (rs != null) {
			try {
				ResultSetMetaData metaData = (ResultSetMetaData) rs.getMetaData();
				while (rs.next()) {
					Map<String, Object> columnMap = new HashMap<String, Object>();
					for (int columnIndex = 1; columnIndex <= metaData.getColumnCount(); columnIndex++) {
						if (rs.getString(metaData.getColumnName(columnIndex)) != null)
							columnMap.put(metaData.getColumnLabel(columnIndex),
									rs.getString(metaData.getColumnName(columnIndex)));
						else
							columnMap.put(metaData.getColumnLabel(columnIndex), "");
					}
					list.add(columnMap);
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					con.close();
				} catch (Exception e) {
				}
			}
			json.put("data", list);
		}
		return JSONValue.toJSONString(json);
	}

	@SuppressWarnings({ "static-access", "unchecked" })
	public static String getRA() throws ClassNotFoundException, SQLException {
		Map json = new HashMap();
		List list = new ArrayList();
		Connection con = null;

		DbConnection dbConnection = new DbConnection();
		String selectQuery = "select DATE_OF_ISSUE from REPT_AIR_PRY_HY1 where DATE_OF_ISSUE between '2017-03-16 10:10:10' and '2017-03-17 10:10:10';";
		con = dbConnection.getConnection();

		PreparedStatement st = (PreparedStatement) con.prepareStatement(selectQuery);
		ResultSet rs = (ResultSet) st.executeQuery();
		if (rs != null) {
			try {
				ResultSetMetaData metaData = (ResultSetMetaData) rs.getMetaData();
				while (rs.next()) {
					Map<String, Object> columnMap = new HashMap<String, Object>();
					for (int columnIndex = 1; columnIndex <= metaData.getColumnCount(); columnIndex++) {
						if (rs.getString(metaData.getColumnName(columnIndex)) != null)
							columnMap.put(metaData.getColumnLabel(columnIndex),
									rs.getString(metaData.getColumnName(columnIndex)));
						else
							columnMap.put(metaData.getColumnLabel(columnIndex), "");
					}
					list.add(columnMap);
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					con.close();
				} catch (Exception e) {
					/* ignored */ }
			}
			json.put("data", list);
		}
		return JSONValue.toJSONString(json);
	}

	@SuppressWarnings({ "static-access", "unchecked", "deprecation" })
	public static String getRA1() throws ClassNotFoundException, SQLException {
		Map json = new HashMap();
		List list = new ArrayList();
		Connection con = null;

		DbConnection dbConnection = new DbConnection();
		String selectQuery = "select DATE_OF_ISSUE from REPT_AIR_PRY_HY1 where DATE_OF_ISSUE between '2009-10-10 10:10:10' and '2009-10-12 10:10:10';";
		con = dbConnection.getConnection();
		// PreparedStatement st = ()dbConnection.getUserDataConnection(campus);
		// Statement st = (Statement)
		// getSqlConnectionOfAnalysed().createStatement();
		PreparedStatement st = (PreparedStatement) con.prepareStatement(selectQuery);
		ResultSet rs = (ResultSet) st.executeQuery();
		if (rs != null) {
			try {
				ResultSetMetaData metaData = (ResultSetMetaData) rs.getMetaData();
				while (rs.next()) {
					Map<String, Object> columnMap = new HashMap<String, Object>();
					for (int columnIndex = 1; columnIndex <= metaData.getColumnCount(); columnIndex++) {
						if (rs.getString(metaData.getColumnName(columnIndex)) != null)
							columnMap.put(metaData.getColumnLabel(columnIndex),
									rs.getString(metaData.getColumnName(columnIndex)));
						else
							columnMap.put(metaData.getColumnLabel(columnIndex), "");
					}
					list.add(columnMap);
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					con.close();
				} catch (Exception e) {
					/* ignored */ }
			}
			json.put("data", list);
		}
		return JSONValue.toJSONString(json);
	}

	@SuppressWarnings({ "static-access", "unchecked", "deprecation" })
	public static String getData() throws ClassNotFoundException, SQLException {
		Map json = new HashMap();
		List list = new ArrayList();
		Connection con = null;

		DbConnection dbConnection = new DbConnection();
		String selectQuery = "select RAS.PASSENGER_FIRST_NAME,RAS.AIRLINE_PNR_NO,RAS.ORIGIN,RAS.DESTINATION,RAS.DOC_SEQ_NO,CLL.lat,CLL.lng from  REPT_AIR_SEC_HY1 as RAS inner join corp_lat_lng as CLL on RAS.DESTINATION=CLL.CODE limit 1000;";
		con = (Connection) dbConnection.getConnection();

		PreparedStatement st = (PreparedStatement) con.prepareStatement(selectQuery);
		ResultSet rs = (ResultSet) st.executeQuery();
		if (rs != null) {
			try {
				ResultSetMetaData metaData = (ResultSetMetaData) rs.getMetaData();
				while (rs.next()) {
					Map<String, Object> columnMap = new HashMap<String, Object>();
					for (int columnIndex = 1; columnIndex <= metaData.getColumnCount(); columnIndex++) {
						if (rs.getString(metaData.getColumnName(columnIndex)) != null)
							columnMap.put(metaData.getColumnLabel(columnIndex),
									rs.getString(metaData.getColumnName(columnIndex)));
						else
							columnMap.put(metaData.getColumnLabel(columnIndex), "");
					}
					list.add(columnMap);
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				try {
					con.close();
				} catch (Exception e) {
				}
			}
			json.put("data", list);
		}
		return JSONValue.toJSONString(json);
	}

}
