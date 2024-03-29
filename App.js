import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainPage } from "./components/MainPage";
import { Login } from "./components/Login";
import { ArtistPage } from "./components/ArtistPage";
import AllArtists from "./components/AllArtists";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  NavigationBar.setBackgroundColorAsync("#0B132B");

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#0B132B"/>
      <Stack.Navigator
        initialRouteName="Přihlášení"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Hlavní stránka"
          component={MainPage}
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="Přihlášení"
          component={Login}
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="Detail"
          component={ArtistPage}
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen
          name="Uloženo"
          component={AllArtists}
          options={{ presentation: "transparentModal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
