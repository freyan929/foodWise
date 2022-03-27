package com.Food;

public class Food {
	
	private String name;
	
	private String purchaseDate;
	
	private String expiryDate;

	
	/**
	 * @return the expiryDate
	 */
	public String getExpiryDate() {
		return expiryDate;
	}

	/**
	 * @param expiryDate the expiryDate to set
	 */
	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}

	public Food(String name, String purchaseDate, String expiryData) {
		this.name = name;
		this.purchaseDate = purchaseDate;
		this.expiryDate = expiryData;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}


	public String getPurchaseDate() {
		return purchaseDate;
	}

	
	
	
	
	

}
