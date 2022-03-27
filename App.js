import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Alert,
  Text, View, TouchableHighlight, TouchableWithoutFeedback, 
  Button, TouchableOpacity, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const image = () => (
  <Image source = {require('./assets/foods.jpeg')}></Image>
)

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Landing" component={Landing} />
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
        <TouchableHighlight onPress={() => navigation.navigate('Landing')}>
          <View style={{width: 300, borderRadius: 20, height: 40, backgroundColor: "#758773"}}>
            <Text style={styles.textContinue}> CLICK TO CONTINUE </Text>
          </View>
        </TouchableHighlight>
        <StatusBar style="auto" />
      </SafeAreaView>
  );
};

const handlePress = () => Alert.alert("!WARNING!", "Your yogurt will expire in less than 24 hours",
    {text: "Show me more about this item", onPress: () => console.log("show more")},
    {text: "Where can I donate this to", onPress: () => console.log("donation sites")},
    {text: "What recipes can this be used in?", onPress: () => console.log("recipes")},
  );

const Landing = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableHighlight onPress={handlePress}>
          <View style={styles.landingCircles}>
            <Text style={styles.textLanding}> View Expiry Calendar </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={handlePress}>
          <View style={styles.landingCircles}>
            <Text style={styles.textLanding}> Scan New Food Item </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={handlePress}>
          <View style={styles.landingCircles}>
            <Text style={styles.textLanding}> What's FoodWise Today? </Text>
          </View>
        </TouchableHighlight>
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
