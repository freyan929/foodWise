package Demo;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

import javax.transaction.xa.XAException;

import com.Food.Food;
import com.twilio.SendSms;
import com.twilio.Twilio;
import com.io.*;
import com.twilio.exception.ApiException;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class Demo {
	


	public static final String ACCOUNT_SID = "ACd72f7c296416c095dbe42941f0ec7f9f";
	public static final String AUTH_TOKEN = "27cb3b8e5f9821b21b8a26c70c423023";
	
	public static String getCurrentDate() {
		Date date = new Date();
	    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
	    String str = formatter.format(date);
	    return str;
	}
	
	public static void sendSms(String text) {
		System.out.println("SENDING");
		Twilio.init(ACCOUNT_SID,AUTH_TOKEN);
		
		try {
		    Message message = Message.creator(
		        new PhoneNumber("+19197465800"),  // To number
		        new PhoneNumber("+18166755561"),  // From number
		        text                    // SMS body
		    ).create();

		    System.out.println(message.getSid());
		} catch (final ApiException e) {
		    System.err.println(e);
		}
		
	}

	
	
	public static void finalDate(ArrayList<Food> foods) {
		
		String currentDate = getCurrentDate().trim(); //27/03/2022
//		Food currentFood = foods.get(0);
//		sendSms("The " + currentFood.getName() + " you purchased on " + currentFood.getPurchaseDate() + " overriped. Good Job if you didn't waste it.");
		
//		currentFood = foods.get(1);
//		sendSms("The " + currentFood.getName() + " you purchased on " + currentFood.getPurchaseDate() + " will expire in 3 days. You may want to use them in the next two days, freeze them, or give them to a neighbor or someone in need.");

//		
//		currentFood = foods.get(2);
//		sendSms("The " + currentFood.getName() + " you purchased on " + currentFood.getPurchaseDate() + " will overripe soon. You may want to add them in your smoothies or make straweberry bread.");
		
		
//		currentFood = foods.get(3);
//		sendSms("Hey! A local organization near you is looking for canned foods: https://massachusetts.salvationarmy.org/. Consider making a drop off - they could use the " + currentFood.getName() + " you purchased on " + currentFood.getPurchaseDate() + " f you don't plan to. \r\n");
		
		for (int i = 0; i < foods.size(); i++) {
			Food currentFood = foods.get(i);
			
			
			String currentExpiryDate = currentFood.getExpiryDate().trim();
			System.out.println(currentDate + " " + currentExpiryDate);
			if (currentDate.equals(currentExpiryDate)) {
				System.out.println("True\n");
				sendSms("The " + currentFood.getName() + " you purchased on " + currentFood.getPurchaseDate() + " Expired. Good Job if you didn't waste it.");
				foods.remove(i);
			} else if(currentFood.getExpiryDate().equals("30/03/2022")) {
				sendSms("The " + currentFood.getName() + " you purchased on " + currentFood.getPurchaseDate() + " will expire in 3 days. You may want to use them in the next two days, freeze them, or give them to a neighbor or someone in need.");
			}
			
		}
		
	}
	


		
//		public static void main(String[] args) {
//			String text = "HI";
			
	
		

	
	public static void main(String[] args) {
		
		FoodReader x = new FoodReader();
//		System.out.println("Hello World\n");
		
		
		try {
			ArrayList<Food> foods = x.readFoods("test-files/foods.txt");
//			for (int i = 0; i < foods.size(); i++) {
//				System.out.println(foods.get(i).getName());
//				System.out.println(foods.get(i).getPurchaseDate());
//				System.out.println(foods.get(i).getExpiryDate());
//				
//			}
			finalDate(foods);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		
		
	}

}
