# foodWise
Diamond Hacks 2022 Proj

## Inspiration
Food waste is a $408 billion dollar problem in the United States, with a staggering 40% of food produced going uneaten every year (1). What's more, wasted food has environmental consequences, emitting as much greenhouse gas as 32.5 million vehicles (2).

In order to prevent how much food consumers waste, we created FoodWise.

(1) https://www.feedingamerica.org/sites/default/files/2021-03/National%20Projections%20Brief_3.9.2021_0.pdf
(2) https://www.worldwildlife.org/stories/fight-climate-change-by-preventing-food-waste

## What it does

At its core, FoodWise allows users to enter items they purchase into a list by either manual input or by taking a picture of the product with expiration date. If users upload an image of an item like a bunch of bananas, which doesn't have an expiration date label, the app automatically estimates when it'd be thrown out and has an algorithm to predict how long the food item can last. As food items approach their expiration date, users will receive a text message via Twilio alerting them of items that are expiring soon. It will also offer suggestions like putting food in the freezer and blending them into soups or shakes, recipes that use a combination of food items either in inventory or are expiring soon, and alerts that a local food pantry is looking for a food item users have.

The app also doubles as a meal planner and grocery list by providing an overview of the items user has along with anticipated expiration date, suggesting recipes for the week to optimize how items are being used, and offering a way to keep track of your grocery list. 

The inventory list updates by removing anything expired, and users can also manually remove items by indicating that they have been used. Because the app already tracks users's inventory and has historic data on what user typically buys, when one staple item expires or is used, the app automatically adds it to the grocery list as something to buy. Additionally, if there re are food items user buys in general but more ad hoc as opposed to regularly, the app will suggest buying the item using template info based on previous data to save time and make it more convenient. That way, users can plan ahead and only buy what they need.

## How we built it

We built this project using Django, Twilio, React Native, Javascript, CSS, GitHub.

## Challenges we ran into

A 24-hour hack is a tall order to make our product vision happen! Additionally, there were some hurdles trying to connect the frontend with the backend.
(@Satyam2003#7531) I was all new to back end and that too with python, I learned the syntax as well as learned about django and how to store data in just 24 hrs even though I wasn't able to make it the way I wanted it to be even after creating a table where we will store the data I faced some issues which I was not able to solve so I again started with scratch.
(@nairfreya) Though I had some experience with ReactJS, HTML, and CSS, I had never before used react-native to build a mobile application; figuring out how the mobile app simulator worked and trying to delegate changes for iOS was a great learning curve. In particular, some challenges included rendering an image as a background, developing multiple screens for the app, creating onPress button transitions in which element margins were _ not _ visible, and using flex properties to ensure that everything fit correctly on screen. Though we had brainstormed elements of user-centric design to include in our app, such as one outstanding button denoted by a larger color or bigger size than other elements, I found these design components difficult to bring to life in the front-end prototype.

## Accomplishments that we're proud of

We were able to explore new technologies to stretch our own learning. Python Django was something we wanted to create more projects with, and both Twilio and React-Native were new to us - so this was a very exploratory hack, and we made it work!

## What we learned

A lot about design via design thinking, actually! We thought about how food waste happens in the first place and what specific problems we're actually solving along with why users might use this app in the first place. 
How the back-end server runs, it looks nice to see a front end website with beautiful designs but being new to programming I was wondering how these things work and this time I learned how data stores in the back-end and how it looks like 
## What's next for FoodWise

We'd like to hook up our app to Internet of Thing devices like the fridge to allow app to take stock of what's available in inventory. Additionally, we'd create a garden that users might tend to and provide perks like in-game adds or donation to a nonprofit for visiting news on food waste similar to TikTok in order to have users come back, regularly check the app, and keep food waste on top of mind. For the environmentally conscious, we'd calculate how much they've saved in CO2 emissions.
