package com.io;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

import com.Food.Food;



public class FoodReader {
	
	public ArrayList<Food> readFoods(String fileName) throws FileNotFoundException {
		Scanner fileReader = new Scanner(new FileInputStream(fileName)); // Create a file scanner to read the file
		ArrayList<Food> foods = new ArrayList<Food>();
		while (fileReader.hasNextLine()) { // While we have more lines in the file
			try {
				
				Food food = readFood(fileReader.nextLine());
				foods.add(food);
				
			} catch (IllegalArgumentException e) {
				
			}
		}
		fileReader.close();
		return foods;
		
		
	}
	
	private static Food readFood(String nextLine) {
		Scanner scnr = new Scanner(nextLine);
		scnr.useDelimiter(",");
		Food food = null;
		
		try {
			String name = scnr.next();
			String purchaseDate = scnr.next();
			String expiryDate = scnr.next();
			food = new Food(name, purchaseDate, expiryDate);
			scnr.close();
			return food;
		} catch (IllegalArgumentException e) {
			scnr.close();
			throw new IllegalArgumentException();
		}
		
	}

}
