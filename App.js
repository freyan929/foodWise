import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Alert,
  Text, View, TouchableHighlight, TouchableWithoutFeedback, 
  Button, TouchableOpacity, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const cameraImage = () => (
  <Image source = {require('./assets/camera.png')}></Image>
)

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="DonateMap" component={DonateMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ( { navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.image} source={require('./assets/foods.jpeg')}/>
        <View style={{margin: 20, width: 210, height: 30, backgroundColor: "#758773"}}>
            <Text style={styles.textSignIn}> Welcome back, Klaus! </Text>
          </View>
        <TouchableHighlight onPress={() => navigation.navigate('Dashboard')}>
          <View style={{width: 300, borderRadius: 20, height: 40, backgroundColor: "#758773"}}>
            <Text style={styles.textContinue}> CLICK TO CONTINUE </Text>
          </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
        <ImageBackground style={{width: 370, height: 50, margin: 10}} source={require('./assets/progress.png')}/>
        <View style={{width: 300, height: 40, backgroundColor: "#758773"}}>
            <Text style={{color: "#fff", flex: 1, fontSize: 12, textAlign: "center"}}> You've almost reached your goal of preventing </Text>
            <Text style={{color: "#fff", flex: 1, fontSize: 12, textAlign: "center"}}> 60 lbs of waste with foodWise this week! </Text>
          </View>
      </SafeAreaView>
  );
};

const manualScan = () =>
  Alert.prompt("Fill out these fields", "Item name, amount", text => console.log(text),
);

const red = () =>
  Alert.alert("Expired 3/2", "(1) Ranch Dressing, (2) Heads of Lettuce"
);

const green = () =>
  Alert.alert("Over Three Days Left!", "(8 OZ) cherries, 5 Vidalia Onions"
);

const handlePress = () =>
    Alert.alert("!WARNING!", "Your (1) Eggplant and (3) Tomatoes will expire in less than 24 hours. View recipe or donation options."
  );

const gratin = () =>
    Alert.alert("Zucchini, Eggplant, Tomato Gratin", "Proceed for recipe"
  );

  const stew = () =>
    Alert.alert("Marrakesh Eggplant Tomato Stew", "Proceed for recipe"
  );

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{width: 250, height: 50, borderRadius: 10, margin:20, backgroundColor: "#42403d"}}>
            <Text style={styles.textLanding}> DASHBOARD </Text>
          </View>
        <TouchableHighlight onPress={() => navigation.navigate('Calendar')}>
          <View style={styles.landingCircles}>
            <Text style={styles.textLanding}> View Expiry Calendar </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Scan')}>
          <View style={styles.landingCircles}>
            <Text style={styles.textLanding}> Scan New Food Item </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Recipes')}>
          <View style={styles.landingCircles}>
            <Text style={styles.textLanding}> What's FoodWise Today? </Text>
          </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Calendar = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{width: 370, height: 300, margin: 10}} source={require('./assets/calendar.png')}/>
        <TouchableHighlight onPress={red}>
          <View style={{width: 300, height: 50, backgroundColor: "#758773"}}>
            <Text style={styles.textLanding}> Expired Items </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={handlePress}>
          <View style={{width: 300, height: 50,backgroundColor: "#758773", margin: 10}}>
            <Text style={styles.textLanding}> About to Expire </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={green}>
          <View style={{width: 300, height: 50,backgroundColor: "#758773", margin: 10}}>
            <Text style={styles.textLanding}> >3 Days Left </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('DonateMap')}>
          <View style={{width: 350, height: 80,backgroundColor: "#bd2b57", margin: 10}}>
            <Text style={styles.donate}> I WANT TO DONATE </Text>
          </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const DonateMap = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{width: 370, height: 300, margin: 10}} source={{uri: 'https://www.feedingamerica.org/themes/custom/ts_feeding_america/images/food-bank-map.jpg'}}/>
        <TouchableHighlight onPress={()=> console.log("get someone here!")}>
        <View style={{width: 300, height: 80, margin: 10, backgroundColor: "#758773"}}>
            <Text style={styles.textLanding}> Request Delivery to a Food Bank or Community Kitchen </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=> console.log("woo")}>
        <View style={{width: 300, height: 50, margin: 10, backgroundColor: "#758773"}}>
            <Text style={styles.textLanding}> I can get there myself! </Text>
          </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
};


const Scan = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{width: 200, height: 300, margin: 10}} source={require('./assets/camera.png')}/>
        <TouchableHighlight onPress={manualScan}>
          <View style={{width: 300, height: 50, backgroundColor: "#758773"}}>
            <Text style={styles.textLanding}> Manually Enter Item </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={{width: 300, height: 50,backgroundColor: "#758773", margin: 10}}>
            <Text style={styles.textLanding}> View food gallery </Text>
          </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Recipes = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableHighlight>
          <View style={{width: 500, height: 180,backgroundColor: "#758773", flexDirection: "column", justifyContent: "flex-start"}}>
            <Text style={styles.textLanding}> Hmmm... based on </Text>
            <Text style={styles.items} onPress={handlePress}> the items </Text>
            <Text style={styles.textLanding}> that will expire the soonest, </Text>
            <Text style={styles.textLanding}> these are your recommended recipes. </Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={gratin}>
          <ImageBackground style={{width: 300, height: 200, margin: 10}} source={require('./assets/gratin.jpeg')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={stew}>
        <ImageBackground style={{width: 300, height: 200, margin: 10}} source={require('./assets/stew.jpeg')}/>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1dbc8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSignIn: {
    color: "#f5f0e4",
    flex: 1,
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
  },
  landingCircles: {
    padding: 20,
    margin: 20,
    borderRadius: 150,
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#758773",
  },
  textLanding: {
    color: "#c1dbc8",
    flex: 1,
    fontSize: 20,
    padding: 10,
    textAlign: "center",
  },
  donate: {
    color: "#fff",
    flex: 1,
    fontSize: 35,
    padding: 10,
    textAlign: "center",
  },
  items: {
    color: "#ffb03b",
    flex: 1,
    fontSize: 20,
    padding: 10,
    textAlign: "center",
  },
  textContinue: {
    color: "#fff",
    flex: 1,
    fontSize: 25,
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: 400,
    height: 800,
    flex: 1,
    justifyContent: "center",
  }
});
